import Vue from 'vue'
import Vuex from 'vuex'


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";




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
    user_events: []
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
    UPDATE_USER_EVENTS(state, event) {
      state.user_events.push(event)
    },
    ADD_USER_EVENTS(state, event) {
      state.user_events.unshit(event)
    }
  },
  actions: {
    async getEvents(context) {

      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "events"));
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        context.commit("SET_EVENTS", data)
      });

    },
    async getUserEvents(context) {
      const db = getFirestore();
      const auth = getAuth()
      const q = query(collection(db, "events"), where("owner.id", "==", auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        context.commit("UPDATE_USER_EVENTS", data)
      });
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
    },
  }
})
