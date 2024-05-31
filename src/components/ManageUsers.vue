<template>
  <div>
    <!-- Navigation to Add User Page -->
    <router-link :to="'/add-user'">
      <button>Add User</button>
    </router-link>

    <!-- Table to display users -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Sample row, repeat for each user -->
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <!-- Navigation to Edit User Page -->
            <router-link :to="'/edit-user'">
              <button>Edit</button>
            </router-link>
            <!-- Delete button -->
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- UserForm component for adding/editing users -->
    <UserForm />
  </div>
</template>

<script>

</script>

<style scoped>
/* Add scoped styles */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

button {
  margin-right: 5px;
}
</style>
