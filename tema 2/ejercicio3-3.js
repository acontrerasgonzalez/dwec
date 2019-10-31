function subca(cad,subc){
    var aux="";
    var cont=0;
    for(i=0;i<cad.length;i++){
        aux="";
        for(j=0;j<subc.length;j++){
            aux=aux+cad.charAt(i+j);
        }
        if(aux==subc){
            cont++;
        }
    }
    return cont;
}
var cadena=prompt("Introduce la cadena");
var subcadena=prompt("Introduce la subcadena");
document.write("la cadena es "+cadena);
document.write("<br>la subcadena es "+subcadena);
var veces=subca(cadena,subcadena);
document.write("<br>la subcadena sale "+veces+" veces");