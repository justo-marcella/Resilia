class Controller{

    static recebeEMostra(data){
        let chamaModa = new Model()
        chamaModa.recebeObjeto(data)

        let chamaView = new View()
        chamaView.mostra(data)
    }

}