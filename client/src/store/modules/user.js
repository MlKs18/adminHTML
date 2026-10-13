import { Module, ActionContext } from 'vuex';
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
        console.log("data from bek", data);
        // Сохраняем полученные данные в локальном состоянии
        commit('setItems', data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
        // Можно добавить обработку ошибок (например, мутацию setError)
      } finally {
        // Выключаем loading в любом случае (успех или ошибка)
        commit('setLoading', false, { root: true });
      }
    },

    // Пример другого действия (создание категории)
    async createCategory({ commit }, newCategory) {
      commit('setLoading', true, { root: true });

      try {
        const response = await fetch('/api/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newCategory),
        });
        const created = await response.json();
        // Можно добавить новую категорию в список без перезагрузки
        // commit('addItem', created); // если есть мутация addItem
      } finally {
        commit('setLoading', false, { root: true });
      }
    },
  },
};

export default userModule;