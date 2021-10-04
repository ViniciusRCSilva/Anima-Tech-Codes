// Mecanismo de ordenamento de valores de um array

var valores = [8, 7, 6, 5, 4, 3, 2, 1];

function sort() {
    let inicio = 0;
    let fim    = 8;
    let tmp;

    for(vezes = 0; vezes < valores.length; vezes++) {
        for(pos = inicio; pos<fim-1-vezes; pos++) {
            if(valores[pos] > valores[pos+1]) {
                tmp = valores[pos];
                valores[pos] = valores[pos+1];
                valores[pos+1] = tmp;
            }
        }
    }
}

sort();
console.log(valores);