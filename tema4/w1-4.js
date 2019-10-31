window.onload=creaTabla;


function creaTabla(){
    document.write("<table border='1' name='tabla'>");
    for(i=0;i<=100;i++){
        document.write("<tr>");
        for(j=0;j<=100;j++){
            document.write("<td WIDTH='5' HEIGHT='5' onmouseover='colorea(event)' onclick='borra(event)'></td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function colorea(event){
    if(event.altKey==true){
        event.target.style.backgroundColor="red";
    }else if(event.shiftKey==true){
        event.target.style.backgroundColor="blue";
    }    
}


function borra(event){
    event.target.style.backgroundColor="white";
}

function borraTodo(event){
    if (event.key === 'Spacebar') {
    document.getElementById("tabla").style.backgroundColor="white";
}
}
