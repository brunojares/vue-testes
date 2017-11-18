<template>
    <nav>
      <u>
        <li v-for="rota in rotas">
            <router-link :to="rota.path != '' ? rota.path : '/'">{{ rota.titulo }}</router-link>
        </li>
      </u>
    </nav>  
</template>

<script>
export default {
    props:[
        'rotas'
    ]
}
</script>