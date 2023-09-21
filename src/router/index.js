import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Shop from '../views/Shop.vue';
import Product from '../components/Product.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/product-details/:id',
      name: 'ProductDetails',
      component: Product
    }
  ]
})

export default router
