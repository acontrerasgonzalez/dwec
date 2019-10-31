var imagen;
var imagenPulsada=false;


function clickEnImagen(event){//selecciona la imagen pulsada 
    imagenPulsada= !imagenPulsada;
    imagen=event.target;
}

function ratonSeMueve(event){
    if(imagenPulsada){
        imagen.style.position="float";
        imagen.style.top=event.clientX+"px";
        imagen.style.left=event.clientY+"px";
    }
}