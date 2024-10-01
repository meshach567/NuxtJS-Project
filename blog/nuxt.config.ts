// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Blog',
      titleTemplate: '%s | built by ekene',
      htmlAttrs: {
        lang: 'en'
      },

      meta: [
        {
          charset: 'utf-8',
        },

        {
          name:"viewport",  content:"width=device-width, initial-scale=1"
        }

      ],
      link: [
          { rel: 'preconnect', href: 'https://fonts.googleapis.com/' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap' },
          { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin: "anonymous"}
      ],
      script: [
        {
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDb1YzwR4cWj2-fAO7EOEFe9AqTC5ed7N8&libraries=places&callback=Function.prototype',
        },
        {
          src: 'https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js',
        },
        {
          src: '/js/vendors.js',
          type: 'text/javascript'
        },
        {
          src: '/js/main.js',
        },
      ],
    },

  },
  $development: {
    app: {
      head: {
        title: 'DEV'
      }
    }
  },

  alias: {
    assets: "/<rootDir>/assets",
  },

  css: [
    '~/assets/css/vendors.css',
    '~/assets/css/main.css',

  ],

  devtools: { enabled: true },

  modules: [
    '@vueuse/nuxt',
  ],

  compatibilityDate: '2024-10-01'
})