<template>
<div>
  <h1>{{ titulo }}</h1>
  <span>{{ subtitulo }}</span>
  <Card />
</div>
</template>

<script>
let leiaMais = window.document.getElementById('leiaMais')
import Card from '@/components/Card.vue'

export default {
    name: "MaisInformacoes",

    data(){
      return {
        titulo: 'Mais Informações',
        subtitulo: 'Leia mais'
      }
    },

    components: { 
      Card 
    },

    methods: {
      exibirMensagem() {
        window.alert('Foi clicado')
      }
    }
}
</script>

<style>
  .leiaMais{
    cursor: pointer;
  }
</style>