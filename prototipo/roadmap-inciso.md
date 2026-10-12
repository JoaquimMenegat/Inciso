# Roadmap Inciso — do protótipo à venda

*Versão 1 — 10/10/2026*

**Meta:** lançar a venda em **fevereiro de 2027**, no começo do semestre letivo, que é quando o aluno procura material.

**Por que essa data:**
- Novembro e dezembro são época de provas finais, o melhor momento para testar com alunos de verdade.
- Janeiro serve para ajustar.
- Fevereiro abre as vendas.

---

## Onde estamos hoje

| Temos | Falta |
|---|---|
| Base de estudo no Obsidian (13 matérias) | Direito de vender esse conteúdo (ver Fase 0) |
| Protótipo funcionando: 13 matérias, 56 aulas, 288 questões, simuladores | Padrão de aula definido; o conteúdo hoje está misturado com o código |
| Identidade visual, nome e logo | Revisão jurídica do conteúdo |
| Motor de aulas interativas: blocos, animações, testes, progresso | Plataforma real: login, banco de dados, pagamento |
| | Forma de cobrança (no CPF), termos de uso, política de privacidade, preço |

---

## Fase 0 — Fundamentos (semanas 1 e 2 · até 24/out)

Esta fase trava todas as outras. Não adianta construir antes de resolvê-la.

1. **Direitos sobre o conteúdo (o ponto mais importante).**
   - A Lei 9.610/98, art. 46, IV, permite ao aluno anotar as aulas, mas **proíbe publicá-las sem autorização prévia e expressa de quem as ministrou**. Como as notas do Vault vêm de aulas, há dois caminhos:
     - **a)** autorização por escrito de cada professor cujas aulas originaram o material;
     - **b)** reescrever o conteúdo a partir de fontes primárias (lei, súmulas, jurisprudência) e com redação própria, usando o Vault só como roteiro do que estudar.
   - **Recomendação:** use o caminho (b) como regra e o (a) só com o professor parceiro.
2. **Acordo com o professor parceiro.** Contrato escrito definindo:
   - o papel dele: autor, revisor ou garoto-propaganda;
   - a remuneração: percentual ou valor fixo por matéria;
   - quem é dono do conteúdo;
   - o uso do nome dele;
   - o que acontece se ele sair.
3. **Sócios e papéis.** Quem faz conteúdo, quem faz plataforma, quem vende. Anote por escrito, mesmo que sejam só vocês dois.
4. **Marca.**
   - Busque "Inciso" no INPI, nas classes 41 (educação) e 9/42 (software).
   - Verifique o domínio `inciso.com.br` (ou alternativas) e os @ nas redes.
   - Registre o que estiver livre.
5. **Público inicial.** Recomendo **alunos de graduação** (provas da faculdade), com a OAB como expansão. O conteúdo atual é de graduação, e concorrer de cara com os cursinhos da OAB é caro.
6. **Página de espera.** Uma página simples com o vídeo de uma animação e um campo de e-mail. Ela começa a juntar interessados desde já.

**Entrega:** decisão sobre os direitos, contrato com o professor assinado (ou em minuta), marca verificada e página de espera no ar.

---

## Fase 1 — Padrão e estrutura do conteúdo (semanas 2 a 6 · até 21/nov)

É o coração do Inciso: transformar o que existe em um **sistema de produção de aulas**.

1. **Definir o "padrão de aula Inciso".** Um documento curto que diz:
   - **Estrutura fixa:**
     - capa;
     - "o que você vai aprender";
     - 3 a 6 seções;
     - "artigos-chave";
     - teste de 5 questões;
     - flashcards.
   - **Tamanho:** de 15 a 25 minutos por aula.
   - **Interação:** cada aula precisa de pelo menos um bloco interativo. A seção lista quando usar cada tipo de bloco: cartões, classificar, linha do tempo, assistente, simulador etc.
   - **Tom de voz:** direto e incisivo, com exemplos do dia a dia, sem "juridiquês" desnecessário.
   - **Citações:** sempre artigo + lei; súmula com número e tribunal.
   - **Proibido:** referência a faculdade, fase, professor ou aula numerada.
2. **Separar conteúdo de código.** Hoje as aulas estão escritas dentro do JavaScript. Elas passam a ser **arquivos de dados (JSON ou Markdown com marcações)**, um por aula, que a plataforma lê. Ganhos:
   - qualquer pessoa edita o conteúdo sem mexer no código;
   - dá para revisar, versionar e importar em massa.

   Converto as 56 aulas atuais para esse formato.
3. **Mapa curricular de cada matéria.**
   - Liste os tópicos que a matéria deve cobrir em qualquer faculdade do Brasil, usando como base a lei, as diretrizes nacionais do curso de Direito e os editais da OAB. O Vault fica como ponto de partida.
   - Marque o que já existe, o que está raso e o que falta.
   - Isso também resolve o problema de o material "parecer de uma faculdade só".
4. **Ficha de qualidade por aula** (checklist):
   - artigos conferidos com a lei vigente;
   - questões com gabarito comentado;
   - simuladores testados com casos reais;
   - linguagem revisada;
   - "atualizado em" e "lei consultada em".
5. **Corrigir os erros já encontrados nas notas:**
   - os artigos citados errados em Sucessões;
   - o exemplo de majorante em Teoria da Pena;
   - a exceção do art. 115.
6. **Matérias de lançamento (decidido): as três de processo.**
   - Teoria Geral do Processo;
   - Processo de Conhecimento;
   - Procedimentos Especiais e Recursos.

   As outras 10 aparecem na plataforma como **"Em breve"**: o aluno vê que mais matérias vêm aí, mas não compra por elas.
7. **Revisão jurídica das matérias de lançamento**, pelo professor parceiro ou por um revisor pago por matéria.

**Entrega:** padrão de aula escrito, conteúdo em formato de dados, mapa curricular das 13 matérias e as 3 matérias de processo revisadas e aprovadas.

---

## Fase 2 — Plataforma mínima (semanas 4 a 10 · até 19/dez, em paralelo com a Fase 1)

> **Atualização (12/10/2026):** o lançamento vai direto pela área de membros da Kiwify, sem login, com o progresso no navegador. Esta fase fica para depois do lançamento. Passos em `roadmap-kiwify.md`.

**Decisão: Base44 ou código próprio.**

- **Base44:** sobe rápido, mas prende você à ferramenta. Os simuladores personalizados são justamente o diferencial do Inciso, e lá ficam mais difíceis de manter.
- **Recomendação: código próprio.** O motor de aulas já existe e é a parte mais difícil.
  - Stack sugerida: Next.js; Supabase para login e banco; Vercel para hospedagem; Hotmart ou Kiwify para pagamento, ligados à plataforma por webhook.
  - O custo inicial fica perto de zero até ter usuários.
- O Base44 ainda pode servir para testar telas rapidamente.

**O que entra no lançamento:**
1. Cadastro e login (e-mail e Google).
2. Catálogo de matérias e página de cada matéria, com aulas grátis de amostra.
3. Player de aula: lê os arquivos de conteúdo e roda os blocos interativos e animações que já existem.
4. Progresso salvo na conta, não mais no navegador: Painel, Trilha e Desempenho.
5. Teste do fim de aula, banco de questões e revisão de flashcards.
6. Pagamento único (Pix e cartão), com liberação automática do acesso.
7. Admin mínimo: importar aulas, ver usuários e compras, liberar ou bloquear acesso.
8. Páginas legais: termos de uso, política de privacidade e reembolso.
9. Métricas de uso: aulas iniciadas e concluídas, retorno do aluno.
10. Avaliação no fim de cada aula (estrelas + comentário), para saber se estão gostando.

**O que fica para depois:** aplicativo de celular, comunidade e comentários, área do professor ou turma, certificados, gamificação avançada.

**Entrega:** plataforma no ar, em um endereço de teste, com as matérias de lançamento e pagamento em modo teste.

---

## Fase 3 — Venda e jurídico, como pessoa física (semanas 6 a 12 · até 09/jan)

Não vamos abrir empresa: a venda é feita no CPF.

1. **Vender por uma plataforma intermediária** (Hotmart, Kiwify ou Eduzz), que aceita vendedor pessoa física.
   - Ela cuida do checkout (Pix, cartão, boleto), e do reembolso.
   - Quando a venda é aprovada, ela avisa a plataforma do Inciso automaticamente (webhook), e o acesso é liberado.
   - Taxa de cerca de 10% por venda, em troca de não precisar de CNPJ nem de gateway próprio.
2. **Imposto de renda.** O que entra no CPF é rendimento: precisa ser declarado todo mês pelo Carnê-Leão, com alíquota de até 27,5%.
   - Se houver sócios, combinar como a receita é dividida e declarada.
   - Se a receita crescer, um CNPJ pode sair mais barato (Simples Nacional, a partir de cerca de 6%). Vale reavaliar com um contador quando as vendas passarem de uns R$ 5 mil por mês.
3. **Termos de uso:**
   - licença pessoal e intransferível;
   - proibição de compartilhar conta e copiar material;
   - aviso de que o material não substitui a leitura da lei;
   - **o que o pagamento único compra:** acesso à plataforma e ao conteúdo como estão na data da compra, **sem atualizações incluídas**;
   - **por quanto tempo:** definir um prazo (ex.: 12 ou 24 meses) em vez de "vitalício", porque manter o site no ar tem custo mensal e "vitalício" vira uma promessa difícil de cumprir;
   - **data de referência:** cada aula mostra "conteúdo conforme a legislação vigente em [data]", deixando claro que mudanças de lei posteriores não estão cobertas.
4. **Política de privacidade (LGPD):**
   - quais dados são coletados, incluindo os dados de desempenho;
   - para quê;
   - por quanto tempo;
   - como o aluno pede a exclusão.
5. **Direito de arrependimento (CDC, art. 49):** 7 dias para desistir da compra online. Mesmo vendendo no CPF, quem vende com habitualidade é fornecedor pelo CDC; a plataforma intermediária já faz o reembolso.
6. **Registro da marca no INPI.** Pessoa física pode registrar marca, desde que comprove exercer a atividade. Se não foi feito na Fase 0, fazer agora.

Termos de uso e política de privacidade continuam obrigatórios: a LGPD vale para pessoa física que trata dados com fins econômicos.

---

## Fase 4 — Beta com alunos reais (semanas 8 a 12 · dezembro, época de provas)

1. Convide de 30 a 50 alunos (a lista de espera, amigos e colegas de outras faculdades) para usar **de graça** durante as provas finais.
2. Meça:
   - quantos concluem a primeira aula;
   - quantos voltam em 7 dias;
   - quais aulas são abandonadas no meio;
   - quanto tempo levam.
3. Faça 5 a 10 conversas curtas: o que ajudou, o que confundiu, **quanto pagariam**.
4. Corrija o que travar: bugs, aulas longas demais, simuladores confusos.
5. Colete depoimentos e prints para o lançamento, com autorização.

**Entrega:** relatório do beta com números, ajustes feitos e depoimentos.

---

## Fase 5 — Lançamento (semanas 13 a 18 · janeiro e fevereiro de 2027)

1. **Preço — pagamento único, sem atualizações.** Teste o valor no beta. Hipótese inicial:
   - acesso às três matérias de processo por um valor único, na faixa de R$ 97 a 147;
   - 1 aula grátis por matéria, sem precisar pagar, para o aluno experimentar;
   - preço de lançamento menor nas primeiras semanas.
2. **Página de vendas:**
   - vídeo das animações;
   - demonstração interativa de 1 simulador direto na página;
   - depoimentos do beta;
   - preço e perguntas frequentes.
3. **Conteúdo para redes** (Instagram, TikTok, YouTube Shorts). As animações das aulas já são material pronto: "como dividir a herança em 30 segundos", "calcule a pena em 3 fases".
4. **Canais:**
   - lista de espera;
   - centros acadêmicos e atléticas (parcerias, cupons);
   - a rede do professor parceiro;
   - indicação com desconto ("indique um colega").
5. **Abertura das vendas** no início de fevereiro, com preço de lançamento por tempo limitado.

---

## Fase 6 — Depois do lançamento (março de 2027 em diante)

- **Novas matérias como novos produtos:** como o pagamento único não inclui atualizações, cada matéria ou pacote novo é vendido à parte (com desconto para quem já comprou). É assim que a receita continua.
- **Erros não são atualização:** artigo errado, gabarito trocado ou simulador com bug continuam sendo corrigidos para todos. Pelo CDC, conteúdo com erro é vício do produto.
- **Mudanças de lei:** acompanhar (há uma reforma do Código Civil em tramitação). Quando uma mudança grande afetar uma matéria, lançar uma "edição nova" dela como produto.
- **Mensalidade, se validar:** se as vendas e o uso confirmarem a ideia, lançar a assinatura mensal, com atualizações, matérias novas e recursos extras. "Validado" = **pessoas usando e gostando**. Como enxergar isso na plataforma:
  - **Usando:** os alunos voltam (estudam em vários dias, não só no dia da compra) e concluem aulas.
  - **Gostando:** avaliação no fim de cada aula (1 a 5 estrelas + comentário opcional), pouco pedido de reembolso, e alunos indicando para colegas.
- **Quem comprou no pagamento único:** decidir antes de lançar a mensalidade. Eles mantêm o acesso até o fim do prazo e ganham desconto para migrar.
- **Expansão:** módulo OAB 1ª fase, venda para faculdades e cursinhos (licença por turma) e aplicativo.
- **Métricas mensais:** vendas, reembolsos, aulas concluídas por aluno, custo para conquistar cada aluno.

---

## Caminho crítico (o que trava o resto)

```
Direitos do conteúdo + acordo com professor  ──►  Padrão de aula  ──►  Revisão das matérias de lançamento ─┐
                                                   Plataforma mínima (em paralelo) ─────────────────────────┼──►  Beta  ──►  Lançamento
                                                   Conta na Hotmart/Kiwify + termos ────────────────────────┘
```

## Próximos 7 dias

- [ ] Conversar com o professor: papel, remuneração, autorização por escrito.
- [ ] Decidir o caminho dos direitos: autorização ou reescrita a partir de fontes primárias.
- [ ] Buscar "Inciso" no INPI e o domínio.
- [x] Escolher as matérias de lançamento: as três de processo.
- [ ] Aprovar o padrão de aula (eu escrevo a primeira versão).
- [ ] Criar conta de vendedor (pessoa física) na Hotmart ou na Kiwify e comparar as taxas.
