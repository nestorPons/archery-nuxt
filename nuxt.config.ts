import { colors } from '@unocss/preset-mini'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  modules: [ '@unocss/nuxt', 'nuxt-icon'],
  unocss: {
    preflight: true,
    theme: {
      colors: {
        primary: colors.green 
      }
    }
  },
  css: [],
  devtools: { enabled: true }
})
