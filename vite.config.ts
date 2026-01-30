import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
<<<<<<< HEAD
  // Load env đúng cách cho Vite
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // 👉 CỰC KỲ QUAN TRỌNG cho GitHub Pages
=======
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // 👉 Quan trọng nhất để GitHub Pages không trắng web
>>>>>>> 465b5f9fcc6d5871f3e6240b47c3af8cb635dbdd
    base: '/wine-web/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

<<<<<<< HEAD
    // Inject API KEY khi build
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

=======
>>>>>>> 465b5f9fcc6d5871f3e6240b47c3af8cb635dbdd
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
<<<<<<< HEAD
=======

    // (nếu sau này dùng env thì vẫn OK)
    define: {
      'process.env': env,
    },
>>>>>>> 465b5f9fcc6d5871f3e6240b47c3af8cb635dbdd
  }
})
