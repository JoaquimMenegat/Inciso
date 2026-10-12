# Materiais do Inciso — pacote para o Claude Code

Materiais completos das três matérias do lançamento, criados no Claude.ai.

## Conteúdo do pacote

```
inciso-materiais/
├── dist/                      páginas prontas (HTML único, abrem direto no navegador)
│   ├── inciso-tgp.html            Teoria Geral do Processo — 16 módulos, 51 questões
│   ├── inciso-conhecimento.html   Processo de Conhecimento — 16 módulos, 45 questões
│   └── inciso-procesp.html        Procedimentos Especiais e Recursos — 20 módulos, 61 questões
├── src/
│   ├── engine.js              motor: renderiza módulos, blocos, calculadoras, testes e progresso
│   ├── engine.css             identidade visual (tinta, papel, selo, latão, sálvia; Libre Caslon + Archivo)
│   ├── build.py               junta engine + conteúdo em um HTML por matéria
│   └── conteudo/              conteúdo separado do código (um arquivo JS por matéria, em partes)
└── fontes/                    notas destiladas da Vault usadas como base (NÃO publicar)
```

Para regerar as páginas: `cd src && python3 build.py` (ou `python3 build.py tgp`).

## Formato do conteúdo

Cada matéria é um objeto `COURSE` com `mods[]`. Cada módulo tem `id`, `group`, `title`, `intro`, `blocks[]` e `quiz[]`.
Tipos de bloco (campo `t`): `p`, `callout`, `flips`, `table`, `keys`, `vs`, `tl`, `svg`, `juris`, `arts`,
`chooser`, `sorter`, `steps`, `wizard`, `gauge`, `calc` (`prazo`, `valorcausa`, `honor`, `forca`, `resolucao`, `inventario`, `alvara`).
Questões: `[pergunta, [opções], índiceCorreto, explicação]`. O helper `a('art. 5º')` marca referências legais.

## Atenção antes de subir

- O repositório `JoaquimMenegat/Inciso` está **público**. A pasta `fontes/` deriva das notas de aula: mantenha fora do Git (`.gitignore`) ou torne o repositório privado.
- O conteúdo segue a regra do CONTEXTO.md (redação própria, sem citar faculdade ou professor), mas ainda precisa da revisão jurídica.
- Pontos para a revisão: inventário extrajudicial com testamento ou incapaz (normas do CNJ e da CGJ-SC); a calculadora de prazo não considera feriados locais; o módulo "Mapa dos recursos em espécie" foi escrito a partir da lei, sem nota de base.

## Prompt sugerido para o Claude Code

> Copiei a pasta `inciso-materiais` para a raiz do repositório. Leia o LEIA-ME.md e o CONTEXTO.md. Quero integrar esses materiais ao protótipo: (1) coloque `fontes/` no `.gitignore`; (2) proponha como converter o formato de blocos de `src/conteudo` para o formato `defCourse`/`defLesson` do protótipo, ou o contrário, e qual dos dois deve virar o padrão de aula (passo 2 da Fase 1 do roadmap); (3) liste os tipos de bloco que existem só de um lado. Não altere o conteúdo jurídico sem me perguntar.
