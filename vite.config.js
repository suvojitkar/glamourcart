import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cartcomponents',
      filename: 'cartcomponents.js',
      exposes: {
        './Cart': './src/Pages/Cart.jsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    }),
  ],
  build: {
    target: 'esnext',
  },
})
