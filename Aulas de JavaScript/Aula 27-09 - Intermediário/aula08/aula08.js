var cidadao = {};

cidadao.idade = 15;

console.log(`${cidadao.idade} anos, então...`);

if(cidadao.idade < 16) {
    console.log('Não pode votar.');
} else if(cidadao.idade == 18) {
    console.log('Voto obrigatório.');
} else if(cidadao.idade > 65 || cidadao.idade < 18) {
    console.log('Voto opcional.');
}