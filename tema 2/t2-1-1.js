var hoy=new Date();
document.write("Year: "+hoy.getFullYear());
var mes=parseInt(hoy.getMonth())+1;
document.write("<br>Mes: "+mes);
document.write("<br>Dia de la semana n: "+hoy.getDay());
document.write("<br>hora: "+hoy.getHours());
document.write("<br>Minutos: "+hoy.getMinutes());
document.write("<br>Segundos: "+hoy.getSeconds());