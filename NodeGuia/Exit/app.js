console.log('Este es un programa que inicia la ejecucion');

//Queremos que nuestro programa se cierre solo al pasar  por el numero 100

for (let index = 0; index < 200; index++) {
   if(index===100) {
       console.log('Llegamos a 100 nos vamos a salir');
       process.exit(0);//Con esto vamos a terminar la ejecucion del codigo. el 0 que pasamos por defecto es para 
       //indicar el codigo de salida
   }

}
 
