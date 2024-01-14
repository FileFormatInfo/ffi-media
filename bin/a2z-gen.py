#!/usr/bin/env python3
#
# generate the a.htm to z.htm files
# this is hard to do in Liquid since it has limited array & map support
#

import argparse
import datetime
# NOTE: this is python-frontmatter, not frontmatter
import frontmatter
import os
import pathlib
import re
import sys
import tarfile
import time
from typing import TypeAlias

# a dict of strings to a list of tuples (index, handle)
azIndex = dict()

current_path = os.path.dirname(os.path.abspath(__file__))
target_path = os.path.abspath(os.path.join(current_path, os.pardir, "docs/media"))

parser = argparse.ArgumentParser()
parser.add_argument("-q", "--quiet", help="hide debug messages", default=True, dest='verbose', action="store_false")

args = parser.parse_args()

if args.verbose:
    sys.stdout.write("INFO: a2z-gen check starting at %s\n" % datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S'))

fileCount = 0
errCount = 0
warnCount = 0

handlePattern = re.compile("^[a-z0-9][-.a-z0-9]*[a-z0-9]$")

found_files = pathlib.Path(target_path).glob('*/index.htm')
for fn in sorted(found_files):

    sys.stdout.write("DEBUG: %s\n" % (fn))
    f = open(str(fn))
    fmstr = f.read()
    f.close()

    fileCount += 1

    fm = frontmatter.loads(fmstr)
    sys.stdout.write("DEBUG: %s\n" % (str(fm['title'])))
    if 'handle' not in fm.keys() or len(fm['handle']) == 0:
        sys.stdout.write("ERROR: no handle for %s (%s)\n" % (fn.parts[-2], fn))
        errCount += 1
        continue

    if fm['handle'] != fn.parts[-2]:
        sys.stdout.write("ERROR: mismatch dir=%s metadata=%s (%s)\n" % (fn.parts[-2], fm['handle'], fn))
        errCount += 1

    if not handlePattern.match(fm['handle']):
        sys.stdout.write("ERROR: invalid logohandle '%s' (%s)\n" % (fm['handle'], fn))
        errCount += 1

    if 'title' not in fm.keys() or len(fm['title']) == 0:
        sys.stdout.write("ERROR: no title for %s (%s)\n" % (fn.parts[-2], fn))
        errCount += 1

    for indexEntry in fm['indexEntries']:
        key = indexEntry[0].lower()
        if key < 'a' or key > 'z':
            key = 'other'
        if key not in azIndex.keys():
            azIndex[key] = list()
        azIndex[key].append((indexEntry, fm['handle']))

sys.stdout.write("INFO: %d errors, %d warnings\n" % (errCount, warnCount))

keys = azIndex.keys()
sorted_keys = sorted(keys, key=lambda x: (len(x), x))
for key in sorted_keys:
    titleText = "the letter '%s'" % key.upper() if key != 'other' else 'numbers and symbols'
    sys.stdout.write("DEBUG: %s/%s.htm - %s\n" % (target_path, key, titleText))
    f = open("%s/%s.htm" % (target_path, key), "w")
    f.write("---\n")
    f.write("key: \"%s\"\n" % key)
    f.write("keys: \"%s\"\n" % ",".join(sorted_keys))
    f.write("title: \"Storage media beginning with %s\"\n" % key.upper())
    entries = azIndex[key]
    f.write("entries:\n")
    for entry in sorted(entries, key=lambda x: x[0].upper()):
        f.write("  - text: \"%s\"\n" % entry[0])
        f.write("    handle: \"%s\"\n" % entry[1])
    f.write("---\n")
    f.write("{% include az.html %}\n")
    f.close()

if args.verbose:
    sys.stdout.write("INFO: a2z-gen of %d files complete at %s\n" % (fileCount, datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')))

if errCount > 0:
    sys.exit(1)
