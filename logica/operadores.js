/*
Operadores de Comparação
- Sempre retornam um boolean

> Maior que
>= Maior ou igual a 
< menor que 
<= menor que ou igual a 
== igualdade (valor) - não usar
=== igualdade estrita (valor e tipo)
!= diferente (valor) - não usar
!== diferente estrito (valor e tipo)

*/ 

const num1 = 10;
const num2 = '10';
const resultado = num1 == num2;//não usar
const resultadoOutro = num1 === num2;//usar
console.log(resultado);//vai falar que 10 tipo number é igual a 10 do tipo string
console.log(resultadoOutro);// aqui vai dar false, pois eles não são iguais



/* 
Operadores Lógicos
&& -> AND -> E -> todas as expressões precisam ser verdadeiras para retornar true

|| -> OR -> OU -> Se pelo menos uma expressao for true a expressão toda vai ser true, se TODAS forem falsas ai sim a expressão retorna false                  
! -> NOT -> NÃO - inverte uma expressão
*/


const expressaoAnd = true && true && true && true;

const expressaoOr = true || false || false || false;

console.log(expressaoAnd);
console.log(expressaoOr);

//NOT
console.log(!false);//retorna true
console.log(!true);//retorna false

console.log(!!true);//vira false e depois vira true de novo, pois está negando duas vezes


