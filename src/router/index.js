import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory('/portfolio/'),
  history: createWebHashHistory(),
  // history: createWebHistory(process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'),
  linkExactActiveClass: 'active',
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada, utiliza esa posición
    if (savedPosition) {
      return savedPosition;
    } else {
      // De lo contrario, scrolla al inicio de la página
      return { top: 0 };
    }
  },
})

export default router
