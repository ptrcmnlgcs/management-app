<template>
  <div class="product-list">
    <ul>
      <li class="product-item" v-for="product in products" :key="product.id">
        <span class="product-name">{{ product.name }}</span>
        <span class="product-description">{{ product.description }}</span>
        <span class="product-price">{{ product.price }}</span>
        <div class="action-links">
          <router-link class="edit-link" :to="{ name: 'EditProduct', params: { id: product.id } }">Edit</router-link>
          <router-link class="details-link" :to="{ name: 'ProductDetails', params: { id: product.id } }">View Details</router-link>
          <button class="delete-button" @click="deleteProduct(product.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/axios';

export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    async deleteProduct(id) {
      try {
        await axios.delete(`/products/${id}`);
        this.products = this.products.filter(product => product.id !== id);
      } catch (error) {
        console.error("An error occurred while deleting the product:", error);
      }
    }
  },
  async created() {
    try {
      const response = await axios.get('/products');
      this.products = response.data;
    } catch (error) {
      console.error("An error occurred while fetching the products:", error);
    }
  }
}
</script>

<style scoped>
.product-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.product-name,
.product-description,
.product-price {
  margin: 0 10px;
}

.action-links {
  display: flex;
  gap: 10px;
}

.edit-link,
.details-link,
.delete-button {
  padding: 5px 10px;
  background-color: #FF9800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}

.edit-link:hover,
.details-link:hover,
.delete-button:hover {
  background-color: #e68a00;
}
</style>
