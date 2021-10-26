<template>
  <div>
    <h2 class="text-center mt-8 purple--text">Criar Evento</h2>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <p>Sobre o Evento:</p>
              <v-row style="border: 1px solid #c2c2c2; border-radius: 6px">
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="event.title"
                    label="Titulo"
                    required
                  ></v-text-field>
                  <v-textarea
                    class="pr-6"
                    v-model="event.description"
                    label="Descrição"
                    required
                  >
                  </v-textarea>
                  <v-row>
                    <v-col cols="6">
                      <v-select
                        v-model="select"
                        :items="items"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="valor"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        v-if="select === 'Pago'"
                        v-model.number="event.price"
                        label="valor"
                        type="number"
                        min="0.00"
                        max="999999.99"
                        step="0.01"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="ml-auto" cols="12" md="5">
              <p>Data e Hora:</p>
              <v-row style="border: 1px solid #c2c2c2; border-radius: 6px">
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="event.startDate"
                    label="Data de Inicio"
                    type="date"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="event.startHour"
                    label="StartHour"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="event.endDate"
                    label="Data de termino"
                    type="date"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="event.endHour"
                    label="Hora final"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <p class="mt-6">Endereço:</p>
          <v-row style="border: 1px solid #c2c2c2; border-radius: 6px">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="event.address.zipcode"
                label="Cep"
                type="number"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="event.address.country"
                :items="Countryitems"
                :rules="[(v) => !!v || 'Item is required']"
                label="País"
                required
              ></v-select>
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field
                v-model="event.address.state"
                label="Estado"
                type="text"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="event.address.city"
                label="Cidade"
                type="text"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="event.address.street"
                label="Rua"
                type="text"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="createEvent"
        >
          Criar
        </v-btn>
      </v-form>
    </v-container>
    <h2 class="text-center mt-8 purple--text">Meus Eventos</h2>
    <v-container>
      <v-row class="text-center">
        <v-col class="ml-auto mr-16">
          <v-card
            width="100%"
            v-for="event in user_events"
            :key="event.id"
            class="mx-auto pa-4 my-12"
          >
            <v-col cols="6">
              <v-img
                max-width="100%"
                height="70%"
                class="ma-auto"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
            </v-col>

            <v-col cols="12" md="6">
              <v-col cols="12" md="12">
                <v-main class="text-left">
                  <v-card-title class="v-card-title">
                    <div class="font-weight-bold">
                      {{ event.title }}
                    </div>
                  </v-card-title>
                </v-main>
              </v-col>
              <v-col cols="12" md="12">
                <v-card-actions class="text-center mr-auto">
                  <v-btn class="purple mr-4" color="white text-center" text>
                    Inscrição
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { mapState, mapActions } from "vuex";
export default {
  name: "UserEvents",
  data: () => ({
    valid: true,
    event: {
      title: "",
      description: "",
      numberTickets: null,
      price: 0,
      startDate: "",
      startHour: "",
      endDate: "",
      endHour: "",
      owner: {
        id: "",
        name: "",
        email: "",
      },
      address: {
        zipcode: "",
        city: "",
        state: "",
        country: "",
        street: "",
      },

      created_at: "",
      updateAt: "",
      delectedAt: null,
    },
    select: null,
    items: ["Pago", "Gratuito"],
    Countryitems: ["Brazil", "Portugal", "Japão"],
    checkbox: false,
  }),
  computed: {
    ...mapState(["user_events", "login", "user"]),
  },
  methods: {
    ...mapActions(["getUserEvents"]),
    async createEvent() {
      const db = getFirestore();
      try {
        const { email, uid: id } = getAuth().currentUser;
        const name = email.replace(/@.*/, "");

        this.event.owner = {
          email,
          name,
          id,
        };

        const docRef = await addDoc(collection(db, "events"), {
          ...this.event,
          created_at: this.formatDate(),
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    formatDate() {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const day = new Date().getDate();
      return year + "-" + month + "-" + day;
    },
  },
  created() {
    // console.log(this.$firebase);
    if (this.login) {
      this.getUserEvents();
    }
  },
  watch: {
    login() {
      this.getUserEvents();
    },
  },
};
</script>

<style>
</style>