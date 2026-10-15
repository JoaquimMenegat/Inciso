# Roadmap — sistema de agentes para validação jurídica

*Versão 2 — 13/10/2026* (substitui a v1 de 12/10)

**Objetivo:** cada afirmação jurídica do JurInterativo ligada a uma fonte primária vigente, com data de consulta, e um caminho rápido para corrigir o que escapar. "Zero erro" não é garantível; rastreabilidade e correção rápida são.

**Prazo:** as 3 matérias de processo validadas antes da publicação na Kiwify, em **04/11/2026** (ver `prototipo/roadmap-kiwify.md`). Depois disso, o sistema passa a cuidar da atualização.

**O que mudou da v1:**
- O "Validador" único virou uma linha de agentes com funções separadas: extrair, pesquisar (lei e jurisprudência), conferir a pesquisa e comparar com a aula.
- Sem professor parceiro: o decisor final é você.
- Calendário refeito para o lançamento de 04/11.

---

## Regras centrais

1. **Quem escreve não valida.** O Corretor nunca julga o próprio material; o Comparador nunca edita.
2. **Nenhuma IA desempata outra.** Divergência e "não verificável" vão para você.
3. **Sem fonte primária, não há "confere".** Todo veredito leva link e data da consulta.
4. **O orquestrador não julga conteúdo jurídico.** Ele distribui as tarefas, controla o status e monta o parecer.
5. **Na dúvida, "não verificável".** Nunca supor, nunca citar de memória.

---

## A equipe

| # | Agente | Recebe | Entrega | Não faz |
|---|---|---|---|---|
| 0 | **Orquestrador** | Pedido de validação de uma aula | Tarefas distribuídas, `painel.md` atualizado, parecer montado | Julgar conteúdo |
| 1 | **Extrator** | A aula | `ficha.md` (afirmações verificáveis) e `dependencias.md` | Pesquisar |
| 2 | **Pesquisador de lei** | Afirmações do tipo *lei* | `pesquisa-lei.md` | Comparar com a aula |
| 3 | **Pesquisador de jurisprudência** | Afirmações do tipo *jurisprudência* | `pesquisa-jurisprudencia.md` | Comparar com a aula |
| 4 | **Conferente** | As pesquisas | `conferencia.md`: a pesquisa se sustenta? | Ver a aula |
| 5 | **Comparador** | Ficha + pesquisa conferida | `parecer.md` com veredito por afirmação | Editar o material |
| 6 | **Você** | Itens *divergente*, *não verificável* e citações de doutrina | Decisão escrita no parecer | — |
| 7 | **Corretor** | Parecer decidido | Correção no material **e** no Vault, aula marcada "Validada em DD/MM/AAAA" | Validar a correção sozinho |

### O que cada um confere

**Extrator.** Uma linha por afirmação: ID, texto exato, tipo (*lei*, *jurisprudência*, *conceito*, *citação doutrinária*), fonte esperada e risco (*alto* para prazos, valores, cabimento de recurso e competência; *médio* e *baixo* para o resto). Só *lei* e *jurisprudência* viram pergunta de pesquisa. Os prompts de cada agente estão em `validacao/prompts/`.

**Pesquisador de lei.** Só o texto compilado do Planalto. Confere: redação atual do dispositivo, se foi alterado ou revogado (e por qual lei), e vacatio legis pendente.

**Pesquisador de jurisprudência.** Portais do STF, do STJ e do CNJ. Confere: súmulas (vinculantes ou não), temas repetitivos e de repercussão geral com o andamento atual, e se o entendimento foi superado ou modulado. Jurisprudência de tribunal estadual só como exemplo, nunca como regra.

**Doutrina fica de fora** (decisão de 13/10). Os livros são pagos e a IA tende a "lembrar" citações que não existem. Conceitos puramente doutrinários não são pesquisados; citações de autor na aula vão para você decidir: manter (conferindo no livro), trocar por explicação sem autor ou remover.

**Conferente.** Recusa a pesquisa que não tiver link para fonte primária, data da consulta e indicação de vigência. Aponta quando as fontes discordam entre si (por exemplo, lei nova que supera uma súmula). Ordem de peso: Constituição e lei > precedentes vinculantes (súmula vinculante, repercussão geral, repetitivo) > súmulas e jurisprudência dominante.

**Comparador.** Um veredito por afirmação:

| Veredito | Quando |
|---|---|
| *confere* | A aula diz o mesmo que a fonte primária |
| *corrigir* | A aula está errada ou desatualizada; vem com redação sugerida |
| *divergente* | Há divergência real nas fontes; a aula deve apresentá-la, não escolher um lado |
| *não verificável* | Não foi possível acessar a fonte primária |

---

## Como o trabalho circula

```
Orquestrador
   │
   ├─► Extrator ──► ficha.md + dependencias.md
   │
   ├─► Pesquisadores (só os necessários para cada afirmação)
   │     • lei            → pesquisa-lei.md
   │     • jurisprudência → pesquisa-jurisprudencia.md
   │
   ├─► Conferente ──► conferencia.md (pesquisa recusada volta ao pesquisador)
   │
   ├─► Comparador ──► parecer.md
   │
   ├─► Você ──► decide divergente e não verificável
   │
   └─► Corretor ──► material + Vault ──► "Validada em DD/MM/AAAA"
                                              │
             vigilância mensal e erros ◄──────┘
             relatados pelos alunos (reabrir)
```

**Arquivos.** Tudo em `validacao/aulas/<matéria>/<aula>/` e no Git. Os modelos ficam em `validacao/modelos/`. Os agentes conversam por arquivos: se a ferramenta que os liga sair do ar, o trabalho continua à mão.

**Status de cada aula** (no `validacao/painel.md`):

| Status | Significa | Quem muda |
|---|---|---|
| `extraindo` | Ficha sendo feita | Orquestrador |
| `pesquisando` | Pesquisadores trabalhando | Orquestrador |
| `conferindo` | Conferente e Comparador trabalhando | Orquestrador |
| `aguardando você` | Há itens *divergente* ou *não verificável* | Orquestrador |
| `corrigindo` | Corretor aplicando o parecer | Orquestrador |
| `validada` | Correções aplicadas e conferidas | Orquestrador |
| `reabrir` | Lei nova, súmula nova, tema julgado ou erro relatado | Vigilância ou você |

---

## Onde cada agente roda

Modelos diferentes reduzem o risco de dois agentes concordarem no mesmo erro. Por isso, os papéis que **julgam** ficam com outro fornecedor (decidido em 13/10).

| Agente | Onde |
|---|---|
| Orquestrador, Extrator, Pesquisadores, Corretor | Claude Code (busca na web nos Pesquisadores) |
| Conferente, Comparador | Codex, com busca na web no Conferente |
| Casos difíceis | ChatGPT com pesquisa aprofundada: tema pendente no STF, divergência recente, portal bloqueado |

Ligação entre eles: Maestri, como na v1. **Decisão pendente:** confirmar se fica no Maestri ou se os agentes rodam como subagentes do Claude Code (mais simples, mas um só fornecedor de modelo).

---

## Fase 1 — Montagem (13 a 17/out)

1. `validacao/modelos/`: `ficha.md`, `dependencias.md`, `pesquisa.md`, `conferencia.md`, `parecer.md`.
2. `validacao/painel.md` com todas as aulas das 3 matérias.
3. `validacao/AGENTS.md`: instruções de cada agente (fontes aceitas, ordem de peso, armadilhas das regras 7 a 14 de `instrucoes-projeto-claude.md`, a regra "sem link não há confere").
4. Os agentes ligados e trocando arquivos.

**Entrega:** uma aula de teste passa por todas as etapas, mesmo que mal.

## Fase 2 — Teste às cegas (18 a 22/out)

1. Rodar uma aula já revisada **sem** mostrar o parecer anterior. Comparar com `revisao-juridica/03-parecer.md`:
   - os erros de gravidade alta conhecidos (por exemplo, PE-060) foram achados?
   - todo *confere* tem link de fonte primária?
   - quanto tempo levou e quanto custou?
2. **Tema 1.255 do STF** (honorários por equidade contra a Fazenda): o Pesquisador de jurisprudência acha o andamento atual? Se não, vai para o ChatGPT, e comparamos.
3. **Decisão:**

| Resultado | O que fazer |
|---|---|
| Acha os erros conhecidos e cita as fontes | Segue para a Fase 3 |
| Acerta lei, falha em jurisprudência | Jurisprudência passa sempre pelo ChatGPT |
| Falha nos erros de gravidade alta | Ajustar o `AGENTS.md` e repetir; se falhar de novo, validação manual com ChatGPT nas afirmações de risco alto |

## Fase 3 — Matérias de lançamento (23/out a 01/nov)

1. As 3 matérias pelo fluxo completo. Se o tempo apertar, primeiro todas as afirmações de **risco alto**; as de risco médio e baixo seguem depois do lançamento.
2. Trechos reescritos na checagem de originalidade (Etapa 3 do roadmap da Kiwify) entram pelo fluxo antes de irem para o ar.
3. Pontos em aberto da revisão de outubro: Tema 1.255, citações de doutrina (decisão sua), exemplo do TJSC (`procesp3.js:10`).
4. `dependencias.md` de todas as aulas. Sem ele não existe vigilância.

## Fase 4 — Decisões e publicação (02 a 04/nov)

1. Você decide os itens pendentes.
2. O Corretor aplica tudo e marca as aulas.
3. **Critério para vender:** nenhuma afirmação de risco alto com *corrigir* ou *não verificável* aberta.

## Fase 5 — Manutenção (a partir do piloto)

1. **Erros relatados pelos alunos** (botão "Encontrei um erro", ativo desde o piloto de 26/10): cada relato vira `reabrir` e entra pelo fluxo só com a afirmação questionada. Gravidade alta: corrigir em até 3 dias.
2. **Vigilância mensal**, no dia 1º: os Pesquisadores procuram leis novas, súmulas, temas julgados e alterações que atinjam os `dependencias.md`. O resultado vai para `validacao/vigilancia/AAAA-MM.md`, e as aulas afetadas passam para `reabrir`.
3. **Revalidação anual** de cada matéria, mesmo sem mudança encontrada.
4. **Aprendizado:** cada erro que escapou vira uma regra nova no `AGENTS.md`.
5. **Matérias novas** só saem de "Em breve" depois de passar pelo fluxo.

---

## Riscos

| Risco | Como reduzir |
|---|---|
| Os agentes concordam num erro | Modelos diferentes; link obrigatório; você confere links por amostragem |
| Validação de memória | Busca na web obrigatória; *confere* sem link é recusado pelo Conferente |
| Citação doutrinária errada | Doutrina fora da pesquisa; cada citação passa por você |
| Portal oficial bloqueia o acesso (já houve erro 403 no STF) | *Não verificável* e envio ao ChatGPT ou a você |
| Custo e tempo crescem | Validar a ficha, não a aula inteira; cada afirmação vai só ao pesquisador do seu tipo; revalidar só as aulas afetadas |
| A lei muda e ninguém percebe | `dependencias.md` + vigilância mensal + botão de erro |
| Material e Vault se desencontram | Toda correção vai para os dois, como manda o `CONTEXTO.md` |

---

## Calendário

| Período | Fase | Marco |
|---|---|---|
| 13–17/out | 1. Montagem | Uma aula passa pelo fluxo inteiro |
| 18–22/out | 2. Teste às cegas | Decisão sobre quem pesquisa o quê |
| 23/out–01/nov | 3. Matérias de lançamento | Risco alto validado nas 3 matérias |
| 02–04/nov | 4. Decisões e publicação | Critério para vender cumprido |
| 26/out → | 5. Manutenção | Fila de erros; 1º relatório de vigilância em 01/12 |
