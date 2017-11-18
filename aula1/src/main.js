import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VeeValidate, { Validator } from 'vee-validate';
import pt_BR from 'vee-validate/dist/locale/pt_BR'

import Routes from './Routes';
//import './directives/Transform';



Vue.use(VueResource);
Vue.use(VueRouter);
Validator.localize('pt_BR', pt_BR);
Vue.use(VeeValidate, {
  locale: 'pt_BR'
});

Vue.http.options.root = 'http://localhost:3000';

const router = new VueRouter({
    routes: Routes.rotas
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
