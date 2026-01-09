const oleosMotor = require('./oleosMotor');
const retornaOleoDeMenorValor = require('./retornaOleoDeMenorValor');

for(let indice = 0; indice < oleosMotor.length; indice++) {
    let menorValorAtual = retornaOleoDeMenorValor(oleosMotor, indice);    
    let oleoAtual = oleosMotor[indice]; //pego o oleo que estou agora
    let oleoMenorValor = oleosMotor[menorValorAtual]; //pego o oleo de menor valor

    //inverto ambos
    oleosMotor[indice] = oleoMenorValor;
    oleosMotor[menorValorAtual] = oleoAtual;

    console.log('posição atual', indice);
    console.log('óleo atual', oleoAtual);
    console.log('trocou posicao com óleo de menor valor', oleoMenorValor);
    console.log('--------------------------');
}

console.log(oleosMotor);