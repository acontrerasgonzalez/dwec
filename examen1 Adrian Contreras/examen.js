function ejercicio1(cadena,palabra){
    var resultado=cadena.replace(palabra,"");
    return resultado;
}

function ejercicio2(...fechas){
    var mayor="";
    fechas.forEach(function(element){
        var fecha=new Date(element);
        if(fecha>mayor){
            mayor=fecha;
        }
    });
    return mayor;
}

function ejercicio3(...letras){
    var resultado="";
    letras.forEach(function(element){
        resultado=resultado+element;
    });
    return resultado;
}

function ejercicio4(num){
    document.write('<table border= ”0” cellspacing = ”0” bgcolor= ”black” width = ”20” >');
	for (var i = 1; i <= num; i++) {
			document.write('<tr bgcolor= "white" height= "10">');
		for (var j = 1; j <=num; j++) {
			if (j%2==0) {
				if(i%2==0){
					document.write('<td bgcolor= "white" width="10"></td>');
				}else{
					document.write('<td bgcolor= "black" width="10"></td>');
			}
			}else{
				if(i%2==0){
					document.write('<td bgcolor= "black" width="10"></td>');
				}else{
					document.write('<td bgcolor= "white" width="10"></td>');
			}
			}
		}
	}
	document.write('</tr>');
	document.write('</table>')

}

function ejercicio5(event){
    for(i=10;i>=0;i--){
        event.target.innerHTML=i;
        Thread.sleep(1000);
    }
}

var cad="tra tre tri tra tre";
var pal="tre";
document.write(ejercicio1(cad,pal));
document.write("<br></br>");

var fech1="01/03/2016";
var fech3="05/05/2019";
var fech2="10/12/2008";
document.write(ejercicio2(fech3,fech2,fech1));

document.write("<br></br>");
document.write(ejercicio3("e","x","a","m","e","n"));

document.write("<br></br>");
ejercicio4(6);