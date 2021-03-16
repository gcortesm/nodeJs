'use strict';
let numeroSegmentos;
resolver(1);
function resolver (segundos)
{
nuemeroSegmentos=0;
while (segundos>=0) {
 hora_actual = segundosToDate(segundos);
 console.log("hora_actual "+hora_actual);
 expresion = /[0-9]/g;
 hora = hora_actual.match(expresion);
 console.log("hora string "+hora);
    for(j = 0; j < hora.length; j++){
                numero = hora[j];
                switch(numero){
                    case '0': case 6: case 9: numeroSegmentos += 6;break;
                    case '1': numeroSegmentos += 2;break;
                    case '2': case 3: case 5: numeroSegmentos += 5;break;
                    case '4': numeroSegmentos += 4;break;
                    case '7': numeroSegmentos += 3;break;
                    case '8': numeroSegmentos += 7;break;
                }
    }
 segundos--;
 }
 console.log("Segmentos "+numeroSegmentos);
}
function segundosToDate(segundos) {
  let hora= new Date();
  var hour = Math.floor(segundos / 3600);
  hour = (hour < 10)? '0' + hour : hour;
  hora.setHours(hour);
  var minute = Math.floor((segundos / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  hora.setMinutes(minute);
  var second = segundos % 60;
  second = (second < 10)? '0' + second : second;
  hora.setSeconds(second);
  return hora.toLocaleTimeString();
}