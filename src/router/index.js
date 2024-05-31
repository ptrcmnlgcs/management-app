import { createRouter, createWebHistory } from 'vue-router';

import ProductList from './components/ProductList.vue';
import ProductDetails from './components/ProductDetails.vue';
import AddProduct from './components/AddProduct.vue';
import EditProduct from './components/EditProduct.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import ManageUsers from './components/ManageUsers.vue'; // Import the ManageUsers component
import EditUser from './components/EditUser.vue';
import AddUser from './components/AddUser.vue';

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
    meta: { public: true }
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: { public: true }
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: ProductList,
    meta: { public: false }
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    meta: { public: false }
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct,
    meta: { public: false }
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: EditProduct,
    meta: { public: false }
  },
  {
    path: '/manage-users', // Route for managing users
    name: 'ManageUsers',
    component: ManageUsers,
    meta: { public: false }
  },
  {
    path: '/edit-user', // Route for managing users
    name: 'EditUser',
    component: EditUser,
    meta: { public: false }
  },
  {
    path: '/add-user', // Route for managing users
    name: 'AddUser',
    component: AddUser,
    meta: { public: false }
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (!to.meta.public && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
