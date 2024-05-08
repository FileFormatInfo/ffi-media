#!/bin/bash
#
# script to build everything
#

set -o errexit
set -o pipefail
set -o nounset

#
# some file generation that is too much for Jekyll
#
bin/a2z-gen.py


bundle exec jekyll build --source docs


