<template>
  <div>
    <v-app-bar color="deep-purple" class="mb-10" dense dark>
      <v-toolbar-title class="ml-4">MB Eventos</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon> </v-app-bar-nav-icon>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon aria-hidden="false"> mdi-account </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title
              ><a class="purple--text">Perfil</a></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><a class="purple--text" @click.once="signOut"
                >signOut</a
              ></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>


<script>
import { mdiAccount } from "@mdi/js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export default {
  name: "Header",
  data: () => ({
    icons: {
      mdiAccount,
    },
  }),
  methods: {
    signOut() {
      getAuth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style>
</style>
