#!/bin/bash
#
# script to run on localhost
#

set -o errexit
set -o pipefail
set -o nounset

PORT=${1:-4000}

jekyll serve \
	--port ${PORT} \
    --source docs \
    --trace \
    --watch


