// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    css: ['~/public/css/main.less'],
    modules: ['nuxt-windicss', 'nuxt-icon', '@nuxt/ui', '@nuxtjs/google-fonts'],
    ui: {
        global: true,
        icons: []
      },
    
    devtools: {
        enabled: true
    }
})