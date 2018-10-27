import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

new Vue({
  store,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');
