import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    {
      name: 'custom-css-name',
      enforce: 'post',
      generateBundle(outputOptions, bundle) {
        bundle['style.css'].fileName = 'header.css'
        bundle['bundle.css'] = bundle['style.css']
        delete bundle['style.css']
      },
    },
  ],
  build: {
    lib: {
      entry: 'src/Header.svelte',
      formats: ['es'],
      name: 'Header',
      // fileName: () => 'header.js',
      fileName: 'header',
    },
  },
})
