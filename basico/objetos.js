// *posso usar funções dentro de objetos


//forma 1 
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

console.log(pessoa1.nome);
pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala();


//forma 2
//factory - função que retorna um objeto

function criaPessoa (nome, sobrenome, idade){
    return{ nome, sobrenome, idade };
}


const pessoa = criaPessoa('Luisa', 'Neves', 18);
console.log(pessoa);