<template>
    <button :class="estiloBotao" :type="tipo" @click="button_click()">{{ rotulo }}</button>
</template>
<script>
export default {
    props:{
        tipo:{
            type:String,
            required: true
        },
        rotulo: String,
        confirmaAntes: Boolean,
        estilo: String
    },
    methods:{
        button_click(){
            if(this.confirmaAntes){
                if(confirm('Confirma ' + this.rotulo + '?'))
                    this.$emit('quandoClick', 'Valor enviado do botão para a pagina');
                return;
            }
            this.$emit('quandoClick', 'Valor enviado do botão para a pagina');
        }
    },
    computed:{
        estiloBotao(){
            if( (!this.estilo || 0 === this.estilo.length))
                return 'botao padrao';
            else
                return 'botao ' + this.estilo;
        }
    }
}
</script>

<style scoped>
    .botao{
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }
    .perigo{
        background: firebrick;
        color: white;
    }
    .padrao{
        background: darkcyan;
        color: white;
    }
</style>

</style>
