//En java script lo eperadores y expresines nos ayudan a realizar operaciones con varaibels y valores
//list ade operadores y expresiones en js: aritmeticos, relacionales, logicos, de asignacion, bit a bit y opeador ternario

// OPERADORES ARITMETICOS: estos oeprador nos ayudan a realizar operaciones matemacas con valores o variable
//lista oepradores aritmeticos en js:suma +, resta -, multiplicacion *, divicion /, residuo %, potencia **.
//la gerarquia a la hora de resover estas operaicones matematicas es igual que en matematicas mulitpliacion y divicion tiene mayor jeraquia que suma y resta ahora puedes encerrar en bloques con () para indicar que operacion tiene que resolver primero
//ejemplo
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333
console.log(a % b); // 1
console.log(a ** b); // 1000
//HOTA: si encaso alguno delos dos valores no es numero js intenta  convertirlo a numero y en caso no se pueda este devuelve NaN (Not a Number)
console.log('hola' - a)// NaN
//en caso la divicion sea entre cero este devuelve infiniy o -infinity dependiendo de si el valor divido es positiv o negativo.
console.log(a / 0); // infinity
console.log(-5 / 0); // -infinity

//en caso de la suma si ambos valores son strings o uno de ellos lo es estos se concatenan
console.log('hola ' + 'mundo');
console.log('hola ' + a);

//OPERADORES COMPARACION 
//Los operadores de comparaicon es la manera como se comparan 2 valorse para obtener resultado booleanos ya ea true o false
//lista de operadores de comparacion: igualdad == (compara si dos valores son iguales), igualdad  estricta ===(compara dos valore sque sean iguales tant oen valor como en tipo de dato), desigualdad != (compara si dos valores sdon diferentes), desigualdad estricta !== (compara dos valores si son diferentes tanto en valor como en tipo de dato), mayor que > (verifica que el valor de la derecha sea mayor), mayor igual que >= (verifica si el valor de la derecha sea mayor o igual al de la izquierda) , menor que <(verifica que el valor de derecha sea manor), menor igual que <= (verifica si e; valor de la derecha es menor o igual al de la derecha)
//Ejemplo
console.log(5 == "5");  // true (compara solo valores)
console.log(5 === "5"); // false (compara tipo también)
console.log(10 > 5);    // true
console.log(10 >= 5);    // true
console.log(10 < 5);    // false
console.log(10 <= 10);    // true
console.log(4 !== 4);   // false
console.log(4 != '5');   // true

//NOTA: comparacion de cadenas, las cadenas se comparan lexicamente (alfavbeticamente)
console.log('a' < 'b');    // true
//cuando se trata de evaluar valores no numerocos js trata de convertirlos a numeros i esto falla devuelve resultado NaN
console.log('.,,' < '#$');    // NaN

//OPERADORES LOGICOS
//Los oepradores logicos al igual que los operadores de comparacion evaluan dos valores en este caso valores Boleanos(resultado de los operadores de comparacion) y de acuredo a esto devuelven un valor boleano true o false
//lista de operadores logicos: AND && (compara si los dos valores son verdaderos), OR ||(evalua si uno de estos dos valores es verdadero), not !(Invierte el valor o niega el valor de true a false o false a true)
//ejemplos
let edad = 20;
let tieneLicencia = true;
let esFinDeSemana = true;
let esDiaFestivo = false;
let tienePermiso = false;

console.log((edad >= 18) && (tieneLicencia === true)); // true
console.log((esFinDeSemana === true) || (esDiaFestivo === true)); // true
console.log(!tienePermiso); // true

//OPERADORES DE ASIGNACION
//Estos operadores asignan valor a una variable
//lista de operadores de asignacion: = (asignacion simple), +=( asignaicon de suma), -=(asignaicon de resta), *=(asignaicon de multiplicacion), /=(asignacion de divicion), %=(asignaicon de resto/modulo), **=(asignacion de potencia);
//Ejemplo
let num = 10;
num += 5; // 15
console.log(num);
num -= 3; // 12
console.log(num);
num *= 2; // 24
console.log(num);
num /= 4; // 6
console.log(num);
num %= 2; // 0
console.log(num);
num **= 2; // 36
console.log(num);
//NOTA; Los operadores de asignacion son operadores de muatacion y sirven para escribit codigo mas consizo y efeciente

//OPERADORES BIT A BIT
//Eestos operadores realizan operacion en la representacion binaria de los valores, se utiliza pra tareas de bajo nivel
//lista de operadores bit a bit: & (bit a bit and), | (bit a bit or), ^ (bit a bit xor), ~ (bit a bit not), << (bit a bit left shift''desplazamiento a la izquierda), >> (bit a bit right shift ''desplazamiento a la derecha), >>> (bit a bit right shift ''desplazamiento a la derecha sin signo)
//ejemplos
let num1 = 10;
let num2 = 5;
console.log(num1 & num2); // 0
console.log(num1 | num2); // 15
console.log(num1 ^ num2); // 15
console.log(~num1); // -11
console.log(num1 << 2); // 40
console.log(num1 >> 2); // 2
console.log(num1 >>> 2); // 2

//OPERADOR TERNARIO
//Este operador se utiliza para realizar operaicon ocndicional de if y else de manera mas simplificada
//Ejemplo
let edad1 = 17;
let mensaje = (edad1 >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);