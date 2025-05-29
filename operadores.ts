//=== OPERADORES ===
let a: number = 10;
let b: number = 5;

//Aritméticos
console.log('Soma:', a + b);
console.log('Subtração:', a - b);
console.log('Multiplicação:', a * b);
console.log('Divisão:',  a / b);
console.log('Resto', a % b);

//Relacionais
console.log('Igual:', a == b);
console.log('Diferente:', a != b);
console.log('Maior que:', a > b);
console.log('Menor que:', a < b);
console.log('Maior ou igual:', a >= b);
console.log('Menor ou igual:', a <= b);

//Identidade estrita
console.log('idêntico:', a === b);
console.log('Não idêntico:', a !== b);

//Lógicos
let x: boolean = true;
let y: boolean = false;

console.log('AND:', x && y);
console.log('OR:', x || y);
console.log('NOT:', !x)

//Operador condicional (ternário)
let idade: number = 17;
let acesso = idade >= 18 ? 'Pode beijar na boca' : 'Não pode'; //condicao ? valor se true : valor se false