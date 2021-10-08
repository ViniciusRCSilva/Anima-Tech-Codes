<template>
<div>
  <img class="logoImg" alt="RickMortyLogo" src="../assets/rm_logo.png">
  <b-container fluid class="back-ground">
    <b-row>
      <h1>Lista de Locais</h1>
    </b-row>
    <CardLocal />
  </b-container>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardLocal from '../components/CardLocal.vue'

export default ({
  name: 'Locais',
  components:{
    CardLocal
  },
  mounted(){
    this.getLocais()
  },
  methods: {
    ...mapActions('local', ['getLocais'])
  },
  computed: {
    ...mapGetters('local', ['listLocais'])
    
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