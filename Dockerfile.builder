#
# CryptoScanner - client app builder
#  - builds build environment, including node_modules
#  * forces rebuild of node_sass, specifically for build environment
#    -- this is a good rational for containerizing build environments
#
FROM node:latest

ENV PATH $PATH:node_modules/.bin

RUN apt-get update -q

RUN mkdir -p /work
COPY package.json /work

WORKDIR /work

RUN npm install
RUN npm rebuild node-sass --force

EXPOSE  9000

# do not persist code to build image
# builder only, will reference in code on builder run
# otherwise - we would do this
# COPY . /src/app
# CMD [ "npm", "run", "build:prod" ]

# Build run (pulling image from registry)
#   docker run --rm \
#    -v "${PWD}:/work" \
#    "${BUILDER_PATH}" \
#    bash -c "cd /work; npm run build:prod"
