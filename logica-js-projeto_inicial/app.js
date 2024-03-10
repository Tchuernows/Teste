alert("Olá, bem vindo ao jogo do número secreto");
let numeroMaximo = 2000
let NumeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
console.log(NumeroSecreto);
let tentativas = 1

// Enquanto o chute não for igual ao número secreto
while (chute != NumeroSecreto) { 
    chute = prompt(`Me diga um número entre 1 e ${numeroMaximo}`)
{// Se o chute for igual ao número secreto
if (chute == NumeroSecreto) {
  break;
  } else {
    if (chute > NumeroSecreto) {
        alert(`O número secreto é menor que ${chute}`)
  } else {
alert(`o numero é maior que ${chute}`);
}
  tentativas++
}}
}
 let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
 alert(`Boa, você acertou o número secreto ${chute} com ${tentativas} ${palavraTentativa}`);
 // O codigo acima exerce a mesma função do de baixo
//if (tentativas > 1) {
//alert(`Boa, você acertou o número secreto ${chute} com ${tentativas} tentativas`);
//  } else {
//    alert(`Boa, você acertou o número secreto ${chute} com ${tentativas} tentativa`);
//  }

  

  