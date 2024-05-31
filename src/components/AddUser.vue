<template>
  <form @submit.prevent="addUser" class="add-user-form">
    <input type="text" v-model="username" placeholder="Username" required>
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
    <button type="submit">Add User</button>
  </form>
</template>

<script>

</script>

<style scoped>
/* Add scoped styles for the form */
.add-user-form {
  max-width: 300px;
  margin: 0 auto;
}

/* Style input fields */
.add-user-form input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Style submit button */
.add-user-form button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Change button color on hover */
.add-user-form button:hover {
  background-color: #0056b3;
}
</style>
