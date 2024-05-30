<template>
  <div>
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct">
      <div>
        <label for="name">Product Name:</label>
        <input type="text" id="name" v-model="name" placeholder="Product Name" />
      </div>
      <div>
        <label for="description">Product Description:</label>
        <textarea id="description" v-model="description" placeholder="Product Description"></textarea>
      </div>
      <div>
        <label for="price">Product Price:</label>
        <input type="number" id="price" v-model="price" placeholder="Product Price" />
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
      price: ''
    };
  },
  methods: {
    async addProduct() {
      try {
        // Add product logic
        const newProduct = {
          name: this.name,
          description: this.description,
          price: this.price
        };
        this.$emit('productAdded', newProduct); // Emit event to parent component with the new product data
        // Clear input fields after submission
        this.name = '';
        this.description = '';
        this.price = '';
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
