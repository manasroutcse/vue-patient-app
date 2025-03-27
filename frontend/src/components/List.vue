<!-- <template>
    <div>
      <h2>All Items</h2>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }}
          <button @click="editItem(item)">Edit</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        items: [],
      };
    },
    methods: {
      editItem(item) {
        // Implement edit functionality
      },
      deleteItem(itemId) {
        // Implement delete functionality
      },
    },
    mounted() {
        axios.get('https://api.example.com/items').then((response) => {
      this.items = response.data;
    });
  },
    },
  
  </script> -->