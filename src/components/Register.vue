<template>
  <!-- Form for registration -->
  <div class="form-container">
    <!-- Title for the registration form -->
    <h1>Register</h1>
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
        router.push('/login');
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
/* Styling for the outer form container */
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  animation: fadeIn 1s ease-in-out;
}

/* Keyframes for fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Styling for the registration form layout and appearance */
.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 320px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.register-form:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Shared styling for input fields and register button inside the form */
.register-form input, .register-form button {
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

/* Specific styling for the register button */
.register-form button {
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
}

.register-form button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Styling for the success message */
.success {
  color: green;
  font-weight: bold;
  margin-top: 10px;
  animation: fadeIn 1s ease-in-out;
}

/* Styling for the login link */
.login-link {
  margin-top: 20px;
}

.login-link p {
  color: black;
}

.login-link p a {
  color: #0056b3;
  text-decoration: none;
}

.login-link p a:hover {
  text-decoration: underline;
}
</style>
