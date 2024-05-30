<!-- AddUserForm.vue -->
<template>
    <form @submit.prevent="addUser">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Add User</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios'; // Import Axios library
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      async addUser() {
        try {
          // Make a POST request to your backend API endpoint
          const response = await axios.post('/api/users', {
            username: this.username,
            email: this.email,
            password: this.password
          });
          
          // Handle the response if needed
          console.log('User added successfully:', response.data);
          
          // Clear the form fields after successful submission
          this.username = '';
          this.email = '';
          this.password = '';
        } catch (error) {
          console.error('Error adding user:', error);
          // Handle any errors that occur during the API call
        }
      }
    }
  }
  </script>
  