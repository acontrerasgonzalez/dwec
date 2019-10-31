function ecuacion(a,b,c){
	var disc=b*b-4*a*c;
	if(disc<0){
		document.write("No hay solucion <br>");
	}else{
 	var x1=(-b-Math.sqrt(disc))/(2*a);
 	var x2=(-b+Math.sqrt(disc))/(2*a); 
 	document.write("Primera solucion: "+x1+"<br>");
	document.write("Segunda solucion: "+x2);
}
}
var x=parseInt(prompt("Introduce a"));
var y=parseInt(prompt("Introduce b"));
var z=parseInt(prompt("Introduce c"));
ecuacion(x,y,z);