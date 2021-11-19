/*
let number = 0;  //aqui declaramos la variable con let
while (number <=5){
  console.log(number);
  number=number+1;
}
*/
/*
let number = 1;  //aqui declaramos la variable con let
while (number <=12){
  console.log(number);
  number=number+1;
}
*/
/*
const paises = ["peru","uruguay","chile"];
let i=0;
while (paises.length>i){
  console.log(paises[i]);
  i=i+1;
}
*/
/*
let i=0;
do {
  i=i+1;
  console.log(i);
} while (i<5);
*/
const patron = /hola/;
let dato;
do{
  dato = prompt("ingresa el valor:");
} while(!patron.test(dato));