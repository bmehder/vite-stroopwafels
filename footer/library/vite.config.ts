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
        bundle['style.css'].fileName = 'footer.css'
        bundle['bundle.css'] = bundle['style.css']
        delete bundle['style.css']
      },
    },
  ],
  build: {
    lib: {
      entry: 'src/Footer.svelte',
      formats: ['es'],
      name: 'Footer',
      // fileName: () => 'footer.js',
      fileName: 'footer',
    },
  },
})
