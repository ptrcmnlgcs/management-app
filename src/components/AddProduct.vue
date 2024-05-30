<template>
  <div>
    <!-- Add Product Form -->
    <div class="container">
      <form @submit.prevent="submitForm" class="form-container">
        <div class="form-group">
          <h2 class="form-heading">Add Product</h2>
          <label for="productName">Product Name:</label>
          <input type="text" class="form-control" id="productName" v-model="productName" required>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea class="form-control" id="description" v-model="description" required></textarea>
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" class="form-control" id="price" v-model="price" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Add Product</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'AddProduct',
  data() {
    return {
      productName: '',
      description: '',
      price: ''
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.productName,
        description: this.description,
        price: this.price
      };

      axios.post(`/api/products`, formData) // Assuming `/api/products` is your API endpoint
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Product Added',
            text: 'Product has been added successfully',
            confirmButtonText: 'OK'
          });
          this.$router.push({ name: 'ProductList' }); // Redirect to product list page
        })
        .catch(error => {
          console.error('Error adding product:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to add product',
            confirmButtonText: 'OK'
          });
        });
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
