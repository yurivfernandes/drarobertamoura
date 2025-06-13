import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  root: '.',
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap']
        }
      }
    },
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      // Permite o acesso ao arquivo .env na raiz do projeto
      allow: ['.']
    }
  },
  optimizeDeps: {
    include: ['gsap']
  },
  // Configurações para variáveis de ambiente
  define: {
    'process.env.GITHUB_TOKEN': JSON.stringify(process.env.GITHUB_TOKEN || '')
  }
})