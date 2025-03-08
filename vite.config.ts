import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // entry: 'src/main.js',
      entry: resolve(__dirname, "src/main.ts"),
      name: 'VueZoomGallery',
      fileName: "vue-zoom-gallery",
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
