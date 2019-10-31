let col=prompt("Introduce columns");
let wid=prompt("Introduce widht");
let hei=prompt("Introduce height");
document.write('<table border="0" cellspacing = "2" bgcolor = "black" width = "'+col*wid+'" >');
document.write('<tr bgcolor="white" height ="'+hei+'">');
for (var i = 0; i < col; i++) {
		document.write( '<td width ="'+wid+'" ></td>');
}
document.write('</tr>');
document.write('</table>');