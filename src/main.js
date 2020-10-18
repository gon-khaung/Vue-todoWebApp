import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css';
import './assets/app.css';
import Notifications from 'vue-notification'


Vue.use(Notifications)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
