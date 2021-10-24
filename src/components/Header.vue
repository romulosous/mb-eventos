<template>
  <div>
    <v-app-bar color="deep-purple" class="mb-10" dense dark>
      <v-toolbar-title class="ml-4">MB Eventos</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon> </v-app-bar-nav-icon>
      <v-btn @click="signOut">Deslogar</v-btn>
    </v-app-bar>
  </div>
</template>


<script>
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export default {
  name: "Header",
  methods: {
    signOut() {
      getAuth()
        .signOut()
        .then(() => {
          console.log("desloguei");
          this.$router.replace("login");
        });
    },
  },
};
</script>

<style>
</style>
