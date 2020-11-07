FROM node:15-alpine

WORKDIR /app

COPY . .

RUN apk update && \
    apk --update add git && \
    npm install -g nuxt create-nuxt-app axios && \
    npm install --save @nuxtjs/axios @nuxtjs/auth @nuxtjs/dotenv