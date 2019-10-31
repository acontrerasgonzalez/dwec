function calculateAge(){
	var by=prompt("Introduce birth year");
	var cy=prompt("Introduce current year");
	let e1=cy-by;
	let e2=cy-by-1;
	document.write("You are either "+e2+" or "+e1);
}
calculateAge();