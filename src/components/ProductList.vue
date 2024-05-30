<template>
  <div>
    <h1>Product List</h1>
    <table v-if="products && products.length">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>
            <router-link :to="{ name: 'EditProduct', params: { id: product.id } }">Edit</router-link>
            <button @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No products available</p>
  </div>
</template>

<script>
import { ref, onUnmounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const products = ref([]);

    const fetchProductList = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        products.value = response.data;
      } catch (error) {
        console.error('Error fetching product list:', error);
      }
    };

    const deleteProduct = async (productId) => {
      try {
        await axios.delete(`http://localhost:8000/api/products/${productId}`);
        fetchProductList();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    };

    // Fetch product list on component mount
    fetchProductList();

    // Fetch product list again when 'productAdded' event is emitted
    const handleProductAdded = () => {
      fetchProductList();
    };

    // Listen for 'productAdded' event
    window.addEventListener('productAdded', handleProductAdded);

    // Cleanup the event listener on component unmount
    onUnmounted(() => {
      window.removeEventListener('productAdded', handleProductAdded);
    });

    return {
      products,
      deleteProduct
    };
  }
};
</script>

<style>
/* Add your styles here */
</style>
