var a, b, rest;
[a, b, ...rest] = [1, 2, 3, 4, 5];

// 'a' recebe o valor 1
console.log(a);
// 'b' recebe o valor 2
console.log(b);
// 'rest' recebe o resto do array
console.log(rest);

var c, d, rest2;
({c, d} = {c: 1, d: 2});

// 'c' recebe o valor 1
console.log(c);
// 'd' recebe o valor 2
console.log(d);
// 'rest2' recebe nada -> undefined
console.log(rest2);