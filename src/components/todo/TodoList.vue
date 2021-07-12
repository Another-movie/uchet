<template>
  <div v-for="todo in todos" :key="todo.id">
    <todo-item :todo="todo" />
  </div>
</template>

<script>
import TodoItem from "@/components/todo/TodoItem";
export default {
  name: "TodoList",
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: { TodoItem },
  methods: {},
};
</script>

<style scoped></style>
