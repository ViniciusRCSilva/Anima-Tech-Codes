<template>
  <div>
    <b-row>
      <b-card
        v-for="episodio in listEpisodios"
        :key="episodio.index"
        :title="episodio.name"
        style="max-width: 20rem"
        class="card--style"
      >
        <b-card-text class="card__personagem--detail">
          <span>Data de lançamento: {{ episodio.air_date }}</span>
          <span>Episódio: {{ episodio.episode }} </span>
          <!-- <span>Personagens presentes: {{ episodio.characters }} </span> -->
        </b-card-text>
      </b-card>
    </b-row>

    <div class="row">
      <b-container class="btn__act--pages">
        <b-button
          variant="dark"
          :disabled="getPageIndex < 2"
          @click="paginaAnterior(getPageIndex)"
          >Anterior</b-button
        >
        <b-button 
            variant="dark" 
            @click="proximaPagina(getPageIndex)"
          >Proximo</b-button
        >
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CardEpisodio',
    data(){
        return{
           pageNumber: 1 
        }
    },
    computed:{
        ...mapGetters("episodio", ['listEpisodios', 'getPageIndex'])
    },
    methods:{
        ...mapActions('episodio', ['getEpisodioByPage']),
        proximaPagina(id) {
            let params = {
                id: id,
                pageIndex: this.pageNumber,
            };
            this.getEpisodioByPage(params).then(() => {
                this.$store.commit("episodio/SET_PAGE_INDEX", params.pageIndex);
            });
        },
        paginaAnterior(id) {
            let params = {
                id: id - 1,
                pageIndex: this.pageNumber,
            };
            this.getEpisodioByPage(params).then(() => {
                this.$store.commit("episodio/REMOVE_PAGE_INDEX", params.pageIndex);
            });
        }
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card__personagem--detail {
  display: flex;
  flex-direction: column;
}
.card--style {
  margin: 16px;
  border: 1px solid black;
}
.btn__act--pages {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px auto 20px auto;
}
</style>