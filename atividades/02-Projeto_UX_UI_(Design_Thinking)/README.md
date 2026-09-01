# Etapa 4 — Ideação
## Guia Prático para a Aula de UX/UI

**Integrantes:** Thiago dos Santos, Rafael Lafene, Nathan, Camille  
**Projeto:** Aplicativo de Recarga de Transporte Público Local / Passe Estudantil  

---

## Objetivo da Etapa 4

Transformar o problema identificado, a persona e a jornada do usuário em alternativas de solução, compará-las e selecionar a proposta mais adequada para seguir para a etapa de Wireframe.

---

## 1. Retomada do Problema

| Questão | Resposta do grupo |
|---|---|
| **Qual problema queremos resolver?** | O aplicativo aprova o pagamento via Pix, mas não deixa claro o status real do saldo nem a necessidade de validação presencial prévia, gerando uma falsa sensação de conclusão e travando o usuário na catraca. |
| **Quem é o usuário?** | Camila Rocha (22 anos), estudante de graduação e estagiária. |
| **Qual é a principal necessidade desse usuário?** | Recarregar o cartão de forma rápida antes de embarcar e ter a certeza absoluta de que o saldo estará disponível ao passar na catraca. |
| **Qual é a principal dor identificada na jornada?** | Receber a mensagem de "Sucesso" no Pix, assumir que o cartão já está recarregado e ter o cartão recusado na catraca por falta de sincronização/validação. |
| **Em qual momento essa dor acontece?** | No momento do embarque e validação do cartão na catraca do ônibus. |
| **O que deveria melhorar na experiência?** | A transparência do status do saldo, a clareza sobre a necessidade de validação presencial e o direcionamento claro para resolver a pendência antes de embarcar. |

---

## 2. Pergunta de Ideação

> **Como poderíamos garantir que a usuária saiba o status exato do seu saldo e como ativá-lo antes do embarque, evitando constrangimentos na catraca?**

---

## 3. Brainstorming e Organização de Ideias

Realizamos a tempestade de ideias agrupando sugestões nas seguintes categorias principais:
*   **Acessibilidade e Transparência:** Indicadores visuais de status e alertas claros.
*   **Tecnologia de Campo:** Validação direta via hardware do smartphone.
*   **Recursos Emergenciais:** Alternativas digitais para liberação instantânea de acesso.

---

## 4. Técnica Crazy 8s

Durante o exercício rápido de ideação, exploramos opções como:
1. Indicador visual tipo "rastreio de encomenda" para a recarga.
2. Leitura NFC no próprio celular para gravar o saldo no cartão físico.
3. Mapa com validadores físicos e pontos de carregamento online mais próximos.
4. Notificação push no momento do pagamento avisando sobre a necessidade de validação.
5. Ticket digital temporário via QR Code para uso em emergências.
6. Alerta de "Ônibus Offline" informando se a linha atual sincroniza o saldo na hora.
7. Botão de "Validar Agora" usando Bluetooth/NFC.
8. Histórico com diferenciação clara entre *Saldo Pago* e *Saldo Disponível na Catraca*.

---

## 5. Matriz de Comparação das Ideias

Escala de avaliação: **1 (Muito baixo)** a **5 (Muito alto)**.

| Critério | Ideia 1 (Validação NFC) | Ideia 2 (Status & Alertas) | Ideia 3 (Passe QR Code) |
|---|:---:|:---:|:---:|
| Resolve o problema identificado | 5 | 5 | 4 |
| Atende às necessidades da persona | 4 | 5 | 4 |
| Melhora a Jornada do Usuário | 5 | 5 | 4 |
| Facilidade de uso | 3 | 5 | 4 |
| Viabilidade de implementação | 2 | 5 | 2 |
| Potencial de inovação | 5 | 4 | 4 |
| Valor gerado para o usuário | 5 | 5 | 4 |
| **TOTAL** | **29** | **34** | **26** |

---

## 6. Solução Escolhida

*   **Solução Escolhida:** **Ideia 2 — Status Transparente & Guia de Validação**
![Imagem Objetiva do Projeto](https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2024/07/05112911/onibus.jpeg)

---

## 7. Justificativa da Escolha

1. **Alinhamento com o Problema e Persona:** A dor principal não é apenas a demora técnica de sincronização, mas o fato de o app informar *"Pagamento Concluído"* sem avisar sobre a pendência do saldo na catraca. A Ideia 2 atua com transparência, eliminando a falsa expectativa da usuária.
2. **Alta Viabilidade:** Não depende da troca de catracas da frota pública (como a Ideia 3) nem restringe usuários cujos aparelhos não possuem NFC (como a Ideia 1). A solução é 100% aplicável no escopo de software/interface.
3. **Melhoria da Usabilidade e Prevenção de Erros:** Ao introduzir a linha do tempo de status, mapa de validadores próximos e notificações preventivas, a solução impede que o usuário seja pego de surpresa na catraca, garantindo previsibilidade e valor real à experiência.
