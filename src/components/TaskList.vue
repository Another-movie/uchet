<template>
  <div v-for="task in tasks" :key="task.id">
    <div class="divider"></div>
    <task
      :task="task"
      @check="toggleTask(task.id)"
      @del="deleteTask(task.id)"
      @upd="updateTask(task)"
      :is-editable="isEditable"
    ></task>
  </div>
  <div class="divider"></div>
</template>

<script>
import Task from "@/components/Task";
import { mapMutations } from "vuex";

export default {
  name: "TaskList",
  components: { Task },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
    isEditable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    ...mapMutations({
      toggleTask: "TOGGLE_TASK",
      deleteTask: "DELETE_TASK",
      updateTask: "UPDATE_TASK",
    }),
    test(task) {
      console.log(task);
    },
  },
};
</script>

<style scoped>
.divider {
  height: 1px;
  background: #dbdbdb;
  width: calc(100% + 48px);
  margin-left: -24px;
}
</style>
