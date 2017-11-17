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
        rotas: Routes.rotas.filter(r => r.titulo)
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
  transition-property: opacity;
  transition-duration: .25s;
}

.trz-pagina-enter-active {
  transition-delay: .25s;
}

.trz-pagina-enter, .trz-pagina-leave-active {
  opacity: 0
}

.erro{
    color: red;    
}
</style>
