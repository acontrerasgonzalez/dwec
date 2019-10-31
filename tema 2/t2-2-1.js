var a=Math.round(Math.random());
var b=parseInt(Math.random()*100+100);
var desde=prompt("Introduce inicio de intervalo");
var hasta=prompt("Introduce final de intervalo");
do{
	var c=parseInt(Math.random()*hasta+desde);
}while(c<desde || c>hasta)
document.write("Numero aleatorio entre 0 y 1: "+a+"<br>");
document.write("Numero aleatorio entre 100 y 200: "+b+"<br>");
document.write("Numero aleatorio entre "+desde+" y "+hasta+": "+c);