<template>
    <div>
        <h1 class="titulo">{{ titulo }}</h1>
        <div v-show="mensagem" class="titulo">{{ mensagem }}</div>
        <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtro">
        <ul class="lista">
        <li v-for="itemFoto of fotosComFiltro">
            <cmp-painel :titulo='itemFoto.titulo'>
                <img class="miniatura" 
                    :src="itemFoto.url" 
                    :alt="itemFoto.titulo"
                    v-drv-transforma:rotaciona.reverso="{ valor: 180, intervalo: 1.5 }"
                />
                <cmp-botao tipo="button" 
                    rotulo="Remover" 
                    :confirma-antes="true"
                    estilo="perigo"
                    @quandoClick="removeItem($event, itemFoto)" 
                />
            </cmp-painel>         
        </li>
        </ul>        
    </div>
</template>

<script>
import Painel from '../shared/Painel.vue';
import Botao from '../shared/Botao.vue';

export default {
    components:{
        'cmp-painel': Painel,
        'cmp-botao': Botao
    },
    data () {
      return {
        titulo: 'Teste Beleza',
        lista: [ ],
        filtro: '',
        mensagem: ''
      }
    },
    computed:{
      fotosComFiltro(){
          if(this.filtro){
            let _exp = new RegExp(this.filtro.trim(), 'i');
            return this.lista.filter(f => _exp.test(f.titulo));
          }else
              return this.lista;
      }
    },
    methods:{
        removeItem($event, foto){
           this.$http
                .delete(`http://localhost:3000/v1/fotos/${foto._id}`)
                .then(
                    () => { 
                        this.atualizaListagem();
                        this.mensagem = 'Foto removida corretamente'; 
                    },
                    erro => {
                        this.mensagem = 'Erro ao remover foto';
                        console.error('Home.removeId()', erro);
                    }
                )
           ;           
           console.log($event);
        },
        atualizaListagem(){
            this.$http
                .get('http://localhost:3000/v1/fotos')
                .then(
                    resp => this.lista = resp.body,
                    erro => console.error('Home. carrega', erro)
                )
            ;            
        }
    },
    created(){
        this.atualizaListagem();
    }
}
</script>
<style>
ul.lista{
  list-style: none;
}
ul.lista li{
  padding: 0 auto;
  border: solid 2px gray;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px gray;
  width: 200px;
  /*height: 215px;*/
  vertical-align: top;
}
div.painel img.miniatura{
  width: 90%;
  margin: 5% 5%;
}
.filtro{
  width: 100%;
  display: block;
}
</style>
