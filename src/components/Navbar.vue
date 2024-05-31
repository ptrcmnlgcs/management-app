<template>
  <!-- Navigation bar -->
  <nav v-if="!isLoginPage && !isRegisterPage">
    <!-- Links for different routes -->
    <router-link to="/add-product" v-if="isLoggedIn">Add Product</router-link> |
    <router-link to="/product-list" v-if="isLoggedIn">Product List</router-link> |
    <router-link to="/manage-users" v-if="isLoggedIn">Manage Users</router-link> |
    <router-link to="/login" v-if="!isLoggedIn">Login</router-link> |
    <router-link to="/register" v-if="!isLoggedIn">Register</router-link> |
    <!-- Logout button -->
    <a href="#" @click="logout" v-if="isLoggedIn">Logout</a>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    // Using Vuex helpers to map the 'isLoggedIn' state to a computed property
    ...mapState(['isLoggedIn']),
    // Check if the current route is the login page
    isLoginPage() {
      return this.$route.path === '/';
    },
    // Check if the current route is the register page
    isRegisterPage() {
      return this.$route.path === '/register';
    }
  },
  methods: {
    // Using Vuex helpers to map the 'logout' action to a method
    ...mapActions(['logout'])
  }
}
</script>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
}

nav a {
  color: #007bff;
  text-decoration: none;
  margin: 0 10px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
