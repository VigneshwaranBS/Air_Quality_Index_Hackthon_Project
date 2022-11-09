<template>
  <v-app>
    <!-- <v-app-bar
    color="deep-purple lighten-5"
      elevate-on-scroll
    >

      <v-toolbar-title>Air Quality Index </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text type="submit" @click="logout">
          Log Out
          <v-icon right > mdi-logout-variant </v-icon>
        </v-btn>
    </v-app-bar> -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/");
        });
    },
  },
};
</script>

<style >
#nav {
  display: flex;
  /* justify-content: flex-end; */
}
/* .v-app-bar{
 Background-color: #FCF5FF;
} */
</style>
