<template>
  <div>
    <!-- Use a router-link or a button to navigate to the Add User page -->
    <router-link :to="'/add-user'">
      <button>Add User</button>
    </router-link>

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
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <!-- Use a router-link to navigate to the Edit User page -->
            <router-link :to="'/edit-user'">
              <button>Edit</button>
            </router-link>
            <!-- Use a regular button for actions like Delete -->
            <button>Delete</button>
          </td>
        </tr>
        <!-- Repeat rows for other users -->
      </tbody>
    </table>
    <!-- Ensure the UserForm component is imported and rendered -->
    <UserForm/>
  </div>
</template>

<script>
// Import the UserForm component if needed

</script>

<style scoped>
/* Add scoped styles if needed */
</style>