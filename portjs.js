// 1. Pegamos os elementos do HTML pelo ID
const botaoEnergia = document.getElementById("btn-energia");
const ledEnergia = document.getElementById("led-energia");
const textoEnergia = document.getElementById("texto-energia");

// Variável simples para guardar se a placa está ligada ou não
let placaLigada = true;

// 2. Criamos a ação de clique no botão
botaoEnergia.onclick = function() {
  
  if (placaLigada == true) {
    // Se estava ligada, vamos desligar
    document.body.classList.add("modo-desligado");
    ledEnergia.classList.remove("verde-aceso");
    ledEnergia.classList.add("vermelho-apagado");
    
    textoEnergia.innerText = "SISTEMA EM STANDBY (0V)";
    botaoEnergia.innerText = "Ligar Placa";
    placaLigada = false;
    
  } else {
    // Se estava desligada, vamos ligar de novo
    document.body.classList.remove("modo-desligado");
    ledEnergia.classList.remove("vermelho-apagado");
    ledEnergia.classList.add("verde-aceso");
    
    textoEnergia.innerText = "SISTEMA ONLINE (5V)";
    botaoEnergia.innerText = "Desligar Placa";
    placaLigada = true;
  }
  
};
