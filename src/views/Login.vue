<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card style="height: 320px" class="elevation-12">
            <v-toolbar dark color="purple">
              <v-toolbar-title>Fazer Login</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-container>
                  <v-text-field
                    single-line
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ><v-icon slot="prepend" color="deep-purple accent-1">
                      mdi-account
                    </v-icon></v-text-field
                  >

                  <v-text-field
                    single-line
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                  >
                    <v-icon slot="prepend" color="deep-purple accent-1">
                      mdi-lock
                    </v-icon>
                  </v-text-field>
                </v-container>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="purple" class="white--text ml-4" to="/"
                >Entrar</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>



<script>
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default {
  methods: {
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
};
</script>



<style>
</style>