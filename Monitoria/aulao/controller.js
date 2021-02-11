
            let body = document.querySelector("body")
            let nome = document.createElement("h1")
            let modelo = document.createElement("h2")
            let preco = document.createElement("h2")
            let tamanho = document.createElement("h2")

            body.appendChild(nome)
            body.appendChild(modelo)
            body.appendChild(preco)
            body.appendChild(tamanho)


class Controller{
    constructor(){

    }

    static carregaInfos(){
        


        let pedido = new XMLHttpRequest()

        pedido.open('GET', `https://swapi.dev/api/starships/10`, false)

        pedido.addEventListener('load', () => {

            let dados = JSON.parse(pedido.responseText)
            console.log(dados)

            nome.textContent = `${dados.name}`
            modelo.textContent = `${dados.model}`
            preco.textContent = `${dados.cost_in_credits}`
            tamanho.textContent = `${dados.length}`
            
            
        })

        pedido.send()
    }


}