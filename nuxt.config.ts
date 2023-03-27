// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/ui.scss";',
                },
            },
        },
    },
})
