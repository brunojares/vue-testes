<template>
    <button class="botao perigo" :type="tipo">{{ rotulo }}</button>
</template>
<script>
export default {
    props:[
        'rotulo',
        'tipo'
    ]
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
