let col=prompt("Introduce columns");
let wid=prompt("Introduce widht");
let hei=prompt("Introduce height");
document.write('<table border="0" cellspacing = "2" bgcolor = "black" width = "'+col*wid+'" >');
document.write('<tr height ="'+hei+'">');
var i=0;
while(i<col){
	if(i % 2 == 0){
		document.write( '<td width ="'+wid+'" bgcolor="white"></td>');
		i++;
	}else{
		document.write( '<td width ="'+wid+'" bgcolor="black"></td>');
		i++;
	}
}
document.write('</tr>');
document.write('</table>');