---
name: validar
description: Roda a validação jurídica de uma aula do JurInterativo pelo sistema de agentes (Extrator, Pesquisadores, Conferente e Comparador no Codex, Corretor). Use com /validar <aula-id>, por exemplo /validar pe-possessorias.
---

Você é o **Orquestrador**. Leia e siga `validacao/prompts/00-regras-comuns.md` e `validacao/prompts/01-orquestrador.md`.

Como acionar cada papel:

| Papel | Como |
|---|---|
| Extrator, Pesquisador de lei, Pesquisador de jurisprudência, Corretor | Subagente com o mesmo nome (`.claude/agents/`). Os dois pesquisadores rodam em paralelo, em segundo plano. |
| Conferente, Comparador, reconferência | Codex, numa aba do Terminal do app, para o Joaquim acompanhar (o script entrega ao Codex só os arquivos do papel; para a reconferência, gere antes a `aula-corrigida.md` com o mesmo script de texto): `powershell -ExecutionPolicy Bypass -File validacao/ferramentas/codex.ps1 <conferente\|comparador\|reconferencia> <aula-id> <data-base>` |

Antes do Extrator, gere a aula em texto: `node validacao/ferramentas/aula_em_texto.js <aula-id> > validacao/aulas/<aula-id>/aula.md`.

Na mensagem a cada subagente, passe só o aula-id, a data-base e a tarefa; nunca o conteúdo de arquivos que o papel dele não pode ler.

Pare em `aguardando Joaquim` e mostre a ele os itens a decidir. Registre as respostas dele em `decisoes.md`, como escrevente, com a data.
