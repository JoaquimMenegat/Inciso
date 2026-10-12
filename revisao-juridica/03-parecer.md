# Revisão jurídica — 03. Parecer do validador

Data-base: **11/10/2026** (direito vigente nesta data). Entradas: `01-afirmacoes.md` (994 afirmações), `02-pesquisa.md` (pesquisa) e os arquivos de origem em `prototipo/pacotes/inciso-materiais/src/conteudo/*.js` e `src/engine.js`. As referências "arquivo:linha" apontam a linha física do arquivo. Muitos módulos ocupam uma única linha longa, então a linha indica o bloco (cartões, quiz, tabela).

---

## 1. Parecer geral

O material está, no conjunto, **muito bem alinhado ao CPC vigente**. Conferi no texto compilado do Planalto cerca de 250 afirmações, entre elas todos os pontos de risco, todos os gabaritos com observação e uma amostra de prazos e de numeração de artigos de cada matéria. Os prazos, percentuais e incisos citados conferem com a lei em mais de 95% dos casos. Os problemas se concentram em três frentes:

1. **Leis recentes que o material ainda não incorporou.** A principal é a **Lei 15.484, de 4/8/2026** (vigente desde 3/9/2026), que regulamentou o filtro de **relevância do recurso especial** (novo art. 1.035-A do CPC) e alterou os arts. 927, 932, 998, 1.030, 1.039 e 1.042. A segunda é a **Lei 14.879/2024**, que exige pertinência na cláusula de eleição de foro e permite declinar de ofício o "juízo aleatório" (art. 63, §§1º e 5º). Também faltam a contagem em dias úteis nos Juizados (Lei 13.728/2018), a conciliação não presencial (Lei 13.994/2020) e os §§6º-A e 8º-A do art. 85 (Lei 14.365/2022).
2. **Quatro erros de conteúdo**:
   - PE-381: o RE contra acórdão que "declara constitucional" a lei federal inverte a alínea "b" do art. 102, III, da CF.
   - PE-060: o prazo de 5 dias da caução possessória foi atribuído à parte errada.
   - TGP-064: a competência originária do STF aparece como exemplo de "duplo grau sem recurso".
   - PE-175: o material cita uma "Circular CGJ-SC 52/2023" que não existe com esse número; a norma catarinense que tratava do tema foi revogada, e o material omite a exigência de parecer favorável do MP.
3. **Julgados que não puderam ser conferidos.** São nove julgados do TJSC, mais alguns números de REsp e AREsp do STJ. Os portais do STJ, do STF e do TJSC bloquearam o acesso automatizado (HTTP 403 ou "bloqueio temporário"), e eu não contornei esse bloqueio.

Corrigindo os itens de gravidade **alta** (4) e **média** (14) da seção 2, o material fica apto para venda. Os itens de gravidade baixa são aprimoramentos de redação.

### Contagem (itens efetivamente revisados por mim: 246)

| Classificação | Alta | Média | Baixa | Total |
|---|---|---|---|---|
| INCORRETO | 1 | 3 | 0 | 4 |
| DESATUALIZADO | 2 | 2 | 2 | 6 |
| IMPRECISO/INCOMPLETO | 1 | 9 | 34 | 44 |
| NÃO VERIFICÁVEL | 0 | 0 | 16 | 16 |
| CORRETO | — | — | — | 176 |
| **Total** | **4** | **14** | **52** | **246** |

Os 748 IDs restantes não foram reconferidos um a um em fonte primária. Mesmo assim, li todas as 994 linhas do 01 lado a lado com o 02 em busca de inconsistências; ver a seção 7.

### Confiabilidade e limitações

- **Conferido em fonte primária oficial** (baixada e lida nesta data):
  - CPC compilado: [Planalto](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm). A página já traz as alterações da Lei 15.484/2026 e a remissão à Lei 15.479/2026, que trata de alimentos e não afeta o material.
  - Constituição Federal (arts. 102, III, e 105, III e §§2º–3º).
  - Leis 15.484/2026, 14.879/2024, 14.939/2024, 14.365/2022, 13.728/2018, 13.994/2020, 9.099/95, 11.419/06, 6.858/80, 9.093/95 e 14.759/2023.
  - DL 509/69 e Decretos 2.067/1996 e 6.891/2009.
  - **Res. CNJ 35/2007 compilada, com a Res. 571/2024**, no [atos.cnj.jus.br](https://atos.cnj.jus.br/atos/detalhar/179). Para mim, este portal funcionou.
  - Código de Normas da CGJ/TJSC, art. 816-B: [TJSC](https://www.tjsc.jus.br/web/codigo-de-normas/secao-vii-inventario-extrajudicial-com-interessado-incapaz-art.-816-b-).
  - Lei SC 13.136/2004 compilada: [ALESC](https://leis.alesc.sc.gov.br/html/2004/13136_2004_lei.html).
- **Conferido só em fonte secundária**, porque os portais `scon.stj.jus.br`, `processo.stj.jus.br`, `portal.stf.jus.br` e `busca.tjsc.jus.br` devolveram 403 ou bloqueio: os julgados do STJ e do STF (REsp 1.938.645/CE, QO no AREsp 2.638.376/MG, REsp 1.731.464/SP, Tema 1.255/STF), por informativos, Conjur, Migalhas e IBET.
- **Súmulas do STJ e do STF, enunciados do FONAJE e números de temas repetitivos**: conferidos pelo texto consolidado e amplamente reproduzido, sem consulta ao portal oficial.
- **Doutrina**: não houve conferência de página. Só tratei como erro o que contraria a lei.

---

## Status da "Lei 15.484/2026": EXISTE e está em vigor

- **Fonte primária:** [Planalto, Lei nº 15.484, de 4 de agosto de 2026](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15484.htm), publicada no DOU de 4/8/2026 (edição extra) e sancionada por Luiz Inácio Lula da Silva.
- **Ementa:** "Regulamenta o regime de relevância das questões de direito federal infraconstitucional para admissão dos recursos especiais no Superior Tribunal de Justiça e altera a Lei nº 13.105 [...] (Código de Processo Civil)."
- **Vigência:** a lei entra em vigor "após decorridos 30 (trinta) dias de sua publicação oficial" (art. 7º). Pela contagem da LC 95/1998, art. 8º, §1º, a vigência começou em **3/9/2026**.
- **Direito intertemporal:** a exigência do tópico de relevância vale para "recursos interpostos contra acórdãos publicados após a data de entrada em vigor desta Lei" (art. 4º). Reconhecida ou recusada a relevância, os efeitos alcançam os processos em andamento (art. 5º).
- **Conteúdo:**
  - Novo **art. 1.035-A**: o STJ não conhece do REsp sem relevância, por decisão irrecorrível. O recorrente deve demonstrar a relevância "em tópico específico e fundamentado" (§2º), sob pena de inadmissão (§3º). A relevância é presumida nas hipóteses do art. 105, §3º, da CF (§4º). O não conhecimento exige 2/3 do órgão julgador (§6º).
  - O art. 3º altera os arts. 927 (novo inc. III-A), 932, IV, "b", e V, "b", 979, §3º, 988 (inc. V e §§4º–5º), 998, p.ú., 1.030 (I, "c", II e V, "a"), 1.039, p.ú., e 1.042 (caput e §2º).
- O texto compilado do CPC no Planalto já incorpora todas essas alterações. Confere com o que o pesquisador afirmou.

### Outras leis citadas na tarefa (todas conferidas no Planalto)

| Lei | Data e DOU | O que mudou | Vigência |
|---|---|---|---|
| [14.879/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14879.htm) | 4/6/2024; DOU 5/6/2024 | Art. 63, §1º (pertinência do foro de eleição) e §5º (juízo aleatório, declinação de ofício) | Na publicação |
| [14.939/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14939.htm) | 30/7/2024; DOU 31/7/2024 | Art. 1.003, §6º (feriado local: o tribunal determina a correção do vício) | Na publicação |
| [14.365/2022](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14365.htm) | 2/6/2022 | Art. 85, §6º-A (veda a equidade quando o valor é líquido ou liquidável) e §8º-A (piso da tabela da OAB ou 10%) | Conferido no CPC compilado |
| [13.728/2018](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13728.htm) | 31/10/2018; DOU 1º/11/2018 | Lei 9.099, art. 12-A (dias úteis, "inclusive para a interposição de recursos") | Na publicação |
| [13.994/2020](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l13994.htm) | 24/4/2020; DOU 27/4/2020 | Lei 9.099, art. 22, §2º (conciliação não presencial) e art. 23 (sentença se o demandado não comparece ou se recusa) | Na publicação |
| Res. CNJ 571/2024 | 26/8/2024 | Res. CNJ 35/2007, art. 12-A (inventário extrajudicial com incapaz: parte ideal em cada bem e **manifestação favorável do MP**) e art. 12-B (com testamento: **autorização expressa do juízo sucessório**, com trânsito em julgado). Fonte: [atos.cnj.jus.br](https://atos.cnj.jus.br/atos/detalhar/179) | — |

---

## 2. Correções necessárias (ordenadas por gravidade)

### Gravidade ALTA

**PE-381 — INCORRETO (alta)**
- **Arquivo:** procesp3.js:71 (caso "Ação contra a União").
- **O material diz:** "se declara constitucional a lei federal, cabe RE ao STF".
- **O erro:** a CF, art. 102, III, "b", prevê RE quando a decisão "declarar a **inconstitucionalidade** de tratado ou lei federal". O acórdão que declara a lei federal *constitucional* só desafia RE pela alínea "a", se contrariar a Constituição. O aluno decoraria o gatilho invertido.
- **Redação sugerida:** `<p>Empresa processa a União na Justiça Federal e perde. A apelação vai ao <b>TRF</b>. Se o acórdão diverge de outro tribunal sobre lei federal, cabe <b>REsp ao STJ</b> (CF, art. 105, III, c). Se declara <b>inconstitucional</b> uma lei federal, ou contraria dispositivo da Constituição, cabe <b>RE ao STF</b> (CF, art. 102, III, b e a).</p>`
- **Fonte:** [CF, art. 102, III](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm).

**PE-361 (e PE-387) — DESATUALIZADO (alta)**
- **Arquivo:** procesp3.js:53 (fluxograma "Que recurso cabe"); PE-387 em procesp3.js:77.
- **O material diz:** "Ao STJ (CF, art. 105, III). Exige prequestionamento; não reexamina prova (Súmula 7 do STJ)."
- **O que falta:** desde 3/9/2026 o REsp exige demonstração da **relevância da questão de direito federal**, em tópico específico e fundamentado, sob pena de inadmissão (CF, art. 105, §§2º e 3º; CPC, art. 1.035-A, Lei 15.484/2026). Sem isso o aluno redige um REsp inadmissível. O gabarito de PE-387 ("REsp") continua certo, mas a justificativa deve mencionar o novo requisito.
- **Redação sugerida (procesp3.js:53):** `Ao STJ (CF, art. 105, III). Exige prequestionamento e não reexamina prova (Súmula 7 do STJ). Desde 3/9/2026, o recorrente também precisa demonstrar, em tópico próprio e fundamentado, a relevância da questão de direito federal (CF, art. 105, §§2º e 3º; CPC, art. 1.035-A, incluído pela Lei 15.484/2026). A relevância é presumida em ações penais, de improbidade, de valor acima de 500 salários mínimos, que possam gerar inelegibilidade, ou quando o acórdão contrariar jurisprudência dominante do STJ. Só 2/3 do órgão julgador podem recusá-la.`
- **Redação sugerida (PE-387, justificativa do quiz):** `CF, art. 105, III, c. Desde a Lei 15.484/2026, com demonstração da relevância da questão federal (CPC, art. 1.035-A).`
- **Fontes:** [Lei 15.484/2026](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15484.htm); [CF, art. 105](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm); [CPC, art. 1.035-A](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm).

**TGP-096 (com TGP-112, TGP-103, TGP-092 e TGP-107) — DESATUALIZADO (alta)**
- **Arquivo:** tgp.js:153 (TGP-096). Ajustes conexos em tgp.js:173, 161, 151 e 162.
- **O material diz:** "A relativa pode ser modificada por eleição de foro em contrato escrito que mencione o negócio (art. 63)."
- **O erro:** reproduz a redação anterior a 2024. Pela Lei 14.879/2024, a eleição de foro só produz efeito se, além de escrita e ligada a um negócio determinado, "guardar pertinência com o domicílio ou a residência de uma das partes ou com o local da obrigação", ressalvada a cláusula favorável ao consumidor (art. 63, §1º). O §5º passou a permitir a declinação de ofício em caso de "juízo aleatório". Um aluno responderia hoje que qualquer foro pode ser eleito, o que é errado.
- **Redação sugerida (tgp.js:153):** `<p>A absoluta é inderrogável por convenção (art. 62). A relativa pode ser modificada por eleição de foro, em instrumento escrito, ligada a um negócio determinado e com pertinência com o domicílio ou a residência de uma das partes ou com o local da obrigação; em contrato de consumo, vale a cláusula favorável ao consumidor (art. 63, §1º, redação da Lei 14.879/2024).</p>`
- **Redação sugerida (tgp.js:173, TGP-112):** `Antes do processo: as partes elegem, no contrato, foro ligado ao domicílio de uma delas ou ao local da obrigação (art. 63, §1º). Vincula herdeiros e sucessores (§2º).`
- **Redação sugerida (tgp.js:161, TGP-103, acrescentar ao final do callout):** `E se a ação for proposta em juízo aleatório, sem vínculo com o domicílio ou a residência das partes nem com o negócio, o juiz pode declinar de ofício (§5º, incluído pela Lei 14.879/2024).`
- **Redação sugerida (tgp.js:151, TGP-092):** `O juiz não a reconhece de ofício (Súmula 33 do STJ), salvo a cláusula de eleição abusiva antes da citação (art. 63, §3º) e a ação proposta em juízo aleatório (art. 63, §5º).`
- **Redação sugerida (tgp.js:162, TGP-107):** `incompetência relativa não se declara de ofício (exceções: art. 63, §§3º e 5º)`
- **Fonte:** [Lei 14.879/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14879.htm); [CPC, art. 63](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm).

**PE-308 — IMPRECISO/INCOMPLETO (alta)**
- **Arquivo:** procesp3.js:19 (tabela "Que recurso cabe contra o quê").
- **O material diz:** "Decisão que inadmite REsp ou RE → Agravo em REsp ou RE (art. 1.042)".
- **O que falta:** quando a inadmissão aplica tese de repercussão geral, de recurso repetitivo ou, desde a Lei 15.484/2026, do regime de relevância, cabe **agravo interno** no próprio tribunal de origem (arts. 1.030, I e §2º, e 1.042, caput). Interpor AREsp nesses casos é tratado como erro grosseiro, sem fungibilidade. A exceção existe desde a Lei 13.256/2016; a Lei 15.484 só a ampliou.
- **Redação sugerida (célula "Recurso"):** `Agravo em REsp ou RE (art. 1.042). Se a inadmissão aplicar tese de repercussão geral, de recursos repetitivos ou do regime de relevância, cabe agravo interno no próprio tribunal (arts. 1.030, I e §2º, e 1.042).`
- **Fonte:** [CPC, arts. 1.030 e 1.042](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm).

### Gravidade MÉDIA

**PE-060 — INCORRETO (média)**
- **Arquivo:** procesp.js:57 (cartão "Caução").
- **O material diz:** "Se o autor beneficiado pela liminar não tiver idoneidade financeira, o réu pede caução em 5 dias, sob pena de depósito da coisa".
- **O erro:** pelo art. 559, o réu *prova* a falta de idoneidade "em qualquer tempo", e o juiz dá **ao autor** 5 dias para requerer (prestar) caução, sob pena de depósito da coisa.
- **Redação sugerida:** `Se o réu provar que o autor beneficiado pela liminar não tem idoneidade financeira, o juiz dá ao autor 5 dias para requerer caução, real ou fidejussória, sob pena de depósito da coisa, salvo se ele for hipossuficiente (art. 559).`
- **Fonte:** [CPC, art. 559](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm).

**TGP-064 — INCORRETO (média)**
- **Arquivo:** tgp.js:113 (comparativo "Duplo grau não é o mesmo que recorribilidade").
- **O material diz:** "Competência originária do STF: não há instância acima", listada sob "Duplo grau sem recurso".
- **O erro:** a competência originária do STF é o exemplo clássico de **ausência** (exceção) de duplo grau. Não é duplo grau sem recurso, categoria que só a remessa necessária ocupa nesse quadro. Ali cabem apenas recursos internos (ED, agravo interno), sem reexame por instância superior. Por isso ela se encaixa na coluna da esquerda.
- **Redação sugerida:** retirar o item da coluna "Duplo grau sem recurso" e incluir na coluna "Recurso sem duplo grau pleno": `Competência originária do STF: cabem só recursos internos (embargos de declaração, agravo interno); não há instância acima para reexaminar.`
- **Fonte:** CF, art. 102, I; doutrina consolidada (duplo grau como garantia não absoluta).

**PE-175 (com PE-171) — INCORRETO (média) / PE-171 IMPRECISO (média)**
- **Arquivo:** procesp2.js:16 (assistente "Cartório ou juiz?").
- **O material diz (PE-175):** com herdeiro incapaz e partilha "em partes ideais iguais", "normas recentes do CNJ e, em SC, a Circular CGJ-SC 52/2023 admitem escritura".
- **O material diz (PE-171):** com testamento "já aberto, registrado e mandado cumprir", e todos capazes e de acordo, a extrajudicial é possível.
- **Os erros:**
  - Não existe Circular CGJ-SC nº 52 sobre o tema. O Código de Normas do TJSC cita as Circulares **51** e 127 (autos 0046233-50.2022.8.24.0710).
  - A regra catarinense (art. 816-B, Prov. 11/2023) foi **revogada** pelo Provimento 38, de 30/11/2023.
  - A base hoje é a Res. CNJ 35/2007, **art. 12-A** (Res. 571/2024). Ela exige pagamento do quinhão do incapaz "em parte ideal em cada um dos bens", veda atos de disposição e exige **manifestação favorável do MP**, que é condição de eficácia (§3º). Se o MP ou terceiro impugnar, o caso vai ao juiz (§4º). A norma não exige que as partes sejam "iguais".
  - Com testamento, o **art. 12-B** exige "expressa autorização do juízo sucessório competente em ação de abertura e cumprimento de testamento válido e eficaz, em sentença transitada em julgado". Se o testamento reconhecer filho ou trouxer outra declaração irrevogável, o inventário é obrigatoriamente judicial (§1º). Com incapaz, aplicam-se também as exigências do art. 12-A (inc. IV).
- **Redação sugerida (pergunta do ramo "Sim" de "Há testamento?"):** `O juiz da ação de abertura e cumprimento do testamento autorizou expressamente o inventário extrajudicial, por sentença transitada em julgado?`
- **Redação sugerida (texto do fim "Extrajudicial possível"):** `A Res. CNJ 35/2007 (art. 12-B, incluído pela Res. 571/2024) admite escritura se todos tiverem advogado, forem capazes e concordes e houver essa autorização. Se o testamento reconhecer filho ou trouxer outra declaração irrevogável, o inventário é judicial. Com herdeiro incapaz, valem também as exigências do art. 12-A.`
- **Redação sugerida (pergunta do ramo do incapaz):** `O quinhão do incapaz será pago em parte ideal em cada um dos bens, sem cessão, doação ou compensação?`
- **Redação sugerida (texto do fim):** `O art. 610 manda o inventário judicial, mas a Res. CNJ 35/2007 (art. 12-A, incluído pela Res. 571/2024) admite escritura nesse cenário, sem atos de disposição e com manifestação favorável do Ministério Público. Se o MP ou um terceiro impugnar, o caso vai ao juiz.`
- **Fontes:** [Res. CNJ 35/2007 compilada, arts. 12-A e 12-B](https://atos.cnj.jus.br/atos/detalhar/179); [TJSC, Código de Normas, art. 816-B (revogado)](https://www.tjsc.jus.br/web/codigo-de-normas/secao-vii-inventario-extrajudicial-com-interessado-incapaz-art.-816-b-).

**TGP-108 — DESATUALIZADO (média, gabarito)**
- **Arquivo:** tgp.js:164.
- **O material diz:** "O juiz pode declarar de ofício a incompetência territorial?" → "Não, salvo cláusula abusiva antes da citação". Justificativa: Súmula 33 do STJ e art. 63, §3º.
- **O que falta:** a segunda exceção legal, o juízo aleatório (art. 63, §5º). A alternativa marcada continua sendo a melhor, mas está incompleta.
- **Redação sugerida:** alternativa `Não, salvo cláusula abusiva antes da citação ou ação em juízo aleatório`; justificativa `Súmula 33 do STJ; exceções no art. 63, §§3º e 5º (Lei 14.879/2024).`
- **Fonte:** [CPC, art. 63, §5º](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm).

**PE-281 — DESATUALIZADO (média)**
- **Arquivo:** procesp3.js:7 (tabela "Precedentes que vinculam").
- **O material diz:** o art. 927 tem os incisos I a V.
- **O que falta:** o **inciso III-A**, incluído pela Lei 15.484/2026.
- **Redação sugerida (nova linha após III):** `` [`III-A`,`Acórdãos em recurso especial julgado sob o regime da relevância da questão federal (Lei 15.484/2026)`] ``
- **Fonte:** [CPC, art. 927](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm).

**TGP-252 — IMPRECISO (média)**
- **Arquivo:** tgp2.js:103.
- **O material diz:** "Quinto dia útil após a confirmação do recebimento, que deve ocorrer em até 3 dias úteis (art. 246, §1º-A)".
- **O erro:** o termo inicial (5º dia útil) está no **art. 231, IX**. O art. 246, §1º-A trata do prazo de confirmação e da consequência da falta dela (citação por outro meio). Faltam ainda a justa causa e a multa de até 5% (§§1º-B e 1º-C).
- **Redação sugerida:** `Quinto dia útil após a confirmação do recebimento (art. 231, IX). Sem confirmação em 3 dias úteis, a citação é refeita por correio, oficial, escrivão ou edital, e o réu deve justificar a falta na primeira oportunidade, sob pena de multa de até 5% do valor da causa (art. 246, §§1º-A a 1º-C).`
- **Fonte:** [CPC, arts. 231 e 246](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm).

**TGP-254 — IMPRECISO (média)**
- **Arquivo:** tgp2.js:105.
- **O material diz:** "Prazos materiais, como a dilação do edital ou a prescrição, correm em dias corridos."
- **O erro:** a dilação do edital (20 a 60 dias, art. 257, III) é prazo fixado pelo juiz dentro do processo, e não prazo de direito material. A forma de contá-la é controvertida. A prescrição está corretamente classificada.
- **Redação sugerida:** `Para prazos processuais em dias (art. 219). Prazos de direito material, como a prescrição e a decadência, correm em dias corridos. A dilação do edital (20 a 60 dias, art. 257, III) é fixada pelo juiz, e há divergência sobre contá-la em dias úteis.`
- **Fonte:** [CPC, arts. 219 e 257](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm).

**PE-210 e PE-234 — IMPRECISO (média); PE-243 (baixa, gabarito)**
- **Arquivos:** procesp2.js:36 (PE-210), procesp2.js:43 (PE-234) e procesp2.js:45 (PE-243).
- **O material diz:** "10 dias — prazo do recurso inominado".
- **O que falta:** nos Juizados, os prazos em dias, "inclusive para a interposição de recursos", contam-se só em **dias úteis** (Lei 9.099, art. 12-A, incluído pela Lei 13.728/2018).
- **Redação sugerida:** item de keys `` [`10`,`dias úteis`,`prazo do recurso inominado (arts. 42 e 12-A)`] ``; linha da tabela `` [`Prazo`,`10 dias, contados só em dias úteis (Lei 9.099/95, arts. 42 e 12-A)`] ``; quiz: justificativa `art. 42; contam-se só dias úteis (art. 12-A).`
- **Fonte:** [Lei 9.099/95, arts. 12-A e 42](https://www.planalto.gov.br/ccivil_03/leis/l9099.htm); [Lei 13.728/2018](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13728.htm).

**PE-332 — IMPRECISO (média); PE-340 (baixa, gabarito)**
- **Arquivos:** procesp3.js:31 (PE-332) e procesp3.js:34 (PE-340).
- **O material diz:** "Sem preparo: recolher em dobro em 5 dias. Preparo a menor: completar em 5 dias (art. 1.007, §§2º e 4º)". O quiz diz: "Não, recolhe em dobro em 5 dias".
- **O erro:** o §4º manda intimar o recorrente para recolher em dobro, mas **não fixa prazo**. O prazo de 5 dias é expresso só no §2º, para complementar. Na prática aplica-se o prazo fixado ou o subsidiário de 5 dias. Falta a vedação do §5º: se o recolhimento em dobro vier a menor, não há nova complementação.
- **Redação sugerida (procesp3.js:31):** `Dispensados MP, Fazenda e beneficiário da gratuidade; embargos de declaração não têm preparo. Sem preparo: o recorrente é intimado para recolher em dobro, sob pena de deserção (art. 1.007, §4º), e não pode complementar se esse recolhimento vier a menor (§5º). Preparo a menor: intimado, completa em 5 dias (§2º).`
- **Redação sugerida (quiz):** alternativa `Não, é intimado para recolher em dobro`.
- **Fonte:** [CPC, art. 1.007](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm).

**PE-344 e PE-355 — IMPRECISO (média; PE-355 é gabarito)**
- **Arquivos:** procesp3.js:39 (PE-344) e procesp3.js:45 (PE-355).
- **O material diz:** efeito translativo "não [em] REsp, RE e embargos de divergência". O quiz pergunta "REsp tem efeito translativo?" → "Não. Exige prequestionamento."
- **O que falta:** a ressalva. Prevalece que a matéria de ordem pública não prequestionada não abre a via especial. Mas, **conhecido** o recurso, o STJ e o STF julgam a causa aplicando o direito (art. 1.034 e p.ú.; Súm. 456/STF), e parte da doutrina e da jurisprudência admite o exame de ofício nesse momento. Uma banca pode cobrar qualquer das leituras.
- **Redação sugerida (tabela):** `Apelação, agravo, embargos de declaração e recurso ordinário. Em REsp e RE, prevalece que não, pela exigência de prequestionamento; mas, conhecido o recurso, o tribunal julga a causa e pode examinar matéria de ordem pública (art. 1.034).`
- **Redação sugerida (quiz):** reformular a pergunta para `Matéria de ordem pública não prequestionada abre, por si, o recurso especial?` → `Não`, com a justificativa `Exige prequestionamento; só depois de conhecido o recurso o STJ julga a causa (art. 1.034).`
- **Fonte:** [CPC, art. 1.034](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm); Súm. 456/STF.

**TGP-309 — IMPRECISO (média); TGP-308, TGP-318 e CALC-007 (baixa)**
- **Arquivos:** tgp2.js:184 (TGP-308/309), tgp2.js:195 (TGP-318) e engine.js:86 (CALC-007).
- **O material diz:** "Em causas de grande valor, a equidade é vedada (STJ, Tema 1.076)".
- **O que falta:**
  - A base legal expressa desde 2022: o **art. 85, §6º-A** proíbe a equidade quando o valor é líquido ou liquidável, salvo nas hipóteses do §8º. O **§8º-A** manda observar a tabela da OAB ou o mínimo de 10%, o que for maior.
  - A ressalva de que, nas causas com a **Fazenda Pública**, a questão está no STF (Tema 1.255/RG, RE 1.412.069). O tema foi delimitado às causas da Fazenda em questão de ordem de março de 2025. O mérito estava **pendente** nas fontes secundárias consultadas (até fev./2026); não consegui confirmar no portal do STF (403).
- **Redação sugerida (tgp2.js:184):** `<p>O juiz arbitra por equidade quando o proveito é inestimável ou irrisório ou o valor da causa é muito baixo (§8º), observando a tabela da OAB ou o mínimo de 10%, o que for maior (§8º-A). Fora disso, a equidade é proibida (§6º-A, Lei 14.365/2022; STJ, Tema 1.076). Nas causas com a Fazenda Pública, o STF ainda vai decidir a questão (Tema 1.255).</p>`
- **Redação sugerida (TGP-318, justificativa):** `Art. 85, §6º-A, e STJ, Tema 1.076 (entre particulares; com a Fazenda, aguarda-se o STF, Tema 1.255).`
- **Redação sugerida (CALC-007, final da dica):** `Equidade em causas de alto valor contra a Fazenda: pendente no STF (Tema 1.255).`
- **Fontes:** [CPC, art. 85](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm); [Lei 14.365/2022](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14365.htm); [Migalhas, QO no Tema 1.255](https://www.migalhas.com.br/quentes/426091/stf-limita-debate-sobre-honorarios-por-equidade-a-causas-da-fazenda); [Teses & Súmulas, Tema 1.255](https://tesesesumulas.com.br/tese/stf/1255). Antes de publicar, confira o status em [STF, Tema 1.255](https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?incidente=6521918&numeroProcesso=1412069&classeProcesso=RE&numeroTema=1255).

### Gravidade BAIXA (ajustes de precisão, prontos para colar)

| ID | Arquivo:linha | Problema | Redação sugerida | Fonte |
|---|---|---|---|---|
| PE-288 | procesp3.js:9 | Art. 932, IV/V, "b", agora inclui REsp com relevância reconhecida (Lei 15.484) | `Negar provimento a recurso contrário a súmula, repetitivo, REsp com relevância reconhecida, IRDR ou IAC; dar provimento, depois das contrarrazões, se a decisão recorrida for contrária a eles (IV e V).` | [CPC, art. 932](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm) |
| CON-198 | conhecimento2.js:91 | Divergência atualizada: a 4ª Turma (REsp 1.938.645/CE, 2024, Inf. 821) seguiu a 3ª | html: `A 3ª e a 4ª Turmas (REsp 1.938.645/CE, 2024) entendem que a contestação impede a estabilização e exigem intimação específica do autor para aditar; a 1ª Turma (REsp 1.797.365/RS) exige o recurso. Não há posição da Corte Especial.` | [Inf. 821 (Trilhante)](https://informativos.trilhante.com.br/julgados/stj-resp-1938645-ce) (secundária) |
| PE-331 | procesp3.js:31 | ED também não interrompem quando manifestamente incabíveis (ex.: contra a decisão que inadmite REsp na origem) | `Embargos de declaração interrompem o prazo para todos (art. 1.026), salvo se intempestivos ou manifestamente incabíveis, como os opostos contra a decisão que inadmite REsp ou RE na origem.` | [Rota Jurídica](https://www.rotajuridica.com.br/?p=958); [Sedep](https://www.sedep.com.br/?p=141739) (secundárias) |
| TGP-080 | tgp.js:136 | Interlocutória estrangeira cumpre-se por carta rogatória, não por homologação | `Sentença ou sentença arbitral estrangeira: homologação pelo STJ. Decisão interlocutória estrangeira: cumpre-se por carta rogatória, com exequatur (art. 960, §1º).` | [CPC, art. 960](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm) |
| TGP-197 | tgp2.js:39 | O efeito suspensivo do incidente é declarado pelo relator | `...e o relator do incidente declara se o processo fica suspenso (art. 146, §2º; art. 313, III).` | CPC, art. 146 |
| TGP-303 | tgp2.js:179 | O Decreto 6.891/2009 não é o de Las Leñas (este é o 2.067/1996) | `(como o Protocolo de Las Leñas, Decreto 2.067/1996, e o acordo Mercosul–Bolívia–Chile, Decreto 6.891/2009)` | [D. 2.067](https://www.planalto.gov.br/ccivil_03/decreto/1996/d2067.htm); [D. 6.891](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/decreto/d6891.htm) |
| TGP-005 | tgp.js:25 | "Denunciante (MP)" é termo pouco técnico no penal | `` `Ministério Público (autor da ação penal pública, por denúncia) ou querelante` `` | doutrina |
| TGP-032 | tgp.js:73 | Falta a intimação prévia para complementar as razões | `embargos de declaração recebidos como agravo interno, depois de intimado o recorrente para complementar as razões em 5 dias (art. 1.024, §3º)` | CPC, art. 1.024, §3º |
| TGP-183 | tgp2.js:23 | A Súm. 537 condiciona a condenação direta | `Se aceitar a denunciação ou contestar o pedido, pode ser condenada direta e solidariamente com o segurado, nos limites da apólice (Súmula 537 do STJ).` | Súm. 537/STJ |
| TGP-210 | tgp2.js:48 | Exceção da ECT | acrescentar: `Exceção: os Correios (ECT) têm os privilégios processuais da Fazenda por lei especial (DL 509/69, art. 12).` | [DL 509/69](https://www.planalto.gov.br/ccivil_03/decreto-lei/del0509.htm) |
| TGP-127 | tgp.js:200 | A regra de suscitar está no parágrafo único, não no inciso II | `art. 66, II. Quem não acolher a competência declinada deve suscitar o conflito, salvo se atribuí-la a outro juízo (art. 66, parágrafo único).` | CPC, art. 66 |
| TGP-266 | tgp2.js:113 | O §1º só vale com dois réus | `Cessa se, havendo só dois réus, apenas um contestar (§1º).` | CPC, art. 229 |
| TGP-023/024 | tgp.js:65 | Divergência doutrinária sobre a natureza da jurisdição voluntária e a coisa julgada | após "Caráter administrativo": `(corrente clássica; parte da doutrina vê natureza jurisdicional)` | doutrina |
| TGP-103, 112, 092, 107 | tgp.js:161, 173, 151, 162 | Ver TGP-096 acima | ver acima | Lei 14.879/2024 |
| CON-063 | conhecimento.js:102 | A multa é de "até" 2% | `` [`até 2%`,`multa`,`por ausência injustificada`] `` | CPC, art. 334, §8º |
| CON-209 | conhecimento2.js:98 | Na litispendência a repropositura depende da correção do vício; não é vedação absoluta | `Possível, salvo perempção e coisa julgada. Na litispendência e nos casos de inépcia, pressupostos, condições e arbitragem, só corrigindo o vício (art. 486, §1º); sempre pagando custas e honorários (§2º).` | CPC, art. 486 |
| CON-218 | conhecimento2.js:104 | O §4º, IV, é orientação administrativa, não precedente judicial | `...ou se fundada em súmula de tribunal superior, repetitivo, IRDR/IAC ou orientação vinculante do próprio ente (art. 496, §4º).` | CPC, art. 496 |
| PE-057 | procesp.js:57 | "Pena" e "desfazimento" eram termos do CPC/73 | `Perdas e danos, frutos e medida necessária e adequada para evitar nova moléstia e cumprir a tutela (art. 555).` | CPC, art. 555 |
| PE-164 | procesp2.js:9 | O REsp 1.731.464/SP é ação de cobrança e aplica o art. 601, p.ú., por analogia | html: `Em ação de cobrança entre sócios, o STJ aplicou por analogia o art. 601, parágrafo único: citados todos os sócios, a sociedade não precisa ser citada.` | [Conjur, 15/10/2018](https://www.conjur.com.br/2018-out-15/cobranca-nao-exige-citacao-sociedade-socios-integram-lide/) |
| PE-225 | procesp2.js:41 | Falta a Lei 13.994/2020 | acrescentar ao passo "Conciliação": `Pode ser não presencial, por videoconferência; se o réu não comparecer ou se recusar a participar, o juiz togado profere sentença (arts. 22, §2º, e 23).` | [Lei 13.994/2020](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l13994.htm) |
| PE-227 | procesp2.js:41 | As testemunhas podem ser intimadas, se a parte requerer | `Até 3 testemunhas por parte, levadas pela parte ou intimadas, se requerido até 5 dias antes; debates não obrigatórios (FONAJE 35).` | Lei 9.099, art. 34 |
| PE-266 / CALC-022 | procesp2.js:60; engine.js:114-116 | Discute-se se "não existindo outros bens" e o teto de 500 OTN alcançam as restituições de tributos | `Restituições de tributos pagos pela pessoa física; e, se não houver outros bens a inventariar, saldos bancários, poupança e fundos até 500 OTN (o alcance da condição sobre as restituições é discutido).` | [Lei 6.858/80, art. 2º](https://www.planalto.gov.br/ccivil_03/leis/l6858.htm) |
| CALC-020 | engine.js:108 | Em SC, a multa de 20% é por não *abrir* o inventário no prazo, não por não concluí-lo | `Multa estadual sobre o ITCMD (em SC, 20% para quem não abre o inventário no prazo legal — Lei SC 13.136/2004, art. 13, I, a), válida segundo a Súmula 542 do STF.` | [Lei SC 13.136/2004 (ALESC)](https://leis.alesc.sc.gov.br/html/2004/13136_2004_lei.html) |
| PE-291 | procesp3.js:11 | "Até o início da sessão" é o pedido de preferência (§2º) | `15 minutos por parte, nos casos do art. 937; preferência pedida até o início da sessão (§2º) e, por videoconferência, requerida até o dia anterior (§4º).` | CPC, art. 937 |
| CALC-001 / CALC-004 | engine.js:64 e mensagem da calculadora | Sexta-feira da Paixão é feriado religioso fixado em lei municipal; Carnaval e Corpus Christi variam por tribunal; não há ajuste para o DJe | acrescentar à mensagem final: `Carnaval, Corpus Christi e outros dias sem expediente variam por tribunal. Se a data informada for a da disponibilização no DJe, some um dia útil (art. 224, §2º).` | [Lei 9.093/95](https://www.planalto.gov.br/ccivil_03/leis/l9093.htm); [Lei 14.759/2023](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14759.htm) |

---

## 3. Ressalvas recomendadas (divergências legítimas, sem erro)

- **PE-330** (procesp3.js:31) está CORRETO segundo a Lei 14.939/2024. Sugiro citar a lei e registrar que a Corte Especial do STJ (QO no AREsp 2.638.376/MG, 5/2/2025, 7×6) a aplica a recursos anteriores à vigência. Fonte: [IBET](https://www.ibet.com.br/stj-corte-especial-questao-de-ordem-comprovacao-de-feriado-local-art-1-003-cpc-2015-alterado-pela-lei-federal-14-939-2024-retroatividade-aplicacao-recursos-interpostos-antes-de-sua-vigencia/) (secundária).
- **PE-089 / CALC-009 (ano e dia):** o método de contagem não é fixado em lei. O resultado do quiz não muda.
- **PE-348 (causa madura pode piorar a situação do recorrente):** é a posição admitida pelo STJ, mas criticada por parte da doutrina. Uma ressalva curta é opcional.
- **CON-174 (evidência só incidental):** leitura majoritária. Pode ser mantida.
- **CON-058 (alteração do pedido após o saneamento):** a posição minoritária admite negócio processual (art. 190). A ressalva é opcional.
- **TGP-075:** o art. 25, §2º, remete ao art. 63, §1º, cuja nova redação (pertinência) gera debate em contratos internacionais. A ressalva é opcional.

---

## 4. Não verificáveis

Os portais `busca.tjsc.jus.br` (bloqueio temporário), `scon.stj.jus.br` e `processo.stj.jus.br` (403) não puderam ser usados. Tudo abaixo é gravidade **baixa** para o aluno, porque o conteúdo de cada um é compatível com a lei. Mas citar número de processo inexistente ou errado num material vendido é um **risco de credibilidade**.

| ID | Arquivo:linha | Julgado / ato | Recomendação |
|---|---|---|---|
| PE-030 | procesp.js:27 | TJSC, ApCiv 5021111-82.2023.8.24.0008 (2026) | Conferir em busca.tjsc.jus.br (número, câmara, data). Se não confirmar, citar só a regra do art. 545, §2º. |
| PE-031 | procesp.js:28 | TJSC, ApCiv 5001516-76.2025.8.24.0930 (2026) | Idem. Conferir também o código "0930" da origem. |
| PE-046 | procesp.js:46 | TJSC, ApCiv 5008957-72.2021.8.24.0082 (2026) | Idem. |
| PE-047 | procesp.js:47 | TJSC, AI 5040023-49.2026.8.24.0000 (2026) | Idem. |
| PE-048 | procesp.js:48 | TJSC, AI 5009460-72.2026.8.24.0000 (2026) | Idem. |
| PE-273 | procesp2.js:63 | TJSC, ApCiv 5001043-74.2020.8.24.0119 (2025) | Idem. A tese confere com a Lei 6.858, art. 1º. |
| PE-274 | procesp2.js:64 | TJSC, ApCiv 5005492-75.2020.8.24.0022 (2021) | Idem. |
| PE-275 | procesp2.js:65 | TJSC, ApCiv 2012.075423-4 (2015) | Idem (numeração anterior ao padrão CNJ). |
| PE-276 / PE-270 | procesp2.js:66 e 61 | TJSC, CC 5058323-98.2022.8.24.0000 (2023): foro do domicílio do requerente no alvará | Conferir. Não há base legal expressa; há quem aplique o art. 48 por analogia. Sugiro escrever "Em SC, o TJ tem admitido...". |
| PE-105 | procesp.js:79 | AgInt nos EDcl nos EDcl no AREsp 1.222.042/SP (2019) | Substituir pelo **Tema 872/STJ (REsp 1.452.840/SP, repetitivo)**, precedente mais forte e localizável. A Súm. 303 confere. |
| PE-165 / PE-153 | procesp2.js:9 e 6 | AgInt no AREsp 1.861.293/RS (2021); "STJ exige vínculo pessoal" | Número não localizado. A tese (S.A. fechada personalista ou familiar, quebra da affectio) é a linha do STJ. Conferir no STJ ou substituir por precedente localizável. Lembro do EREsp 111.294/PR (2ª Seção, 2006), mas também **não o conferi**. |
| PE-166 | procesp2.js:9 | REsp 1.410.686/SP (2015): valor da causa | A notícia de 2015 (4ª T., Salomão) confirma a tese "capital do sócio afastado", mas o caso veio do **TJBA**. O número e a UF "/SP" não foram confirmados, e a parte "na total, o valor do contrato" não foi encontrada. Conferir ou retirar essa parte. Fonte: [notícia](https://www.idealsoftwares.com.br/idealnewsjd/noticia.php?id=2854). |
| PE-383 | procesp3.js:73 | REsp 1.750.079/SP | Não localizado. O conteúdo do caso está correto (art. 946; a sentença substitui a interlocutória). Sugiro retirar o número ou conferir. |
| PE-337 | procesp3.js:32 | "O STF tem decisões em sentido contrário" (à Súm. 484/STJ) | Não verificado. Indicar o precedente do STF ou retirar a frase. |

---

## 5. Divergências com o pesquisador (02)

1. **PE-060.** O pesquisador marcou "Confere", com a nota de que o prazo é do autor. Discordo da conclusão: o material atribui o pedido de caução "em 5 dias" ao réu, e pelo art. 559 os 5 dias são do **autor**. É erro (seção 2).
2. **PE-331.** O pesquisador apoiou a ressalva "na linha do EAREsp 275.615/SP". Esse precedente da Corte Especial (2014, Pargendler) decidiu o **contrário**: admitiu a interrupção. A orientação atual de que ED incabíveis contra a inadmissão do REsp não interrompem veio depois (por exemplo, AgInt nos EDcl nos EAREsp 1.632.917/SP, 2021, conferido só em fonte secundária). A ressalva continua válida, mas o precedente citado no 02 está trocado e não deve ser usado.
3. **PE-308.** O pesquisador apresentou a exceção do agravo interno como ligada à Lei 15.484. Ela existe desde a **Lei 13.256/2016**; a Lei 15.484 só acrescentou o regime de relevância. O material já estava incompleto antes de 2026. Por ser questão de cabimento (erro grosseiro), elevei a gravidade para alta.
4. **TGP-064.** Para o pesquisador era "indício de imprecisão". Classifiquei como **incorreto**: o quadro coloca o exemplo típico de *exceção* ao duplo grau na categoria "duplo grau sem recurso".
5. **CON-001.** O pesquisador apontou imprecisão ("o Título I vai até o art. 512"). Considero **correto**: o material delimita a fase de conhecimento (318–508) e trata a liquidação à parte.
6. **TGP-127.** O pesquisador marcou "Confere". Há uma imprecisão leve de citação: a regra de suscitar o conflito está no art. 66, parágrafo único, e não no inciso II.
7. **PE-192 / CALC-020.** O pesquisador não conseguiu a fonte primária. Eu conferi na ALESC: a Lei SC 13.136/2004, art. 13, I, "a" (red. Lei 14.967/2009), prevê multa de 20% do imposto para quem deixar de "abrir, dentro de prazo legal, processo de inventário ou partilha". O percentual está correto. O fato gerador é a não abertura, o que pede ajuste fino na calculadora.
8. **PE-361 (direito intertemporal).** O pesquisador escreveu "vigente desde 03/09/2026", o que é correto. Acrescento que, pelo art. 4º da lei (fonte primária), a exigência do tópico de relevância se aplica aos REsp contra **acórdãos publicados após** a vigência, e não a todo recurso interposto depois de 3/9/2026.
9. **PE-332.** Concordo com a imprecisão, mas a considero menos grave que o 02 sugere. Na falta de prazo no §4º, aplica-se o prazo fixado pelo relator ou o subsidiário de 5 dias, então "5 dias" é o resultado prático usual. O ponto relevante é a omissão do §5º.
10. **TGP-309 / Tema 1.255.** Concordo que o mérito estava pendente nas fontes encontradas (até fev./2026). Não consegui confirmar no portal do STF (403), então o texto sugerido manda o autor conferir antes de publicar.

Nos demais itens com indício de discrepância, a análise do pesquisador confere com a fonte primária (art. 63, 231/246, 960, 1.007, 1.042, 927, 932, 998, 1.030; CF, art. 102, III, e 105, §§2º–3º; Lei 9.099, arts. 12-A, 22 e 23; Res. CNJ 35, arts. 12-A e 12-B; Código de Normas TJSC, art. 816-B revogado; Decretos 2.067 e 6.891; DL 509, art. 12).

---

## 6. Amostragem dos itens "conformes"

Reconferi no texto compilado (CPC, Lei 9.099, CF, Lei 11.419, Lei 6.858) os seguintes IDs que o 02 marcou como conformes, priorizando prazos e numeração. Os resultados estão logo abaixo.

- **TGP (48 de 336, cerca de 14%):** 054, 066, 104, 126, 128, 135, 142, 143, 145, 150, 151, 159, 160, 161, 166, 167, 196, 216, 217, 218, 229, 231, 232, 238, 239, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 255, 256, 259, 261, 262, 268, 270, 321, 322, 328, 331, 334, 336.
- **CON (52 de 247, cerca de 21%):** 020, 021, 024, 031, 035, 036, 038, 039, 040, 041, 042, 046, 047, 069, 073, 077, 080, 081, 082, 083, 088, 094, 100, 127, 131, 142, 144, 147, 154, 155, 162, 163, 169, 170, 172, 186, 187, 188, 189, 190, 192, 193, 200, 201, 203, 205, 206, 207, 217, 219, 230, 233.
- **PE (60 de 389, cerca de 15%):** 007, 014, 019, 020, 021, 022, 024, 025, 026, 027, 032, 033, 034, 039, 042, 043, 044, 052, 069, 070, 085, 086, 095, 096, 107, 118, 120, 121, 122, 131, 134, 145, 154, 155, 156, 161, 167, 177, 179, 180, 181, 185, 191, 194, 198, 235, 237, 254, 258, 259, 278, 287, 290, 294, 329, 341, 360, 363, 372, 374.
- **CALC (6 de 22):** 002, 011, 012, 013, 014, 015.

**Resultado:** os 166 itens conferem com a lei: prazos (5, 10, 15, 20, 30 dias; 1 e 2 meses; 1 e 2 anos), percentuais (1–10% do art. 81; 1–5% do art. 1.021, §4º; 2% e 10% do art. 1.026; 3–5% do art. 338; 5% do art. 701), números de incisos e parágrafos.

Ao lado da amostra, li as 994 linhas do 01 confrontadas com o 02 e encontrei dois itens que o pesquisador havia dado como conformes e não estão: **PE-060**, um erro novo que levei para a seção 2, e **TGP-127**, uma imprecisão leve. Por isso ampliei a verificação a todos os itens de prazo ou parte processual em que a lei atribui o ato a uma parte específica (arts. 104, 113, 218, 303, 331, 332, 338, 539, 545, 550, 559, 564, 565, 675, 701, 759 e 760). Não apareceu outro erro desse tipo.

Também conferi de memória consolidada, sem portal oficial, os textos das súmulas citadas: STJ 7, 33, 84, 161, 195, 203, 211, 235, 240, 282, 299, 303, 339, 484, 503, 537, 619; STF 282, 356, 542, 640; SV 23. Todas conferem. Conferem ainda os números dos REsp dos Temas 988 e 1.076 e os enunciados FONAJE 8, 35, 37, 54 e 69.


## Continuação da revisão — 12/10/2026

O registro anterior é histórico. Esta atualização não representa uma nova conferência integral das 994 afirmações.

- **PE-383 — referência agora confirmada:** REsp 1.750.079/SP, rel. Min. Nancy Andrighi, Terceira Turma, julgado em 13/8/2019, DJe 15/8/2019, Informativo 654. O STJ não conheceu do REsp tirado do agravo diante de sentença de extinção sem resolução de mérito, não apelada. A referência deixou de ser “não localizada”; a perda de objeto não deve ser generalizada a qualquer sentença superveniente. [Fonte oficial](https://processo.stj.jus.br/jurisprudencia/externo/informativo/?acao=pesquisar&aplicacao=informativo&livre=%40CNOT%3D%27017149%27).
- **PE-105 — tese confirmada:** o Tema 872/STJ (REsp 1.452.840/SP) confirma os critérios de causalidade e sucumbência em embargos de terceiro. Isso não confirma, por si, o AgInt no AREsp 1.222.042/SP anteriormente citado. [Tema oficial](https://processo.stj.jus.br/repetitivos/temas_repetitivos/pesquisa.jsp?cod_tema_final=872&cod_tema_inicial=872&novaConsulta=true&tipo_pesquisa=T).
- **CON-198 — fonte primária acessível:** o Informativo 821 confirma o REsp 1.938.645/CE, a aptidão da contestação para impedir a estabilização e a necessidade de intimação específica para aditar. Esta rodada não confirmou uniformização posterior da divergência entre turmas. [Fonte oficial](https://processo.stj.jus.br/jurisprudencia/externo/informativo/?livre=%40CNOT%3D020920).
- **Embargos contra inadmissão do REsp:** evitar regra absoluta. O STJ ressalva a decisão tão genérica que inviabilize o agravo; a orientação foi incorporada ao aviso na Vault.
- **Tema 1.255/STF:** a abertura do andamento oficial falhou. O resultado atual do mérito permanece pendente de confirmação nesta revisão; não extrapolar informação antiga como se atual.
- **CNJ:** foram localizados os textos oficiais indexados da Resolução 35/2007 e da alteração pela Resolução 571/2024, inclusive os arts. 12-A e 12-B; o acesso integral ao portal e aos PDFs falhou nesta rodada. A revogação do art. 816-B foi reconferida na página oficial do TJSC.

**Etapa interrompida concluída:** 25 avisos acrescentados em 20 notas da Vault, com fontes e ressalvas; texto anterior preservado. As correções do protótipo já constavam dos commits c570876 e 0d6ea6e quando esta continuação começou. Não houve nova revisão integral da doutrina nem validação de todos os julgados do TJSC.
