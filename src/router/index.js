import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: routes,
  base: process.env.NODE_ENV === 'production' ? 'portfolio' : '/',
})

export default router
