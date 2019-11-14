import {Juego} from './serpyesc.js';
var juego=new Juego();
function creaTablero(){//crea la tabla que simula el tablero
    var tablero=document.getElementById("tablero");
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var celd=0;
    // Crea las celdas
    for (var i = 0; i < 5; i++) {
    // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < 6; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(celd+":");
            celd++;
            celda.appendChild(textoCelda);
            celda.style.border="solid 1px";
            celda.style.height="50px";
            celda.style.width="50px";
            hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    tabla.style.border="solid 1px";
    tablero.appendChild(tabla);
    //aplicamos estilos a las celdas para saber subidas y bajadas
    document.getElementsByTagName("td")[3].style.backgroundColor="red";
    document.getElementsByTagName("td")[10].style.backgroundColor="red";
    document.getElementsByTagName("td")[7].style.backgroundColor="yellow";
    document.getElementsByTagName("td")[2].style.backgroundColor="yellow";
    document.getElementsByTagName("td")[12].style.backgroundColor="green";
    document.getElementsByTagName("td")[17].style.backgroundColor="green";
    document.getElementsByTagName("td")[18].style.backgroundColor="pink";
    document.getElementsByTagName("td")[9].style.backgroundColor="pink";
    document.getElementsByTagName("td")[21].style.backgroundColor="gray";
    document.getElementsByTagName("td")[15].style.backgroundColor="gray";
    document.getElementsByTagName("td")[23].style.backgroundColor="brown";
    document.getElementsByTagName("td")[28].style.backgroundColor="brown";
    document.getElementsByTagName("td")[27].style.backgroundColor="blue";
    document.getElementsByTagName("td")[5].style.backgroundColor="blue";
}
function jugador1(){//tira y muestra posicion j1
    if(juego.turno()=="j1"){
    if(document.getElementById("p1")){
        var node = document.getElementById("p1");
        node.parentNode.removeChild(node);
    }
    var celda=document.getElementsByTagName("td")[juego.tirar()];
    var parr1 = document.createElement("div");
    parr1.id="p1";
    parr1.textContent="j1";
    celda.appendChild(parr1);
}else{
    juego.tirar();
}
}
function jugador2(){//tira y muestra posicion j2
    if(juego.turno()=="j2"){
    if(document.getElementById("p2")){
        var node = document.getElementById("p2");
        node.parentNode.removeChild(node);
    }
    var celda=document.getElementsByTagName("td")[juego.tirar1()];
    var parr2 = document.createElement("div");
    parr2.id="p2";
    parr2.textContent="j2";
    celda.appendChild(parr2);
}else{
    juego.tirar1();
}
}
creaTablero();
document.getElementById("boton1").onclick=jugador1;
document.getElementById("boton2").onclick=jugador2;