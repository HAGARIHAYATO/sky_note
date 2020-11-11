FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN apk update && \
    apk --update add git && \
    npm install -g ts-node nuxt nuxt-ts typescript create-nuxt-app axios firebase && \
    npm install -D @nuxt/typescript @nuxt/types && \
    npm install --save @nuxtjs/axios @nuxtjs/auth @nuxtjs/dotenv nuxt-property-decorator