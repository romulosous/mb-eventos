 <template>
  <v-app>
    <!-- <v-container class="fill-height" fluid> -->
    <v-container class="mt-16" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" lg="4">
          <v-card class="elevation-12">
            <v-toolbar dark color="deep-purple">
              <v-toolbar-title>Criar uma conta</v-toolbar-title>
            </v-toolbar>

            <p
              v-if="invalidAccount"
              class="purple--text ma-0 pa-0 pt-4 text-center"
            >
              Email já cadastrado!!!
            </p>

            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  single-line
                  :rules="nameRules"
                  autocomplete="on"
                  label="Nome"
                  v-model="name"
                  type="name"
                  required
                ></v-text-field>
                <v-text-field
                  single-line
                  :rules="emailRules"
                  autocomplete="on"
                  label="E-mail"
                  v-model.lazy="email"
                  type="email"
                  required
                ></v-text-field>

                <v-text-field
                  single-line
                  id="password"
                  v-model.lazy="password"
                  :rules="passwordRules"
                  autocomplete="on"
                  label="Password"
                  type="password"
                >
                </v-text-field>
                <v-btn
                  :disabled="!valid"
                  class="rounded-0 mt-3"
                  color="deep-purple"
                  x-large
                  block
                  dark
                  @click="signUp"
                  >Criar conta</v-btn
                >
                <v-card-actions class="text--secondary">
                  <v-spacer></v-spacer>
                  Já tem uma conta?
                  <router-link :to="{ name: 'login' }" class="pl-2 black--text"
                    >Entrar</router-link
                  >
                </v-card-actions>
              </v-form>
            </v-card-text>
            <v-card-actions class="ml-6 mr-6 text-center">
              <p>
                Ao continuar, você concorda com a
                <a href="#" class="pl-2 black--text">Política</a> e os
                <a href="#" class="pl-2 black--text">Termos de Uso </a>
                da MB Eventos.
              </p>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: "SignUp",
  data: () => ({
    valid: false,
    invalidAccount: false,
    name: "",
    nameRules: [
      (v) => !!v || "Nome é Obrigatório",
      (v) => v.length <= 10 || "O nome deve ter menos de 10 caracteres",
    ],
    email: "",
    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail inválido",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "",
      (v) =>
        v.length >= 8 || "Senha inválida! deve conter no minimo 8 caracteres",
    ],
  }),
  methods: {
    signUp() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.$router.push("/login");
        })
        .catch((error) => {
          this.invalidAccount = true;
        });
    },
  },
  watch: {
    email() {
      this.invalidAccount = false;
    },
    password() {
      this.invalidAccount = false;
    },
  },
};
</script>