FROM node:20-alpine

WORKDIR /app

RUN set -eux \
    & apk add \
        --no-cache \
        yarn

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD [ "yarn", "start" ]
