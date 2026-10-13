
import { ROUTE_API } from '@/enums/routeApi';
const userModule = {
  namespaced: true,

  state: () => ({
    items: [],
  }),
  getters: {
    getItems(state) {
      return state.items;
    },
  },

  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    // можно добавить другие мутации
  },

  actions: {
    // Асинхронное получение категорий
    async fetchUsers({ commit }) {
      // Включаем глобальный loading через корневую мутацию
      commit('setLoading', true, { root: true });

      try {
        // Имитация запроса к API
        const response = await fetch(ROUTE_API.users);
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        // Сохраняем полученные данные в локальном состоянии
        commit('setItems', data.data);
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
