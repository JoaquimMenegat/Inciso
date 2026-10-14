# Contexto do projeto JurInterativo

Leia este arquivo primeiro. Ele resume as decisões já tomadas, para qualquer pessoa ou IA que for trabalhar no projeto.

> **Marca renomeada (13/10/2026): o Inciso passa a se chamar JurInterativo.** Slogan e conceito ("I –", inciso) mantidos. Wordmark em Libre Caslon 700 com o pingo do último "i" como selo vermelho; ícone/favicon é o monograma "Ji". Nomes de arquivo e de código com "inciso" continuam por compatibilidade. Ver `Identidade Visual/CLAUDE.md`.

## O que é

O **JurInterativo** é uma plataforma de estudo para estudantes de Direito. O slogan é "Direto, incisivo."

Não vendemos PDF. Cada matéria é uma trilha de aulas interativas: o aluno simula, classifica, decide. A plataforma mede o progresso: painel, desempenho por tema, revisão espaçada de flashcards e banco de questões.

O projeto nasceu do interesse de um professor em vender material de estudo. **Decisão de 12/10/2026: não haverá professor parceiro.** O material é uma recriação própria; as aulas da faculdade serviram só de roteiro, e a checagem de originalidade (`validacao/originalidade.md`) confirma isso antes da venda.

## Regras de conteúdo

- **O material é do JurInterativo:** nunca citar universidade, semestre ou "fase", número de aula, nome de professor ou termos próprios de um professor.
- **Origem das notas:** a base veio das notas de estudo de um Obsidian Vault. Pela Lei 9.610/98, art. 46, IV, anotações de aula não podem ser publicadas sem autorização de quem deu a aula. Por isso, o plano é reescrever a partir de fontes primárias (lei, súmulas, jurisprudência), com redação própria.
- **Citações:** toda citação traz artigo e lei, ou o número da súmula e o tribunal.
- **Revisão jurídica:** obrigatória antes de vender. A primeira (10/2026) cobriu TGP, Processo de Conhecimento e Procedimentos Especiais e Recursos, com três agentes: leitor (extrai as afirmações), pesquisador (confere lei, STJ, STF e doutrina) e validador (dá o parecer). Os relatórios estão em `revisao-juridica/`.
- **Jurisprudência:** só STJ e STF (e corte internacional em tema de direitos humanos). Julgados de tribunais estaduais foram retirados.
- **Material a partir do Vault:** siga as regras 7 a 16 de `instrucoes-projeto-claude.md`. Cada correção feita no material também vai para a nota de origem no Vault, seguindo as regras do Vault (texto corrigido com a marca *(C, data)* nas notas sem `(C)`; julgados, súmulas e citações literais ficam intactos, com aviso ⚖️ ao lado).

## Decisões de negócio (10/10/2026)

- **Venda como pessoa física** (Joaquim, no CPF), sem abrir empresa. O pagamento passa pela Kiwify.
- **Pagamento único** pelo acesso à plataforma, **sem atualizações** incluídas.
  - O acesso deve ter prazo definido, não "vitalício".
  - Erros de conteúdo continuam sendo corrigidos para todos.
- **Mensalidade só se a ideia for validada**, ou seja, se houver pessoas usando e gostando. Isso se mede pelo retorno dos alunos, pelas aulas concluídas, pela avaliação ao fim de cada aula, pelos poucos reembolsos e pelas indicações.
- **Lançamento com as 3 matérias de processo:**
  - Teoria Geral do Processo;
  - Processo de Conhecimento;
  - Procedimentos Especiais e Recursos.

  As outras 10 aparecem como "Em breve".
- **Meta (atualizada em 12/10/2026):** publicar na Kiwify até 04/11/2026, depois de um piloto de uma semana. Passos em `prototipo/roadmap-kiwify.md`.
- **Canal de acesso (12/10/2026):** no lançamento, o aluno compra na **Kiwify** e abre o JurInterativo pela área de membros (link ou iframe para o site hospedado). Sem login: o progresso fica no navegador, com aviso no primeiro acesso, exportar e importar e lembrete de backup. A plataforma própria com login vem depois, se as vendas validarem a ideia. Passos em `prototipo/roadmap-kiwify.md`.
- O roadmap completo está em `prototipo/roadmap-inciso.md`.

## Identidade visual (v2, 12/10/2026)

Manuais em `Identidade Visual/`: `Inciso Identidade`, `Inciso Sistema` (v2) e `Inciso Guia de Movimento`. No protótipo, a camada `prototipo/src/theme-v2.css` é a última do build.

- **Sempre modo escuro:** fundo Noite `#131A2B`; superfícies `#1B2540` (a tinta vira superfície); texto Papel `#EEF1F5`.
- **Cores de apoio:** Selo `#E0566B` (ações e alertas), Latão `#D9AE57` (numerais e travessões), Sálvia `#82B29B` (progresso e acerto, sempre).
- **Cor por matéria:** seis tons do manual, usados só em faixa da capa, etiqueta e numerais da trilha. Lançamento: TGP oliva `#B4C46E`, Processo de Conhecimento ameixa `#D08FB2`, Procedimentos Especiais violeta `#A99DE0`. O mapa está em `MATOF`, em `90-app.js`.
- **Tipografia:** Archivo para tudo, com títulos em 600 e espaçamento apertado (escala ≈ 1,33). Libre Caslon só no monograma "I –".
- **Forma:** cantos de 16px (cartões), 10px (botões) e 8px (etiquetas); filetes de 2px; sem sombra nem brilho.
- **Movimento:**
  - hover em 160 ms;
  - clique em 120 ms (o elemento afunda para 97%);
  - ícones com gesto de 520 ms;
  - abas deslizam na ordem da barra (360 ms);
  - abrir uma aula empurra a tela pela direita;
  - flashcard vira em 560 ms;
  - acerto em 480 ms e erro em 420 ms;
  - conquista com carimbo ao concluir a aula;
  - no máximo um carimbo por tela.
- **Preferências do dono, mantidas:**
  - navegação horizontal no topo, com só o monograma "I –";
  - nada de padrão de fundo com números (os traços vermelhos continuam);
  - nada de grades de blocos brancos;
  - vermelho, dourado e verde presentes;
  - respeito a quem desativa animações.

## O protótipo

- **Fonte:** `prototipo/src/`. O comando `python prototipo/build.py` gera `prototipo/vade-sucessoes.html`, um arquivo único. Nunca editar o HTML gerado à mão.
- **Matérias:** um arquivo JS por matéria (`40-pena.js` … `51-administrativo.js`; Sucessões está em `10-content.js` e `30`–`32`).
  - Cada matéria é registrada com `defCourse(id,{...})`.
  - Cada aula é registrada com `defLesson(id,{...})`.
- **Matérias de processo (pacote do Claude.ai):** as três matérias de lançamento vêm do pacote `inciso-materiais`, com 52 módulos e 157 questões, criado no projeto do Claude.ai.
  - Importação: `python prototipo/importar_pacote.py <pasta inciso-materiais>`. Ela gera `54-pk-engine.js` (motor e CSS do pacote) e `6N-pk-<matéria>.js` (conteúdo); depois, rode `build.py`. Os arquivos gerados não devem ser editados à mão.
  - `55-pack.js` converte cada módulo em aula: os blocos do pacote rodam isolados em shadow DOM e mantêm as animações originais; o quiz vai para o banco de questões, e os cartões que viram viram flashcards.
  - As versões antigas dessas três matérias estão em `prototipo/legado/`.
  - A pasta `fontes/` do pacote nunca vai para o Git, porque deriva de notas de aula.
- **Matérias liberadas:** definidas por `LIVE`, no início de `prototipo/src/js/90-app.js`.
- **Componentes:** os blocos interativos reutilizáveis ficam em `20-widgets.js`. As animações da marca ficam em `05-motion.js`; os ícones, em `06-icons.js`.
- **Progresso:** salvo no navegador (localStorage). Ainda não há login nem banco de dados.

## Próximos passos

1. Fase 0 do roadmap: direitos sobre o conteúdo, acordo com o professor, marca no INPI e domínio.
2. Escrever o padrão de aula do JurInterativo, usando Teoria Geral do Processo como modelo.
3. Separar o conteúdo do código, com as aulas em arquivos JSON ou Markdown.
4. Preparar o protótipo para venda na Kiwify (Etapa 3 de `prototipo/roadmap-kiwify.md`).
5. Depois do lançamento, se validar: plataforma própria (Next.js + Supabase + Kiwify via webhook).
