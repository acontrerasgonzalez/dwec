function palindromo(cad){
    var aux="";
    for(i=cad.length-1;i>=0;i--){
        aux=aux+cad.charAt(i);
    }
    if(cad==aux){
        return true;
    }else{
        return false;
    }
}
var cadena=prompt("Introduce una cadena")
if(palindromo(cadena)==true){
    document.write("Su cadena es un palindromo");
}else{
    document.write("Su cadena no es un palindromo");
}