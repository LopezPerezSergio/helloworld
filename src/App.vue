<!-- En la etiqueta template se estara escribiendo el codigo HTML que va a contener la aplicacion-->
<template>
  <!-- Conociendo los componentes -->
<!-- 
    <h1>Hola mundo estos son mis posts</h1>
    <h1>Listado de Post:</h1>
          <PostContainer/> -->

  <!-- Conociendo el OpcionAPI -->
  <!-- <CounterOptionAPI /> -->

  <!-- Conociendo el compositionAPI  -->
  <CounterCompositionAPI />
</template>

<!-- Contiene la logica y los datos de dicho componente en TypeScript -->
<script lang="ts" setup>
/* Conociendo los componentes */
/*     import PostContainer from './components/PostContainer.vue';
 */

/* Conociendo el OpcionAPI */
/* import CounterOptionAPI from './components/CounterOptionAPI.vue' */

/* Conociendo el compositionAPI */
import CounterCompositionAPI from './components/CounterCompositionAPI.vue'
</script>

<!-- Estilos que afectara al componente -->
<style>
h1 {
  color: green;
}
</style>
