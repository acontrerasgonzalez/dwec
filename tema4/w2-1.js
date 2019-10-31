function cambioNormal(){
    //document.getElementById("opciones").style.padding="20px";
    document.getElementById("cuerpo").style.borderLeft="blue 100px solid";
    document.getElementById("cuerpo").style.backgroundColor="yellow";
    document.getElementById("opciones").style.borderStyle ="solid";
    document.getElementById("opciones").style.backgroundColor="yellow";
    document.getElementById("opciones").style.borderWidth ="5px";
    document.getElementById("opciones").style.borderColor="green";
    document.getElementById("cabecera").style.fontSize="20px";
    document.getElementById("marco").style.borderStyle ="solid";
    document.getElementById("marco").style.backgroundColor="yellow";
    document.getElementById("marco").style.borderWidth ="5px";
    document.getElementById("marco").style.borderColor="green";
    document.getElementById("phid").style.display = "block";
}

function cambioMinimalista(){
    //document.getElementById("opciones").style.padding="20px";
    document.getElementById("cuerpo").style.borderLeft="";
    document.getElementById("cuerpo").style.backgroundColor="";
    document.getElementById("opciones").style.borderStyle ="";
    document.getElementById("opciones").style.backgroundColor="";
    document.getElementById("opciones").style.borderWidth ="";
    document.getElementById("opciones").style.borderColor="";
    document.getElementById("cabecera").style.fontSize="";
    document.getElementById("marco").style.borderStyle ="";
    document.getElementById("marco").style.borderWidth ="";
    document.getElementById("marco").style.backgroundColor="";
    document.getElementById("marco").style.borderColor="";
    document.getElementById("phid").style.display = "none";
}
