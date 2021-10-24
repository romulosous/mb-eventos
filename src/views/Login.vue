<template>
  <v-app>
    <!-- <v-container class="fill-height" fluid> -->
    <v-container class="mt-16" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" lg="4">
          <v-card class="elevation-12">
            <v-toolbar dark color="deep-purple">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>

            <p
              v-if="invalidLogin"
              class="purple--text ma-0 pa-0 pt-4 text-center"
            >
              Senha ou email inválido!!!
            </p>

            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                @submit="login"
                lazy-validation
              >
                <v-text-field
                  single-line
                  :rules="emailRules"
                  placeholder="Informe seu email"
                  autocomplete="on"
                  v-model="email"
                  type="email"
                  required
                  ><v-icon slot="prepend" color="deep-purple accent-1">
                    mdi-account
                  </v-icon></v-text-field
                >

                <v-text-field
                  single-line
                  id="password"
                  v-model="password"
                  placeholder="Informe sua senha"
                  autocomplete="on"
                  type="password"
                >
                  <v-icon slot="prepend" color="deep-purple accent-1">
                    mdi-lock
                  </v-icon>
                </v-text-field>
                <v-btn
                  class="rounded-0 mt-3"
                  color="deep-purple"
                  x-large
                  block
                  dark
                  @click="login"
                  >Entrar</v-btn
                >
                <v-card-actions>
                  <v-checkbox color="black" label="Remember me"></v-checkbox>
                  <v-spacer></v-spacer>
                  Não tem uma conta?
                  <router-link
                    style="color: #000000"
                    class="ml-1"
                    to="/sign-up"
                  >
                    Inscrever-se</router-link
                  >
                </v-card-actions>
              </v-form>
            </v-card-text>

            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
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
  data: () => ({
    valid: false,
    invalidLogin: false,
    email: "",
    password: "",
    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail inválido",
    ],
  }),
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredencial) => {
          // const {photoURL, email, displayName, uid} = userCredencial.user
          // Signed in
          const user = userCredencial.user;
          this.$router.push("/").catch(() => {});
          // this.$router.replace("/");
        })
        .catch((error) => {
          this.invalidLogin = true;
        });
    },
    firebaseConfigs() {
      const googleAuthProvider = new GoogleAuthProvider();

      const auth = new getAuth();

      return { googleAuthProvider, auth };
    },
    signInWithGooglePopup() {
      const { auth, googleAuthProvider } = this.firebaseConfigs();
      signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
          console.log("Error in signin popup with google", result);
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;

          // The signed-in user info.
          // const user = result.user;
        })
        .catch((error) => {
          console.log("Error in signin popup with google", error);

          // Handle Errors here.
          // const errorCode = error.code;

          // const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.email;

          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
        });
    },
  },
  watch: {
    email() {
      this.invalidLogin = false;
    },
    password() {
      this.invalidLogin = false;
    },
  },
};
</script>



<style>
</style>