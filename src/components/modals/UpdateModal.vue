<template>
  <div class="modal-temp">
    <div class="modal">
      <div class="modal__header">
        <div class="modal__header--text">Update task</div>
        <div class="modal__header--button" @click="$emit('close')">x</div>
      </div>
      <input type="text" v-model="name" placeholder="Task name" />
      <textarea placeholder="Task description" v-model="description"></textarea>
      <button @click="update" class="modal__button">UPDATE</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propName: String,
    propDescription: String,
  },
  data() {
    return {
      name: this.propName,
      description: this.propDescription,
    };
  },
  methods: {
    update() {
      this.$emit("close");
      this.$emit("update", { name: this.name, description: this.description });
    },
  },
};
</script>

<style lang="scss">
.modal-temp {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.71);
  display: flex;
  align-items: center;
  z-index: 500000;
  justify-content: space-around;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.modal {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 8px;
  text-align: left;
  padding: 16px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    &--button {
      display: flex;
      align-items: center;
      padding: 5px;
      background: #dbdbdb;
      border-radius: 4px;
    }
  }

  input {
    padding: 8px;
    font-size: 16px;
    margin-bottom: 8px;

    &::placeholder {
      font-size: 16px;
    }
  }

  textarea {
    padding: 8px;
    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }

  &__button {
    margin-top: 16px;
    padding: 8px;
  }
}
</style>
