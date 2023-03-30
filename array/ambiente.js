let num=[]
console.log(num)

num=[1,2,3]
console.log(num)
num.push(4) //adicionar no final
console.log(num)


num.unshift(7, 8, 9 ) //adiciona no inicio
console.log(num)

num.sort() //organiza em ordem crescente
console.log(num)
let pos = num.indexOf(7) //retorna o primeiro index do item entre parenteses
console.log(`o index do valor entre parenteses é ${pos}`) //se não tiver ele retorna -1

console.log(num.includes(4)) //verifica se existe na lista - retorna true ou false

//listar itens da array
console.log("listar itens da array:") 
for(let pos=0;pos<num.length; pos++){
    console.log(num[pos])
}

console.log(num.join("-")) //.join() une os elementos da lista 
console.log(num.join("...")) //.join() une os elementos da lista  