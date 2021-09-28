var numeroSecreto = parseInt(Math.random() * 11);
var tentativas;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value); //Pega o valor do input chute e transforma em número

  //Verificar se acertou ou errou
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Você acertou. O número secreto era: " + numeroSecreto;
  } else if (chute < 0 || chute > 10) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou. O número secreto é menor que o número chutado";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou. O Número secreto e maior que o número chutado ";
  } else {
    elementoResultado.innerHTML =
      "Você errou, o número secreto era " + numeroSecreto;
  }
}