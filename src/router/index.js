import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'


import { getAuth } from '@firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requestAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import("../views/NotFound.vue")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const SIGN_UP = "/sign-up"
  const LOGIN = "/login"
  const PAGINA_INICIAL_AUTENTICADO = "/"
  const auth = getAuth()
  auth.onAuthStateChanged(user => {
    if (user) {
      if (to.path === LOGIN) {
        next({ path: PAGINA_INICIAL_AUTENTICADO })
      }
      next()
    } else {
      if (to.path !== LOGIN && to.path !== SIGN_UP) {
        next({ path: LOGIN })
      }
    }
  })

  next()
})

export default router
