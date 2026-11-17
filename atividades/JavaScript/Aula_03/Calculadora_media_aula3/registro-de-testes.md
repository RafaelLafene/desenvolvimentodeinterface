# Registro de testes — Calculadora de Média

Os testes foram executados em Node.js, simulando o preenchimento dos campos e o clique no botão **Calcular**. Um traço (—) indica um campo deixado vazio.

| Nº | Caso | Nome | Nota 1 | Nota 2 | Nota 3 | Resultado esperado | Resultado obtido |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Campos vazios | — | — | — | — | Preencha todos os campos. | Preencha todos os campos. |
| 2 | Nota fora do intervalo | Lucas | 8 | 11 | 9 | Use notas entre 0 e 10. | Use notas entre 0 e 10. |
| 3 | Média exatamente 5 | Julia | 4 | 5 | 6 | Julia: média 5.0. Situação: Recuperação. | Julia: média 5.0. Situação: Recuperação. |
| 4 | Média exatamente 7 | Pedro | 6 | 7 | 8 | Pedro: média 7.0. Situação: Aprovado. | Pedro: média 7.0. Situação: Aprovado. |
| 5 | Média abaixo de 5 | Mariana | 0 | 2.5 | 4 | Mariana: média 2.2. Situação: Reprovado. | Mariana: média 2.2. Situação: Reprovado. |

**Resultado final:** os cinco testes passaram.
