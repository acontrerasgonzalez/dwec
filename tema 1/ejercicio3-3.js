function calculateSupply(){
	var age=prompt("Introduce age");
	var apd=prompt("Introduce amount per day");
	let lmax=60;
	var apl=(60-age)*365*apd;
	document.write("You will need "+apl+" to last you until the ripe old age of "+lmax);
}
calculateSupply();