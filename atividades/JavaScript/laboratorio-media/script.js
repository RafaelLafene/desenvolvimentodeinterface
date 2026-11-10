const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const textos = [
    document.getElementById("n1").value.trim(),
    document.getElementById("n2").value.trim(),
    document.getElementById("n3").value.trim()
  ];

  // Verifica campos vazios antes da conversão numérica.
  for (let i = 0; i < textos.length; i++) {
    if (textos[i] === "") {
      saida.textContent = `Erro: campo vazio (Nota ${i + 1}).`;
      return;
    }
  }

  const notas = textos.map(Number);
  // Verifica individualmente se cada nota é finita e pertence ao intervalo 0–10.
  for (let i = 0; i < notas.length; i++) {
    if (!Number.isFinite(notas[i]) || notas[i] < 0 || notas[i] > 10) {
      saida.textContent = `Erro: nota fora da faixa (Nota ${i + 1}).`;
      return;
    }
  }

  const media = (notas[0] + notas[1] + notas[2]) / 3;
  const situacao = media >= 6 ? "Aprovado" : "Recuperação";
  saida.textContent = `Média ${media.toFixed(2)} — ${situacao}`;
});
