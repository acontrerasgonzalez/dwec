
var pagina=1;
var blockScroll=false;
$("#boton-busc").on("click", getFilms);
$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100){
    if(blockScroll==false){
            getFilms();
            pagina++;
    }
}
});

function getFilms() {
  //alert($("#busc").val());
  if(blockScroll==false){
    blockScroll=true;
    $.ajax({
    url: "http://www.omdbapi.com/?s="+$("#busc").val()+"&page="+pagina+"&apikey=f20af2c3",
    success: function(respuesta) {

      var listaFilms = $("#posts");
      $.each(respuesta.Search, function(index, elemento) {
        var imag=document.createElement("img");
        imag.setAttribute('src', elemento.Poster);
        imag.setAttribute('width', '100px');
        imag.setAttribute('height', '100px');
        imag.id=elemento.imdbID;
        var conte=document.createElement("div");
        var par=document.createElement("p");
        var node=document.createTextNode("Titulo: "+elemento.Title);
        par.append(node);
        conte.append(imag);
        conte.append(par); 
        listaFilms.append(conte);   
      });
      blockScroll=false; 
      $("#busc").hide();
      $("#boton-busc").hide();
      $("img").click(getFilm);
      /*$("#posts>div").height(150);
      $("#posts>div").width(500);
      $("#posts>div").css("background-color","red");*/
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}
}

function getFilm(event) {
  $.ajax({
    url: "http://www.omdbapi.com/?i="+event.target.id+"&apikey=f20af2c3",
    success: function(respuesta) {
        
        var listaFilm = $("#post");
      //$.each(respuesta, function(index, elemento) {
        $("#posts").hide();
        var imag=document.createElement("img");
        imag.setAttribute('src', respuesta.Poster);
        imag.setAttribute('width', '500px');
        imag.setAttribute('height', '500px');
        var par=document.createElement("p");
        var node=document.createTextNode("Titulo"+respuesta.Title+" Año: "+respuesta.Year);
        par.append(node);
        listaFilm.append(imag);
        listaFilm.append(par);
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}

