<template>
  <div>
    <div class="justify-center text-center">
      <h1 class="pa-2">Eventos</h1>
    </div>
    <template>
      <v-container>
        <v-row class="text-center">
          <v-col
            cols="12"
            md="4"
            sm="6"
            v-for="(event, index) in $allEvents"
            :key="index"
          >
            <v-card class="mx-auto pa-4 my-12" max-width="374">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title class="">
                <div class="headerClass ma-auto">
                  {{ event.title }}
                </div>
              </v-card-title>

              <v-card-text class="v-card-description">
                <p :title="event.description">
                  {{ event.description | limitText }}
                </p>
              </v-card-text>

              <v-divider class="mx-16"></v-divider>

              <v-card-text>{{ event.startDate | formatDate }}</v-card-text>

              <v-card-actions class="text-center">
                <v-btn color="deep-purple lighten-2 text-center" text>
                  Reserve
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>
import moment from "moment-timezone";
moment.locale("pt-br");

import { api } from "../services/api";

export default {
  name: "HelloWorld",
  filters: {
    limitText(value) {
      if (!value) return "";
      if (value.length <= 80) return value;
      return `${value.substring(0, 80)}...`;
    },
    formatDate(date) {
      if (date) {
        return moment(String(date)).format("LLLL");
      }
      return date;
    },
  },
  data: () => ({
    events: null,
  }),
  computed: {
    $allEvents() {
      return this.$store.getters.$allEvents;
    },
  },
  created() {
    // this.getEvents();
    this.$store.dispatch("fetchEvents");
  },
  methods: {
    // async getEvents() {
    //   const { data } = await api.get("/events");
    //   this.events = data;
    // },
  },
};
</script>

<style scoped>
.headerClass {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.v-card-description {
  /* white-space: nowrap; */
  max-height: 80px;
  word-break: normal;
  overflow: hidden;
  /* text-overflow: ellipsis; */
}
</style>
