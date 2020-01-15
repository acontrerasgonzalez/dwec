$("document").ready( function(){
    $("#ej1 td:gt(1)").css("background-color","red");
    $("#ej1 td:lt(2)").css("background-color","blue");
    

    /*ej2*/$("p:contains('eu')").css("background-color","red");

    $("#ej3 td:empty").css("background-color","yellow");

    $("#ej5 p").click(function(){
        $("#ej5").css("background-color","yellow");
    });
});