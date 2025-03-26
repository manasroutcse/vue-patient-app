<!-- <script>
    import gql from 'graphql-tag'
    
    export default {
      name: 'app',
      /* [...] */
      apollo: {
        contacts: gql`query {
          contacts {
            id,
            fname,
            lname,
            birthdate
          }
        }`,
      },
      methods: {
        createContact(fname, lname, birthdate){
          console.log(`Create contact: ${birthdate}`)
          this.$apollo.mutate({
              mutation: gql`mutation createContact($fname: String!, $lname: String!, $birthdate: String!){
                createContact(fname: $fname, lname: $lname, birthdate: $birthdate) {
                  id,
                  fname,
                  lname,
                  birthdate}
              }`,
              variables:{
                fname: fname,
                lname: lname,
                birthdate: birthdate
              }
            }
          )
          location.reload();
        },
        updateContact(id, fname, lname, birthdate){
          console.log(`Update contact: # ${id}`)
          this.$apollo.mutate({
              mutation: gql`mutation updateContact($id: ID!, $fname: String!, $lname: String!, $birthdate: String!){
                updateContact(id: $id, fname: $firstName, lname: $lname, birthdate: $birthdate)
              `,
              variables:{
                id: id,
                fname: fname,
                lname: lname,
                birthdate: birthdate
              }
            }
          )
          location.reload();
        },
        deleteContact(id){
          console.log(`Delete contact: # ${id}`)
          this.$apollo.mutate({
              mutation: gql`mutation deleteContact($id: ID!){
                deleteContact(id: $id)
              }`,
              variables:{
                id: id,
              }
            }
          )
          location.reload();
        },    
      },
      selectContact(contact){
          this.id = contact.id;
          this.fname = contact.fname;
          this.lname = contact.lname;
          this.birthdate = contact.birthdate;
        },
        clearForm(){
          this.id = null;
          this.fname = '';
          this.lname = '';
          this.birthdate = '';
        }
      }
        </script>

<template>
  <div id="app">
  <table border='1' width='100%' style='border-collapse: collapse;'>
   <tr>
     <th>First Name</th>
     <th>Last Name</th>
     <th>BIRTH DATE</th>
     <th>Actions</th>
   </tr>

   <tr v-for='contact in contacts'>
     <td>{{ contact.fname }}</td>
     <td>{{ contact.lname }}</td>
     <td>{{ contact.birthdate }}</td>
     <td>
      <input type="button" @click="selectContact(contact)" value="Select">
      <input type="button" @click="deleteContact(contact.id)" value="Delete">
     </td> 
   </tr>
 </table>
</br>
        <form>
          <label>First Name</label>
          <input type="text" name="fname" v-model="firstName">
          </br>
    
          <label>Last Name</label>
          <input type="text" name="lname" v-model="lastName">
          </br>
    
          <label>Email</label>
          <input type="date" name="birthdate" v-model="birthdate">
          </br>
          
          <input v-if="!id" type="button" @click="createContact(fname, lname, birthdate)" value="Add">
          <input v-if="id" type="button" @click="updateContact(id, fname, lname, birthdate)" value="Update">
          <input type="button" @click="clearForm()" value="Clear">
          
        </form>
    
    </div>
    </template> -->




    <!-- <template>
      <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <router-link to="/" class="navbar-brand">bezKoder</router-link>
          <div class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="nav-link">Add</router-link>
            </li>
          </div>
        </nav>
    
        <div class="container mt-3">
          <router-view />
        </div>
      </div>
    </template>
    
    <script>
    export default {
      name: "app"
    };
    </script> -->



    <template>
      <div id="app">
        <ItemManager />
   
      </div>
    </template>
    
    <script>
    import ItemManager from './components/ItemManager.vue';
    
    export default {
      components: {
        ItemManager
      }
    };
    </script>
    
    <style>
    /* Global styles */
    </style>