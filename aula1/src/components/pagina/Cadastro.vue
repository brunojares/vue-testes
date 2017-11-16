<template>
    <div>
        <h1 class="titulo">Cadastro</h1>        
        <h2 class="titulo">{{ item.titulo }}</h2>
        <form @submit.prevent="grava()">
            <div class="controle">
                <label for="titulo">Titulo</label>                
                <input name="titulo" id="titulo" 
                    autocomplete="off"
                    v-model="item.titulo"
                >
            </div>            
            <div class="controle">
                <label for="url">Url</label>
                <input name="url" id="url" 
                    autocomplete="off"
                    v-model.lazy="item.url"
                >
                <img class="miniatura" :src="item.url"  :alt="item.titulo" v-show="item.url"/>                
            </div>                        
            <div class="controle">
                <label for="descricao">Descrição</label>
                <textarea 
                    name="descricao" id="descricao" 
                    autocomplete="off" 
                    cols="30" rows="10"
                    v-model="item.descricao"
                ></textarea>
            </div>
            <div class="centralizado">
                <cmp-botao rotulo="Gravar" estilo="perigo" tipo="submit"/>
                <router-link :to="{ name: 'home' }"><cmp-botao rotulo="Voltar" tipo="button"></cmp-botao></router-link>
            </div>
        </form>
    </div>
</template>
<script>
import Botao from '../shared/Botao.vue';
import Foto from '../../domain/foto/Foto';
import FotoServico from '../../domain/foto/FotoServico';

export default {
    components:{
        'cmp-botao': Botao
    },
    data(){
        return {
            item: new Foto()
        };
    },
    methods:{
        grava(){
            console.log('chegou no grava');
            this.fotoServico.salva(
                this.item,
                () => this.item = new Foto()
            );
        }
    },
    created(){
        this.fotoServico = new FotoServico(this.$resource);
        if(this.$route.params.id){
            this.fotoServico
                .porId(
                    this.$route.params.id,
                    dados => this.item = dados
                )
            ;
        }
    }
}
</script>
<style>
.controle{
    font-size: 1.2em;
    margin-bottom: 20px;
}
.controle label{
    display: block;
    font-weight: bold;
}
.controle label + input, .controle textarea{
    width: 100%;
    font-size: inherit;
    border-radius: 5px;
}
.centralizado{
    text-align: center;
}
img.miniatura{
  width: 200px;
  margin-top: 10px;
}
</style>

