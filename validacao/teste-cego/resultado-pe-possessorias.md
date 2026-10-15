# Teste às cegas — pe-possessorias (14/10/2026)

**Entrada:** a aula na versão de 11/10, antes da revisão de outubro (`teste-cego/fonte/`).
**Gabarito:** `revisao-juridica/03-parecer.md` (arquivos do teste em `teste-cego/pe-possessorias/`), que nessa aula apontou 2 problemas. Nenhum agente teve acesso a ele.

## Resultado

| Problema conhecido | Achado pelo sistema? |
|---|---|
| PE-060: prazo de 5 dias da caução atribuído ao réu (art. 559: é do autor) | **Sim** — pe-possessorias-022, `corrigir` |
| PE-057: "pena" e "desfazimento", termos do CPC/73 (art. 555) | **Sim** — pe-possessorias-018, `corrigir` |

**2 de 2.** Lembrete: em outubro, o primeiro pesquisador deu PE-060 como "confere", e o erro só foi pego na leitura final do validador. Desta vez, a pesquisa às cegas pegou o erro direto.

Além disso, o sistema apontou 9 imprecisões que outubro não registrou (arts. 46, 556, 557, 559, 554 §1º, 565 §1º, 1.012 e CF 109, I). Na leitura do Orquestrador, a maioria procede como ajuste de redação.

## Números

| Etapa | Resultado |
|---|---|
| Extrator | 42 afirmações; cobertura de 64/64 trechos |
| Pesquisa | 33 perguntas (31 de lei, 2 de jurisprudência) |
| Conferente (Codex) | 29 aceitas, 2 devolvidas duas vezes, 2 não verificáveis |
| Comparador (Codex) | 18 confere, 11 corrigir, 4 não verificáveis |
| Tempo total | cerca de 1 hora, a maior parte no Codex |

## O que ajustar

Os itens 1, 2, 4 e 5 foram corrigidos nos prompts e no script em 14/10/2026. O item 3 (STF) foi resolvido nesta aula pelo Joaquim, com o texto das súmulas.

1. **Gravidade inflada.** O Comparador deu `alta` a 8 itens; pela definição, só o 022 (prazo atribuído à parte errada) é alta. Os demais são média ou baixa. Ajustar o prompt com exemplos de cada gravidade.
2. **O Comparador reescreveu a afirmação.** No 027, o resumo dele diz "sempre domicílio do réu", e a aula não diz "sempre". Exigir que a coluna da afirmação copie a ficha.
3. **O portal do STF bloqueia** os dois modelos (403). A SV 23 ficou sem verificação. Caminho: pesquisa aprofundada no ChatGPT ou conferência manual.
4. **O Conferente é rigoroso com lacunas que a lei não resolve** (024, 035): sem jurisprudência, eles nunca passam. Prever que o Orquestrador mande essas lacunas ao Pesquisador de jurisprudência, em vez de devolver ao de lei.
5. **O Codex grava a linha PRONTO dentro do arquivo.** Remover no script.
