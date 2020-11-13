FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

RUN apk update && \
    apk --update add git && \
    npm install ts-node @types/node nuxt nuxt-ts typescript @nuxt/typescript create-nuxt-app axios firebase @types/firebase

COPY . ./

CMD ["npm","run","dev"]