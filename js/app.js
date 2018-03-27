// jquery .ready
function func1() {
  Calculadora.init();
}
window.onload=func1;

//Declaramos variables
var operandoa;
var operandob;
var operacion;

var Calculadora = {
  init: function(){
  //variables
  var resultado = document.getElementById('display');
  var reset = document.getElementById('on');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');
  var punto = document.getElementById('punto');
  var sign = document.getElementById('sign');
  var raiz = document.getElementById('raiz');

  //Eventos de click
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
    punto.onclick = function(e){
        resultado.textContent = resultado.textContent  + ".";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }

    function limpiar(){
      resultado.textContent = "";
    }
    function resetear(){
      resultado.textContent = "";
      operandoa = 0;
      operandob = 0;
      operacion = "";
    }
},
  listenCalcClick: function(){
    var self = document.getElementByClassName("tecla");
    self.addEventListener("click", modifyText, function(){
      alert("ONCLICK");
    });

  /*  var self = this
    google.maps.event.addEventListener(map, 'click', function (ev){
      var position = ev.latLng
      var modalInfo = document.getElementByClassName('modalInfo')[0].click()
      var btnGuardar = document.getElementByClassName('guardarInfo')[0]
      btnGuardar.onClick = function(e){
        e.preventDefault()
        var nombre = document.getElementByClassName('nombre')[0],
            descripcion = document.getElementByClassName('descripcion')[0]
        var site = {
          nombre : nombre.value,
          descripcion : descripcion.value,
          latitud : position.lat(),
          longitud : position.lng()
        }
        self.saveAndPlaceMarker(site) //envia los datos a guardar como un objeto
        //limpia el formulario y cierra el modal
        nombre.value = ''
        descripcion.value = ''
        $('#modalCaptura').closeModal()
      }
    })*/
  }
}
