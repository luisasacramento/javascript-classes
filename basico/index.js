console.log("meu nome é 'Luisa'. Estou aprendendo Javascript as", 14, "da tarde")

//Variáveis

/* Let

Não podemos criar váriaveis com palavras reservadas
Váriaveis precisam ter nomes significativos
Não pode começar o nome de uma variável com um número
Não podem conter traços
Utilizamos camelCase
Case-sensitive
Não podemos redeclarar variáveis com let
não utilizar var - permite redeclaração */

let nomeCliente = "Luisa"
console.log(nomeCliente)
console.log(typeof nomeCliente) //saber o tipo da variável


/* const

Não podemos criar constantes com palavras reservadas
constantes precisam ter nomes significativos
Não pode começar o nome de uma constante com um número
Não podem conter traços
Utilizamos camelCase
Case-sensitive
Não podemos modificar o valor de uma constante (Assignment to constant variable)
não utilizar var - permite redeclaração*/

const nomeExemplo = 'João';
console.log(nomeExemplo)

const number = 5;
console.log(typeof number) //saber o tipo da constante


//Exercícios
/*
Luisa Cristina Santos tem 18 AnalyserNode, pesa 55 kg
tem 1.6 de altura e seu IMC é de tatata
Luisa Nasceu em 2005
*/

const nome = 'Luisa Cristina'
const sobrenome = 'dos Santos';
const idade = 18;
const peso = 55;
const altura = 1.60;

let imc = peso / (altura*altura)
let anoNascimento =  2024 - idade


console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem',altura, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento);


//concatenação
console.log(nome + '' + sobrenome, ' tem ' +  idade + ' anos, pesa ' + peso +'kg')

//template strings ${nomeVariavel} - forma mais legivel
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`); 
console.log(`${nome} nasceu em, ${anoNascimento}`);


// Tipos de Dados Primitivo

/* 
number, string, boolean(true,false) (lógico), undefined, null, symbol 


undefined = não aponta para lugar nenhum na memória, nunca configurar nada com undefined, se quiser q não aponte para nada na memoria usar null

null nulo - não aponta para lugar nenhum na memória - usada para desconfigurar uma váriavel, tornar algum valor nulo / Quero q seja nulo
*/


// Operadores Aritméticos 

/* + adição,concatenação, -subtracao, /divisao, *multiplicaçao, **potenciacao, 
%resto da divisão
assim como na matematica também tem precedencia

incremento ++
decremento --

*/

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

//usar contador sempre em let
let contador = 1;
contador++;//2
contador++;//3
--contador// volta pra  2
console.log(contador)


//atribuição
let contadorExemplo = 0;
contadorExemplo += 4; //contador = contador + passo
contadorExemplo += 4; 
contadorExemplo +=4; 
console.log(contadorExemplo)



//NaN - Not a Number