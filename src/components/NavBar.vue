<template>
  <div class="nav-bar">
    <div class="nav-bar__header">
      <img
        src="https://image.flaticon.com/icons/png/512/3884/3884597.png"
        alt=""
      />
    </div>
    <nav class="nav-bar__navigation">
      <ul class="nav-bar__navigation--list">
        <router-link to="/current">Текущие задачи</router-link>
        <router-link to="/done">Выполненные задачи</router-link>
      </ul>
      <ul class="nav-bar__navigation--actions">
        <router-link to="/login">
          <img src="@/assets/add-user.svg" alt="" />
        </router-link>
        <router-link to="/registration">
          <img src="@/assets/user.svg" alt="" />
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
.nav-bar {
  height: 92px;
  background: #9eda6f;
  text-align: center;

  &__header {
    img {
      max-height: 40px;
    }
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
    margin: 0 24px;

    &--list {
      @media (max-width: 360px) {
        display: none;
      }
      a {
        text-decoration: none;
        color: #dbdbdb;
        margin: 0 10px;
      }
    }

    &--actions {
      display: flex;
      justify-content: space-around;

      img {
        margin: 0 10px;
        width: 20px;
      }
    }
  }
}
</style>
