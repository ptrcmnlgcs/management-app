<template>
  <div class="product-list">
    <table class="table">
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
            <router-link :to="{ name: 'EditProduct', params: { id: product.id } }" class="btn btn-warning">Edit</router-link>
            <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="btn btn-primary">View Details</router-link>
            <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
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

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #f2f2f2;
}

.btn {
  padding: 8px 12px;
  margin-right: 8px; /* Add space between buttons */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none; /* Remove underline */
}


.btn-warning {
  background-color: #f3b353;
  color: #fff;
}

.btn-primary {
  background-color: #5db2f7;
  color: #fff;
}

.btn-danger {
  background-color: #eb5c51;
  color: #fff;
}


.btn-warning:hover{
  background-color: #f5a107; /* Blue color for hover */
  transform: scale(1.05);
}
.btn-primary:hover{
  background-color: #007bff; /* Blue color for hover */
  transform: scale(1.05);
}
.btn-danger:hover {
  background-color: #f70c0c; /* Blue color for hover */
  transform: scale(1.05);
}




</style>
