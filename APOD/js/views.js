class View {

    mostra (data){
        let titulo = document.getElementById("legendaPicDia");
        titulo.innerText = data.getTitulo()
        
        let imagem = document.getElementById("imagemDia");
        imagem.src = data.getImage();
        
        let dataDaExibicao = document.getElementById("dataDaImagem");
        dataDaExibicao.innerText = data.getData();
        
        let explicacao = document.getElementById("explicacaoPic");
        explicacao.innerText = data.getExplanation();
    }
}