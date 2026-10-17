# pe-inventario — Inventário e partilha

Origem: procesp2.js:12 · grupo: Sucessões no processo
Itens listados: 99


## Introdução
- [intro] Inventário é descrever e avaliar o patrimônio deixado por quem morreu (o autor da herança). Partilha é dividi-lo. Não há partilha sem inventário, mas pode haver inventário sem partilha: no inventário negativo e quando há um só herdeiro (adjudicação).

## Bloco 1 · calc · Linha do tempo dos prazos
Origem: procesp2.js:15
- [b1.calculadora] Calculadora "{"kind":"inventario","hint":"Informe a data do óbito."}": a regra está em engine.js (CALC)
- [b1.kind] inventario
- [b1.hint] Informe a data do óbito.

## Bloco 2 · wizard · Cartório ou juiz?
Origem: procesp2.js:16
- [b2.tree.q] Há testamento?
- [b2.tree.a[1][1]] Sim
- [b2.tree.a[1][2].q] O juiz da ação de abertura e cumprimento do testamento autorizou expressamente o inventário extrajudicial, por sentença transitada em julgado?
- [b2.tree.a[1][2].a[1][1]] Sim
- [b2.tree.a[1][2].a[1][2].q] Todos os herdeiros são capazes e estão de acordo?
- [b2.tree.a[1][2].a[1][2].a[1][1]] Sim
- [b2.tree.a[1][2].a[1][2].a[1][2].end] Extrajudicial possível
- [b2.tree.a[1][2].a[1][2].a[1][2].txt] A Res. CNJ 35/2007 (art. 12-B, incluído pela Res. 571/2024) admite escritura se todos tiverem advogado, forem capazes e concordes e houver essa autorização. Se o testamento reconhecer filho ou trouxer outra declaração irrevogável, o inventário é judicial. Com herdeiro incapaz, valem também as exigências do art. 12-A.
- [b2.tree.a[1][2].a[1][2].a[2][1]] Não
- [b2.tree.a[1][2].a[1][2].a[2][2].end] Judicial
- [b2.tree.a[1][2].a[1][2].a[2][2].txt] CPC, art. 610.
- [b2.tree.a[1][2].a[2][1]] Não
- [b2.tree.a[1][2].a[2][2].end] Judicial
- [b2.tree.a[1][2].a[2][2].txt] Primeiro, ação de abertura, registro e cumprimento do testamento (arts. 735 a 737). Sem a autorização expressa do juízo, por sentença transitada em julgado, não há escritura.
- [b2.tree.a[2][1]] Não
- [b2.tree.a[2][2].q] Há herdeiro incapaz?
- [b2.tree.a[2][2].a[1][1]] Não
- [b2.tree.a[2][2].a[1][2].q] Todos concordam com a partilha?
- [b2.tree.a[2][2].a[1][2].a[1][1]] Sim
- [b2.tree.a[2][2].a[1][2].a[1][2].end] Escritura pública
- [b2.tree.a[2][2].a[1][2].a[1][2].txt] Com advogado ou defensor de todos (art. 610, §§1º e 2º). A escritura serve para registro e para levantar valores em bancos. O tabelião é de livre escolha.
- [b2.tree.a[2][2].a[1][2].a[2][1]] Não
- [b2.tree.a[2][2].a[1][2].a[2][2].end] Judicial
- [b2.tree.a[2][2].a[1][2].a[2][2].txt] Sem consenso não há escritura.
- [b2.tree.a[2][2].a[2][1]] Sim
- [b2.tree.a[2][2].a[2][2].q] O quinhão do incapaz será pago em parte ideal em cada um dos bens, sem cessão, doação ou compensação?
- [b2.tree.a[2][2].a[2][2].a[1][1]] Sim
- [b2.tree.a[2][2].a[2][2].a[1][2].end] Em regra judicial, com exceções
- [b2.tree.a[2][2].a[2][2].a[1][2].txt] O art. 610 manda o inventário judicial, mas a Res. CNJ 35/2007 (art. 12-A, incluído pela Res. 571/2024) admite escritura nesse cenário, sem atos de disposição e com manifestação favorável do Ministério Público. Se o MP ou um terceiro impugnar, o caso vai ao juiz.
- [b2.tree.a[2][2].a[2][2].a[2][1]] Não
- [b2.tree.a[2][2].a[2][2].a[2][2].end] Judicial
- [b2.tree.a[2][2].a[2][2].a[2][2].txt] Qualquer disposição que possa prejudicar o incapaz exige o juiz.

## Bloco 3 · table · Ordem para nomear inventariante (art. 617)
Origem: procesp2.js:17
- [b3.head[1]] Ordem
- [b3.head[2]] Quem
- [b3.rows[1][1]] I
- [b3.rows[1][2]] Cônjuge ou companheiro sobrevivente que convivia com o falecido ao tempo da morte
- [b3.rows[2][1]] II
- [b3.rows[2][2]] Herdeiro na posse e administração do espólio
- [b3.rows[3][1]] III
- [b3.rows[3][2]] Qualquer herdeiro
- [b3.rows[4][1]] IV
- [b3.rows[4][2]] Herdeiro menor, por seu representante
- [b3.rows[5][1]] V
- [b3.rows[5][2]] Testamenteiro, se lhe coube a administração ou toda a herança está em legados
- [b3.rows[6][1]] VI
- [b3.rows[6][2]] Cessionário do herdeiro ou legatário
- [b3.rows[7][1]] VII
- [b3.rows[7][2]] Inventariante judicial
- [b3.rows[8][1]] VIII
- [b3.rows[8][2]] Pessoa estranha idônea

## Bloco 4 · steps · O procedimento judicial
Origem: procesp2.js:18
- [b4.items[1][1]] Requerimento
- [b4.items[1][2]] Por quem está na posse e administração do espólio, com a certidão de óbito; outros interessados também podem.
- [b4.items[1][3]] arts. 615 e 616
- [b4.items[2][1]] Compromisso
- [b4.items[2][2]] O inventariante nomeado presta compromisso em 5 dias.
- [b4.items[2][3]] art. 617, parágrafo único
- [b4.items[3][1]] Primeiras declarações
- [b4.items[3][2]] Em 20 dias do compromisso: herdeiros, bens, dívidas.
- [b4.items[3][3]] art. 620
- [b4.items[4][1]] Citações e impugnações
- [b4.items[4][2]] Herdeiros, cônjuge, legatários, Fazenda e MP se houver incapaz; impugnações em 15 dias.
- [b4.items[4][3]] arts. 626 e 627
- [b4.items[5][1]] Avaliação, colação e imposto
- [b4.items[5][2]] Avalia-se, trazem-se à colação as doações e calcula-se o ITCMD.
- [b4.items[5][3]] arts. 630 a 641
- [b4.items[6][1]] Credores
- [b4.items[6][2]] Antes da partilha, pedem pagamento de dívidas vencidas e exigíveis.
- [b4.items[6][3]] art. 642
- [b4.items[7][1]] Sentença de partilha
- [b4.items[7][2]] Pago o ITCMD e juntada certidão negativa da Fazenda (ou dívida garantida).
- [b4.items[7][3]] art. 654
- [b4.items[8][1]] Formal de partilha
- [b4.items[8][2]] Após o trânsito; pode ser substituído por certidão se o quinhão não passar de 5 salários mínimos.
- [b4.items[8][3]] art. 655

## Bloco 5 · flips · Pontos de prova
Origem: procesp2.js:19
- [b5.items[1][1]] Cognição limitada
- [b5.items[1][2]] O juiz decide o que está provado por documento; o que exige outras provas, como união estável com testemunhas, vai às vias ordinárias (art. 612).
- [b5.items[2][1]] Atos com autorização
- [b5.items[2][2]] Alienar bens, transigir, pagar dívidas e fazer despesas de conservação exigem ouvir os interessados e autorização do juiz (art. 619).
- [b5.items[3][1]] Remoção
- [b5.items[3][2]] De ofício ou a requerimento, se não prestar declarações, atrasar, deixar bens se deteriorarem, não defender o espólio, não prestar contas ou sonegar bens (art. 622).
- [b5.items[4][1]] Competência
- [b5.items[4][2]] Domicílio do autor da herança no Brasil, ainda que morto no exterior, também para ações contra o espólio (art. 48).
- [b5.items[5][1]] Inventário conjunto
- [b5.items[5][2]] Mesmas pessoas, heranças dos dois cônjuges ou dependência entre partilhas: um só processo (art. 672).
- [b5.items[6][1]] Anulação
- [b5.items[6][2]] Partilha amigável homologada é anulável em 1 ano por dolo, coação, erro ou incapaz (art. 657); a judicial é rescindível (art. 658).

## Bloco 6 · juris · Súmula
Origem: procesp.js:54
- [b6.items[1].court] STF
- [b6.items[1].year] Súm. 542
- [b6.items[1].id] Súmula 542 do STF
- [b6.items[1].tese] Não é inconstitucional a multa estadual pelo atraso no início ou na conclusão do inventário.
- [b6.items[1].html] Em SC, a multa sobre o ITCMD é de 20%.

## Teste do módulo
- [quiz1] Prazo para instaurar o inventário: → resposta dada como certa: "2 meses" (alternativas: 30 dias | 2 meses | 12 meses) — explicação: CPC, art. 611 prevalece sobre o CC, art. 1.796.
- [quiz2] Cônjuge separado de fato tem preferência para ser inventariante? → resposta dada como certa: "Não" (alternativas: Sim | Não) — explicação: Exige convivência ao tempo da morte (art. 617, I).
- [quiz3] União estável que depende de testemunhas se decide no inventário? → resposta dada como certa: "Não, vias ordinárias" (alternativas: Sim | Não, vias ordinárias) — explicação: art. 612.
- [quiz4] O inventariante pode vender bem do espólio sozinho? → resposta dada como certa: "Não" (alternativas: Sim | Não) — explicação: art. 619.
