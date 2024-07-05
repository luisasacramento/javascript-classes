// // as strngs são indexadas, iteraveis
// //               01234567
let umaString = "Um texto";

console.log(umaString[5]);//x
console.log(umaString.charAt(6)) ///t
console.log(umaString.concat(' em',  ' um', ' lindo dia.'))
console.log(umaString.indexOf('texto'));// a palavra texto começa no indice 3
console.log(umaString.match(/[a-z]/g));//retorna todas as letras minusculas do texto
console.log(umaString.replace('Um', 'Outra'));// substitui 'Um' por 'Outra'

let exemploString = 'o rato roeu a roupa do rei de roma.';

console.log(exemploString.replace(/r/, '#'));//substitui o primeiro r

console.log(exemploString.replace(/r/g, '#'));//substitui todos os r

console.log(exemploString.length); //36 caracteres

console.log(exemploString.slice(2,6)); //fatiei a palavra rato

console.log(exemploString.slice(-5));// numero negativo vai fatiar de trás pra frente da string, 'quero q começe do tamanho da string -5'

//vai separar em arrays a partir do caracter desejado
console.log(exemploString.split(' '));
console.log(exemploString.split('r'));
console.log(exemploString.split(' ', 2));//só duas vezes

console.log(exemploString.toUpperCase());
console.log(exemploString.toLowerCase());


//Exercicios

const nome = 'Luisa Cristina dos Santos Neves'

console.log(nome.length);
console.log(nome[1]);
console.log(nome.indexOf('a'));
console.log(nome.lastIndexOf('a'));
console.log(nome.slice(-3));
console.log(nome.split(' '))
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());






