const campoIdade = document.getElementById("idade");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const texto = campoIdade.value.trim();

  // O campo vazio é verificado antes de Number(), pois Number("") seria 0.
  if (texto === "") {
    resultado.textContent = "Informe a idade.";
    return;
  }

  const idade = Number(texto);
  // Uma idade válida precisa ser inteira e estar entre 0 e 120.
  if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
    resultado.textContent = "Idade inválida.";
    return;
  }

  if (idade >= 18) {
    resultado.textContent = "Maior de idade.";
  } else {
    const faltam = 18 - idade;
    resultado.textContent = `Menor de idade. ${faltam === 1 ? "Falta 1 ano" : `Faltam ${faltam} anos`} para completar 18.`;
  }
});
