<template>
  <div class="login">
    <h1>Login</h1>
    <hr />
    <form @submit.prevent="login">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div class="footer">
        <router-link to="/registration">Register here</router-link>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login.vue",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          // some mutation or storage manipulation for set current user
          // just for example
          localStorage.setItem("user", JSON.stringify(user));
          this.$router.replace("/");
        })
        .catch((err) => alert(err));
    },
  },
};
</script>

<style lang="scss">
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  border: 1px solid #8f8f8f;
  min-width: 400px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 12px;

    input {
      margin-bottom: 12px;
      outline: none;
      border: 1px solid #8f8f8f;
      padding: 4px;
      border-radius: 4px;
      font-size: 20px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        padding: 4px;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
