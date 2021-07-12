<template>
  <div class="home">
    <div>
      Todo tasks
      <div>
        <todo-list :todos="todos" />
        <button class="add-button" @click="addTask">Add Todo</button>
      </div>
    </div>
    <div>
      Done tasks
      <div
        style="text-decoration: line-through"
        v-for="task in doneTasks"
        :key="task.id"
      >
        {{ task }}
      </div>
    </div>

    <!--    <div class="home__done">-->
    <!--      <div class="header">Done tasks</div>-->
    <!--&lt;!&ndash;      <task-list :tasks="doneTasks" :isEditable="false"></task-list>&ndash;&gt;-->
    <!--    </div>-->
  </div>
  <add-modal
    v-if="showAddModal"
    @close="showAddModal = false"
    @add="mAddTodo"
  ></add-modal>

  <update-modal
    v-if="editTodo"
    :prop-name="editTodo.name"
    :prop-description="editTodo.description"
    @update="updateTask"
  >
  </update-modal>
</template>

<script>
import AddModal from "@/components/modals/AddModal";
import { mapMutations, mapState } from "vuex";
import UpdateModal from "@/components/modals/UpdateModal";
import TodoList from "@/components/todo/TodoList";

export default {
  name: "Home",
  components: { TodoList, UpdateModal, AddModal },
  computed: {
    ...mapState(["todos", "editTodo"]),
    doneTasks() {
      return this.todos.filter((task) => task.checked);
    },
  },
  data: () => ({
    showAddModal: false,
  }),
  methods: {
    ...mapMutations({
      mAddTodo: "ADD_TODO",
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
  padding-bottom: 1000px;

  & > div {
    border: 1px solid #8f8f8f;
    border-radius: 4px;
    padding: 24px;
    width: 50%;
    margin: 32px;
  }

  .add-button {
    width: 100%;
    padding: 4px;
  }
}
</style>
