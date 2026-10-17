# Correções — pe-possessorias

Data: 16/10/2026 · Data-base: 14/10/2026.
Entradas: `parecer.md`, `parecer-complemento.md` (substitui o parecer nos IDs pe-possessorias-023 e 026) e `decisoes.md`.

## Resumo

- **10 aplicadas** (todas `corrigir`): 018, 019, 022, 023, 024, 027, 032, 034, 035 e 041.
- **0 bloqueadas.**
- Não mexidos:
  - 19 `confere`.
  - pe-possessorias-026 (`não verificável` no complemento): continua como está, pela regra geral de 16/10/2026.
  - pe-possessorias-028, 038 e 039 (`não verificável` no parecer): o `decisoes.md` e o `decisoes-gerais.md` mandam "confere" (SV 23/STF e Súmula 619/STJ). O texto não muda.
  - Os 9 conceitos sem veredito.
- `decisoes.md`, linha "Termo inicial e contagem do prazo de 30 dias": o parecer (pe-possessorias-034) diz para não preencher esse ponto. Não acrescentei termo inicial nem contagem.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/procesp.js`, aula `possessorias` (linhas 48 a 57).
Notas do Vault (caminhos relativos a `Obsidian Vault/Faculdade/6ª Fase/2. Procedimentos Especiais/Procedimentos Especiais/`):
- **[P5]** `0. Material do Professor/(C) 5. Ações Possessórias — Fundamentos.md` (nota de origem principal)
- **[L5]** `1. Material de Concurso/(C) 5. Ações Possessórias — Procedimento e Exceção de Domínio.md`
- **[L6]** `1. Material de Concurso/(C) 6. Ações Possessórias — Liminar e Litígios Coletivos.md`

As três notas são `(C)` (geradas por IA). O `CONTEXTO.md` manda usar a marca *(C, data)* só nas notas sem `(C)`. Por isso, corrigi o texto diretamente e não pus a marca, como no lote pe-forca. Não alterei nenhum julgado, súmula, citação literal ou texto de lei transcrito.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-possessorias-018 | procesp.js:53 (`flips`, cartão "Dúplice") | `O réu pede proteção possessória e indenização na contestação, sem reconvenção (art. 556).` | `Alegando ofensa à sua posse pelo autor, o réu pode pedir proteção possessória e indenização pelos prejuízos da turbação ou do esbulho na contestação, sem reconvenção (art. 556; STJ, REsp 2.055.270/MG).` | [P5] linha 103 (seção "Caráter dúplice"): mesma redação. [L5] já transcreve o art. 556 completo; não mudou. | O flashcard sai do próprio cartão. O teste está em pe-possessorias-041. |
| pe-possessorias-019 | procesp.js:53 (`flips`, cartão "Posse x domínio") | `Na pendência da possessória, não se discute propriedade entre as mesmas partes, salvo contra terceiro (art. 557).` | `Na pendência da possessória, autor e réu não podem propor ação de reconhecimento do domínio, salvo contra terceiro (art. 557).` | Nenhuma alteração: [L5], na síntese e no resumo do art. 557, já diz "ação de domínio… vedada entre as partes; cabe contra terceiro". [P5] não trata do tema. | A frase seguinte do cartão (pe-possessorias-020, `confere`) ficou como estava. |
| pe-possessorias-022 | procesp.js:53 (`flips`, cartão "Caução") | `…sob pena de depósito da coisa, salvo se ele for hipossuficiente (art. 559).` | `…sob pena de depósito da coisa, ressalvada a impossibilidade de prestar caução da parte economicamente hipossuficiente (art. 559).` | [L5] linha 286 (Resumo, "Caução"): "ressalvada a impossibilidade de prestar caução da parte economicamente hipossuficiente". [P5] linha 119 já dizia isso; não mudou. | O começo do cartão (pe-possessorias-021, `confere`) ficou intacto. |
| pe-possessorias-023 | procesp.js:53 (`flips`, cartão "Sentença") | `Cumpre-se por mandado, sem execução.` | `Cumpre-se por mandado nos próprios autos, sem processo autônomo de execução (STJ, REsp 1.782.335/MT).` | [P5] linha 158 (tabela "Sentença", "Restituição da posse"): "Cumpre-se por mandado de manutenção ou reintegração nos próprios autos, sem processo autônomo de execução (STJ, REsp 1.782.335/MT)". | Nenhum. |
| pe-possessorias-024 | procesp.js:53 (`flips`, cartão "Sentença") | `Apelação com efeito suspensivo, salvo na parte que confirma a liminar (art. 1.012, §1º, V).` | `A apelação tem efeito suspensivo, salvo, quanto à tutela provisória, no capítulo que a confirma, concede ou revoga, cuja eficácia pode ser suspensa pelo relator nos termos legais (art. 1.012, §1º, V, e §4º).` | [P5] linha 161 (tabela "Sentença", "Exceção ao duplo efeito"): passa a falar em tutela provisória confirmada, concedida ou revogada e na suspensão pelo relator (art. 1.012, § 1º, V, e § 4º). | O rótulo do artigo passou a `art. 1.012, §1º, V, e §4º`. |
| pe-possessorias-027 | procesp.js:54 (`table` "Competência", linha 3) | `União, autarquias e empresas públicas federais` · `Justiça Federal (CF, art. 109, I)` | `União, autarquia ou empresa pública federal como autora, ré, assistente ou oponente` · `Justiça Federal, ressalvadas as causas de falência, acidentes de trabalho e as sujeitas às Justiças Eleitoral e do Trabalho (CF, art. 109, I)` | [P5] linha 45 (tabela "Deslocamentos de competência"): mesma redação. Antes a nota dizia "autarquias, fundações públicas e empresas públicas", sem "federais". | Nenhum: o teste não trata do tema. |
| pe-possessorias-032 | procesp.js:55 (`steps` "Litígio coletivo pela posse", passo "Intimações") | `MP como fiscal da ordem jurídica e Defensoria se houver pessoas em situação de vulnerabilidade.` · artigo: `art. 554, §1º` | `MP como fiscal da ordem jurídica. Defensoria se houver pessoas em situação de hipossuficiência econômica (art. 554, §1º); para a audiência de mediação, sempre que houver parte beneficiária de gratuidade da justiça (art. 565, §2º).` · artigo: `arts. 554, §1º, e 565, §2º` | [L6] linhas 269 a 271 (fluxograma do litígio coletivo): "se houver pessoas em situação de hipossuficiência econômica (na audiência de mediação: sempre que houver beneficiário de gratuidade — art. 565, § 2º)". A tabela "Os papéis do MP e da Defensoria" já falava em hipossuficiência econômica e não mudou. | A parte do MP (pe-possessorias-031, `confere`) ficou igual. O rótulo do passo passou a citar os dois artigos, porque o bloco `steps` tem um só rótulo. |
| pe-possessorias-034 | procesp.js:55 (`steps`, passo "Força velha") | `Audiência de mediação em até 30 dias antes de apreciar a liminar.` | `No litígio coletivo pela posse de imóvel, se o esbulho ou a turbação afirmado na inicial ocorreu há mais de ano e dia, o juiz deve, antes de apreciar a liminar, designar audiência de mediação a realizar-se em até 30 dias.` | [L6], refeito em 16/10/2026 a pedido do Reconferente. Os três pontos da nota passam a repetir o texto do material, com a condição do esbulho ou da turbação afirmado na inicial. **(1) Linha 234**, tabela "Leitura do art. 565", linha "Litígio coletivo pela posse de imóvel, força velha (> ano e dia)". Antes: `O juiz deve designar **audiência de mediação**, a realizar-se em até 30 dias, **antes** de apreciar a liminar (art. 565)` (texto deixado pelo lote pe-forca). Depois: `No litígio coletivo pela posse de imóvel, se o esbulho ou a turbação afirmado na inicial ocorreu há mais de ano e dia, o juiz deve, **antes** de apreciar a liminar, designar **audiência de mediação** a realizar-se em até 30 dias (art. 565)`. **(2) Linhas 274 a 279**, fluxograma do litígio coletivo. Antes, no original: `FORÇA VELHA → art. 565: audiência de mediação em até 30 dias / ANTES de apreciar a liminar`; na primeira versão deste lote: `FORÇA VELHA (posse de imóvel) → art. 565: o juiz deve designar / audiência de mediação em até 30 dias / ANTES de apreciar a liminar`. Depois: `FORÇA VELHA → art. 565: no litígio coletivo pela posse de / imóvel, se o esbulho ou a turbação afirmado / na inicial ocorreu há mais de ano e dia, o / juiz deve, ANTES de apreciar a liminar, / designar audiência de mediação a realizar-se / em até 30 dias`. **(3) Linha 303**, tabela "Resumo", linha "Litígio coletivo pela posse de imóvel — força velha". Antes: `O juiz deve designar **audiência de mediação**, a realizar-se em até **30 dias**, antes de apreciar a liminar (art. 565)` (texto deixado pelo lote pe-forca). Depois: `No litígio coletivo pela posse de imóvel, se o esbulho ou a turbação afirmado na inicial ocorreu há mais de ano e dia, o juiz deve, antes de apreciar a liminar, designar **audiência de mediação** a realizar-se em até **30 dias** (art. 565)`. O art. 565 transcrito (linha 210) ficou intacto. O fluxograma ganhou 3 linhas; por isso, a linha 301 da [L6] citada em pe-possessorias-035 agora é a linha 304. | Nenhum. Não acrescentei o termo inicial nem a contagem dos 30 dias, conforme o parecer. Isso resolve o ponto que o lote pe-forca anotou de passagem. |
| pe-possessorias-035 | procesp.js:55 (`steps`, passo "Liminar não cumprida") | `Se não executada em 1 ano da distribuição, nova mediação.` | `Concedida a liminar, se não for executada em 1 ano contado da data de distribuição, o juiz deverá designar audiência de mediação.` | [L6] linha 235 ("Leitura do art. 565") e linha 301 (Resumo): sai "Nova" e entra "contado da data de distribuição… o juiz deverá designar audiência de mediação". O § 1º transcrito ficou intacto. | O resto do passo (pe-possessorias-036 e 037, `confere`) não mudou. |
| pe-possessorias-041 | procesp.js:57 (`quiz`, questão 2) | Pergunta: `O réu da possessória precisa reconvir para pedir indenização?` · explicação: `Caráter dúplice (art. 556).` | Pergunta: `O réu que alega ofensa à sua posse precisa reconvir para pedir indenização pelos prejuízos da turbação ou do esbulho cometido pelo autor?` · explicação: `Não. Pode formular esse pedido na contestação (art. 556; STJ, REsp 2.055.270/MG).` | Mesma correção de pe-possessorias-018, em [P5] linha 103. | O gabarito continua `Não` (índice 1) e as alternativas não mudaram. A explicação segue a redação sugerida pelo parecer. |

Redação: segui a sugerida pelo parecer e só a ajustei ao formato de cada bloco:
- Em 022, a ressalva entrou na frase do cartão "Caução" ("ressalvada…"), sem virar frase solta.
- Em 023 e 024, as duas frases ficaram no mesmo cartão "Sentença".
- Em 027, a redação foi dividida entre as duas colunas da tabela.

## Plataforma

- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`:
  - Gerou os arquivos de conteúdo (tgp 68.601, conhecimento 52.488 e procesp 78.259 caracteres). As nove redações novas estão em `prototipo/src/js/62-pk-procesp.js`.
  - Depois, o passo final falhou com `WinError 32` (arquivo em uso). Nesse passo, o script copia o pacote sobre ele mesmo, porque origem e destino são a mesma pasta. É a mesma falha registrada no lote pe-forca e não afeta o conteúdo gerado.
- `node --check` em `procesp.js` e em `62-pk-procesp.js`: sem erro de sintaxe.
- `python prototipo/build.py`: gerou `vade-sucessoes.html` (783 KB). Não abri a aula no navegador.

## Marca "Validada em"

Não aplicada. A aula `possessorias` não tem linha "Validada em" no código, e pe-possessorias-026 segue `não verificável` (mantido pela regra geral, mas sem validação integral). O Orquestrador decide se a marca entra.

## Notado de passagem

- **[L5] linha 135** (exemplo "Como funciona na prática"): diz que o réu pode "execute a sentença" para obter o mandado de reintegração. A frase não bate com o que foi corrigido em pe-possessorias-023 (cumpre-se por mandado nos próprios autos, sem processo autônomo de execução). Está fora do ID e não alterei.
- **[L4]** `1. Material de Concurso/(C) 4. Ações Possessórias — Fundamentos e Fungibilidade.md`, linhas 105 e 259: "Defensoria só se houver hipossuficientes", sem "econômica". Não está errado, mas é menos preciso que a redação de pe-possessorias-032. Não alterei.
