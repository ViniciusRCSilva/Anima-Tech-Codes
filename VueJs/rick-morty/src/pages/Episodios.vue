<template>
<div>
  <img class="logoImg" alt="RickMortyLogo" src="../assets/rm_logo.png">
  <b-container fluid class="back-ground">
    <b-row>
      <h1>Lista de Episódios</h1>
    </b-row>
    <CardEpisodio />
  </b-container>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardEpisodio from '../components/CardEpisodio.vue'

export default ({
  name: 'Episodios',
  components:{
    CardEpisodio
  },
  mounted(){
    this.getEpisodios()
  },
  methods: {
    ...mapActions('episodio', ['getEpisodios'])
  },
  computed: {
    ...mapGetters('episodio', ['listEpisodios'])
    
    /*
     * ...mapGetters( , , ),
    */
  }
})
</script>

<style>
.logoImg{
  width: 300px;
}
</style>
