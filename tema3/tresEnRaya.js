class tresEnRaya{
    
    tablero=new Array(3);
    
    constructor(){
        this.tablero.forEach(function(a) {
            a=new Array(" - ","- ","- ");
        });
    }

    jugar1(filas,columnas){//insertar ficha jugador 1
        this.tablero[filas][columnas]=" X ";         
    }

    jugar2(filas,columnas){//insertar ficha jugador 2
        this.tablero[filas][columnas]=" O ";         
    }

    mostrarTablero(){//muestra el tablero
        console.log("Tablero");
        this.tablero.forEach(function(a){
            console.log(a);
        });
    }
}

juego=new tresEnRaya();