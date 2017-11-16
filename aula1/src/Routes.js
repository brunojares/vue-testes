import Cadastro from './components/pagina/Cadastro.vue';
import Home from './components/pagina/Home.vue';

export default{
    rotas: [
        { path: '', name: 'home', component: Home , titulo: 'Home'},
        { path: '/cadastro', name: 'novo', component: Cadastro, titulo: 'Cadastro' },
        { path: '/cadastro/:id', name: 'altera', component: Cadastro},
        { path: "*", component: Home}
      ]
}