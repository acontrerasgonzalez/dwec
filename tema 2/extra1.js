function validar(numero){
    var aux=0;
    var aux1=false;
    var arr=numero.split("-");
    var num="";
    for(i=0;i<arr.length;i++){
        num=num+arr[i];
    }
    for(i=0;i<num.length;i++){
        aux=aux+parseInt(num.charAt(i))
    }
    noRepetido = false;
    for(i=0;i<num.length || !noRepetido ;i++){
      if(num.charAt(i)!=num.charAt(i+1))
        noRepetido = true;
    }
    if(num.length!=16){
        return false;
    }else if(parseInt(num)!=num){
        return false;
    }else if(parseInt(num)%2!=0){
        return false;
    }else if(aux<16){
        return false;
    }else{
        return true;
    }
}
var cadena=prompt("Introduzca cadena");
document.write(cadena);
if(validar(cadena)){
    document.write("<br>correcto");
}else{
    document.write("<br>incorrecto");
}