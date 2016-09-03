
	function mueveReloj(){ 
   	momentoActual = new Date() ;
   	hora = momentoActual.getHours(); 
   	minuto = momentoActual.getMinutes(); 
   	segundo = momentoActual.getSeconds(); 

   	str_segundo = new String (segundo) ;
   	if (str_segundo.length == 1) 
      	segundo = "0" + segundo ;

   	str_minuto = new String (minuto); 
   	if (str_minuto.length == 1) 
      	minuto = "0" + minuto ;

   	str_hora = new String (hora); 
   	if (str_hora.length == 1) 
      	hora = "0" + hora ;

   	horaImprimible = hora + " : " + minuto + " : " + segundo ;

   	document.form_reloj.reloj.value = horaImprimible ;
    

   	setTimeout("mueveReloj()",1000) ;
} 

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
document.write(calcTime("Londres", "+1"));