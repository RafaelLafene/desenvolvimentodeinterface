// Exercício 2 — Compras de R$ 199 e R$ 200.
for (const compra of [199, 200]) {
  let total = compra;
  if (compra >= 200) {
    total = compra * 0.90;
  }
  console.log(`Compra: R$ ${compra.toFixed(2)} | Total: R$ ${total.toFixed(2)}`);
}
