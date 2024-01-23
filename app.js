//variables
let maxNumeroSecreto = parseInt(
  prompt("¿Cual es el maximo numero que quieres adivinar:?")
);
let numeroSecreto = Math.floor(Math.random() * maxNumeroSecreto + 1);
let numeroDeUsuario = 0;
let intentos = 1;
let maximosIntentos = 6;

console.log("El maximo numero secreto es :" + maxNumeroSecreto);
console.log("El numero secreto generado es :" + numeroSecreto);

while (numeroDeUsuario != numeroSecreto) {
  numeroDeUsuario = parseInt(
    prompt(`¿Me indicas un numero entre 1 y ${maxNumeroSecreto} por favor:?`)
  );

  console.log(numeroDeUsuario);

  /*
    Este codigo realiza la comparacion entre el numero secreto y el numero ingresado por el usuario
    */
  if (numeroDeUsuario == numeroSecreto) {
    alert(
      `Acertaste, el numero es ${numeroDeUsuario} lo hiciste en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }`
    );
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("El numero secreto es mayor");
    }
    intentos++;

    if (intentos > maximosIntentos) {
      alert(`Llegaste al numero maximo de intentos ${maximosIntentos}`);
      break;
    }
  }
}
