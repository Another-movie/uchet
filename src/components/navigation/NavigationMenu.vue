<template>
  <ul class="navigation">
    <li class="navigation__item">
      <router-link to="/">Home</router-link>
    </li>
    <li class="navigation__item">
      <router-link to="/about" :exact-active-class="isActiveRoute('/about')"
        >About</router-link
      >
    </li>
    <li class="navigation__item">
      <div class="navigation__item--sub">
        <div class="sub-btn">More <i class="fal fa-caret-down"></i></div>
        <div class="sub-content">
          <router-link to="/company">Company</router-link>
          <router-link to="/company">Company</router-link>
          <router-link to="/company">Company</router-link>
          <router-link to="/company">Company</router-link>
          <router-link to="/company">Company</router-link>
          <router-link to="/company">Company</router-link>
          <router-link to="/company">Company</router-link>
          <router-link to="/company">Company</router-link>
          <router-link to="/team">Team</router-link>
          <router-link to="/careers">Careers</router-link>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavigationMenu",
  methods: {
    isActiveRoute(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  margin: 0 24px;

  &__item {
    list-style: none;

    a {
      text-decoration: none;
      margin: 0 10px;
    }

    &--sub {
      float: left;
      overflow: hidden;
      color: #2c3e50;
      margin: 0 10px;
      font-weight: bold;

      .sub-content {
        border-top: 1px solid #8f8f8f;
        display: none;
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 1;
        background: #9eda6f;

        a {
          float: left;
          color: white;
          padding: 4px;

          &:hover {
            background: green;
          }
        }
      }

      &:hover .sub-content {
        display: block;
      }
    }
  }
}
</style>
