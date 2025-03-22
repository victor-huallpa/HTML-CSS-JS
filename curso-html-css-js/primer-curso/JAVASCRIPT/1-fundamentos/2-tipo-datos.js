//Los tipos de datos en js tienen un valor inmutable y directamente manipulables lo cual significa que cuando trabajes con un tipo de dato primitico esta trabajando directamente con su valor
//lista de tipos de datos primitivos en js
//string, number, bigint, boolean, null, undefined y symbol;

// STRING: es una cadena de texto que se encunetra dentro de comillas simples ' o dobles "" tambien dentro de comillas invertidas o backticks ``
//ejemplo
let cadena1 = 'hola';
let cadena2 = "hola2";
let cadena3 = `hola3`;
console.log(cadena1, cadena2, `${cadena3}, como se obseva es valido introducir dentor de las comillas inversas varibales dentro de llaves siempre  que preseda e l simbolo de dolar `);

//NUMBER: Representa valores numericos, tanto enteros como flotantes, lo que significa que js solo tiene un tipo de numero que representa ambos numeros enteros y flotantes estos se representas directamente en la able 
//ejemplo
let numero1 = 1;
let numero2 = 1.1;
console.log(numero1,' numero ', numero2);

//BIGINT: Representa numero enteros de presicion arbitraria, lo que permite trabajar con muneros muy grandes que exeden el limite de rango del tipo number, 
//se crea aniadiendo 'n' al dinal de un numero entero o utilizando la funcion BigInt().
//ejemplo
let numeroBigInt1 = 9007199254740991n;
let numeroBigInt2 = BigInt("9007199254740991");
console.log(numeroBigInt1, 'numero bigint',  numeroBigInt2);

//BOOLEAN: representa un valor logico: TURE(verdad) o FLASE(falso), se utiliza en expresiones condicionales y operaicones logicos
//Ejemplo
let verdadero = true;
let falso = false;
console.log(verdadero, falso);

//UNDERFINED: Representa la ausencia de un valor asignado a una variables(variable declarada pero no inicializada)
//Ejemplo
let indefinido1 = undefined;//ceclarando el tipo de datos
let indefinido2 ;// abreviado
console.log(indefinido1, indefinido2);

//NULL: Representa la ausencia de intencional de cualquier valor de objeto, es un valor asignado
//ejemplo
let nulo = null;
console.log(nulo);

//SYMBOL: Representa un valor unico e inmutable,utilizado como clave de propiedad de objeto, se usa para evitar coliisiones de nombre de propiedades
//Ejemplo
let simbolo1 = Symbol('descripcion');

console.log(simbolo1);

//NOTA: los tipos de datos primitivos son inmutables y cuando pasa un valor primitivo a una funcion, en realidad se pasa una copia del valor