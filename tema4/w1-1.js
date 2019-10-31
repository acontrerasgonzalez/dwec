function clicka() {
    alert("ha clicado ");
}
function posicion(event){
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("x").value=x;
    document.getElementById("y").value=y;
}