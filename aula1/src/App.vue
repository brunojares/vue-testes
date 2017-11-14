<template>
  <div class="pagina">
    <nav>
      <u>
        <li v-for="rota in rotas">
            <router-link :to="rota.path != '' ? rota.path : '/'">{{ rota.titulo }}</router-link>
        </li>
      </u>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Routes from './Routes';
export default {
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
</style>
