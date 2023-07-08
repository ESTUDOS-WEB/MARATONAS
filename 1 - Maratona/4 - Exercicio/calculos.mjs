const notas = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];

function somatorio(array){
    let soma = 0;
    for(let i=0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}

function calcValEntrada(array){
    let valores = [];

    for(let i = 1; i < array.length; i++){
        valores.push(array[i] * notas[i-1]);
    }    

    const valorEntrada = somatorio(valores);
    return valorEntrada;
}

function calcValTroco(valCompra, valEntrada){
    let troco = Number(valEntrada - valCompra).toFixed(2);
    return troco;
}

function calcNotas(valor){
    let quantNotas = [];
    for(let i = 0; i < notas.length; i++){
        if(valor > notas[i]){
            quantNotas[i] = Math.trunc(valor / notas[i]);
            valor = valor - quantNotas[i] * notas[i];
        }
        else{
            quantNotas[i] = 0;
        }
    }

    return quantNotas;
}

export {
    notas,
    somatorio,
    calcValEntrada,
    calcValTroco,
    calcNotas
}