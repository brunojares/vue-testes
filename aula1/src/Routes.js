import Cadastro from './components/pagina/Cadastro.vue';
import Home from './components/pagina/Home.vue';

export default{
    rotas: [
        { path: '', component: Home , titulo: 'Home'},
        { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' }
      ]
}