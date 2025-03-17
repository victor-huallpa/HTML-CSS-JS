//El control de flujo es la namera como evaluamos los datos y eejcutamos las acciones correspondientes

//CONDICIONALES
//Estas evaluan una condicion de acuerdo a los operadors de comparacion y logicos que se asignan a estas condicionales y son activadas dependiendo del valor boleando que adoptan, la lectura de las condiconales es en cascada 'de arriba hacia abajo' y se ejecutara la primera condicional que contenga true caso contrario sera else el qe se ejecute
//lista condicionales if(define la parte principal de la condicional, siendo la cabeza si no se cumple la condicion estructura e nesta se pasara a ejecutar el else if y e ncaso de que no exista un else if se pasa defrente a else y encaso este no exista se omite el bloque if), else if(condicional que esntra e naccion despues de que el if no se aya cumplido o otro else if no se aya cumplido cas ocontrario no se cumpla pasa a la sigeuitne condicional ya sea un else if o un else), else(condiconal que no requiere evaluar ninguna condicion por si misma ya que es la condiciona lque se ejecutara si cua lcondional anteriro (if o else if) no se  cumpla'que ayan resultado false').
//sintaxis
//if(condicion){bloque de codgio que se ejecuta si cumple la ocndicon o es true}
//else if(condicion){bloque de codigo que se ejecuta si cumple la condicion}
//else{bloque de codigo que se ejecuta si ninguna de las anteriores se cumple}
//ejemplo
let edad = 20;
let edadMinima = 18;

//primera forma
if(edad >= edadMinima){
    console.log('Eres mayor de edad');
}else{
    console.log('eres menor de edad');
}

//segunda forma
if(edad >= edadMinima){
    console.log('Eres mayor de edad');
}else if(edad < edadMinima){
    console.log('eres menor de edad');
}else{
    console.log('No se sabe si eres mayor o menor de edad');
}

//esta forma es operador ternario
(edad >= edadMinima) ? console.log('Eres mayor de edad') : console.log('eres menor de edad');

//ahora en caso de que solo quiera evaluar solo si es mayor vasta con solo un if
if(edad >= edadMinima){
    console.log('Eres mayor de edad');
}

//SWITCH
//Este es un control de flujo basado en la comparacion de valores por opciones o casos
//sintaxis
//sitch(expresion){
//    case valor1:
//        bloque de codigo que se ejecuta si la expresion coincide con el valor1
//        break; detiene e lflujo
//    case valor2:
//        bloque de codigo que se ejecuta si la expresion coincide con el valor2
//        break;
//    case valor3:
//        bloque de codigo que se ejecuta si la expresion coincide con el valor3
//        break;
//    default:
//        bloque de codigo que se ejecuta si ninguna de las opciones anteriores se cumple
//}

//ejemplo
let dia = 5;
switch(dia){
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('No es un dia de la semana');
}

//BUCLES
//Estos se usan para iterar sobre un conjusnto de datos o realizar una accion repetidamente

//for
//sintaxis
//for(inicializacion; condicion; actualizacion){
//    bloque de codigo que se ejecuta mientras la condicion sea verdadera
//}
//ejemplo
for(let i = 0; i < 5; i++){
    console.log(i);
}

//while
//sintaxis
//while(condicion){
//    bloque de codigo que se ejecuta mientras la condicion sea verdadera
//}
//ejemplo
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

//do while
//sintaxis
//do{
//    bloque de codigo que se ejecuta mientras la condicion sea verdadera
//}while(condicion);
//ejemplo
let j = 0;
do{
    console.log(j);
    j++;
}while(j < 5);
//NOTA: dentro de un bucle o ciclo puedes incluir la palabra reservada break para detener el flujo

//manejo de errores
//sintaxis
//try{
//    bloque de codigo que puede generar un error
//}catch(error){
//    bloque de codigo que se ejecuta si se produce un error
//}

//ejemplo
try{
    let x = 'hola';
    let y = 'hola';
    console.log(x % y);
}catch(error){
    console.log('Error: ' + error.message);
}