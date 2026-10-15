# pe-consignacao — Consignação em pagamento

Origem: procesp.js:18 · grupo: Procedimentos especiais
Itens listados: 64


## Introdução
- [intro] Pagar é dever, mas também é direito do devedor. Se o credor cria obstáculo, o devedor deposita e se libera (CC, art. 334).

## Bloco 1 · flips · Quando cabe (CC, art. 335)
Origem: procesp.js:21
- [b1.items[1][1]] Recusa
- [b1.items[1][2]] Credor não pode ou, sem justa causa, recusa receber ou dar quitação.
- [b1.items[2][1]] Omissão
- [b1.items[2][2]] Credor não vai nem manda receber no lugar, tempo e condição devidos.
- [b1.items[3][1]] Credor inacessível
- [b1.items[3][2]] Incapaz, desconhecido, ausente, em lugar incerto ou de acesso perigoso.
- [b1.items[4][1]] Dúvida
- [b1.items[4][2]] Não se sabe a quem pagar.
- [b1.items[5][1]] Litígio
- [b1.items[5][2]] Há disputa sobre o objeto do pagamento.

## Bloco 2 · keys · Dados gerais
Origem: procesp.js:22
- [b2.items[1][1]] 539
- [b2.items[1][2]] a 549 do CPC
- [b2.items[1][3]] base processual
- [b2.items[2][1]] devedor
- [b2.items[2][2]] ou terceiro
- [b2.items[2][3]] legitimidade ativa
- [b2.items[3][1]] lugar
- [b2.items[3][2]] do pagamento
- [b2.items[3][3]] foro (art. 540); imóvel: situação

## Bloco 3 · wizard · A via extrajudicial (art. 539, §§1º a 4º)
Origem: procesp.js:23
- [b3.tree.q] A obrigação é em dinheiro?
- [b3.tree.a[1][1]] Sim
- [b3.tree.a[1][2].q] O devedor depositou em banco oficial do lugar do pagamento e cientificou o credor por carta com AR. Em 10 dias, o credor...
- [b3.tree.a[1][2].a[1][1]] Aceitou
- [b3.tree.a[1][2].a[1][2].end] Obrigação extinta
- [b3.tree.a[1][2].a[1][2].txt] O devedor fica liberado.
- [b3.tree.a[1][2].a[2][1]] Ficou em silêncio
- [b3.tree.a[1][2].a[2][2].end] Obrigação extinta
- [b3.tree.a[1][2].a[2][2].txt] O silêncio equivale à aceitação (§2º).
- [b3.tree.a[1][2].a[3][1]] Recusou por escrito ao banco
- [b3.tree.a[1][2].a[3][2].end] Ação em 1 mês
- [b3.tree.a[1][2].a[3][2].txt] O devedor propõe a consignação judicial em 1 mês, com a prova do depósito e da recusa (§3º). Se não propuser, o depósito perde efeito e pode ser levantado (§4º).
- [b3.tree.a[2][1]] Não
- [b3.tree.a[2][2].end] Só judicial
- [b3.tree.a[2][2].txt] A via bancária é exclusiva para dinheiro.

## Bloco 4 · table · O que o réu pode alegar (art. 544)
Origem: procesp.js:24
- [b4.hint] A defesa é limitada.
- [b4.head[1]] Inciso
- [b4.head[2]] Alegação
- [b4.rows[1][1]] I
- [b4.rows[1][2]] Não houve recusa ou mora em receber
- [b4.rows[2][1]] II
- [b4.rows[2][2]] A recusa foi justa
- [b4.rows[3][1]] III
- [b4.rows[3][2]] O depósito não foi feito no prazo ou no lugar do pagamento
- [b4.rows[4][1]] IV
- [b4.rows[4][2]] O depósito não é integral, indicando o montante devido

## Bloco 5 · chooser · Situações do processo
Origem: procesp.js:25
- [b5.items[1][1]] Depósito
- [b5.items[1][2]] 5 dias
- [b5.items[1][3]] Deferido o pedido, o autor deposita em 5 dias, sob pena de extinção sem mérito (art. 542). Prestações sucessivas podem ser depositadas no mesmo processo até 5 dias após cada vencimento (art. 541).
- [b5.items[2][1]] Insuficiência
- [b5.items[2][2]] Complementar em 10 dias
- [b5.items[2][3]] O autor pode completar em 10 dias. O réu levanta desde logo o incontroverso e a discussão segue só quanto à diferença (art. 545).
- [b5.items[3][1]] Caráter dúplice
- [b5.items[3][2]] Autor pode sair condenado
- [b5.items[3][3]] A sentença que reconhece a insuficiência fixa o valor devido e vale como título para o réu, sem reconvenção (art. 545, §2º).
- [b5.items[4][1]] Procedência
- [b5.items[4][2]] Declara extinta a obrigação
- [b5.items[4][3]] Com condenação do réu em custas e honorários (art. 546). Faz coisa julgada material.
- [b5.items[5][1]] Dúvida sobre o credor
- [b5.items[5][2]] Os pretendentes disputam
- [b5.items[5][3]] Citam-se os possíveis titulares. Ninguém aparece: arrecadação como bens de ausentes. Um aparece: o juiz decide. Vários: declara o depósito feito e extinta a obrigação, e os pretendentes disputam entre si (art. 548).

## Teste do módulo
- [quiz1] Credor fica em silêncio após o depósito bancário. Efeito? → resposta dada como certa: "Obrigação extinta" (alternativas: Obrigação persiste | Obrigação extinta) — explicação: art. 539, §2º.
- [quiz2] Prazo para propor a ação após a recusa bancária: → resposta dada como certa: "1 mês" (alternativas: 10 dias | 1 mês | 5 dias) — explicação: art. 539, §3º.
- [quiz3] Depósito insuficiente: o autor pode complementar em: → resposta dada como certa: "10 dias" (alternativas: 5 dias | 10 dias) — explicação: art. 545.
