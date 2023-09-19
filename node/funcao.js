//criando função
function escreverNoConsole(){
    console.log("Escrevendo na tela usando função!")
}
//executando a função
escreverNoConsole();

const textoNoConsole = function(){
    console.log("Segundo exemplo, escrevendo no console")
}
textoNoConsole();

const textoPorParametro = function(texto){
    console.log(texto)
}
textoPorParametro("Terceiro exemplo, este texto é o parametro")

const textoUsandoArrow = texto => {
    console.log(texto)
}
textoUsandoArrow('Quarto exemplo usando arrow function')

//função arrow que recebe um número e mostra na tela o digito e diz se é par ou ímpar, negativo ou zerado.

const parImpar = (numero) => {
    if(numero < 0){
        console.log(numero, "o número é negativo")
    }
    else if(numero == 0){
        console.log(numero, "seu número é todes")
    }
    else if(numero%2){
        console.log(numero, "seu número é par")
    }
    else{
        console.log(numero, "seu número é ímpar")
    }
}

parImpar(15);