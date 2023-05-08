// Funções construtoras
/* function() constructor

* expressão new
* criar um novo objeto
* this keyboard

*/

function Person(name) {
    this.name = name
    this.age = function() {
        return this.name + ' tem 25 anos!'
    }
}

const claudio = new Person('Cláudio');

console.log(claudio.age())