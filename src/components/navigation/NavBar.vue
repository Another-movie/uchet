<template>
  <div class="nav-bar">
    <div class="nav-bar__header">
      <img
        src="https://image.flaticon.com/icons/png/512/3884/3884597.png"
        alt=""
      />
    </div>
    <nav class="nav-bar__navigation">
      <navigation-menu></navigation-menu>
      <navigation-actions></navigation-actions>
    </nav>
  </div>
</template>

<script>
import NavigationMenu from "@/components/navigation/NavigationMenu";
import NavigationActions from "@/components/navigation/NavigationActions";
export default {
  name: "NavBar",
  components: { NavigationActions, NavigationMenu },
};
</script>

<style lang="scss">
.nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 92px;
  background: #9eda6f;
  text-align: center;

  &__header {
    padding: 8px 0;
    img {
      max-height: 40px;
    }
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
    margin: 0 24px;
  }
}
</style>
