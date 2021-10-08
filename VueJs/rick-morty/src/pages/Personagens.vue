<template>
<div>
  <img class="logoImg" alt="RickMortyLogo" src="../assets/rm_logo.png">
  <b-container fluid class="back-ground">
    <b-row>
      <h1>Lista de Personagens</h1>
    </b-row>
    <CardPersonagem />
  </b-container>
</div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardPersonagem from '../components/CardPersonagem.vue'

export default {
  name: 'Personagens',
  components: {
    CardPersonagem
  },
/*
  data(){
    return{
      // Substitui a utilização dos mapGetters!!!
      listaPersonagens: {...this.$store.getters['personagem/listPersonagens']},
      listaEpisodios: {...this.$store.getters['episodio/listEpisodios']},
      listaLocais: {...this.$store.getters['local/listLocais']}
    }
  }, 
*/
  mounted(){
    this.getPersonagens()
  },
  methods: {
    ...mapActions('personagem', ['getPersonagens']),
  },
  computed: {
    ...mapGetters('personagem', ['listPersonagens']),
    
    /*
     * ...mapGetters( , , ),
    */
  }
}
</script>

<style>
.logoImg{
  width: 300px;
}
</style>
