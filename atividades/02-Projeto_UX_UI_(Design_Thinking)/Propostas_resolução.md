## 1. Retomem o problema

**Qual problema queremos resolver?**
Passageiros de transporte público enfrentam constrangimento e risco de perdas de viagem porque o aplicativo aprova a transação financeira, mas não deixa claro o status real do saldo nem a necessidade de validação presencial prévia, gerando uma falsa sensação de conclusão e travando o usuário na catraca.

**Quem é o usuário?**
Camila Rocha, estudante universitária e estagiária que utiliza transporte público diariamente e depende do Pix para recargas rápidas no ponto de ônibus.

**Qual a principal necessidade desse usuário?**
Ter clareza absoluta e em tempo real sobre o status do seu saldo, sabendo exatamente quando o valor estará disponível para uso na catraca ou como liberá-lo antes de embarcar.

**Qual a principal dor identificada na jornada?**
O constrangimento público e a perda de compromissos ao ter o cartão recusado na catraca (mensagem de "Saldo Insuficiente"), logo após receber a confirmação de "Pagamento Aprovado" no aplicativo.

**Em qual momento essa dor acontece?**
No momento do embarque, ao aproximar o cartão físico de transporte do validador da catraca do ônibus.

**O que deveria melhorar na experiência?**
A transparência na comunicação do status do pagamento (diferenciando "Saldo Pago" de "Saldo Ativo na Catraca") e o direcionamento preventivo ao usuário antes que ele tente passar a catraca sem o saldo validado.

---

## 6. Desenvolvam as 3 propostas

### Ideia 1

**Nome da solução:** Recarga Inteligente Acompanhada  

**Descrição:**  
Criar uma funcionalidade com linha do tempo interativa que permita ao usuário acompanhar em tempo real todas as etapas do ciclo da sua recarga, desde a aprovação financeira até a efetiva disponibilização no cartão.

**Como funciona?**  
Após realizar o pagamento via Pix, o aplicativo apresenta visualmente o progresso em etapas: *"1. Pagamento aprovado"*, *"2. Sincronizando com a frota"* e *"3. Saldo disponível na catraca"*. Se a linha do usuário exigir validação presencial ou se o ônibus estiver offline, o app emite um alerta informativo com instruções claras antes do embarque.

**Qual dor da jornada resolve?**  
Elimina a falsa sensação de conclusão e a falta de clareza após o Pix, evitando que o usuário presuma que o cartão já está recarregado quando o saldo ainda depende de sincronização ou validação.

**Benefício para o usuário:**  
Oferece transparência e previsibilidade, reduzindo o risco de constrangimentos e garantindo que o passageiro só tente embarcar quando tiver certeza do status do saldo.

**Principais funcionalidades:**  
- Linha do tempo visual do status da recarga (Timeline de Rastreio);  
- Confirmação em duas etapas (*Pagamento Financeiro* vs. *Saldo no Cartão*);  
- Alerta visual de necessidade de validação presencial;  
- Notificação push quando o saldo estiver efetivamente pronto para uso na catraca;  
- Histórico detalhado de recargas e validações pendentes.

**Possíveis limitações:**  
- Depende da integração da API do app com os dados telemáticos da frota de transporte público;  
- Pode haver pequenos atrasos de sincronização em linhas de ônibus sem conexão 4G contínua.

---

### Ideia 2

**Nome da solução:** Modo Embarque Seguro  

**Descrição:**  
Uma tela/painel de checagem rápida focada no momento imediatamente anterior ao embarque, indicando em cores e status simples se o cartão de transporte está pronto para liberar a catraca.

**Como funciona?**  
Antes de entrar no ônibus, o usuário abre o "Modo Embarque Seguro" na tela principal. O app faz uma varredura do cartão e exibe um indicador direto: **VERDE ("Pronto para embarcar")** ou **AMARELO ("Atenção: Validação Pendente")**, detalhando o saldo exato que o validador reconhecerá naquele momento.

**Qual dor da jornada resolve?**  
Resolve a dúvida e a incerteza no ponto de ônibus, evitando que o usuário descubra que o saldo não caiu apenas no momento de passar a catraca frente aos outros passageiros.

**Benefício para o usuário:**  
Garante tranquilidade e segurança no pré-embarque, permitindo tomar ações preventivas (como buscar um terminal de validação no ponto ou pagar com outra forma) antes de entrar no veículo.

**Principais funcionalidades:**  
- Widget/Indicador visual simples de status pré-embarque ("Pronto para uso");  
- Consulta expressa do saldo ativo real no cartão;  
- Identificação e alerta de recargas presas em processamento;  
- Botão "Como validar agora" com localização de terminais físicos mais próximos;  
- Alertas preventivos de saldo baixo.

**Possíveis limitações:**  
- Não força a gravação física do saldo no cartão caso a catraca do veículo esteja sem sinal;  
- Depende de o usuário criar o hábito de checar o aplicativo antes de subir no ônibus.

---

### Ideia 3

**Nome da solução:** Ticket Emergencial via QR Code  

**Descrição:**  
Disponibilizar uma passagem digital provisória na tela do smartphone, gerada automaticamente a partir do comprovante do Pix, para uso liberado na catraca enquanto a recarga do cartão físico estiver em processamento.

**Como funciona?**  
Assim que o Pix é aprovado, se o sistema identificar que o cartão físico de transporte levará tempo para sincronizar, o app gera um QR Code temporário equivalente ao valor da passagem comprada. O usuário lê esse QR Code diretamente no leitor da catraca para liberar a roleta sem depender do cartão físico.

**Qual dor da jornada resolve?**  
Resolve o travamento na catraca causado pela demora de sincronização física do cartão, garantindo que o dinheiro pago via Pix seja convertido em acesso imediato ao ônibus.

**Benefício para o usuário:**  
Acesso instantâneo e garantido ao transporte logo após o pagamento, eliminando totalmente a dependência de validadores físicos em momentos de urgência.

**Principais funcionalidades:**  
- Gerador dinâmico de QR Code de contingência/emergência;  
- Liberação imediata de passagem vinculada ao Pix aprovado;  
- Contador de tempo de validade do QR Code de embarque;  
- Saldo de emergência integrado à carteira digital do app.

**Possíveis limitações:**  
- Exige que a frota de ônibus e estações possua validadores/catracas equipados com leitores óticos de QR Code;  
- Necessita que o smartphone do usuário esteja com bateria e tela funcional no momento do embarque.
