<template>
  <div class="register">
    <h1>Registration</h1>
    <hr />
    <form @submit.prevent="register">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />

      <div class="footer">
        <router-link to="/login">Already have account?</router-link>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Registration",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          this.$router.replace("/");
        })
        .catch((err) => alert(err));
    },
  },
};
</script>

<style lang="scss">
.register {
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
