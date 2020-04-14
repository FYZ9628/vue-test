// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
import xlsx from 'xlsx'
// Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(xlsx)

const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8000/api'

Vue.prototype.$axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
