
var pagina=1;
var blockScroll=false;
$("#boton-busc").on("click", busqueda);
$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100){
    if(blockScroll==false){
            pagina++;
            getFilms();
    }
}
});
function busqueda(){
  pagina=1;
  $("#posts").empty();
  getFilms();
}
function getFilms() {
  if(blockScroll==false){
    blockScroll=true;
    $.ajax({
    url: "http://www.omdbapi.com/?s="+$("#busc").val()+"&page="+pagina+"&apikey=f20af2c3",
    success: function(respuesta) {

      var listaFilms = $("#posts");
      //$("#posts").empty();
      $.each(respuesta.Search, function(index, elemento) {
        var imag=document.createElement("img");
        imag.setAttribute('src', elemento.Poster);
        imag.setAttribute('width', '250px');
        imag.setAttribute('height', '350px');
        imag.id=elemento.imdbID;
        var conte=document.createElement("div");
        var par=document.createElement("p");
        var node=document.createTextNode("Titulo: "+elemento.Title);
        var enl=document.createElement("a");
        enl.href="#popup";
        conte.setAttribute('class',"card col-md-3 m-3");
        enl.id="detalle";
        enl.style.display="none";
        enl.text="Detalle";
        par.append(node);
        par.append(enl);
        conte.append(imag);
        conte.append(par); 
        listaFilms.append(conte);   
      });
      blockScroll=false; 
      $("img").click(getFilm);
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
      $("#popupBody>img").remove();
      $("#popupBody>p").remove();
        var listaFilm = $("#popupBody");
        var imag=document.createElement("img");
        imag.setAttribute('src', respuesta.Poster);
        imag.setAttribute('width', '200px');
        imag.setAttribute('height', '200px');
        var par=document.createElement("p");
        var node=document.createTextNode("Titulo: "+respuesta.Title+" Año: "+respuesta.Year);
        par.append(node);
        var br=document.createElement("br");
        par.append(br);
        var node1=document.createTextNode(" Runtime: "+respuesta.Runtime+" Writer: "+respuesta.Writer);
        par.append(node1);
        var br=document.createElement("br");
        par.append(br);
        var node1=document.createTextNode(" Actors: "+respuesta.Actors+" Released: "+respuesta.Released);
        par.append(node1);
        var br=document.createElement("br");
        par.append(br);
        var node2=document.createTextNode(" Plot: "+respuesta.Plot);
        par.append(node2);
        listaFilm.append(imag);
        listaFilm.append(par);
        $("#detalle")[0].click();
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}

