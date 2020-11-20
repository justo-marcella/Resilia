class Model  {
  
    constructor(data) {
            this._title = "";
            this._image = "";
            this._date = "";
            this._explanation = "";

    }
        recebeObjeto(data){
            
            let pedido = new XMLHttpRequest();
            pedido.addEventListener("load",() =>{

                if(pedido.status ===  200 && pedido.readyState === 4 ){
                   
                    let resposta = JSON.parse(pedido.responseText)
                   
                    this._title = resposta.title;
                    this._image = resposta.url;
                    this._explanation = resposta.explanation;
                    this._date = resposta.date;


                }
            } )
            pedido.open("GET", `https://api.nasa.gov/planetary/apod?api_key=RfjZmve2z0UAECDozMvRgsBvzXi44gcao1tPA4Uj&date=${data}`, false );
            pedido.send();

        }
    
        getTitulo(){
            return this._title;
        }

        getImage(){
            return this._image;
        }

        getData(){
            return this._date;
        }
        
        getExplanation(){
            return this._explanation;
        }


    }
