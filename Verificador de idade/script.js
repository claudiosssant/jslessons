function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', foto)
        if (fsex[0], checked) {
            genero = "Homem"
            if (idade >=0 && idade < 10) {
               // criança
               img.setAttribute('src', 'bebezinho.jpg')
            } else if ( idade >10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'ojovem.jpg')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            };
        } else if (fsex[1], checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebezinha.jpg')
             } else if (idade > 10 && idade < 21) {
                 //jovem
                 img.setAttribute('src', 'ajovem.jpg')
             } else if ( idade < 50) {
                 //adulto
                 img.setAttribute('src', 'adulta.jpg')
             }else {
                 //idoso
                 img.setAttribute('src', 'idosa.jpg')
             }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}

