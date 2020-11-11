FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN apk update && \
    apk --update add git && \
    npm install -g ts-node nuxt typescript create-nuxt-app axios && \
    npm install -D @nuxt/typescript && \
    npm install --save @nuxtjs/axios @nuxtjs/auth @nuxtjs/dotenv nuxt-property-decorator