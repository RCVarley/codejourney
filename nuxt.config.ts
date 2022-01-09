import { defineNuxtConfig } from 'nuxt3'
import {resolve} from "pathe";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  alias: {
    'styles': resolve(__dirname, './assets/styles'),
    'components': resolve(__dirname, './components'),
  },
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  css: [
    'styles/main.scss',
  ],
})
