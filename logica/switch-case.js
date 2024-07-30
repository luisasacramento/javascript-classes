function getDiaDaSemana() {
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            break;
        case 1:
            diaSemanaTexto = 'Segunda'
            break;
        case 2:
            diaSemanaTexto = 'Terca'
            break;
        case 3:
            diaSemanaTexto = 'Quarta'
            break;
        case 4:
            diaSemanaTexto = 'Quinta'
            break;
        case 5: 
            diaSemanaTexto = 'Sexta'
            break
        case 6: 
            diaSemanaTexto = 'Sábado';
            break;
        default:
            break;
    }
}


const data = new Date('2024-07-24 00:00:00')
let diaSemana = data.getDay();
let diaSemanaTexto = getDiaDaSemana(diaSemana);

console.log(diaSemana, diaSemanaTexto)