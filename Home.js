

var h1T= document.createElement('h1');
var prod= document.createElement('h3');
var iProducto= document.createElement('input');
var cost= document.createElement('h3');
var iCosto= document.createElement('input');
var btnCarga=document.createElement('button');

h1T.innerHTML="Cargar Producto";
prod.innerHTML="producto";
cost.innerHTML='costo';
btnCarga.innerHTML='Cargar';




 var hp = document.getElementById('hp');
  
    var h1 = document.createElement("h1");
    h1.innerHTML = 'Solo para usuarios';
    var app = document.createElement('h4');
    app.innerHTML= (localStorage.user=='cris@gmail.com')? 'Is User':'Not Is User';
   
    

const startHome=()=>{
    if(localStorage.user=='cris@gmail.com'){
        hp.appendChild(app);
       
        hp.appendChild(h1T);
        hp.appendChild(prod);
        hp.appendChild(iProducto);
        hp.appendChild(cost);
        hp.appendChild(iCosto);
        hp.appendChild(btnCarga);
    }else{
        hp.appendChild(app);
    }

}
startHome();

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);

   
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}