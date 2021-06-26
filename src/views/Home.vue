<template>
  <div class="home">
    <div class="home__pending">
      <div class="header">Todo tasks</div>
      <task-list :tasks="tasks"></task-list>
      <button @click="addTask">Add task</button>
    </div>
    <div class="home__done">
      <div class="header">Done tasks</div>
      <task-list :tasks="doneTasks" :isEditable="false"></task-list>
    </div>
  </div>
  <add-modal
    v-if="showAddModal"
    @close="showAddModal = false"
    @add="mAddTask"
  ></add-modal>

  <update-modal
    v-if="toEdit"
    :prop-name="toEdit.name"
    :prop-description="toEdit.description"
    @update="updateTask"
  >
  </update-modal>
</template>

<script>
import TaskList from "@/components/TaskList";
import AddModal from "@/components/AddModal";
import { mapMutations, mapState } from "vuex";
import UpdateModal from "@/components/UpdateModal";

export default {
  name: "Home",
  components: { UpdateModal, AddModal, TaskList },
  computed: {
    ...mapState(["tasks", "toEdit"]),
    doneTasks() {
      return this.tasks.filter((task) => task.checked);
    },
  },
  data: () => ({
    showAddModal: false,
  }),
  methods: {
    ...mapMutations({
      mAddTask: "ADD_TASK",
      updateTask: "TO_UPDATE_TASK",
    }),
    addTask() {
      this.showAddModal = true;
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;

  & > div {
    border: 1px solid green;
    padding: 24px;

    .header {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
