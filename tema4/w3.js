function validarGmail(textfield){
    var emailexp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(emailexp.test(textfield.value)){
        document.getElementById("par5").innerHTML="Correcto";
    }else{
        document.getElementById("par5").innerHTML="Incorrecto";
    }
}

function validarTelefono(textfield){
    var tlfexp=/^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;
    if(tlfexp.test(textfield.value)){
        document.getElementById("par4").innerHTML="Correcto";
    }else{
        document.getElementById("par4").innerHTML="Incorrecto";
    }
}

function validarDni(textfield){
    var dniexp=/^\d{8}[a-zA-Z]$/;
    if(dniexp.test(textfield.value)){
        document.getElementById("par1").innerHTML="Correcto";
    }else{
        document.getElementById("par1").innerHTML="Incorrecto";
    }
}
function validarNombre(textfield){
    if(textfield.value!=""){
        document.getElementById("par2").innerHTML="Correcto";
    }else{
        document.getElementById("par2").innerHTML="Esta vacio";
    }
}

function validarApellidos(textfield){
    if(textfield.value!=""){
        document.getElementById("par3").innerHTML="Correcto";
    }else{
        document.getElementById("par3").innerHTML="Esta vacio";
    }
}

function validarUsuario(textfield){
    var usuexp=/\w{8}/;
    if(usuexp.test(textfield.value)){
        document.getElementById("par6").innerHTML="Correcto";
    }else{
        document.getElementById("par6").innerHTML="Incorrecto";
    }
}