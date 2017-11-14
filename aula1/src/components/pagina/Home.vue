<template>
    <div>
        <h1 class="titulo">{{ titulo }}</h1>
        <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtro">
        <ul class="lista">
        <li v-for="itemFoto of fotosComFiltro">
            <cmp-painel :titulo='itemFoto.titulo'>
                <img class="miniatura" :src="itemFoto.url" :alt="itemFoto.titulo"/>
                <cmp-botao tipo="button" rotulo="Remover" @click.native="removeItem(itemFoto)" />
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
        filtro: ''
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
        removeItem(foto){
            alert('Removeu ' + foto.titulo);
        }
    },
    created(){
      this.$http
      .get('http://localhost:3000/v1/fotos')
      .then(
          resp => this.lista = resp.body,
          erro => console.error(erro)
      )
    ;
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
