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
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/admin/Admin.vue"),

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
  const DASHBOARD = "/dashboard"
  const auth = getAuth()
  auth.onAuthStateChanged(user => {
    if (user) {
      const { email, displayName, uid } = user
      store.dispatch("updateUser", { email, displayName, uid });

      if (to.path === LOGIN || to.path === SIGN_UP) {
        next({ path: DASHBOARD })
      }
      next()
    } else {
      if (to.path !== LOGIN && to.path !== SIGN_UP && to.path !== HOME) {
        next({ path: LOGIN })
      }
    }
  })

  next()
})

export default router
