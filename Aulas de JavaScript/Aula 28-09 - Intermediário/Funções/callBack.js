/* function primeiroBloco() {
    setTimeout(function(){
        console.log('Esse é o primeiro bloco após 5 seg.');
    }, 5000);
}

function segundoBloco() {
    console.log('Esse é o segundo bloco.');
} */

// primeiroBloco();
// segundoBloco();

function exibeMensagemNaOrdem(mensagem, callback){
    console.log(mensagem);
    callback();
}

exibeMensagemNaOrdem('Primeira mensagem na ordem', function(){
    console.log('Segunda mensagem na ordem');
});