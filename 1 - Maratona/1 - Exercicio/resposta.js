const entrada= [1,5,-8,1000,-89787];

function par(num){
    if(num % 2 == 0){
        return true;
    }
    return false;
}

function impar(num){
    if(num % 2 != 0){
        return true;
    }
    return false;
}

function max(array){
    let aux = array[0];
    for(let i=0; i < array.length; i++){
        if(aux < array[i]){
            aux = array[i];
        }
    }
    return aux;
}

function min(array){
    let aux = array[0];
    for(let i=0; i < array.length; i++){
        if(aux > array[i]){
            aux = array[i];
        }
    }
    return aux;
}

function somatorio(array){
    let soma = 0;
    for(let i=0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}


let result= entrada.filter(par);
console.log("Pares: " + result);

result= entrada.filter(impar);
console.log("Impar: " + result);

console.log("Maior: " + max(entrada));
console.log("Menor: " + min(entrada));

console.log("Soma: " + somatorio(entrada));