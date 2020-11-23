import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.css';
/* eslint-enable import/no-extraneous-dependencies */
import 'bootstrap-vue/dist/bootstrap-vue.css';

import './assets/main.scss';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
