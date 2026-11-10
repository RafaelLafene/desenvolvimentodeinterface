// Exercício 3 — Apenas maior de idade com cadastro ativo tem acesso.
const casos = [
  { idade: 18, cadastroAtivo: true },
  { idade: 17, cadastroAtivo: true },
  { idade: 25, cadastroAtivo: false },
  { idade: 17, cadastroAtivo: false }
];
for (const pessoa of casos) {
  if (pessoa.idade >= 18 && pessoa.cadastroAtivo) {
    console.log(`Idade ${pessoa.idade}, cadastro ativo: Acesso permitido.`);
  } else {
    console.log(`Idade ${pessoa.idade}, cadastro ${pessoa.cadastroAtivo ? "ativo" : "inativo"}: Acesso negado.`);
  }
}
