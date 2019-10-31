let col=prompt("Introduce columns");
let wid=prompt("Introduce widht");
let hei=prompt("Introduce height");
document.write('<table border="0" cellspacing = "2" bgcolor = "black" width = "'+col*wid+'" >');
document.write('<tr bgcolor="white" height ="'+hei+'">');
var i=0;
while(i<col){
		document.write( '<td width ="'+wid+'" ></td>');
		i++;
}
document.write('</tr>');
document.write('</table>');