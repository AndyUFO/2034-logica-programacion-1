//variables
let numeroSecreto = 3;
let numeroDeUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
while (numeroDeUsuario != numeroSecreto) {
  numeroDeUsuario = prompt("¿Me indicas un numero entre 1 y 10 por favor:?");

  console.log(numeroDeUsuario);

  /*
    Este codigo realiza la comparacion entre el numero secreto y el numero ingresado por el usuario
    */
  if (numeroDeUsuario == numeroSecreto) {
    alert(
      `Acertaste, el numero es ${numeroDeUsuario} lo hiciste en ${intentos} ${palabraVeces}`
    );
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("El numero secreto es mayor");
    }
    intentos++;
    palabraVeces = "veces";
    if (intentos > 3) {
      alert("Llegaste al numero maximo de intentos");
      break;
    }
    //alert("Lo siento, intenta nuevamente");
  }
}
