// Exercício 1
const carro = {
  marca: 'Ford',
  modelo: 'Mustang',
  ano: 2022,
  cor: 'Vermelho'
};

for (const propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}
// Exercício 2
const livro = {
  titulo: 'O Senhor dos Anéis',
  autor: 'J.R.R. Tolkien',
  anoPublicacao: 1954,
  genero: 'Fantasia'
};

let temEditora = false;

for (const propriedade in livro) {
  if (propriedade === 'editora') {
    temEditora = true;
  }
}

if (!temEditora) {
  livro.editora = 'Editora Brasil';
}

console.log(livro);
// Exercício 3
const produto = {
  nome: 'TV',
  preco: 2000,
  estoque: 10,
  desconto: 0.1
};

function filtrarPropriedades(objeto, valorMinimo) {
  const novoObjeto = {};

  for (const propriedade in objeto) {
    if (objeto[propriedade] > valorMinimo) {
      novoObjeto[propriedade] = objeto[propriedade];
    }
  }

  return novoObjeto;
}

console.log(filtrarPropriedades(produto, 1000));
// Exercício 4
const pessoas = [
  { nome: 'João', idade: 30, cidade: 'São Paulo' },
  { nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro' },
  { nome: 'Pedro', idade: 40, cidade: 'Belo Horizonte' }
];

for (const pessoa of pessoas) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}
// Exercício 5
const alunos = [
  { nome: 'João', nota1: 8, nota2: 9 },
  { nome: 'Maria', nota1: 7, nota2: 8 },
  { nome: 'Pedro', nota1: 9, nota2: 9 }
];

for (const aluno of alunos) {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  console.log(`Nome: ${aluno.nome}, Média: ${media}`);
}
// Exercício 6
const funcionarios = [
  { nome: 'João', cargo: 'Desenvolvedor', salario: 5000 },
  { nome: 'Maria', cargo: 'Designer', salario: 4000 },
  { nome: 'Pedro', cargo: 'Gerente', salario: 6000 }
];

const salarioMinimo = 4500;

for (const funcionario of funcionarios) {
  if (funcionario.salario > salarioMinimo) {
    console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
  }
}
// Exercício 7
const produtos = [
  { nome: 'TV', preco: 2000, desconto: 0 },
  { nome: 'Computador', preco: 1500, desconto: 0 },
  { nome: 'Telefone', preco: 1000, desconto: 0 }
];

produtos.forEach(produto => {
  produto.desconto = produto.preco * 0.1;
  produto.preco -= produto.desconto;
  console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}, Desconto: ${produto.desconto}`);
});
// Exercício 8
const filmes = [
  { titulo: 'O Senhor dos Anéis', diretor: 'Peter Jackson', anoLancamento: 2001 },
  { titulo: 'O Poderoso Chefão', diretor: 'Francis Ford Coppola', anoLancamento: 1972 },
  { titulo: 'Pulp Fiction', diretor: 'Quentin Tarantino', anoLancamento: 1994 }
];

const titulos = [];

filmes.forEach(filme => {
  titulos.push(filme.titulo);
});

console.log(titulos);
// Exercício 9
const clientes = [
  { nome: 'João', idade: 25, cidade: 'São Paulo' },
  { nome: 'Maria', idade: 35, cidade: 'Rio de Janeiro' },
  { nome: 'Pedro', idade: 40, cidade: 'Belo Horizonte' }
];

let contador = 0;

clientes.forEach(cliente => {
  if (cliente.idade > 30) {
    contador++;
  }
});

console.log(`Clientes com mais de 30 anos: ${contador}`);
// Exercício 10
const vendas = [
  { produto: 'TV', quantidade: 10, valor: 2000 },
  { produto: 'Computador', quantidade: 5, valor: 1500 },
  { produto: 'Telefone', quantidade: 20, valor: 1000 }
];

let totalVendas = 0;

vendas.forEach(venda => {
  totalVendas += venda.quantidade * venda.valor;
});

console.log(`Valor total de vendas: ${totalVendas}`);
// Exercício 11
const pedidos = [
  { cliente: 'João', produto: 'TV', quantidade: 2 },
  { cliente: 'Maria', produto: 'Computador', quantidade: 3 },
  { cliente: 'João', produto: 'Telefone', quantidade: 1 },
  { cliente: 'Maria', produto: 'TV', quantidade: 1 }
];

const quantidadePorCliente = {};

pedidos.forEach(pedido => {
  if (!quantidadePorCliente[pedido.cliente]) {
    quantidadePorCliente[pedido.cliente] = 0;
  }
  quantidadePorCliente[pedido.cliente] += pedido.quantidade;
});

console.log(quantidadePorCliente);
// Exercício 12
const estoque = [
  { produto: 'TV', quantidade: 10, minimo: 20 },
  { produto: 'Computador', quantidade: 15, minimo: 10 },
  { produto: 'Telefone', quantidade: 5, minimo: 10 }
];

estoque.forEach(produto => {
  if (produto.quantidade < produto.minimo) {
    produto.quantidade *= 2;
  }
});

console.log(estoque);
// Exercício 13
const carrinho = {
  itens: [
    { nome: 'TV', quantidade: 2, precoUnitario: 2000 },
    { nome: 'Computador', quantidade: 1, precoUnitario: 1500 },
    { nome: 'Telefone', quantidade: 3, precoUnitario: 1000 }
  ]
};

let totalCarrinho = 0;

carrinho.itens.forEach(item => {
  totalCarrinho += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: ${totalCarrinho}`);
// Exercício 14
const empresa = {
  departamentos: [
    {
      nome: 'Desenvolvimento',
      funcionarios: [
        { nome: 'João' },
        { nome: 'Maria' }
      ]
    },
    {
      nome: 'Marketing',
      funcionarios: [
        { nome: 'Pedro' },
        { nome: 'Ana' }
      ]
    }
  ]
};

for (const departamento of empresa.departamentos) {
  console.log(`Departamento: ${departamento.nome}`);
  for (const funcionario of departamento.funcionarios) {
    console.log(`Funcionário: ${funcionario.nome}`);
  }
}
// Exercício 15
const transacoes = [
  { tipo: 'entrada', valor: 1000 },
  { tipo: 'saída', valor: 500 },
  { tipo: 'entrada', valor: 2000 },
  { tipo: 'saída', valor: 1000 }
];

let saldo = 0;

transacoes.forEach(transacao => {
  if (transacao.tipo === 'entrada') {
    saldo += transacao.valor;
  } else {
    saldo -= transacao.valor;
  }
});

console.log(`Saldo final: ${saldo}`);
