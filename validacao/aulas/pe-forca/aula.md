# pe-forca — Força nova e força velha

Origem: procesp.js:59 · grupo: Procedimentos especiais
Itens listados: 38


## Introdução
- [intro] O divisor é o prazo de ano e dia entre a moléstia e o ajuizamento. Ele muda o rito, não o direito.

## Bloco 1 · calc · Calcule: nova ou velha?
Origem: procesp.js:62
- [b1.calculadora] Calculadora "{"kind":"forca","hint":"Escolha as datas."}": a regra está em engine.js (CALC)
- [b1.kind] forca
- [b1.hint] Escolha as datas.

## Bloco 2 · vs · O que muda
Origem: procesp.js:63
- [b2.l.t] Força nova (até ano e dia)
- [b2.l.i[1]] Rito especial (arts. 560 a 566)
- [b2.l.i[2]] Liminar possessória (art. 562)
- [b2.l.i[3]] Basta provar posse, moléstia, data e perda ou continuação da posse (art. 561)
- [b2.l.i[4]] Dispensa perigo de dano: tem natureza de tutela de evidência
- [b2.l.i[5]] Audiência de justificação se faltar prova documental
- [b2.r.t] Força velha (passado ano e dia)
- [b2.r.i[1]] Procedimento comum (art. 558, parágrafo único)
- [b2.r.i[2]] Não perde o caráter possessório
- [b2.r.i[3]] Tutela provisória genérica: exige probabilidade e perigo (art. 300)
- [b2.r.i[4]] Coletivo: mediação obrigatória antes da liminar (art. 565)

## Bloco 3 · steps · O rito da força nova
Origem: procesp.js:64
- [b3.items[1][1]] Inicial
- [b3.items[1][2]] Requisitos do art. 319 mais as provas do art. 561.
- [b3.items[1][3]] arts. 319 e 561
- [b3.items[2][1]] Liminar
- [b3.items[2][2]] Com prova documental suficiente, de plano e sem ouvir o réu; senão, audiência de justificação, citando o réu para comparecer.
- [b3.items[2][3]] art. 562
- [b3.items[3][1]] Pessoa de direito público
- [b3.items[3][2]] Liminar só após ouvir seus representantes judiciais.
- [b3.items[3][3]] art. 562, parágrafo único
- [b3.items[4][1]] Citação
- [b3.items[4][2]] Com ou sem liminar, o autor promove a citação em 5 dias.
- [b3.items[4][3]] art. 564
- [b3.items[5][1]] Contestação
- [b3.items[5][2]] 15 dias; havendo justificação, contados da intimação da decisão sobre a liminar.
- [b3.items[5][3]] art. 564, parágrafo único
- [b3.items[6][1]] Depois
- [b3.items[6][2]] Procedimento comum.
- [b3.items[6][3]] art. 566

## Bloco 4 · callout
Origem: procesp.js:11
- [b4.title] Erro conceitual comum
- [b4.html] Passar do ano e dia não faz o autor perder a ação, nem transfere a posse ao esbulhador. A única consequência é procedimental. Na força velha, a tutela provisória continua possível pelos requisitos gerais (STJ, AgRg no REsp 1.139.629/RJ, 2012).

## Teste do módulo
- [quiz1] Esbulho em 1/1/2025, ação em 10/1/2026. Força: → resposta dada como certa: "velha" (alternativas: nova | velha) — explicação: O limite era 2/1/2026.
- [quiz2] Na força nova, a liminar exige perigo de dano? → resposta dada como certa: "Não" (alternativas: Sim | Não) — explicação: art. 562.
- [quiz3] Passado ano e dia, a ação perde o caráter possessório? → resposta dada como certa: "Não" (alternativas: Sim | Não) — explicação: art. 558, parágrafo único.
