let valores = [8,1,7,9,4,5]

console.log(valores) //mostra a array
console.log(valores[0]) //mostra um elemento da array - indice 0
console.log(valores[1]) //mostra um elemento da array - indice 1 

//Mostra todos os elementos da array indivudualmente:
for (let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} da array tem o valor ${valores[pos]}`)
}

// SIMPLIFICANDO ----- usando for(  in  ):
for(let pos in valores){
	console.log(`A posição ${pos} da array tem o valor ${valores[pos]}`)
}