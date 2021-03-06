// let novaController = new Controller()

// function dataDoDia(){
//     let dataAtual = new Date();

//     let dia = dataAtual.getDate();
//     let mes = dataAtual.getMonth();
//     let ano = dataAtual.getFullYear();

//     return (ano + "-" + (mes + 1) + "-" + dia)
// }

// novaController.recebeEMostra(dataDoDia())

let botao = document.querySelector("button")
let container = document.getElementById("ImagemDoDia")
let imagem = document.getElementById("imagemDia")        
let legenda = document.getElementById("legendaPicDia")
let dataDaExibicao = document.getElementById("dataDaImagem")
let explicacao = document.getElementById("explicacaoPic")
let dataDaFoto = document.getElementById("diaApod")


let pedido = new XMLHttpRequest()

// default
pedido.open('GET', `https://api.nasa.gov/planetary/apod?api_key=RfjZmve2z0UAECDozMvRgsBvzXi44gcao1tPA4Uj`, false)
pedido.addEventListener("load", function (event) {
    event.preventDefault()
    if ( this.status === 200 && this.readyState === 4) {
        let resposta = JSON.parse(pedido.responseText)
        console.log(resposta)
        

        imagemDia.src = resposta.url
        explicacao.textContent = resposta.explanation
        legenda.textContent = resposta.title
        dataDaExibicao.textContent = resposta.date
    }
})
pedido.send()

let selecaoData = new XMLHttpRequest()

// botao para form
botao.addEventListener("click", function (event) {
event.preventDefault()
let inputData = document.getElementById("diaApod").value
selecaoData.open('GET', `https://api.nasa.gov/planetary/apod?api_key=RfjZmve2z0UAECDozMvRgsBvzXi44gcao1tPA4Uj&date=${inputData}`, false)
    
    
    selecaoData.onreadystatechange = function () {
        
        if ( this.status === 200 && this.readyState === 4) {
            let dados = JSON.parse(selecaoData.responseText)
            console.log(dados)
            
            imagemDia.src = dados.url
            explicacao.textContent = dados.explanation
            legenda.textContent = dados.title
            dataDaExibicao.textContent = dados.date
        }
    }
   
    selecaoData.send()
})
