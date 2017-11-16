import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import Routes from './Routes';
import './directives/Transform';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'http://localhost:3000/';

const router = new VueRouter({
    routes: Routes.rotas
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
