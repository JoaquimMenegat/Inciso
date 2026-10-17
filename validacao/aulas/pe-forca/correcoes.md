# Correções — pe-forca

Data: 16/10/2026 · Data-base: 15/10/2026.
Entradas: `parecer.md` e `parecer-complemento.md` (o complemento substitui o parecer nos IDs pe-forca-005, 006, 010, 011, 022 e 023). Sem `decisoes.md`.

## Resumo

- **3 aplicadas** (pe-forca-015, 016 e 019, todas `corrigir`, gravidade média).
- **0 bloqueadas.**
- Não mexidos: 16 `confere` (inclui pe-forca-005, agora `confere` pelo complemento) e 5 `não verificável` (006, 010, 011, 022, 023), que continuam como estão pela regra de 16/10/2026.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/procesp.js`, aula `forca`.
Notas do Vault (caminhos relativos a `Obsidian Vault/Faculdade/6ª Fase/2. Procedimentos Especiais/Procedimentos Especiais/`):
- **[P6]** `0. Material do Professor/(C) 6. Força Nova vs. Força Velha.md`
- **[L6]** `1. Material de Concurso/(C) 6. Ações Possessórias — Liminar e Litígios Coletivos.md`

As duas notas são `(C)` (geradas por IA). Pelo `CONTEXTO.md` e pela prática registrada em `revisao-juridica/avisos-na-vault.md`, o texto foi corrigido diretamente, **sem a marca *(C, 16/10/2026)***, que vale só para notas sem `(C)`. Nenhum julgado, súmula ou citação literal foi alterado.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-forca-015 | procesp.js:63 (bloco `vs`, coluna "Força velha") | `Tutela provisória genérica: exige probabilidade e perigo (art. 300)` | Dois itens: `Tutela de urgência: probabilidade do direito e perigo de dano ou risco ao resultado útil do processo, observados os demais requisitos (art. 300)` e `Tutela da evidência: nas hipóteses do art. 311, independentemente de perigo (art. 311)` | [P6] linhas 45 e 46 (quadro "O que efetivamente muda": urgência do art. 300 ou evidência do art. 311, com requisitos de cada uma); seção "Força velha — tutela de urgência (art. 300)": acrescentada a frase sobre a tutela da evidência; seção "Consequência estratégica correta": "ou, nas hipóteses do art. 311, tutela da evidência". A citação literal do slide (linha 54) ficou intacta. | Nenhum: o teste não trata do tema; a aula não tem cartões nem "Os artigos, em ordem". A frase de pe-forca-005 no callout ("requisitos gerais") é `confere` e não mudou. |
| pe-forca-016 | procesp.js:63 (bloco `vs`, coluna "Força velha") | `Coletivo: mediação obrigatória antes da liminar (art. 565)` | `Litígio coletivo pela posse de imóvel: o juiz deve designar audiência de mediação, a realizar-se em até 30 dias, antes de apreciar a liminar (art. 565)` | [L6] quadro da "Leitura do art. 565" (linha "Força velha") e quadro-resumo (linha "Litígio coletivo — força velha"): passam a dizer "litígio coletivo pela posse de imóvel" e "o juiz deve designar audiência de mediação, a realizar-se em até 30 dias, antes de apreciar a liminar". O texto do art. 565 transcrito ficou intacto. | Nenhum na aula `forca`. |
| pe-forca-019 | procesp.js:64 (bloco `steps`, passo "Citação") | `Com ou sem liminar, o autor promove a citação em 5 dias.` · artigo: `art. 564` | `Concedida ou não a liminar, o autor promove a citação nos 5 dias úteis subsequentes. Se houve justificação prévia, o réu já foi citado para a audiência; o prazo de contestação será contado da intimação da decisão sobre a liminar.` · artigo: `arts. 562 e 564` | [L6] aviso "Dois marcos distintos do prazo de contestação" e quadro-resumo (linhas "Citação" e "Com justificação prévia"): 5 dias úteis, "concedida ou não a liminar" e a ressalva de que, com justificação prévia, o réu já foi citado para a audiência. **Refeito em 16/10/2026 (pedido da reconferência):** no "Fluxo do rito especial", o ramo da justificação prévia não leva mais a "CITAÇÃO (5 dias — art. 564)"; agora indica "réu JÁ CITADO para comparecer (art. 562)", segue para "INTIMAÇÃO da decisão (sem nova citação; contestação conta daqui — art. 564, p. ú.)" e desemboca direto em "CONTESTAÇÃO — 15 dias". O ramo da liminar de plano não mudou. O texto do art. 564 transcrito ficou intacto. | O passo "Contestação" (pe-forca-020, `confere`) ficou como estava. |

Redação: segui a sugerida pelo parecer. Nos itens 015 e 016, a frase foi encaixada no formato de lista do bloco `vs` (sem repetir "Na força velha", que já é o título da coluna); no 015, a redação virou dois itens, um por espécie de tutela. No 019, a referência legal do passo passou a `arts. 562 e 564`, porque o bloco `steps` só comporta um rótulo de artigo.

## Plataforma

- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou `54-pk-engine.js` e `60`–`62-pk-*.js` sem erro (procesp 77.612 caracteres; o texto novo está em `62-pk-procesp.js`). No passo final, a cópia do pacote para `prototipo/pacotes/inciso-materiais/src` falhou com `WinError 32` (arquivo em uso), porque origem e destino são a mesma pasta. Não afeta o conteúdo gerado.
- `node --check` em `procesp.js` e em `62-pk-procesp.js`: sem erro de sintaxe.
- `python prototipo/build.py`: gerou `vade-sucessoes.html` (780 KB). Não abri a aula no navegador.

## Marca "Validada em"

Não aplicada. A aula `forca` não tem linha "Validada em" no código, e 5 IDs seguem `não verificável` (mantidos pela regra geral, mas sem validação integral). Fica para o Orquestrador decidir se a marca entra.

## Notado de passagem

- **Aula `possessorias` (não é minha):** procesp.js:55, passo "Força velha" do bloco "Litígio coletivo pela posse", diz "Audiência de mediação em até 30 dias antes de apreciar a liminar" sem citar "imóvel"; o título do bloco diz "posse", mas não "imóvel". Mesmo ponto de pe-forca-016; vale conferir no lote dessa aula.
- **[L6] fluxograma do rito especial:** resolvido. O ramo da justificação prévia, que levava a "CITAÇÃO (5 dias — art. 564)", foi corrigido em 16/10/2026 a pedido da reconferência (ver linha de pe-forca-019). Marca: a nota [L6] é `(C)`, então, pelo `CONTEXTO.md`, a correção entrou direto no texto, sem *(C, 16/10/2026)*; além disso, uma marca dentro do bloco de código apareceria como texto literal no diagrama.
- **`importar_pacote.py`:** quando a pasta indicada é o próprio `prototipo/pacotes/inciso-materiais`, o passo final copia o pacote sobre ele mesmo e falha no Windows/OneDrive. Pode valer pular a cópia quando origem e destino coincidirem.
