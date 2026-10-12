# Revisão jurídica — 01. Inventário de afirmações verificáveis

Etapa: LEITOR (extração fiel, sem juízo de mérito). Fonte: `prototipo/pacotes/inciso-materiais/src/conteudo/*.js` (tgp, tgp2, conhecimento, conhecimento2, procesp, procesp2, procesp3) e, por conterem regras jurídicas exibidas ao aluno, as calculadoras de `prototipo/pacotes/inciso-materiais/src/engine.js` (CALC.prazo, valorcausa, honor, forca, resolucao, inventario, alvara).

Convenções:
- "Arquivo:linha" aponta a linha física do arquivo. Muitos módulos estão em uma única linha longa; nesses casos a linha indica o bloco (flips, quiz etc.).
- "Base legal citada" reproduz o que o material cita. "CPC" implícito quando o material cita só "art. X" dentro de contexto do CPC; quando a lei é outra, ela é indicada.
- Nos gabaritos, a coluna Afirmação traz: pergunta → resposta dada como correta (justificativa do material).
- Nenhuma afirmação foi avaliada como certa ou errada. Os "pontos de maior risco" abaixo são apenas priorização para o pesquisador.

## Resumo

| Matéria | Prefixo | Módulos | Afirmações |
|---|---|---|---|
| Teoria Geral do Processo (tgp.js, tgp2.js) | TGP | 16 | 336 |
| Processo de Conhecimento (conhecimento.js, conhecimento2.js) | CON | 16 | 247 |
| Procedimentos Especiais e Recursos (procesp.js, procesp2.js, procesp3.js) | PE | 20 | 389 |
| Calculadoras (engine.js) | CALC | 7 | 22 |
| **Total** | | | **994** |

Por tipo, os gabaritos de quiz e casos práticos somam 162 itens (TGP 51, CON 45, PE 66) e estão marcados com o tipo "gabarito".

### Pontos de maior risco (prioridade para o pesquisador)

Critério: prazos e números, numeração de artigos/incisos/parágrafos, gabaritos, e dispositivos alterados depois de 2015 ou objeto de jurisprudência que mudou. Ordem de prioridade. Não é juízo de erro: é onde a conferência deve começar.

1. **Eleição de foro (art. 63) sem menção à Lei 14.879/2024** — TGP-096, TGP-102, TGP-103, TGP-104, TGP-108, TGP-112. O material descreve a eleição de foro apenas como "contrato escrito que mencione o negócio" e o controle de abusividade do §3º. A Lei 14.879/2024 alterou o §1º (pertinência com domicílio/residência de uma das partes ou local da obrigação) e incluiu o §5º (juízo aleatório como prática abusiva). Conferir.
2. **Citação eletrônica e termo inicial (arts. 231, IX e 246, §1º-A) — Lei 14.195/2021** — TGP-252: "quinto dia útil após a confirmação do recebimento, que deve ocorrer em até 3 dias úteis". Conferir redação, numeração (231, IX x 246, §1º-A) e as consequências da falta de confirmação.
3. **Feriado local (art. 1.003, §6º) — Lei 14.939/2024** — PE-330 afirma que o vício é sanável. Conferir redação vigente e a jurisprudência do STJ sobre a aplicação no tempo.
4. **Honorários: Tema 1.076 do STJ e Lei 14.365/2022 (art. 85, §§6º-A e 8º-A)** — TGP-304, TGP-308, TGP-309, TGP-315, TGP-318, TGP-333, CALC-007, CALC-008. O material trata da vedação à equidade só pelo Tema 1.076, sem os §§6º-A/8º-A, e sem a discussão sobre a Fazenda Pública no STF (Tema 1.255/RG). Conferir também as faixas do §3º e os números dos REsp do Tema 1.076.
5. **Prazos em dobro (arts. 180, 183, 186, 229)** — TGP-161, TGP-166, TGP-200 a TGP-202, TGP-209, TGP-210, TGP-214, TGP-263 a TGP-267, CALC-003. Inclui: dobro do art. 229 só em autos físicos; "cessa se, de dois réus, só um se defende"; empresas públicas e sociedades de economia mista sem dobro; NPJ conveniados (art. 186, §3º).
6. **Termo inicial e contagem (arts. 219, 224 e 231)** — TGP-244 a TGP-255 e o gabarito TGP-268 (DJe disponibilizado na segunda → publicação na terça → início na quarta). Também: "prazos materiais, como a dilação do edital, correm em dias corridos" (TGP-254) e intimação eletrônica com 10 dias corridos (TGP-248, Lei 11.419/06, art. 5º, §3º).
7. **Fungibilidade, embargos de declaração e multas recursais** — TGP-032 (art. 1.024, §3º: ED recebidos como agravo interno), PE-331 ("ED interrompem o prazo para todos, salvo intempestivos", art. 1.026), PE-363 (multa de até 2% e até 10% na reiteração), PE-360 (agravo interno: multa de 1% a 5%), PE-332/PE-340 (preparo em dobro em 5 dias). Conferir numeração e percentuais.
8. **Rol do agravo de instrumento e Tema 988 (art. 1.015)** — PE-358, PE-359, PE-364 a PE-371, CON-132, CON-134, CON-139, CON-151, CON-156, CON-181, TGP-185, TGP-223. Conferir os incisos (IV desconsideração, V gratuidade, XI ônus da prova, XIII outros casos; ausência do XII), o parágrafo único (liquidação, cumprimento, execução e inventário) e a tese do Tema 988.
9. **RE contra acórdão que "declara constitucional a lei federal"** — PE-381 (caso "Ação contra a União"). Conferir com as alíneas do CF, art. 102, III (a alínea "b" trata de declaração de inconstitucionalidade de tratado ou lei federal). Junto: PE-361, PE-362, PE-374, PE-387 (REsp por divergência, CF art. 105, III, "c").
10. **Inventário extrajudicial com testamento ou com herdeiro incapaz e prazos do art. 611** — PE-171 a PE-176 (Res. CNJ 35/2007 alterada pela Res. 571/2024; Circular CGJ-SC 52/2023), gabarito PE-193 (2 meses) e CALC-018 a CALC-020 (12 meses para concluir; multa de 20% em SC). Normas administrativas recentes e voláteis.

Segunda prioridade:
- **Juizados (Lei 9.099/95)** — PE-207 a PE-246: recurso inominado em 10 dias e contagem em dias úteis (Lei 13.728/2018, não mencionada) (PE-210, PE-234, PE-243); preparo em 48 h (PE-235); ED "5 dias, interrompem" (PE-237); legitimados do art. 8º, §1º (PE-219); enunciados FONAJE 8, 35, 37, 54 e 69 (PE-128, PE-213, PE-215, PE-216, PE-224, PE-227); conciliação não presencial e revelia (Lei 13.994/2020) não tratadas.
- **Suspensão por parto/adoção (30 dias) e paternidade (8 dias)** — art. 313, IX e X, §§6º e 7º (Lei 13.363/2016) — TGP-328, TGP-329, TGP-336. Também TGP-323 (2 a 6 meses; 15 dias) e TGP-331 (3 meses / 1 ano).
- **Remessa necessária** — limites de 1.000/500/100 SM e exceção por precedente (art. 496) — CON-218.
- **Ampliação do colegiado (art. 942)** — PE-298 a PE-302, PE-304.
- **Apelação sem efeito suspensivo (art. 1.012, §1º, I a VI)** — PE-349, PE-061, PE-146, PE-261, CON-181.
- **Audiência do art. 334** — CON-060 a CON-078: 30/20/10 dias, multa de até 2% "para a União ou o Estado", 2 meses, 20 minutos.
- **Arrolamento** — PE-197 a PE-200: comum até 1.000 SM; sumário "homologa primeiro, tributa depois".
- **Alvará (Lei 6.858/80)** — PE-264 a PE-279, CALC-021, CALC-022: 500 OTN; "sem limite de valor" no art. 1º.
- **Julgados de 2025–2026 do TJSC e números de processo** — PE-030, PE-031, PE-046 a PE-048, PE-273 a PE-276: conferir existência, número e ano.
- **Estabilização da tutela antecedente (REsp 1.760.966/2018)** — CON-198: o próprio material registra divergência; conferir posição atual do STJ.
- **TGP-064** — "Competência originária do STF" listada como exemplo de "duplo grau sem recurso"; conferir coerência conceitual.
- **Calculadora de prazos** — CALC-001 a CALC-004: feriados considerados (inclui 20/11, exclui Carnaval e Corpus Christi), recesso de 20/12 a 20/1 e contagem a partir da data informada (sem a regra do DJe).

---

## Teoria Geral do Processo

### Módulo `fundamentos` — Jurisdição, ação e processo

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-001 | tgp.js:3-4 | O CPC é a Lei 13.105/2015. | Lei 13.105/2015 | artigo |
| TGP-002 | tgp.js:19 | Jurisdição é una, exercida por juízes e tribunais em todo o país. | CPC, art. 16 | artigo |
| TGP-003 | tgp.js:20 | Ação é direito público, subjetivo, autônomo e abstrato; existe mesmo que o autor não tenha razão. | não cita | conceito |
| TGP-004 | tgp.js:22 | Lide é conflito de interesses qualificado por pretensão resistida. | não cita | conceito |
| TGP-005 | tgp.js:25-27 | Nomenclatura: requerente/requerido (civil); exequente/executado (execução); denunciante (MP) ou querelante/denunciado (penal); indiciado no inquérito. | não cita | conceito |
| TGP-006 | tgp.js:34-38 | Justiça comum (estadual, residual; federal, União) e especial (trabalho, eleitoral, militar). | não cita | conceito |
| TGP-007 | tgp.js:41 | Cobrança entre vizinhos → Justiça Estadual (competência residual). | não cita | conceito |
| TGP-008 | tgp.js:42 | União ré → Justiça Federal; causas de interesse da União, autarquias e empresas públicas federais. | CF, art. 109, I | artigo |
| TGP-009 | tgp.js:43 | Horas extras de empregado → Justiça do Trabalho. | CF, art. 114 | artigo |
| TGP-010 | tgp.js:44 | Impugnação de registro de candidatura → Justiça Eleitoral. | não cita | conceito |
| TGP-011 | tgp.js:46 | Quiz: ação é abstrata porque → "existe independentemente do resultado do processo". | não cita | gabarito |
| TGP-012 | tgp.js:47 | Quiz: justiça de competência residual → Estadual. | não cita | gabarito |
| TGP-013 | tgp.js:48 | Quiz: na execução o réu é → executado. | não cita | gabarito |

### Módulo `jurisdicao` — Características e princípios da jurisdição

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-014 | tgp.js:55 | Inércia: Judiciário depende de provocação; iniciado, anda por impulso oficial. | CPC, art. 2º | artigo |
| TGP-015 | tgp.js:56 | Substitutividade: o Estado substitui a vontade das partes. | não cita | conceito |
| TGP-016 | tgp.js:57 | Definitividade: só a decisão judicial se torna imutável pela coisa julgada. | CPC, art. 502 | artigo |
| TGP-017 | tgp.js:59 | Investidura por concurso de provas e títulos. | CF, art. 37, II e 93, I | artigo |
| TGP-018 | tgp.js:60 | Territorialidade (aderência ao território) — leis de organização judiciária. | não cita artigo | conceito |
| TGP-019 | tgp.js:61 | Indeclinabilidade: juiz não pode se recusar a julgar, nem por lacuna. | CPC, art. 140 | artigo |
| TGP-020 | tgp.js:62 | Indelegabilidade decorre do juiz natural. | não cita | conceito |
| TGP-021 | tgp.js:63 | Inafastabilidade. | CF, art. 5º, XXXV; CPC, art. 3º | artigo |
| TGP-022 | tgp.js:64 | Juiz natural: ninguém escolhe juiz nem é julgado por tribunal de exceção. | CF, art. 5º, XXXVII e LIII | artigo |
| TGP-023 | tgp.js:65 | Jurisdição voluntária: sem lide, caráter administrativo, "interessados"; exemplos: alvará, autorização de viagem de menor, divórcio consensual judicial. | CPC, arts. 719 a 770 | artigo |
| TGP-024 | tgp.js:65 | Jurisdição contenciosa forma coisa julgada material (contraposta à voluntária). | não cita | conceito |
| TGP-025 | tgp.js:67 | Autotutela em regra proibida; pode ser crime de exercício arbitrário das próprias razões. | CP, art. 345 | artigo |
| TGP-026 | tgp.js:67 | Exceções à vedação da autotutela: legítima defesa e desforço imediato da posse. | CC, art. 1.210, §1º | artigo |
| TGP-027 | tgp.js:68 | Estado deve promover autocomposição. | CPC, art. 3º, §§2º e 3º | artigo |
| TGP-028 | tgp.js:69 | Conciliação: quando não há vínculo anterior entre as partes. | CPC, art. 165, §2º | artigo |
| TGP-029 | tgp.js:70 | Mediação: quando há vínculo anterior. | CPC, art. 165, §3º; Lei 13.140/2015 | artigo |
| TGP-030 | tgp.js:71 | Arbitragem só para direitos patrimoniais disponíveis; sentença arbitral tem os efeitos da judicial e, se condenatória, é título executivo. | Lei 9.307/96, arts. 1º e 31 | artigo |
| TGP-031 | tgp.js:73 | Fungibilidade recursal: dúvida objetiva, ausência de erro grosseiro e interposição no prazo do recurso correto. | não cita | requisito |
| TGP-032 | tgp.js:73 | Casos expressos: embargos de declaração recebidos como agravo interno. | art. 1.024, §3º | recurso |
| TGP-033 | tgp.js:73 | Recurso especial remetido ao STF. | art. 1.032 | recurso |
| TGP-034 | tgp.js:73 | Recurso extraordinário remetido ao STJ. | art. 1.033 | recurso |
| TGP-035 | tgp.js:75 | Quiz: juiz recusa julgar por falta de lei → viola indeclinabilidade. | CPC, art. 140 | gabarito |
| TGP-036 | tgp.js:76 | Quiz: processo só começa com a petição inicial → inércia. | CPC, art. 2º | gabarito |
| TGP-037 | tgp.js:77 | Quiz: sócios querem retomar diálogo → mediação. | CPC, art. 165, §3º | gabarito |
| TGP-038 | tgp.js:78 | Quiz: sentença arbitral condenatória → título executivo judicial. | CPC, art. 515, VII; Lei 9.307/96, art. 31 | gabarito |

### Módulo `principios` — Princípios do processo

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-039 | tgp.js:82 | Normas fundamentais do CPC são os arts. 1º a 12. | CPC, arts. 1º a 12 | artigo |
| TGP-040 | tgp.js:85 | Devido processo legal. | CF, art. 5º, LIV | artigo |
| TGP-041 | tgp.js:86 | Contraditório: não se decide contra a parte sem ouvi-la; basta a oportunidade. | CPC, art. 9º | artigo |
| TGP-042 | tgp.js:86 | Vedada decisão surpresa. | art. 10 | artigo |
| TGP-043 | tgp.js:87 | Ampla defesa. | CF, art. 5º, LV | artigo |
| TGP-044 | tgp.js:88 | Isonomia / paridade de armas. | CPC, art. 7º | artigo |
| TGP-045 | tgp.js:89 | Duração razoável, introduzida pela EC 45/2004. | CF, art. 5º, LXXVIII; CPC, art. 4º | artigo |
| TGP-046 | tgp.js:90 | Juiz natural e imparcial; impedimento e suspeição. | CF, art. 5º, XXXVII e LIII; CPC, arts. 144 e 145 | artigo |
| TGP-047 | tgp.js:91 | Publicidade, salvo segredo de justiça. | CF, arts. 5º, LX, e 93, IX; CPC, art. 189 | artigo |
| TGP-048 | tgp.js:92 | Motivação, sob pena de nulidade. | CF, art. 93, IX; CPC, arts. 11 e 489, §1º | artigo |
| TGP-049 | tgp.js:94 | Inércia e demanda; juiz adstrito ao pedido. | CPC, arts. 2º, 141 e 492 | artigo |
| TGP-050 | tgp.js:95 | Instrumentalidade das formas. | CPC, arts. 188 e 277 | artigo |
| TGP-051 | tgp.js:96 | Economia processual: aproveitamento de atos. | art. 283 | artigo |
| TGP-052 | tgp.js:97 | Eficiência como dever do juiz. | CPC, art. 8º | artigo |
| TGP-053 | tgp.js:98 | Boa-fé e cooperação. | CPC, arts. 5º e 6º | artigo |
| TGP-054 | tgp.js:98 | Má-fé gera multa. | arts. 80 e 81 | artigo |
| TGP-055 | tgp.js:99 | Duplo grau implícito na CF; expresso na Convenção Americana; não absoluto. | CADH, art. 8.2.h | conceito |
| TGP-056 | tgp.js:101 | Prescrição não alegada: juiz deve ouvir as partes antes (vedação de surpresa, mesmo em matéria de ofício). | CPC, art. 10 | artigo |
| TGP-057 | tgp.js:102 | Tribunal criado após o fato → juiz natural. | CF, art. 5º, XXXVII | artigo |
| TGP-058 | tgp.js:103 | "Presentes os pressupostos legais, defiro" não é fundamentação. | CPC, art. 489, §1º, III | artigo |
| TGP-059 | tgp.js:104 | Citação viciada com comparecimento e contestação: não se anula. | CPC, art. 239, §1º e 277 | artigo |
| TGP-060 | tgp.js:105 | Processo parado anos aguardando despacho → duração razoável. | CF, art. 5º, LXXVIII | artigo |
| TGP-061 | tgp.js:106-112 | Art. 489, §1º, incisos I a VI (reproduzir lei; conceito indeterminado; motivos genéricos; não enfrentar argumentos; precedente sem fundamentos determinantes; deixar de seguir precedente sem distinção/superação); decisão assim desafia embargos de declaração. | CPC, art. 489, §1º | artigo |
| TGP-062 | tgp.js:113 | REsp e RE só discutem direito; ED julgados pelo mesmo órgão ("recurso sem duplo grau pleno"). | não cita | recurso |
| TGP-063 | tgp.js:113 | Remessa necessária: sentença contra a Fazenda sobe sem apelação ("duplo grau sem recurso"). | CPC, art. 496 | artigo |
| TGP-064 | tgp.js:113 | "Competência originária do STF: não há instância acima" listada sob "duplo grau sem recurso". | não cita | conceito |
| TGP-065 | tgp.js:115 | Corte IDH, Caso Mohamed vs. Argentina (2012): direito de recorrer da primeira condenação, mesmo que reforme absolvição; revisão ampla. | CADH, art. 8.2.h | súmula-jurisprudência |
| TGP-066 | tgp.js:116 | Segredo de justiça: interesse público/social; casamento, divórcio, união estável, filiação, alimentos e guarda; intimidade; arbitragem com confidencialidade comprovada; terceiro com interesse jurídico pode pedir certidão do dispositivo. | CPC, art. 189 | artigo |
| TGP-067 | tgp.js:118 | Quiz: contraditório exige manifestação efetiva? → Não, basta a oportunidade. | não cita | gabarito |
| TGP-068 | tgp.js:119 | Quiz: fundamento não debatido, matéria de ordem pública → deve ouvir as partes antes. | CPC, art. 10 | gabarito |
| TGP-069 | tgp.js:120 | Quiz: remessa necessária é → duplo grau sem recurso. | não cita | gabarito |
| TGP-070 | tgp.js:121 | Quiz: prazo em dobro da Defensoria concretiza → isonomia material. | não cita | gabarito |

### Módulo `internacional` — Limites da jurisdição e cooperação

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-071 | tgp.js:127 | Concorrente (arts. 21 e 22): réu domiciliado no Brasil; obrigação a cumprir aqui; fato/ato praticado aqui; alimentos com credor domiciliado aqui; consumo com consumidor aqui. | CPC, arts. 21 e 22 | artigo |
| TGP-072 | tgp.js:127 | Ação no estrangeiro não induz litispendência. | art. 24 | artigo |
| TGP-073 | tgp.js:127 | Exclusiva (art. 23): imóveis no Brasil; confirmação de testamento particular, inventário e partilha de bens no Brasil; partilha de bens situados no Brasil em divórcio/separação/união estável; sentença estrangeira sobre isso não é homologada. | CPC, art. 23 | artigo |
| TGP-074 | tgp.js:128 | Competência exclusiva não abrange o divórcio em si, só a partilha dos bens no Brasil. | não cita | conceito |
| TGP-075 | tgp.js:129 | Cláusula de foro exclusivo estrangeiro em contrato internacional afasta jurisdição brasileira se o réu alegar na contestação, salvo competência exclusiva. | CPC, art. 25 | artigo |
| TGP-076 | tgp.js:131 | Carta precatória: entre juízos nacionais de comarcas diferentes. | não cita | conceito |
| TGP-077 | tgp.js:132 | Carta rogatória: depende de exequatur do STJ quando vem de fora. | CF, art. 105, I, i | artigo |
| TGP-078 | tgp.js:133 | Carta de ordem: de tribunal para juízo vinculado. | não cita | conceito |
| TGP-079 | tgp.js:134 | Carta arbitral: árbitro → Judiciário. | CPC, art. 237, IV | artigo |
| TGP-080 | tgp.js:136 | Homologação: sentença, decisão interlocutória ou sentença arbitral estrangeira. | CPC, art. 960 | artigo |
| TGP-081 | tgp.js:137 | Competência do STJ para homologar. | CF, art. 105, I, i | artigo |
| TGP-082 | tgp.js:138 | Requisitos: autoridade competente, citação regular, eficácia no país de origem, não ofender coisa julgada brasileira nem ordem pública, tradução oficial. | CPC, art. 963 | requisito |
| TGP-083 | tgp.js:139 | Sentença estrangeira de divórcio consensual produz efeitos sem homologação. | CPC, art. 961, §5º | artigo |
| TGP-084 | tgp.js:141 | Quiz: inventário de bens no Brasil de morto na Itália → competência exclusiva brasileira. | CPC, art. 23, II | gabarito |
| TGP-085 | tgp.js:142 | Quiz: testemunha em outra comarca → carta precatória. | não cita | gabarito |
| TGP-086 | tgp.js:143 | Quiz: quem homologa sentença estrangeira → STJ. | CF, art. 105, I, i | gabarito |

### Módulo `competencia` — Competência absoluta e relativa

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-087 | tgp.js:149 | Absoluta: matéria, pessoa, função/hierarquia; inalterável. | não cita | conceito |
| TGP-088 | tgp.js:149 | Relativa: território (domicílio do réu) e valor da causa. | art. 46 | artigo |
| TGP-089 | tgp.js:149 | Exceção: território absoluto em imóveis e possessórias. | art. 47 | artigo |
| TGP-090 | tgp.js:151 | Incompetência absoluta: qualquer tempo e grau; juiz declara de ofício. | CPC, art. 64, §1º | artigo |
| TGP-091 | tgp.js:151 | Relativa: alegada pelo réu em preliminar de contestação; MP pode alegar nas causas em que atua. | art. 65, parágrafo único | artigo |
| TGP-092 | tgp.js:151 | Juiz não reconhece incompetência relativa de ofício. | Súmula 33 do STJ | súmula-jurisprudência |
| TGP-093 | tgp.js:152 | Incompetência absoluta pode fundamentar ação rescisória. | art. 966, II | artigo |
| TGP-094 | tgp.js:152 | Relativa não alegada se prorroga. | art. 65 | artigo |
| TGP-095 | tgp.js:153 | Absoluta é inderrogável por convenção. | art. 62 | artigo |
| TGP-096 | tgp.js:153 | Relativa pode ser modificada por eleição de foro "em contrato escrito que mencione o negócio" (sem menção à Lei 14.879/2024). | art. 63 | artigo |
| TGP-097 | tgp.js:154 | Declarada a incompetência, autos ao juízo competente; decisões do incompetente conservam efeitos até outra decisão. | art. 64, §§3º e 4º | artigo |
| TGP-098 | tgp.js:156 | Ação de família em vara cível havendo vara de família → absoluta (matéria). | não cita | conceito |
| TGP-099 | tgp.js:157 | Cobrança fora do domicílio do réu → relativa. | art. 46 | artigo |
| TGP-100 | tgp.js:158 | União ré na Justiça Estadual → absoluta (pessoa). | CF, art. 109, I | artigo |
| TGP-101 | tgp.js:159 | Possessória de imóvel fora do foro do imóvel → absoluta. | CPC, art. 47, §2º | artigo |
| TGP-102 | tgp.js:160 | Foro de eleição em Joaçaba, ação em Chapecó → relativa. | não cita | conceito |
| TGP-103 | tgp.js:161 | Antes da citação, juiz pode reputar ineficaz de ofício cláusula de foro abusiva e remeter ao foro do domicílio do réu. | art. 63, §3º | artigo |
| TGP-104 | tgp.js:161 | Citado, o réu alega abusividade na contestação, sob pena de preclusão. | art. 63, §4º | artigo |
| TGP-105 | tgp.js:162 | Teto do Juizado Especial Cível estadual: 40 salários mínimos. | Lei 9.099/95, art. 3º | prazo |
| TGP-106 | tgp.js:162 | Teto dos Juizados Federais e da Fazenda Pública: 60 salários mínimos. | não cita | prazo |
| TGP-107 | tgp.js:162 | Súmula 33 do STJ: incompetência relativa não se declara de ofício. | Súmula 33 do STJ | súmula-jurisprudência |
| TGP-108 | tgp.js:164 | Quiz: juiz declara de ofício incompetência territorial? → Não, salvo cláusula abusiva antes da citação. | Súmula 33 do STJ; CPC, art. 63, §3º | gabarito |
| TGP-109 | tgp.js:165 | Quiz: réu não alegou incompetência relativa → prorrogação. | CPC, art. 65 | gabarito |
| TGP-110 | tgp.js:166 | Quiz: competência em razão da matéria → absoluta. | não cita | gabarito |

### Módulo `modificacao` — Modificação e conflito de competência

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-111 | tgp.js:170 | Só a competência relativa se modifica. | não cita | conceito |
| TGP-112 | tgp.js:173 | Derrogação: eleição de foro no contrato; vincula herdeiros e sucessores. | art. 63 | artigo |
| TGP-113 | tgp.js:174 | Prorrogação: réu não alega incompetência relativa. | art. 65 | artigo |
| TGP-114 | tgp.js:175 | Conexão: mesmo pedido ou mesma causa de pedir. | art. 55 | artigo |
| TGP-115 | tgp.js:176 | Continência: mesmas partes e causa de pedir, pedido de uma abrange o da outra. | art. 56 | artigo |
| TGP-116 | tgp.js:187 | Conexão: reunião no juízo prevento, salvo se uma já foi sentenciada. | art. 55, §1º; Súmula 235 do STJ | súmula-jurisprudência |
| TGP-117 | tgp.js:188 | Execução e conhecimento sobre o mesmo ato são conexas. | art. 55, §2º | artigo |
| TGP-118 | tgp.js:189 | Risco de decisões conflitantes, mesmo sem conexão → reunião. | art. 55, §3º | artigo |
| TGP-119 | tgp.js:190 | Continente proposta antes → contida extinta sem mérito. | art. 57 | artigo |
| TGP-120 | tgp.js:191 | Contida proposta antes → reunião. | art. 57 | artigo |
| TGP-121 | tgp.js:192 | Prevenção: registro ou distribuição da primeira ação. | arts. 58 e 59 | artigo |
| TGP-122 | tgp.js:194 | Despejo por falta de pagamento e consignação dos mesmos aluguéis → conexão. | não cita | conceito |
| TGP-123 | tgp.js:195 | Anular contrato inteiro x anular cláusula 5ª, mesmas partes e causa → continência. | não cita | conceito |
| TGP-124 | tgp.js:197 | Execução de nota promissória e ação para anular a mesma nota → conexão. | art. 55, §2º, I | artigo |
| TGP-125 | tgp.js:198 | Conflito de competência. | CPC, art. 66 e arts. 951 a 959 | artigo |
| TGP-126 | tgp.js:199 | Conflito positivo; relator pode sobrestar e designar juiz para medidas urgentes. | art. 66, I; art. 955 | artigo |
| TGP-127 | tgp.js:200 | Conflito negativo; quem não acolher competência declinada suscita, salvo se atribuí-la a terceiro juízo. | art. 66, II | artigo |
| TGP-128 | tgp.js:201 | Conflito sobre reunião ou separação. | art. 66, III | artigo |
| TGP-129 | tgp.js:202 | Juiz suscita por ofício; partes e MP por petição. | arts. 951 e 953 | artigo |
| TGP-130 | tgp.js:202 | Não pode suscitar a parte que arguiu incompetência relativa. | art. 952 | artigo |
| TGP-131 | tgp.js:203 | Juízes do mesmo TJ → TJ; juízes vinculados a tribunais diversos → STJ. | CF, art. 105, I, d | artigo |
| TGP-132 | tgp.js:203 | Relator julga de plano se houver súmula ou tese repetitiva. | art. 955, parágrafo único | artigo |
| TGP-133 | tgp.js:205 | Quiz: continente proposta depois da contida → reunião. | CPC, art. 57 | gabarito |
| TGP-134 | tgp.js:206 | Quiz: processo já sentenciado, cabe reunião? → Não. | art. 55, §1º; Súmula 235 do STJ | gabarito |
| TGP-135 | tgp.js:207 | Quiz: dois juízes se declaram incompetentes → negativo. | art. 66, II | gabarito |

### Módulo `capacidade` — Capacidade, representação e procuração

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-136 | tgp.js:214 | Capacidade de ser parte inclui entes despersonalizados (espólio, massa falida, condomínio). | CPC, art. 75 | artigo |
| TGP-137 | tgp.js:215 | Capacidade de estar em juízo; incapazes representados ou assistidos. | CPC, arts. 70 e 71 | artigo |
| TGP-138 | tgp.js:216 | Capacidade postulatória: em regra só advogado inscrito na OAB. | art. 103 | artigo |
| TGP-139 | tgp.js:216 | Exceção: Juizado Especial até 20 salários mínimos. | Lei 9.099/95, art. 9º | artigo |
| TGP-140 | tgp.js:218 | Absolutamente incapaz: menor de 16, representado. | não cita | conceito |
| TGP-141 | tgp.js:219 | Relativamente incapaz: 16 a 18, ébrios habituais, pródigos, quem não pode exprimir vontade; assistido. | não cita | conceito |
| TGP-142 | tgp.js:220 | Incapaz sem representante ou com interesses colidentes → curador especial. | art. 72, I | artigo |
| TGP-143 | tgp.js:221 | Réu preso revel, ou citado por edital/hora certa e revel → curador especial, função da Defensoria. | art. 72, II e parágrafo único | artigo |
| TGP-144 | tgp.js:223 | Advogado não postula sem procuração. | art. 104 | artigo |
| TGP-145 | tgp.js:224 | Exceção para evitar preclusão, decadência, prescrição ou ato urgente; exibir procuração em 15 dias, prorrogáveis por mais 15. | não cita (quiz cita art. 104, §1º) | prazo |
| TGP-146 | tgp.js:225 | Ato não ratificado é ineficaz; advogado responde por despesas e perdas e danos. | art. 104, §2º | artigo |
| TGP-147 | tgp.js:226 | Poderes especiais: receber citação, confessar, reconhecer procedência, transigir, desistir, renunciar, dar quitação, firmar compromisso e declarar hipossuficiência. | art. 105 | requisito |
| TGP-148 | tgp.js:227 | Fim do mandato: revogação, renúncia, morte, interdição, mudança de estado, fim do prazo ou do negócio. | CC, art. 682 | artigo |
| TGP-149 | tgp.js:229 | Quiz: espólio pode ser parte? → Sim. | CPC, art. 75, VII | gabarito |
| TGP-150 | tgp.js:230 | Quiz: advogado sem procuração para evitar prescrição → Sim, apresentando em 15 dias prorrogáveis. | CPC, art. 104, §1º | gabarito |
| TGP-151 | tgp.js:231 | Quiz: réu citado por edital e revel → curador especial. | CPC, art. 72, II | gabarito |

### Módulo `litisconsorcio` — Litisconsórcio

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-152 | tgp.js:237 | Hipóteses: comunhão, conexão pelo pedido ou causa de pedir, afinidade por ponto comum de fato ou de direito. | art. 113 | requisito |
| TGP-153 | tgp.js:239 | Necessário quando a lei exige ou a relação só pode ser decidida com todos. | art. 114 | artigo |
| TGP-154 | tgp.js:240 | Unitário quando o mérito deve ser igual para todos. | art. 116 | artigo |
| TGP-155 | tgp.js:244 | Necessário e unitário sem um litisconsorte → sentença nula para todos. | CPC, art. 115 | artigo |
| TGP-156 | tgp.js:245 | Necessário e simples → sentença ineficaz só para o não citado. | CPC, art. 115 | artigo |
| TGP-157 | tgp.js:246 | Juiz determina ao autor que requeira a citação de todos, sob pena de extinção. | art. 115, parágrafo único | artigo |
| TGP-158 | tgp.js:248 | Atos de um litisconsorte não prejudicam nem beneficiam outros, salvo unitário. | art. 117 | artigo |
| TGP-159 | tgp.js:249 | Juiz pode limitar o litisconsórcio facultativo multitudinário. | art. 113, §1º | artigo |
| TGP-160 | tgp.js:249 | Pedido de limitação interrompe o prazo de resposta. | art. 113, §2º | prazo |
| TGP-161 | tgp.js:250 | Prazo em dobro com procuradores diferentes, de escritórios distintos, em autos físicos; cessa se de dois réus só um se defende. | art. 229 | prazo |
| TGP-162 | tgp.js:252 | Anulação de casamento proposta pelo MP contra ambos os cônjuges → necessário e unitário. | não cita | conceito |
| TGP-163 | tgp.js:253 | Passageiros de voo cancelado → facultativo e simples. | não cita | conceito |
| TGP-164 | tgp.js:254 | Condôminos reivindicando o imóvel comum → facultativo e unitário. | CC, art. 1.314 | artigo |
| TGP-165 | tgp.js:256 | Quiz: sentença sem litisconsorte necessário unitário → nula. | CPC, art. 115, I | gabarito |
| TGP-166 | tgp.js:257 | Quiz: dobro do art. 229 vale em autos eletrônicos? → Não. | art. 229, §2º | gabarito |
| TGP-167 | tgp.js:258 | Quiz: juiz pode limitar litisconsórcio necessário? → Não, só o facultativo. | art. 113, §1º | gabarito |

### Módulo `terceiros` — Intervenção de terceiros

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-168 | tgp2.js:4 | CPC prevê cinco figuras de intervenção de terceiros. | arts. 119 a 138 | artigo |
| TGP-169 | tgp2.js:7 | Assistência: provocada pelo próprio terceiro com interesse jurídico. | arts. 119 a 124 | artigo |
| TGP-170 | tgp2.js:8 | Denunciação da lide: autor ou réu; regresso. | arts. 125 a 129 | artigo |
| TGP-171 | tgp2.js:9 | Chamamento ao processo: só o réu; coobrigados solidários. | arts. 130 a 132 | artigo |
| TGP-172 | tgp2.js:10 | Desconsideração: requerida por parte ou MP. | arts. 133 a 137 | artigo |
| TGP-173 | tgp2.js:11 | Amicus curiae: juiz de ofício ou a pedido. | art. 138 | artigo |
| TGP-174 | tgp2.js:12 | Assistência simples: auxiliar, não contraria o assistido; se assistido revel, assistente atua como substituto processual; não impede desistência ou acordo. | arts. 121 a 123 | artigo |
| TGP-175 | tgp2.js:12 | Assistência litisconsorcial: sentença influi na relação entre assistente e adversário do assistido; ex.: condômino na reivindicatória de outro condômino. | art. 124 | artigo |
| TGP-176 | tgp2.js:13 | Efeito da intervenção: assistente não discute a justiça da decisão, salvo impedimento de provas ou omissão dolosa/culposa do assistido. | art. 123 | artigo |
| TGP-177 | tgp2.js:15 | Fiador réu quer trazer devedor principal → chamamento. | CPC, art. 130, I | artigo |
| TGP-178 | tgp2.js:16 | Seguradora → denunciação (regresso por contrato). | art. 125, II | artigo |
| TGP-179 | tgp2.js:17 | Sublocatário ajudando locatário no despejo → assistência. | art. 119 | artigo |
| TGP-180 | tgp2.js:20 | Comprador evicto → denunciação. | art. 125, I | artigo |
| TGP-181 | tgp2.js:22 | Denunciação não é obrigatória; regresso por ação autônoma. | art. 125, §1º | artigo |
| TGP-182 | tgp2.js:22 | Só se admite uma denunciação sucessiva. | art. 125, §2º | artigo |
| TGP-183 | tgp2.js:23 | Seguradora denunciada pode ser condenada direta e solidariamente, nos limites da apólice. | Súmula 537 do STJ | súmula-jurisprudência |
| TGP-184 | tgp2.js:24 | Sentença de procedência no chamamento é título para quem pagar. | art. 132 | artigo |
| TGP-185 | tgp2.js:25 | Desconsideração: qualquer fase; suspende o processo salvo se pedida na inicial; sócio citado com 15 dias; pode ser inversa; interlocutória agravável. | art. 1.015, IV | prazo |
| TGP-186 | tgp2.js:26 | Amicus curiae: admissão irrecorrível; não altera competência; recorre só por ED e no IRDR. | art. 138, §§1º e 3º | recurso |
| TGP-187 | tgp2.js:29 | Quiz: chamamento pelo autor? → Não, só pelo réu. | CPC, art. 130 | gabarito |
| TGP-188 | tgp2.js:30 | Quiz: denunciação obrigatória para preservar regresso? → Não. | art. 125, §1º | gabarito |
| TGP-189 | tgp2.js:31 | Quiz: amicus curiae recorre de → só ED e decisão do IRDR. | art. 138, §§1º e 3º | gabarito |

### Módulo `sujeitos` — Juiz, MP, Advocacia Pública e Defensoria

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-190 | tgp2.js:37 | Poderes do juiz incluem dilatar prazos e alterar a ordem das provas, medidas atípicas, oficiar MP e Defensoria para ações coletivas. | CPC, art. 139 | artigo |
| TGP-191 | tgp2.js:37 | Juiz responde por perdas e danos se agir com dolo ou fraude. | art. 143 | artigo |
| TGP-192 | tgp2.js:38 | Impedimento: objetivo; atuou como advogado/perito/MP/testemunha; decidiu em outro grau; ele, cônjuge ou parente até 3º grau parte ou advogado; sócio/diretor de PJ parte; herdeiro, donatário ou empregador de parte. | art. 144 | artigo |
| TGP-193 | tgp2.js:38 | Impedimento gera nulidade e permite rescisória. | art. 966, II | artigo |
| TGP-194 | tgp2.js:38 | Suspeição: amigo íntimo/inimigo da parte ou advogado; presentes; aconselhou; custeou; credor/devedor; interessado; foro íntimo. Não autoriza rescisória. | art. 145 | artigo |
| TGP-195 | tgp2.js:39 | Suspeição provocada por quem a alega ou após ato de aceitação é ilegítima. | art. 145, §2º | artigo |
| TGP-196 | tgp2.js:39 | Arguição em 15 dias do conhecimento do fato. | art. 146 | prazo |
| TGP-197 | tgp2.js:39 | Arguição suspende o processo. | art. 313, III | artigo |
| TGP-198 | tgp2.js:41 | Missão do MP. | CF, art. 127 | artigo |
| TGP-199 | tgp2.js:42 | MP atua como parte ou fiscal da ordem jurídica. | CPC, arts. 177 e 178 | artigo |
| TGP-200 | tgp2.js:43 | Prazo em dobro: MP. | art. 180 | prazo |
| TGP-201 | tgp2.js:43 | Prazo em dobro: Advocacia Pública. | art. 183 | prazo |
| TGP-202 | tgp2.js:43 | Prazo em dobro: Defensoria, inclusive NPJ conveniados. | art. 186 | prazo |
| TGP-203 | tgp2.js:44 | Intimação pessoal de MP, Advocacia Pública e Defensoria; Defensoria pode pedir intimação pessoal do assistido. | não cita | requisito |
| TGP-204 | tgp2.js:45 | Responsabilidade regressiva por dolo ou fraude de MP, Advocacia Pública, Defensoria. | arts. 181, 184 e 187 | artigo |
| TGP-205 | tgp2.js:46 | MP intimado tem vista depois das partes e é intimado de todos os atos. | arts. 178 e 179 | artigo |
| TGP-206 | tgp2.js:47 | MP intervém: interesse público ou social (I); interesse de incapaz (II); litígio coletivo pela posse de terra rural ou urbana (III). | art. 178 | artigo |
| TGP-207 | tgp2.js:47 | Sem intimação do MP, nulidade a partir de quando deveria intervir. | art. 279 | artigo |
| TGP-208 | tgp2.js:47 | Participação da Fazenda não configura, por si, interesse público. | art. 178, parágrafo único | artigo |
| TGP-209 | tgp2.js:48 | Prazo em dobro não se aplica quando a lei fixa prazo próprio. | arts. 180, §2º, 183, §2º e 186, §4º | prazo |
| TGP-210 | tgp2.js:48 | Empresas públicas e sociedades de economia mista não têm prazo em dobro. | não cita | prazo |
| TGP-211 | tgp2.js:50 | Quiz: juiz amigo íntimo do advogado → suspeito. | CPC, art. 145, I | gabarito |
| TGP-212 | tgp2.js:51 | Quiz: rescisória por suspeição? → Não; só impedimento. | art. 966, II | gabarito |
| TGP-213 | tgp2.js:52 | Quiz: Fazenda presente obriga intervenção do MP? → Não, por si só. | art. 178, parágrafo único | gabarito |
| TGP-214 | tgp2.js:53 | Quiz: empresa pública tem prazo em dobro? → Não. | não cita | gabarito |

### Módulo `atos` — Atos processuais e pronunciamentos

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-215 | tgp2.js:60 | Atos das partes produzem efeitos imediatos. | CPC, art. 200 | artigo |
| TGP-216 | tgp2.js:61 | Desistência só produz efeitos após homologada. | art. 200, parágrafo único; art. 485, VIII | artigo |
| TGP-217 | tgp2.js:61 | Após a contestação, desistência depende do consentimento do réu. | art. 485, §4º | artigo |
| TGP-218 | tgp2.js:61 | Desistência só cabe até a sentença. | art. 485, §5º | artigo |
| TGP-219 | tgp2.js:63 | Vedadas cotas marginais ou interlineares. | art. 202 | artigo |
| TGP-220 | tgp2.js:64 | Negócio processual em causas que admitem autocomposição, partes plenamente capazes; controle de validade pelo juiz. | art. 190 | artigo |
| TGP-221 | tgp2.js:64 | Calendário processual vincula todos e dispensa intimações. | art. 191 | artigo |
| TGP-222 | tgp2.js:66 | Sentença: põe fim à fase de conhecimento ou extingue a execução, com base nos arts. 485/487 → apelação. | art. 203, §1º | recurso |
| TGP-223 | tgp2.js:67 | Interlocutória: agravo de instrumento se no rol do 1.015; senão, preliminar de apelação. | art. 203, §2º | recurso |
| TGP-224 | tgp2.js:68 | Despacho irrecorrível. | art. 203, §3º; art. 1.001 | recurso |
| TGP-225 | tgp2.js:69 | Ato ordinatório praticado pelo servidor; revisável pelo juiz. | art. 203, §4º | artigo |
| TGP-226 | tgp2.js:70 | Decisão monocrática do relator → agravo interno. | não cita | recurso |
| TGP-227 | tgp2.js:71 | Acórdão → REsp, RE, recurso ordinário, embargos. | art. 204 | recurso |
| TGP-228 | tgp2.js:74-76 | Indeferir gratuidade e deferir tutela de urgência são interlocutórias; "julgo procedente" é sentença (art. 487). | não cita | conceito |
| TGP-229 | tgp2.js:77 | Atos das 6h às 20h em dias úteis; ato iniciado pode ser concluído. | art. 212 | prazo |
| TGP-230 | tgp2.js:77 | Processo eletrônico: até as 24 horas do último dia. | art. 213 | prazo |
| TGP-231 | tgp2.js:77 | Recesso de 20/12 a 20/1: prazos suspensos. | art. 220 | prazo |
| TGP-232 | tgp2.js:78 | Nas férias e feriados: citações, intimações e penhoras. | art. 212, §2º | artigo |
| TGP-233 | tgp2.js:78 | Tutelas de urgência nas férias. | art. 214 | artigo |
| TGP-234 | tgp2.js:78 | Tramitam nas férias: jurisdição voluntária, alimentos, nomeação/remoção de tutor e curador. | art. 215 | artigo |
| TGP-235 | tgp2.js:78 | Presidente da República ouvido onde indicar. | art. 454 | artigo |
| TGP-236 | tgp2.js:78 | Exceções ao lugar dos atos. | art. 217 | artigo |
| TGP-237 | tgp2.js:80 | Quiz: despacho que manda intimar → irrecorrível. | CPC, art. 1.001 | gabarito |
| TGP-238 | tgp2.js:81 | Quiz: após contestação, autor desiste sozinho? → Não. | art. 485, §4º | gabarito |
| TGP-239 | tgp2.js:82 | Quiz: penhora nas férias? → Sim. | art. 212, §2º | gabarito |

### Módulo `prazos` — Prazos processuais

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-240 | tgp2.js:89 | Prazo legal; contestação 15 dias. | CPC, art. 218 | prazo |
| TGP-241 | tgp2.js:90 | Prazo judicial quando a lei for omissa. | art. 218, §1º | prazo |
| TGP-242 | tgp2.js:91 | Prazo subsidiário: 5 dias. | art. 218, §3º | prazo |
| TGP-243 | tgp2.js:92 | Comparecimento: mínimo de 48 horas de antecedência. | art. 218, §2º | prazo |
| TGP-244 | tgp2.js:95 | Correio: juntada do AR. | art. 231 | prazo |
| TGP-245 | tgp2.js:96 | Oficial de justiça (inclusive hora certa): juntada do mandado cumprido. | art. 231 | prazo |
| TGP-246 | tgp2.js:97 | Escrivão ou chefe de secretaria: data em que ocorreu. | art. 231 | prazo |
| TGP-247 | tgp2.js:98 | Edital: dia útil seguinte ao fim da dilação. | art. 231 | prazo |
| TGP-248 | tgp2.js:99 | Intimação eletrônica: dia útil seguinte à consulta ou ao fim do prazo de 10 dias corridos. | Lei 11.419/06, art. 5º, §3º | prazo |
| TGP-249 | tgp2.js:100 | Carta precatória/rogatória: juntada da comunicação ou da carta cumprida. | art. 231 | prazo |
| TGP-250 | tgp2.js:101 | DJe: publicado no primeiro dia útil após a disponibilização; prazo começa no dia útil seguinte. | art. 224, §§2º e 3º | prazo |
| TGP-251 | tgp2.js:102 | Carga dos autos: dia da carga. | art. 231 | prazo |
| TGP-252 | tgp2.js:103 | Citação eletrônica: quinto dia útil após a confirmação do recebimento, que deve ocorrer em até 3 dias úteis. | art. 246, §1º-A | prazo |
| TGP-253 | tgp2.js:105 | Prazos processuais em dias: só dias úteis. | art. 219 | prazo |
| TGP-254 | tgp2.js:105 | Prazos materiais (dilação do edital, prescrição) correm em dias corridos. | não cita | prazo |
| TGP-255 | tgp2.js:106 | Exclui o dia do começo e inclui o do vencimento; protrai se expediente anormal ou sistema indisponível. | art. 224 | prazo |
| TGP-256 | tgp2.js:107 | Ato praticado antes do termo inicial é tempestivo. | art. 218, §4º | prazo |
| TGP-257 | tgp2.js:108 | Renúncia expressa a prazo estabelecido em favor exclusivo da parte. | art. 225 | prazo |
| TGP-258 | tgp2.js:109 | Justa causa permite praticar o ato em prazo fixado pelo juiz. | art. 223 | prazo |
| TGP-259 | tgp2.js:110 | Prorrogação até 2 meses em comarca de difícil transporte; mais em calamidade pública. | art. 222 | prazo |
| TGP-260 | tgp2.js:111 | Prazos impróprios: descumprimento não gera preclusão. | não cita | conceito |
| TGP-261 | tgp2.js:111 | Juiz: despachos 5 dias; interlocutórias 10; sentenças 30. | art. 226, I a III | prazo |
| TGP-262 | tgp2.js:111 | Servidor remete autos conclusos em 1 dia. | art. 228 | prazo |
| TGP-263 | tgp2.js:113 | MP: dobro, contado da intimação pessoal. | art. 180 | prazo |
| TGP-264 | tgp2.js:113 | Fazenda Pública: dobro. | art. 183 | prazo |
| TGP-265 | tgp2.js:113 | Defensoria e escritórios de prática jurídica de faculdades e entidades conveniadas: dobro. | art. 186, §3º | prazo |
| TGP-266 | tgp2.js:113 | Litisconsortes: dobro com procuradores diferentes, escritórios distintos, autos físicos; cessa se só um contestar. | art. 229 | prazo |
| TGP-267 | tgp2.js:113 | Lei com prazo próprio: sem dobro. | não cita | prazo |
| TGP-268 | tgp2.js:115 | Quiz: DJe disponibilizado na segunda → prazo começa na quarta (publicação terça). | art. 224, §§2º e 3º | gabarito |
| TGP-269 | tgp2.js:116 | Quiz: prazo do juiz para sentenciar é preclusivo? → Não, impróprio. | art. 226 | gabarito |
| TGP-270 | tgp2.js:117 | Quiz: sem prazo na lei ou decisão → 5 dias. | art. 218, §3º | gabarito |

### Módulo `nulidades` — Nulidades processuais

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-271 | tgp2.js:129 | Inexistência (sentença sem dispositivo, processo sem citação): reconhecível a qualquer tempo, por querela nullitatis. | não cita | conceito |
| TGP-272 | tgp2.js:130 | Nulidade absoluta: de ofício e a qualquer tempo, ouvidas antes as partes. | art. 10 | conceito |
| TGP-273 | tgp2.js:131 | Nulidade relativa: depende de alegação na primeira oportunidade. | não cita | conceito |
| TGP-274 | tgp2.js:134 | Quem deu causa não pode pedir a decretação. | art. 276 | artigo |
| TGP-275 | tgp2.js:135 | Ato válido se atingiu a finalidade. | art. 277 | artigo |
| TGP-276 | tgp2.js:136 | Alegação na primeira oportunidade, sob pena de preclusão, salvo nulidade de ofício ou impedimento legítimo. | art. 278 | artigo |
| TGP-277 | tgp2.js:137 | Sem prejuízo, ato não se repete. | art. 282, §1º | artigo |
| TGP-278 | tgp2.js:138 | Primazia do mérito: não pronuncia nulidade se puder decidir o mérito a favor de quem aproveitaria. | art. 282, §2º | artigo |
| TGP-279 | tgp2.js:139 | Anulado o ato, caem os subsequentes dependentes. | art. 281 | artigo |
| TGP-280 | tgp2.js:140 | MP não intimado: anulam-se atos desde quando deveria intervir; juiz ouve o MP sobre prejuízo antes. | art. 279, §§1º e 2º | artigo |
| TGP-281 | tgp2.js:141 | Decretada a nulidade, o juiz declara os atos atingidos e manda repetir ou retificar. | art. 282 | artigo |
| TGP-282 | tgp2.js:143 | Quiz: advogado que causou o vício pede nulidade? → Não. | art. 276 | gabarito |
| TGP-283 | tgp2.js:144 | Quiz: nulidade relativa não alegada na primeira oportunidade → preclui. | art. 278 | gabarito |
| TGP-284 | tgp2.js:145 | Quiz: citação com vício e réu contestou → considera-se suprida. | art. 239, §1º | gabarito |

### Módulo `valor` — Valor da causa

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-285 | tgp2.js:149 | Toda causa tem valor, mesmo sem conteúdo econômico imediato. | art. 291 | artigo |
| TGP-286 | tgp2.js:153 | Cobrança: principal corrigido + juros de mora vencidos + penalidades até a propositura. | art. 292, I | artigo |
| TGP-287 | tgp2.js:154 | Ato jurídico: valor do ato ou da parte controvertida. | art. 292, II | artigo |
| TGP-288 | tgp2.js:155 | Alimentos: soma de 12 prestações mensais. | art. 292, III | artigo |
| TGP-289 | tgp2.js:156 | Divisão, demarcação e reivindicação: valor de avaliação da área ou do bem. | art. 292, IV | artigo |
| TGP-290 | tgp2.js:157 | Indenização, inclusive dano moral: valor pretendido. | art. 292, V | artigo |
| TGP-291 | tgp2.js:158-160 | Cumulados: soma; alternativos: o maior; subsidiário: o do principal. | art. 292, VI a VIII | artigo |
| TGP-292 | tgp2.js:162 | Vencidas e vincendas somam-se; vincendas: uma prestação anual se indeterminado ou superior a 1 ano; se inferior, a soma. | art. 292, §§1º e 2º | artigo |
| TGP-293 | tgp2.js:163 | Juiz corrige de ofício por arbitramento e manda complementar custas. | art. 292, §3º | artigo |
| TGP-294 | tgp2.js:164 | Impugnação do réu em preliminar de contestação, sob pena de preclusão. | arts. 293 e 337, III | artigo |
| TGP-295 | tgp2.js:166 | Quiz: alimentos de R$ 800/mês → R$ 9.600. | art. 292, III | gabarito |
| TGP-296 | tgp2.js:167 | Quiz: alternativos R$ 20 mil e R$ 35 mil → R$ 35 mil. | art. 292, VII | gabarito |
| TGP-297 | tgp2.js:168 | Quiz: réu impugna o valor só na apelação → não pode, precluiu. | art. 293 | gabarito |

### Módulo `despesas` — Despesas e honorários

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-298 | tgp2.js:175 | Cada parte adianta despesas dos atos que requer; autor adianta os determinados de ofício ou pelo MP fiscal. | art. 82, §1º | artigo |
| TGP-299 | tgp2.js:175 | Exceção: gratuidade da justiça. | arts. 98 a 102 | artigo |
| TGP-300 | tgp2.js:176 | Despesas: custas, indenização de viagem, remuneração de assistente técnico, diária de testemunha. | art. 84 | artigo |
| TGP-301 | tgp2.js:177 | Sentença condena o vencido a ressarcir e a pagar honorários. | art. 82, §2º; art. 85 | artigo |
| TGP-302 | tgp2.js:178 | Honorários recursais: tribunal majora até os tetos legais. | art. 85, §11 | artigo |
| TGP-303 | tgp2.js:179 | Caução do autor residente fora do país sem imóveis no Brasil; dispensada por tratado (Las Leñas, Decreto 6.891/2009), execução de título extrajudicial, cumprimento de sentença e reconvenção. | art. 83 | requisito |
| TGP-304 | tgp2.js:180 | Honorários de sucumbência: 10% a 20% sobre condenação, proveito econômico ou valor atualizado da causa. | art. 85 | artigo |
| TGP-305 | tgp2.js:180 | Monitória cumprida: honorários de 5%. | art. 701 | artigo |
| TGP-306 | tgp2.js:180 | Honorários têm natureza alimentar; vedada compensação na sucumbência parcial. | art. 85, §14 | artigo |
| TGP-307 | tgp2.js:181 | Critérios: zelo, lugar, natureza e importância, trabalho e tempo. | art. 85, §2º | artigo |
| TGP-308 | tgp2.js:184 | Equidade só quando proveito inestimável ou irrisório ou valor da causa muito baixo. | art. 85, §8º | artigo |
| TGP-309 | tgp2.js:184 | Em causas de grande valor a equidade é vedada. | STJ, Tema 1.076 | súmula-jurisprudência |
| TGP-310 | tgp2.js:185 | Perda do objeto: paga quem deu causa (causalidade). | art. 85, §10 | artigo |
| TGP-311 | tgp2.js:186 | Sucumbência recíproca: proporcional; parte mínima → outro paga tudo (ex.: pediu 50 mil, ganhou 49 mil). | art. 86 | artigo |
| TGP-312 | tgp2.js:187 | Litisconsortes vencidos: distribuição expressa; omissa → solidariedade. | art. 87 | artigo |
| TGP-313 | tgp2.js:188 | Jurisdição voluntária: requerente adianta, despesas rateadas; juízos divisórios sem litígio: proporcional aos quinhões. | arts. 88 e 89 | artigo |
| TGP-314 | tgp2.js:189 | Decisão transitada omissa sobre honorários: ação autônoma. | art. 85, §18 | artigo |
| TGP-315 | tgp2.js:191 | Tema 1.076 (REsp 1.850.512, 1.877.883, 1.906.618 e 1.906.623): vedada equidade quando valor elevado; aplicam-se obrigatoriamente os §§2º e 3º. | STJ, Tema 1.076 | súmula-jurisprudência |
| TGP-316 | tgp2.js:192 | ADI 6.053: advogados públicos podem receber sucumbência, respeitado o teto; §19 do art. 85 constitucional. | STF, ADI 6.053; CF, art. 37, XI | súmula-jurisprudência |
| TGP-317 | tgp2.js:194 | Quiz: extinção por perda do objeto → paga quem deu causa. | art. 85, §10 | gabarito |
| TGP-318 | tgp2.js:195 | Quiz: causa de R$ 50 milhões, equidade? → Não. | STJ, Tema 1.076 | gabarito |
| TGP-319 | tgp2.js:196 | Quiz: compensação na sucumbência parcial? → Não. | art. 85, §14 | gabarito |

### Módulo `ciclo` — Formação, suspensão e extinção

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| TGP-320 | tgp2.js:202 | Processo existe para autor e juízo com o protocolo da inicial. | art. 312 | artigo |
| TGP-321 | tgp2.js:202 | Citação válida induz litispendência, torna a coisa litigiosa e constitui o devedor em mora. | art. 240 | artigo |
| TGP-322 | tgp2.js:202 | Interrupção da prescrição retroage à propositura se o autor promover a citação em 10 dias. | art. 240, §§1º e 2º | prazo |
| TGP-323 | tgp2.js:204 | Morte/perda de capacidade: réu → citar espólio em 2 a 6 meses; autor → habilitação sob pena de extinção; advogado → novo em 15 dias. | art. 313, I | prazo |
| TGP-324 | tgp2.js:205 | Convenção das partes: máximo 6 meses. | art. 313, II | prazo |
| TGP-325 | tgp2.js:206-207 | Impedimento/suspeição: até julgamento do incidente; admissão de IRDR suspende processos sobre a mesma questão. | art. 313, III e IV | artigo |
| TGP-326 | tgp2.js:208 | Prejudicialidade externa: máximo 1 ano. | art. 313, V | prazo |
| TGP-327 | tgp2.js:209-210 | Força maior: enquanto durar; questão do Tribunal Marítimo. | art. 313, VI e VII | artigo |
| TGP-328 | tgp2.js:211 | Parto ou adoção da advogada única patrona: 30 dias. | art. 313, IX | prazo |
| TGP-329 | tgp2.js:212 | Paternidade do advogado único patrono: 8 dias. | art. 313, X | prazo |
| TGP-330 | tgp2.js:213 | Na suspensão só atos urgentes, não pelo juiz arguido em impedimento/suspeição. | art. 314 | artigo |
| TGP-331 | tgp2.js:213 | Questão penal prejudicial: suspende se a ação penal for proposta em 3 meses, por no máximo 1 ano. | art. 315 | prazo |
| TGP-332 | tgp2.js:214 | Extinção por sentença; antes de extinguir sem mérito, oportunidade para corrigir. | arts. 316 e 317 | artigo |
| TGP-333 | tgp2.js:216-225 | Artigos-chave: 2º inércia; 10 não surpresa; 64 §1º; 113; 144; 219; 277; 292; 85 ("entre 10% e 20%, com faixas para a Fazenda"); 313. | arts. citados | artigo |
| TGP-334 | tgp2.js:227 | Quiz: citação válida constitui o devedor em mora? → Sim, ressalvados os arts. 397 e 398 do CC. | art. 240; CC, arts. 397 e 398 | gabarito |
| TGP-335 | tgp2.js:228 | Quiz: suspensão por acordo → 6 meses. | art. 313, §4º | gabarito |
| TGP-336 | tgp2.js:229 | Quiz: advogada única patrona dá à luz → 30 dias. | art. 313, IX e §6º | gabarito |

---

## Processo de Conhecimento

### Módulo `rito` — O mapa do procedimento comum

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-001 | conhecimento.js:3 | Rito comum: CPC, arts. 318 a 508. | arts. 318 a 508 | artigo |
| CON-002 | conhecimento.js:8 | Procedimento comum aplica-se subsidiariamente aos especiais e à execução. | art. 318, parágrafo único | artigo |
| CON-003 | conhecimento.js:11 | Petição inicial. | arts. 319 a 321 | artigo |
| CON-004 | conhecimento.js:12 | Admissibilidade: emenda, indeferimento ou improcedência liminar. | arts. 321, 330 e 332 | artigo |
| CON-005 | conhecimento.js:13 | Audiência de conciliação/mediação. | art. 334 | artigo |
| CON-006 | conhecimento.js:14 | Contestação e reconvenção. | arts. 335 a 343 | artigo |
| CON-007 | conhecimento.js:15 | Providências preliminares. | arts. 347 a 353 | artigo |
| CON-008 | conhecimento.js:16 | Julgamento conforme o estado. | arts. 354 a 357 | artigo |
| CON-009 | conhecimento.js:17 | Instrução / audiência. | arts. 358 a 368 | artigo |
| CON-010 | conhecimento.js:18 | Sentença. | arts. 485 a 495 | artigo |
| CON-011 | conhecimento.js:19 | Coisa julgada. | arts. 502 a 508 | artigo |
| CON-012 | conhecimento.js:27 | Comum por exclusão: a lei lista os especiais. | não cita | conceito |
| CON-013 | conhecimento.js:28 | Quiz: procedimento comum aos especiais → subsidiariamente. | art. 318, parágrafo único | gabarito |
| CON-014 | conhecimento.js:28 | Quiz: fase em que o juiz organiza as provas → saneadora. | art. 357 | gabarito |

### Módulo `inicial` — Petição inicial

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-015 | conhecimento.js:34-40 | Requisitos: juízo; partes (nome, estado civil ou união estável, profissão, CPF/CNPJ, e-mail, endereço); fato e fundamento; pedido; valor da causa; provas; opção pela audiência. | art. 319, I a VII | requisito |
| CON-016 | conhecimento.js:36 | Não é preciso citar o artigo de lei (o juiz conhece o direito). | não cita | conceito |
| CON-017 | conhecimento.js:41 | Documentos indispensáveis e procuração. | art. 320 | requisito |
| CON-018 | conhecimento.js:44 | Autor pode pedir diligências para obter dados do réu. | art. 319, §1º | artigo |
| CON-019 | conhecimento.js:44 | Não se indefere se possível citar o réu ou se a exigência tornar o acesso impossível/excessivamente oneroso. | art. 319, §§2º e 3º | artigo |
| CON-020 | conhecimento.js:45 | Emenda em 15 dias, indicando com precisão o que corrigir; descumprida, indeferimento. | art. 321 | prazo |
| CON-021 | conhecimento.js:46 | Advogado em causa própria declara endereço, OAB e sociedade; 5 dias para suprir. | art. 106, I | prazo |
| CON-022 | conhecimento.js:47 | Congruência (492); identidade de ações (337); competência (46). | arts. 492, 337, 46 | artigo |
| CON-023 | conhecimento.js:48 | Quiz: inicial precisa citar artigo? → Não. | não cita | gabarito |
| CON-024 | conhecimento.js:48 | Quiz: prazo da emenda → 15 dias. | art. 321 | gabarito |
| CON-025 | conhecimento.js:48 | Quiz: falta CPF mas é possível citar → não indefere. | art. 319, §2º | gabarito |

### Módulo `admissibilidade` — Indeferimento e improcedência liminar

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-026 | conhecimento.js:53 | Indeferimento: sentença terminativa; não faz coisa julgada material. | art. 330; art. 485, I | artigo |
| CON-027 | conhecimento.js:53 | Improcedência liminar: sentença de mérito; faz coisa julgada material. | art. 332; art. 487 | artigo |
| CON-028 | conhecimento.js:55 | Inépcia: falta pedido/causa de pedir; pedido indeterminado fora do genérico; conclusão que não decorre dos fatos; pedidos incompatíveis. | art. 330, §1º | requisito |
| CON-029 | conhecimento.js:56-59 | Indeferimento também por ilegitimidade manifesta, falta de interesse, art. 106 não atendido, art. 321 não atendido. | art. 330 | requisito |
| CON-030 | conhecimento.js:60 | Revisionais de empréstimo/financiamento/alienação: discriminar obrigações controvertidas e quantificar incontroverso, sob pena de inépcia; incontroverso continua a ser pago. | art. 330, §§2º e 3º | requisito |
| CON-031 | conhecimento.js:61 | Improcedência liminar só em causas que dispensam instrução, antes da citação: súmula STF/STJ (I); repetitivos STF/STJ (II); IRDR/IAC (III); súmula de TJ sobre direito local (IV); prescrição ou decadência (§1º). | art. 332 | artigo |
| CON-032 | conhecimento.js:63 | Falta valor da causa → emenda. | art. 321 | artigo |
| CON-033 | conhecimento.js:64 | Emenda não feita → indeferimento. | art. 330, IV | artigo |
| CON-034 | conhecimento.js:65 | Pedidos incompatíveis não corrigidos → inépcia. | art. 330, §1º, IV | artigo |
| CON-035 | conhecimento.js:66 | Contraria súmula do STJ → improcedência liminar. | art. 332, I | artigo |
| CON-036 | conhecimento.js:67 | Prescrição clara → improcedência liminar. | art. 332, §1º | artigo |
| CON-037 | conhecimento.js:68 | Inicial completa → designa audiência e cita. | art. 334 | artigo |
| CON-038 | conhecimento.js:70 | Apelação em 15 dias. | arts. 331 e 332, §§2º a 4º | prazo |
| CON-039 | conhecimento.js:71 | Retratação em 5 dias (efeito regressivo). | não cita (quiz cita 332, §3º) | prazo |
| CON-040 | conhecimento.js:72 | Sem retratação, réu citado para contrarrazões em 15 dias. | arts. 331, §1º e 332, §4º | prazo |
| CON-041 | conhecimento.js:73 | Reformada a sentença, prazo de contestação da intimação do retorno dos autos, observado o art. 334. | art. 331, §2º | prazo |
| CON-042 | conhecimento.js:74 | Sem apelação, réu é intimado do trânsito em julgado. | arts. 331, §3º e 332, §2º | artigo |
| CON-043 | conhecimento.js:75 | Contraditório prévio dispensado porque a decisão favorece o réu. | art. 9º | conceito |
| CON-044 | conhecimento.js:75 | Prescrição e decadência são mérito; prescrição: perde-se a pretensão; decadência: o direito potestativo. | não cita | conceito |
| CON-045 | conhecimento.js:76 | Quiz: indeferimento faz coisa julgada material? → Não. | não cita | gabarito |
| CON-046 | conhecimento.js:76 | Quiz: retratação na improcedência liminar → 5 dias. | art. 332, §3º | gabarito |
| CON-047 | conhecimento.js:76 | Quiz: improcedência liminar sem apelação → réu intimado do trânsito. | art. 332, §2º | gabarito |

### Módulo `pedido` — Pedido

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-048 | conhecimento.js:81 | Juros legais, correção monetária e verbas de sucumbência incluídos no principal. | art. 322, §1º | artigo |
| CON-049 | conhecimento.js:81-82 | Prestações sucessivas vencidas no curso incluídas sem pedido expresso. | art. 323 | artigo |
| CON-050 | conhecimento.js:82 | Interpretação do pedido pelo conjunto da postulação e boa-fé. | art. 322, §2º | artigo |
| CON-051 | conhecimento.js:83 | Pedido genérico: ações universais; consequências indetermináveis; valor dependente de ato do réu (ex.: exigir contas). | art. 324, §1º | artigo |
| CON-052 | conhecimento.js:85 | Cumulação: compatibilidade, mesmo juízo competente, procedimento adequado (comum com técnicas especiais). | art. 327 | requisito |
| CON-053 | conhecimento.js:86 | Alternativo quando a obrigação pode ser cumprida de mais de um modo. | art. 325 | artigo |
| CON-054 | conhecimento.js:87 | Subsidiário; valor = principal. | art. 326 | artigo |
| CON-055 | conhecimento.js:88 | Sucessivo: investigação de paternidade e alimentos. | não cita | conceito |
| CON-056 | conhecimento.js:89-96 | Alteração do pedido: livre até a citação; com consentimento do réu até o saneamento (contraditório em 15 dias, prova suplementar); vedada depois. | art. 329 | prazo |
| CON-057 | conhecimento.js:97 | Quiz: prestações vencidas no curso precisam de novo pedido? → Não. | art. 323 | gabarito |
| CON-058 | conhecimento.js:97 | Quiz: após saneamento, com acordo do réu, muda o pedido? → Não. | art. 329 | gabarito |
| CON-059 | conhecimento.js:97 | Quiz: investigação de paternidade e alimentos → sucessivos. | não cita | gabarito |

### Módulo `audiencia334` — Audiência de conciliação ou mediação

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-060 | conhecimento.js:102 | Antecedência mínima da audiência: 30 dias. | art. 334 | prazo |
| CON-061 | conhecimento.js:102 | Citação do réu com antecedência mínima de 20 dias. | art. 334 | prazo |
| CON-062 | conhecimento.js:102 | Réu manifesta desinteresse 10 dias antes da audiência. | art. 334, §5º | prazo |
| CON-063 | conhecimento.js:102 | Multa de 2% por ausência injustificada. | art. 334, §8º | artigo |
| CON-064 | conhecimento.js:102 | Sessões adicionais limitadas a 2 meses. | art. 334 | prazo |
| CON-065 | conhecimento.js:102 | Intervalo mínimo de 20 minutos entre audiências. | art. 334 | prazo |
| CON-066 | conhecimento.js:103 | Opção do autor na inicial. | art. 319, VII | artigo |
| CON-067 | conhecimento.js:103 | Em litisconsórcio, todos devem recusar. | art. 334, §6º | requisito |
| CON-068 | conhecimento.js:103 | Audiência cancelada só com dupla negativa ou direito que não admite autocomposição. | art. 334, §4º, I e II | requisito |
| CON-069 | conhecimento.js:103 | Dupla negativa: prazo da contestação corre do protocolo do pedido de cancelamento do réu. | art. 335, II | prazo |
| CON-070 | conhecimento.js:104 | Conciliador (sem vínculo) ou mediador (com vínculo). | não cita | conceito |
| CON-071 | conhecimento.js:104 | Autor intimado na pessoa do advogado. | art. 334, §3º | artigo |
| CON-072 | conhecimento.js:104 | Audiência por meio eletrônico. | art. 334, §7º | artigo |
| CON-073 | conhecimento.js:104 | Ausência injustificada: ato atentatório; multa de até 2% da vantagem pretendida ou do valor da causa, para a União ou o Estado. | art. 334, §8º | artigo |
| CON-074 | conhecimento.js:104 | Representante com procuração específica com poderes para negociar e transigir; acompanhada de advogado. | art. 334, §§9º e 10 | requisito |
| CON-075 | conhecimento.js:104 | Acordo homologado por sentença de mérito. | art. 334, §11; art. 487, III | artigo |
| CON-076 | conhecimento.js:105 | Quiz: autor não quer, réu silente → há audiência. | não cita | gabarito |
| CON-077 | conhecimento.js:105 | Quiz: multa por falta → até 2%. | art. 334, §8º | gabarito |
| CON-078 | conhecimento.js:105 | Quiz: acordo gera sentença → de mérito. | art. 487, III, b | gabarito |

### Módulo `contestacao` — Contestação

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-079 | conhecimento.js:110 | Contestação em 15 dias; dobro para Fazenda, MP e Defensoria. | art. 335 | prazo |
| CON-080 | conhecimento.js:111 | Termo inicial: audiência ou última sessão, inclusive se uma parte faltou. | art. 335, I | prazo |
| CON-081 | conhecimento.js:112 | Dupla negativa: do protocolo do pedido do réu; em litisconsórcio, de cada réu. | art. 335, II e §1º | prazo |
| CON-082 | conhecimento.js:113 | Sem audiência: conforme a forma de citação; vários réus, a última das datas. | art. 335, III; art. 231, §1º | prazo |
| CON-083 | conhecimento.js:114 | Desistência quanto a réu não citado: demais contam da intimação da homologação. | art. 335, §2º | prazo |
| CON-084 | conhecimento.js:115 | Preliminares I a XIII (inexistência/nulidade de citação; incompetência absoluta e relativa; incorreção do valor; inépcia; perempção; litispendência; coisa julgada; conexão; incapacidade/defeito de representação/falta de autorização; convenção de arbitragem; ilegitimidade ou falta de interesse; falta de caução; indevida gratuidade). | art. 337 | artigo |
| CON-085 | conhecimento.js:115 | Juiz conhece de ofício todas, exceto convenção de arbitragem e incompetência relativa. | art. 337, §5º | artigo |
| CON-086 | conhecimento.js:118 | Litispendência: mesmas partes, causa e pedido, com a primeira pendente. | art. 337, §3º | artigo |
| CON-087 | conhecimento.js:119 | Coisa julgada: ação idêntica já transitada. | art. 337, §4º | artigo |
| CON-088 | conhecimento.js:120 | Perempção: três abandonos; não pode propor de novo, mas alega o direito em defesa. | art. 486, §3º | artigo |
| CON-089 | conhecimento.js:122 | Eventualidade: toda a defesa na contestação. | art. 336 | artigo |
| CON-090 | conhecimento.js:123 | Impugnação específica; exceções: não admite confissão, falta instrumento essencial, contradiz a defesa. | art. 341 | artigo |
| CON-091 | conhecimento.js:124 | Negativa geral só para defensor público, advogado dativo e curador especial. | art. 341, parágrafo único | artigo |
| CON-092 | conhecimento.js:125 | Após a contestação: só superveniente, matéria de ofício ou autorizada por lei. | art. 342 | artigo |
| CON-093 | conhecimento.js:126 | Arbitragem não alegada: aceitação da jurisdição estatal e renúncia ao juízo arbitral. | art. 337, §6º | artigo |
| CON-094 | conhecimento.js:128 | Substituição do réu em 15 dias; reembolso e honorários de 3% a 5% ao excluído (ou equidade se irrisório). | arts. 338 e 339 | prazo |
| CON-095 | conhecimento.js:129 | Autor pode incluir o indicado como litisconsorte. | art. 339, §2º | artigo |
| CON-096 | conhecimento.js:131 | Réu deve indicar o sujeito passivo correto sob pena de despesas e indenização. | art. 339 | artigo |
| CON-097 | conhecimento.js:132 | Contestação no foro do réu quando alega incompetência; prevenção; audiência do art. 334 suspensa. | art. 340 | artigo |
| CON-098 | conhecimento.js:133 | Quiz: juiz reconhece de ofício convenção de arbitragem? → Não. | art. 337, §5º | gabarito |
| CON-099 | conhecimento.js:133 | Quiz: curador especial contesta por negação geral? → Sim. | art. 341, parágrafo único | gabarito |
| CON-100 | conhecimento.js:133 | Quiz: honorários ao réu excluído → 3% a 5%. | art. 338, parágrafo único | gabarito |

### Módulo `reconvencao` — Reconvenção

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-101 | conhecimento.js:146 | Reconvenção na própria contestação; pode reconvir sem contestar. | art. 343, §6º | artigo |
| CON-102 | conhecimento.js:146 | Conexão com a ação principal ou com o fundamento da defesa. | art. 343 | requisito |
| CON-103 | conhecimento.js:146 | Autor intimado na pessoa do advogado para responder em 15 dias. | art. 343, §1º | prazo |
| CON-104 | conhecimento.js:146 | Desistência/extinção da principal não impede a reconvenção. | art. 343, §2º | artigo |
| CON-105 | conhecimento.js:146 | Reconvenção contra autor e terceiro, ou pelo réu com terceiro. | art. 343, §§3º e 4º | artigo |
| CON-106 | conhecimento.js:146 | Autor substituto processual: reconvinte afirma direito contra o substituído. | art. 343, §5º | artigo |
| CON-107 | conhecimento.js:147 | Ações dúplices (possessórias): pedido na contestação. | art. 556 | artigo |
| CON-108 | conhecimento.js:147 | Juizados: reconvenção vedada; só pedido contraposto. | Lei 9.099/95, art. 31 | artigo |
| CON-109 | conhecimento.js:147 | Reconvenção tem valor da causa e custas próprios. | não cita | conceito |
| CON-110 | conhecimento.js:148 | Quiz: autor desistiu → reconvenção prossegue. | art. 343, §2º | gabarito |
| CON-111 | conhecimento.js:148 | Quiz: reconvir sem contestar? → Sim. | art. 343, §6º | gabarito |

### Módulo `revelia` — Revelia

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-112 | conhecimento.js:153 | Exceções à presunção: algum réu contestou (I); direito indisponível (II); falta instrumento indispensável, ex. certidão de casamento no divórcio (III); alegações inverossímeis ou contrárias à prova (IV). | art. 345, I a IV | artigo |
| CON-113 | conhecimento.js:153 | Afastada a presunção, autor especifica provas. | art. 348 | artigo |
| CON-114 | conhecimento.js:153 | Efeito material: presunção de veracidade. | art. 344 | artigo |
| CON-115 | conhecimento.js:153 | Revel com efeito material e sem pedido de provas → julgamento antecipado. | art. 355, II | artigo |
| CON-116 | conhecimento.js:154 | Presunção relativa, não alcança o direito. | não cita | conceito |
| CON-117 | conhecimento.js:154 | Prazos contra revel sem advogado correm da publicação no órgão oficial. | art. 346 | prazo |
| CON-118 | conhecimento.js:154 | Revel pode intervir a qualquer tempo no estado em que está. | art. 346, parágrafo único | artigo |
| CON-119 | conhecimento.js:154 | Revel pode produzir provas contrapostas se ingressar a tempo. | art. 349 | artigo |
| CON-120 | conhecimento.js:155 | Revelia imprópria: não regularizar representação; não constituir novo advogado após morte do anterior. | art. 76, §1º, II; art. 313, §3º | artigo |
| CON-121 | conhecimento.js:156 | Quiz: revelia leva sempre à procedência? → Não. | não cita | gabarito |
| CON-122 | conhecimento.js:156 | Quiz: um réu contesta fato comum → não há presunção para o revel. | art. 345, I | gabarito |
| CON-123 | conhecimento.js:156 | Quiz: revel entra depois? → Sim, no estado em que estiver. | art. 346, parágrafo único | gabarito |

### Módulo `preliminares` — Providências preliminares

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-124 | conhecimento2.js:7 | Revelia sem efeito material → autor especifica provas. | arts. 345 e 348 | artigo |
| CON-125 | conhecimento2.js:8 | Fato impeditivo, modificativo ou extintivo → réplica em 15 dias. | art. 350 | prazo |
| CON-126 | conhecimento2.js:9 | Preliminares do art. 337 → réplica em 15 dias. | art. 351 | prazo |
| CON-127 | conhecimento2.js:10 | Vício sanável: correção em prazo não superior a 30 dias. | art. 352 | prazo |
| CON-128 | conhecimento2.js:11 | Dilatórias (incompetência, nulidade de citação, valor, conexão, incapacidade, gratuidade) x peremptórias (perempção, litispendência, coisa julgada, convenção de arbitragem, inépcia não sanada, ilegitimidade). | não cita | conceito |
| CON-129 | conhecimento2.js:12 | Defesa direta não gera réplica obrigatória; indireta gera. | art. 350 | conceito |
| CON-130 | conhecimento2.js:13 | Quiz: réu alegou pagamento → autor ouvido em 15 dias. | art. 350 | gabarito |
| CON-131 | conhecimento2.js:13 | Quiz: prazo máximo para corrigir vício → 30 dias. | art. 352 | gabarito |

### Módulo `estado` — Julgamento conforme o estado do processo

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-132 | conhecimento2.js:18 | Extinção (485 ou prescrição/decadência/homologação do 487); se parcial, interlocutória agravável. | art. 354 e parágrafo único | recurso |
| CON-133 | conhecimento2.js:18 | Julgamento antecipado: sem necessidade de provas, ou revel com efeito material sem pedido de provas. | art. 355 | artigo |
| CON-134 | conhecimento2.js:18 | Antecipado parcial: incontroverso ou pronto; interlocutória de mérito agravável, executável desde logo sem caução, faz coisa julgada. | art. 356 e §5º | recurso |
| CON-135 | conhecimento2.js:18 | Saneamento. | art. 357 | artigo |
| CON-136 | conhecimento2.js:20 | Acordo → extinção com homologação. | art. 487, III, b; art. 354 | artigo |
| CON-137 | conhecimento2.js:21 | Causa só de direito → antecipado. | art. 355, I | artigo |
| CON-138 | conhecimento2.js:22 | Dano material reconhecido, moral depende de prova → antecipado parcial. | art. 356, I | artigo |
| CON-139 | conhecimento2.js:24 | Decisão parcial de mérito: agravo; liquidada e cumprida desde logo; transita em julgado. | art. 1.015, II; art. 356, §§2º a 4º | recurso |
| CON-140 | conhecimento2.js:25 | Quiz: julgamento antecipado parcial → agravo de instrumento. | art. 356, §5º | gabarito |
| CON-141 | conhecimento2.js:25 | Quiz: causa só de direito → julgamento antecipado. | art. 355, I | gabarito |

### Módulo `saneamento` — Saneamento e ônus da prova

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-142 | conhecimento2.js:31-35 | Conteúdo do saneamento: questões processuais (I); questões de fato e meios de prova (II); ônus da prova (III); questões de direito (IV); audiência (V). | art. 357, I a V | artigo |
| CON-143 | conhecimento2.js:36 | Questão de fato não se reexamina em REsp. | Súmula 7 do STJ | súmula-jurisprudência |
| CON-144 | conhecimento2.js:37 | Pedido de esclarecimentos/ajustes em 5 dias; depois a decisão se estabiliza. | art. 357, §1º | prazo |
| CON-145 | conhecimento2.js:37 | Saneamento consensual homologado vincula partes e juiz. | art. 357, §2º | artigo |
| CON-146 | conhecimento2.js:37 | Saneamento compartilhado em audiência em causa complexa. | art. 357, §3º | artigo |
| CON-147 | conhecimento2.js:37 | Rol de testemunhas em até 15 dias; máximo 10, sendo 3 por fato. | art. 357, §§4º e 6º | prazo |
| CON-148 | conhecimento2.js:37 | Perito nomeado e calendário. | art. 357, §8º | artigo |
| CON-149 | conhecimento2.js:39 | Ônus estático: autor fato constitutivo; réu impeditivo, modificativo, extintivo. | art. 373 | artigo |
| CON-150 | conhecimento2.js:40 | Distribuição dinâmica por decisão fundamentada; não pode gerar prova impossível. | art. 373, §§1º e 2º | artigo |
| CON-151 | conhecimento2.js:40 | Redistribuição do ônus: agravo de instrumento. | art. 1.015, XI | recurso |
| CON-152 | conhecimento2.js:41 | Convenção sobre ônus permitida, salvo direito indisponível ou dificuldade excessiva. | art. 373, §3º | artigo |
| CON-153 | conhecimento2.js:42 | Inversão do CDC: verossimilhança ou hipossuficiência. | CDC, art. 6º, VIII | artigo |
| CON-154 | conhecimento2.js:43 | Quiz: ajustes no saneamento → 5 dias. | art. 357, §1º | gabarito |
| CON-155 | conhecimento2.js:43 | Quiz: máximo de testemunhas por fato → 3. | art. 357, §6º | gabarito |
| CON-156 | conhecimento2.js:43 | Quiz: redistribuição do ônus é agravável? → Sim. | art. 1.015, XI | gabarito |

### Módulo `aij` — Audiência de instrução e julgamento

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-157 | conhecimento2.js:49 | Pregão. | art. 358 | artigo |
| CON-158 | conhecimento2.js:50 | Tentativa de conciliação. | art. 359 | artigo |
| CON-159 | conhecimento2.js:51 | Perito e assistentes respondem quesitos de esclarecimento. | art. 361, I | artigo |
| CON-160 | conhecimento2.js:52 | Depoimento pessoal: primeiro autor, depois réu. | art. 361, II | artigo |
| CON-161 | conhecimento2.js:53 | Testemunhas do autor, depois do réu; ordem preferencial. | art. 361, III | artigo |
| CON-162 | conhecimento2.js:54 | Debates: 20 minutos por parte e MP, prorrogáveis por 10; causa complexa: memoriais em 15 dias sucessivos. | art. 364 | prazo |
| CON-163 | conhecimento2.js:55 | Sentença na audiência ou em 30 dias. | art. 366 | prazo |
| CON-164 | conhecimento2.js:56 | Poder de polícia. | art. 360 | artigo |
| CON-165 | conhecimento2.js:56 | Sem apartes sem licença. | art. 361, parágrafo único | artigo |
| CON-166 | conhecimento2.js:56 | Audiência una e contínua, cindível excepcionalmente. | art. 365 | artigo |
| CON-167 | conhecimento2.js:56 | Gravação pelas partes sem autorização prévia. | art. 367, §§5º e 6º | artigo |
| CON-168 | conhecimento2.js:56 | Publicidade da audiência. | arts. 368 e 189 | artigo |
| CON-169 | conhecimento2.js:57 | Adiamento por convenção (I); impedimento justificado comprovado até a abertura (II, §1º); atraso injustificado de mais de 30 minutos (III). | art. 362 | prazo |
| CON-170 | conhecimento2.js:57 | Advogado ausente sem justificativa: juiz pode dispensar provas da parte; quem der causa paga despesas. | art. 362, §§2º e 3º | artigo |
| CON-171 | conhecimento2.js:58 | Quiz: quem depõe primeiro → autor. | art. 361, II | gabarito |
| CON-172 | conhecimento2.js:58 | Quiz: tempo de debates → 20 + 10 minutos. | art. 364 | gabarito |
| CON-173 | conhecimento2.js:58 | Quiz: parte grava sem autorização? → Sim. | art. 367, §6º | gabarito |

### Módulo `tutelas` — Tutelas provisórias

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-174 | conhecimento2.js:66-71 | Urgência (art. 300): cautelar e antecipada, antecedente ou incidental; evidência (art. 311) só incidental. | arts. 300 e 311 | conceito |
| CON-175 | conhecimento2.js:73 | Requisitos da urgência: probabilidade do direito e perigo de dano/risco ao resultado útil. | art. 300 | requisito |
| CON-176 | conhecimento2.js:74 | Tutela conserva eficácia; revogável a qualquer tempo. | art. 296 | artigo |
| CON-177 | conhecimento2.js:74 | Caução real ou fidejussória, dispensada para quem não pode oferecer. | art. 300, §1º | artigo |
| CON-178 | conhecimento2.js:74 | Liminar ou após justificação prévia. | art. 300, §2º | artigo |
| CON-179 | conhecimento2.js:74 | Irreversibilidade impede antecipada; jurisprudência relativiza. | art. 300, §3º | artigo |
| CON-180 | conhecimento2.js:74 | Responsabilidade objetiva do requerente. | art. 302 | artigo |
| CON-181 | conhecimento2.js:74 | Decisão sobre tutela: agravo; na sentença, apelação sem efeito suspensivo nesse capítulo. | art. 1.015, I; art. 1.012, §1º, V | recurso |
| CON-182 | conhecimento2.js:75 | Cautelares: arresto, sequestro, arrolamento, protesto contra alienação, outra medida idônea. | art. 301 | artigo |
| CON-183 | conhecimento2.js:75 | Antecipada antecedente: inicial limitada ao pedido de tutela; estabiliza se o réu não recorrer. | arts. 303 e 304 | artigo |
| CON-184 | conhecimento2.js:75 | Tutela incidental independe de custas. | arts. 295 e 300 | artigo |
| CON-185 | conhecimento2.js:75 | Evidência: liminar só nas hipóteses II e III. | art. 311 | artigo |
| CON-186 | conhecimento2.js:77 | Petição sumarizada: valor da causa considerando o pedido final; declara uso do benefício. | art. 303, caput e §§4º e 5º | requisito |
| CON-187 | conhecimento2.js:78 | Concedida: aditamento em 15 dias (ou mais), mesmos autos, sem custas; sem aditamento, extinção. | art. 303, §§1º a 3º | prazo |
| CON-188 | conhecimento2.js:79 | Negada: emenda em até 5 dias. | art. 303, §6º | prazo |
| CON-189 | conhecimento2.js:80 | Estabilização: réu não recorre → extinção e tutela continua eficaz. | art. 304 | artigo |
| CON-190 | conhecimento2.js:81 | Ação para rever/reformar/invalidar em 2 anos da ciência da extinção; não há coisa julgada. | art. 304, §§2º, 5º e 6º | prazo |
| CON-191 | conhecimento2.js:83 | Cautelar antecedente: fungibilidade com o art. 303. | art. 305 | artigo |
| CON-192 | conhecimento2.js:84 | Réu contesta em 5 dias; sem contestação, fatos aceitos e decisão em 5 dias. | arts. 306 e 307 | prazo |
| CON-193 | conhecimento2.js:85 | Pedido principal em 30 dias da efetivação, mesmos autos, sem custas. | art. 308 | prazo |
| CON-194 | conhecimento2.js:86 | Cessa a eficácia: sem pedido principal em 30 dias, sem efetivação em 30 dias, improcedência/extinção. | art. 309 | prazo |
| CON-195 | conhecimento2.js:87 | Indeferimento da cautelar não impede pedido principal, salvo prescrição/decadência. | art. 310 | artigo |
| CON-196 | conhecimento2.js:88 | Evidência: I abuso/protelação (sem liminar); II documento + repetitivo ou súmula vinculante (liminar); III depósito (liminar); IV prova documental sem contraprova (sem liminar). | art. 311 | artigo |
| CON-197 | conhecimento2.js:90 | Emenda (juiz pede, art. 321) x aditamento (autor faz, arts. 303, §1º e 329). | arts. 321, 303, §1º, 329 | conceito |
| CON-198 | conhecimento2.js:91 | REsp 1.760.966 (STJ, 2018): contestação ou outra impugnação também pode afastar a estabilização; divergência entre turmas. | STJ, REsp 1.760.966 | súmula-jurisprudência |
| CON-199 | conhecimento2.js:92 | Quiz: tutela que dispensa perigo → evidência. | art. 311 | gabarito |
| CON-200 | conhecimento2.js:92 | Quiz: antecedente concedida, réu não recorreu → estabilização. | art. 304 | gabarito |
| CON-201 | conhecimento2.js:92 | Quiz: pedido principal após cautelar → 30 dias. | art. 308 | gabarito |
| CON-202 | conhecimento2.js:92 | Quiz: evidência por abuso do direito de defesa admite liminar? → Não. | art. 311 | gabarito |

### Módulo `sentenca` — Sentença

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-203 | conhecimento2.js:97 | Sem mérito: indeferimento; paralisação por mais de 1 ano por negligência; abandono pelo autor por mais de 30 dias; pressupostos; perempção/litispendência/coisa julgada; ilegitimidade/interesse; arbitragem; desistência; morte em ação intransmissível. | art. 485 | prazo |
| CON-204 | conhecimento2.js:97 | Com mérito: acolher/rejeitar; prescrição/decadência; homologar reconhecimento, transação, renúncia. | art. 487 | artigo |
| CON-205 | conhecimento2.js:98 | Abandono: intimação pessoal para suprir em 5 dias. | art. 485, §1º | prazo |
| CON-206 | conhecimento2.js:98 | Após contestação, extinção por abandono depende de requerimento do réu. | art. 485, §6º; Súmula 240 do STJ | súmula-jurisprudência |
| CON-207 | conhecimento2.js:98 | Matérias de ofício: pressupostos, perempção, litispendência, coisa julgada, condições, intransmissibilidade. | art. 485, §3º | artigo |
| CON-208 | conhecimento2.js:98 | Retratação na apelação em 5 dias. | art. 485, §7º | prazo |
| CON-209 | conhecimento2.js:98 | Repropositura possível, salvo perempção, litispendência e coisa julgada; corrigir vício e pagar custas/honorários. | art. 486 | artigo |
| CON-210 | conhecimento2.js:98 | Primazia do mérito. | art. 488 | artigo |
| CON-211 | conhecimento2.js:99 | Elementos: relatório, fundamentação, dispositivo (este transita). | art. 489, I a III | artigo |
| CON-212 | conhecimento2.js:101-103 | Ultra petita (reduz ao limite); extra petita (nula na parte); citra petita (cabem embargos de declaração). | não cita | conceito |
| CON-213 | conhecimento2.js:104 | Congruência. | arts. 141 e 492 | artigo |
| CON-214 | conhecimento2.js:104 | Condenação em quantia: índice, juros, termo inicial e capitalização. | art. 491 | artigo |
| CON-215 | conhecimento2.js:104 | Fato superveniente considerado de ofício ou a pedido, ouvidas as partes. | art. 493 | artigo |
| CON-216 | conhecimento2.js:104 | Publicada, só erro material ou embargos. | art. 494 | artigo |
| CON-217 | conhecimento2.js:104 | Hipoteca judiciária: credor informa registro em 15 dias; responsabilidade objetiva. | art. 495 | prazo |
| CON-218 | conhecimento2.js:104 | Remessa necessária dispensada abaixo de 1.000 SM (União), 500 (Estados e capitais), 100 (demais municípios), ou se fundada em precedente vinculante. | art. 496 | requisito |
| CON-219 | conhecimento2.js:105 | Quiz: abandono após contestação, extingue de ofício? → Não, depende de requerimento do réu. | Súmula 240 do STJ | gabarito |
| CON-220 | conhecimento2.js:105 | Quiz: prescrição gera sentença → de mérito. | art. 487, II | gabarito |
| CON-221 | conhecimento2.js:105 | Quiz: dá mais que o pedido → ultra petita. | não cita | gabarito |

### Módulo `coisajulgada` — Coisa julgada

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-222 | conhecimento2.js:108 | Coisa julgada torna imutável e indiscutível a decisão de mérito não mais sujeita a recurso. | art. 502 | artigo |
| CON-223 | conhecimento2.js:110 | Formal atinge também terminativas; material só mérito. | não cita | conceito |
| CON-224 | conhecimento2.js:111 | Limites objetivos: dispositivo, nos limites da questão principal. | art. 503 | artigo |
| CON-225 | conhecimento2.js:111 | Prejudicial incidental transita se: dela depender o mérito; contraditório efetivo (não na revelia); juízo competente. | art. 503, §1º | requisito |
| CON-226 | conhecimento2.js:111 | Não transitam motivos e verdade dos fatos. | art. 504 | artigo |
| CON-227 | conhecimento2.js:111 | Não prejudica terceiros. | art. 506 | artigo |
| CON-228 | conhecimento2.js:111 | Relação de trato continuado revisável. | art. 505, I | artigo |
| CON-229 | conhecimento2.js:111 | Eficácia preclusiva. | art. 508 | artigo |
| CON-230 | conhecimento2.js:112 | Rescisória: 2 anos do trânsito da última decisão; hipóteses taxativas do art. 966. | arts. 975 e 966 | prazo |
| CON-231 | conhecimento2.js:113 | Quiz: fundamentos transitam? → Não. | art. 504 | gabarito |
| CON-232 | conhecimento2.js:113 | Quiz: sentença prejudica terceiro? → Não. | art. 506 | gabarito |
| CON-233 | conhecimento2.js:113 | Quiz: prazo da rescisória → 2 anos. | art. 975 | gabarito |

### Módulo `arbitragem` — Arbitragem

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CON-234 | conhecimento2.js:118 | Só direitos patrimoniais disponíveis; Administração Pública pode usar. | Lei 9.307/96, art. 1º e §1º | artigo |
| CON-235 | conhecimento2.js:118 | Cláusula compromissória x compromisso arbitral. | Lei 9.307/96, art. 3º | artigo |
| CON-236 | conhecimento2.js:118 | Árbitro: pessoa capaz, não precisa ser jurista; juiz de fato e de direito. | Lei 9.307/96, art. 18 | artigo |
| CON-237 | conhecimento2.js:118 | Sentença arbitral sem recurso nem homologação; título executivo judicial. | Lei 9.307/96, art. 31; CPC, art. 515, VII | artigo |
| CON-238 | conhecimento2.js:118 | Tutela de urgência pré-arbitral no Judiciário; depois, árbitros mantêm ou revogam. | Lei 9.307/96, arts. 22-A e 22-B | artigo |
| CON-239 | conhecimento2.js:118 | Ação de anulação em 90 dias. | Lei 9.307/96, art. 33 | prazo |
| CON-240 | conhecimento2.js:119 | Convenção de arbitragem: preliminar não conhecida de ofício; não alegada = renúncia. | CPC, art. 337, X e §§5º e 6º | artigo |
| CON-241 | conhecimento2.js:119 | Acolhida, extinção sem mérito. | CPC, art. 485, VII | artigo |
| CON-242 | conhecimento2.js:119 | Carta arbitral. | CPC, art. 237, IV | artigo |
| CON-243 | conhecimento2.js:119 | STF reconheceu a constitucionalidade da Lei de Arbitragem (SE 5.206, 2001). | STF, SE 5.206 | súmula-jurisprudência |
| CON-244 | conhecimento2.js:120 | Artigos-chave: 319, 332, 334, 335 (15 dias), 337, 344, 357, 300, 311, 502. | arts. citados | artigo |
| CON-245 | conhecimento2.js:121 | Quiz: arbitragem sobre guarda de filhos → Não, direito indisponível. | Lei 9.307/96, art. 1º | gabarito |
| CON-246 | conhecimento2.js:121 | Quiz: sentença arbitral precisa de homologação? → Não. | Lei 9.307/96, art. 18 | gabarito |
| CON-247 | conhecimento2.js:121 | Quiz: réu não alegou cláusula → renúncia ao juízo arbitral. | CPC, art. 337, §6º | gabarito |

---

## Procedimentos Especiais e Recursos

### Módulo `introducao` — Por que existem procedimentos especiais

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-001 | procesp.js:3 | Matéria abrange CPC, arts. 539 a 1.044. | arts. 539 a 1.044 | artigo |
| PE-002 | procesp.js:10 | Possuidor esbulhado há menos de ano e dia pode reaver a coisa desde logo (liminar). | não cita | conceito |
| PE-003 | procesp.js:11 | Comum se aplica subsidiariamente aos especiais. | CPC, art. 318, parágrafo único | artigo |
| PE-004 | procesp.js:12 | Contenciosos (arts. 539 a 718): consignação, exigir contas, possessórias, divisão/demarcação, dissolução parcial, inventário, embargos de terceiro, oposição, habilitação, família, monitória, penhor legal, avaria grossa, restauração de autos. | arts. 539 a 718 | artigo |
| PE-005 | procesp.js:12 | Voluntária: iniciativa do interessado, MP ou Defensoria. | art. 720 | artigo |
| PE-006 | procesp.js:12 | Fazenda ouvida se tiver interesse. | art. 722 | artigo |
| PE-007 | procesp.js:12 | Juiz decide em 10 dias, sem legalidade estrita. | art. 723 | prazo |
| PE-008 | procesp.js:12 | Sentença de jurisdição voluntária é apelável. | art. 724 | recurso |
| PE-009 | procesp.js:12 | Exemplos de voluntária: alvará, emancipação, divórcio consensual, interdição, homologação de acordo extrajudicial. | não cita | conceito |
| PE-010 | procesp.js:13 | Inventário é jurisdição contenciosa mesmo com acordo. | não cita | conceito |
| PE-011 | procesp.js:14 | Totalmente especiais: inventário, exigir contas; só fase inicial especial: possessórias, monitória, embargos de terceiro, demarcação e divisão. | não cita | conceito |
| PE-012 | procesp.js:15 | Leis especiais: 8.245/1991 (locação); 12.016/2009 (MS); 7.347/1985 (ACP); 8.078/1990 (CDC); 8.429/1992 (improbidade); 5.478/1968 (alimentos); 9.099/1995 (Juizados). | leis citadas | artigo |
| PE-013 | procesp.js:16 | Quiz: inventário é jurisdição → contenciosa. | arts. 539 a 718 | gabarito |
| PE-014 | procesp.js:16 | Quiz: na voluntária o juiz → pode adotar a solução mais conveniente. | art. 723, parágrafo único | gabarito |
| PE-015 | procesp.js:16 | Quiz: recurso contra sentença de voluntária → apelação. | art. 724 | gabarito |

### Módulo `consignacao` — Consignação em pagamento

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-016 | procesp.js:19 | Devedor deposita e se libera. | CC, art. 334 | artigo |
| PE-017 | procesp.js:21 | Hipóteses: recusa, omissão, credor inacessível, dúvida, litígio. | CC, art. 335 | requisito |
| PE-018 | procesp.js:22 | Base processual arts. 539 a 549; legitimidade do devedor ou terceiro; foro do lugar do pagamento (imóvel: situação). | art. 540 | artigo |
| PE-019 | procesp.js:23 | Via bancária: depósito em banco oficial do lugar do pagamento, ciência por carta com AR; 10 dias para o credor. | art. 539, §§1º a 4º | prazo |
| PE-020 | procesp.js:23 | Silêncio do credor equivale à aceitação. | art. 539, §2º | artigo |
| PE-021 | procesp.js:23 | Recusa por escrito: ação em 1 mês com prova do depósito e recusa; senão, depósito perde efeito. | art. 539, §§3º e 4º | prazo |
| PE-022 | procesp.js:23 | Via bancária exclusiva para dinheiro. | não cita | requisito |
| PE-023 | procesp.js:24 | Defesa limitada: não houve recusa/mora; recusa justa; depósito fora do prazo/lugar; depósito não integral, indicando o montante. | art. 544 | artigo |
| PE-024 | procesp.js:25 | Depósito em 5 dias do deferimento, sob pena de extinção. | art. 542 | prazo |
| PE-025 | procesp.js:25 | Prestações sucessivas depositadas até 5 dias após cada vencimento. | art. 541 | prazo |
| PE-026 | procesp.js:25 | Insuficiência: complemento em 10 dias; réu levanta o incontroverso. | art. 545 | prazo |
| PE-027 | procesp.js:25 | Caráter dúplice: sentença fixa o valor e vale como título para o réu. | art. 545, §2º | artigo |
| PE-028 | procesp.js:25 | Procedência: extinta a obrigação, custas e honorários; coisa julgada material. | art. 546 | artigo |
| PE-029 | procesp.js:25 | Dúvida sobre o credor: arrecadação se ninguém aparece; um aparece, juiz decide; vários, disputam entre si. | art. 548 | artigo |
| PE-030 | procesp.js:27 | TJSC, ApCiv 5021111-82.2023.8.24.0008 (2026): depósito inferior ao devido não quita. | TJSC | súmula-jurisprudência |
| PE-031 | procesp.js:28 | TJSC, ApCiv 5001516-76.2025.8.24.0930 (2026): consignatória não serve para descobrir quanto se deve. | TJSC | súmula-jurisprudência |
| PE-032 | procesp.js:29 | Quiz: credor silente após depósito → obrigação extinta. | art. 539, §2º | gabarito |
| PE-033 | procesp.js:29 | Quiz: prazo após recusa bancária → 1 mês. | art. 539, §3º | gabarito |
| PE-034 | procesp.js:29 | Quiz: complementar depósito → 10 dias. | art. 545 | gabarito |

### Módulo `contas` — Ação de exigir contas

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-035 | procesp.js:32 | Exigir contas: arts. 550 a 553. | arts. 550 a 553 | artigo |
| PE-036 | procesp.js:34 | Inventariante deve prestar contas. | CPC, art. 618, VII | artigo |
| PE-037 | procesp.js:34 | Tutor e curador. | CC, art. 1.755; CPC, art. 553 | artigo |
| PE-038 | procesp.js:34 | Administrador judicial da falência. | Lei 11.101/2005 | artigo |
| PE-039 | procesp.js:36 | Réu citado para prestar contas ou contestar em 15 dias. | art. 550 | prazo |
| PE-040 | procesp.js:38-39 | 1ª fase procedente: interlocutória, agravo; improcedente: sentença, apelação. | não cita (juris abaixo) | recurso |
| PE-041 | procesp.js:42 | Saldo a favor do autor ou do réu é título executivo. | não cita | conceito |
| PE-042 | procesp.js:43 | Réu presta contas: autor tem 15 dias. | art. 550, §2º | prazo |
| PE-043 | procesp.js:43 | Réu inerte: julgamento antecipado. | art. 355 | artigo |
| PE-044 | procesp.js:43 | Procedente a 1ª fase: condena a prestar em 15 dias, sob pena de não impugnar as do autor; se não prestar, autor apresenta, perícia possível. | art. 550, §§5º e 6º | prazo |
| PE-045 | procesp.js:45 | STJ, REsp 1.746.337 (2019): procedência da 1ª fase é interlocutória de mérito (agravo); improcedência/extinção é sentença (apelação). | STJ, REsp 1.746.337 | súmula-jurisprudência |
| PE-046 | procesp.js:46 | TJSC, ApCiv 5008957-72.2021.8.24.0082 (2026): contas analíticas e individualizadas em operação coletiva. | TJSC | súmula-jurisprudência |
| PE-047 | procesp.js:47 | TJSC, AI 5040023-49.2026.8.24.0000 (2026): contrato com remuneração variável gera dever de contas; exceção do contrato não cumprido é da 2ª fase. | TJSC | súmula-jurisprudência |
| PE-048 | procesp.js:48 | TJSC, AI 5009460-72.2026.8.24.0000 (2026): legitimidade pela teoria da asserção. | TJSC | súmula-jurisprudência |
| PE-049 | procesp.js:49 | Forma das contas; sentença apura saldo e vale como título executivo judicial. | arts. 551 e 552 | artigo |
| PE-050 | procesp.js:50 | Quiz: procedência da 1ª fase → agravo de instrumento. | STJ, REsp 1.746.337 | gabarito |
| PE-051 | procesp.js:50 | Quiz: autor pode sair devendo? → Sim. | art. 552 | gabarito |
| PE-052 | procesp.js:50 | Quiz: réu condenado a prestar contas → 15 dias. | art. 550, §5º | gabarito |

### Módulo `possessorias` — Ações possessórias

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-053 | procesp.js:53 | Possessórias: arts. 554 a 568; CC, arts. 1.196 a 1.224. | arts. 554 a 568; CC 1.196-1.224 | artigo |
| PE-054 | procesp.js:55 | Reintegração (esbulho) e manutenção (turbação). | art. 560 | artigo |
| PE-055 | procesp.js:55 | Interdito proibitório: ameaça; pena pecuniária; possuidor direto ou indireto. | arts. 567 e 568 | artigo |
| PE-056 | procesp.js:57 | Fungibilidade possessória. | art. 554 | artigo |
| PE-057 | procesp.js:57 | Cumulação: perdas e danos, frutos, pena, desfazimento. | art. 555 | artigo |
| PE-058 | procesp.js:57 | Caráter dúplice. | art. 556 | artigo |
| PE-059 | procesp.js:57 | Vedada discussão de domínio na pendência, salvo contra terceiro. | art. 557 | artigo |
| PE-060 | procesp.js:57 | Caução se autor sem idoneidade: réu pede em 5 dias; salvo hipossuficiente. | art. 559 | prazo |
| PE-061 | procesp.js:57 | Sentença cumpre-se por mandado; apelação com efeito suspensivo salvo na parte que confirma a liminar. | art. 1.012, §1º, V | recurso |
| PE-062 | procesp.js:58 | Imóvel: situação, competência absoluta. | art. 47, §2º | artigo |
| PE-063 | procesp.js:58 | Móvel: domicílio do réu. | art. 46 | artigo |
| PE-064 | procesp.js:58 | União, autarquias, empresas públicas federais: Justiça Federal. | CF, art. 109, I | artigo |
| PE-065 | procesp.js:58 | Greve na iniciativa privada: Justiça do Trabalho. | Súmula Vinculante 23 | súmula-jurisprudência |
| PE-066 | procesp.js:59 | Litígio coletivo: citação pessoal dos encontrados (oficial procura uma vez) e edital dos demais. | art. 554, §§1º e 2º | requisito |
| PE-067 | procesp.js:59 | Intimação do MP e da Defensoria (vulneráveis). | art. 554, §1º | requisito |
| PE-068 | procesp.js:59 | Publicidade por jornal, rádio, cartazes. | art. 554, §3º | artigo |
| PE-069 | procesp.js:59 | Força velha coletiva: mediação em até 30 dias antes da liminar. | art. 565 | prazo |
| PE-070 | procesp.js:59 | Liminar não executada em 1 ano da distribuição: nova mediação; juiz pode ir ao local e chamar órgãos. | art. 565, §§1º a 4º | prazo |
| PE-071 | procesp.js:60 | SV 23: possessória por greve na iniciativa privada é da Justiça do Trabalho. | SV 23 | súmula-jurisprudência |
| PE-072 | procesp.js:60 | Súmula 619 STJ: ocupação de bem público é detenção, sem retenção/indenização. | Súmula 619 do STJ | súmula-jurisprudência |
| PE-073 | procesp.js:61 | Quiz: pediu manutenção, houve esbulho → concede reintegração. | art. 554 | gabarito |
| PE-074 | procesp.js:61 | Quiz: réu precisa reconvir para indenização? → Não. | art. 556 | gabarito |
| PE-075 | procesp.js:61 | Quiz: foro da possessória de imóvel → absoluto da situação. | art. 47, §2º | gabarito |

### Módulo `forca` — Força nova e força velha

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-076 | procesp.js:64 | Divisor de ano e dia muda o rito, não o direito. | não cita | conceito |
| PE-077 | procesp.js:67 | Força nova: rito especial; liminar possessória. | arts. 560 a 566; art. 562 | artigo |
| PE-078 | procesp.js:67 | Provar posse, moléstia, data e perda/continuação. | art. 561 | requisito |
| PE-079 | procesp.js:67 | Liminar de força nova dispensa perigo (natureza de evidência). | não cita | conceito |
| PE-080 | procesp.js:67 | Força velha: procedimento comum, sem perder o caráter possessório. | art. 558, parágrafo único | artigo |
| PE-081 | procesp.js:67 | Força velha: tutela genérica exige probabilidade e perigo. | art. 300 | requisito |
| PE-082 | procesp.js:68 | Inicial: art. 319 + provas do art. 561. | arts. 319 e 561 | requisito |
| PE-083 | procesp.js:68 | Liminar de plano com prova documental; senão justificação. | art. 562 | artigo |
| PE-084 | procesp.js:68 | Pessoa de direito público: liminar só após ouvir seus representantes. | art. 562, parágrafo único | requisito |
| PE-085 | procesp.js:68 | Autor promove a citação em 5 dias. | art. 564 | prazo |
| PE-086 | procesp.js:68 | Contestação em 15 dias; havendo justificação, da intimação da decisão sobre a liminar. | art. 564, parágrafo único | prazo |
| PE-087 | procesp.js:68 | Depois, procedimento comum. | art. 566 | artigo |
| PE-088 | procesp.js:69 | Força velha: tutela provisória pelos requisitos gerais. | STJ, AgRg no REsp 1.139.629/RJ (2012) | súmula-jurisprudência |
| PE-089 | procesp.js:70 | Quiz: esbulho em 1/1/2025, ação em 10/1/2026 → força velha (limite 2/1/2026). | não cita | gabarito |
| PE-090 | procesp.js:70 | Quiz: força nova exige perigo? → Não. | art. 562 | gabarito |
| PE-091 | procesp.js:70 | Quiz: passado ano e dia perde caráter possessório? → Não. | art. 558, parágrafo único | gabarito |

### Módulo `embargos-terceiro` — Embargos de terceiro

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-092 | procesp.js:73 | Embargos de terceiro: arts. 674 a 681. | arts. 674 a 681 | artigo |
| PE-093 | procesp.js:75 | Rol exemplificativo; proprietário (inclusive fiduciário) ou possuidor. | art. 674, §1º | artigo |
| PE-094 | procesp.js:75 | Terceiros: cônjuge/companheiro; adquirente em fraude à execução; sócio/empresa em desconsideração sem participação; credor com garantia real não intimado. | art. 674, §2º | artigo |
| PE-095 | procesp.js:76 | No conhecimento: a qualquer tempo antes do trânsito. | art. 675 | prazo |
| PE-096 | procesp.js:76 | Na execução: até 5 dias após adjudicação, alienação particular ou arrematação, antes da carta. | art. 675 | prazo |
| PE-097 | procesp.js:77 | Competência por dependência; por carta, juízo deprecado salvo se o deprecante indicou o bem. | art. 676 | artigo |
| PE-098 | procesp.js:77 | Inicial: prova sumária de posse/domínio e qualidade de terceiro. | art. 677 | requisito |
| PE-099 | procesp.js:77 | Valor da causa: valor do bem ou da meação, não ultrapassa a dívida. | não cita | conceito |
| PE-100 | procesp.js:77 | Réus: beneficiado pela constrição e o adversário dele se indicou o bem. | art. 677, §4º | artigo |
| PE-101 | procesp.js:77 | Liminar com suspensão das medidas; caução salvo hipossuficiente. | art. 678 | artigo |
| PE-102 | procesp.js:77 | Contestação em 15 dias, depois comum. | art. 679 | prazo |
| PE-103 | procesp.js:77 | Procedência cancela a constrição. | art. 681 | artigo |
| PE-104 | procesp.js:78 | Fraude contra credores não se discute em embargos (ação pauliana). | Súmula 195 do STJ | súmula-jurisprudência |
| PE-105 | procesp.js:79 | Quem deu causa à constrição indevida paga honorários; adquirente sem registro pagou honorários mesmo vencendo. | Súmula 303 do STJ; AgInt nos EDcl nos EDcl no AREsp 1.222.042/SP (2019) | súmula-jurisprudência |
| PE-106 | procesp.js:79 | Compromisso de compra e venda sem registro legitima embargos. | Súmula 84 do STJ | súmula-jurisprudência |
| PE-107 | procesp.js:80 | Quiz: prazo na execução após arrematação → 5 dias, antes da carta. | art. 675 | gabarito |
| PE-108 | procesp.js:80 | Quiz: fraude contra credores nos embargos? → Não. | Súmula 195 do STJ | gabarito |
| PE-109 | procesp.js:80 | Quiz: embargante vencedor paga honorários? → Sim, se deu causa. | Súmula 303 do STJ | gabarito |

### Módulo `monitoria` — Ação monitória

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-110 | procesp.js:83 | Monitória: arts. 700 a 702. | arts. 700 a 702 | artigo |
| PE-111 | procesp.js:85 | Prova escrita sem eficácia executiva: cheque prescrito, contrato sem testemunhas, e-mails. | Súmula 299 do STJ | súmula-jurisprudência |
| PE-112 | procesp.js:85 | Prova oral documentada serve. | art. 700, §1º | artigo |
| PE-113 | procesp.js:85 | Não cabe contra incapaz. | não cita | requisito |
| PE-114 | procesp.js:85 | Objeto: quantia, coisa fungível/infungível, móvel/imóvel, fazer/não fazer. | não cita | requisito |
| PE-115 | procesp.js:85 | Cabe contra a Fazenda. | art. 700, §6º; Súmula 339 do STJ | súmula-jurisprudência |
| PE-116 | procesp.js:85 | Citação por qualquer meio, inclusive edital. | art. 700, §7º; Súmula 282 do STJ | súmula-jurisprudência |
| PE-117 | procesp.js:85 | Inicial com memória de cálculo / valor da coisa / proveito, que definem o valor da causa. | art. 700, §§2º e 3º | requisito |
| PE-118 | procesp.js:87 | Mandado: cumprir em 15 dias + 5% de honorários. | art. 701 | prazo |
| PE-119 | procesp.js:89-92 | Cumpre: isento de custas; parcela: 30% + 6 vezes; embarga: 15 dias sem garantia; inerte: título se forma. | arts. 701 e 702 | prazo |
| PE-120 | procesp.js:96 | Pagamento no prazo: isenção de custas. | art. 701, §1º | artigo |
| PE-121 | procesp.js:96 | Inércia: título executivo judicial de pleno direito; cabe rescisória. | art. 701, §§2º e 3º | artigo |
| PE-122 | procesp.js:96 | Parcelamento do art. 916: 30% e até 6 parcelas. | art. 701, §5º | artigo |
| PE-123 | procesp.js:96 | Embargos nos próprios autos, 15 dias, sem segurança, toda matéria de defesa. | art. 702 | prazo |
| PE-124 | procesp.js:96 | Excesso: indicar valor correto com demonstrativo. | art. 702, §§2º e 3º | artigo |
| PE-125 | procesp.js:96 | Embargos suspendem o mandado até o julgamento em 1º grau. | art. 702, §4º | artigo |
| PE-126 | procesp.js:96 | Reconvenção cabe, mas não reconvenção à reconvenção. | art. 702, §6º | artigo |
| PE-127 | procesp.js:96 | Má-fé: multa de até 10% do valor da causa para autor e réu. | art. 702, §§10 e 11 | artigo |
| PE-128 | procesp.js:97 | Procedimentos especiais não cabem nos Juizados. | FONAJE, Enunciado 8 | súmula-jurisprudência |
| PE-129 | procesp.js:97 | Dívida líquida em instrumento particular prescreve em 5 anos. | CC, art. 206, §5º, I | prazo |
| PE-130 | procesp.js:97 | Cheque sem força executiva: monitória em 5 anos do dia seguinte à emissão. | Súmula 503 do STJ | súmula-jurisprudência |
| PE-131 | procesp.js:98 | Quiz: honorários se pagar no prazo → 5%. | art. 701 | gabarito |
| PE-132 | procesp.js:98 | Quiz: embargos monitórios exigem garantia? → Não. | art. 702 | gabarito |
| PE-133 | procesp.js:98 | Quiz: cheque prescrito instrui monitória? → Sim. | Súmula 299 do STJ | gabarito |
| PE-134 | procesp.js:98 | Quiz: réu inerte → título se forma de pleno direito. | art. 701, §2º | gabarito |

### Módulo `demarcacao` — Demarcação e divisão de terras

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-135 | procesp.js:114 | Demarcatória: proprietário contra confinante. | art. 569, I | artigo |
| PE-136 | procesp.js:114 | Inicial da demarcatória: títulos, situação e denominação, limites, confinantes. | art. 574 | requisito |
| PE-137 | procesp.js:114 | Despesas da demarcação repartidas proporcionalmente. | CC, art. 1.297 | artigo |
| PE-138 | procesp.js:114 | Divisória: condômino contra os demais. | art. 569, II | artigo |
| PE-139 | procesp.js:114 | Inicial da divisória: título de domínio (posse não basta), origem da comunhão, condôminos, benfeitorias. | art. 588 | requisito |
| PE-140 | procesp.js:114 | Laudo: comodidade, terrenos contíguos às casas, evitar retalhar. | art. 595 | artigo |
| PE-141 | procesp.js:115 | Cumulação: primeiro a demarcação. | art. 570 | artigo |
| PE-142 | procesp.js:115 | Extrajudicial por escritura se todos maiores, capazes e concordes. | art. 571 | requisito |
| PE-143 | procesp.js:115 | Foro da situação, sem opção pelo foro do réu ou de eleição. | art. 47, §1º | artigo |
| PE-144 | procesp.js:115 | Valor da causa: avaliação. | art. 292, IV | artigo |
| PE-145 | procesp.js:115 | Defesa: prazo comum de 15 dias; depois comum. | arts. 577, 578 e 589 | prazo |
| PE-146 | procesp.js:115 | Apelação contra homologação da divisão/demarcação sem efeito suspensivo. | art. 1.012, §1º, I | recurso |
| PE-147 | procesp.js:116 | 1ª fase (arts. 576 a 582; 588 a 596); 2ª fase (arts. 582 a 586; 596 e 597); encerramento (arts. 586, 587 e 597, §2º). | arts. citados | artigo |
| PE-148 | procesp.js:118 | Quiz: divisão com posse basta? → Não, título de domínio. | art. 588 | gabarito |
| PE-149 | procesp.js:118 | Quiz: cumuladas, primeiro → demarcação. | art. 570 | gabarito |
| PE-150 | procesp.js:118 | Quiz: eleger foro para demarcação? → Não. | art. 47, §1º | gabarito |

### Módulo `dissolucao` — Dissolução parcial de sociedade

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-151 | procesp2.js:4 | Dissolução parcial: arts. 599 a 609. | arts. 599 a 609 | artigo |
| PE-152 | procesp2.js:6 | Objeto: resolução quanto ao sócio falecido, excluído, retirante ou dissidente; apuração de haveres; ou só uma; inicial com contrato social consolidado. | art. 599 | requisito |
| PE-153 | procesp2.js:6 | S.A. fechada: acionistas com 5% ou mais demonstrando que não pode preencher seu fim; STJ exige vínculo pessoal. | art. 599, §2º | requisito |
| PE-154 | procesp2.js:6 | Legitimados: espólio; sucessores após partilha; sociedade; retirante após 10 dias; excluído. | art. 600 | prazo |
| PE-155 | procesp2.js:6 | Ex-cônjuge apura haveres à conta da quota do sócio. | art. 600, parágrafo único | artigo |
| PE-156 | procesp2.js:6 | Citação de sócios e sociedade para concordar ou contestar em 15 dias; citados todos os sócios, sociedade dispensada mas sujeita à coisa julgada. | art. 601 | prazo |
| PE-157 | procesp2.js:6 | Concordância unânime: sem honorários; custas rateadas. | art. 603 | artigo |
| PE-158 | procesp2.js:8 | Juiz fixa data, critério e nomeia perito especialista. | arts. 604 e 606, parágrafo único | artigo |
| PE-159 | procesp2.js:8 | Depósito do incontroverso; ex-sócio levanta. | art. 604, §§1º e 2º | artigo |
| PE-160 | procesp2.js:8 | Critério na omissão: balanço de determinação, ativo tangível e intangível e passivo a preço de saída. | art. 606 | artigo |
| PE-161 | procesp2.js:8 | Revisão de data e critério até o início da perícia. | art. 607 | prazo |
| PE-162 | procesp2.js:8 | Até a resolução: lucros, juros sobre capital e pró-labore; depois, correção e juros. | art. 608 | artigo |
| PE-163 | procesp2.js:8 | Pagamento: conforme contrato; no silêncio, em dinheiro em 90 dias. | art. 609; CC, art. 1.031, §2º | prazo |
| PE-164 | procesp2.js:9 | REsp 1.731.464/SP (2018): citados todos os sócios, desnecessária a citação da sociedade. | STJ; art. 601, parágrafo único | súmula-jurisprudência |
| PE-165 | procesp2.js:9 | AgInt no AREsp 1.861.293/RS (2021): dissolução parcial de S.A. fechada com vínculo pessoal (quebra de affectio). | STJ | súmula-jurisprudência |
| PE-166 | procesp2.js:9 | REsp 1.410.686/SP (2015): valor da causa na parcial = capital do sócio afastado; total = valor do contrato. | STJ | súmula-jurisprudência |
| PE-167 | procesp2.js:10 | Quiz: retirada imotivada → 60º dia após a notificação. | art. 605, II | gabarito |
| PE-168 | procesp2.js:10 | Quiz: todos concordam, há honorários? → Não. | art. 603, §1º | gabarito |
| PE-169 | procesp2.js:10 | Quiz: lucros após a resolução? → Não, só correção e juros. | art. 608, parágrafo único | gabarito |

### Módulo `inventario` — Inventário e partilha

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-170 | procesp2.js:13 | Inventário sem partilha: inventário negativo e herdeiro único (adjudicação). | não cita | conceito |
| PE-171 | procesp2.js:16 | Com testamento aberto/registrado/cumprido e todos capazes e concordes: extrajudicial possível pelas normas do CNJ. | Res. CNJ 35/2007, alterada pela Res. 571/2024 | artigo |
| PE-172 | procesp2.js:16 | Com testamento, sem capacidade/acordo: judicial. | CPC, art. 610 | artigo |
| PE-173 | procesp2.js:16 | Testamento não aberto: ação de abertura, registro e cumprimento. | arts. 735 a 737 | artigo |
| PE-174 | procesp2.js:16 | Sem testamento, capazes e concordes: escritura pública, com advogado ou defensor; serve para registro e bancos; tabelião de livre escolha. | art. 610, §§1º e 2º | requisito |
| PE-175 | procesp2.js:16 | Com incapaz e partilha em partes ideais iguais: art. 610 manda judicial, mas normas do CNJ e Circular CGJ-SC 52/2023 admitem escritura. | art. 610; Circular CGJ-SC 52/2023 | artigo |
| PE-176 | procesp2.js:16 | Disposição que possa prejudicar incapaz exige juiz. | não cita | requisito |
| PE-177 | procesp2.js:17 | Ordem de inventariante I a VIII (cônjuge/companheiro que convivia; herdeiro na posse; qualquer herdeiro; herdeiro menor por representante; testamenteiro; cessionário; inventariante judicial; estranho idôneo). | art. 617 | artigo |
| PE-178 | procesp2.js:18 | Requerimento por quem está na posse e administração, com certidão de óbito; outros interessados também. | arts. 615 e 616 | artigo |
| PE-179 | procesp2.js:18 | Compromisso do inventariante em 5 dias. | art. 617, parágrafo único | prazo |
| PE-180 | procesp2.js:18 | Primeiras declarações em 20 dias do compromisso. | art. 620 | prazo |
| PE-181 | procesp2.js:18 | Citações; impugnações em 15 dias. | arts. 626 e 627 | prazo |
| PE-182 | procesp2.js:18 | Avaliação, colação, ITCMD. | arts. 630 a 641 | artigo |
| PE-183 | procesp2.js:18 | Credores pedem pagamento antes da partilha. | art. 642 | artigo |
| PE-184 | procesp2.js:18 | Sentença de partilha após ITCMD e certidão negativa. | art. 654 | requisito |
| PE-185 | procesp2.js:18 | Formal de partilha substituível por certidão se quinhão até 5 salários mínimos. | art. 655 | prazo |
| PE-186 | procesp2.js:19 | Questões que exigem outras provas (união estável com testemunhas) → vias ordinárias. | art. 612 | artigo |
| PE-187 | procesp2.js:19 | Alienar, transigir, pagar dívidas, despesas: ouvir interessados e autorização judicial. | art. 619 | requisito |
| PE-188 | procesp2.js:19 | Remoção do inventariante. | art. 622 | artigo |
| PE-189 | procesp2.js:19 | Competência: último domicílio do autor da herança no Brasil, também para ações contra o espólio. | art. 48 | artigo |
| PE-190 | procesp2.js:19 | Inventário conjunto. | art. 672 | artigo |
| PE-191 | procesp2.js:19 | Partilha amigável anulável em 1 ano; judicial rescindível. | arts. 657 e 658 | prazo |
| PE-192 | procesp2.js:20 | Multa estadual por atraso não é inconstitucional; em SC, 20% sobre o ITCMD. | Súmula 542 do STF | súmula-jurisprudência |
| PE-193 | procesp2.js:21 | Quiz: prazo para instaurar o inventário → 2 meses; CPC prevalece sobre o CC. | CPC, art. 611; CC, art. 1.796 | gabarito |
| PE-194 | procesp2.js:21 | Quiz: cônjuge separado de fato tem preferência? → Não. | art. 617, I | gabarito |
| PE-195 | procesp2.js:21 | Quiz: união estável dependente de testemunhas → vias ordinárias. | art. 612 | gabarito |
| PE-196 | procesp2.js:21 | Quiz: inventariante vende sozinho? → Não. | art. 619 | gabarito |

### Módulo `arrolamento` — Arrolamento, sobrepartilha e inventário negativo

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-197 | procesp2.js:26 | Sumário: todos capazes e de acordo ou herdeiro único; qualquer valor; dispensa declarações e avaliação; homologa primeiro, fisco lança depois. | arts. 659 a 663 | artigo |
| PE-198 | procesp2.js:26 | Comum: bens até 1.000 salários mínimos; não exige acordo; imposto antes da homologação; com incapaz se partes e MP concordarem. | arts. 664 e 665 | requisito |
| PE-199 | procesp2.js:27 | Sumário: homologa e depois tributa; comum: tributa e depois homologa. | não cita | conceito |
| PE-200 | procesp2.js:28 | Exemplos: 3 maiores de acordo, R$ 5 mi → sumário; briga, 300 SM → comum; briga, 5.000 SM → inventário; herdeiro único maior → sumário. | não cita | conceito |
| PE-201 | procesp2.js:29 | Sobrepartilha: sonegados, descobertos depois, litigiosos/liquidação difícil, lugar remoto; mesmo rito e mesmos autos. | arts. 669 e 670 | artigo |
| PE-202 | procesp2.js:30 | Herdeiro responde até as forças da herança. | CC, art. 1.792 | artigo |
| PE-203 | procesp2.js:30 | Inventário negativo afasta causa suspensiva do casamento do viúvo. | CC, art. 1.523, I | artigo |
| PE-204 | procesp2.js:31 | Quiz: arrolamento comum exige acordo? → Não. | não cita | gabarito |
| PE-205 | procesp2.js:31 | Quiz: sobrepartilha em autos novos? → Não, nos do inventário. | art. 670, parágrafo único | gabarito |

### Módulo `juizados` — Juizados Especiais Cíveis

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-206 | procesp2.js:34 | Juizados: rito oral, gratuito em 1º grau. | CF, art. 98, I; Lei 9.099/95 | artigo |
| PE-207 | procesp2.js:36 | Juizado estadual até 40 SM. | Lei 9.099/95 | prazo |
| PE-208 | procesp2.js:36 | Federal e Fazenda Pública até 60 SM. | Lei 10.259/01; Lei 12.153/09 | prazo |
| PE-209 | procesp2.js:36 | Sem advogado até 20 SM. | Lei 9.099/95 | prazo |
| PE-210 | procesp2.js:36 | Recurso inominado: 10 dias. | Lei 9.099/95 | prazo |
| PE-211 | procesp2.js:37 | Critérios: oralidade, simplicidade, informalidade, economia, celeridade, conciliação. | Lei 9.099/95, art. 2º | artigo |
| PE-212 | procesp2.js:38 | Cabem: até 40 SM; causas do antigo art. 275, II do CPC/1973 (mantidas pelo CPC, art. 1.063); despejo para uso próprio; possessórias de imóveis até 40 SM. | Lei 9.099/95, art. 3º; CPC, art. 1.063 | artigo |
| PE-213 | procesp2.js:38 | Dano moral não é, por si, complexo. | FONAJE 69 | súmula-jurisprudência |
| PE-214 | procesp2.js:38 | Não cabem: alimentar, falimentar, fiscal, Fazenda, acidente de trabalho, resíduos, estado e capacidade. | Lei 9.099/95, art. 3º, §2º | artigo |
| PE-215 | procesp2.js:38 | Procedimentos especiais como monitória não cabem. | FONAJE 8 | súmula-jurisprudência |
| PE-216 | procesp2.js:38 | Complexidade se mede pela prova (perícia complexa). | FONAJE 54 | súmula-jurisprudência |
| PE-217 | procesp2.js:39 | Opção pelo Juizado = renúncia ao excedente de 40 SM, salvo acordo; juiz alerta na abertura. | Lei 9.099/95, art. 3º, §3º e art. 21 | artigo |
| PE-218 | procesp2.js:40 | Não podem ser partes: incapaz, preso, PJ de direito público, empresa pública da União, massa falida, insolvente civil. | Lei 9.099/95, art. 8º | artigo |
| PE-219 | procesp2.js:40 | Podem propor: pessoas físicas capazes; MEI, ME e EPP; OSCIP; sociedades de crédito ao microempreendedor. | Lei 9.099/95, art. 8º, §1º | artigo |
| PE-220 | procesp2.js:40 | Advogado dispensável até 20 SM; obrigatório acima e sempre no recurso. | Lei 9.099/95, arts. 9º e 41 | requisito |
| PE-221 | procesp2.js:40 | Preposto com carta e poderes para transigir, sem vínculo de emprego. | Lei 9.099/95, art. 9º, §4º | requisito |
| PE-222 | procesp2.js:40 | Vedada intervenção de terceiros e assistência; admite litisconsórcio e IDPJ. | CPC, art. 1.062 | artigo |
| PE-223 | procesp2.js:41 | Pedido registrado sem distribuição; sessão de conciliação em 15 dias; pode ocorrer na hora. | Lei 9.099/95, arts. 16 e 17 | prazo |
| PE-224 | procesp2.js:41 | Citação por AR em mão própria, PJ pelo encarregado identificado, oficial sem mandado; sem edital (admitido na execução). | Lei 9.099/95, art. 18; FONAJE 37 | requisito |
| PE-225 | procesp2.js:41 | Conciliação por juiz togado, leigo ou conciliador; acordo homologado é título. | Lei 9.099/95, arts. 21 e 22 | artigo |
| PE-226 | procesp2.js:41 | Defesa oral ou escrita; sem reconvenção; pedido contraposto. | Lei 9.099/95, arts. 30 e 31 | artigo |
| PE-227 | procesp2.js:41 | Até 3 testemunhas por parte, sem intimação; debates não obrigatórios. | Lei 9.099/95, arts. 28 e 34; FONAJE 35 | requisito |
| PE-228 | procesp2.js:41 | Sentença dispensa relatório; vedada condenação ilíquida. | Lei 9.099/95, art. 38 | artigo |
| PE-229 | procesp2.js:41 | Juiz leigo submete ao togado. | Lei 9.099/95, art. 40 | artigo |
| PE-230 | procesp2.js:42 | Autor ausente à conciliação → extinção. | Lei 9.099/95, art. 51, I | artigo |
| PE-231 | procesp2.js:42 | Réu ausente à instrução → revelia, salvo convicção do juiz. | Lei 9.099/95, art. 20 | artigo |
| PE-232 | procesp2.js:43 | Recurso inominado contra sentença, exceto homologatória de acordo ou laudo arbitral. | Lei 9.099/95, art. 41 | recurso |
| PE-233 | procesp2.js:43 | Turma Recursal de 3 juízes togados de 1º grau. | não cita | recurso |
| PE-234 | procesp2.js:43 | Prazo do inominado: 10 dias. | não cita | prazo |
| PE-235 | procesp2.js:43 | Preparo em 48 horas, sem intimação, sob pena de deserção, incluindo custas dispensadas em 1º grau. | Lei 9.099/95, arts. 42, §1º e 54 | prazo |
| PE-236 | procesp2.js:43 | Efeito em regra só devolutivo; suspensivo para evitar dano irreparável. | Lei 9.099/95, art. 43 | recurso |
| PE-237 | procesp2.js:43 | Embargos de declaração: 5 dias, interrompem o prazo. | Lei 9.099/95, arts. 48 a 50 | prazo |
| PE-238 | procesp2.js:43 | Sem custas em 1º grau nem honorários, salvo má-fé. | Lei 9.099/95, arts. 54 e 55 | artigo |
| PE-239 | procesp2.js:43 | Recorrente vencido paga custas e honorários de 10% a 20%. | não cita | artigo |
| PE-240 | procesp2.js:43 | Execução no Juizado; sem devedor/bens, extingue-se e documentos voltam ao autor. | Lei 9.099/95, art. 53, §4º | artigo |
| PE-241 | procesp2.js:44 | Não cabe REsp contra Turma Recursal. | Súmula 203 do STJ | súmula-jurisprudência |
| PE-242 | procesp2.js:44 | Cabe RE contra Turma Recursal. | Súmula 640 do STF | súmula-jurisprudência |
| PE-243 | procesp2.js:45 | Quiz: prazo do inominado → 10 dias. | Lei 9.099/95, art. 42 | gabarito |
| PE-244 | procesp2.js:45 | Quiz: REsp contra Turma Recursal? → Não. | Súmula 203 do STJ | gabarito |
| PE-245 | procesp2.js:45 | Quiz: reconvenção no Juizado? → Não, só pedido contraposto. | Lei 9.099/95, art. 31 | gabarito |
| PE-246 | procesp2.js:45 | Quiz: mudança de endereço não comunicada → intimações no antigo são eficazes. | Lei 9.099/95, art. 19, §2º | gabarito |

### Módulo `curatela` — Tutela, curatela e interdição

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-247 | procesp2.js:50 | Tutela: menoridade; morte, ausência ou perda do poder familiar. | CC, arts. 1.728 a 1.766 | artigo |
| PE-248 | procesp2.js:50 | Curatela: medida extraordinária, proporcional, restrita a atos patrimoniais e negociais. | Lei 13.146/2015, arts. 84 e 85 | artigo |
| PE-249 | procesp2.js:50 | Tomada de decisão apoiada. | CC, art. 1.783-A | artigo |
| PE-250 | procesp2.js:51 | Guarda: poder familiar permanece; tutela: não há poder familiar em exercício. | não cita | conceito |
| PE-251 | procesp2.js:52 | Legitimados à interdição: cônjuge/companheiro, parentes ou tutores, representante da entidade de acolhimento, MP. | art. 747 | artigo |
| PE-252 | procesp2.js:52 | MP só em doença mental grave ou falta dos demais. | art. 748 | requisito |
| PE-253 | procesp2.js:52 | Entrevista pessoal do interditando. | art. 751 | requisito |
| PE-254 | procesp2.js:52 | Impugnação em 15 dias da entrevista. | art. 752 | prazo |
| PE-255 | procesp2.js:52 | Perícia por equipe multidisciplinar. | art. 753 | requisito |
| PE-256 | procesp2.js:52 | Sentença fixa os limites; registrada e publicada. | art. 755 | artigo |
| PE-257 | procesp2.js:52 | Levantamento da curatela. | art. 756 | artigo |
| PE-258 | procesp2.js:53 | Compromisso em 5 dias. | art. 759 | prazo |
| PE-259 | procesp2.js:53 | Escusa em 5 dias. | art. 760 | prazo |
| PE-260 | procesp2.js:53 | Responsabilidade do tutor/curador. | CC, arts. 932, II e 933 | artigo |
| PE-261 | procesp2.js:53 | Apelação contra interdição sem efeito suspensivo. | art. 1.012, §1º, VI | recurso |
| PE-262 | procesp2.js:54 | Quiz: na guarda, pais perdem poder familiar? → Não. | não cita | gabarito |
| PE-263 | procesp2.js:54 | Quiz: juiz deve entrevistar o interditando? → Sim. | art. 751 | gabarito |

### Módulo `alvara` — Alvará judicial

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-264 | procesp2.js:60 | Lei 6.858/80, art. 1º: FGTS, PIS-PASEP e verbas trabalhistas independem de inventário, mesmo havendo outros bens; sem limite de valor. | Lei 6.858/80, art. 1º; CPC, art. 666 | artigo |
| PE-265 | procesp2.js:60 | Primeiro os dependentes habilitados no INSS; na falta, sucessores civis. | Lei 6.858/80, art. 1º | requisito |
| PE-266 | procesp2.js:60 | Art. 2º: restituição de tributos, saldos bancários, poupança e fundos; só sem outros bens; até 500 OTN. | Lei 6.858/80, art. 2º | requisito |
| PE-267 | procesp2.js:61 | Alvará é jurisdição voluntária. | CPC, art. 725, VII | artigo |
| PE-268 | procesp2.js:61 | Custas devidas; em regra sem réu. | não cita | conceito |
| PE-269 | procesp2.js:61 | Justiça Estadual. | Súmula 161 do STJ | súmula-jurisprudência |
| PE-270 | procesp2.js:61 | Foro do domicílio do requerente; relativo; sem declinação de ofício. | não cita | artigo |
| PE-271 | procesp2.js:61 | Inicial: origem/valor, óbito, vínculo, certidões de inexistência de dependentes e de testamento, todos os herdeiros no polo ativo. | não cita | requisito |
| PE-272 | procesp2.js:61 | Quotas de menores em poupança até a maioridade. | Lei 6.858/80, art. 1º, §1º | artigo |
| PE-273 | procesp2.js:63 | TJSC, ApCiv 5001043-74.2020.8.24.0119 (2025): FGTS e PIS por alvará ainda que haja bens a inventariar. | TJSC | súmula-jurisprudência |
| PE-274 | procesp2.js:64 | TJSC, ApCiv 5005492-75.2020.8.24.0022 (2021): alvará para transferir automóvel de pequeno valor à viúva meeira. | TJSC; CPC, art. 723, parágrafo único | súmula-jurisprudência |
| PE-275 | procesp2.js:65 | TJSC, ApCiv 2012.075423-4 (2015): dependentes habilitados excluem demais sucessores; alvará não discute união estável. | TJSC | súmula-jurisprudência |
| PE-276 | procesp2.js:66 | TJSC, CC 5058323-98.2022.8.24.0000 (2023): foro do domicílio dos requerentes; sem declinação de ofício. | TJSC; Súmula 33 do STJ | súmula-jurisprudência |
| PE-277 | procesp2.js:67 | Quiz: FGTS com imóvel a inventariar por alvará? → Sim. | Lei 6.858/80, art. 1º | gabarito |
| PE-278 | procesp2.js:67 | Quiz: poupança acima de 500 OTN por alvará? → Não. | Lei 6.858/80, art. 2º | gabarito |
| PE-279 | procesp2.js:67 | Quiz: alvará prova união estável controvertida? → Não. | não cita | gabarito |

### Módulo `tribunais` — Precedentes e julgamento nos tribunais

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-280 | procesp3.js:4 | Jurisprudência estável, íntegra e coerente. | art. 926 | artigo |
| PE-281 | procesp3.js:7 | Precedentes vinculantes I a V: controle concentrado; súmulas vinculantes; IAC, IRDR e repetitivos; súmulas do STF (constitucional) e STJ (infraconstitucional); orientação do plenário/órgão especial. | art. 927; CF, art. 103-A | artigo |
| PE-282 | procesp3.js:8 | Juiz deve se manifestar sobre precedente ouvindo as partes. | art. 10 | artigo |
| PE-283 | procesp3.js:8 | Distinguishing fundamentado. | art. 489, §1º, VI | artigo |
| PE-284 | procesp3.js:8 | Overruling; modulação de efeitos. | art. 927, §3º | artigo |
| PE-285 | procesp3.js:8 | Omissão sobre tese de repetitivo ou IAC → embargos de declaração. | art. 1.022, parágrafo único, I | recurso |
| PE-286 | procesp3.js:9 | Prevenção do relator para recursos do mesmo processo ou conexo. | art. 930, parágrafo único | artigo |
| PE-287 | procesp3.js:9 | Não conhecer: inadmissível, prejudicado, sem impugnação específica; antes, 5 dias para sanar. | art. 932, III e parágrafo único | prazo |
| PE-288 | procesp3.js:9 | Relator nega provimento contra súmula/repetitivo/IRDR; dá provimento após contrarrazões. | art. 932, IV e V | recurso |
| PE-289 | procesp3.js:9 | Contra monocrática: agravo interno. | não cita | recurso |
| PE-290 | procesp3.js:11 | Pauta com pelo menos 5 dias de antecedência. | art. 935 | prazo |
| PE-291 | procesp3.js:11 | Sustentação oral de 15 minutos, pedida até o início da sessão. | art. 937 | prazo |
| PE-292 | procesp3.js:11 | Preliminares antes do mérito. | art. 938 | artigo |
| PE-293 | procesp3.js:11 | Vencido na preliminar também vota. | art. 939 | artigo |
| PE-294 | procesp3.js:11 | Vista por até 10 dias. | art. 940 | prazo |
| PE-295 | procesp3.js:11 | Voto vencido declarado e integra o acórdão; voto pode mudar até a proclamação. | art. 941 | artigo |
| PE-296 | procesp3.js:11 | Agravo julgado antes da apelação do mesmo processo. | art. 946 | artigo |
| PE-297 | procesp3.js:12 | Julgamento decomposto por fundamento. | não cita | conceito |
| PE-298 | procesp3.js:13 | Ampliação do colegiado: técnica de ofício; substituiu os embargos infringentes. | art. 942 | recurso |
| PE-299 | procesp3.js:13 | Apelação: basta não unanimidade. | art. 942 | recurso |
| PE-300 | procesp3.js:13 | Rescisória: quando o resultado for rescindir. | art. 942 | recurso |
| PE-301 | procesp3.js:13 | Agravo: quando reformar decisão de mérito parcial. | art. 942 | recurso |
| PE-302 | procesp3.js:13 | Não se aplica a IRDR, IAC, remessa necessária e plenário. | art. 942 | recurso |
| PE-303 | procesp3.js:14 | Quiz: súmula do STJ infraconstitucional vincula? → Sim. | art. 927, IV | gabarito |
| PE-304 | procesp3.js:14 | Quiz: ampliação exige reforma da sentença? → Não, basta não ser unânime. | art. 942 | gabarito |
| PE-305 | procesp3.js:14 | Quiz: contra monocrática → agravo interno. | art. 1.021 | gabarito |

### Módulo `teoria-recursos` — Teoria geral dos recursos

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-306 | procesp3.js:19 | Despacho: nenhum recurso. | art. 1.001 | recurso |
| PE-307 | procesp3.js:19 | Interlocutória fora do rol: preliminar de apelação ou contrarrazões. | art. 1.009, §1º | recurso |
| PE-308 | procesp3.js:19 | Decisão que inadmite REsp/RE: agravo em REsp/RE. | art. 1.042 | recurso |
| PE-309 | procesp3.js:19 | Recurso ordinário contra acórdão em competência originária; embargos de divergência; ED contra qualquer decisão. | não cita | recurso |
| PE-310 | procesp3.js:20 | Mandado de segurança e rescisória são ações autônomas. | não cita | conceito |
| PE-311 | procesp3.js:20 | Sem inovação, salvo fato novo, força maior, ordem pública, prescrição. | arts. 493 e 1.014 | artigo |
| PE-312 | procesp3.js:20 | Exceções a quo/ad quem: ED; agravo de instrumento direto no tribunal; REsp/RE com admissibilidade no a quo. | não cita | recurso |
| PE-313 | procesp3.js:20 | Efeito substitutivo; se anula, não substitui. | art. 1.008 | artigo |
| PE-314 | procesp3.js:21 | Taxatividade. | art. 994 | artigo |
| PE-315 | procesp3.js:21 | Singularidade; exceções: ED com outro; REsp e RE contra o mesmo acórdão. | não cita | conceito |
| PE-316 | procesp3.js:21 | Proibição de reformatio in pejus salvo recurso da outra parte ou ordem pública. | não cita | conceito |
| PE-317 | procesp3.js:21 | Dialeticidade. | art. 932, III | artigo |
| PE-318 | procesp3.js:21 | Consumação; complementaridade se ED da outra parte modificar a decisão. | art. 1.024, §4º | artigo |
| PE-319 | procesp3.js:22 | Indeferimento de denunciação e sentença na mesma decisão → um recurso (apelação). | art. 1.009, §3º | recurso |
| PE-320 | procesp3.js:22 | Tutela concedida na sentença → apelação. | art. 1.013, §5º | recurso |
| PE-321 | procesp3.js:23 | Preclusão temporal, lógica, consumativa. | não cita | conceito |
| PE-322 | procesp3.js:24 | Quiz: MS é recurso? → Não. | não cita | gabarito |
| PE-323 | procesp3.js:24 | Quiz: agravo de instrumento interposto → diretamente no tribunal. | art. 1.016 | gabarito |
| PE-324 | procesp3.js:24 | Quiz: apelação que só copia a contestação → não conhecida (dialeticidade). | art. 932, III | gabarito |

### Módulo `admissibilidade` (recursos) — Juízo de admissibilidade

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-325 | procesp3.js:27 | Admissibilidade é matéria de ordem pública. | não cita | conceito |
| PE-326 | procesp3.js:30 | Cabimento. | art. 994 | requisito |
| PE-327 | procesp3.js:30 | Legitimidade: parte vencida, terceiro prejudicado, MP; advogado quanto aos honorários; amicus só ED e IRDR. | art. 996 | requisito |
| PE-328 | procesp3.js:30 | Interesse: réu que obteve a extinção pedida não tem; se queria improcedência, tem; acordo homologado, em regra não tem. | não cita | requisito |
| PE-329 | procesp3.js:31 | Tempestividade: 15 dias úteis; embargos 5; dobro para MP, Fazenda, Defensoria. | não cita | prazo |
| PE-330 | procesp3.js:31 | Feriado local comprovado no ato; vício sanável. | art. 1.003, §6º | prazo |
| PE-331 | procesp3.js:31 | ED interrompem o prazo para todos, salvo intempestivos. | art. 1.026 | prazo |
| PE-332 | procesp3.js:31 | Preparo: dispensados MP, Fazenda, gratuidade; ED sem preparo; sem preparo, recolher em dobro em 5 dias; a menor, completar em 5 dias; senão deserção. | art. 1.007, §§2º e 4º | prazo |
| PE-333 | procesp3.js:31 | Regularidade formal; agravo com as peças exigidas. | art. 1.017 | requisito |
| PE-334 | procesp3.js:31 | Renúncia antes de recorrer, sem aceitação. | art. 999 | artigo |
| PE-335 | procesp3.js:31 | Aquiescência expressa ou tácita. | art. 1.000 | artigo |
| PE-336 | procesp3.js:31 | Desistência sem anuência. | art. 998 | artigo |
| PE-337 | procesp3.js:32 | Preparo no primeiro dia útil seguinte se interposto após o expediente bancário; STF com decisões contrárias. | Súmula 484 do STJ | súmula-jurisprudência |
| PE-338 | procesp3.js:33 | Depósito integral sem ressalva → aquiescência tácita, preclusão lógica. | não cita | conceito |
| PE-339 | procesp3.js:34 | Quiz: prazo dos ED → 5 dias. | art. 1.023 | gabarito |
| PE-340 | procesp3.js:34 | Quiz: sem preparo é deserto de imediato? → Não, recolhe em dobro em 5 dias. | art. 1.007, §4º | gabarito |
| PE-341 | procesp3.js:34 | Quiz: desistência depende de anuência? → Não. | art. 998 | gabarito |

### Módulo `efeitos` — Efeitos dos recursos

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-342 | procesp3.js:39 | Devolutivo em todos; suspensivo em regra só na apelação. | não cita | recurso |
| PE-343 | procesp3.js:39 | Suspensivo ativo a pedido. | art. 1.019, I | recurso |
| PE-344 | procesp3.js:39 | Translativo: apelação, agravo, ED, recurso ordinário; não REsp, RE e embargos de divergência. | não cita | recurso |
| PE-345 | procesp3.js:39 | Expansivo objetivo e subjetivo. | art. 1.005 | recurso |
| PE-346 | procesp3.js:39 | Regressivo: agravos; apelação nos arts. 331, 332, §3º e 485, §7º. | arts. 331, 332, §3º, 485, §7º | recurso |
| PE-347 | procesp3.js:40 | Profundidade: sobem todos os fundamentos do capítulo impugnado. | art. 1.013, §§1º e 2º | recurso |
| PE-348 | procesp3.js:41 | Causa madura: sentença terminativa, incongruente, omissão, falta de fundamentação; prescrição/decadência; pode piorar a situação do recorrente. | art. 1.013, §§3º e 4º | recurso |
| PE-349 | procesp3.js:42 | Apelação sem efeito suspensivo: I divisão/demarcação; II alimentos; III embargos do executado extintos/improcedentes; IV instituição de arbitragem; V tutela provisória; VI interdição. | art. 1.012, §1º | recurso |
| PE-350 | procesp3.js:44 | Efeito suspensivo: probabilidade de provimento e risco de dano grave; na apelação, ao tribunal antes da distribuição ou ao relator depois. | art. 995, parágrafo único; art. 1.012, §3º | requisito |
| PE-351 | procesp3.js:44 | Sentença de improcedência revoga a liminar; procedência mantém. | não cita | conceito |
| PE-352 | procesp3.js:44 | REsp e RE exigem prequestionamento. | Súmulas 282 e 356 do STF; 211 do STJ | súmula-jurisprudência |
| PE-353 | procesp3.js:44 | Recurso de litisconsorte aproveita aos outros, salvo interesses distintos/opostos. | art. 1.005 | artigo |
| PE-354 | procesp3.js:45 | Quiz: apelação de alimentos tem suspensivo? → Não. | art. 1.012, §1º, II | gabarito |
| PE-355 | procesp3.js:45 | Quiz: REsp tem efeito translativo? → Não. | não cita | gabarito |
| PE-356 | procesp3.js:45 | Quiz: tribunal julga mérito ao reformar terminativa? → Sim, se madura. | art. 1.013, §3º, I | gabarito |

### Módulo `especies` — Mapa dos recursos em espécie

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-357 | procesp3.js:51 | Apelação 15 dias; juízo de origem não faz admissibilidade; em regra com suspensivo. | art. 1.010, §3º | recurso |
| PE-358 | procesp3.js:51 | Agravo de instrumento 15 dias, direto no tribunal; cabe contra qualquer interlocutória na liquidação, cumprimento, execução e inventário. | art. 1.015, parágrafo único | recurso |
| PE-359 | procesp3.js:51 | Interlocutória fora do rol: preliminar ou contrarrazões; exceção de urgência (Tema 988). | art. 1.009, §1º; STJ, Tema 988 | recurso |
| PE-360 | procesp3.js:52 | Agravo interno 15 dias; multa de 1% a 5% se manifestamente inadmissível ou improcedente por unanimidade. | art. 1.021 | recurso |
| PE-361 | procesp3.js:53 | REsp 15 dias ao STJ; prequestionamento; não reexamina prova. | CF, art. 105, III; Súmula 7 do STJ | recurso |
| PE-362 | procesp3.js:53 | RE 15 dias ao STF; repercussão geral. | CF, art. 102, III | recurso |
| PE-363 | procesp3.js:54 | ED 5 dias; mesmo órgão; interrompem; protelatórios: multa de até 2%, até 10% na reiteração. | arts. 1.022 a 1.026 | recurso |
| PE-364 | procesp3.js:55 | Rol do art. 1.015: I tutelas; II mérito; III rejeição da convenção de arbitragem; IV desconsideração; V gratuidade; VI exibição/posse de documento; VII exclusão de litisconsorte; VIII limitação do litisconsórcio; IX intervenção de terceiros; X efeito suspensivo a embargos à execução; XI ônus da prova; XIII outros casos. | art. 1.015 | recurso |
| PE-365 | procesp3.js:56 | Tema 988 (REsp 1.704.520 e 1.696.396): taxatividade mitigada por urgência. | STJ, Tema 988 | súmula-jurisprudência |
| PE-366 | procesp3.js:57 | Nega tutela de urgência → cabe agravo. | art. 1.015, I | recurso |
| PE-367 | procesp3.js:57 | Indefere prova pericial → não cabe agora. | não cita | recurso |
| PE-368 | procesp3.js:57 | Revoga gratuidade → cabe. | art. 1.015, V | recurso |
| PE-369 | procesp3.js:57 | Inverte ônus da prova → cabe. | art. 1.015, XI | recurso |
| PE-370 | procesp3.js:57 | Interlocutória no cumprimento de sentença → cabe. | art. 1.015, parágrafo único | recurso |
| PE-371 | procesp3.js:57 | Rejeita incompetência relativa → não cabe, salvo urgência. | Tema 988 | recurso |
| PE-372 | procesp3.js:58 | 15 dias úteis para todos os recursos e contrarrazões; ED 5 dias úteis; inominado 10 dias. | art. 1.003, §5º | prazo |
| PE-373 | procesp3.js:59 | Quiz: indefere prova testemunhal → preliminar de apelação. | não cita | gabarito |
| PE-374 | procesp3.js:59 | Quiz: acórdão que ofende a Constituição → RE. | CF, art. 102, III | gabarito |
| PE-375 | procesp3.js:59 | Quiz: quem julga ED → o mesmo órgão. | art. 1.024 | gabarito |

### Módulo `casos` — Casos práticos de recursos

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| PE-376 | procesp3.js:65 | Apelação que não ataca o fundamento (prescrição) e inova → não conhecida monocraticamente. | art. 932, III | gabarito |
| PE-377 | procesp3.js:66 | Depósito integral sem ressalva e apelação → não conhece (aquiescência). | art. 1.000 | gabarito |
| PE-378 | procesp3.js:67 | Advogado apela em nome próprio sobre honorários → conhece. | não cita | gabarito |
| PE-379 | procesp3.js:68 | Réu obteve a extinção que pediu e apela pela improcedência → não conhece. | não cita | gabarito |
| PE-380 | procesp3.js:69 | Réu pedia improcedência, extinção de ofício → conhece. | não cita | gabarito |
| PE-381 | procesp3.js:71 | Ação contra a União: apelação ao TRF; divergência sobre lei federal → REsp; acórdão que "declara constitucional a lei federal" → RE. | não cita | recurso |
| PE-382 | procesp3.js:72 | Julgamento decomposto: dois acolhem a compensação, recurso provido. | não cita | conceito |
| PE-383 | procesp3.js:73 | Agravo e sentença superveniente: sem apelação, agravo perde utilidade; com apelação, agravo julgado antes. | art. 946; STJ, REsp 1.750.079/SP | súmula-jurisprudência |
| PE-384 | procesp3.js:74 | Extensão e profundidade (dano material transita; estado de perigo sobe). | art. 1.013, §§1º e 2º | recurso |
| PE-385 | procesp3.js:75 | Complementaridade em 15 dias, nos limites da modificação. | art. 1.024, §4º | prazo |
| PE-386 | procesp3.js:76 | Artigos-chave: 539, 550 (15 dias), 558, 674, 700, 610 (judicial com testamento ou incapaz), 927, 942, 1.012, 1.015. | arts. citados | artigo |
| PE-387 | procesp3.js:77 | Quiz: acórdão de TRF com interpretação divergente de lei federal → REsp. | CF, art. 105, III, c | gabarito |
| PE-388 | procesp3.js:77 | Quiz: ED modificaram a sentença após apelação → pode complementar em 15 dias. | art. 1.024, §4º | gabarito |
| PE-389 | procesp3.js:77 | Quiz: depósito integral sem ressalva → preclusão lógica. | não cita | gabarito |

---

## Calculadoras (engine.js)

| ID | Arquivo:linha | Afirmação | Base legal citada | Tipo |
|---|---|---|---|---|
| CALC-001 | engine.js:64 | Feriados nacionais considerados: 1/1, 21/4, 1/5, 7/9, 12/10, 2/11, 15/11, 20/11, 25/12 e Sexta-feira Santa. | não cita | prazo |
| CALC-002 | engine.js:66 | Dias não úteis: sábados, domingos, feriados acima e 20/12 a 20/1. | não cita | prazo |
| CALC-003 | engine.js:68 | Opções: 15 dias (contestação, apelação, agravo); 5 dias (ED, emenda no 303); dobro para Fazenda (183), MP (180), Defensoria (186), litisconsortes com advogados distintos em autos físicos (229). | arts. 180, 183, 186, 229 | prazo |
| CALC-004 | engine.js:74 | Contagem a partir do primeiro dia útil seguinte à data informada; feriados locais e suspensões do tribunal não entram. | não cita | prazo |
| CALC-005 | engine.js:79-83 | Valor da causa: alimentos 12×; vincendas 12 se indeterminado ou >1 ano; cumulados soma; alternativos maior; subsidiário o principal "ainda que o subsidiário seja maior". | art. 292 | artigo |
| CALC-006 | engine.js:84 | Até 40 salários mínimos cabe opção pelo Juizado. | Lei 9.099/95, art. 3º | prazo |
| CALC-007 | engine.js:86 | Honorários contra a Fazenda: cálculo escalonado, cada faixa com percentual próprio e soma. | art. 85, §§3º e 5º | artigo |
| CALC-008 | engine.js:87 | Faixas: até 200 SM 10–20%; 200–2.000 8–10%; 2.000–20.000 5–8%; 20.000–100.000 3–5%; acima de 100.000 1–3%. | art. 85, §3º | artigo |
| CALC-009 | engine.js:95 | Limite de ano e dia calculado como data do fato + 1 ano + 1 dia. | não cita | prazo |
| CALC-010 | engine.js:97 | Força nova: rito especial, liminar sem prova de perigo. | arts. 560 a 566; 561 e 562 | artigo |
| CALC-011 | engine.js:97 | Força velha: comum; liminar só como urgência; coletivo: mediação em até 30 dias. | arts. 558, parágrafo único; 300; 565 | prazo |
| CALC-012 | engine.js:102 | Data da resolução: I óbito. | art. 605, I | artigo |
| CALC-013 | engine.js:102 | II retirada imotivada: 60º dia após a notificação. | art. 605, II | prazo |
| CALC-014 | engine.js:102 | III recesso: dia em que a sociedade recebe a notificação do dissidente. | art. 605, III | prazo |
| CALC-015 | engine.js:102 | IV trânsito em julgado da decisão que dissolver; V data da assembleia ou reunião da exclusão extrajudicial. | art. 605, IV e V | artigo |
| CALC-016 | engine.js:103 | Até a data: lucros, juros sobre capital e pró-labore; depois, correção e juros. | art. 608 | artigo |
| CALC-017 | engine.js:108 | Abertura da sucessão transmite os bens aos herdeiros. | CC, art. 1.784 | artigo |
| CALC-018 | engine.js:108 | Prazo de 30 dias do CC superado pelo CPC. | CC, art. 1.796 | prazo |
| CALC-019 | engine.js:108 | Instaurar o inventário em 2 meses. | CPC, art. 611 | prazo |
| CALC-020 | engine.js:108 | Concluir em 12 meses seguintes, prorrogáveis; multa estadual (SC 20%) válida. | CPC, art. 611; Súmula 542 do STF | prazo |
| CALC-021 | engine.js:113 | FGTS/PIS: independe de inventário e de outros bens, sem limite; dependentes habilitados em quotas iguais; menor em poupança. | Lei 6.858/80, art. 1º; CPC, art. 666 | artigo |
| CALC-022 | engine.js:114-116 | Saldos até 500 OTN sem outros bens: alvará; com outros bens, em regra inventário (juiz pode flexibilizar, art. 723, parágrafo único); acima de 500 OTN, inventário ou arrolamento. | Lei 6.858/80, art. 2º; CPC, art. 723, parágrafo único | requisito |
