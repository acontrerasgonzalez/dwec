function infoCadena(cad){
    if(cad==cad.toLowerCase()){
        document.write("La cadena es minuscula");
    }else if(cad==cad.toUpperCase()){
        document.write("La cadena es mayuscula");
    }else{
        document.write("La cadena es mixta");
    }
}
var cadena=prompt("Introduce cadena");
infoCadena(cadena);
