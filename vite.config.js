import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  server: {
    middlewareMode: false  // Add this
  },
  optimizeDeps: {
    include: ['react', 'react-dom']  // Add this
  }
})