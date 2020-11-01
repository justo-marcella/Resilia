function recarregaPag (){
    document.location.reload(true);
}

alert("Eu acordo no mundo de coronga.");

var condicao = prompt("Sai de casa?");

if (condicao == "Sim") {
     
    alert("Você foi corongado e morreu!");
    recarregaPag();    

} else if (condicao == "Não"){

    alert("Vai pro PC e aprende a programar.");
    var condicao2 = prompt("Fez projetos e exercícios?");

    if (condicao2 == "Sim"){
        alert ("Criou o portfólio, fez case das entrevistas e passou! :D");
        recarregaPag();

    } else if (condicao2 == "Não"){
        alert ("Não conseguiu faer o case das entrevistas! D:")
        recarregaPag();
    } else {
        alert ("Comando inválido!");
        recarregaPag();
    }

} else{

    alert("Comando inválido!");
    recarregaPag();
}