import { createStore } from "vuex";
import { uniqueId } from "../utils";

// const task = {
//   id: Number,
//   name: String,
//   description: String,
//   date: Date,
//   checked: Boolean,
// };

export default createStore({
  state: {
    tasks: [],
    toEdit: null,
  },
  mutations: {
    ADD_TASK(state, value) {
      console.log(123);
      const task = {
        ...value,
        id: uniqueId(),
        checked: false,
        date: new Date(),
      };
      state.tasks.push(task);
      console.log(state.tasks);
    },
    TOGGLE_TASK(state, id) {
      const task = state.tasks.find((task) => task.id === id);
      task.checked = !task.checked;
    },
    UPDATE_TASK(state, task) {
      console.log(task);
      state.toEdit = task;
    },
    TO_UPDATE_TASK(state, value) {
      state.toEdit.name = value.name;
      state.toEdit.description = value.description;
      state.toEdit.date = new Date();
      state.toEdit = null;
    },
    DELETE_TASK(state, id) {
      const index = state.tasks.findIndex((task) => task.id === id);

      return index === -1 ? "" : state.tasks.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
