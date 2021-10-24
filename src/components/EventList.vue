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
            v-for="(event, index) in events"
            :key="index"
          >
            <v-card class="mx-auto my-12" max-width="374">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title>{{ event.title }}</v-card-title>

              <v-card-text>
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
      if (value.length <= 100) return value;
      return `${value.substring(0, 100)}...`;
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
  created() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      const { data } = await api.get("/events");
      this.events = data;
    },
  },
};
</script>
