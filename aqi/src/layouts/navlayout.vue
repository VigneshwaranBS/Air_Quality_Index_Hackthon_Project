<template>
    <v-app-bar
    color="deep-purple lighten-5"
      elevate-on-scroll
    >
      <v-toolbar-title>Air Quality Index </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text type="submit" @click="logout">
          Log Out
          <v-icon right > mdi-logout-variant </v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>