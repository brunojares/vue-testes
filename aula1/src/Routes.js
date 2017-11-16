import Cadastro from './components/pagina/Cadastro.vue';
import Home from './components/pagina/Home.vue';

export default{
    rotas: [
        { path: '', name: 'home', component: Home , titulo: 'Home'},
        { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro' },
        { path: "*", component: Home}
      ]
}