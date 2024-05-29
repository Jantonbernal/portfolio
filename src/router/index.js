import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory('/portfolio/'),
  linkExactActiveClass: 'active',
  routes: routes,
})

export default router
