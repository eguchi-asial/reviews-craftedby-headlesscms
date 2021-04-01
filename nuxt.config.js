require('dotenv').config()
const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} = process.env

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'ARE KORE - %s',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'ARE KOREは筆者があれこれ体験・検証した結果をレビューするHeadlessCMS制サイトです。',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'ARE KORE' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      // { hid: 'og:url', property: 'og:url', content: 'https://arekore.' },
      { hid: 'og:title', property: 'og:title', content: 'ARE KORE' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'ARE KOREは筆者があれこれ体験・検証した結果をレビューするHeadlessCMS制サイトです。',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/ga.js',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
  },

  sitemap: {
    hostname: 'https://arekore.web.app/',
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const pathsObjArray = await $content('review').only(['path']).fetch()
      const paths = pathsObjArray.map((p) => p.path)
      // カテゴリー別ページ生成
      let categoriesObjArray = await $content('review')
        .only(['category'])
        .fetch()
      categoriesObjArray = Array.isArray(categoriesObjArray)
        ? categoriesObjArray
        : [categoriesObjArray]
      const uniqueCategories = Array.from(
        new Set(categoriesObjArray.map((category) => category.category).flat())
      ).map((category) => `/review/category/${category}`)
      return [...paths, ...uniqueCategories, '/']
    },
  },
}
