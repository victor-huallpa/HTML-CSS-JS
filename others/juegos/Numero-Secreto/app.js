let numeroSecreto = 0;
let numintentos = 0;
let intentosRestantes = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignatTextoElemento (elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function VerificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numeroSecreto);
    // numeroSecreto === numeroUsuario? asignatTextoElemento('p','Acertaste el numero'): asignatTextoElemento('p','Sigue intentando');
    numintentos++;
    intentosRestantes--;
    if(numeroSecreto === numeroUsuario){
        asignatTextoElemento('p',`Acertaste el numero en ${numintentos} ${numintentos === 1? 'intento':'intentos'}`);
        document.getElementById('intento').setAttribute('disabled', 'true');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }else {
        //el usuario no haceto el numero
        if(numeroSecreto < numeroUsuario){
        asignatTextoElemento('p',`El numero secreto es menor: intentos restantes ${intentosRestantes}`);
        }else if(numeroSecreto > numeroUsuario){
        asignatTextoElemento('p',`El numero secreto es mayor: intentos restantes ${intentosRestantes}`);
        }
        limpiarCaja();
    }
    if(intentosRestantes === 0){
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intento').setAttribute('disabled', 'true');
        asignatTextoElemento('p','Lo siento perdiste tus 3 intentos');
        
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    // valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1) ;
    //se sortearon todos los numeros
    if(listaNumerosSorteados.length === numeroMaximo){
        document.getElementById('intento').setAttribute('disabled', 'true');
        asignatTextoElemento('p','Lo siento ya se sortearon todos los numeros');
        return;
    } else {
        //si el numero sorteado ya esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
}

function condicionesIniciales(){
    limpiarCaja();
    intentosRestantes = 3;
    asignatTextoElemento('h1', 'Juego del numer osecreto');
    asignatTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}, considera que solo tienes ${intentosRestantes} intentos`);
    numeroSecreto = generarNumeroSecreto();
    numintentos = 0;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //iniciar condiciones iniciales
    condicionesIniciales();
    //seshabilitar el boton
        document.getElementById('intento').removeAttribute('disabled');
        document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();