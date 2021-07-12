import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

/* eslint-disable */
const firebaseConfig = {
  apiKey: "AIzaSyDIpEfJBJLOzf75qcluedfOTeP_5qlMeK4",
  authDomain: "auth-uchet.firebaseapp.com",
  projectId: "auth-uchet",
  storageBucket: "auth-uchet.appspot.com",
  messagingSenderId: "463738220539",
  appId: "1:463738220539:web:0a62c04eb0085677d7a55e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
