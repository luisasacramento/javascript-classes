/*
*False - valor falso literal

FALSY 
valores q avaliam em falso em js
0
'' "" ``
null/undefined
NaN
*/



// && -> "o valor falso"
function falaOi(){
    return 'Oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());

console.log('Luisa' && 'Neves' && 'Cristina' && 0 && 'Santos'); //retorna o 0 - valor 'falso'





// || -> "O valor verdadeiro mesmo"
console.log(0 || false || null || 'Luisa Neves' || true); //retorna o 'Luisa Neves'



//Exeercicio

const a  = 0;
const b  = null;
const c  = 'false'; //Vai retornar esse
const d  = false;
const e  = NaN;

console.log(a || b || c || d || e)






