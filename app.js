

let contadorDeVidas = 5;
/***La funcion genera un numero dentro del intervalo de cotaSuperior y cotaInferior. Luego lo castea a un int y lo devuelve***/
function generarAleatorio(cotaSuperior,cotaInferior){
    return parseInt((Math.random() * cotaSuperior-cotaInferior+1)+1);
}

let aleatorio = generarAleatorio(10,1);
alert("Bienvenido al juego, trata de adivinar el numero generado al azar del 1 al 10. Tienes 5 Intentos");

/***La funcion validara que no se ingresen numeros numeros fueras de las cotas, ni espacios vacios, ni strings 
 * 2- valor fuera de las cotas sup-inf
 * 1- No es un numero
 * 0- valor correcto
 ***/ 
let funcionValidar = (caracterAValidar,cotaSuperior,cotaInferior) => {
    if(isNaN(caracterAValidar)){
        alert("No ingresaste correctamente un numero");
        return 1;
    }else if(caracterAValidar<cotaInferior || caracterAValidar>cotaSuperior){
        alert("El numero debe estar entre 1 y 10");
        return 2;
        }
    else{
        return 0;
    }
}
for(let i=0; i<contadorDeVidas;i++){
    let numero = parseInt(prompt("Ingresa un numero del 1 al 10."));
    // el bucle verifica que el valor ingresado sea valido.
    while(funcionValidar(numero,10,1) != 0 ){
        numero = parseInt(prompt("Ingresa un numero del 1 al 10."));
    }
    if(numero === aleatorio){
        alert("GANASTE!, el numero era: " + aleatorio);
        break;
    }else{
        if(i==4){
            alert("PERDISTE!, el numero era: " + aleatorio);
            break;
        }else{
            alert("Casi aciertas vuelve a intentarlo");
        }
    }
    alert("Te quedan " + (contadorDeVidas-(i+1)) + " vidas.");
}