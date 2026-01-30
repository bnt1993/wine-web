import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // 👉 Quan trọng nhất để GitHub Pages không trắng web
    base: '/wine-web/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    // (nếu sau này dùng env thì vẫn OK)
    define: {
      'process.env': env,
    },
  }
})
