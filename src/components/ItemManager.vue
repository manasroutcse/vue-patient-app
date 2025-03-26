<template>
    <div>
      <h2  class="mx-auto" style="width: 500px;">Patient Registration Form</h2>
  
      <!-- Form to add/update an item -->
      <div class="container mt-5">
      <form @submit.prevent="submit" class="form-group">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
        <input
        class="form-control"
          type="text"
          id="fname"
          v-model="item.fname"
          placeholder="FIRST NAME"
          required
        />
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
        <input
        class="form-control"
          type="text"
          id="lname"
          v-model="item.lname"
          placeholder="LAST NAME"
          required
        />
        </div>
        <div class="mb-3">
          <label for="dateOfBirth" class="form-label">Date of Birth</label>
        <input
        class="form-control"
          type="date"
          id="birthdate"
          v-model="item.birthdate"
          placeholder="BIRTH DATE"
          required
        />
        </div>

        <button type="submit" class="btn btn-primary">{{ editMode ? 'Update' : 'Add' }} Item</button>
      </form>
  
      <h2>PATIENT LIST</h2>
      <div v-if="submit" class="mt-4 alert alert-success">
        <strong>Success!</strong> Your details have been submitted.
      <ul>
        <li v-for="(item, id) in items" :key="item.id">
          <p><strong>First Name:</strong>{{ item.fname }}</p>
          <p><strong>Last Name:</strong> {{ item.lname }}</p>
          <p><strong>DAT OF BIRTH:</strong> {{item.birthdate }}</p>  
          <button @click="editItem(item)" type="button" class="btn btn-primary">Edit</button>
          <button @click="deleteItem(item.id)"type="button" class="btn btn-danger" >Delete</button>
        </li>
      </ul>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: [],
        item: { fname: '' },
        item: { lname: '' },
        item: { birthdate: '' },
        editMode: false,
        editItemId: null,
      };
    },
    created() {
      this.fetchItems();
    },
    methods: {
      async fetchItems() {
        try {
          const response = await axios.get('http://localhost:3000/pke/users'); // Using posts as items
          this.items = response.data.slice(0, 10); // Limiting to 10 items for display
        } catch (err) {
          console.error('Error fetching items:', err);
        }
      },
      async submit() {
        if (this.editMode) {
          await this.updateItem();
        } else {
          await this.addItem();
        }
        this.resetForm();
      },
      async addItem() {
        try {
          const response = await axios.post('http://localhost:3000/pke/users', {
            fname: this.item.fname,
            lname: this.item.lname,
            birthdate: this.item.birthdate,

            body: 'This is a placeholder body.',
          });
          this.items.push({ id: response.data.id, fname: this.item.fname,lname: this.item.lname,birthdate: this.item.birthdate });
        } catch (err) {
          console.error('Error adding item:', err);
        }
      },
      async editItem(item) {
        this.editMode = true;
        this.editItemId = item.id;
        this.item.fname = item.fname; 
        this.item.lname = item.lname; 
        this.item.birthdate = item.birthdate; 
        // Pre-fill the form with existing item data
      },
      async updateItem() {
        try {
          await axios.put(`http://localhost:3000/pke/users/${this.editItemId}`, {
            
            fname: this.item.fname,
            lname: this.item.lname,
            birthdate: this.item.birthdate,
            body: 'This is a placeholder body.',
          });
          const index = this.items.findIndex(i => i.id === this.editItemId);
           this.items[index].fname = this.item.fname;
           this.items[index].lname = this.item.lname;
           this.items[index].birthdate = this.item.birthdate;
          // Update local item
        } catch (err) {
          console.error('Error updating item:', err);
        }
      },
      async deleteItem(id) {
        try {
          await axios.delete(`http://localhost:3000/pke/users/${id}`);
          this.items = this.items.filter(item => item.id !== id);
        } catch (err) {
          console.error('Error deleting item:', err);
        }
      },
      resetForm() {
        this.item.fname = '';
        this.item.lname = '';
        this.item.birthdate = '';
        this.editMode = false;
        this.editItemId = null;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>