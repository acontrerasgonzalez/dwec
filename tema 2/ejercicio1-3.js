
function retrasarReloj(){
    const fecha=new Date();
    var hor=fecha.getHours();
    var min=fecha.getMinutes();
    var seg=fecha.getSeconds();
    for(i=0;i<60;i++){
        if(seg==0){
            min--;
            seg=60;
            document.write("<br>Son las: "+hor+" : "+min+" : "+seg);
        }else if(min==0){
            hor--;
            min=60;
            document.write("<br>Son las: "+hor+" : "+min+" : "+seg);
        }else{
            seg--;
            document.write("<br>Son las: "+hor+" : "+min+" : "+seg);
        }    
}
}
    setTimeout(retrasarReloj(), 1000);
