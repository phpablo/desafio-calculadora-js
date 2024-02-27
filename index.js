var readlineSync = require('readline-sync');
var nome = readlineSync.question('Qual seu nome ? ');
console.log('Você digitou:' + nome);


// Não funciona
// var nome = prompt('Qual seu nome ?');
// console.log(`Olá ${nome}`);
