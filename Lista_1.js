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
for (let i = 10; i >= 1; i--) {
  console.log(`Contagem regressiva: ${i}`);
}
console.log("Fim da contagem!");
// Exercicio 10
const numero = parseInt(prompt("Digite um número inteiro: "));

for (let i = 0; i < 10; i++) {
  console.log(`O número é: ${numero}`);
}
// Exercicio 11
let soma = 0;

for (let i = 0; i < 5; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  soma += numero;
}
console.log(`A soma total é: ${soma}`);
// Exercicio 12

const numero = parseInt(prompt("Digite um número entre 1 e 10: "));

if (numero < 1 || numero > 10) {
  console.log("Número inválido. Por favor, digite um número entre 1 e 10.");
} else {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
// Exercicio 13
let soma = 0;
let quantidade = 0;

while (true) {
  const numero = parseFloat(prompt("Digite um número (ou 0 para calcular a média): "));
  if (numero === 0) {
    break; 
  }
  soma += numero;
  quantidade++;
}

if (quantidade === 0) {
  console.log("Você não digitou nenhum número.");
} else {
    const media = soma / quantidade;
    console.log(`A média é: ${media.toFixed(2)}`);
}
// Exercicio 14
// Ler o número do usuário
const numero = parseInt(prompt("Digite um número: "));

if (numero < 0) {
  console.log("Número inválido. O fatorial não é definido para números negativos.");
} else {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log(`O fatorial de ${numero} é: ${fatorial}`);
}
// Exercicio 15
let anterior = 0;
let atual = 1;

for (let i = 0; i < 10; i++) {
  console.log(atual);
  let proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}
