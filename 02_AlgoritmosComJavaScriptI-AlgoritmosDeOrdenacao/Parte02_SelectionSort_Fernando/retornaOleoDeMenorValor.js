const oleosMotor = require('./oleosMotor');

function retornaOleoDeMenorValor(oleosMotor, posicaoInicial) {
    let indiceMenorValor = posicaoInicial;
    for(let indice = posicaoInicial; indice < oleosMotor.length; indice++) {
        if(oleosMotor[indice].valor < oleosMotor[indiceMenorValor].valor) {
            indiceMenorValor = indice;
        }
    }
    return indiceMenorValor;    
};

module.exports = retornaOleoDeMenorValor;