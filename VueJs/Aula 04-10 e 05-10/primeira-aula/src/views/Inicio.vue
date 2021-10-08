<template>
<div>
  <div class="tituloLista">
    <h1>Lista de estudo</h1>
  </div>
<div class="listaLinguagens">
  <div v-for="linguagem in linguagens" :key="linguagem.index">
    <CardTime :titulo="frase" :linguagem="linguagem"/>
  </div>
</div>
</div>

</template>

<script>
import CardTime from '../components/CardTime.vue'

import js_img from '@/assets/js_logo.png'
import c_img from '@/assets/c_logo.png'
import java_img from '@/assets/java_logo.png'

export default {
  name: 'Inicio',
  components: {
    CardTime
  },
  data() {
    return {
      frase: "Linguagem",
      linguagens:[{
          img:js_img,
          nome: "JavaScript"
        },
        {
          img:c_img,
          nome: "C"
        },
        {
        img:java_img,
        nome: "Java"
      }
      ]
    }
  }
}

</script>

<style>
.tituloLista {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.listaLinguagens {
  display: flex;
  flex-wrap: wrap;
}
</style>