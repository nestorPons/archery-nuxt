import {
    colors
} from '@unocss/preset-mini'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    css: ['~/public/css/main.less'],
    modules: ['@unocss/nuxt', 'nuxt-icon', '@nuxt/ui', '@nuxtjs/google-fonts'],
    ui: {
        global: true,
        icons: []
      },
    unocss: {
        preflight: true,
        theme: {
            colors: {
                primary: colors.green
            }
        }
    },

    devtools: {
        enabled: true
    },
})