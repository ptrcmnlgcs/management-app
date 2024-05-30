<template>
  <div>
    <h1>Add Product</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="product.name" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="product.description"></textarea>
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="product.price" required>
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: null
      }
    };
  },
  methods: {
    submitForm() {
      // Simulate adding product by logging to console
      console.log('Product added:', this.product);
      // Redirect back to product list with added product data
      this.$router.push({ name: 'ProductList', params: { newProduct: this.product } });
    }
  }
};
</script>

<style scoped>
/* Add styling as needed */
</style>
