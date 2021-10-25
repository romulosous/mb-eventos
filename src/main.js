import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


//Plugins
import vuetify from './plugins/vuetify'
import firebaseApp from "./plugins/firebase"
import moment from "./plugins/moment"




Vue.config.productionTip = false
Vue.use(firebaseApp)
Vue.use(moment)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
