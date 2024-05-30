<template>
  <!-- Container for the login form -->
  <div class="form-container">
    <!-- Define the form for user login -->
    <form @submit.prevent="login" class="login-form">
      <!-- Input field for the user's email address -->
      <input type="email" v-model="email" placeholder="Email" required />
      <!-- Error message for incorrect credentials -->
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <!-- Input field for the user's password -->
      <input type="password" v-model="password" placeholder="Password" required />
      <!-- Login button to submit the form -->
      <button type="submit">Login</button>
    </form>
    <!-- Link to register page -->
    <div class="register-link">
      <p>If you don't have an account, <router-link to="/register">register here</router-link>.</p>
    </div>
  </div>
</template>

<script>
// Import axios instance for HTTP requests
import axios from '@/axios'; 

export default {
  data() {
    return {
      // Initialize form input data
      email: "",
      password: "",
      // Variable to hold the error message
      errorMessage: ""
    };
  },
  methods: {
    // Asynchronous method to handle the login process
    async login() {
      try {
        // Send user credentials to the server for validation
        const response = await axios.post("/login", {
          email: this.email,
          password: this.password
        });

        // Check for the authentication token in the server response
        if (response.data.token) {
          // Store the token in local storage for session management
          localStorage.setItem('token', response.data.token);

          // Update the store's state to reflect user's logged-in status
          this.$store.commit('LOGIN');

          // Navigate to the home page after successful login
          this.$router.push('/');
        }
      } catch (error) {
        // Display error message if login credentials do not match
        this.errorMessage = "Invalid email or password. Please try again.";
        // Log any errors encountered during the login process
        console.error("An error occurred:", error);
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
}

/* Styling for the login form layout and appearance */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Reduce the gap between form elements */
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Shared styling for input fields and login button inside the form */
.login-form input, .login-form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

/* Specific styling for the login button */
.login-form button {
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}

/* Styling for the error message */
.error {
  color: red;
}

/* Styling for the register link */
.register-link {
  margin-top: 10px; /* Reduce the margin between the form and the register link */
}
</style>
