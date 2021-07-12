<template>
  <div id="nav">
    <app-layout>
      <router-view />
    </app-layout>
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayoutComponent";
import firebase from "firebase";
import { mapMutations } from "vuex";

export default {
  components: { AppLayout },
  beforeMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user);

      console.log(user);
      const isAuthPages =
        this.$route.path === "/login" || this.$route.path === "/registration";
      if (!user) {
        this.$router.replace("/login");
      } else if (isAuthPages) {
        this.$router.replace("/");
      }
    });
  },
  methods: {
    ...mapMutations({
      setUser: "SET_USER",
    }),
  },
};
</script>

<style>
@import "./assets/global.css";
</style>
