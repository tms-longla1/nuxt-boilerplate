// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // routeRules: {
  //   '/api/**': { proxy: `${import.meta.env.VITE_API_URL}/**` }
  // },
  // 1. Core runtime config
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // 2. Source directory config
  srcDir: 'src',
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  // 3. Modules
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@vee-validate/nuxt'],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage'
    }
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'vi', iso: 'vi-VN', name: 'Tiếng Việt', file: 'vi.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: '../src/assets/locales/',
    strategy: 'prefix_except_default'
  },
  // 4. Styling related config
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  typescript: {
    shim: true
  }
})
