<template>
  <div class="todo-item">
    <input type="checkbox" v-model="checked" />
    <div class="todo-item__info">
      <div>
        {{ todo.name }} <span>{{ todo.date }}</span>
      </div>
      <div>
        {{ todo.description }}
      </div>
      <div>
        <button @click="setEdit(todo)">edit</button>
        <button @click="delTodo(todo)">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    checked: {
      get() {
        return this.todo.checked;
      },
      set() {
        this.toggleTodo(this.todo);
        console.log(123);
      },
    },
  },
  methods: {
    ...mapMutations({
      toggleTodo: "TOGGLE_TODO",
      delTodo: "DELETE_TODO",
      setEdit: "SET_EDIT_TODO",
    }),
  },
};
</script>

<style lang="scss">
.todo-item {
  display: flex;
  background: #8f8f8f;
  margin: 8px 0;
  color: white;
  border-radius: 4px;
  padding: 4px;

  input {
    margin: 5px 6px 0 0;
  }
}
</style>
