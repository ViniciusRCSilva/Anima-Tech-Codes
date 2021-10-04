//              variável irá receber uma função que retorna a data de hoje
var agora = new Date();
//              função que retorna o dia
var dia = agora.getDay();

console.log('Hoje o dia da semana é...');

switch(dia) {
    case 0:
        console.log('Domingo');
        break;  
    case 1:
        console.log('Segunda-feira');
        break;
    case 2:
        console.log('Terça-feira');
        break;
    case 3:
        console.log('Quarta-feira');
        break;
    case 4:
        console.log('Quinta-feira');
        break;
    case 5:
        console.log('Sexta-feira');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido!');
}