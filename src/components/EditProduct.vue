<template>
    <div>
      <h1>Edit Product</h1>
      <form @submit.prevent="editProduct">
        <input v-model="name" placeholder="Product Name" />
        <input v-model="price" placeholder="Product Price" />
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        name: '',
        price: '',
      };
    },
    created() {
      this.fetchProduct();
    },
    methods: {
      async fetchProduct() {
        const response = await fetch(`http://localhost:8000/api/products/${this.id}`);
        const product = await response.json();
        this.name = product.name;
        this.price = product.price;
      },
      async editProduct() {
        await fetch(`http://localhost:8000/api/products/${this.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: this.name, price: this.price }),
        });
        this.$router.push('/products');
      },
    },
  };
  </script>
  