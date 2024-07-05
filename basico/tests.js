// Códigos usados no console do Navegador

window.alert('Opa')
window.confirm('deseja apagar?') // pressionar ok retorna true, pressionar cancel retorna false
window.prompt('Digite seu nome:' )



let num1 = parseInt(prompt('Digite um número: '))
let num2 = parseInt(prompt('Digite outro número: '))

const resultado = num1 + num2
alert(`O resultado é ${resultado}`)

//Exercícios
let varA = 'a' //b 
let varB = 'b' //c
let varC = 'c' //a

let varAux = varA

varA = varB
varB = varC
varC = varAux
console.log(varA, varB, varC)



//Outra Forma


// let varA = 'a'; //b 
// let varB = 'b'; //c
// let varC = 'c';//a

// [varA, varB, varC] = [varB, varC, varA]

// console.log(varA, varB, varC)