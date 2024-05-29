import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory('/portfolio/'),
  history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'),
  linkExactActiveClass: 'active',
  routes: routes,
})

export default router
