import { createStore } from "vuex";
import { uniqueId } from "@/utils";

// const task = {
//   id: Number,
//   name: String,
//   description: String,
//   date: Date,
//   checked: Boolean,
// };

export default createStore({
  state: {
    todos: [],
    editTodo: null,
    user: null,
  },
  mutations: {
    ADD_TODO(state, value) {
      const todo = {
        ...value,
        id: uniqueId(),
        checked: false,
        date: new Date(),
      };
      state.todos.push(todo);
    },
    TOGGLE_TODO(state, todo) {
      todo.checked = !todo.checked;
    },
    DELETE_TODO(state, value) {
      const index = state.todos.findIndex((todo) => todo.id === value.id);

      return index === -1 ? "" : state.todos.splice(index, 1);
    },

    SET_EDIT_TODO(state, todo) {
      state.editTodo = todo;
    },
    TO_UPDATE_TASK(state, value) {
      state.editTodo.name = value.name;
      state.editTodo.description = value.description;
      state.editTodo.date = new Date();
      state.editTodo = null;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});
