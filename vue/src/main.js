import Vue from 'vue'
import App from '@/components/App.vue'
import router from './router';
import Vuex from 'vuex'
import storeRoot from './store'
import { sync } from "vuex-router-sync";
import { Input, Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Input)
Vue.use(Button)
Vue.use(Vuex)
Vue.config.productionTip = false


const store = new Vuex.Store(storeRoot)
sync(store, router);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
