<script setup>
import axios from 'axios';
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { PRIVATE_ROUTS_VALUE } from '@/enums';
import { useStore } from 'vuex';
import LoadingVue from "@/components/LoadingVue.vue";
const store = useStore();
const router = useRouter();

const goToEdit = (id) => {
  router.push({ name: 'editUser', params: { id } });
};



onMounted(() => {
  store.dispatch('users/fetchUsers');
});
const users = computed(() => store.getters['users/getItems']);
const isLoading = computed(() => store.getters['isLoading']);
console.log(isLoading.value)
const deleteUser = (id) => {
    store.dispatch('users/deleteItem', id);
}

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
            <template v-if="isLoading">
              <tr>
                <td><LoadingVue/></td>
                <td><LoadingVue/></td>
                <td><LoadingVue/></td>
                <td><LoadingVue/></td>
              </tr>

            </template>
            <template v-else>
              <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{user.email}}</td>
                  <td>
                      <div class="btn-wrapper">
                          <button
                          @click="goToEdit(user.id)"
                          class="edit-btn">edit</button>
                          <button class="delete-btn" @click="deleteUser(user.id)">delete</button>
                      </div>

                  </td>
              </tr>
            </template>
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
