/* Variáveis simples, só conseguem armazenar um valor por vez.

Variáveis compostas, devem ser capazes de armazenar vários valores em uma mesma estrutura */

let num = [5, 8, 2, 9, 3];
num.push(1);
num.sort()
console.log(num)
console.log(`Nosso vetor é tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`)
/*
for(let pos = 0; pos<num.length ; pos++) {
    console.log(num[pos])
};
*/

for( let pos in num) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

// Buscar valores numa array (indexOf)

console.log(num.indexOf(9));