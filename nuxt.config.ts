// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: ['@nuxt/eslint'],

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
  }
})
