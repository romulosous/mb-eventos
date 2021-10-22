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
        // const partsDate = date.split("-").map(Number);

        // const newDate = new Date(
        //   partsDate[0],
        //   partsDate[1] - 1,
        //   partsDate[2],
        //   12,
        //   10
        // );
        // const formattedDate = moment(newDate).format("LLLL");
        // return formattedDate;

        return moment(String(date)).format("LLLL");
      }
      return date;
    },
  },
  data: () => ({
    events: [
      {
        title: "Evento Go",
        description:
          "Plataforma que possibilita inscrição, cadastro e check-in de atletas em eventos esportivos como Mountain Bike",
        price: 0,
        startDate: "2021-10-20",
        endDate: "2021-10-21",
        startHour: 13,
        endHour: 15,
        owner: {
          name: "Some name",
          email: "someemail@gmail.com",
        },
        users: [
          {
            name: "Some name 2",
            email: "someemail2@gmail.com",
          },
          {
            name: "Some name 3",
            email: "someemail3@gmail.com",
          },
        ],
        address: {
          zipcode: "64605490",
          disctrict: "Pantanal",
          city: "Picos",
          state: "Piauí",
          country: "Brasil",
          street: "Quadra 10",
          number: 11,
          complement: "",
        },
        tags: ["Mountain bike", "Corrida"],
        createdAt: "2021-10-17",
        updateAt: "2021-10-17",
        deletectAt: null,
        deletecBy: null,
      },
      {
        title: "Programação Front-end",
        description:
          "O front-end é onde encontramos a 'cara' de um site ou aplicativo, com design, interface de navegação e ferramentas de interação com o usuário, como áreas de buscas e formulários.",
        price: 0,
        startDate: "2021-10-20",
        endDate: "2021-10-21",
        startHour: 13,
        endHour: 15,
        owner: {
          name: "Some name",
          email: "someemail@gmail.com",
        },
        users: [
          {
            name: "Some name 2",
            email: "someemail2@gmail.com",
          },
          {
            name: "Some name 3",
            email: "someemail3@gmail.com",
          },
        ],
        address: {
          zipcode: "64605490",
          disctrict: "Pantanal",
          city: "Picos",
          state: "Piauí",
          country: "Brasil",
          street: "Quadra 10",
          number: 11,
          complement: "",
        },
        tags: ["Vue", "Frontend", "Vuetify"],

        createdAt: "2021-10-17",
        updateAt: "2021-10-17",
        deletectAt: null,
        deletecBy: null,
      },
      {
        title: "Programação back-end",
        description:
          "O desenvolvimento Back-end é aquele que gerencia as informações server-side (do lado do servidor), que inclui o sistema de gestão de dados e o funcionamento lógico de sistemas, aplicativos, sites e componentes, que funcionam por meio de uma interface desenvolvida pelos Desenvolvedores Front-end.",
        price: 0,
        startDate: "2021-10-20",
        endDate: "2021-10-21",
        startHour: 13,
        endHour: 15,
        owner: {
          name: "Some name",
          email: "someemail@gmail.com",
        },
        users: [
          {
            name: "Some name 2",
            email: "someemail2@gmail.com",
          },
          {
            name: "Some name 3",
            email: "someemail3@gmail.com",
          },
        ],
        address: {
          zipcode: "64605490",
          disctrict: "Pantanal",
          city: "Picos",
          state: "Piauí",
          country: "Brasil",
          street: "Quadra 10",
          number: 11,
          complement: "",
        },
        tags: ["Back-end", "Node", "Danone"],
        createdAt: "2021-10-17",
        updateAt: "2021-10-17",
        deletectAt: null,
        deletecBy: null,
      },
      {
        title: "Desenvolvimento Mobile",
        description:
          "É a criação e o desenvolvimento de aplicativos, que podem trabalhar sozinhos, depois de instalados no aparelho, ou em conjunto com sua plataforma online. Serve para disponibilizar seus produtos ou conteúdos nos mais diversos dispositivos, como smartphones e tablets.",
        price: 0,
        startDate: "2021-10-20",
        endDate: "2021-10-21",
        startHour: 13,
        endHour: 15,
        owner: {
          name: "Some name",
          email: "someemail@gmail.com",
        },
        users: [
          {
            name: "Some name 2",
            email: "someemail2@gmail.com",
          },
          {
            name: "Some name 3",
            email: "someemail3@gmail.com",
          },
        ],
        address: {
          zipcode: "64605490",
          disctrict: "Pantanal",
          city: "Picos",
          state: "Piauí",
          country: "Brasil",
          street: "Quadra 10",
          number: 11,
          complement: "",
        },
        tags: ["Dart", "Flutter", "Mobile"],
        createdAt: "2021-10-17",
        updateAt: "2021-10-17",
        deletectAt: null,
        deletecBy: null,
      },
    ],
    users: [
      {
        name: "Romulo",
        password: "123qwe",
        email: "Romulo@gmail.com",
        createdAt: "2021-10-17",
        updateAt: "2021-10-17",
        deletectAt: null,
        deletecBy: null,
      },
      {
        name: "teste",
        password: "teste123",
        email: "teste@gmail.com",
        createdAt: "2021-10-17",
        updateAt: "2021-10-17",
        deletectAt: null,
        deletecBy: null,
      },
    ],
  }),
  methods: {},
};
</script>
