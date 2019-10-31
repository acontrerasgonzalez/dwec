function generaTabla(){
	var col=prompt("Introduce numero de columnas");
	var fil=prompt("Introduce numero de filas");
	var wei=prompt("Introduce anchura de la celda");
	var hei=prompt("Introduce altura de la celda");
	document.write('<table border= ”0” cellspacing = ”2” bgcolor= ”black” width = ”200” >');
	for (var i = 1; i <= fil; i++) {
		document.write('<tr bgcolor= "white" height= "'+hei+'">');
		for (var j = 1; j <=col; j++) {
			document.write('<td width="'+wei+'"></td>');
		}
	}
	document.write('</tr>');
	document.write('</table>')
}
generaTabla();