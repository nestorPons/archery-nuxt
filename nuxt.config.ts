import { colors } from '@unocss/preset-mini'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  css: ['~/public/css/main.css'],
  modules: [ '@unocss/nuxt', 'nuxt-icon'],
  unocss: {
    preflight: true,
    theme: {
      colors: {
        primary: colors.green 
      }
    }
  },
  
  devtools: { enabled: true }
})
