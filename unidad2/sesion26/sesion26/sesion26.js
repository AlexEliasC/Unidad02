/*
function suma (a,b){
  resultado = a+b
  return resultado ;
}

let respuesta = suma(5,5);
alert(respuesta);
*/
/*
function add(a){
  resultado=a+10;
  return resultado
}
alert(add(5))

*/

/*

let agregar = a => a+11;
alert (agregar(2));
*/

const medallas = function (puntaje){
   if (puntaje < 3) {
     return "Bronce";
   }
   if (puntaje < 5){
     return "Plata";
   }
   return "Oro";
}
alert (medallas(4));

