 // var body = document.querySelector("body");
    // var imagem = document.createElement(`<img src="https://s.tcdn.co/131/6b7/1316b7dd-85ba-40e2-bfae-14fefffd1794/2.png">`);
    var body = document.querySelector("body");
    body.style.display = "flex";
    body.style.alignItems = "flex-start";
    body.style.justifyContent = "center";

    var container = document.createElement("div");
    body.appendChild(container);

    var img = document.createElement("img");
    img.width = "130";
    img.height = "130";
    img.src = "https://s.tcdn.co/131/6b7/1316b7dd-85ba-40e2-bfae-14fefffd1794/2.png"; 
    container.appendChild(img);

    var img2 = document.createElement("img");
    img2.src = "amongVermelhoVent.png"; 

    
    
    img.addEventListener("click", function(){
        document.body.style.marginTop= "500px";
    })

    img.addEventListener("dblclick", function(){
        container.innerHTML = `<img src="amongVermelhoVent.png" width="100" height="100">`;
    })