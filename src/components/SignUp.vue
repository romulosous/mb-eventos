<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card style="height: 320px" class="elevation-12">
            <v-toolbar dark color="purple">
              <v-toolbar-title>Sign Up</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

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

                <v-checkbox
                  v-model="checkbox"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  label="Do you agree?"
                  required
                ></v-checkbox>

                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  Validate
                </v-btn>

                <v-btn color="error" class="mr-4" @click="reset">
                  Reset Form
                </v-btn>

                <v-btn color="warning" @click="resetValidation">
                  Reset Validation
                </v-btn>
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
export default {
  name: "SignUp",
};
</script>