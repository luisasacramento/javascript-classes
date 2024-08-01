const data = new Date();

function getDiaDaSemanaTexto(diaSemana) {
    let diaSemanaTexto
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'Terca'
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto
        case 5: 
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto
        case 6: 
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto
        
    }
}

function getNomeMes( numeroMes) {
    let nomeMes

    switch (numeroMes) {
        case 0:
            nomeMes = 'janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'junho';
            return nomeMes;
        case 6:
            nomeMes = 'julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'setembro';
            return nomeMes;
        case 9:
            nomeMes = 'outubro';
            return nomeMes;
        case 10:
            nomeMes = 'novembro';
            return nomeMes;
        case 11:
            nomeMes = 'dezembro';
            return nomeMes;
    }
}
function zeroAEsquerda(num){
    return num >= 10? num : `0${num}`
}
function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia =  getDiaDaSemanaTexto(diaSemana);
    const nomeMes =  getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` + ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}
    `)

}

console.log(criaData(data))