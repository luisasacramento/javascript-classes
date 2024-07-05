//                 0         1       2
const alunos = ['luisa', 'maria', 'joao'];
alunos[0] = 'Eduardo';//modifica 
alunos[3] = 'Luiz'; //acrescento o indice 3
console.log(alunos)
console.log(alunos[2]);

alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Luiza';//adicona no fim 
console.log(alunos)

alunos.push('Otavio', 'Fabio');//adicona no fim 
console.log(alunos)

alunos.unshift('Fabiana');//adiciona no começo, move todos os outro elementos e adiciona como indice 0
console.log(alunos)

const removido = alunos.pop();//remove o ultimo elemento
console.log(removido);
console.log(alunos);

const removidoExemplo = alunos.shift();//remove o primeiro elemento
console.log(removidoExemplo);
console.log(alunos)

// delete alunos[1];//deleta o valor e o indice porem fica como empty
console.log(alunos[1]); 

console.log(alunos.slice(0,3));//fatia três elementos

console.log(alunos.slice(0, -1));// tamanho do array -1

console.log(typeof alunos);// array é um objeto em js
console.log(alunos instanceof Array);//true =é array, false = não é array


