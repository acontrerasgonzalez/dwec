function potencia(x,y){
    if(y==0){
        return 1
    }else{
        return x*potencia(x,y-1);
    }
}
var a = prompt ("Introduce base");
var b = prompt ("Introduce exponente");
document.write(potencia(a,b));