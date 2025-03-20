//Los arrays y objetos son estructuras de datos fundamentales en jasascript.
//en esta parte aprenderemos a manipular arrays yiobjetos en js

//ARRAYS Y METODOS
//Transformar cada elemento de larray con MAP
const numeros = [1, 2, 3, 4, 5];//array
const duplicado = numeros.map(num => num * 2);

console.log(duplicado);

//FILTRAR ELEMENTOS SEGUN UNA CONDICION
const edades = [16, 15, 30, 25, 40];
const mayoresEdad = edades.filter(edad => edad >= 18);
console.log(mayoresEdad);

//REDUCIR UN ARRAY CON REDUCE()
const numbers = [1, 2, 4, 5];
const suma = numbers.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma);

//Manipulacion y Objetos
const persona ={
    nombre: 'juan',
    edad: 20,
    ciudad: 'Lima'
};
console.log(persona.nombre);//primefa forma de manipulaicon de objetos
console.log(persona["edad"]);//segunda forma de manipulacion de objeto
//obtener las claves de los objetos
console.log(Object.keys(persona));
//obtener los valores de  objetos
console.log(Object.values(persona));
//objetenr clave y valores
console.log(Object.entries(persona));

//DESTRUCTURACION Y EL OPERADOR SPREAD/ REST(...)
//destructuracion de arrays
const colores = ["roje", "azul", "azul"];
const [color1, color2, color3] = colores;

console.log(color1, color2, color3);

const [primercolor,  , tercerColor] = colores;
console.log(tercerColor);

//DESTRUCTURACION DE OOBJETOS
//permite extraer valores de un objeto con nemos codigo
const usuario = {
    nombre: "juan",
    edad: 20,
    pais: "Peru"
}
const {nombre, edad} = usuario;
console.log(nombre, edad);
//asignar un bombre a cada variable
const { nombre: nombreUsuario, edad: edadUsuario } = usuario;

console.log(nombreUsuario, edadUsuario);


//OPERADOR SPREAD (...)
//copia y combina arrays u objetos
//copiar un array
const num = [1, 2, 3];
const copiaNumero = [...num];
console.log(copiaNumero);
//unir array
const pares = [2, 4, 6];
const impares = [1, 3, 5];
const todos =[...pares, ...impares];
console.log(todos);

//copia objeto
const perso = {nombre: 'ana', edad: 26};
const copiaperso = {...perso};
console.log(copiaperso);

//combinar fucionar objeto
const infoExtra = {ciudad: "Madrid", profesion: "Ingenieria"};
const perfilcompleto = {...perso, ...infoExtra};
console.log(perfilcompleto);

//OPERADOR REST (...)
//agrupa multiples valores en una varible en funciones(paremetros rest)
function sumar (...numer){
    return numer.reduce((total, num) => total + num, 0)
}
console.log(sumar(1,2,3,4,5));
//destructuracion
const [primer, segundo, ...resto] = [1,2,3,4,5];
console.log(primer, segundo, resto);


//ejercicios
const preciosUSD = [10, 20, 30, 40];

const preciosPEN = preciosUSD.map(precio => precio * 3.80);

console.log(preciosPEN); 


const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8];

const pares2 = numeros1.filter(num => num % 2 === 0);

console.log(pares2); 

const palabra = "javascript";

const contadorLetras = [...palabra].reduce((acc, letra) => {
    acc[letra] = (acc[letra] || 0) + 1;
    return acc;
}, {});

console.log(contadorLetras); 