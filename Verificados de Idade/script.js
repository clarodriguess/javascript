function verificar(){
    let data = new Date()
    let ano = data.getFullYear() //pra pegar com 4 digitos
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else{
        let fsex = document.getElementsByName('radsex')//tem q ser pelo name pq o input radio leva o mesmo nome 
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')//equivale a criar no html <img id="foto">
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10 ){
                img.setAttribute('src', 'criancaH.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemH.jpg')
                //jovem
            } else if(idade < 50){
                img.setAttribute('src', 'adultoH.jpg')
                //adulto
            } else{
                img.setAttribute('src', 'idosoH.jpg')
                //idoso
            }
        }
        else{
            genero='Mulher'
            if (idade >= 0 && idade < 10 ){
                img.setAttribute('src', 'CriancaM.png')
                //criança
            } else if (idade < 21){
                img.setAttribute('src', 'jovemM.jpg')
                //jovem
            } else if(idade < 50){
                img.setAttribute('src', 'adultoM.png')
                //adulta
            } else{
                img.setAttribute('src', 'idosaM.jpg')
                //idosa
            }
        }
        res.style.textAlign ='center'//pra centralizar pelo JS
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.appendChild(img)//pra adicionar
    }
}