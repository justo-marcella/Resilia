let body = document.querySelector("body")
let inputTexto = document.querySelector("#campoTexto");
let botaoTexto = document.querySelector("#botaoTexto");
let botaoLista = document.getElementById("botaoLista");
let pTexto = document.getElementById("pTexto");
let pLista = document.getElementById("pLista");



botaoTexto.addEventListener("click", function(){


    let novoPar = document.createElement("p");
    body.appendChild(novoPar)
    novoPar.innerText =  `${inputTexto.value}`

})

// function mostra(){

//     paragrafoTexto.innerText =  inputTexto.value

// }
// botaoTexto.addEventListener("click", function(){
// })


// inputTexto.add imprimeTexto(){

 
// }



// form.addEventListener('submit', function(e) {
//     // alerta o valor do campo
//     alert(campo.value);