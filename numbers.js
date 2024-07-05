let num1 = 10.2590298848848;
let num2 = 2.5; 

console.log(num1.toString() + num2)//altero temporariamente para string , a variavel ainda é um number
num1 = num1.toString(); //aqui eu altero a variavel em definitivo

console.log(num1.toString(2));//retornar o binário desse número
// console.log(num1.toFixed(2));//mostra duas casas decimais do número


console.log(Number.isInteger(num1));// caso voce receba um numero de uma base de dados, isso serve para verificar se é um inteiro

let temp = num1 * 'ola';
console.log(Number.isNaN(temp)); //se a conta for invalido retorna true, se a conta for valida retona false


//Objeto Math

let number1 = 9.54578;
//let number2 = Math.floor(number1);//arredonda pra baixo
//let number2 = Math.ceil(number1);//arredonda ´pra cima
let number2 = Math.round(number1);//arredonda pro numero mais proximo

console.log(number2)

console.log(Math.max(1,2,4,66,787,8,88))//retorna o maior numero da lista de numeros

console.log(Math.max(1,2,4,66,787,8,88))// retorna o menor numero da lista de numeros

console.log(Math.random()); //retorna um numero aleatorio entre 0 e 1, o 1 não está incluido

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);//numero aleatorio entre 10 e 5
console.log(aleatorio)

// 2 elevado a 10
console.log(Math.pow(2,10));
console.log(Math.pow(2 ** 10));

// saber a raiz quadrada
let number = 9;
console.log(number ** 0.5)
console.log(number ** (1/2));


