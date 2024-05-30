<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in productList" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>Description: {{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <button @click="editProduct(product)">Edit</button>
        <button @click="deleteProduct(product.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'; // Import Axios

export default {
  data() {
    return {
      productList: []
    }
  },
  methods: {
    fetchProducts() {
      // Fetch products from Laravel API using Axios
    },
    editProduct(product) {
      this.$router.push({ name: 'EditProduct', params: { productId: product.id } });
    },
    deleteProduct(productId) {
      // Send delete request to Laravel API
      axios.delete(`/api/products/${productId}`)
        .then(() => {
          console.log('Product deleted successfully');
          // Refresh product list or perform other actions as needed
          this.fetchProducts(); // Refresh product list
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
    }
  },
  mounted() {
    this.fetchProducts();
  }
}
</script>

<style scoped>
/* Add styling as needed */
</style>
