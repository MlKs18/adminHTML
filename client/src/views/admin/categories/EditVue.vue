<script setup>
import axios from 'axios';
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { PRIVATE_ROUTS_VALUE } from '@/enums';
import { useStore } from 'vuex';
import LoadingVue from "@/components/LoadingVue.vue";
const store = useStore();
const router = useRouter();
store.dispatch('category/fetchCategory',router.currentRoute.value.params.id);
const category = computed(() => store.getters['category/getItem']);
//const user = users.find(item => item.id == router.currentRoute.value.params.id);
console.log(category.value);
const form = ref( {
  title:"",
  description: "",
})
const isLoading = computed(() => store.getters['isLoading']);
const editCategory = () => {
  store.dispatch("category/editCategory",{
    id: router.currentRoute.value.params.id, 
    dataForm:form.value});
}
const errorMsg = computed(() => store.getters['category/getErrorMsg']); 


watch(
    () => category.value,
    (newVal, oldVal) => {
      console.log(newVal, oldVal)
      if (newVal ) {
        form.value.title = newVal.title;
        form.value.description = newVal.description;
       console.log(form)

      }

    },
    {deep: true}
);


</script>
<template>
  <div
  v-if="category"
  class="edit-user">
    <h1 class="edit-user__title">Редактирование категории</h1>


    <form class="edit-user__form" @submit.prevent ="editCategory">
      <!-- Аватар -->
      <div class="form-group form-group--avatar">
        <label class="form-label">Аватар</label>
        <div class="avatar">
          <div v-if="true" class="avatar__placeholder">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.5" />
              <path
                  d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
              />
            </svg>
          </div>
          <!-- Если аватар есть — картинка -->
          <img v-else :src="'category.avatar'" alt="Аватар" class="avatar__img" />

          <div class="avatar__actions">
            <label class="btn btn--ghost">
              Загрузить
              <input type="file" accept="image/*" hidden />
            </label>
            <button type="button" class="btn btn--danger">Удалить</button>
          </div>
        </div>
      </div>

      <!-- Основные данные -->
      <div class="form-group groupCategory">
        <label for="name" class="form-label">Название категории</label>
        <LoadingVue v-if="isLoading"/>
        <input
            v-else
            v-model="form.title"
            id="name"
            type="text"
            class="form-input"
            placeholder="category"
        />
       
        <div class="errorInput" v-if="errorMsg.title">{{ errorMsg.title[0]}}</div>
      </div>

      <div class="form-group">
        <label for="text" class="form-label">Описание</label>
        <LoadingVue v-if="isLoading"/>
        <textarea id="text"  v-model="form.description"></textarea>
       
        <div class="errorInput" v-if="errorMsg.description">{{ errorMsg.description[0]}}</div>
      </div>
      
      

      

      <!-- Кнопки -->
      <div class="edit-user__actions">
        <button type="button" class="btn btn--ghost">Отмена</button>
        <button type="submit" class="btn btn--primary">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.errorInput {
color: red;
background-color: yellow;
}

.edit-user {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px;
}

.edit-user__title {
  margin-bottom: 24px;
  font-size: 22px;
}

.edit-user__form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group--full,
.form-group--avatar {
  grid-column: 1 / -1;
}

.form-label {
  font-size: 13px;
  color: #555;
}

.form-input {
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s;
}

.form-input:focus {
  border-color: #4c8bf5;
}

/* ---------- Аватар ---------- */
.avatar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: unset;
  width: unset;
  height: unset;
  border-radius: unset;
  gap: 12px;
  margin-bottom: 60px;
}

.avatar__img,
.avatar__placeholder {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.avatar__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eef1f5;
  color: #9aa4b2;
}

.avatar__placeholder svg {
  width: 60%;
  height: 60%;
}

.avatar__actions {
  display: flex;
  gap: 8px;
}

/* ---------- Соцсети ---------- */
.socials {
  border: 1px solid #e3e6ea;
  border-radius: 10px;
  padding: 16px 18px 18px;
  margin: 0;
}

.socials legend {
  padding: 0 8px;
  font-weight: 600;
  color: #333;
}

.socials__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px 20px;
  margin-top: 4px;
}

/* ---------- Кнопки ---------- */
.edit-user__actions {
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 8px;
}

.btn {
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}

.btn--primary {
  background: #4c8bf5;
  color: #fff;
}

.btn--primary:hover {
  background: #3a7ae0;
}

.btn--ghost {
  background: transparent;
  border-color: #ccc;
  color: #333;
}

.btn--ghost:hover {
  border-color: #888;
}

.btn--danger {
  background: transparent;
  border-color: #e08a8a;
  color: #d33;
}

.btn--danger:hover {
  background: #fdecec;
}

.groupCategory {
    display: flex;
    flex-direction: column;
}

/* ---------- Адаптив ---------- */
@media (max-width: 700px) {
  .socials__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .edit-user__form {
    grid-template-columns: 1fr;
  }
}
</style>
