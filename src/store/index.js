import Vue from 'vue'
import Vuex from 'vuex'


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { collection, getDocs, getFirestore } from "firebase/firestore";




Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    login: false,
    user: {
      name: "",
      email: "",
      uid: ""
    },
    user_events: null
  },
  mutations: {
    SET_EVENTS(state, event) {
      state.events.push(event)
    },
    UPDATE_LOGIN(state, payload) {
      state.login = payload
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload)
    },
    UPDATE_USER_EVENTS(state, payload) {
      state.user_events = payload
    },
    ADD_USER_EVENTS(state, payload) {
      state.user_events.unshit(payload)
    }
  },
  actions: {
    async getEvents(context) {

      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "events"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const data = doc.data()
        data.id = doc.id
        context.commit("SET_EVENTS", data)
      });

    },
    getUserEvents(context) {
      // Firebase
      const userEvents = context.state.events.filter((event) => {
        return event.owner.id === context.state.user.uid
      })
      context.commit("UPDATE_USER_EVENTS", userEvents)

    },
    getUser(context, { email, password }) {
      const auth = getAuth();
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredencial) => {
          // Signed in
          const { email, displayName, uid } = userCredencial.user;

          context.commit("UPDATE_USER", { email, displayName, uid })
          context.commit("UPDATE_LOGIN", true)

        })
    },
    createUser(context, { email, password }) {
      const auth = getAuth();
      return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const { email, displayName, uid } = userCredential.user;

          context.commit("UPDATE_USER", { email, displayName, uid })
          context.commit("UPDATE_LOGIN", true)

        })

    },
  },
  getters: {
    $allEvents(state) {
      return state.events
    },
    $user(state) {
      return state.user
    }
  }
})

// const events = [
      //   {
      //     title: "Event Go",
      //     description:
      //       "Plataforma que possibilita inscrição, cadastro e check-in de atletas em eventos esportivos como Mountain Bike",
      //     price: 0,
      //     numberTickets: 50,
      //     startDate: "2021-10-20",
      //     endDate: "2021-10-21",
      //     startHour: 13,
      //     endHour: 15,
      //     owner: {
      //       id: "2PUBRdVjX1VyiHk4lDFTukFtovD3",
      //       name: "Some name",
      //       email: "someemail@gmail.com",
      //     },
      //     users: [
      //       {
      //         name: "Some name 2",
      //         email: "someemail2@gmail.com",
      //       },
      //       {
      //         name: "Some name 3",
      //         email: "someemail3@gmail.com",
      //       },
      //     ],
      //     address: {
      //       zipcode: "64610000",
      //       disctrict: "Nobre",
      //       city: "Sussuapara",
      //       state: "Piauí",
      //       country: "Brasil",
      //       street: "Rua Projetada",
      //       number: 12,
      //     },
      //     created_at: "2021-10-17",
      //     updated_at: "2021-10-17",
      //     deleted_at: null,
      //     deleted_by: null,
      //   },
      //   {
      //     title: "Minicurso Vuejs",
      //     description:
      //       "O front-end é onde encontramos a 'cara' de um site ou aplicativo, com design, interface de navegação e ferramentas de interação com o usuário, como áreas de buscas e formulários.",
      //     price: 0,
      //     startDate: "2021-10-20",
      //     endDate: "2021-10-21",
      //     startHour: 13,
      //     endHour: 15,
      //     owner: {
      //       id: "2PUBRdVjX1VyiHk4lDFTukFtovD3",
      //       name: "Some name",
      //       email: "someemail@gmail.com",
      //     },
      //     users: [
      //       {
      //         name: "Some name 2",
      //         email: "someemail2@gmail.com",
      //       },
      //       {
      //         name: "Some name 3",
      //         email: "someemail3@gmail.com",
      //       },
      //     ],
      //     address: {
      //       zipcode: "64610000",
      //       disctrict: "Carnaubal",
      //       city: "Sussuapara",
      //       state: "Piauí",
      //       country: "Brasil",
      //       street: "Rua 14 de Dezembro",
      //       number: 12,
      //     },
      //     created_at: "2021-10-17",
      //     updated_at: "2021-10-17",
      //     deleted_at: null,
      //     deleted_by: null,
      //   },
      //   {
      //     title: "Minicurso Nodejs",
      //     description:
      //       "O Node. js se caracteriza como um ambiente de execução JavaScript. Com ele, o usuário pode criar aplicações sem depender do browser para isso. Com alta capacidade de escalabilidade, boa flexibilidade, arquitetura e baixo custo, torna-se uma ótima opção para programação.",
      //     price: 0,
      //     startDate: "2021-10-20",
      //     endDate: "2021-10-21",
      //     startHour: 13,
      //     endHour: 15,
      //     owner: {
      //       name: "Some name",
      //       email: "someemail@gmail.com",
      //     },
      //     users: [
      //       {
      //         name: "Some name 2",
      //         email: "someemail2@gmail.com",
      //       },
      //       {
      //         name: "Some name 3",
      //         email: "someemail3@gmail.com",
      //       },
      //     ],
      //     address: {
      //       zipcode: "64610000",
      //       disctrict: "Santa Luzia",
      //       city: "Sussuapara",
      //       state: "Piauí",
      //       country: "Brasil",
      //       street: "Rua Projetada",
      //       number: 10,
      //     },
      //     created_at: "2021-10-17",
      //     updated_at: "2021-10-17",
      //     deleted_at: null,
      //     deleted_by: null,
      //   },
      //   {
      //     title: "Maratona de programação",
      //     description:
      //       "Plataforma que possibilita inscrição, cadastro e check-in de atletas em eventos esportivos como Mountain Bike",
      //     price: 0,
      //     startDate: "2021-10-20",
      //     endDate: "2021-10-21",
      //     startHour: 13,
      //     endHour: 15,
      //     owner: {
      //       name: "Some name",
      //       email: "someemail@gmail.com",
      //     },
      //     users: [
      //       {
      //         name: "Some name 2",
      //         email: "someemail2@gmail.com",
      //       },
      //       {
      //         name: "Some name 3",
      //         email: "someemail3@gmail.com",
      //       },
      //     ],
      //     address: {
      //       zipcode: "64610000",
      //       disctrict: "Santa Luzia",
      //       city: "Sussuapara",
      //       state: "Piauí",
      //       country: "Brasil",
      //       street: "Rua Projetada",
      //       number: 15,
      //     },
      //     created_at: "2021-10-17",
      //     updated_at: "2021-10-17",
      //     deleted_at: null,
      //     deleted_by: null,
      //   },
      //   {
      //     title: "Campeonato de CSGO",
      //     description:
      //       "O front-end é onde encontramos a 'cara' de um site ou aplicativo, com design, interface de navegação e ferramentas de interação com o usuário, como áreas de buscas e formulários.",
      //     price: 0,
      //     startDate: "2021-10-20",
      //     endDate: "2021-10-21",
      //     startHour: 13,
      //     endHour: 15,
      //     owner: {
      //       name: "Some name",
      //       email: "someemail@gmail.com",
      //     },
      //     users: [
      //       {
      //         name: "Some name 2",
      //         email: "someemail2@gmail.com",
      //       },
      //       {
      //         name: "Some name 3",
      //         email: "someemail3@gmail.com",
      //       },
      //     ],
      //     address: {
      //       zipcode: "64610000",
      //       disctrict: "Santa Luzia",
      //       city: "Sussuapara",
      //       state: "Piauí",
      //       country: "Brasil",
      //       street: "Rua Projetada",
      //       number: 17,
      //     },
      //     created_at: "2021-10-17",
      //     updated_at: "2021-10-17",
      //     deleted_at: null,
      //     deleted_by: null,
      //   },
      //   {
      //     title: "Do While Rocketseat 2021",
      //     description:
      //       "O Node. js se caracteriza como um ambiente de execução JavaScript. Com ele, o usuário pode criar aplicações sem depender do browser para isso. Com alta capacidade de escalabilidade, boa flexibilidade, arquitetura e baixo custo, torna-se uma ótima opção para programação.",
      //     price: 0,
      //     startDate: "2021-10-20",
      //     endDate: "2021-10-21",
      //     startHour: 13,
      //     endHour: 15,
      //     owner: {
      //       name: "Some name",
      //       email: "someemail@gmail.com",
      //     },
      //     users: [
      //       {
      //         name: "Some name 2",
      //         email: "someemail2@gmail.com",
      //       },
      //       {
      //         name: "Some name 3",
      //         email: "someemail3@gmail.com",
      //       },
      //     ],
      //     address: {
      //       zipcode: "64610000",
      //       disctrict: "Santa Luzia",
      //       city: "Sussuapara",
      //       state: "Piauí",
      //       country: "Brasil",
      //       street: "Rua Projetada",
      //       number: 18,
      //     },
      //     created_at: "2021-10-17",
      //     updated_at: "2021-10-17",
      //     deleted_at: null,
      //     deleted_by: null,
      //   },
      // ]