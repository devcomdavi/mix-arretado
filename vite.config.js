import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base:'/mix-arretado/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        cardapio: './mix-arretado/pages/cardapio.html',
        sobre: './mix-arretado/pages/sobre.html',
      },
    },
  },
});