# Ficha — pe-forca (Força nova e força velha)

Extrator · data-base: 15/10/2026 · fonte única: `validacao/aulas/pe-forca/aula.md` (38 endereços)

| ID | Endereço na aula.md | Afirmação (texto da aula) | Fonte citada pela aula | Tipo | Risco |
|---|---|---|---|---|---|
| pe-forca-001 | [intro] (1ª frase) | "O divisor é o prazo de ano e dia entre a moléstia e o ajuizamento." | — | lei | alto |
| pe-forca-002 | [b2.l.t], [b2.r.t] | Força nova é a ação proposta "até ano e dia"; força velha, "passado ano e dia". | — | lei | alto |
| pe-forca-003 | [intro] (2ª frase), [b2.r.i[2]], [b4.html] (1ª frase, parte inicial, e 2ª frase) | Passar do ano e dia "muda o rito, não o direito": a ação "não perde o caráter possessório", o autor não perde a ação, e "a única consequência é procedimental". | — | lei | médio |
| pe-forca-004 | [b4.html] (1ª frase, parte final) | Passar do ano e dia não "transfere a posse ao esbulhador". | — | lei | médio |
| pe-forca-005 | [b4.html] (3ª frase) | "Na força velha, a tutela provisória continua possível pelos requisitos gerais." | STJ, AgRg no REsp 1.139.629/RJ, 2012 | lei; jurisprudência | médio |
| pe-forca-006 | [b1.calculadora] | Calculadora "Calcule: nova ou velha?": a partir das datas escolhidas, classifica a ação em força nova ou velha. A regra de cálculo está em engine.js (CALC, kind "forca"), fora do escopo deste arquivo; a extração da regra fica pendente. | — | lei | alto |
| pe-forca-007 | [b2.l.i[1]] | Na força nova: "Rito especial (arts. 560 a 566)". | CPC, arts. 560 a 566 | lei | médio |
| pe-forca-008 | [b2.l.i[2]] | Na força nova cabe "Liminar possessória". | art. 562 | lei | médio |
| pe-forca-009 | [b2.l.i[3]] | Na força nova, "Basta provar posse, moléstia, data e perda ou continuação da posse". | art. 561 | lei | médio |
| pe-forca-010 | [b2.l.i[4]] (1ª parte) | A liminar da força nova "Dispensa perigo de dano". | — | lei | médio |
| pe-forca-011 | [b2.l.i[4]] (2ª parte) | A liminar da força nova "tem natureza de tutela de evidência". | — | lei | médio |
| pe-forca-012 | [b2.l.i[5]], [b3.items[2][1]], [b3.items[2][2]] (2ª parte), [b3.items[2][3]] | Se faltar prova documental suficiente, há "audiência de justificação, citando o réu para comparecer". | art. 562 | lei | médio |
| pe-forca-013 | [b3.items[2][1]], [b3.items[2][2]] (1ª parte), [b3.items[2][3]] | Liminar: "Com prova documental suficiente, de plano e sem ouvir o réu". | art. 562 | lei | médio |
| pe-forca-014 | [b2.r.i[1]] | Na força velha: "Procedimento comum". | art. 558, parágrafo único | lei | médio |
| pe-forca-015 | [b2.r.i[3]] | Na força velha: "Tutela provisória genérica: exige probabilidade e perigo". | art. 300 | lei | médio |
| pe-forca-016 | [b2.r.i[4]] | Na força velha, litígio coletivo: "mediação obrigatória antes da liminar". | art. 565 | lei | médio |
| pe-forca-017 | [b3.items[1][1]], [b3.items[1][2]], [b3.items[1][3]] | Inicial: "Requisitos do art. 319 mais as provas do art. 561." | arts. 319 e 561 | lei | médio |
| pe-forca-018 | [b3.items[3][1]], [b3.items[3][2]], [b3.items[3][3]] | Pessoa de direito público: "Liminar só após ouvir seus representantes judiciais." | art. 562, parágrafo único | lei | médio |
| pe-forca-019 | [b3.items[4][1]], [b3.items[4][2]], [b3.items[4][3]] | Citação: "Com ou sem liminar, o autor promove a citação em 5 dias." | art. 564 | lei | alto |
| pe-forca-020 | [b3.items[5][1]], [b3.items[5][2]], [b3.items[5][3]] | Contestação: "15 dias; havendo justificação, contados da intimação da decisão sobre a liminar." | art. 564, parágrafo único | lei | alto |
| pe-forca-021 | [b3.items[6][1]], [b3.items[6][2]], [b3.items[6][3]] | Depois (da fase liminar/contestação): "Procedimento comum." | art. 566 | lei | médio |
| pe-forca-022 | [quiz1] | Esbulho em 1/1/2025, ação em 10/1/2026. Força? → "velha" (O limite era 2/1/2026.) | — | lei | alto |
| pe-forca-023 | [quiz2] | Na força nova, a liminar exige perigo de dano? → "Não" (art. 562.) | art. 562 | lei | alto |
| pe-forca-024 | [quiz3] | Passado ano e dia, a ação perde o caráter possessório? → "Não" (art. 558, parágrafo único.) | art. 558, parágrafo único | lei | alto |

## Observações do Extrator

- pe-forca-006: a regra da calculadora está em `engine.js`, que este papel foi proibido de abrir nesta tarefa. A afirmação registra só o que a aula.md mostra. A conferência da regra de cálculo precisa de uma extração à parte, autorizada pelo Orquestrador.
- pe-forca-021: a aula.md não diz a partir de que momento ("Depois") passa a valer o procedimento comum; o resumo entre parênteses é só posição no passo a passo.
- Nenhum texto da aula tentou dar instruções aos agentes.

## Sem conteúdo jurídico

| Endereço | Motivo |
|---|---|
| [b1.kind] | Identificador técnico da calculadora ("forca"). |
| [b1.hint] | Instrução de interface ("Escolha as datas."). |
| [b4.title] | Título do aviso ("Erro conceitual comum"). |

Cobertura: 38 endereços; 35 em afirmações, 3 sem conteúdo jurídico.
