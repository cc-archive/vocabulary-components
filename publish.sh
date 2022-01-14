#!/bin/bash

set -o errexit
set -o errtrace
set -o nounset

trap '_es=${?};
    _lo=${LINENO};
    _co=${BASH_COMMAND};
    echo "${0}: line ${_lo}: \"${_co}\" exited with a status of ${_es}";
    exit ${_es}' ERR

echo "vue-vocabulary: Starting build"
npm run build
echo "vue-vocabulary: Finished build"

echo "vue-vocabulary: Starting publish"
npm publish --access public
