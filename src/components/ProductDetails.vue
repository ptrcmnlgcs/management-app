<template>
  <div class="product-details">
    <h2>Product Details</h2>
    <div class="product-info">
      <p><strong>Name:</strong> {{ product.name }}</p>
      <p><strong>Description:</strong> {{ product.description }}</p>
      <p><strong>Price:</strong> {{ product.price }}</p>
    </div>
    <router-link to="/" class="back-link">Back to Product List</router-link>
  </div>
</template>

<script>
import axios from '@/axios';

export default {
  data() {
    return {
      product: {}
    };
  },
  async created() {
    try {
      const productId = this.$route.params.id;
      const response = await axios.get(`/products/${productId}`);
      this.product = response.data;
    } catch (error) {
      console.error("An error occurred while fetching the product details:", error);
    }
  }
}
</script>

<style scoped>
.product-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-details h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.product-info {
  margin-bottom: 20px;
}

.product-info p {
  margin: 10px 0;
  font-size: 1em;
  color: #555;
}

.product-info p strong {
  color: #333;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #337ab7;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
}

.back-link:hover {
  background-color: #286090;
}
</style>
