class Juego{
    
    fin=false;
    pos=0;
    pos1=0;


    constructor(){
        
    }


    tirar(){//tirada
        if(this.fin==false){
        var tirada=parseInt(Math.random()*6+1);
        if(this.pos+tirada==29){
            this.pos=this.juego(this.pos+tirada);
            this.fin=true;
            console.log("Fin del juego,has ganado!");
        }else if(this.pos+tirada<29){
            this.pos=this.juego(this.pos+tirada);
        }else if(this.pos+tirada>29){
            this.pos=this.juego(29-((this.pos+tirada)-29)); 
        }
        }else{
            console.log("El juego ya ha terminado");
        }
    }

    tirar1(){//tirada
        if(this.fin==false){
        var tirada=parseInt(Math.random()*6+1);
        if(this.pos1+tirada==29){
            this.pos1=this.juego(this.pos1+tirada);
            this.fin=true;
            console.log("Fin del juego, ha ganado la maquina");
        }else if(this.pos1+tirada<29){
            this.pos1=this.juego(this.pos1+tirada);
        }else if(this.pos+tirada>29){
            this.pos1=this.juego(29-((this.pos1+tirada)-29)); 
        }
        }else{
            console.log("El juego ya ha terminado");
        }
    }


    juego(posicion){//subidas y bajadas del juego
        switch(posicion){
            case 3:posicion=10;break;
            case 7:posicion=2;break;
            case 12:posicion=17;break;
            case 18:posicion=9;break;
            case 21:posicion=15;break;
            case 23:posicion=28;break;
            case 27:posicion=5;break;
        }
        return posicion;
    }
    jugar(){//simula el juego entero
        while(this.fin==false){
            this.tirar();
            this.mostrarPosicion();
            this.tirar1();
            this.mostrarPosicion1();
        }
    }


    mostrarPosicion(){//muestra posicion del jugador
        console.log("La Posicion del jugador es: "+this.pos);
    }
    mostrarPosicion1(){//muestra posicion del jugador
        console.log("La Posicion de la maquina es: "+this.pos1);
    }
}
var juego=new Juego();





