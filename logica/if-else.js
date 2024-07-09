/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa Tarde 
Entre 18 - 23 - Boa noite
*/

// if pode ser usado sozinho 
// Sempre quq eu utilizo a palavra else, preciso de um if antes
// Eu posso ter vários elses ifs na checagem
// Só posso ter um else na checagem
// podemos usar icondições sem else if, utilizando apenas if e else


const hora = 13;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');
}else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else {
    console.log('Tenha um bom dia');
}



const numero = 10;

if (numero >= 0 && numero <=5 ){
    console.log('sim, o número está entre 0 e 5')
} else {
    console.log('O número NÃO está entre 0 e 5');
}




