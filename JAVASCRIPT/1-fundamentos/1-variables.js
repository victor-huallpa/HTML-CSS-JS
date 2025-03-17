// las varaibles son espacios de memoria reservados para almacenar informaicon
// existen tres tipos de variables VAR LET Y CONST
// VARa; esta variabel es una variable de funcion o global y puede reasignar su valor cuando sea
// lo que significa que no es recomendable su uso ya que puede generar errores en el codigo
// ejemplo
var valorvar = "hola";
console.log(valorvar);
valorvar = "adios"
console.log(valorvar);
//como se observa cambio su valor

//LET: esta variable es de tipo bloque o local(solo sepuede acceder dentro de este bloque) y no puede ser usada antes que se declare, no se puede redeclarar dentro del mismo ambito
//ejemplo
let valorlet = "";
valorlet = "hola";
console.log(valorlet);
valorlet = "adios";
console.log(valorlet);

//CONST: esta variable es de tipo bloque o local(solo se peude acceder a su valor dentro del bloque) y las variables const se declarar para almacenar valores fijos  o se a que no se puede reasignar un valor( objeto matriz ) cuando se declara se tiene que asignarle un valor a l instante
//ejemplo
const valorconst = "hola";
console.log(valorconst);
valorconst = "adios";//generar una error
console.log(valorconst);// s eimprime un error