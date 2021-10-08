<template>
    <div class="card-shape">
        <h1>Turma Treinamento VUE <img class="img" alt="Vue logo" src="../assets/logo.png"></h1>
        <span>Primeira Aula</span>
    </div>  
</template>

<script>
export default {
    name: "Card"
}
</script>

<style>
.card-shape {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-content: center;
    align-items: center;
    background-color: rgb(200, 200, 200);
    border: 2px solid rgb(160, 160, 160);
    border-radius: 5px;
    padding-bottom: 10px;
}

.img {
    width: 30px;
}
</style>