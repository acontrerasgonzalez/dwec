/*1. Crea las siguientes funciones y ll malas desde una p gina XHTML para mostrar á á
su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena.
c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
devuelve la longitud de la palabra m s larga en ella contenida á
d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor num rico (i), devuelva el n mero de palabras cuya longitud es mayor a i. é ú
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que s lo aparece en may scula la primera letra y el resto en ó ú
min scula.*/
function invierteCadena(cad){
var x=cad.length;
var ncad="";
while(x>=0){
    ncad=ncad+cad.charAt(x);
    x--;
}
return ncad
}
function inviertePalabras(cad){
    var arr=cad.split(" ");
    var aux="";
    for(i=arr.length-1;i>=0;i--){
        aux=aux+" "+arr[i];
    }
    return aux;
}
function encuentraPalabraMasLarga(cad){
    var arr=cad.split(" ");
    var cont1=0;
    for(i=0;i<arr.length;i++){
        var x=arr[i];
        if(cont1<=x.length){
            cont1=x.length;
        }
    }
    return cont1;
}
function filtraPalabraMasLarga(cad,y){
    var arr=cad.split(" ");
    var cont1=0;
    for(i=0;i<arr.length;i++){
        var x=arr[i];
        if(y<x.length){
            cont1++;
        }
    }
    return cont1;
}
function cadenaBienFormada(cad){
    var aux="";
    aux=cad.charAt(0).toUpperCase(); 
    for(i=1;i<cad.length;i++){        
                aux=aux+cad.charAt(i).toLowerCase();
    }
    return aux;
    }
var cadena=prompt("Introduzca cadena");
document.write(invierteCadena(cadena));
document.write("<br>"+inviertePalabras(cadena));
document.write("<br>"+encuentraPalabraMasLarga(cadena));
document.write("<br>"+filtraPalabraMasLarga(cadena,5));
document.write("<br>"+cadenaBienFormada(cadena));