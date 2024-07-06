// nome das funções regras são iguas as de variavel

// a função não executa mais nada após o return, ele encerra a funão ali

function saudacao(nome){
    return `Bom dia ${nome}`;
}


function soma(x,y){
    return x + y;
}

function outroSoma(x,y){
    const resultado = x +y;
    return resultado
}

console.log(soma(2,2))
console.log(outroSoma(2,2))



//funções anonimas

//precisa do ;
const raiz = function (n){
    return n **0.5
};
console.log(raiz(9));
console.log(raiz(16));


// arrow function

const outroRaiz = (n) => {
    return n **0.5
};
console.log(outroRaiz(25));
console.log(outroRaiz(44));