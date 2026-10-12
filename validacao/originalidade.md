# Checagem de originalidade

*Versão 1 — 12/10/2026*

**Objetivo:** confirmar, antes da venda, que o material do Inciso é uma recriação própria, e não uma cópia do material do professor.

## O que precisa ser verificado

A lei de direito autoral (Lei 9.610/98) não protege ideias, conceitos, métodos nem o texto da lei (art. 8º, I e IV). Ela protege a **forma de expressão**. Por isso, usar o mesmo tema e citar os mesmos artigos não é problema. O risco está em reproduzir:

- frases ou trechos com a mesma redação;
- paráfrases tão próximas que só trocam palavras;
- exemplos, casos, personagens e analogias criados pelo professor;
- quadros, esquemas e mapas mentais com a mesma organização;
- exercícios e questões do professor, mesmo adaptados;
- a mesma seleção e ordem de tópicos, quando forem uma escolha própria do professor e não a ordem da lei;
- julgados escolhidos pelo professor, sobretudo os de tribunal estadual.

Esta checagem reduz o risco, mas não é parecer jurídico. Para mais segurança, leve o relatório final a um advogado de direito autoral.

## Fontes comparadas

| Matéria | Material do professor | Notas do Vault |
|---|---|---|
| Teoria Geral do Processo | `Área de Trabalho/Faculdade/3º Semestre/Teoria geral dos processos` | `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos` |
| Processo de Conhecimento | `Área de Trabalho/Faculdade/4º Semestre/Processo de Conhecimento - Procedimento Comum` | `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento` |
| Procedimentos Especiais e Recursos | `Área de Trabalho/Faculdade/6º Semestre/1. Procedimentos Especiais e Recursos` | `Obsidian Vault/Faculdade/6ª Fase/2. Procedimentos Especiais` |

O material conferido é o pacote `prototipo/pacotes/inciso-materiais/src/conteudo/`.

## A equipe

**Regra central:** quem reescreve não confere, e quem confere não reescreve.

| Quem | Lê | Faz | Não faz |
|---|---|---|---|
| **1. Comparador** (script, sem IA) | Material, arquivos do professor, Vault | Acha trechos de 8 palavras ou mais iguais nos dois lados | Julgar se é problema |
| **2. Inventariante** (agente) | **Só** os arquivos do professor e o Vault | Lista as marcas do professor (exemplos, casos, analogias, quadros, exercícios, ordem dos tópicos, julgados) | Ver o material do Inciso |
| **3. Auditor** (agente) | O material do Inciso, o inventário e o resultado do Comparador | Classifica cada achado, aula por aula | Reescrever |
| **4. Reescritor** (agente) | O achado, a lei e as regras de `instrucoes-projeto-claude.md` | Reescreve com redação e exemplos próprios | Conferir o próprio trabalho |
| **5. Conferente** (agente) | O trecho novo | Repete o Comparador e o Auditor no trecho e confere se continua juridicamente certo | Reescrever |
| **Você** | Os amarelos e as discordâncias | Decide e dá o aval final | — |

**Classificação do Auditor:**
- **Verde:** só a ideia, o conceito ou o texto da lei. Fica como está.
- **Amarelo:** paráfrase próxima, exemplo parecido, mesma ordem de tópicos. Você decide se reescreve.
- **Vermelho:** cópia literal de redação do professor, exemplo, caso ou exercício dele, quadro reproduzido. Reescrever sempre.

## Fluxo

```
Comparador ─┐
            ├──► Auditor ──► verde: fica
Inventário ─┘                amarelo: você decide ──┐
                             vermelho: ─────────────┴──► Reescritor ──► Conferente ──► registro
```

## Onde ficam os arquivos

- `validacao/originalidade.md` (este arquivo): o método e os resumos, **sem trechos do material do professor**.
- `validacao/originalidade/privado/`: inventário e auditoria detalhada. Contêm trechos do material do professor e **nunca vão para o Git**, porque o repositório é público.
- `validacao/originalidade/registro.md`: o que foi mudado, quando e por quê. Serve de prova de criação independente.

## Primeira rodada — Comparador (12/10/2026)

Comparação literal por trechos de 8 palavras, sem acentos nem pontuação.

| Matéria | Arquivos do professor lidos | Em comum com o professor | Em comum com o Vault |
|---|---|---|---|
| Teoria Geral do Processo | 2 de 21 ⚠️ | 0 trechos | 86 trechos (0,9%) |
| Processo de Conhecimento | 7 | 1 trecho (0,0%) | 30 trechos (0,4%) |
| Procedimentos Especiais e Recursos | 18 | 4 trechos (0,0%) | 139 trechos (1,3%) |

**O que isso mostra:**
- **Quase não há cópia literal do material do professor.** Os poucos trechos em comum são expressões técnicas curtas ("acórdão do STF ou STJ em recursos repetitivos", "decisões do STF em controle concentrado de constitucionalidade").
- **Um achado real:** o exemplo com a "1ª Câmara de Direito Civil do TJSC" (`procesp3.js:10`) veio de um slide do professor. Classificação: vermelho. Já estava na lista para trocar.
- **O que há em comum com o Vault** é, na maior parte, texto de lei e correções da revisão jurídica que foram aplicadas nos dois lados (marcas *(C)*). Não indica cópia, mas o Auditor deve conferir as passagens mais longas, como a lista de preliminares da contestação (Processo de Conhecimento) e a citação refeita por edital (Teoria Geral do Processo).

**Limites desta rodada:**
- ⚠️ Os slides de Teoria Geral do Processo e de Processo de Conhecimento estão no formato antigo `.ppt`, que o script não lê. É preciso convertê-los para `.pptx` ou PDF e repetir a comparação.
- PDFs escaneados (só imagem) não têm texto e também ficaram de fora.
- A comparação literal não pega paráfrase, exemplos, quadros nem ordem dos tópicos. Isso é o trabalho do Inventariante e do Auditor.

## Próximos passos

1. Converter os `.ppt` e repetir o Comparador.
2. Rodar o Inventariante, uma vez por matéria.
3. Rodar o Auditor, aula por aula.
4. Você decide os amarelos; o Reescritor e o Conferente tratam os vermelhos.
