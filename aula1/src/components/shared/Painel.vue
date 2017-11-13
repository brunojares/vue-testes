<template>
    <div class="painel" @dblclick="visivel = !visivel">
        <div class="titulo">{{ titulo }}</div>
        <transition name="fade">
        <div class="conteudo" v-show="visivel">
            <slot></slot>         
        </div>
        </transition>
    </div>
</template>
<style>
ul.lista li div.painel{
  text-align: center;
}
ul.lista div.painel .titulo{
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>

<script>
export default {
    props: [
        'titulo'
    ],
    data(){
        return {
            visivel: false
        }
    }  
}
</script>

