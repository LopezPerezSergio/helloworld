<!--Conociendo componente con Option API version -2 de VUE -->
<template>
    <h3>{{ counter }}</h3>

    <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts">
import { defineComponent } from "vue"; /* Desestructuramos para usar solo el defineComponent de VUE */
export default defineComponent({
    name: 'CounterOptionAPI',   /* Le damos un nombre a nuestro componente */
    components: {},             /* Si se incluyen componentes se agregan entre las llaves, importando cada uno de ellos */
    data() {                    /* Definimos los datos que se estaran utilizando */
        let counter = 0;
        return { counter }
    },
    methods: {                  /* Definimos los Metodos que se estaran utilizando */
        addCounter() {
            this.counter++
        },
    }
}) /* Exportamos la definicion de nuestro componente para que pueda ser usada*/
</script>

<style></style>