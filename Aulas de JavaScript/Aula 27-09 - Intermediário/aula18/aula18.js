class Retangulo {
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    calculaArea() {
        return this.altura * this.largura;
    }

    get area() {
        return this.calculaArea();
    }
}

const obj = new Retangulo(3, 3);

console.log(obj);
console.log(`Área do objeto = ${obj.area}`);