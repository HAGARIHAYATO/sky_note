FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN apk update && \
    apk --update add git && \
    npm install ts-node @types/node nuxt nuxt-ts typescript create-nuxt-app axios firebase @types/firebase && \
    npm install --save @nuxtjs/axios @nuxtjs/auth @nuxtjs/dotenv nuxt-property-decorator @nuxt/typescript @nuxt/types

CMD ["npm","run","dev"]