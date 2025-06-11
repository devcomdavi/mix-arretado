import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        cardapio: 'pages/cardapio.html',
        sobre: 'pages/sobre.html'
      }
    }
  }
})