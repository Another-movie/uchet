<template>
  <div class="actions">
    {{ user?.email || "Username" }}
    <span @click="logout"><i class="fas fa-sign-out-alt"></i></span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import firebase from "firebase";

export default {
  name: "NavigationActions",
  computed: mapState(["user"]),
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((data) => console.log(data))
        .catch((err) => alert(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin-left: 8px;
    cursor: pointer;
  }
}
</style>
