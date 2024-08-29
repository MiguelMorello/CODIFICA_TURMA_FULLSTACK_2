// Exercicio 1
function verificarParidade(numero) {
  if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
  } else {
    console.log(`O número ${numero} é ímpar.`);
  }
}

// Exercicio 2
function classificarIdade(idade) {
  if (idade < 12) {
    console.log(`A pessoa com ${idade} anos é uma criança.`);
  } else if (idade >= 12 && idade < 60) {
    console.log(`A pessoa com ${idade} anos é um adulto.`);
  } else {
    console.log(`A pessoa com ${idade} anos é um idoso.`);
  }
}

// Exercicio 3
function classificarNota(nota) {
  if (nota >= 7) {
    console.log(`O aluno foi aprovado com nota ${nota}!`);
  } else if (nota >= 4 && nota < 7) {
    console.log(`O aluno está em recuperação com nota ${nota}.`);
  } else {
    console.log(`O aluno foi reprovado com nota ${nota}.`);
  }
}

// Exercicio 4
function exibirMenu() {
  console.log("Selecione uma opção:");
  console.log("1. Opção 1");
  console.log("2. Opção 2");
  console.log("3. Sair");
}

function processarEscolha(escolha) {
  switch (escolha) {
    case "1":
      console.log("Você escolheu a Opção 1!");
      break;
    case "2":
      console.log("Você escolheu a Opção 2!");
      break;
    case "3":
      console.log("Você escolheu sair. Até logo!");
      return;
    default:
      console.log("Opção inválida. Tente novamente!");
  }
}

while (true) {
  exibirMenu();
  const escolha = prompt("Digite a sua escolha: ");
  processarEscolha(escolha);
  if (escolha === "3") {
    break;
  }
}

// Exercicio 5
function calcularIMC(peso, altura) {
  const imc = peso / (altura ** 2);

  if (imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.`);
  } else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está no peso normal.`);
  } else if (imc >= 25 && imc < 30) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está acima do peso.`);
  } else {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está obeso.`);
  }
}

// Exercicio 6
function verificarTriangulo(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      console.log("O triângulo é equilátero.");
    } else if (a === b || b === c || a === c) {
      console.log("O triângulo é isósceles.");
    } else {
      console.log("O triângulo é escaleno.");
    }
  } else {
    console.log("Os lados não formam um triângulo.");
  }
}

const ladoA = parseFloat(prompt("Digite o lado A: "));
const ladoB = parseFloat(prompt("Digite o lado B: "));
const ladoC = parseFloat(prompt("Digite o lado C: "));

verificarTriangulo(ladoA, ladoB, ladoC);

// Exercicio 7
function calcularValorCompra(numMaças) {
  let valorUnitario;
  if (numMaças < 12) {
    valorUnitario = 0.30;
  } else {
    valorUnitario = 0.25;
  }
  const valorTotal = numMaças * valorUnitario;
  console.log(`O valor da compra é R$ ${valorTotal.toFixed(2)}`);
}

const numMaças = parseInt(prompt("Digite o número de maçãs: "));

calcularValorCompra(numMaças);
// Exercicio 8
function ordenarValores(a, b) {
  if (a === b) {
    console.log("Os valores são iguais.");
  } else {
    let menor, maior;
    if (a < b) {
      menor = a;
      maior = b;
    } else {
      menor = b;
      maior = a;
    }
    console.log(`Os valores em ordem crescente são: ${menor} e ${maior}`);
  }
}

const valorA = parseFloat(prompt("Digite o valor A: "));
const valorB = parseFloat(prompt("Digite o valor B: "));

ordenarValores(valorA, valorB);

// Exercicio 9
// Exercicio 10
// Exercicio 11
// Exercicio 12
// Exercicio 13
// Exercicio 14
// Exercicio 15
