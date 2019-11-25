class Circulo{
    constructor(id,x,y,r,color,velx=1,vely=1){
        this.circ=document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.x=x;
        this.y=y;
        this.velx=velx;
        this.vely=vely;
        this.id=id;
        this.r=r;
        this.j1=0;
        this.j2=0;
        this.circ.setAttribute(("cx"),x+"px");
        this.circ.setAttribute(("cy"),y+"px");
        this.circ.setAttribute(("id"),this.id);
        this.circ.setAttribute(("r"),r);
        this.circ.setAttribute(("fill"),color);
        this.maxtamx=document.getElementById("contenedor").getAttribute("width");
        this.maxtamy=document.getElementById("contenedor").getAttribute("height");
        document.getElementById("contenedor").appendChild(this.circ);  
    }
    mueve(){
            this.x+=this.velx;
            this.y+=this.vely;
            if(this.x>=this.maxtamx-this.r){
              this.cambiaDireccionX();
              this.j2+=1;
            }else if(this.x<=0+this.r){
                this.cambiaDireccionX();
                this.j1+=1;
            }
            if(this.y>=this.maxtamy-this.r){
                this.cambiaDireccionY();
              }else if(this.y<=0+this.r){
                this.cambiaDireccionY();
              }
    }
    dibuja(){
        var circulo=document.getElementById(this.id);
            circulo.setAttribute(("cx"),this.x+"px");
            circulo.setAttribute(("cy"),this.y+"px");
    }
    cambiaDireccionX(){
        this.velx=-this.velx;
    }
    cambiaDireccionY(){
        this.vely=-this.vely;
    }
}

class Rectangulo{
    constructor(id,x,y,color){
        this.rec=document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.id=id;
        this.x=x;
        this.y=y;
        this.rec.setAttribute(("id"),this.id);
        this.rec.setAttribute(("x"),this.x+"px");
        this.rec.setAttribute(("y"),this.y+"px");
        this.rec.setAttribute(("width"),25+"px");
        this.rec.setAttribute(("height"),100+"px");
        this.rec.setAttribute(("fill"),color);
        document.getElementById("contenedor").appendChild(this.rec);
        
    }
    moverAbajo(){
        if((this.y+100)<document.getElementById("contenedor").getAttribute("height")){
            var pos=this.y+10;
            this.y=pos;
            document.getElementById(this.id).setAttribute(("y"),pos+"px");
        }
    }
    moverArriba(){
        if(this.y>0){
            var pos=this.y-10;
            this.y=pos;
            document.getElementById(this.id).setAttribute(("y"),pos+"px");
        }
    }
}
class Juego{
    constructor(){
        this.cir=new Circulo("circulo1",115,130,10,"green",9,7);
        //this.cir1=new Circulo("circulo2",120,110,20,"blue",8,6);
        this.rec=new Rectangulo("rec1",80,60,"gold");
        this.rec1=new Rectangulo("rec2",740,60,"red");
        document.addEventListener("keydown",(event)=>{
            if(event.keyCode==38){
                this.rec1.moverArriba();
            }else if(event.keyCode==40){
                this.rec1.moverAbajo();
            }
            if(event.keyCode==87){
                this.rec.moverArriba();
            }else if(event.keyCode==83){
                this.rec.moverAbajo();
            }
        });
    }
    bucle(...circulos){
        circulos.forEach((circulo)=>{
            circulo.mueve();
        //mueve cada uno de los objetos y comprueba colisiones
        var puntos=[[circulo.x-circulo.r,circulo.y],
            [circulo.x+circulo.r,circulo.y],
            [circulo.x,circulo.y-circulo.r],
            [circulo.x,circulo.y+circulo.r],
            [circulo.x+(circulo.r*0,707),circulo.y+(circulo.r*0,707)],
            [circulo.x+(circulo.r*0,707),circulo.y+(circulo.r*-0,707)],
            [circulo.x+(circulo.r*-0,707),circulo.y+(circulo.r*0,707)],
            [circulo.x+(circulo.r*-0,707),circulo.y+(circulo.r*-0,707)],
        ];
        puntos.forEach((valor)=>{
            if(valor[0]>this.rec.x && valor[0]<(this.rec.x+25)){
                if(valor[1]>this.rec.y && valor[1]<(this.rec.y+100)){
                    circulo.cambiaDireccionX();
                    //circulo.cambiaDireccionY();
                }
            }
            if(valor[0]>this.rec1.x && valor[0]<(this.rec1.x+25)){
                if(valor[1]>this.rec1.y && valor[1]<(this.rec1.y+100)){
                    circulo.cambiaDireccionX();
                    //irculo.cambiaDireccionY();
                }
            }
        });
        circulo.dibuja();
        document.getElementById("j1").innerHTML=circulo.j1;
        document.getElementById("j2").innerHTML=circulo.j2;
        
    }); 
}
    empieza(){
        setInterval(()=>{juego.bucle(this.cir)},10);
    }   
    parar(){
        clearInterval();
    }
}
var juego=new Juego();
juego.empieza();