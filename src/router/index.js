import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import HomePage from '../components/HomePage.vue';

import AddProduct from '../components/AddProduct.vue';
import EditProduct from '../components/EditProduct.vue';
import ProductList from '../components/ProductList.vue';
import UserManagement from '../components/UserManagement.vue';

const routes = [
  { path: '/', component: LoginPage, name: 'login' },
  { path: '/register', component: RegisterPage, name: 'register' },
  {
    path: '/home', component: HomePage, name: 'home',
    beforeEnter: (to, from, next) => {
      // check if user is logged in and redirect to login page if not
      if (localStorage.getItem('token')) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      console.log('logout');
      localStorage.removeItem('token');
      next('/');
    }
  },
  { path: '/products', name: 'ProductList', component: ProductList },
  { path: '/add-product', name: 'AddProduct', component: AddProduct },
  { path: '/edit-product/:id', name: 'EditProduct', component: EditProduct, props: true },
  { path: '/user-management', name: 'UserManagement', component: UserManagement },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
