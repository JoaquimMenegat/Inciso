# Contexto do projeto Inciso

Leia este arquivo primeiro. Ele resume as decisões já tomadas, para qualquer pessoa ou IA que for trabalhar no projeto.

## O que é

O **Inciso** é uma plataforma de estudo para estudantes de Direito. O slogan é "Direto, incisivo."

Não vendemos PDF. Cada matéria é uma trilha de aulas interativas: o aluno simula, classifica, decide. A plataforma mede o progresso: painel, desempenho por tema, revisão espaçada de flashcards e banco de questões.

O projeto nasceu do interesse de um professor em vender material de estudo. O professor deve ser o parceiro de conteúdo; o papel e a remuneração dele ainda estão em aberto.

## Regras de conteúdo

- **O material é do Inciso:** nunca citar universidade, semestre ou "fase", número de aula, nome de professor ou termos próprios de um professor.
- **Origem das notas:** a base veio das notas de estudo de um Obsidian Vault. Pela Lei 9.610/98, art. 46, IV, anotações de aula não podem ser publicadas sem autorização de quem deu a aula. Por isso, o plano é reescrever a partir de fontes primárias (lei, súmulas, jurisprudência), com redação própria.
- **Citações:** toda citação traz artigo e lei, ou o número da súmula e o tribunal.
- **Revisão jurídica:** obrigatória antes de vender. A primeira (10/2026) cobriu TGP, Processo de Conhecimento e Procedimentos Especiais e Recursos, com três agentes: leitor (extrai as afirmações), pesquisador (confere lei, STJ, STF e doutrina) e validador (dá o parecer). Os relatórios estão em `revisao-juridica/`.
- **Jurisprudência:** só STJ e STF (e corte internacional em tema de direitos humanos). Julgados de tribunais estaduais foram retirados.
- **Material a partir do Vault:** siga as regras 7 a 16 de `instrucoes-projeto-claude.md`. Cada correção feita no material também vai para a nota de origem no Vault, seguindo as regras do Vault (texto corrigido com a marca *(C, data)* nas notas sem `(C)`; julgados, súmulas e citações literais ficam intactos, com aviso ⚖️ ao lado).

## Decisões de negócio (10/10/2026)

- **Venda como pessoa física**, sem abrir empresa. O pagamento passa pela Hotmart ou pela Kiwify.
- **Pagamento único** pelo acesso à plataforma, **sem atualizações** incluídas.
  - O acesso deve ter prazo definido, não "vitalício".
  - Erros de conteúdo continuam sendo corrigidos para todos.
- **Mensalidade só se a ideia for validada**, ou seja, se houver pessoas usando e gostando. Isso se mede pelo retorno dos alunos, pelas aulas concluídas, pela avaliação ao fim de cada aula, pelos poucos reembolsos e pelas indicações.
- **Lançamento com as 3 matérias de processo:**
  - Teoria Geral do Processo;
  - Processo de Conhecimento;
  - Procedimentos Especiais e Recursos.

  As outras 10 aparecem como "Em breve".
- **Meta:** abrir as vendas em fevereiro de 2027, com um beta durante as provas de dezembro.
- O roadmap completo está em `prototipo/roadmap-inciso.md`.

## Identidade visual

O manual está em `Identidade Visual/Inciso Identidade.dc.html`.

**Cores:**
- Tinta: `#1B2540`
- Papel: `#EEF1F5`
- Folha: `#FFFFFF`
- Selo (vermelho): `#A3263A`
- Latão (dourado): `#B98A2E`
- Sálvia (verde): `#4F7464`
- Noite, fundo escuro: `#131A2B`

**Fontes:** Libre Caslon Text para títulos e números; Archivo para a interface.

**Formas:** cantos retos, filetes de 2px, algarismos romanos seguidos de travessão ("IV –").

**Preferências do dono do projeto:**
- Menos azul. Usar mais o vermelho (ações e destaques), o dourado (numerais e títulos) e o verde (progresso).
- Nada de padrão de fundo com números; nada de grades de blocos brancos.
- Muitas animações e ícones, com movimento fluido. Respeitar quem desativa animações no sistema.

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
2. Escrever o padrão de aula do Inciso, usando Teoria Geral do Processo como modelo.
3. Separar o conteúdo do código, com as aulas em arquivos JSON ou Markdown.
4. Construir a plataforma real: código próprio recomendado (Next.js + Supabase + Hotmart/Kiwify via webhook).
