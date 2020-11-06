FROM node:15-alpine

WORKDIR /app

COPY . .

RUN apk update && \
    apk add --update add git && \
    npm install -g nuxt create-nuxt-app typescript ts-node @nuxtjs/axios