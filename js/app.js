// jquery .ready
function func1() {

  Calculadora.init();
}
window.onload=func1;


//Declaramos variables globales
var operandoa;
var operandob;
var operacion;

var Calculadora = {

  init: function()
  {
    //variables
    var techa = document.getElementsByClassName('tecla');
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

    //Funciones de validacion
    function reducir(e){
      alert(e);
      e.style="width:200";
      e.style="height:200";
    }

    function val_inicial(num){
      if(num == "0")
        return "";
      else
        return num;
    }

    function val_long(num){
      if(num.length <= 8)
        return num;
      else
        return num.substring(0, 8);
    }

techa[0].onmousedown = function(e){
  techa[0].style = "width:71px; height:63px";
}
techa[0].onmouseup = function(e){
  techa[0].style = "width:73px; height:65px";
}
techa[1].onmousedown = function(e){
  techa[1].style = "width:71px; height:63px";
}
techa[1].onmouseup = function(e){
  techa[1].style = "width:73px; height:65px";
}
techa[2].onmousedown = function(e){
  techa[2].style = "width:71px; height:63px";
}
techa[2].onmouseup = function(e){
  techa[2].style = "width:73px; height:65px";
}
techa[3].onmousedown = function(e){
  techa[3].style = "width:71px; height:63px";
}
techa[3].onmouseup = function(e){
  techa[3].style = "width:73px; height:65px";
}
techa[4].onmousedown = function(e){
  techa[4].style = "width:71px; height:63px";
}
techa[4].onmouseup = function(e){
  techa[4].style = "width:73px; height:65px";
}
techa[5].onmousedown = function(e){
  techa[5].style = "width:71px; height:63px";
}
techa[5].onmouseup = function(e){
  techa[5].style = "width:73px; height:65px";
}
techa[6].onmousedown = function(e){
  techa[6].style = "width:71px; height:63px";
}
techa[6].onmouseup = function(e){
  techa[6].style = "width:73px; height:65px";
}
techa[7].onmousedown = function(e){
  techa[7].style = "width:71px; height:63px";
}
techa[7].onmouseup = function(e){
  techa[7].style = "width:73px; height:65px";
}
techa[8].onmousedown = function(e){
  techa[8].style = "width:71px; height:63px";
}
techa[8].onmouseup = function(e){
  techa[8].style = "width:73px; height:65px";
}
techa[9].onmousedown = function(e){
  techa[9].style = "width:71px; height:63px";
}
techa[9].onmouseup = function(e){
  techa[9].style = "width:73px; height:65px";
}
techa[10].onmousedown = function(e){
  techa[10].style = "width:71px; height:63px";
}
techa[10].onmouseup = function(e){
  techa[10].style = "width:73px; height:65px";
}
techa[11].onmousedown = function(e){
  techa[11].style = "width:71px; height:63px";
}
techa[11].onmouseup = function(e){
  techa[11].style = "width:73px; height:65px";
}
techa[12].onmousedown = function(e){
  techa[12].style = "width:71px; height:63px";
}
techa[12].onmouseup = function(e){
  techa[12].style = "width:73px; height:65px";
}
techa[13].onmousedown = function(e){
  techa[13].style = "width:71px; height:63px";
}
techa[13].onmouseup = function(e){
  techa[13].style = "width:73px; height:65px";
}
techa[14].onmousedown = function(e){
  techa[14].style = "width:71px; height:63px";
}
techa[14].onmouseup = function(e){
  techa[14].style = "width:73px; height:65px";
}
techa[15].onmousedown = function(e){
  techa[15].style = "width:71px; height:63px";
}
techa[15].onmouseup = function(e){
  techa[15].style = "width:73px; height:65px";
}
techa[16].onmousedown = function(e){
  techa[16].style = "width:71px; height:63px";
}
techa[16].onmouseup = function(e){
  techa[16].style = "width:73px; height:65px";
}
techa[17].onmousedown = function(e){
  techa[17].style = "width:71px; height:63px";
}
techa[17].onmouseup = function(e){
  techa[17].style = "width:73px; height:65px";
}
techa[18].onmousedown = function(e){
  techa[18].style = "width:75px; height:135px";
}
techa[18].onmouseup = function(e){
  techa[18].style = "width:77px; height:137px";
}
    //Eventos de click - numeros
    uno.onclick = function(e){
        resultado.textContent = val_inicial(resultado.textContent);
        resultado.textContent = val_long(resultado.textContent  + "1");
    }
    dos.onclick = function(e){
        resultado.textContent = val_inicial(resultado.textContent);
        resultado.textContent = val_long(resultado.textContent  + "2");
    }
    tres.onclick = function(e){
        resultado.textContent = val_inicial(resultado.textContent);
        resultado.textContent = val_long(resultado.textContent  + "3");
    }
    cuatro.onclick = function(e){
        resultado.textContent = val_inicial(resultado.textContent);
        resultado.textContent = val_long(resultado.textContent  + "4");
    }
    cinco.onclick = function(e){
        resultado.textContent = val_inicial(resultado.textContent);
        resultado.textContent = val_long(resultado.textContent  + "5");
    }
    seis.onclick = function(e){
        resultado.textContent = val_inicial(resultado.textContent);
        resultado.textContent = val_long(resultado.textContent  + "6");
    }
    siete.onclick = function(e){
        resultado.textContent = val_inicial(resultado.textContent);
        resultado.textContent = val_long(resultado.textContent  + "7");
    }
    ocho.onclick = function(e){
        resultado.textContent = val_inicial(resultado.textContent);
        resultado.textContent = val_long(resultado.textContent  + "8");
    }
    nueve.onclick = function(e){
        resultado.textContent = val_inicial(resultado.textContent);
        resultado.textContent = val_long(resultado.textContent  + "9");
    }
    cero.onclick = function(e){
        resultado.textContent = val_inicial(resultado.textContent);
        resultado.textContent = val_long(resultado.textContent  + "0");
    }
    punto.onclick = function(e){
      var con_punt = 0;
      for(i=0; i<resultado.textContent.length; i++)
         if(resultado.textContent.charAt(i)== ".")
            con_punt++;
      if(con_punt == 0)
        resultado.textContent = val_long(resultado.textContent  + ".");
    }
    sign.onclick = function(e){
      if( resultado.textContent != "0" ){
        if(resultado.textContent.charAt(0) == "-")
          resultado.textContent = resultado.textContent.replace("-", "");
        else
          resultado.textContent = val_long("-" + resultado.textContent);
      }
    }
    //Eventos de click - operaciones
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
      resultado.textContent = "0";
      operandoa = 0;
      operandob = 0;
      operacion = "";
    }

    function resolver(){
      var res = 0;
      switch(operacion){
        case "+":
          res = parseFloat(operandoa) + parseFloat(operandob);
          break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
          res = parseFloat(operandoa) * parseFloat(operandob);
          break;
        case "/":
          res = parseFloat(operandoa) / parseFloat(operandob);
          break;
      }
      res = val_long(res + "");
      resultado.textContent = res;
    }
  }
}
