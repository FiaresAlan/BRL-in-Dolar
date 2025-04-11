let dolar = 5.82520

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1000,00"
convert("usd-to-brl")


// Funções e descrições abaixo

    // ajsutar o valor 
    // utilizar funcao de formatar
    // retorna o valor formatado
function formatCurrency(value) {

    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false, //não colocara ponto nos números, não agrupara.
        minimumFractionDigits: 2
    }
    //retorna o número formatado, "bonitin"
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)

}




function fixValue(value) {
    let fixedValue = value.replace(",", ".") //troca virgula por ponto
    let floatValue = parseFloat(fixedValue) //transforma em valor de fato
    if(floatValue == NaN) { 
        floatValue = 0
    }
    return floatValue
}




    // 1º ele vai ajustar o valor
    // 2º converter o valor
    // 3º mostra o resultado no campo de real/dolar
function convert(type) {
      if(type == "usd-to-brl") {

        let fixedValue = fixValue(usdInput.value)
        let result = fixedValue * dolar
        result = result.toFixed(2)

        brlInput.value = formatCurrency(result)
    }

      if(type == "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value)
        let result = fixedValue / dolar
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result)

    }
}








// INTEGRAÇÃO COM EVENTOS NA TELA
// let usdInput = document.querySelector("#usd")
// let brlInput = document.querySelector("#brl")

// usdInput.addEventListener("keyup", () => {
//     console.log(usdInput.value)
// })

// brlInput.addEventListener("keyup", () => {
//     console.log(brlInput.value)
// })


// REAÇÃO A CLICK OU MOUSE OVER DOS BOTÕES
// function b1aviso() {
//     alert("B1 funcionou")
// }

// let b1 = document.querySelector("#b1")
// b1.addEventListener("click", () => [
//     b1aviso()
// ])

// function b2aviso() {
//     alert("B2 funcionou")
// }

// let b2 = document.querySelector("#b2")
// b2.addEventListener("mouseover", () => [
//     b2aviso()
// ])




// TIPOS VARIAVEIS

// let idade = 1 // tipo number
// let nome = "Celular" //tipo string
// let logado = false //tipo boolean


// LOOP

// let lista = ["sal", "pimenta", "vinagre", "corante"]
// for (let item of lista) {
//     console.log("- Ingrediente: " + item)
// }



// IF E ELSE, condicionais
// if (idade >= 18) {
//     console.log("você é maior de idade")
// }
// else {
//     console.log("você é de menor") 
// }

// ARRAY E OBJETOS

// let ingredientes = ["farinha", "sal", "ovo", "açucar"]
// let personagem = {
//     nome: "Ciclano",
//     nivel: 10,
//     forca: 600,
//     magia: 200,
//     vida: 100,
//     mana: 300
// }

// function sum(a, b) {
//     let resultado = a + b;
//     return resultado
// }

// let somar2 = (a,b) => {
//     let resultado = a + b
//     return resultado
// }

// let x = sum(15, 5)
// let y = sum(2, 8)


// console.log(x)
// console.log(y)