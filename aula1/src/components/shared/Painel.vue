<template>
    <div class="painel">
        <div class="titulo">{{ titulo }}</div>
        <slot class="conteudo">          
        </slot>         
    </div>
</template>
<<style>
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
</style>

<<script>
export default {
    props: [
        'titulo'
    ]  
}
</script>

