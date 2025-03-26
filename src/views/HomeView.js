

// <script setup>

//   import { onMounted, ref } from 'vue';

//   import axios from 'axios';

//   import router from '@/router';

//   import { useCounterStore } from '../stores/counter';

//   const store = useCounterStore();



//   let display = ref('')



//   onMounted(()=>getAll())



//   async function getAll(){

//     try {

//       const {data} = await axios.get( store.axiosURL + '/users');

//       display.value = data.data;

//     } catch (error) {

//       console.error(error);

//     }

//   }

// </script>
// <template>


//   <h1>Welcome to Vue3 (June 2024)</h1>



//   <table class="table">

//     <thead>

//       <tr>

//         <th>Bil</th>

//         <th>Name</th>

//         <th>Age</th>

//       </tr>

//     </thead>

//     <tbody>

//       <tr v-for="(item, idx) in display" :key="item.id">

//         <td> {{ idx+1 }}</td>

//         <td>{{ item.name }}</td>

//         <td>{{ item.age }}</td>

//       </tr>

//     </tbody>

//   </table>

 

// </template>




