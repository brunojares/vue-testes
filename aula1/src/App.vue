<template>
  <div class="pagina">
    <cmp-menuprincipal :rotas="rotas"/>
    <transition name="trz-pagina">
        <router-view></router-view>
    </transition>    
  </div>
</template>

<script>
import Routes from './Routes';
import Menu from './components/shared/Menu.vue';

export default {
  components:{
      'cmp-menuprincipal': Menu
  },
  data() {
      return {
        rotas: Routes.rotas
      };
  }
}
</script>
<style>
.pagina{
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;  
}
.titulo{
  text-align: center;
}
.trz-pagina-enter-active, .trz-pagina-leave-active {
  transition: opacity .5s
}
.trz-pagina-enter, .trz-pagina-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

</style>
