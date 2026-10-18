
import { ROUTE_API } from '@/enums/routeApi';
import { errorMessages } from 'vue/compiler-sfc';

const userModule = {
  namespaced: true,

  state: () => ({
    items: [],
    item: null,
    errorMsg: {}

  }),

  getters: {
     getItem(state) {
      return state.item;
    },
    getItems(state) {
      return state.items;
    },
    getErrorMsg(state) {
      return state.errorMsg
    },
  },

  mutations: {
    setItem(state, item) {
      state.item = item;
    },
    setItems(state, items) {
      state.items = items;
    },
    setErrorMsg(state, data) {
    state.errorMsg = data;
  }
    // можно добавить другие мутации
  },

  actions: {
    async fetchUsers({ commit }) {
      commit('setLoading', true, { root: true });
  
      try {
      const response = await fetch(ROUTE_API.users);
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      commit('setItems', data.data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
     
      } finally {
      commit('setLoading', false, { root: true });
      }
    },
    async fetchUser({ commit },id) {
      // Включаем глобальный loading через корневую мутацию
      commit('setLoading', true, { root: true });

      try {
        // Имитация запроса к API
        const response = await fetch(ROUTE_API.users+"/"+id);
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        console.log(data.data);
        commit('setItem', data.data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
        // Можно добавить обработку ошибок (например, мутацию setError)
      } finally {
        // Выключаем loading в любом случае (успех или ошибка)
        commit('setLoading', false, { root: true });
      }
    },
    async editUser({ commit }, {id, dataForm}) {
      commit('setLoading', true, { root: true });

      try {
        // Имитация запроса к API
        const response = await fetch(`${ROUTE_API.users}/${id}`, {
          
          method: 'PUT',
          headers: { 'Content-Type': 'application/json'},
          body:JSON.stringify(dataForm) 
        });
        const payload = await response.json().catch(() => null);

        if (!response.ok) {
          if (response.status === 422 && payload?.errors) {
            commit("setErrorMsg", payload.errors);
          }
          console.log(payload.errors);
        }
        const data = await response.json();
        console.log(data.data);
        commit('setItem', data.data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
        // Можно добавить обработку ошибок (например, мутацию setError)
      } finally {
        // Выключаем loading в любом случае (успех или ошибка)
        commit('setLoading', false, { root: true });
      }
    },

    async deleteItem({state, commit }, id) {

      commit('setLoading', true, { root: true });

      try {
        // Имитация запроса к API
        const response = await fetch(`${ROUTE_API.users}/${id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });
        const items = state.items.filter(item => item.id !== id);
        commit('setItems', items);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        commit('setLoading', false, { root: true });
      }
    },
  },
};

export default userModule;
