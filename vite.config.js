import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@features': path.resolve(__dirname, './src/features')
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/sxiangtu/' : '/',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
    cors: true
  }
})
