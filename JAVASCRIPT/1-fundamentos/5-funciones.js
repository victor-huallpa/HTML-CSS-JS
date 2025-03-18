//Las funciones en JavaScript son bloques de codigo reutilizable que nos permite organizar y optimizar nuestro codigo
// una funcion se define con la palabra resevada function, y peuden ser llamadas antes de serdeclaradas (hoisting)

//funciones normales o estandares
//sintaxis
//function nombreFuncion(parametros){
//    bloque de codigo
//    return resultado
//}
//nombreFuncion(parametros);
//ejemplo

let saludo = 'Hola Mundo';
function saludar(mensaje = 'mensaje por defecto'){
    let resultado = 2 + 2;
    console.log(mensaje);
    return resultado;
}
saludar(saludo);
//Nota: lo que se retorna de una funciona se puede almacenar dentro de una varible, al aves que return detiene la funcion al igal que break
let resultado = saludar(saludo);
console.log(`El resultado de la suma es: ${resultado}`);

//funciones expresadas (anonimas): son funciones que se signa a una varible y se tiene que definir antes de llamarla
//sintaxis
//let nombreFuncion = function(parametros){
//    bloque de codigo
//}
//ejemplo

const despedir = function(){
    console.log('adios mundo');
    return 'mensaje de despedida';
}
despedir();
let salida = despedir();
console.log(salida);
console.log(despedir());

//ARROW FUNCTIONS (funion flecha) '=>'
//introducida en ES6, forma abreviada de escribir funciones, elimina la nececidad de escribir la palabra reservda function, ys i solo itene una linea de return es implicitas
//sintaxis  
//let nombreFuncion = (parametros) => {
//    bloque de codigo
//}
//ejemplo
const restar = (a, b) => a - b;

console.log(restar(10, 4)); // Salida esperada: 6
const despedir1 = () => {
    console.log('adios mundo');
    return 'mensaje de despedida';
}
despedir1();
salida = despedir1();
console.log(salida);
console.log(despedir1());

const dividir = (a, b) => {
    if (b === 0) return "No se puede dividir por cero";
    return a / b;
};

console.log(dividir(10, 0)); // Salida esperada: 5

//scope
//consiste en la difeinicion de donde se puede acceder a una variable,global local, se usan variables let o const

//ejmplo

let globalVar = "Soy global"; // Variable global
function testScope() {
    let localVar = "Soy local";
    console.log(globalVar); // ✅ Accede a la variable global
    console.log(localVar); // ✅ Accede a su propia variable
}

testScope();
console.log(globalVar); // ✅ Funciona
// console.log(localVar); ❌ Error: localVar no está definida fuera de la función

//closures(cierrres en javasccript)
//ayuda con el acceso del scope en una funcion(acceder a datos privados)
//ejemplo
function contador() {
    let count = 0;
    return function () {
        count++;
        console.log("Contador:", count);
    };
}

let miContador = contador(); // Crea una instancia del closure

miContador(); // Contador: 1
miContador(); // Contador: 2
miContador(); // Contador: 3

//ejericcios
const doble = (num) => num * 2;
console.log(doble(6)); // Salida esperada: 12

const saludar1 = (nombre) => `Hola, ${nombre}!`;
console.log(saludar1("Carlos")); // Salida esperada: Hola, Carlos!

const sumaTotal = (numeros) => numeros.reduce((acc, num) => acc + num, 0);
console.log(sumaTotal([1, 2, 3, 4, 5])); // Salida esperada: 15

const contador1 = () => {
    let count = 0;
    return () => {
        count++;
        console.log(`Contador: ${count}`);
    };
};

let miContador1 = contador1();
miContador1(); // Contador: 1
miContador1(); // Contador: 2
miContador1(); // Contador: 3