<template>
  <div id="app">
    <div id="nav">
      <router-link class="link" to="/">Personagens</router-link> |
      <router-link class="link" to="/episodios">Episódios</router-link> |
      <router-link class="link" to="/locais">Locais</router-link> |
      <router-link class="link" to="/sobre">Sobre</router-link>
      <div class="linha"></div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.linha{
  display: flex;
  width: 100%;
  margin-top: 10px;
  padding: 1px;
  border-radius: 5px;
  background-color: #25a4a8;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.link {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #25a4a8;
}
</style>
