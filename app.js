  function mueveReloj(){ 
    var momentoActual = new Date(),
        hora = momentoActual.getHours(),
        minuto = momentoActual.getMinutes(), 
        segundo = momentoActual.getSeconds(); 

    //Establezco horario como variable para usarla en la estructura switch 

    var horario = document.getElementById("huso").value;

      /*
      if (horario == "-4") {
        hora = hora + 1;  
      } 
      else if (horario == "-3"){
        hora = hora + 2;
      }
      */

      //Iba aplicar If Else...pero se iba hacer demasiado largo y desordenado.
      //+INFO
      //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch


      //Esto lo saque de: http://www.worldtimezone.com/index_es.php 
      switch (horario) {
        case "-12": hora -= 7 ;
          break;
          case "-11": hora -= 6 ;
          break;
          case "-10": hora -= 5;
          break;
          case "-9": hora -= 4 ;
          break;
          case "-8": hora -= 3;
          break;
          case "-7": hora -= 2 ;
          break;
          case "-6": hora = hora - 1 ;
          break;
          case "-5": hora  ;
          break;
          case "-4": hora = hora + 1 ;
          break;
          case "-3": hora += 2 ;
          break;
          case "-2": hora += 3 ;
          break;
          case "-1": hora += 4 ;
          break;
          case "0": hora += 5 ;
          break;
          case "+1": hora += 6;
          break;
          case "+2": hora += 7 ;
          break;
          case "+3": hora += 8;
          break;
          case "+4": hora += 9 ;
          break;
          case "+5": hora += 10 ;
          break;
          case "+6": hora += 11 ;
          break;
          case "+7": hora += 12;
          break;
          case "+8": hora += 13;
          break;
          case "+9": hora += 14;
          break;
          case "+10": hora += 15;
          break;
          case "+11": hora += 16;
          break;
          case "+12": hora += 17;
          break;
          //Creo que las 2 lineas siguientes se puede omitir
          default:
          console.log("Se ejecutara si ocurre algun error");
          }

          //En el caso de que sobrepase las 24 horas, se reiniciara en 0 horas                  
          if (hora >= 24) {
            hora = hora - 24;
          } 

          //Tu codigo
          str_segundo = new String (segundo) ;
          if (str_segundo.length == 1) 
          segundo = "0" + segundo ;

          str_minuto = new String (minuto); 
          if (str_minuto.length == 1) 
          minuto = "0" + minuto ;

          str_hora = new String (hora); 
          if (str_hora.length == 1) 
          hora = "0" + hora ;

          //Hora a imprimir
          horaImprimible = hora + " : " + minuto + " : " + segundo ;

          document.form_reloj.reloj.value = horaImprimible ;
          //No sabia la linea de arriba :v. Esta interesante. 
          //Yo usaba este :(
          //document.getElementById("input_style").value = horaImprimible;
          
          //Funcion
          setTimeout("mueveReloj()",1000);
          } 

          /*ALGORITMO ORIGINAL */

          /*VOLE CON TU ALGORITMO. LE METEN MUCHAS COSAS... :( */

          /*
          
          // funcion para calcular la hora local en una ciudad dada la diferencia horaria.

          function calcTime(city, offset) {
              // creamos el objeto Date (la selecciona de la máquina cliente)
              d = new Date();
           
              // lo convierte  a milisegundos
              // añade la dirferencia horaria
              // recupera la hora en formato UTC
              utc = d.getTime() + (d.getTimezoneOffset() * 60000);
           
              // crea un nuevo objeto Date usando la diferencia dada.
              nd = new Date(utc + (3600000*offset));
           
              // devuelve la hora como string.
              return "La hora actual en " + city + " es: " + nd.toLocaleString();
              setTimeout("calcTime()",1000)
          }
          //Bombay
          document.write(calcTime("Bombay", "+5.5"));
          document.write("<br>");
          //Singapur time
          document.write(calcTime("Singapur", "+8"));
          document.write("<br>");
          //Londres
          document.write(calcTime("Lima", "-3"));

          */
