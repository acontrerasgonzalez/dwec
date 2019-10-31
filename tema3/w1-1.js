function mayor (...numeros){


    var mayor = a;
     
    if (b>mayor)
            mayor = b;
   

    return mayor;
    

    if (a>b && a>c && a>d){
		return a;
	}
	if (b>a && b>c && b>d){
		return b;
	}
	if (c>a && c>b && c>d){
		return c;
	}
	if (d>a && d>b && d>c){
		return d;
	}
}

var a = prompt ("Introduce a");
var b = prompt ("Introduce b");
var c = prompt ("Introduce c");
var d = prompt ("Introduce d");

document.write(mayor(a, b, c, d));