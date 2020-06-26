
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
BASE_DIR="$( cd "$DIR/../" >/dev/null 2>&1 && pwd )"


SRC_DIR=./api/proto/v1
DEST_DIR=./src/api/v1

mkdir -p $DEST_DIR

yarn pbjs \
    --target static-module \
    --wrap commonjs \
    --path ${SRC_DIR} \
    --out ${DEST_DIR}/rpc.js \
    ${SRC_DIR}/**/*.proto

yarn pbts \
    --out ${DEST_DIR}/rpc.d.ts \
    ${DEST_DIR}/rpc.js

DIST_DIR=./dist/api/v1

mkdir -p $DIST_DIR

cp ${DEST_DIR}/rpc.js ${DIST_DIR}/rpc.js
cp ${DEST_DIR}/rpc.d.ts ${DIST_DIR}/rpc.d.ts
