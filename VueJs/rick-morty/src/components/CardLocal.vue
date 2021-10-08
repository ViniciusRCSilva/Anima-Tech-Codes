<template>
  <div>
    <b-row>
      <b-card
        v-for="local in listLocais"
        :key="local.index"
        :title="local.name"
        style="max-width: 20rem"
        class="card--style"
      >
        <b-card-text class="card__personagem--detail">
          <span>Tipo: {{ local.type }}</span>
          <span>Dimensão: {{ local.dimension }} </span>
          <!-- <span>Moradores: {{ local.residents }} </span> -->
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
    name: 'CardLocal',
    data(){
        return{
           pageNumber: 1 
        }
    },
    computed:{
        ...mapGetters("local", ['listLocais', 'getPageIndex'])
    },
    methods:{
        ...mapActions('local', ['getLocalByPage']),
        proximaPagina(id) {
            let params = {
                id: id,
                pageIndex: this.pageNumber,
            };
            this.getLocalByPage(params).then(() => {
                this.$store.commit("local/SET_PAGE_INDEX", params.pageIndex);
            });
        },
        paginaAnterior(id) {
            let params = {
                id: id - 1,
                pageIndex: this.pageNumber,
            };
            this.getLocalByPage(params).then(() => {
                this.$store.commit("local/REMOVE_PAGE_INDEX", params.pageIndex);
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