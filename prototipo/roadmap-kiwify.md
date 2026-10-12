# Roadmap Inciso — até publicar na Kiwify

*Versão 1 — 12/10/2026*

**Meta:** abrir as vendas na Kiwify em **fevereiro de 2027**, sem construir login nem banco de dados.

**Como funciona nesta versão:**
- O aluno compra na Kiwify e recebe acesso à área de membros.
- Na área de membros, um link ou uma janela embutida (iframe) abre o Inciso, hospedado num site nosso.
- O progresso fica salvo no navegador do aluno. Ele pode exportar e importar esse progresso para estudar em outro aparelho.

Isso substitui, **para o lançamento**, a Fase 2 de `roadmap-inciso.md` (plataforma com login). A plataforma própria fica para depois que as vendas validarem a ideia (ver Etapa 7).

**Riscos aceitos nesta versão:**
- O progresso pode se perder se o aluno trocar de aparelho ou de navegador, limpar os dados, usar aba anônima ou, no Safari, passar uns 7 dias sem estudar.
- O link do Inciso pode ser repassado para quem não comprou.
- Não vemos o desempenho de cada aluno, só números gerais de uso.

---

## Etapa 1 — O que trava tudo (até 24/out)

Vem da Fase 0 de `roadmap-inciso.md`. Sem estes itens, não há o que vender.

- [ ] **Direitos sobre o conteúdo:** autorização por escrito do professor, ou conteúdo reescrito a partir de fontes primárias.
- [ ] **Acordo com o professor parceiro:** papel, remuneração, quem é dono do conteúdo e uso do nome dele.
- [ ] **Marca:** buscar "Inciso" no INPI e registrar o domínio.
- [ ] **Divisão da receita:** se houver sócio, combinar por escrito como a receita é dividida e declarada.

## Etapa 2 — Conteúdo pronto para vender (até 05/dez)

- [ ] Concluir a revisão jurídica das 3 matérias de processo e aplicar as correções (ver `validacao/roadmap-agentes.md`).
- [ ] Aprovação final do professor parceiro.
- [ ] Mostrar em cada aula "conteúdo conforme a legislação vigente em [data]".
- [ ] Escolher as aulas grátis de amostra (1 por matéria) para a página de vendas.

## Etapa 3 — Preparar o protótipo para alunos de verdade (até 28/nov)

**Limpeza**
- [ ] Remover os dados de demonstração: o aluno novo começa com o progresso zerado.
- [ ] Trocar os nomes internos "vade" (arquivo gerado e chave do localStorage) por "inciso". **Precisa ser feito antes do primeiro aluno**, porque trocar a chave depois apaga o progresso de quem já estuda.
- [ ] Conferir que as 10 matérias "Em breve" não podem ser abertas.
- [ ] Remover qualquer resto de protótipo: textos de teste, botões de depuração.

**Proteção do progresso**
- [ ] Aviso no primeiro acesso, numa tela só, com o botão "Entendi".
- [ ] Botões "Exportar progresso" e "Importar progresso" (arquivo ou código).
- [ ] Lembrete a cada 7 dias de uso ou ao concluir uma aula, com a data do último backup.
- [ ] Pedir ao navegador para guardar os dados como permanentes (`navigator.storage.persist()`).

**Medir o uso sem login**
- [ ] Contador de acessos que não identifica a pessoa (Cloudflare Web Analytics, Plausible ou Umami): aulas abertas, aulas concluídas, quem volta.
- [ ] Avaliação no fim da aula, com estrelas e comentário, enviada por um formulário externo (Tally ou Google Forms).

## Etapa 4 — Colocar no ar (até 05/dez)

- [ ] Hospedar o HTML gerado (Cloudflare Pages, Netlify ou Vercel, todos com plano grátis), de preferência no domínio próprio.
- [ ] Impedir que o Google indexe as aulas (`noindex`) e usar um endereço difícil de adivinhar.
- [ ] Testar em computador e celular: Chrome, Edge, Safari no iPhone e Chrome no Android.
- [ ] Testar o Inciso **dentro** da área de membros da Kiwify, por iframe e por link. Confirmar que o progresso fica salvo e que exportar e importar funcionam. Se o iframe der problema, usar link que abre numa aba nova.

## Etapa 5 — Beta durante as provas (dezembro)

- [ ] Convidar de 30 a 50 alunos para usar de graça. A Kiwify permite cadastrar alunos manualmente ou criar um cupom de 100%. Isso também testa o fluxo de compra.
- [ ] Medir: quantos concluem a primeira aula, quantos voltam em 7 dias, onde abandonam.
- [ ] Conversar com 5 a 10 alunos: o que ajudou, o que confundiu, **quanto pagariam** e se o aviso sobre o progresso ficou claro.
- [ ] Juntar depoimentos, com autorização por escrito para usar.
- [ ] Corrigir o que travar (até 15/jan).

## Etapa 6 — Kiwify, jurídico e página de vendas (dezembro e janeiro)

**Conta e produto na Kiwify**
- [ ] Criar a conta como pessoa física: verificação de identidade e conta bancária no seu CPF.
- [ ] Conferir as taxas e os prazos de saque atuais.
- [ ] Criar o produto com área de membros: uma aula por matéria apontando para o Inciso, e uma aula "Comece aqui" com o aviso sobre o progresso.
- [ ] Definir preço (hipótese: R$ 97 a 147), preço de lançamento e prazo de acesso (12 ou 24 meses, não "vitalício").
- [ ] Configurar a garantia de 7 dias (direito de arrependimento, CDC, art. 49).
- [ ] Fazer uma compra de teste completa, do pagamento até abrir uma aula, e depois pedir o reembolso.

**Documentos (antes de vender)**
- [ ] **Termos de uso:** licença pessoal; proibido compartilhar o acesso; prazo de acesso; sem atualizações incluídas; erros continuam sendo corrigidos; não substitui a leitura da lei; **progresso salvo no aparelho do aluno**.
- [ ] **Política de privacidade (LGPD):** o que a Kiwify coleta, o que o contador de acessos e o formulário de avaliação coletam, e por quanto tempo.
- [ ] Links para os dois documentos no rodapé do Inciso e na página de vendas.
- [ ] Imposto: entender o Carnê-Leão (declaração mensal) antes da primeira venda. Vale uma consulta com um contador.

**Página de vendas**
- [ ] Vídeo curto das animações e um simulador para experimentar.
- [ ] O que está incluído: 3 matérias, número de aulas e de questões, prazo de acesso.
- [ ] Na seção de perguntas frequentes: "Meu progresso fica salvo?", com a resposta honesta.
- [ ] Depoimentos do beta.

## Etapa 7 — Publicar (início de fevereiro de 2027)

- [ ] Checklist final: conteúdo aprovado, termos no ar, compra de teste feita, aviso de progresso visível.
- [ ] Abrir as vendas com preço de lançamento por tempo limitado.
- [ ] Avisar a lista de espera, centros acadêmicos e a rede do professor.
- [ ] Acompanhar todas as semanas: vendas, reembolsos, aulas concluídas e reclamações sobre progresso perdido.

**Quando partir para a plataforma própria** (login + banco de dados, Fase 2 de `roadmap-inciso.md`): quando as vendas se sustentarem, ou quando a perda de progresso virar reclamação frequente. Aí a Kiwify passa a avisar a plataforma por webhook, e o aluno importa o progresso que já tem pelo próprio botão "Importar".

---

## Caminho crítico

```
Direitos + acordo com o professor ──► Revisão jurídica concluída ──────────────┐
Limpeza + backup do progresso ──► Hospedagem + teste dentro da Kiwify ─────────┼──► Beta ──► Ajustes ──► Publicar na Kiwify
Conta na Kiwify + termos + página de vendas ───────────────────────────────────┘
```

## Próximos 7 dias

- [ ] Conversar com o professor (direitos e acordo).
- [ ] Criar a conta na Kiwify e conferir as taxas e se a área de membros aceita iframe.
- [ ] Buscar "Inciso" no INPI e o domínio.
- [ ] Pedir ao Claude a Etapa 3: limpeza, aviso, exportar e importar, lembrete.
