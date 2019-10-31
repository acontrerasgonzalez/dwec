function separar(cad){
    var aux1="";
    var aux2="";
    var cadena="";
    for(i=0;i<cad.length;i++){
        if(cad.charAt(i)=="a" || cad.charAt(i)=="e" || cad.charAt(i)=="i" || cad.charAt(i)=="o" || cad.charAt(i)=="u"){
            aux1=aux1+cad.charAt(i);
        }else{
            if(cad.charAt(i)==" "){

            }else{
            aux2=aux2+cad.charAt(i);
        }
        }
    }
    cadena=aux2+aux1;
    return cadena;
}
var int=prompt("Introduce cadena");
document.write(separar(int));