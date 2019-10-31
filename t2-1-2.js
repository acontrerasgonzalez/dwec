/*2. Crea una p gina web en la que se muestre el resultado de cada uno de á
los siguientes apartados:
a. Crear variable "fechaHoy" con fecha de hoy
b. Crear variable "fecha85" que sume 85 d as a la variable "fechaHoy" í
c. Crear variable "fecha187" que reste 187 d as variable "fechaHoy" í
d. Sumar 2 a os a la variable "fecha85" ñ
e. Restar 24 horas a la variable "fecha187"
f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y
observa lo que obtienes*/
var fechaHoy=new Date();
var fecha85=new Date();
var fecha187=new Date();
var fechaResto=new Date();
document.write(fechaHoy);
fecha85.setDate(fecha85.getDate()+85);
document.write("<br>"+fecha85);
fecha187.setDate(fecha187.getDate()-187);
document.write("<br>"+fecha187);
fechaResto.setDate(fecha85.getDate()-fecha187.getDate());
fecha85.setFullYear(fecha85.getFullYear()+2);
document.write("<br>"+fecha85);
fecha187.setHours(fecha187.getHours()+24);    
document.write("<br>"+fecha187);
document.write("<br>"+fechaResto);
