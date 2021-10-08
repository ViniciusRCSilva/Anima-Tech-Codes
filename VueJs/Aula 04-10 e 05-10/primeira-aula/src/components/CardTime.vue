<template>
    <div class="card-time">
        <h3>{{ titulo }}</h3>
        <!-- :src -> bind -->
        <img alt="img" class="img" :src="linguagem.img">
        <strong>{{ linguagem.nome }}</strong>
        <span v-if="taEstudando"><strong>Situação:</strong> Estudando</span>
        <span v-else><strong>Situação:</strong> Parado</span>
        <strong>Mudar situação</strong>
        <div class="botoes">
            <b-button v-show="!estudando" variant="success" @click="estudar">Estudar</b-button>
            <b-button v-show="estudando" variant="danger" @click="parar">Parar</b-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardTime',
  data() {
    return{
      estudando: false
    }
  },
  computed:{
      taEstudando() {
          if(this.estudando) {
            return true
          }
          return false
      }
  },
  methods: {
      estudar() {
          this.estudando = true
      },
      parar() {
         this.estudando = false 
      }
  },
  props: {
      titulo: String,
      linguagem: Object
  }
}
</script>

<style>
.card-time {
    background-color: rgb(200, 200, 200);
    border: 1px solid rgb(160, 160, 160);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
}

.img {
  margin-top: 10px;
  width: 70px;
}

.botoes {
    display: flex;
    flex-direction: row;
}
</style>