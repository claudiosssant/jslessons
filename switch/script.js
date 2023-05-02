function pedir() {
    var valor = prompt('Digite um valor de 1 a 4!');
    

    switch(Number(valor)) {
        case 1:
            alert('Você escolheu suco!');
            break;
        case 2:
            alert('Você escolheu Água gelada!');
            break;
        case 3: 
            alert('Você escolheu Sorvete!');
            break;
        case 4: 
            alert('Você chamou o garçom!');
            break;
        default:
            alert('Escolha uma opção entre 1 e 4!');
            break;
    }
}