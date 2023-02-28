<!--Conociendo componente con Composition API version -2 de VUE -->
<template>
    <h3>{{ counter }}</h3>

    <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue"; /* Desestructuramos para usar solo el defineComponent de VUE */
export default defineComponent({
    name: 'CounterCompositionAPI',  /* Le damos un nombre a nuestro componente */
    components: {},                 /* Si se incluyen componentes se agregan entre las llaves, importando cada uno de ellos */
    setup() {                       /* Formato de trabajo con Composition API */
        let counter: Ref = ref(0)    /* Se tipa en typeScrip counter es de Tipo Ref ----- En JS no es necesario */
        const addCounter = (): void => { /* Se tipa en typeScrip el metodo es de Tipo Void ----- En JS no es necesario */
            counter.value++
        }
        return { counter, addCounter }
    }
}) /* Exportamos la definicion de nuestro componente para que pueda ser usada*/
</script>

<!-- al poner el SETUP en el script se interpreta que ya se esta utilizando la importacion del defineComponent y ahorramos codigo
<script lang="ts" setup>
import { Ref, ref } from "vue";                      
    let counter:Ref = ref(0)           
    const addCounter = ():void => {  
        counter.value++
    }
</script>
 -->
<style></style>