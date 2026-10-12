<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { PRIVATE_ROUTS_VALUE } from '@/enums';
const router = useRouter();

const goToEdit = (id) => {
  router.push({ name: PRIVATE_ROUTS_VALUE.editUser, params: { id } });
};
const data = ref([]);
const loading = ref(false);
const error = ref(null);
const URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await axios.get(URL);
    data.value = response.data;
    console.log('Получено:', response.data);
  } catch (err) {
    error.value = err;
    console.error('Ошибка:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getUsers();
});
</script>

<template>

<main class="main-content">
    <h1>users</h1>
    <table class="main-table">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>Axtions</th>
            </tr>    
        </thead>
        <tbody> 
            <tr v-for="user in data" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{user.email}}</td>
                <td>
                    <div class="btn-wrapper">
                        <button 
                        @click="goToEdit(user.id)"
                        class="edit-btn">edit</button>
                        <button class="delete-btn">delete</button>
                    </div>
                    
                </td>
            </tr>   
         </tbody>
    </table>

</main>
</template>

<style scoped lang="scss">
.main-content {
    padding: 20px 30px;

    h1 {
        margin-bottom: 30px;
    }

    .btn-wrapper {
        width: 180px; 
        display: flex;
        justify-content: space-between;
        align-items: center;
    

        button {
            padding: 5px 20px;
            color: white;
            border-color: white;
            border-radius: 5px;
            margin-right: 10px;
            cursor: pointer;

            &.edit-btn {
                background-color: orange;
            }

            &.delete-btn {
                background-color: red;
                margin-right: unset;
            }

            &:hover {
                opacity: 0.5;
            }
        }
    }
}
    


</style>