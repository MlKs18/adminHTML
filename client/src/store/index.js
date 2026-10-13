import { createApp } from 'vue'
import { createStore} from 'vuex';
import categoryModule from './modules/category';
import userModule from './modules/user';

export const store = createStore({
  // Корневое состояние
  state: {
    loading: false,
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
  },

  // Корневые мутации (глобальный loading)
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
  },

  // Регистрируем модули
  modules: {
    category: categoryModule,
    users: userModule
  },
});
