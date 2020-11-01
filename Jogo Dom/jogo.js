var h2 = document.querySelector('h2');
var h3 = document.querySelector('h3');
var paragrafo = document.querySelector('p');
var res = document.getElementById('resultado');
var botao1 = document.querySelector('#botao1');
var botao2 = document.querySelector('#botao2');

botao1.onclick = pergunta;
botao2.onclick = pergunta2;

function recarrega (){

    document.location.reload(true);
}

function pergunta (){

    h3.innerHTML = "Você já guardou seus pertences no armário?";
    paragrafo.innerHTML = "";

    botao1.innerHTML = "Guardei";
    botao2.innerHTML = "Ainda Não";

    botao1.onclick = pergunta3;
    botao2.onclick = pergunta4;


}

function pergunta2 (){

    h3.innerHTML = "Ué?!<br> E tá fazendo o que aqui?";
    paragrafo.innerHTML = "O departamento de informações é do outro lado.";
    botao1.innerHTML = "Recomeçar";
    botao2.innerHTML = "Recomeçar";

    botao1.onclick = recarrega;
    botao2.onclick = recarrega;
    

}

function pergunta3(){
    h3.innerHTML = "Pegue seu cartão e passe.<br>" + `<iframe src="https://giphy.com/embed/pKf7PlSjbtJN6" width="300" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
    paragrafo.innerHTML = "Fez sua pesquisa, consultou os livros e documentos e agora deseja ir embora.<br>Devolveu os livros na estante?";

    botao1.innerHTML = "Sim, devolvi.";
    botao2.innerHTML = "Não, estão na mesa.";

    botao1.onclick = pergunta5;
    botao2.onclick = final1;


}
function pergunta4(){
    h3.innerHTML = "Por favor, guarde seus pertences no armário e retorne.";
    paragrafo.innerHTML = "...";

    botao1.innerHTML = "Feito.";
    botao2.innerHTML = "Só um minuto.";

    botao1.onclick = pergunta3;
    botao2.onclick = pergunta4;

}

function pergunta5(){
    h3.innerHTML = "Nããããããaaaaaaao!<br>" + `<iframe src="https://giphy.com/embed/MMfROK5szfy" width="300" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
    paragrafo.innerHTML = "Por favor, não guarde o material consultado de volta na estante.<br>A Biblioteca utiliza classificação e organização específicas e você pode acabar sumindo com o material nas estantes, mesmo que tendo feito com boa vontade. <br>Me mostre onde colocou e pode ir.";


    botao1.innerHTML = "Tchau.";
    botao2.innerHTML = "E eu ia saber?";

    botao1.onclick = finalAlternativo;
    botao2.onclick = final2;
}
// function pergunta6(){


// }

function final1(){

    h3.innerHTML = "Usuário Maravilhoso! Muito obrigada.";
    paragrafo.innerHTML = `<iframe src="https://giphy.com/embed/4Zo41lhzKt6iZ8xff9" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
    
    botao1.innerHTML = "Recomeçar";
    botao2.innerHTML = "Recomeçar";

    botao1.onclick = recarrega;
    botao2.onclick = recarrega;



}

function final2(){

    h3.innerHTML = "Desaforado";
    paragrafo.innerHTML = `<iframe src="https://giphy.com/embed/l1J3G5lf06vi58EIE" width="296" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;

    botao1.innerHTML = "Recomeçar";
    botao2.innerHTML = "Recomeçar";

    botao1.onclick = recarrega;
    botao2.onclick = recarrega;

}

function finalAlternativo(){

    h3.innerHTML = `<iframe src="https://giphy.com/embed/5C0a8IItAWRebylDRX" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
    paragrafo.innerHTML = "";

    botao1.innerHTML = "Recomeçar";
    botao2.innerHTML = "Recomeçar";

    botao1.onclick = recarrega;
    botao2.onclick = recarrega;

}