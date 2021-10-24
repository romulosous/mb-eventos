import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

// Na hora que abrir a primeira tela, vai importar todo mundo...acessar 100 telas mesmo que só acesse duas...performace

import { getAuth } from '@firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home', //redirecionament programavel..mandar redirecionar para uma rota especifica
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
    // component: Home
    component: () => import("../views/NotFound.vue")
  }
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  /* component: () => import( webpackChunkName: "about" '../views/About.vue') */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const LOGIN = "/login"
//   const AUTHENTICATED_PAGE = "/"
//   getAuth().onAuthStateChanged(user => {
//     if (user) {
//       if (to.path === LOGIN) {
//         console.log(user)
//         next({ path: AUTHENTICATED_PAGE })
//       }
//       next()
//     } else {
//       if (to.path !== LOGIN) {
//         next({ path: LOGIN })
//       }
//     }
//   })
// })

export default router
