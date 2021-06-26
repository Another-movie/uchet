<template>
  <div class="task">
    <input type="checkbox" v-model="checked" v-if="isEditable" />
    <div class="task__name">
      <div>{{ task.name }} | {{ task.date }}</div>
      <div>{{ textFormatter(task.description) }}</div>
    </div>
    <template v-if="isEditable">
      <button @click="$emit('del')">delete</button>
      <button @click="$emit('upd')">update</button>
    </template>
  </div>
</template>

<script>
// { done: Boolean, name: String, description: String, Date: '' }
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      required: true,
    },
    isEditable: {
      type: Boolean,
      default: () => true,
    },
  },
  computed: {
    checked: {
      get() {
        return this.task.checked;
      },
      set() {
        this.$emit("check");
      },
    },
  },
  methods: {
    textFormatter(text) {
      console.log(text);

      return text ? text.slice(0, 70) : "";
    },
  },
};
</script>

<style lang="scss">
.task {
  display: flex;
  align-items: center;
  margin: 20px 0;

  input {
    margin-right: 8px;
  }

  &__name {
    :first-child {
      font-size: 16px;
      font-weight: 500;
      color: #000;
    }

    :last-child {
      font-size: 16px;
      font-weight: normal;
      color: #bdb4b4;
      max-width: 80%;
      word-break: normal;
    }
  }
}
</style>
