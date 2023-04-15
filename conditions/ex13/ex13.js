/*var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas!`);

if (hora > 12 && hora < 18){
    console.log(`São ${hora} horas, boa tarde!`)
} else if(hora > 18){
    console.log(`São ${hora} horas, boa noite!`)
} else if(hora > 00 && hora < 8) {
    console.log(`São ${hora} horas, volte a dormir!`)
} else {
    console.log(`São ${hora} horas, bom dia!`)
}*/

//switch case, lembrar de usar o break em cada cause!!!!

var agora = new Date()
var diaSem = agora.getDay()


switch(diaSem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log('[erro] Dia inválido')
        break
}