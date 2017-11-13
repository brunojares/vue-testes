import Cadastro from './components/pagina/Cadastro.vue';
import Home from './components/pagina/Home.vue';

export default{
    rotas: [
        { path: '', component: Home },
        { path: '/cadastro', component: Cadastro }
      ]
}