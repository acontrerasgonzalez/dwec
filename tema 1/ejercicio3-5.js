function celsiusToFarenheit(){
	var cels=prompt("Introduce Celsius");
	var far=cels+273;
	document.write(cels+" C are "+far+" Farenheit")
}
function farenheitToCelsius(){
	far=prompt("Introduce Farenheit");
	cels=far-273;
	document.write(far+" F are "+cels+" Celsius")
}
celsiusToFarenheit();
farenheitToCelsius();

