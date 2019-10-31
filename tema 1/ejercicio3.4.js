function calcCircumfrence(radio){
	let circunferencia = 2*Math.PI*radio;
	document.write("La circunfenecia es "+circunferencia+" <br>");
}
function calcArea(radio){
	let area= Math.PI*radio*radio;
	document.write("El area es "+area+" <br>");
}

var radio = prompt('Introduce el radio');
calcCircumfrence(radio);
calcArea(radio);