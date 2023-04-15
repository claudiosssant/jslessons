/* tag
var titulo = document.getElementsByTagName('h1');

console.log(titulo);

var lis = document.getElementsByTagName('li');

console.log(lis);

// id
var paragrafo = document.getElementById('paragrafo');

console.log(paragrafo);


// class
var itensDaLista = document.getElementsByName('item');

console.log(itensDaLista);*/

//Eventos DOM(Document object model)
//Eventos são coisas que podemos fazer com o DOM

let a = document.getElementById('area');

a.addEventListener( 'click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
function clicar() {
    a.innerText = 'Clicou'
    a.style.background = 'red'
}
function entrar() {
    a.innerText = 'entrou'
}
function sair() {
    a.innerText = 'saiu'
    a.style.background = 'green'
}
