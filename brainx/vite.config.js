import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.js', // Entry point for your React app
        extension: 'src/extension/extension.js', // Entry point for your extension
      },
    },
  },
})
