function tablaMultiplicar(){
	for (var i = 1; i <=10; i++) {
		document.write("Tabla del "+i+"<br>");
		for (var j = 0; j <=10; j++) {
			document.write(i+"x"+j+"="+(i*j)+"<br>");
		}
	}
}
tablaMultiplicar();