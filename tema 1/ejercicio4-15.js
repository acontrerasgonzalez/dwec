var num=prompt("Introduce un numero jugador 1");
var numad=prompt("Introduce un numero jugador 2");
while(parseInt(num)!=parseInt(numad)){
	if(num<numad){
		alert("su numero es mayor")
	}else{
		alert("su numero es menor")
	}	
	var numad=prompt("Introduce otro numero jugador 2");
}
alert("Has ganado")