function dados(){//genera un dado
    var res=parseInt(Math.random()*6+1);
    return res;
}
function comprobar(){//comprueba cuantas veces sale cada numero del dado
    var arr=[0,0,0,0,0,0];
    for(i=0;i<6000;i++){
        switch(dados()){
            case 1:arr[0]++;break;
            case 2:arr[1]++;break;
            case 3:arr[2]++;break;
            case 4:arr[3]++;break;
            case 5:arr[4]++;break;
            case 6:arr[5]++;break;
        }
    }
    return arr;
}
document.write(dados()+"<br>");
var a=comprobar();
var h=1;
a.forEach(function(element) {
    document.write("El numero "+h+" ha salido "+element+" veces <br>");
    h++;
});