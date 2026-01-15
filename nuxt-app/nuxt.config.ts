// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/i18n'
  ],
  devtools: {
    enabled: false
  },
  css: ['~/assets/css/main.css'],
  i18n: {
    defaultDirection: "ltr",
    defaultLocale: "en",
    prefix_except_default: false,
    locales: [{
        code: 'en',
        name: 'English'
      },{
        code: 'ru',
        name: 'Russian'
      },{
        code: 'uz',
        name: 'Uzbek'
      }
    ]
  },
  routeRules: {
    '/': { prerender: false }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})