<template>
<div id="nav">
    <router-link class="link" to="/">Início</router-link>
    <router-link class="link" to="/sobre">Sobre</router-link> 
    <router-link class="link" to="/maisinformacoes">Mais Informações</router-link>
</div>
</template>

<script>
export default ({
    name: "Header"
})
</script>

<style scoped>
/*scoped -> só irá utilizar nesse escopo*/
#nav {
  display: flex;
  justify-content: end;
  border-bottom: 1px solid rgb(160, 160, 160);
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.link {
  padding-right: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
