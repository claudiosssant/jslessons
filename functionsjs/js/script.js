// funções geralmente possuem chamadas, parâmetros, ação e retornos
//São executadas assim que são chamadas ou em decorrência de algum evento.
// Funções podem receber um parâmetro e retornar um resultado

/* Formato:

function ação(param){
    return res
}
ação(5) */

//ex:

function parimp(n) {
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = parimp(230);
console.log(res);

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(5));


let v = function(x) {
    return x*2
}

console.log(v(5));


function fatorial(n) {
    let fat =1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5));
//recursividade

function fatorial2(n) {
    if (n == 1) {
        return 1
    }else {
        return n * fatorial2(n-1)
    }

}

console.log(fatorial2(5))