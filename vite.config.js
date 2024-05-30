import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/portfolio/",
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  plugins: [
    vue(),
    VueDevTools(),
    sitemap({
      base: 'https://jantonbernal.github.io/portfolio/#/',
      fileName: 'sitemap.xml',
      exclude: ['/404'], // Rutas que deseas excluir del sitemap
      routes: [
        // Lista las rutas de tu aplicación aquí
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/experience', changefreq: 'weekly', priority: 0.8 },
        { url: '/projects', changefreq: 'weekly', priority: 0.8 },
        { url: '/courses', changefreq: 'weekly', priority: 0.8 },
        { url: '/systems', changefreq: 'weekly', priority: 0.8 },
        { url: '/contact', changefreq: 'weekly', priority: 0.8 },
        // Agrega más rutas según sea necesario
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
