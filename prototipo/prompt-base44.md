# Prompt para o Base44 — Inciso

> Cole o texto abaixo no Base44 e anexe junto o arquivo `Inciso Identidade.dc.html` (ou prints dele) da pasta "Identidade Visual".

---

Crie o **Inciso**, uma plataforma web de estudo para estudantes de Direito no Brasil. Toda a interface em português do Brasil. Slogan: **"Direto, incisivo."**

## A ideia

O Inciso não vende PDF. Cada matéria é uma trilha de aulas **interativas** (o aluno mexe, simula, classifica, decide) e a plataforma **mede o progresso**: o aluno vê o que já domina, o que está fraco e o que revisar hoje. O conteúdo é próprio do Inciso: nunca cite universidade, semestre/fase, número de aula ou nome de professor.

## Usuários

- **Aluno** (padrão): estuda, responde questões, revisa, acompanha o desempenho.
- **Admin/autor**: cadastra matérias, aulas, questões e flashcards por um painel simples.

Login por e-mail. Cada aluno tem seu próprio progresso, separado por matéria.

## Entidades (dados)

- **Materia**: nome, área (Direito Civil, Direito Penal, Direito Processual, Direito Constitucional, Direito Público, Formação geral), descrição, ordem, publicada (sim/não).
- **Unidade**: matéria, título (ex.: "Parte I — Sucessão em geral"), ordem.
- **Aula**: unidade, número, título, subtítulo/lead, tópico principal, tempo estimado, lista de **seções**.
- **Secao** (dentro da aula): título curto para o índice, título, lead, tipo de bloco e conteúdo. Tipos de bloco:
  - `texto` (rich text com artigos de lei destacados);
  - `cartoes_virar` (frente/verso);
  - `artigos` (artigo de lei com explicação ao clicar);
  - `classificar` (arrastar ou tocar itens para a categoria certa, com correção);
  - `linha_do_tempo` (etapas que aparecem em sequência);
  - `escolha` (escolhe uma opção e vê a consequência);
  - `assistente` (perguntas sim/não em sequência que levam a um veredito, ex.: "Cabe tutela de urgência?");
  - `abas` (comparar institutos lado a lado);
  - `arvore` (árvore genealógica/organograma clicável);
  - `simulador` (calculadora com campos e resultado explicado; ver exemplos abaixo).
- **Questao**: matéria, tópico, enunciado, alternativas (embaralhar na exibição), correta, explicação com o artigo de lei.
- **Flashcard**: matéria, tópico, frente, verso.
- **ProgressoAula**: aluno, aula, seções concluídas, concluída (sim/não), data.
- **Tentativa**: aluno, questão, acertou, data, tempo gasto.
- **Revisao**: aluno, flashcard, intervalo, próxima data, facilidade (repetição espaçada estilo SM-2, com botões "Errei / Difícil / Bom / Fácil").

## Telas

1. **Matérias** (início): cartões agrupados por área, cada um com nome, nº de aulas, barra de progresso e "continuar de onde parou". No topo, um resumo: matérias em andamento, aulas concluídas, questões respondidas.
2. **Painel** da matéria: banner com a próxima aula recomendada, cartões grandes com números (aulas concluídas, % de acerto, revisões para hoje, dias seguidos de estudo) e "pontos fracos" (tópicos com menor acerto).
3. **Trilha**: aulas agrupadas por unidade, numeradas em algarismos romanos, com estado (não iniciada / em andamento / concluída) e uma linha vertical que liga as aulas.
4. **Aula**: capa azul-marinho com padrão de fundo, número em romano e título grande; índice lateral (ou no topo, no celular) com as seções numeradas; seções que aparecem com animação ao rolar; no fim, um **teste rápido** de 5 questões que alimenta o desempenho; botão "Concluir aula".
5. **Revisão**: flashcards do dia (repetição espaçada), um por vez, com virada animada.
6. **Questões**: banco filtrável por tópico, modo "simulado" com cronômetro e correção comentada.
7. **Desempenho**: acerto por tópico (barras), evolução por semana (linha), mapa de calor de dias estudados, tópicos para reforçar.
8. **Admin**: CRUD de matérias, unidades, aulas (editor de seções por tipo), questões e flashcards; importação em massa por JSON/CSV.

Navegação: barra superior no computador; barra inferior com ícones no celular. Seletor de matéria sempre visível no topo.

## Exemplos de simuladores (para entender o nível de interação)

- **Sucessões**: partilha da herança. O aluno escolhe herdeiros (cônjuge, filhos, pais, irmãos) e o regime de bens; a tela mostra a divisão em barras e frações, com os artigos aplicados.
- **Teoria da Pena**: dosimetria em três fases (pena-base, agravantes/atenuantes, causas de aumento/diminuição) → pena final e regime inicial; calculadora de prescrição.
- **Teoria Geral do Processo**: calendário que conta prazo em dias úteis a partir da intimação, com prazo em dobro.
- **Obrigações**: dívida solidária com devedor insolvente, mostrando quanto cada um paga.
- **Contratos**: arras (sinal), mostrando quem ganha e quem perde em cada cenário.
- **Organização do Estado**: tramitação de uma PEC, etapa por etapa.

Construa o tipo `simulador` como componente reutilizável, configurado por dados, e implemente pelo menos o da partilha de Sucessões como exemplo completo.

## Identidade visual (siga o arquivo anexo)

Estilo editorial jurídico, sóbrio e preciso, como um código de leis bem diagramado, mas moderno.

- **Cores**:
  - papel `#EEF1F5`, folha `#FFFFFF`, tinta (texto e azul-marinho) `#1B2540`, texto secundário `#59627A`;
  - linhas `#C8CFDB`, fundo suave `#E5E9F0`, trilho de progresso `#DCE1EA`;
  - **selo** (vermelho, destaque e erro) `#A3263A`;
  - **latão** (dourado, detalhes e numerais) `#B98A2E`, em texto `#86621A`;
  - **sálvia** (verde, acerto e concluído) `#4F7464`, fundo `#E3EDE8`, texto `#33503F`;
  - fundo invertido (capas e banners) `#1B2540` com texto `#EEF1F5` e latão claro `#D9AE57`.
- **Tipografia**: *Libre Caslon Text* (serifada) para títulos, números e citações de lei; *Archivo* (sem serifa) para interface e texto corrido.
- **Forma**: cantos **retos** (sem arredondamento), filetes de 2px em tinta, muito respiro, grid limpo.
- **Numeração**: algarismos romanos seguidos de um traço em latão (ex.: "IV —") nas aulas e seções.
- **Selo**: elemento circular estilo carimbo com o número da aula, usado nas capas.
- **Animações** (curtas, `cubic-bezier(.2,.8,.2,1)`):
  - elementos sobem e aparecem ao entrar na tela;
  - números contam até o valor final;
  - o selo "carimba" ao concluir;
  - linhas se desenham;
  - o título da capa aparece letra a letra.

  Respeite `prefers-reduced-motion`.
- **Abertura**: animação do logotipo uma vez por sessão.
- Totalmente responsivo; no celular, margem lateral de 16px e nada de rolagem horizontal.

## Dados iniciais

Crie a matéria **Direito das Sucessões** completa como exemplo:
- **Parte I**: abertura da sucessão, espólio, renúncia, cessão, exclusão;
- **Parte II**: vocação hereditária, cônjuge, ascendentes, colaterais, herança jacente;
- **Parte III**: testamento e suas formas.

Para essa matéria, inclua cerca de 20 questões e 20 flashcards. Cadastre também as demais matérias, só com nome e área, sem conteúdo:
- Responsabilidade Civil
- Obrigações
- Contratos
- Teoria da Pena
- Crimes em Espécie
- Teoria Geral do Processo
- Processo de Conhecimento
- Procedimentos Especiais e Recursos
- Teoria da Constituição
- Organização do Estado e Direito Eleitoral
- Direito Administrativo
- Filosofia e Argumentação Jurídica

## Prioridade

Comece por:
1. Entidades e login.
2. Tela Matérias, Trilha e Aula com os tipos de bloco.
3. Teste no fim da aula gravando as tentativas.
4. Painel e Desempenho lendo esses dados.

Depois:
5. Revisão espaçada.
6. Banco de questões.
7. Admin.
