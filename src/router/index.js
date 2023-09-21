import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Shop from '../views/Shop.vue';
import Product from '../components/Product.vue';
import About from '../views/AboutUs.vue';
import Contact from '../views/ContactUs.vue';

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
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/product-details/:id',
      name: 'ProductDetails',
      component: Product
    }
  ]
})

export default router
