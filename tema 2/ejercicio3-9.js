function cadenaTabla(cad){
    document.write('<table><tr border="1">');
    for(i=0;i<cad.length;i++){
        document.write_("<td>"+cad.charAt(i)+"</td>")
    }
    document.write("</tr></table>");
}
var cadena=prompt("Introduzca cadena");
document.write(cadena);
cadenaTabla(cadena);
/*function formatearPalabra(cadena){
    let tabla = "<table border=\"1\">";
    for(let i = 0; i<cadena.length;i++){
        tabla += "<tr>";
        for(let j = 0; j<cadena.length;j++){
            if(i != 0 && i != cadena.length-1 && j != 0 && j != cadena.length-1)
                tabla += "<td></td>";
            else if(i == cadena.length-1){
                tabla += "<td>"+cadena.charAt((i-j))+"</td>";
            }
            else if(j == cadena.length-1){
                tabla += "<td>"+cadena.charAt((j-i))+"</td>";
            }
            else
                tabla += "<td>"+cadena.charAt((i+j)%cadena.length)+"</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</tabla>";
    return tabla;
}

var cadena = prompt("Introduce una palabra");
document.write(formatearPalabra(cadena));*/