import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'


import { getAuth } from '@firebase/auth'
import store from "../store/index"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requestAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUp
  },
  {
    path: "/evento/:id",
    name: "event",
    component: () => import("../views/Event.vue"),
    props: true
  },
  {
    path: "/usuario",
    component: () => import("../views/admin/User.vue"),
    children: [
      {
        path: "/",
        name: "user",
        component: import("../views/admin/UserEvents.vue"),
      },
      {
        path: "inscricoes",
        name: "registrations",
        component: import("../views/admin/UserRegistrations.vue")

      },
    ]
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import("../views/NotFound.vue")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const HOME = "/"
  const LOGIN = "/login"
  const SIGN_UP = "/sign-up"
  const DASHBOARD = "/usuario"
  const auth = getAuth()
  auth.onAuthStateChanged(user => {
    if (user) {
      const { email, displayName, uid } = user
      store.commit("UPDATE_USER", { email, displayName, uid });
      store.commit("UPDATE_LOGIN", true);

      if (to.path === LOGIN || to.path === SIGN_UP) {
        next({ path: DASHBOARD })
      }
      next()
    } else {
      // to.path !== SIGN_UP && to.path !== HOME && to.path !== EVENT
      if (to.path === DASHBOARD) {
        next({ path: LOGIN })
      }
    }
  })

  next()
})

export default router
