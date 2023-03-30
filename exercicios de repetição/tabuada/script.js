
function calcular(){
    let n = 1
    let tabuada = document.getElementById ('tabuada')
    let t = Number(tabuada.value)
    let res = document.querySelector('div#res')
    res.innerHTML = `Tabuada de ${t}: <br>`
    while (n<11){
        let r = t* n        
        res.innerHTML += `➝ ${n} x ${t} = ${r} <br>`
        n++
    }
    
    
    /*if(t.value.length == null){ //como coloca vazio?
        window.alert('[ERRO] Digite um número e tente novamente!')
    }
    else{
        for(n; n<11; n++){
            let r = t* n
            res.innerHTML = `${t} x ${n} = ${r}`
        }
    }*/
    
}