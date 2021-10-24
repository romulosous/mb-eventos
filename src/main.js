import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import firebaseApp from "./plugins/firebase"
import router from './router'
import store from './store'


//Plugins
import vuetify from './plugins/vuetify'
import "./plugins/firebase"


Vue.config.productionTip = false
Vue.use(firebaseApp)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
