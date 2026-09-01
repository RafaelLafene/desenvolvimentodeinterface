# Etapa 4 — Ideação
## Guia Prático para a Aula de UX/UI

**Disciplina:** Desenvolvimento de Interfaces
**Integrantes:** Thiago dos Santos, Rafael Lafene, Nathan, Camille  
**Projeto:** Aplicativo de Recarga de Transporte Público Local / Passe Estudantil  

---

## Objetivo da Etapa 4

Transformar o problema identificado, a persona e a jornada do usuário em alternativas de solução, compará-las e selecionar a proposta mais adequada para seguir para a Etapa 5 — Wireframe.

> **Entregável 4 do projeto:** Apresentação de **3 ideias de solução** estruturadas e a **justificativa da solução escolhida**.

![Imagem Objetiva do Projeto](https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2024/07/05112911/onibus.jpeg)

---

## 1. Retomada do Problema

| Questão | Resposta do grupo |
|---|---|
| **Qual problema queremos resolver?** | Passageiros de transporte público enfrentam constrangimento e risco de perdas de viagem porque o aplicativo aprova a transação financeira (via Pix), mas não deixa claro o status real do saldo nem a necessidade de validação presencial prévia, gerando uma falsa sensação de conclusão e travando o usuário na catraca. |
| **Quem é o usuário?** | Camila Rocha (22 anos), estudante universitária e estagiária que utiliza transporte público diariamente e depende do Pix para recargas rápidas no ponto de ônibus. |
| **Qual é a principal necessidade desse usuário?** | Ter clareza absoluta e em tempo real sobre o status do seu saldo, sabendo exatamente quando o valor estará disponível para uso na catraca ou como liberá-lo antes de embarcar. |
| **Qual é a principal dor identificada na jornada?** | O constrangimento público e a perda de compromissos ao ter o cartão recusado na catraca (mensagem de *"Saldo Insuficiente"*), logo após receber a confirmação de *"Pagamento Aprovado"* no aplicativo. |
| **Em qual momento essa dor acontece?** | No momento do embarque, ao aproximar o cartão físico de transporte do validador da catraca do ônibus. |
| **O que deveria melhorar na experiência?** | A transparência na comunicação do status do pagamento (diferenciando *"Saldo Pago"* de *"Saldo Ativo na Catraca"*) e o direcionamento preventivo ao usuário antes que ele tente passar a catraca sem o saldo validado. |

---

## 2. Pergunta de Ideação

> **Como poderíamos garantir que a usuária saiba o status exato do seu saldo e como ativá-lo antes do embarque, evitando constrangimentos na catraca?**

---

## 3. Brainstorming — Geração de Possibilidades

Durante a sessão de tempestade de ideias, o grupo explorou livremente alternativas sem pré-julgamento técnico. Agrupamos as propostas nas seguintes categorias:

*   **Acessibilidade e Transparência de Dados:** Notificações de progresso e rastreio de recarga em etapas.
*   **Modo Pré-Embarque e Prevenção de Erros:** Indicadores visuais rápidos e checagens preventivas antes do embarque.
*   **Contingência e Tecnologia Alternativa:** Formas de acesso instantâneo via hardware do celular (QR Code ou NFC).

---

## 4. Técnica Crazy 8s

Utilizando o exercício de ideação rápida (Crazy 8s), os integrantes geraram rascunhos para as seguintes possibilidades:

1. Linha do tempo estilo *"Rastreio de encomenda"* indicando o status do saldo.
2. Indicador visual simples tipo semáforo (Verde = Pronto / Amarelo = Pendente de validação).
3. Notificação automática ao se aproximar de um ponto de ônibus avisando o status do cartão.
4. Leitura e gravação de créditos no cartão físico encostando o celular via NFC.
5. Emissão de QR Code temporário para embarque caso a validação do cartão físico atrase.
6. Alerta indicando se a linha de ônibus escolhida possui sincronização online rápida ou offline.
7. Mapa interativo com localização dos validadores físicos/terminais de carga mais próximos.
8. Extrato diferenciando visualmente *"Saldo Pago no Pix"* de *"Saldo Liberado na Catraca"*.

---

## 5. Seleção e Desenvolvimento das 3 Propostas

### Ideia 1: Recarga Inteligente Acompanhada

*   **Nome da solução:** Recarga Inteligente Acompanhada  
*   **Descrição:** Criar uma funcionalidade com linha do tempo interativa que permita ao usuário acompanhar em tempo real todas as etapas do ciclo da sua recarga, desde a aprovação financeira até a efetiva disponibilização no cartão.  
*   **Como funciona?** Após realizar o pagamento via Pix, o aplicativo apresenta visualmente o progresso em etapas: *"1. Pagamento aprovado"*, *"2. Sincronizando com a frota"* e *"3. Saldo disponível na catraca"*. Se a linha do usuário exigir validação presencial ou se o ônibus estiver offline, o app emite um alerta informativo com instruções claras antes do embarque.  
*   **Qual dor da jornada resolve?** Elimina a falsa sensação de conclusão e a falta de clareza após o Pix, evitando que o usuário presuma que o cartão já está recarregado quando o saldo ainda depende de sincronização ou validação.  
*   **Benefício para o usuário:** Oferece transparência e previsibilidade, reduzindo o risco de constrangimentos e garantindo que o passageiro só tente embarcar quando tiver certeza do status do saldo.  
*   **Principais funcionalidades:**  
    *   Linha do tempo visual do status da recarga (Timeline de Rastreio);  
    *   Confirmação em duas etapas (*Pagamento Financeiro* vs. *Saldo no Cartão*);  
    *   Alerta visual de necessidade de validação presencial;  
    *   Notificação push quando o saldo estiver efetivamente pronto para uso na catraca;  
    *   Histórico detalhado de recargas e validações pendentes.  
*   **Possíveis limitações:** Depende da integração da API do app com os dados telemáticos da frota de transporte público; pode haver pequenos atrasos de sincronização em linhas sem conexão 4G contínua.

---

### Ideia 2: Modo Embarque Seguro

*   **Nome da solução:** Modo Embarque Seguro  
*   **Descrição:** Uma tela/painel de checagem rápida focada no momento imediatamente anterior ao embarque, indicando em cores e status simples se o cartão de transporte está pronto para liberar a catraca.  
*   **Como funciona?** Antes de entrar no ônibus, o usuário abre o "Modo Embarque Seguro" na tela principal. O app faz uma varredura do cartão e exibe um indicador direto: **VERDE ("Pronto para embarcar")** ou **AMARELO ("Atenção: Validação Pendente")**, detalhando o saldo exato que o validador reconhecerá naquele momento.  
*   **Qual dor da jornada resolve?** Resolve a dúvida e a incerteza no ponto de ônibus, evitando que o usuário descubra que o saldo não caiu apenas no momento de passar a catraca frente aos outros passageiros.  
*   **Benefício para o usuário:** Garante tranquilidade e segurança no pré-embarque, permitindo tomar ações preventivas (como buscar um terminal de validação no ponto ou pagar com outra forma) antes de entrar no veículo.  
*   **Principais funcionalidades:**  
    *   Widget/Indicador visual simples de status pré-embarque ("Pronto para uso");  
    *   Consulta expressa do saldo ativo real no cartão;  
    *   Identificação e alerta de recargas presas em processamento;  
    *   Botão "Como validar agora" com localização de terminais físicos mais próximos;  
    *   Alertas preventivos de saldo baixo.  
*   **Possíveis limitações:** Não força a gravação física do saldo no cartão caso a catraca do veículo esteja sem sinal; depende de o usuário criar o hábito de checar o aplicativo antes de subir no ônibus.

---

### Ideia 3: Ticket Emergencial via QR Code

*   **Nome da solução:** Ticket Emergencial via QR Code  
*   **Descrição:** Disponibilizar uma passagem digital provisória na tela do smartphone, gerada automaticamente a partir do comprovante do Pix, para uso liberado na catraca enquanto a recarga do cartão físico estiver em processamento.  
*   **Como funciona?** Assim que o Pix é aprovado, se o sistema identificar que o cartão físico de transporte levará tempo para sincronizar, o app gera um QR Code temporário equivalente ao valor da passagem comprada. O usuário lê esse QR Code diretamente no leitor da catraca para liberar a roleta sem depender do cartão físico.  
*   **Qual dor da jornada resolve?** Resolve o travamento na catraca causado pela demora de sincronização física do cartão, garantindo que o dinheiro pago via Pix seja convertido em acesso imediato ao ônibus.  
*   **Benefício para o usuário:** Acesso instantâneo e garantido ao transporte logo após o pagamento, eliminando totalmente a dependência de validadores físicos em momentos de urgência.  
*   **Principais funcionalidades:**  
    *   Gerador dinâmico de QR Code de contingência/emergência;  
    *   Liberação imediata de passagem vinculada ao Pix aprovado;  
    *   Contador de tempo de validade do QR Code de embarque;  
    *   Saldo de emergência integrado à carteira digital do app.  
*   **Possíveis limitações:** Exige que a frota de ônibus e estações possua validadores/catracas equipados com leitores óticos de QR Code; necessita que o smartphone do usuário esteja com bateria e tela funcional no momento do embarque.

---

## 6. Comparação das Ideias

Utilizando a escala de avaliação de **1 (Muito baixo)** a **5 (Muito alto)**:

### Matriz de Decisão

| Critério | Ideia 1 (Recarga Inteligente) | Ideia 2 (Embarque Seguro) | Ideia 3 (Ticket QR Code) |
|---|:---:|:---:|:---:|
| Resolve o problema identificado | 5 | 5 | 4 |
| Atende às necessidades da persona | 4 | 5 | 4 |
| Melhora a Jornada do Usuário | 5 | 5 | 4 |
| Facilidade de uso | 4 | 5 | 4 |
| Viabilidade de implementação | 5 | 5 | 2 |
| Potencial de inovação | 3 | 4 | 4 |
| Valor gerado para o usuário | 4 | 5 | 4 |
| **TOTAL** | **30** | **34** | **22** |

---

## 7. Solução Escolhida

*   **Solução Escolhida:** **Ideia 2 — Modo Embarque Seguro**

---

## 8. Justificativa da Escolha

A **Ideia 2 (Modo Embarque Seguro)** alcançou a maior pontuação (**34 pontos**) e foi selecionada por atacar diretamente o momento mais crítico da jornada de **Camila Rocha**: o pré-embarque imediato no ponto de ônibus.

1. **Prevenção de Erros de UX:** O problema central identificado na pesquisa não é apenas a limitação técnica da sincronização das catracas, mas sim a **falsa expectativa** de que a recarga já está pronta. O Modo Embarque Seguro atua preventivamente, fornecendo um diagnóstico claro do cartão (*"Pronto para embarcar"* vs *"Validação Pendente"*) antes de a usuária entrar no veículo.
2. **Viabilidade Técnica e Financeira:** Diferente da Ideia 3 (que exige a substituição ou instalação de leitores de QR Code em toda a frota de ônibus), a Ideia 2 é uma solução baseada 100% em **arquitetura de informação e design de interface (software)**, tornando sua implementação viável imediatamente.
3. **Usabilidade e Clareza para a Persona:** Para uma estudante com rotina corrida, ter um indicador simples em cores na home do aplicativo reduz a carga cognitiva, evita o constrangimento público de catraca travada e orienta alternativas preventivas em segundos.
