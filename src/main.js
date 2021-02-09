import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as echarts from "echarts";
import axios from 'axios';



Vue.config.productionTip = false
axios.defaults.baseURL = "http://127.0.0.1:3333/";
Vue.prototype.$htttp = axios;
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
