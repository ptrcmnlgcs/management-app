<template>
  <nav class="navbar">
    <div class="container d-flex justify-content-end">
      <ul class="nav">
        <router-link to="/logout" class="col-6">Logout</router-link>
      </ul>
    </div>
  </nav>
  <!-- the router view is where all the routes are rendered -->
  <router-view/>

  <div>
    <h1>Welcome to BetaMart</h1>
    <router-link to="/products">View Products</router-link>
    <router-link to="/add-product">Add Product</router-link>
    <router-link to="/user-management">Manage Users</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
