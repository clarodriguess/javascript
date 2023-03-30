function parimp(n){
	if (n%2==0){
		return 'par'
	} else{
		return 'impar'
	}
}
console.log( parimp(666))

//-----------------------------------------------------------------------------

function soma(n1, n2){
    return n1 + n2
}
console.log(soma(10,5))

function soma(n1=0, n2=0){ // caso algum parametro nao seja passado ele vai considerar o 0
    return n1 + n2
}
console.log(soma(10)) 

//-----------------------------------------------------------------------------------
//variavel que recebe function
let dobro = function(x){
    return 2*x
}
console.log(dobro(6))

//-----------------------------------------------------------------------------------
//calculo de fatorial

function fatorial(n){
    let fat = 1
    for (let c=n ; c>1; c--){
        fat*= c
    }
    return fat
}
console.log(fatorial(5))
//5! = 5 x 4 x 3 x 2 x 1 = 120

//RECURSIVIDADE
function fatorial(n){
    if(n==1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
// 5! = 5 x 4 x 3 x 2 x 1  é a mesma coisa que:
// 5! = 5 X 4!
// n! = n*(n-1)!
// 1! = 1