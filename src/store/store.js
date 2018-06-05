import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        todos: []

    },
    mutations: {

        ADD_TODO_ITEM(state, data) {

            state.todos.push(data);

        },
        DELETE_TODO_ITEM(state, data) {

            state.todos.splice(data, 1);

        }

    },
    actions: {

        addTodoItem({ commit }, data) {

            commit('ADD_TODO_ITEM', data);

        },
        deleteTodoItem({ commit }, data) {

            commit('DELETE_TODO_ITEM', data);

        }

    }
});
