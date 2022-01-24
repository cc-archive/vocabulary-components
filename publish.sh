#!/bin/bash

set -o errexit
set -o errtrace
set -o nounset

trap '_es=${?};
    _lo=${LINENO};
    _co=${BASH_COMMAND};
    echo "${0}: line ${_lo}: \"${_co}\" exited with a status of ${_es}";
    exit ${_es}' ERR

echo "vocabulary-components: Deleting contents of dist folder"
rm -rf dist/*

echo "vocabulary-components: Starting build"
npm run build
echo "vocabulary-components: Finished build"

echo "vocabulary-components: Starting publish"
npm publish --access public
