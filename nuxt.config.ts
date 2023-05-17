// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          link: [
            {
              rel: "stylesheet",
              href: "",
              crossorigin: "anonymous",
              body: true
            },
          ],
        },
      },
    modules: [
        '@nuxtjs/tailwindcss',
    ]
})
