const nome = document.querySelector('#nome');
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

function classificar(media) {
  if (media >= 7) return 'Aprovado';
  if (media >= 5) return 'Recuperação';
  return 'Reprovado';
}

botao.addEventListener('click', () => {
  const estudante = nome.value.trim();
  const camposDeNota = [nota1, nota2, nota3];

  if (!estudante || camposDeNota.some(campo =>
    campo.value === '' && !campo.validity.badInput
  )) {
    resultado.textContent = 'Preencha todos os campos.';
    return;
  }

  const n1 = Number(nota1.value);
  const n2 = Number(nota2.value);
  const n3 = Number(nota3.value);
  const valores = [n1, n2, n3];

  if (camposDeNota.some(campo => campo.validity.badInput)
    || valores.some(nota => Number.isNaN(nota) || nota < 0 || nota > 10)) {
    resultado.textContent = 'Use notas entre 0 e 10.';
    return;
  }

  const media = calcularMedia(n1, n2, n3);
  const situacao = classificar(media);
  resultado.textContent =
    `${estudante}: média ${media.toFixed(1)}. Situação: ${situacao}.`;
});
