import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyB6AW6IK01DDd7FjFPqr7f-lVNIZDdv1PA",
  authDomain: "aqi-project-1cd4d.firebaseapp.com",
  databaseURL: "https://aqi-project-1cd4d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aqi-project-1cd4d",
  storageBucket: "aqi-project-1cd4d.appspot.com",
  messagingSenderId: "64983844473",
  appId: "1:64983844473:web:eaf15f2ab8f8c5cdbf36a8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
