<template>
  <!-- Container for the login form -->
  <div class="form-container">
    <!-- Title for the login form -->
    <h1>Login</h1>
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
          this.$router.push('/product-list');
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

/* Styling for the login form layout and appearance */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 320px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.login-form:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Shared styling for input fields and login button inside the form */
.login-form input, .login-form button {
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

/* Specific styling for the login button */
.login-form button {
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
}

.login-form button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Styling for the error message */
.error {
  color: red;
  font-weight: bold;
  margin-top: -10px;
  animation: shake 0.3s ease-in-out;
}

/* Keyframes for shake animation */
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
}

/* Styling for the register link */
.register-link {
  margin-top: 20px;
}

.register-link p {
  color: black;
}

.register-link p a {
  color: #0056b3;
  text-decoration: none;
}

.register-link p a:hover {
  text-decoration: underline;
}
</style>
