
function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src ="pexels-scott-webb-1029639.jpg"
        document.body.style.background = '#FFB878'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src ="pexels-tatiana-syrikova-3975681.jpg"
        document.body.style.background = '#BA9766'
    } else {
        // Boa noite!
        img.src ="pexels-james-wheeler-1539225.jpg"
        document.body.style.background = '#00243D'
    }
}