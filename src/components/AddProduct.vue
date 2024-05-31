<template>
  <form @submit.prevent="submitForm" class="add-product-form">
    <input class="input-field" v-model="name" placeholder="Product Name" />
    <p v-if="errors.name" class="error">{{ errors.name }}</p>

    <input class="input-field" v-model="description" placeholder="Product Description" />
    <p v-if="errors.description" class="error">{{ errors.description }}</p>

    <input class="input-field" v-model="price" placeholder="Product Price" />
    <p v-if="errors.price" class="error">{{ errors.price }}</p>

    <button type="submit" class="submit-button" :class="{ 'submitting': submitting }">Add Product</button>
    <div v-if="success" class="success-message">{{ successMessage }}</div>
  </form>
</template>

<script>
import axios from '@/axios';

export default {
  data() {
    return {
      name: '',
      description: '',
      price: '',
      errors: {},
      submitting: false,
      success: false,
      successMessage: ''
    };
  },
  methods: {
    validateInput() {
      const errors = {};
      if (!this.name) errors.name = 'Name is required';
      if (!this.description) errors.description = 'Description is required';
      if (!this.price || isNaN(this.price)) errors.price = 'Price is required and must be a number';
      return errors;
    },
    async submitForm() {
      this.submitting = true;
      const errors = this.validateInput();
      if (Object.keys(errors).length > 0) {
        this.errors = errors;
        this.submitting = false;
        return;
      }
      
      try {
        await axios.post('/products', {
          name: this.name,
          description: this.description,
          price: this.price
        });
        this.success = true;
        this.successMessage = 'Product added successfully!';
        setTimeout(() => {
          this.success = false;
          this.successMessage = '';
          this.$router.push('/product-list');
        }, 3000); // Hide success message after 3 seconds and redirect
      } catch (error) {
        console.error("An error occurred while adding the product:", error);
      } finally {
        this.submitting = false;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
.add-product-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.input-field {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  font-size: 1em;
}

.submit-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049;
}

.submitting {
  animation: pulse 1s infinite;
}

.success-message {
  margin-top: 10px;
  padding: 10px;
  background-color: #45a049;
  color: #000;
  border-radius: 4px;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
