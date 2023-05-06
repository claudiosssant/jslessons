
const produtos = [
    { id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    { id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},
    { id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento'},
    { id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento'},
    { id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento'},
    { id: 6, nome: 'sabonete', valor: 1.20, categoria: 'limpeza'},
];

// array map


//para usar o .map temos que passar uma função callback
const ids = produtos.map(produto => produto.id);
const categoria = produtos.map(produto => produto.categoria);

console.log(ids)
console.log(categoria)


//array filter


const alimentos = produtos.filter(p => p.categoria === 'alimento');

console.log(alimentos)



//array reduce, serve para transformar um array, mudando seu valor.

const numeros = [0, 2, 7, 8, 9];

//no primeiro momento o acumulador é o primeiro item da lista e o numeroAtual o segundo!

const total = numeros.reduce(function(acumulador, numeroAtual){
    return acumulador + numeroAtual

})

console.log(total);



