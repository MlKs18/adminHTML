import { ROUTE_API } from '@/enums/routeApi';

const categoryModule = {
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
     async deleteItem({state, commit }, id) {

      commit('setLoading', true, { root: true });

      try {
        // Имитация запроса к API
        const response = await fetch(`${ROUTE_API.category}/${id}`, {
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

    // Асинхронное получение категорий
    async fetchCategories({ commit }) {
      commit('setLoading', true, { root: true });
  
      try {
      const response = await fetch(ROUTE_API.category);
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      
      commit('setItems', data.data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
     
      } finally {
      commit('setLoading', false, { root: true });
      }
    },
    
    async fetchCategory({ commit },id) {
      // Включаем глобальный loading через корневую мутацию
      commit('setLoading', true, { root: true });

      try {
        // Имитация запроса к API
        const response = await fetch(ROUTE_API.category+"/"+id);
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
    async editCategory({ commit }, { id, dataForm }) {
    commit('setLoading', true, { root: true });

    try {
        const response = await fetch(`${ROUTE_API.category}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForm)
        });

        const payload = await response.json().catch(() => null);

        if (!response.ok) {
            if (response.status === 422 && payload?.errors) {
                commit('setErrorMsg', payload.errors);
            }

            console.log(payload?.errors ?? payload);

            return;
        }

        console.log(payload?.data);

        commit('setItem', payload.data);

    } catch (error) {
        console.error('Ошибка загрузки:', error);

    } finally {
        commit('setLoading', false, { root: true });
    }
},
  },
};

export default categoryModule;
