<!-- ManageUsers.vue -->
<template>
    <div>
      <nav v-if="!isLoginPage && !isRegisterPage">
        <!-- Navigation links -->
      </nav>
      
      <div v-if="isLoggedIn">
        <h1>Manage Users</h1>
        <AddUser /> <!-- Corrected component name -->
        <!-- Additional content for managing users (e.g., user list) can be added here -->
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import AddUser from './AddUser.vue'; // Corrected import name
  
  export default {
    components: {
      AddUser // Register the AddUser component with correct name
    },
    computed: {
      ...mapState(['isLoggedIn']),
      isLoginPage() {
        return this.$route.path === '/login';
      },
      isRegisterPage() {
        return this.$route.path === '/register';
      }
    }
  }
  </script>
  