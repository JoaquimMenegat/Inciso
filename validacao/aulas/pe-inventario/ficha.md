# Ficha · pe-inventario — Inventário e partilha

Extrator · data-base 16/10/2026 · fonte única: `validacao/aulas/pe-inventario/aula.md` (99 trechos)

| ID | Endereço na aula.md | Afirmação (texto da aula) | Fonte citada pela aula | Tipo | Risco |
|---|---|---|---|---|---|
| pe-inventario-001 | [intro] | Inventário é descrever e avaliar o patrimônio deixado por quem morreu (o autor da herança). Partilha é dividi-lo. | — | conceito | baixo |
| pe-inventario-002 | [intro] | Não há partilha sem inventário, mas pode haver inventário sem partilha: no inventário negativo e quando há um só herdeiro (adjudicação). | — | lei | médio |
| pe-inventario-003 | [b1.calculadora], [b1.kind], [b1.hint] | Calculadora "Linha do tempo dos prazos" (kind `inventario`): a partir da data do óbito informada pelo usuário, calcula e exibe os prazos do inventário. A regra aplicada está em engine.js (CALC), que o Extrator não pode abrir; o conteúdo da regra deve ser conferido pelo Comparador no engine.js. | engine.js (CALC) | lei | alto |
| pe-inventario-004 | [b2.tree.q], [b2.tree.a[1][1]], [b2.tree.a[1][2].q], [b2.tree.a[1][2].a[1][1]], [b2.tree.a[1][2].a[1][2].q], [b2.tree.a[1][2].a[1][2].a[1][1]], [b2.tree.a[1][2].a[1][2].a[1][2].end], [b2.tree.a[1][2].a[1][2].a[1][2].txt] | Havendo testamento, o inventário extrajudicial é possível se o juiz da ação de abertura e cumprimento do testamento o autorizou expressamente, por sentença transitada em julgado, e todos os herdeiros tiverem advogado, forem capazes e concordes. | Res. CNJ 35/2007, art. 12-B, incluído pela Res. 571/2024 | lei | alto |
| pe-inventario-005 | [b2.tree.a[1][2].a[1][2].a[1][2].txt] | Se o testamento reconhecer filho ou trouxer outra declaração irrevogável, o inventário é judicial. | Res. CNJ 35/2007, art. 12-B (implícito no mesmo texto) | lei | alto |
| pe-inventario-006 | [b2.tree.a[1][2].a[1][2].a[1][2].txt] | Havendo testamento e herdeiro incapaz, valem também as exigências do art. 12-A. | Res. CNJ 35/2007, art. 12-A | lei | médio |
| pe-inventario-007 | [b2.tree.a[1][2].a[1][2].a[2][1]], [b2.tree.a[1][2].a[1][2].a[2][2].end], [b2.tree.a[1][2].a[1][2].a[2][2].txt] | Havendo testamento com autorização judicial, mas sem que todos os herdeiros sejam capazes e estejam de acordo, o inventário é judicial. | CPC, art. 610 | lei | médio |
| pe-inventario-008 | [b2.tree.a[1][2].a[2][1]], [b2.tree.a[1][2].a[2][2].end], [b2.tree.a[1][2].a[2][2].txt] | Havendo testamento sem a autorização expressa do juízo por sentença transitada em julgado, o inventário é judicial; primeiro corre a ação de abertura, registro e cumprimento do testamento. | CPC, arts. 735 a 737 | lei | médio |
| pe-inventario-009 | [b2.tree.a[2][1]], [b2.tree.a[2][2].q], [b2.tree.a[2][2].a[1][1]], [b2.tree.a[2][2].a[1][2].q], [b2.tree.a[2][2].a[1][2].a[1][1]], [b2.tree.a[2][2].a[1][2].a[1][2].end], [b2.tree.a[2][2].a[1][2].a[1][2].txt] | Sem testamento, sem herdeiro incapaz e com todos de acordo com a partilha, o inventário pode ser feito por escritura pública, com advogado ou defensor de todos. | CPC, art. 610, §§ 1º e 2º | lei | médio |
| pe-inventario-010 | [b2.tree.a[2][2].a[1][2].a[1][2].txt] | A escritura serve para registro e para levantar valores em bancos. | CPC, art. 610, § 1º (no mesmo texto) | lei | médio |
| pe-inventario-011 | [b2.tree.a[2][2].a[1][2].a[1][2].txt] | O tabelião é de livre escolha. | — | lei | médio |
| pe-inventario-012 | [b2.tree.a[2][2].a[1][2].a[2][1]], [b2.tree.a[2][2].a[1][2].a[2][2].end], [b2.tree.a[2][2].a[1][2].a[2][2].txt] | Sem consenso não há escritura: o inventário é judicial. | — | lei | médio |
| pe-inventario-013 | [b2.tree.a[2][2].a[2][1]], [b2.tree.a[2][2].a[2][2].q], [b2.tree.a[2][2].a[2][2].a[1][1]], [b2.tree.a[2][2].a[2][2].a[1][2].end], [b2.tree.a[2][2].a[2][2].a[1][2].txt] | Com herdeiro incapaz, o art. 610 manda o inventário judicial, mas a Res. CNJ 35/2007 admite escritura se o quinhão do incapaz for pago em parte ideal em cada um dos bens, sem cessão, doação, compensação ou outros atos de disposição, e com manifestação favorável do Ministério Público. | CPC, art. 610; Res. CNJ 35/2007, art. 12-A, incluído pela Res. 571/2024 | lei | alto |
| pe-inventario-014 | [b2.tree.a[2][2].a[2][2].a[1][2].txt] | Na escritura com herdeiro incapaz, se o MP ou um terceiro impugnar, o caso vai ao juiz. | Res. CNJ 35/2007, art. 12-A (no mesmo texto) | lei | alto |
| pe-inventario-015 | [b2.tree.a[2][2].a[2][2].a[2][1]], [b2.tree.a[2][2].a[2][2].a[2][2].end], [b2.tree.a[2][2].a[2][2].a[2][2].txt] | Com herdeiro incapaz, qualquer disposição que possa prejudicá-lo exige o juiz (inventário judicial). | — | lei | médio |
| pe-inventario-016 | [b3.rows[1][1]], [b3.rows[1][2]] | Ordem para nomear inventariante, I: cônjuge ou companheiro sobrevivente que convivia com o falecido ao tempo da morte. | CPC, art. 617 (título do bloco) | lei | médio |
| pe-inventario-017 | [b3.rows[2][1]], [b3.rows[2][2]] | Ordem, II: herdeiro na posse e administração do espólio. | CPC, art. 617 | lei | médio |
| pe-inventario-018 | [b3.rows[3][1]], [b3.rows[3][2]] | Ordem, III: qualquer herdeiro. | CPC, art. 617 | lei | médio |
| pe-inventario-019 | [b3.rows[4][1]], [b3.rows[4][2]] | Ordem, IV: herdeiro menor, por seu representante. | CPC, art. 617 | lei | médio |
| pe-inventario-020 | [b3.rows[5][1]], [b3.rows[5][2]] | Ordem, V: testamenteiro, se lhe coube a administração ou toda a herança está em legados. | CPC, art. 617 | lei | médio |
| pe-inventario-021 | [b3.rows[6][1]], [b3.rows[6][2]] | Ordem, VI: cessionário do herdeiro ou legatário. | CPC, art. 617 | lei | médio |
| pe-inventario-022 | [b3.rows[7][1]], [b3.rows[7][2]] | Ordem, VII: inventariante judicial. | CPC, art. 617 | lei | médio |
| pe-inventario-023 | [b3.rows[8][1]], [b3.rows[8][2]] | Ordem, VIII: pessoa estranha idônea. | CPC, art. 617 | lei | médio |
| pe-inventario-024 | [b4.items[1][1]], [b4.items[1][2]], [b4.items[1][3]] | O requerimento de inventário cabe a quem está na posse e administração do espólio, com a certidão de óbito. | CPC, arts. 615 e 616 | lei | médio |
| pe-inventario-025 | [b4.items[1][2]], [b4.items[1][3]] | Outros interessados também podem requerer o inventário. | CPC, arts. 615 e 616 | lei | médio |
| pe-inventario-026 | [b4.items[2][1]], [b4.items[2][2]], [b4.items[2][3]] | O inventariante nomeado presta compromisso em 5 dias. | CPC, art. 617, parágrafo único | lei | alto |
| pe-inventario-027 | [b4.items[3][1]], [b4.items[3][2]], [b4.items[3][3]] | As primeiras declarações são prestadas em 20 dias contados do compromisso. | CPC, art. 620 | lei | alto |
| pe-inventario-028 | [b4.items[3][2]], [b4.items[3][3]] | As primeiras declarações trazem herdeiros, bens e dívidas. | CPC, art. 620 | lei | médio |
| pe-inventario-029 | [b4.items[4][1]], [b4.items[4][2]], [b4.items[4][3]] | São citados herdeiros, cônjuge, legatários, Fazenda e o MP, se houver incapaz. | CPC, arts. 626 e 627 | lei | médio |
| pe-inventario-030 | [b4.items[4][2]], [b4.items[4][3]] | As impugnações às primeiras declarações são feitas em 15 dias. | CPC, arts. 626 e 627 | lei | alto |
| pe-inventario-031 | [b4.items[5][1]], [b4.items[5][2]], [b4.items[5][3]] | Na fase seguinte, avaliam-se os bens, trazem-se à colação as doações e calcula-se o ITCMD. | CPC, arts. 630 a 641 | lei | médio |
| pe-inventario-032 | [b4.items[6][1]], [b4.items[6][2]], [b4.items[6][3]] | Antes da partilha, os credores pedem o pagamento de dívidas vencidas e exigíveis. | CPC, art. 642 | lei | médio |
| pe-inventario-033 | [b4.items[7][1]], [b4.items[7][2]], [b4.items[7][3]] | A sentença de partilha vem depois de pago o ITCMD e juntada certidão negativa da Fazenda (ou garantida a dívida). | CPC, art. 654 | lei | médio |
| pe-inventario-034 | [b4.items[8][1]], [b4.items[8][2]], [b4.items[8][3]] | O formal de partilha é expedido após o trânsito em julgado. | CPC, art. 655 | lei | médio |
| pe-inventario-035 | [b4.items[8][2]], [b4.items[8][3]] | O formal de partilha pode ser substituído por certidão se o quinhão não passar de 5 salários mínimos. | CPC, art. 655 | lei | alto |
| pe-inventario-036 | [b5.items[1][1]], [b5.items[1][2]] | Cognição limitada: o juiz do inventário decide o que está provado por documento; o que exige outras provas, como união estável com testemunhas, vai às vias ordinárias. | CPC, art. 612 | lei | médio |
| pe-inventario-037 | [b5.items[2][1]], [b5.items[2][2]] | Alienar bens, transigir, pagar dívidas e fazer despesas de conservação exigem ouvir os interessados e autorização do juiz. | CPC, art. 619 | lei | médio |
| pe-inventario-038 | [b5.items[3][1]], [b5.items[3][2]] | A remoção do inventariante pode ser de ofício ou a requerimento. | CPC, art. 622 | lei | médio |
| pe-inventario-039 | [b5.items[3][2]] | Hipóteses de remoção: não prestar declarações, atrasar, deixar bens se deteriorarem, não defender o espólio, não prestar contas ou sonegar bens. | CPC, art. 622 | lei | médio |
| pe-inventario-040 | [b5.items[4][1]], [b5.items[4][2]] | Competência do inventário: domicílio do autor da herança no Brasil, ainda que tenha morrido no exterior. | CPC, art. 48 | lei | alto |
| pe-inventario-041 | [b5.items[4][2]] | O mesmo foro é competente para as ações contra o espólio. | CPC, art. 48 | lei | alto |
| pe-inventario-042 | [b5.items[5][1]], [b5.items[5][2]] | Inventário conjunto: mesmas pessoas, heranças dos dois cônjuges ou dependência entre partilhas se processam num só processo. | CPC, art. 672 | lei | médio |
| pe-inventario-043 | [b5.items[6][1]], [b5.items[6][2]] | A partilha amigável homologada é anulável em 1 ano por dolo, coação, erro ou incapaz. | CPC, art. 657 | lei | alto |
| pe-inventario-044 | [b5.items[6][2]] | A partilha judicial é rescindível. | CPC, art. 658 | lei | médio |
| pe-inventario-045 | [b6.items[1].court], [b6.items[1].year], [b6.items[1].id], [b6.items[1].tese] | Súmula 542 do STF: não é inconstitucional a multa estadual pelo atraso no início ou na conclusão do inventário. | STF, Súmula 542 | jurisprudência | alto |
| pe-inventario-046 | [b6.items[1].html] | Em SC, a multa sobre o ITCMD (pelo atraso no inventário) é de 20%. | — | lei | alto |
| pe-inventario-047 | [quiz1] | Prazo para instaurar o inventário → "2 meses" (alternativas: 30 dias, 2 meses, 12 meses). | CPC, art. 611 | lei | alto |
| pe-inventario-048 | [quiz1] | Explicação do gabarito: o CPC, art. 611, prevalece sobre o CC, art. 1.796, quanto ao prazo de abertura do inventário. | CPC, art. 611; CC, art. 1.796 | lei | alto |
| pe-inventario-049 | [quiz2] | Cônjuge separado de fato tem preferência para ser inventariante? → "Não" (exige convivência ao tempo da morte). | CPC, art. 617, I | lei | alto |
| pe-inventario-050 | [quiz3] | União estável que depende de testemunhas se decide no inventário? → "Não, vias ordinárias". | CPC, art. 612 | lei | alto |
| pe-inventario-051 | [quiz4] | O inventariante pode vender bem do espólio sozinho? → "Não". | CPC, art. 619 | lei | alto |

## Resumo

- 51 afirmações: 19 de risco alto, 31 de risco médio, 1 de risco baixo.
- Tipos: 49 `lei`, 1 `jurisprudência`, 1 `conceito`. Nenhuma `citação doutrinária`.
- Observação sobre pe-inventario-003: a aula.md só informa que a regra da calculadora está no engine.js; o Extrator está proibido de abrir arquivos .js. A regra exata aplicada (prazos, termo inicial, contagem) precisa ser extraída do engine.js pelo Comparador ou pelo Orquestrador e cotejada com a pesquisa da pergunta pe-inventario-003.

## Sem conteúdo jurídico

| Endereço | Motivo |
|---|---|
| [b3.head[1]] | Cabeçalho de tabela ("Ordem") |
| [b3.head[2]] | Cabeçalho de tabela ("Quem") |
