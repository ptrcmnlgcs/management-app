<template>
  <!-- Form for registration -->
  <div class="form-container">
    <form @submit.prevent="register" class="register-form">
      <!-- Name, email, and password inputs -->
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <!-- Submit button -->
      <button type="submit">Register</button>
    </form>
    <!-- Success message -->
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
  <!-- Link to login page -->
  <div class="login-link">
    <p>If you already have an account, <router-link to="/login">login here</router-link>.</p>
  </div>
</template>

<script>
import axios from '@/axios';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      // Data model for the form inputs
      name: "",
      email: "",
      password: "",
      // Variable to hold the success message
      successMessage: ""
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post("/register", {
          name: this.name,
          email: this.email,
          password: this.password
        });
        // Display alert message
        alert("Registration successful!");
        // Redirect to login page
        const router = useRouter();
        router.push('/');
      } 
      catch (error) {
        console.error("An error occurred:", error);
        if (error.response) {
          console.error('Error details:', error.response.data);
        }
      }
    }
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.register-form input, .register-form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.register-form button {
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}

.success {
  color: green;
}

.login-link {
  margin-top: 20px;
}

.login-link p {
  text-align: center;
}
</style>
