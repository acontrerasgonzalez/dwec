function numPalabras(cad){
    var arr=cad.split("  ");
    var ar=cad.split(" ");
    if(arr.length!=1){
        return arr.length;
}else{
    return ar.length;
}
}
var cadena=prompt("Introduzca cadena");
document.write(cadena);
document.write("<br>Su cadena tiene "+numPalabras(cadena)+" palabras");