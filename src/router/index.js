import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: routes,
  base: '/portfolio/',
})

export default router
