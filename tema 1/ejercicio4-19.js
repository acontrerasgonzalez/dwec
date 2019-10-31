function generaAjedrez(){
	var wei=prompt("Introduce anchura y altura de la celda");
	document.write('<table border= ”0” cellspacing = ”2” bgcolor= ”black” width = ”200” >');
	for (var i = 1; i <= 8; i++) {
			document.write('<tr bgcolor= "white" height= "'+wei+'">');
		for (var j = 1; j <=8; j++) {
			if (j%2==0) {
				if(i%2==0){
					document.write('<td bgcolor= "white" width="'+wei+'"></td>');
				}else{
					document.write('<td bgcolor= "black" width="'+wei+'"></td>');
			}
			}else{
				if(i%2==0){
					document.write('<td bgcolor= "black" width="'+wei+'"></td>');
				}else{
					document.write('<td bgcolor= "white" width="'+wei+'"></td>');
			}
			}
		}
	}
	document.write('</tr>');
	document.write('</table>')
}
generaAjedrez();