let numeroSecreto = 6;
let numeroDeUsuario = prompt("¿Me indicas un numero por favor:?");

console.log(numeroDeUsuario);

if (numeroDeUsuario == numeroSecreto) {
  alert("Adivinaste !!!");
} else {
  alert("Lo siento, intenta nuevamente");
}
