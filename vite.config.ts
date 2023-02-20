import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from "vite"
import { createSvg } from './src/icons/index'

import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), createSvg('./src/icons/svg/')],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

})
