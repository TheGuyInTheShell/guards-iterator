import { createRouter, createWebHistory, } from 'vue-router';
import routes from './routes';
import { guard } from 'src/guards';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(guard)

export default router