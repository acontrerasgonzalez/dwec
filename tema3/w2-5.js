function creaArray(){
    var arr=new Array();
    var arrpar;
    var arrimp;
    var par=0;
    var impar=0;
    for(i=0;i<100;i++){
        arr[i]=parseInt(Math.random()*1000+1);
    }/*
    arr.forEach(function(element){
        if(element%2==0){
        arrpar[par]=element;
    }else{
        arrimp[impar]=element;
    }
    });
    arr.lenght=0;
    arr.concat(arrpar,arrimp);*/
    return arr;
}
function elimina(array){
    array.lenght=0;
    return array;
}
function add1(array){
    array.forEach(function(element){
        element+1;
    });
    return array;
}
function mostrarArray(array){
    var list = array.join(" ");
    return list;
}
var arr=creaArray();
arr.forEach(function(a){
    document.write(a+" <br>");
});
