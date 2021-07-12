<template>
  <div>
    <nav-bar></nav-bar>
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navigation/NavBar";

export default {
  name: "DefaultLayout",
  components: { NavBar },
};
</script>

<style>
.main {
  margin-top: 100px;
}
</style>
