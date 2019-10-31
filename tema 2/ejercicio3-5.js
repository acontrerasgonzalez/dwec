function eliminaRepetidos(cad){
    var aux="";
    aux=cad.charAt(0);
    var lim=0;
    for(i=1;i<cad.length;i++){
        lim=aux.length;
        for(j=0;j<lim;j++){
            if(cad.charAt(i)==aux.charAt(j)){
            }else{
            aux=aux+cad.charAt(i);
        }
        }
    }
    return aux;
}
var cadena=prompt("Introduce cadena");
document.write("la cadena es "+cadena);
document.write("<br>la nueva cadena es "+eliminaRepetidos(cadena));
