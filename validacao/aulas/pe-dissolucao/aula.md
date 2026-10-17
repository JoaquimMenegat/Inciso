# pe-dissolucao — Dissolução parcial de sociedade

Origem: procesp2.js:3 · grupo: Procedimentos especiais
Itens listados: 50


## Introdução
- [intro] Quando um sócio sai, morre ou é excluído, a sociedade continua com os demais. O processo resolve o vínculo daquele sócio e apura quanto lhe é devido (arts. 599 a 609).

## Bloco 1 · flips · Objeto e legitimados
Origem: procesp2.js:6
- [b1.items[1][1]] Objeto (art. 599)
- [b1.items[1][2]] Resolução da sociedade em relação ao sócio falecido, excluído, retirante ou dissidente; apuração dos haveres; ou só uma das duas. A inicial vem com o contrato social consolidado .
- [b1.items[2][1]] S.A. fechada
- [b1.items[2][2]] Cabe se acionistas com 5% ou mais do capital demonstrarem que ela não pode preencher seu fim (§2º). O STJ exige que prevaleça o vínculo pessoal entre os sócios.
- [b1.items[3][1]] Quem propõe (art. 600)
- [b1.items[3][2]] Espólio, se nem todos os sucessores entrarem; sucessores, após a partilha; a sociedade, se os sócios não admitirem os sucessores ou se a lei não permitir exclusão extrajudicial; o sócio retirante após 10 dias; o sócio excluído.
- [b1.items[4][1]] Ex-cônjuge
- [b1.items[4][2]] Pode apurar seus haveres, pagos à conta da quota do sócio, sem virar sócio (art. 600, parágrafo único).
- [b1.items[5][1]] Citação (art. 601)
- [b1.items[5][2]] Sócios e sociedade, para concordar ou contestar em 15 dias. Citados todos os sócios, a sociedade é dispensada, mas fica sujeita à coisa julgada.
- [b1.items[6][1]] Concordância unânime
- [b1.items[6][2]] Decreta-se a dissolução sem honorários e com custas rateadas pela participação no capital (art. 603). Contestada, segue o comum, mas a liquidação segue o capítulo.

## Bloco 2 · calc · Qual é a data da resolução?
Origem: procesp2.js:7
- [b2.calculadora] Calculadora "{"kind":"resolucao","hint":"art. 605. Ela é a linha de corte": a regra está em engine.js (CALC)
- [b2.kind] resolucao
- [b2.hint] art. 605. Ela é a linha de corte do que o ex-sócio recebe.

## Bloco 3 · steps · Apuração de haveres
Origem: procesp2.js:8
- [b3.items[1][1]] O juiz organiza
- [b3.items[1][2]] Fixa a data da resolução, define o critério conforme o contrato e nomeia o perito, de preferência especialista em avaliação de sociedades.
- [b3.items[1][3]] arts. 604 e 606, parágrafo único
- [b3.items[2][1]] Depósito do incontroverso
- [b3.items[2][2]] A sociedade ou os sócios depositam o que reconhecem; o ex-sócio levanta desde logo. Ex.: reconhecem R$ 330 mil de R$ 400 mil pedidos: R$ 330 mil são depositados.
- [b3.items[2][3]] art. 604, §§1º e 2º
- [b3.items[3][1]] Critério na omissão
- [b3.items[3][2]] Balanço de determinação na data da resolução, com ativo tangível e intangível e passivo a preço de saída.
- [b3.items[3][3]] art. 606
- [b3.items[4][1]] Revisão
- [b3.items[4][2]] Data e critério podem ser revistos a pedido da parte até o início da perícia.
- [b3.items[4][3]] art. 607
- [b3.items[5][1]] O que entra
- [b3.items[5][2]] Até a resolução: lucros, juros sobre capital e pró-labore. Depois: só correção e juros.
- [b3.items[5][3]] art. 608
- [b3.items[6][1]] Pagamento
- [b3.items[6][2]] Conforme o contrato; no silêncio, em dinheiro, em 90 dias.
- [b3.items[6][3]] art. 609; CC, art. 1.031, §2º

## Bloco 4 · juris · Na jurisprudência
Origem: procesp.js:42
- [b4.items[1].court] STJ
- [b4.items[1].year] 2018
- [b4.items[1].id] REsp 1.731.464/SP
- [b4.items[1].tese] Citados todos os sócios, é desnecessária a citação da sociedade.
- [b4.items[1].html] Em ação de cobrança entre sócios, o STJ aplicou por analogia o art. 601, parágrafo único: citados todos os sócios, a sociedade não precisa ser citada e fica sujeita à coisa julgada.
- [b4.items[2].court] STJ
- [b4.items[2].year] 2021
- [b4.items[2].id] AgInt no AREsp 1.861.293/RS
- [b4.items[2].tese] É possível dissolução parcial de S.A. fechada em que prepondere o vínculo pessoal entre os sócios, por quebra da affectio societatis.
- [b4.items[3].court] STJ
- [b4.items[3].year] 2015
- [b4.items[3].id] REsp 1.410.686/SP
- [b4.items[3].tese] Na dissolução parcial, o valor da causa é o capital social correspondente ao sócio afastado.

## Teste do módulo
- [quiz1] Retirada imotivada: data da resolução? → resposta dada como certa: "O 60º dia após a notificação" (alternativas: O dia da notificação | O 60º dia após a notificação) — explicação: art. 605, II.
- [quiz2] Todos os sócios concordaram. Há honorários? → resposta dada como certa: "Não" (alternativas: Sim | Não) — explicação: art. 603, §1º.
- [quiz3] Depois da data da resolução, o ex-sócio recebe lucros? → resposta dada como certa: "Não, só correção e juros" (alternativas: Sim | Não, só correção e juros) — explicação: art. 608, parágrafo único.
