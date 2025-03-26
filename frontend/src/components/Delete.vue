<template>
    <div>
      <h2>Delete Item</h2>
      <p>Are you sure you want to delete this item?</p>
      <button @click="confirmDelete">Yes</button>
      <button @click="cancelDelete">No</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      confirmDelete() {
        // Implement delete functionality
      },
      cancelDelete() {
        addItem() {
      axios.post('http://localhost:3000/pke', { name: this.newItemName }).then(() => {
        // Clear the input field after adding the item
        this.newItemName = '';
        // Optionally, navigate to the list view
        this.$router.push('/');
      });
    },
  },
      },
    },
  };
  </script>