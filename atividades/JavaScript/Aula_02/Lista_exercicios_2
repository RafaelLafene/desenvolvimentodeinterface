"use strict";
// CEUB — JavaScript Aula 2: dois laboratórios e seis exercícios em um único JS.
// Exercícios 1, 2 e 3: resultados no console (F12).

// EXERCÍCIO 1 — Par ou ímpar
for (const numero of [8, 11]) {
  if (numero % 2 === 0) {
    console.log(`Exercício 1: ${numero} é par.`);
  } else {
    console.log(`Exercício 1: ${numero} é ímpar.`);
  }
}

// EXERCÍCIO 2 — Desconto de 10% a partir de R$ 200
for (const valorCompra of [199, 200]) {
  let valorFinal = valorCompra;
  if (valorCompra >= 200) {
    valorFinal = valorCompra * 0.9;
  }
  console.log(`Exercício 2: Compra R$ ${valorCompra.toFixed(2)}; total R$ ${valorFinal.toFixed(2)}.`);
}

// EXERCÍCIO 3 — Acesso com maioridade E cadastro ativo
const casosDeAcesso = [
  { idade: 18, cadastroAtivo: true },
  { idade: 17, cadastroAtivo: true },
  { idade: 25, cadastroAtivo: false },
  { idade: 17, cadastroAtivo: false }
];
for (const pessoa of casosDeAcesso) {
  if (pessoa.idade >= 18 && pessoa.cadastroAtivo) {
    console.log(`Exercício 3: ${pessoa.idade} anos, cadastro ativo: Acesso permitido.`);
  } else {
    console.log(`Exercício 3: ${pessoa.idade} anos, cadastro ${pessoa.cadastroAtivo ? "ativo" : "inativo"}: Acesso negado.`);
  }
}

// EXERCÍCIO 4 — Saudação no DOM
const campoNome = document.getElementById("nome");
const saidaSaudacao = document.getElementById("resultado-saudacao");
document.getElementById("saudar").addEventListener("click", function () {
  const nome = campoNome.value.trim();
  // Evita saudação vazia.
  if (nome === "") {
    saidaSaudacao.textContent = "Por favor, preencha seu nome.";
    return;
  }
  saidaSaudacao.textContent = `Olá, ${nome}!`;
});

// EXERCÍCIO 5 — Classificação de temperatura
const campoTemperatura = document.getElementById("temperatura");
const saidaTemperatura = document.getElementById("resultado-temperatura");
document.getElementById("classificar").addEventListener("click", function () {
  const texto = campoTemperatura.value.trim();
  // Number("") seria zero; por isso validamos antes.
  if (texto === "") {
    saidaTemperatura.textContent = "Informe a temperatura.";
    return;
  }
  const temperatura = Number(texto);
  if (!Number.isFinite(temperatura)) {
    saidaTemperatura.textContent = "Temperatura inválida.";
  } else if (temperatura < 18) {
    saidaTemperatura.textContent = "Frio";
  } else if (temperatura < 28) {
    saidaTemperatura.textContent = "Agradável";
  } else {
    saidaTemperatura.textContent = "Quente";
  }
});

// LABORATÓRIO 1 — Verificador de idade com desafio extra
const campoIdade = document.getElementById("idade");
const saidaIdade = document.getElementById("resultado-idade");
document.getElementById("verificar").addEventListener("click", function () {
  const texto = campoIdade.value.trim();
  if (texto === "") {
    saidaIdade.textContent = "Informe a idade.";
    return;
  }
  const idade = Number(texto);
  // Apenas inteiros de 0 a 120 são aceitos.
  if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
    saidaIdade.textContent = "Idade inválida.";
    return;
  }
  if (idade >= 18) {
    saidaIdade.textContent = "Maior de idade.";
  } else {
    const faltam = 18 - idade;
    saidaIdade.textContent = `Menor de idade. ${faltam === 1 ? "Falta 1 ano" : `Faltam ${faltam} anos`} para completar 18.`;
  }
});

// LABORATÓRIO 2 + EXERCÍCIO 6 — Calculadora de média e validação individual
const saidaMedia = document.getElementById("resultado-media");
document.getElementById("calcular").addEventListener("click", function () {
  const textos = [
    document.getElementById("n1").value.trim(),
    document.getElementById("n2").value.trim(),
    document.getElementById("n3").value.trim()
  ];
  // Exercicio 6: identifica exatamente qual nota está vazia ou inválida.
  for (let i = 0; i < textos.length; i++) {
    if (textos[i] === "") {
      saidaMedia.textContent = `Erro: campo vazio (Nota ${i + 1}).`;
      return;
    }
  }
  const notas = textos.map(Number);
  for (let i = 0; i < notas.length; i++) {
    if (!Number.isFinite(notas[i]) || notas[i] < 0 || notas[i] > 10) {
      saidaMedia.textContent = `Erro: nota fora da faixa (Nota ${i + 1}).`;
      return;
    }
  }
  const media = (notas[0] + notas[1] + notas[2]) / 3;
  if (media >= 6) {
    saidaMedia.textContent = `Média ${media.toFixed(2)} — Aprovado`;
  } else {
    saidaMedia.textContent = `Média ${media.toFixed(2)} — Recuperação`;
  }
});
