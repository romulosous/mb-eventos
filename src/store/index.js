import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    user: {
      id: "",
      name: "",
      email: ""
    }

  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload)
    }
  },
  actions: {
    fetchEvents(context) {
      const events = [
        {
          id: "1",
          title: "Event Go",
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
          createdAt: "2021-10-17",
          updateAt: "2021-10-17",
          deletectAt: null,
          deletecBy: null,
        },
        {
          id: "2",
          title: "Minicurso Vuejs",
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
          createdAt: "2021-10-17",
          updateAt: "2021-10-17",
          deletectAt: null,
          deletecBy: null,
        },
        {
          id: "3",
          title: "Minicurso Nodejs",
          description:
            "O Node. js se caracteriza como um ambiente de execução JavaScript. Com ele, o usuário pode criar aplicações sem depender do browser para isso. Com alta capacidade de escalabilidade, boa flexibilidade, arquitetura e baixo custo, torna-se uma ótima opção para programação.",
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
          createdAt: "2021-10-17",
          updateAt: "2021-10-17",
          deletectAt: null,
          deletecBy: null,
        },
        {
          id: "4",
          title: "Corrida Maluca",
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
          createdAt: "2021-10-17",
          updateAt: "2021-10-17",
          deletectAt: null,
          deletecBy: null,
        },
        {
          id: "5",
          title: "Campeonato de CSGO",
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
          createdAt: "2021-10-17",
          updateAt: "2021-10-17",
          deletectAt: null,
          deletecBy: null,
        },
        {
          id: "6",
          title: "Do While Rocketseat 2021",
          description:
            "O Node. js se caracteriza como um ambiente de execução JavaScript. Com ele, o usuário pode criar aplicações sem depender do browser para isso. Com alta capacidade de escalabilidade, boa flexibilidade, arquitetura e baixo custo, torna-se uma ótima opção para programação.",
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
          createdAt: "2021-10-17",
          updateAt: "2021-10-17",
          deletectAt: null,
          deletecBy: null,
        },
      ]
      context.commit("SET_EVENTS", events)
    },
    updateUser(context, payload) {
      context.commit("UPDATE_USER", payload)
    }
  },
  getters: {
    $allEvents(state) {
      return state.events
    },
    $user(state) {
      return state.user
    }
    // $getEventbyID: state => (id) => state.events.find(event => event.id == id),
    // $getEventbyID: (state) => (id) => {
    //   return state.events.find(event => event.id === id)
    // }


    // return state.events

  }
})
