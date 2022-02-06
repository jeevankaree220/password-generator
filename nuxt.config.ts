import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'path'
import { createCommonJS } from 'mlly'
const { __dirname } = createCommonJS(import.meta.url)


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  buildDir: '_nuxt/',
  build: {
      // publicPath: '_nuxt/dist/',
      // postcss: {
      //   postcssOptions: require('./postcss.config.js'),
      // },
     
      postcss: {
        postcssOptions: require('./postcss.config.js'),
      },
  },
  buildModules: [
    "@nuxtjs/google-fonts",
  ],


  // googleFonts: {
  //   display: "swap",
  //   families: {
  //     Inter: {
  //       wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
  //     }
  //   }
  // },

  hooks: {
    'pages:extend' (pages) {
      pages.push(
        
        {
          name: 'Home Page',
            path: '/',
            file: resolve(__dirname, 'pages/index.vue')
        },
        {
          name: 'Password Generator',
            path: '/create-strong-password',
            file: resolve(__dirname, 'pages/passwordGenerator.vue')
        },
        {
          name: 'Regular Expression Page',
            path: '/:id',
            file: resolve(__dirname, 'pages/index.vue')
        },
       
        {
          name: 'Not Found',
          path: '/:pathMatch(.*)*',
          file: resolve(__dirname, 'pages/404.vue')
        })
    }
  }

  
})