import dotenv from 'dotenv'
import {Auth} from 'nuxtjs__auth'
import {NuxtAxiosInstance} from '@nuxtjs/axios'

dotenv.config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'sky_note',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  srcDir: "./client/",

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  router: {
    middleware: ['auth']
  },


  serverMiddleware: ["~~/server/"],

  telemetry: false,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv'
  ],

  axios: {
  },

  auth: {
    redirect: {
      login: '/session/login',
      logout: '/',
      callback: '/callback',
      home: '/mypage'
    },
    strategies: {
      google: {
        client_id: process.env.GOOGLE_CLIENT_ID,
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

declare module 'vue/types/vue' {
  export interface Vue {
    $auth: Auth
    $axios: NuxtAxiosInstance
  }
}
