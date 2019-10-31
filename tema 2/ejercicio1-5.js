function reloj(){
    var fecha=new Date();
    var hor=fecha.getHours();
    var min=fecha.getMinutes();
    var seg=fecha.getSeconds();
    document.write("<br>Son las: "+hor+" : "+min+" : "+seg)
    setTimeout("reloj()", 1000);
}
reloj();
