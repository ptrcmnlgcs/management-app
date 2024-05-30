<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="product in productList" :key="product.id">
        <div>{{ product.name }}</div>
        <div>{{ product.description }}</div>
        <div>{{ product.price }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductList',
  data() {
    return {
      productList: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get(`/api/products`) // Assuming `/api/products` is your API endpoint
        .then(response => {
          this.productList = response.data;
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
