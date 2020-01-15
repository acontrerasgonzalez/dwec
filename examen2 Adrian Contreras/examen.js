class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
}

class grupoAlumnos{
    constructor(){
        this.grupo=[];
    }
    matricular(persona){
        this.grupo.push(persona);
    }
    alumnoMenor(){
        menor=this.grupo[0];
        for(var i=0;i<this.grupo.length;i++){
            if(this.grupo[i].edad<=menor.edad){
                menor=this.grupo[i];
            }
        }
        return menor;
    }
    alumnosPorEdad(edad){
        var alu=0;
        for(var i=0;i<this.grupo.length;i++){
            if(this.grupo[i].edad==edad){
                alu++;
            }
        }
        return alu;
    }
}


function creaImagenes(urls,nodo){
    for(var i=0;i<urls.length;i++){
        var img=document.createElement("img");
        img.src=urls[i];
        nodo.appendChild(img);
    }
}
//prueba ejercicio3.a->
var urls=["imagen1.jpg","imagen2.jpg"];
var cont=document.getElementById("conta");

creaImagenes(urls,cont);

function asociaEventos(){
    var imags=document.getElementsByTagName("img");
    var clickado=false
    for(var i=0;i<imags.length;i++){
        imags[i].onclick=()=>{
            clickado=!clickado;
            if(clickado){
                document.body.style.backgroundColor="green"
            }else{
                document.body.style.backgroundColor="white"
            }
        };
    }
}
//prueba ejercicio 3.c->
asociaEventos();

function creaRectangulo(id){
    var rec=document.createElementNS("http://www.w3.org/2000/svg","rect");
    rec.setAttribute(("width"),175+"px");
    rec.setAttribute(("height"),50+"px");
    rec.setAttribute(("fill"),"green");
    document.getElementById(id).appendChild(rec);
}

creaRectangulo("contenedor");


function anima(){
    /*document.getElementsByTagName("rect")[0].animate([
        { transform: 'translateY(0px)' }, 
  { transform: 'translateY(200px)' },
  { transform: 'translateX(0px)' }, 
  { transform: 'translateX(400px)' }
    ], { 
      // timing options
      duration: 3000,
    });*/
    setInterval(()=>{
        var w=document.getElementsByTagName("rect")[0].style.width.replace("px","");
        var h=document.getElementsByTagName("rect")[0].style.height.replace("px","");
        if(document.getElementsByTagName("rect")[0].style.width=="350px"){

        }else{
        document.getElementsByTagName("rect")[0].style.width=50+w+"px";
    }
        if(document.getElementsByTagName("rect")[0].style.height=="350px"){

        }else{
        document.getElementsByTagName("rect")[0].style.height=60+h+"px";
    }
        },1000);
}

document.getElementById("boton").onclick=anima;

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable ([
    ['Marca', 'Ventas', {role: 'style'} ],
    ['Ford',4121, 'pink'],
    ['Renault',12360, 'pink'],
    ['Suzuki', 34052, 'pink'],
    ['Citroen', 1380, 'pink']
 ]);
  var options = {'title':'Volumen de Ventas',
                       'width':450,
                       backgroundColor: { fill: "blue" },
                       animation:{
                        duration: 4000,
                        easing: 'out',
        },
    };
  
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
  chart.draw(data, options);
}