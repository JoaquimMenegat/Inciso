# Correções — pe-introducao

Data: 16/10/2026 · Data-base: 15/10/2026.
Entradas: `parecer.md` e `parecer-complemento.md` (o complemento substitui o parecer só em pe-introducao-038). Sem `decisoes.md`.

## Resumo

- **8 aplicadas** (todas `corrigir`): 008 (alta), 038, 040, 041, 042, 044 e 049 (médias), 039 (baixa).
- **0 bloqueadas.**
- Não mexidos: 25 `confere` e 15 `não verificável` (012 a 021, 023 a 026 e 052), que continuam como estão pela regra de 16/10/2026. A classificação dos arts. 539 a 718 como "jurisdição contenciosa" continua (decisão geral: leitura direta da estrutura do CPC).

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/procesp.js`, aula `introducao` (linhas 7 a 16).
Nota do Vault (caminho relativo a `Obsidian Vault/Faculdade/6ª Fase/2. Procedimentos Especiais/Procedimentos Especiais/`):
- **[P1]** `0. Material do Professor/(C) 1. Introdução aos Procedimentos Especiais.md`

A nota é `(C)` (gerada por IA). Pelo `CONTEXTO.md` e pela prática registrada em `revisao-juridica/avisos-na-vault.md` ("Notas (C) com o texto corrigido diretamente"), o texto foi corrigido direto, **sem a marca *(C, 16/10/2026)***, que vale só para notas sem `(C)`. Nenhum julgado, súmula, citação literal de autor ou artigo transcrito foi alterado.
A nota de concurso `1. Material de Concurso/(C) 1. Introdução aos Procedimentos Especiais.md` foi lida e não trata de nenhum dos pontos corrigidos; não mudou.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-introducao-008 | procesp.js:10 (bloco `flips`, cartão "Adequar ao direito") | `A lei civil dá ao possuidor esbulhado há menos de ano e dia o direito de reaver a coisa desde logo; o processo cria a liminar para isso.` | `O Código Civil assegura ao possuidor a restituição em caso de esbulho (CC, art. 1.210). O prazo de ano e dia define o procedimento especial de manutenção e reintegração no CPC (art. 558); o processo cria a liminar para isso.` | [P1] linha 69, seção "Critérios de especialização": o exemplo deixa de atribuir o ano e dia à lei civil; agora cita o CC, art. 1.210 (manutenção na turbação e restituição no esbulho, como já dizia a nota) e o CPC, art. 558 para o prazo. | O fecho "o processo cria a liminar para isso" foi mantido, porque é pe-introducao-009 (`confere`). O cartão vira flashcard; não há teste sobre o tema. |
| pe-introducao-038 | procesp.js:13 (callout "Pegadinha") | `Inventário e partilha é procedimento de jurisdição contenciosa, mesmo quando os herdeiros estão de acordo.` | `O STJ qualifica o inventário judicial como contencioso (REsp 1.739.872), mas reconhece natureza de jurisdição voluntária ao arrolamento sumário para partilha amigável entre partes capazes (CPC, art. 659; STJ, REsp 1.896.526/DF). O simples acordo dos herdeiros não permite estender essa classificação a qualquer inventário.` | [P1] linha 150, aviso "Inventário é CONTENCIOSO": título passa a "Inventário é CONTENCIOSO, com uma ressalva" e o texto recebe a redação sugerida (REsp 1.739.872, arrolamento sumário, art. 659, REsp 1.896.526/DF). | Teste 1 ("Inventário é procedimento de jurisdição: contenciosa") não mudou: é pe-introducao-052, `não verificável`, e continua compatível com a nova redação (o inventário judicial segue contencioso). O item "Inventário e partilha" da coluna contenciosa (018, `não verificável`) também ficou. |
| pe-introducao-039 | procesp.js:14 (tabela "Grau de afastamento do comum") | Linha `Totalmente diferente do comum` · `Inventário, exigir contas` | Linha própria: `Rito próprio` · `Inventário: rito próprio, com aplicação subsidiária do procedimento comum (arts. 610 a 673 e 318, parágrafo único)` | [P1] linhas 74 a 76, quadro "Grau de afastamento do rito comum": a linha "se diferencia COMPLETAMENTE do comum" foi trocada pela linha do inventário com a redação sugerida; cabeçalho "Exemplos do slide" passou a "Exemplos". | A tabela deixou de ter só dois graus e passou a ter uma linha por procedimento (ver 040 a 044). |
| pe-introducao-040 | procesp.js:14 (mesma tabela) | Exigir contas na linha `Totalmente diferente do comum` | `Regras próprias e remissões ao comum` · `Exigir contas: regras próprias e remissões ao procedimento comum, inclusive ao julgamento conforme o estado do processo (art. 550, §§ 2º e 4º)` | [P1] quadro "Grau de afastamento": linha própria de exigir contas, com a redação sugerida. | Nenhum outro. |
| pe-introducao-041 | procesp.js:14 (mesma tabela) | Possessórias na linha `Só a fase inicial é especial, depois segue o comum` | `Fase inicial especial, depois o comum` · `Possessórias sujeitas ao rito especial: aplica-se o procedimento comum quanto ao mais (art. 566). Proposta a ação depois de ano e dia, o procedimento é comum desde o início (art. 558, parágrafo único)` | [P1] quadro "Grau de afastamento": linha "Apenas uma fase inicial os distingue — Ações possessórias" trocada pela redação sugerida. | Nenhum outro. |
| pe-introducao-042 | procesp.js:14 (mesma tabela) | Monitória na linha `Só a fase inicial é especial, depois segue o comum` | `Embargos convertem em comum` · `Monitória: a oposição de embargos converte o procedimento em comum (STJ, REsp 1.955.835). Sem pagamento e sem embargos, constitui-se título executivo judicial (art. 701, § 2º)` | [P1] aviso "Por que isso importa" (logo abaixo do quadro), que dizia que a monitória "retorna ao procedimento comum depois de uma fase inicial própria": virou lista, com a monitória na redação sugerida. | Nenhum outro. |
| pe-introducao-044 | procesp.js:14 (mesma tabela) | Demarcação e divisão na linha `Só a fase inicial é especial, depois segue o comum` | `Comum após a resposta, com etapas próprias` · `Demarcação e divisão: segue-se o procedimento comum após o prazo de resposta, com etapas próprias posteriores de demarcação ou divisão e homologação (arts. 578 a 589 e 590 a 598)` | [P1] aviso "Por que isso importa": item próprio de demarcação e divisão, com a redação sugerida. | Embargos de terceiro (043, `confere`) ficou como linha própria `Fase inicial especial, depois o comum` · `Embargos de terceiro`, sem mudar o conteúdo. No aviso do Vault, o item dos embargos de terceiro diz o que já dizia, agora com o art. 679 (fonte do parecer para 043). |
| pe-introducao-049 | procesp.js:15 (tabela "Procedimentos especiais fora do CPC") | `8.429/1992` · `Improbidade administrativa` | `8.429/1992` · `Improbidade administrativa: procedimento comum do CPC, com as disposições próprias da lei (art. 17, na redação da Lei nº 14.230/2021)` | [P1] linha 107, "Rol de Bueno (2021)": acrescentado "— hoje, procedimento comum do CPC, com as disposições próprias da lei (art. 17, na redação da Lei nº 14.230/2021)". | Nenhum. |

Redação: segui a sugerida pelo parecer. Ajustes de encaixe:
- 008: mantido o fecho de 009 (`confere`); a referência "art. 558" sem "CPC" segue o padrão da aula, já que a frase diz "no CPC".
- 039 a 044: a tabela tinha duas linhas que juntavam vários procedimentos; como cada correção dá uma redação diferente, cada procedimento ganhou linha própria, e a coluna "Grau" recebeu um rótulo curto que descreve a redação sugerida. Os textos citam o CPC dentro de `a()`, como o resto da aula.
- A aula não tem "Os artigos, em ordem" nem simulador; o teste não trata dos itens corrigidos.

## Plataforma

- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou `54-pk-engine.js` e `60`–`62-pk-*.js` (procesp 79.630 caracteres; o texto novo está em `prototipo/src/js/62-pk-procesp.js`). O passo final, a cópia do pacote para `prototipo/pacotes/inciso-materiais/src`, falhou com `WinError 32` (arquivo em uso), porque origem e destino são a mesma pasta. É a mesma falha já registrada em pe-forca; não afeta o conteúdo gerado, e o `procesp.js` de origem ficou íntegro.
- `node --check` em `procesp.js` e em `62-pk-procesp.js`: sem erro.
- Leitura do módulo em Node: a aula `introducao` carrega com 6 blocos; os textos novos aparecem nos blocos `flips`, `callout` e nas duas tabelas.
- `python prototipo/build.py`: gerou `vade-sucessoes.html` (785 KB). Não abri a aula no navegador.

## Marca "Validada em"

Não aplicada. A aula não tem linha "Validada em" no código, e 15 IDs seguem `não verificável` (mantidos pela regra geral). Fica para o Orquestrador decidir.

## Notado de passagem

- **Teste 1 (pe-introducao-052):** a explicação "Está no rol dos arts. 539 a 718" não menciona a ressalva do arrolamento sumário, agora presente na "Pegadinha". Não muda o gabarito; pode valer acrescentar a ressalva quando 052 for resolvido.
- **[P1] linha 69:** acrescentei "manutenção em caso de turbação", porque o exemplo original da nota falava em "esbulhado ou turbado" e o CC, art. 1.210 trata das duas situações; a aula, que só falava de esbulho, ficou só com a restituição.
- **Vault, nota de inventário:** `(C) 11. Inventário Judicial — Conceitos e Prazos.md` (linhas 18, 22 e 155) classifica o inventário como contencioso sem a ressalva do arrolamento sumário consensual (STJ, REsp 1.896.526/DF). Não é nota de origem desta aula; vale conferir no lote do inventário.
- **Nota de concurso `(C) 1. Introdução`:** diz que os procedimentos especiais vão dos arts. 539 a **771** (linhas 60 e 178), e traz a tese das "normas zumbis" com lei de outubro de 2024 sem número (linhas 75 a 83). Fora do escopo desta aula; registrar para revisão.
- **`importar_pacote.py`:** segue falhando na cópia final quando a pasta indicada é o próprio pacote (já notado em pe-forca).
