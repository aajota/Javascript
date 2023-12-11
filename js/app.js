console.log('QAX, !')

var userName = 'Olá Ajota'

document.getElementById('user-Name').innerHTML = userName

//variaveis//

var nome = 'Mestre Yoda'
var idade = 100
var jedi = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi)







//operadores matematicos//

var n1 = 5
var n2 = 5

console.log(typeof n1)

// + somar
// - subitrair
// * mutiplicar
// / dividir

// var total = n1 + n2
// console.log(total)








// operadores de comparação//

var v1 = 5
var v2 = 5

var resultado = v1 === v2
console.log(resultado)

// Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.

// 1=='1' //true

// Não igual (!=)
// Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.

// 4!=1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.

// 3==='3' //false
// 3===3 //true

// Não igual estrito (!==)
// Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes

// 3!=='3' //true
// 3!==3 //false
// 3!==4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro

// 1>2 //false
// 5>3 //true
// 4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro

// 1>=2 //false
// 5>=3 //true
// 4>='1' //true
// 2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro

// 1<2 //true
// 5<3 //false
// 4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro

// 1<=2 //true
// 5<=3 //false
// 4<='1' //false
// 2<=2 // true







//Funcoes//

function soma(n1 ,n2){
    console.log(n1 + n2)
    
}

soma(5 ,5)


function boasVindas(nome){
    alert(nome + ', seja bem vindo(a)')
}

boasVindas('Ajota')


function soma(n1, n2) {
    return n1 + n2

}

var resultado = soma(5,5)
console.log(resultado)







// Controle de fluxos //
// sendo um cliente correntista do banco
// posso sacar dinheiro em caixas eletronicos
//para poder comprar em ligar onde não aceita o cartão de débito ou crédito

// Cenario 1: Saque com sucesso
// dado que meu saldo é de 1000 reais
// quando faço um saque de 500 reais
// então o valor do saque deve ser deduzido do meu saldo

var saldo = 1000
function saque(valor){
    saldo = saldo - valor

}

saque(500)
console.log(saldo)







//cenario: 2 saque com valor superior ao saldo
//dado que meu saldo é de 1000 reais
//quando faço um saque de 1001 reais
//então não deve deduzir do meu saldo
// e deve exibir uma msg de alerta informando que o valor é superior

var saldo = 1000
function saque(valor){

    if (valor > saldo) {
    console.log('Valor do saque superior ao saldo')
} else{
    saldo = saldo - valor
}
   
}

saque(1001)
console.log(saldo)







// cenario 2: sa com limite máximo por saque
// dado que meu saldo é de 1000 reais
// e o valor máximo por operação é de 700
// quando faço um saque no valor de 701 reais//então não deve deduzir do meu saldo
// e deve mostrar uma msg de alerta informanso que o limite é superior


var saldo = 1000
function saque(valor){

    if (valor > saldo) {
    console.log('Valor do saque superior ao saldo')
} else if (valor > 700) {
    console.log('valor do saque é superior ao limite por oprração')
}

else{
    saldo = saldo - valor
}
   
}

saque(701)
console.log(saldo)






// Arrays//

// var gaveteiro = ['meias', 'gravatas', 'documentos', 'salgadinhos']

// console.log(gaveteiro[1])


var personagens = ['Mestre yoda', 'Luck', ' Princesa leia', 'Darth vader']

personagens.push('C3pO')
personagens.push('R2D2')
console.log(personagens)

personagens.pop()

personagens = personagens.filter(function(p){
    return p !== 'Darth vader'
})

personagens = personagens.filter(function(p){
    return p === 'Mestre yoda'
})

console.log(personagens)






// Controles de repetição (laço,  loop)//

var personagens = ['Mestre yoda', 'Luck', ' Princesa leia', 'Darth vader', 'Ajota']

personagens.forEach(function(p){
    console.log(p)
})

for(var i in personagens){
    console.log(personagens[i])
}

for(var i = 0; i <=10; i++){
    console.log(i)
    // codigo vai ser executado até a condição retornar false
}