

//(condição) ? 'Valor para verdadeiro' : 'Valor para false';
const pontuacaoUsuario = 999;
                                            
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal';
console.log(nivelUsuario);



const corUsuario = null;
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao);




if (pontuacaoUsuario >= 1000){
    console.log('Usuario Vip');
}else{
    console.log('Usuario Normal');
}