# Correções · pe-embargos-terceiro

Data: 16/10/2026 · Data-base: 15/10/2026.
Entradas: `parecer.md` e `parecer-complemento.md`. O complemento substitui o parecer nos IDs 003, 015, 016, 025, 026, 030 e 032. Sem `decisoes.md`.

## Resumo

- **8 aplicadas:** 005, 010, 011, 013, 019, 020, 022 e 031, todas `corrigir` (7 de gravidade média e 1 baixa, a 022).
- **0 bloqueadas.**
- Não mexidos:
  - 23 `confere`: 001, 002, 004, 006 a 009, 012, 014 a 018, 021, 023 a 026, 028 a 030, 032 e 033. Destes, 015, 016, 025, 026, 030 e 032 passaram a `confere` pelo complemento.
  - 1 `não verificável`: 003 (rol exemplificativo). Continua como está, pela regra geral de 16/10/2026.
  - 027 é conceito, sem veredito.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/procesp.js`, aula `embargos-terceiro` (linhas 68 a 76).

Nota do Vault (caminho relativo a `Obsidian Vault/Faculdade/6ª Fase/2. Procedimentos Especiais/Procedimentos Especiais/`):
- **[P7]** `0. Material do Professor/(C) 7. Ação de Embargos de Terceiro.md`

É a única nota de origem. Busquei "embargos de terceiro" e os arts. 675, 676 e 678 na pasta da matéria. As outras notas que aparecem só citam o instituto de passagem e não tratam dos pontos corrigidos. A pasta `1. Material de Concurso` não tem nota sobre embargos de terceiro.

A nota é `(C)` (gerada por IA). O `CONTEXTO.md` manda usar a marca *(C, data)* só nas notas sem `(C)`. Por isso, corrigi o texto diretamente e não pus a marca *(C, 16/10/2026)*, como nos lotes anteriores (pe-forca, pe-possessorias, pe-consignacao, pe-contas, pe-demarcacao).

Ficaram intactos:
- o texto de lei transcrito: art. 674, § 2º, I, com a ressalva do art. 843 (linha 46), e art. 676, parágrafo único, completo (linha 63);
- a citação de Donizetti;
- a Súmula 303 e o julgado do slide.

A nota não tem fluxograma nem diagrama sobre os pontos corrigidos. Os quadros "Resumo" foram ajustados. As linhas de [P7] citadas abaixo são as de depois da correção.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-embargos-terceiro-005 | procesp.js:71 (`flips` "Quem é terceiro", verso do cartão "Cônjuge ou companheiro") | `Defendendo bens próprios ou sua meação.` | `Defende a posse de bens próprios ou de sua meação, ressalvado o art. 843: na penhora de bem indivisível, a quota-parte protegida recai sobre o produto da alienação (art. 674, §2º, I).` | [P7] linha 46: o inciso I transcrito já trazia a ressalva do art. 843 e não mudou. Linhas 51 e 52, logo depois da tabela do § 2º. Antes: (não havia). Depois: `> [!info] Meação e bem indivisível (art. 843)` / `> Na penhora de bem indivisível, a quota-parte do cônjuge ou companheiro protegida recai sobre o **produto da alienação** (art. 674, § 2º, I, c/c art. 843).` | O cartão vira flashcard. A frente "Cônjuge ou companheiro" não mudou. |
| pe-embargos-terceiro-010 | procesp.js:72 (`vs` "Até quando", coluna "No cumprimento ou na execução", item 1) | `Até 5 dias após a adjudicação, a alienação por iniciativa particular ou a arrematação` | `Regra geral: até 5 dias úteis após a adjudicação, a alienação por iniciativa particular ou a arrematação, antes da assinatura da respectiva carta (art. 675)` | [P7] linha 89. Antes: `Até **5 (cinco) dias** depois da:`. Depois: `**Regra geral:** até **5 (cinco) dias úteis** depois da:`. Linha 194 (Resumo). Antes: `\| **Prazo** \| Conhecimento: até o trânsito em julgado / Execução: 5 dias após adjudicação, alienação particular ou arrematação, antes da carta \|`. Depois: `\| **Prazo** \| Conhecimento: até o trânsito em julgado / Execução: regra geral, até 5 dias úteis após adjudicação, alienação particular ou arrematação, antes da assinatura da carta (art. 675); sem ciência anterior, o STJ admite contar da ciência da turbação da posse (REsp 1.608.950) \|`. | A coluna ganhou o artigo (art. 675), que antes só aparecia na explicação do teste. A segunda frase da redação sugerida (flexibilização do STJ) foi para o item 2, junto com a de 011. Ver a nota "Redação". |
| pe-embargos-terceiro-011 | procesp.js:72 (mesma coluna, item 2) | `Sempre antes de assinada a carta respectiva` | `O STJ admite oposição posterior quando o terceiro não tinha ciência anterior da execução ou da constrição, observado o prazo contado da ciência da turbação da posse (REsp 1.608.950, notícia oficial de 22/11/2018)` | [P7] linha 94. Antes: `...**mas sempre antes da assinatura da respectiva carta**.`. Depois: `...**antes da assinatura da respectiva carta** (art. 675).`. Linhas 96 e 97. Antes: (não havia). Depois: `> [!info] Flexibilização admitida pelo STJ` / `> Sem ciência anterior da execução ou da constrição, o STJ admite a oposição posterior à carta, com o prazo contado da **ciência da turbação da posse** (REsp 1.608.950, notícia oficial de 22/11/2018).`. Resumo: linha 194 (ver 010). | A primeira frase da redação sugerida ("Como regra, os embargos devem preceder a assinatura da respectiva carta (art. 675)") já está no item 1. Não repeti. |
| pe-embargos-terceiro-013 | procesp.js:73 (`table` "O procedimento", linha "Competência") | `Por dependência ao juízo que ordenou a constrição, em autos apartados; por carta, no juízo deprecado, salvo se o deprecante indicou o bem (art. 676)` | `Por dependência ao juízo que ordenou a constrição, em autos apartados (art. 676); por carta, no juízo deprecado, salvo se o deprecante indicou o bem constrito ou se a carta já foi devolvida (art. 676, parágrafo único)` | [P7] linha 63: o parágrafo único transcrito já estava completo e não mudou. Linha 193 (Resumo). Antes: `\| **Competência** \| Juízo que ordenou a constrição; autuação em apartado (art. 676) \|`. Depois: `\| **Competência** \| Juízo que ordenou a constrição; autuação em apartado (art. 676); por carta, juízo deprecado, salvo se o deprecante indicou o bem constrito ou se a carta já foi devolvida (art. 676, parágrafo único) \|`. | O trecho de 012 (`confere`) ficou com o seu artigo (caput). A exceção ficou com o parágrafo único, cada um com o seu link. |
| pe-embargos-terceiro-019 | procesp.js:73 (mesma tabela, linha "Liminar", 1ª frase) | `Provado o domínio ou a posse, suspendem-se as medidas e pode haver manutenção ou reintegração; caução, salvo hipossuficiente (art. 678)` (frase única, com 020) | `Reconhecidos suficientemente provados o domínio ou a posse, o juiz suspende as medidas constritivas sobre os bens objeto dos embargos e determina a manutenção ou reintegração provisória da posse, se requerida pelo embargante (art. 678).` | [P7] linha 120. Antes: `O embargante que **comprovar o domínio ou a posse** do bem em litígio pode requerer **tutela de urgência** para **manter ou reintegrar** a posse.`. Depois: `Reconhecidos **suficientemente provados** o domínio ou a posse, o juiz **suspende as medidas constritivas** sobre os bens objeto dos embargos e determina a **manutenção ou reintegração provisória** da posse, **se requerida pelo embargante** (art. 678).`. O título "Tutela de urgência — art. 678, CPC" não mudou. | 019 e 020 dividiam a mesma célula. Agora são duas frases, cada uma com o seu artigo. |
| pe-embargos-terceiro-020 | procesp.js:73 (linha "Liminar", 2ª frase) | (ver 019) `caução, salvo hipossuficiente` | `A manutenção ou reintegração provisória da posse pode ser condicionada à caução, ressalvada a impossibilidade da parte economicamente hipossuficiente (art. 678, parágrafo único)` | [P7] linha 122. Antes: `**Contracautela:** o juiz poderá exigir **caução do embargante**, caso vislumbre a possibilidade de os embargos serem julgados improcedentes — **salvo** se o embargante for **hipossuficiente**.`. Depois: `**Contracautela:** a manutenção ou reintegração provisória da posse pode ser condicionada à **caução**, ressalvada a **impossibilidade da parte economicamente hipossuficiente** (art. 678, parágrafo único).` | — |
| pe-embargos-terceiro-022 | procesp.js:73 (linha "Defesa") | `Contestação em 15 dias, depois procedimento comum (art. 679)` | `Contestação em 15 dias; findo o prazo de contestação, segue-se o procedimento comum (art. 679)` | [P7] linha 145 ("Após a apresentação da defesa, **ou não**, o feito prosseguirá pelo **procedimento comum**") já estava certa e não mudou. Linha 196 (Resumo). Antes: `\| **Rito após defesa** \| Procedimento comum (art. 679) \|`. Depois: `\| **Rito após o prazo de contestação** \| Findo o prazo de contestação, procedimento comum (art. 679) \|`. | O trecho "Contestação em 15 dias" (021, `confere`) ficou como estava. |
| pe-embargos-terceiro-031 | procesp.js:76 (`quiz`, 1ª questão) | Enunciado: `Prazo na execução após a arrematação:`. Alternativas: `15 dias` / `5 dias, antes da carta` (gabarito 1). Explicação: `art. 675.` | Enunciado: `Segundo a regra geral do art. 675 do CPC, qual é o prazo após a arrematação?`. Alternativas: `15 dias` / `Até 5 dias úteis, antes da assinatura da carta` (gabarito 1, mantido). Explicação: `art. 675. O STJ admite flexibilização quando o terceiro não tinha ciência anterior da execução ou da constrição (REsp 1.608.950).` | Nenhuma: [P7] não tem teste. | A questão vai para o banco de questões. O índice do gabarito não mudou. |

**Redação.** Segui a redação sugerida pelo parecer, encaixada no formato de cada bloco:
- **010 e 011:** as redações se sobrepõem, porque as duas trazem a regra da carta e a flexibilização do STJ. No bloco `vs`, cada coluna é uma lista. Por isso:
  - o item 1 tem a 1ª frase de 010 (a regra geral, que já inclui a carta);
  - o item 2 tem a 2ª frase de 011, com a referência completa de 010 (REsp e notícia oficial).
  - Nenhum conteúdo das duas redações ficou de fora.
- **013:** o artigo foi dividido entre caput e parágrafo único, conforme a fonte do parecer.

## Plataforma

- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou `54-pk-engine.js` e `60` a `62-pk-*.js` sem erro (procesp: 83.173 caracteres). O texto novo está em `62-pk-procesp.js`.
- No passo final, a cópia do pacote para `prototipo/pacotes/inciso-materiais/src` falhou com `WinError 32` (arquivo em uso). É a mesma falha já registrada nos lotes anteriores: origem e destino são a mesma pasta. Ela não afeta o conteúdo gerado, e `procesp.js` continua com as correções.
- `node --check` em `procesp.js` e em `62-pk-procesp.js`: sem erro de sintaxe.
- `python prototipo/build.py`: gerou `vade-sucessoes.html` (788 KB). Não abri a aula no navegador.

## Marca "Validada em"

Não aplicada. A aula `embargos-terceiro` não tem linha "Validada em" no código, e 003 segue `não verificável` (mantido pela regra geral, mas sem validação integral). O Orquestrador decide se a marca entra.

## Notado de passagem

- **[P7] linha 116 (antes da correção):** a frase "caso vislumbre a possibilidade de os embargos serem julgados improcedentes" saiu junto com a reescrita da contracautela, porque não está no art. 678, parágrafo único, nem na redação sugerida.
- **[P7] título "Tutela de urgência — art. 678, CPC":** o art. 678 trata da suspensão das medidas e da manutenção ou reintegração provisória. Mantive o título, porque não está no parecer. Pode valer trocar por "Liminar" num próximo lote.
- **`importar_pacote.py`:** continua a falha da autocópia quando a pasta indicada é o próprio pacote (ver pe-forca).
