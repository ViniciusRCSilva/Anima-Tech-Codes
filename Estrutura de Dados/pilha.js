var elementos = [];
var topo      = -1;
const MAX     = 10;

function push(num) {
    if(topo < MAX) {
        topo = topo + 1;
        elementos[topo] = num;
    }else {
        console.log("Pilha cheia!");
    }
}

function isEmpty() {
    return topo == -1; 
}

function pop() {
    if(topo != -1) {
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    }else {
        console.log("Pilha vazia!");
    }
}

var numDec = 10;
var resto;

// Transformando para binário
while (numDec != 0) {
    resto = parseInt(numDec % 2);
    push(resto);
    numDec = parseInt(numDec / 2);
}

while (!isEmpty()) {
    console.log(pop());
}