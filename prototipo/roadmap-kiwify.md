# Roadmap Inciso — até publicar na Kiwify

*Versão 2 — 12/10/2026*

**Meta:** publicar na Kiwify até **quarta, 04/11/2026**, com folga até sexta, 06/11.

**Decisões desta versão:**
- **Quem vende:** Joaquim, como pessoa física (CPF).
- **Sem professor parceiro.** O material é uma recriação própria. O conteúdo das aulas da faculdade serviu só de roteiro, e uma checagem de originalidade confirma isso antes da venda (Etapa 1).
- **Sem login:** o aluno compra na Kiwify e abre o Inciso pela área de membros (link ou iframe para o site hospedado). O progresso fica no navegador, com aviso, exportar e importar e lembrete de backup.
- **Lançamento:** as 3 matérias de processo. As outras 10 aparecem como "Em breve".

**Riscos aceitos:**
- O progresso pode se perder se o aluno trocar de aparelho ou de navegador, limpar os dados ou, no Safari, passar uns 7 dias sem estudar.
- O link pode ser repassado para quem não comprou.
- Só vemos números gerais de uso, nunca o desempenho de cada aluno.

---

## Calendário

| Período | Etapa | Marco |
|---|---|---|
| 12–18/out | 1. Checagem de originalidade | Relatório por matéria |
| 13–23/out | 2. Piloto técnico | Inciso no ar com métricas, "Encontrei um erro" e avaliação |
| 19–25/out | 3. Reescrita e conferência | Nenhum item vermelho aberto |
| 15/out–01/nov | 4. Kiwify, documentos e página de vendas | Compra de teste feita |
| 26/out–01/nov | 5. Piloto com alunos | 10 a 20 alunos usando por uma semana |
| 02–04/nov | 6. Ajustes e publicação | **Vendas abertas** |

---

## Etapa 1 — Checagem de originalidade (12 a 18/out)

Confirmar que o material é recriação, e não cópia do material do professor. O método está em `validacao/originalidade.md`.

- [x] **Rodada mecânica (12/out):** comparação literal do material com os slides e PDFs do professor e com as notas do Vault. Resultado na seção "Primeira rodada" de `validacao/originalidade.md`.
- [ ] Converter os slides antigos (`.ppt`) de Teoria Geral do Processo e de Processo de Conhecimento, que a primeira rodada não conseguiu ler, e repetir a comparação.
- [ ] **Inventário:** um agente lista as "marcas do professor": exemplos, casos, analogias, quadros, exercícios, ordem dos tópicos e julgados escolhidos.
- [ ] **Auditoria:** outro agente procura essas marcas no material e classifica cada achado em verde, amarelo ou vermelho.
- [ ] Você decide os amarelos.
- [ ] Opcional, mas recomendado: uma consulta curta com um advogado de direito autoral, levando o relatório.

## Etapa 2 — Piloto técnico (13 a 23/out)

**Limpeza**
- [ ] Remover os dados de demonstração: o aluno novo começa do zero.
- [ ] Trocar os nomes internos "vade" (arquivo gerado e chave do localStorage) por "inciso". **Antes do primeiro aluno**, porque trocar depois apaga o progresso de quem já estuda.
- [ ] Conferir que as matérias "Em breve" não abrem.
- [ ] Trocar o exemplo com "1ª Câmara de Direito Civil do TJSC" (`procesp3.js:10`). Ele veio de um slide do professor (ver Etapa 1).

**Proteção do progresso**
- [ ] Aviso no primeiro acesso, numa tela só, com o botão "Entendi".
- [ ] Botões "Exportar progresso" e "Importar progresso".
- [ ] Lembrete de backup a cada 7 dias de uso ou ao concluir uma aula, com a data do último backup.
- [ ] Pedir ao navegador para guardar os dados como permanentes (`navigator.storage.persist()`).

**O mínimo para o piloto**
- [ ] **Hospedagem com um endereço:** Cloudflare Pages (grátis), no domínio próprio se já estiver registrado. Subir a pasta gerada por `python prototipo/publicar.py`.
- [ ] **Proteção do link (opção 1, decidida em 13/10):**
  - [x] Endereço difícil de adivinhar (`<domínio>/a/<código>/`); o código fica fora do Git.
  - [x] Aulas fora do Google (`noindex`) e endereço que não vaza para outros sites quando o aluno clica num link (`no-referrer`).
  - [ ] **Tornar o repositório do GitHub privado.** Hoje ele é público e tem o conteúdo completo e o HTML montado: qualquer pessoa baixa o Inciso inteiro sem comprar.
  - [ ] Se o link vazar: `python prototipo/publicar.py --novo`, subir de novo e trocar o link na área de membros. O aluno não perde o progresso.
- [ ] **Métricas simples:** aulas abertas e aulas concluídas, contadas sem identificar o aluno. Usar um contador que registre eventos, como Umami ou GoatCounter (os dois têm plano grátis).
- [ ] **Botão "Encontrei um erro"** em cada aula. Abre um formulário (Tally, grátis) que já chega preenchido com a matéria e a aula. O aluno descreve o erro e, se quiser, deixa o e-mail.
- [ ] **Avaliação no fim da aula:** 1 a 5 estrelas e comentário opcional, enviados ao mesmo formulário ou ao contador de eventos.
- [ ] Testar em computador e celular (Chrome, Edge, Safari no iPhone, Chrome no Android) e **dentro da área de membros da Kiwify**. Se o iframe der problema, usar link que abre numa aba nova.

## Etapa 3 — Reescrita e conferência (19 a 25/out)

- [ ] Reescrever os itens vermelhos e os amarelos que você decidir trocar, a partir da lei e com exemplos novos.
- [ ] Um agente diferente do que reescreveu repete a comparação e confere se o trecho novo continua juridicamente certo.
- [ ] Registrar tudo em `validacao/originalidade/registro.md` (o quê, quando e por quê). Esse registro também serve de prova de criação independente, se alguém questionar.
- [ ] Aplicar as correções da revisão jurídica que ainda estiverem pendentes nas 3 matérias.

## Etapa 4 — Kiwify, documentos e página de vendas (15/out a 01/nov)

**Kiwify:** criar a conta logo, porque a verificação e a aprovação do produto podem levar alguns dias.
- [ ] Conta como pessoa física: verificação de identidade e conta bancária no seu CPF.
- [ ] Conferir as taxas, o prazo de saque e se a área de membros aceita iframe.
- [ ] Criar o produto com área de membros: a aula "Comece aqui" (com o aviso sobre o progresso) e uma entrada por matéria apontando para o Inciso.
- [ ] Definir preço, preço de lançamento e prazo de acesso (12 ou 24 meses, não "vitalício").
- [ ] Garantia de 7 dias (direito de arrependimento, CDC, art. 49).
- [ ] Compra de teste completa, do pagamento até abrir uma aula, e depois o reembolso.

**Documentos (antes da primeira venda)**
- [ ] **Termos de uso:** licença pessoal; proibido compartilhar o acesso ou o link (e o link pode ser trocado a qualquer momento); prazo de acesso; sem atualizações incluídas; erros continuam sendo corrigidos; o material não substitui a leitura da lei; **o progresso fica salvo no aparelho do aluno**.
- [ ] **Política de privacidade (LGPD):** o que a Kiwify, o contador de acessos e o formulário coletam, para quê e por quanto tempo.
- [ ] Links para os dois documentos no rodapé do Inciso e na página de vendas.
- [ ] **Imposto:** entender o Carnê-Leão (declaração mensal da receita no CPF) antes da primeira venda.

**Marca**
- [ ] Buscar "Inciso" no INPI (classes 41, 9 e 42) e registrar o domínio. O registro da marca pode ser pedido depois do lançamento; o que não pode é descobrir tarde que o nome já tem dono.

**Página de vendas**
- [ ] Vídeo curto das animações e uma aula grátis de amostra.
- [ ] O que está incluído: 3 matérias, número de aulas e de questões, prazo de acesso.
- [ ] Perguntas frequentes, incluindo "Meu progresso fica salvo?", com a resposta honesta.
- [ ] Depoimentos do piloto, com autorização.

## Etapa 5 — Piloto com alunos (26/out a 01/nov)

- [ ] Liberar de 10 a 20 alunos de graça pela Kiwify (cupom de 100% ou cadastro manual). Isso também testa a compra e a área de membros.
- [ ] Olhar todos os dias: aulas abertas e concluídas, erros relatados e avaliações.
- [ ] Corrigir na hora os erros de conteúdo de gravidade alta.
- [ ] Conversar com 5 alunos: o que ajudou, o que confundiu, quanto pagariam e se o aviso sobre o progresso ficou claro.

## Etapa 6 — Ajustes e publicação (02 a 04/nov)

- [ ] Checklist final:
  - originalidade sem item vermelho aberto;
  - erros do piloto corrigidos;
  - termos e privacidade no ar;
  - compra de teste feita;
  - aviso de progresso visível.
- [ ] Abrir as vendas com preço de lançamento por tempo limitado.
- [ ] Divulgar entre colegas, centros acadêmicos e nas redes, com as animações das aulas.
- [ ] Acompanhar todas as semanas: vendas, reembolsos, aulas concluídas, avaliações e erros relatados.

**Primeiro passo depois do lançamento: link individual (opção 2).** A Kiwify avisa uma compra por webhook; um Worker da Cloudflare manda ao comprador um link de acesso só dele, que pode ser cancelado e mostra quando é usado em muitos aparelhos. Esforço de 2 a 3 dias. O mesmo webhook serve depois para a plataforma com login.

**Quando partir para a plataforma com login** (Fase 2 de `roadmap-inciso.md`): quando as vendas se sustentarem ou quando a perda de progresso virar reclamação frequente. O aluno leva o progresso que já tem pelo botão "Importar".

---

## Próximos 3 dias

- [ ] Criar a conta na Kiwify.
- [ ] Buscar "Inciso" no INPI e o domínio.
- [ ] Rodar o inventário e a auditoria de originalidade (Etapa 1).
- [ ] Começar a limpeza e o mínimo do piloto (Etapa 2).
