// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data){
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth())
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date('2024-07-24 00:00:00');
const dataBrasil = formataData(data);
console.log(dataBrasil);



