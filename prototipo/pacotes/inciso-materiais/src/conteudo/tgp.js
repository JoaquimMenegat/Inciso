window.COURSE={id:`tgp`,title:`Teoria Geral do Processo`,kicker:`Matéria I`,h1a:`Teoria geral`,h1b:`do processo`,
intro:`Jurisdição, ação e processo, do princípio ao fim do processo: competência, sujeitos, terceiros, prazos, nulidades e custos. Cada módulo tem simuladores e termina com um teste.`,
seal:{ring:`JURISDIÇÃO • AÇÃO • PROCESSO • LEI 13.105/2015 • `,word:`Processo`,sub:`inércia e impulso`},
footer:`JurInterativo — Teoria Geral do Processo. Conteúdo escrito a partir do Código de Processo Civil (Lei 13.105/2015), da Constituição Federal e da legislação citada. Material em revisão jurídica: confira sempre o texto vigente.`,
mods:[
/* ================= I ================= */
{id:`fundamentos`,group:`Fundamentos`,title:`Jurisdição, ação e processo`,
intro:`Toda a teoria geral se apoia em três institutos. Nenhum existe sem os outros: a jurisdição precisa ser provocada pela ação, e a ação só chega a um resultado por meio do processo.`,
blocks:[
{t:`svg`,h:`A tríade estrutural`,hint:`Um pressupõe o outro. Role até aqui e veja o triângulo se formar.`,html:`<svg viewBox="0 0 700 380" role="img" aria-label="Triângulo com jurisdição, ação e processo nos vértices">
<path class="draw" d="M350,50 L600,320 L100,320 Z" fill="none" stroke="var(--brass)" stroke-width="3"/>
<g class="pop" style="transition-delay:.5s"><circle cx="350" cy="50" r="40" fill="var(--seal)"/><text x="350" y="56" text-anchor="middle" fill="#fff" font-size="15" font-weight="700">Jurisdição</text></g>
<g class="pop" style="transition-delay:.8s"><circle cx="100" cy="320" r="40" fill="var(--ink)"/><text x="100" y="326" text-anchor="middle" fill="var(--paper)" font-size="15" font-weight="700">Ação</text></g>
<g class="pop" style="transition-delay:1.1s"><circle cx="600" cy="320" r="40" fill="var(--sage)"/><text x="600" y="326" text-anchor="middle" fill="#fff" font-size="15" font-weight="700">Processo</text></g>
<text class="pop" style="transition-delay:1.3s" x="205" y="170" text-anchor="middle" fill="var(--muted)" font-size="13">provoca</text>
<text class="pop" style="transition-delay:1.4s" x="495" y="170" text-anchor="middle" fill="var(--muted)" font-size="13">se exerce por</text>
<text class="pop" style="transition-delay:1.5s" x="350" y="345" text-anchor="middle" fill="var(--muted)" font-size="13">instaura e movimenta</text></svg>`},
{t:`flips`,h:`Cada instituto em uma frase`,items:[
[`Jurisdição`,`Do latim <em>juris dictio</em>, "dizer o direito". Função do Estado de resolver conflitos aplicando a lei. É una: exercida por juízes e tribunais em todo o país (${a(`CPC, art. 16`)}).`],
[`Ação`,`Direito público, subjetivo, <em>autônomo e abstrato</em> de provocar a jurisdição. Existe mesmo que o autor não tenha razão: perder a causa não significa que não havia direito de ação.`],
[`Processo`,`De <em>pro-cedere</em>, "caminhar para frente". Sequência ordenada de atos, presidida pelo juiz, que só é legítima se respeitar o <em>devido processo legal</em>.`],
[`Lide`,`Conflito de interesses qualificado por uma pretensão resistida. É o que a jurisdição contenciosa resolve.`]]},
{t:`callout`,kind:`brass`,title:`Por que a ação é dirigida ao Estado`,html:`<p>No dia a dia se diz "vou entrar com uma ação contra fulano". Tecnicamente, a ação é um pedido ao Estado-juiz; o réu é quem suporta os efeitos do que o juiz decidir. A Lei 13.105/2015 é o Código de Processo Civil que organiza todo esse caminho.</p>`},
{t:`table`,h:`Os sujeitos e seus nomes`,hint:`O nome muda conforme o tipo de processo.`,head:[`Sujeito`,`No processo civil`,`Na execução`,`No processo penal`],rows:[
[`Autor`,`Requerente`,`Exequente`,`Ministério Público (autor da ação penal pública, por denúncia) ou querelante`],
[`Réu`,`Requerido`,`Executado`,`Denunciado (no inquérito, indiciado)`],
[`Juiz`,`Magistrado; "juízo" é o órgão`,`Juízo da execução`,`Juízo criminal`]]},
{t:`svg`,h:`Como a Justiça está dividida`,html:`<svg viewBox="0 0 760 330" role="img" aria-label="Organograma: justiça comum (estadual e federal) e especial (trabalho, eleitoral, militar)">
<g class="pop"><rect x="300" y="10" width="160" height="44" fill="var(--ink)"/><text x="380" y="38" text-anchor="middle" fill="var(--paper)" font-size="15" font-weight="700">Poder Judiciário</text></g>
<path class="draw" d="M380,54 V80 H190 V105 M380,80 H570 V105" fill="none" stroke="var(--line)" stroke-width="2"/>
<g class="pop" style="transition-delay:.4s"><rect x="110" y="105" width="160" height="40" fill="var(--seal)"/><text x="190" y="131" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">Justiça comum</text></g>
<g class="pop" style="transition-delay:.5s"><rect x="490" y="105" width="160" height="40" fill="var(--brass)"/><text x="570" y="131" text-anchor="middle" fill="#1B2540" font-size="14" font-weight="700">Justiça especial</text></g>
<path class="draw" d="M190,145 V170 H95 V190 M190,170 H285 V190 M570,145 V170 H460 V190 M570,170 V190 M570,170 H680 V190" fill="none" stroke="var(--line)" stroke-width="2"/>
<g class="pop" style="transition-delay:.8s"><rect x="25" y="190" width="140" height="56" fill="none" stroke="var(--seal)" stroke-width="2"/><text x="95" y="213" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700">Estadual</text><text x="95" y="233" text-anchor="middle" fill="var(--muted)" font-size="11">residual · juízes e TJ</text></g>
<g class="pop" style="transition-delay:.9s"><rect x="215" y="190" width="140" height="56" fill="none" stroke="var(--seal)" stroke-width="2"/><text x="285" y="213" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700">Federal</text><text x="285" y="233" text-anchor="middle" fill="var(--muted)" font-size="11">União · juízes e TRF</text></g>
<g class="pop" style="transition-delay:1s"><rect x="400" y="190" width="120" height="56" fill="none" stroke="var(--brass)" stroke-width="2"/><text x="460" y="223" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700">Trabalho</text></g>
<g class="pop" style="transition-delay:1.1s"><rect x="525" y="190" width="90" height="56" fill="none" stroke="var(--brass)" stroke-width="2"/><text x="570" y="223" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700">Eleitoral</text></g>
<g class="pop" style="transition-delay:1.2s"><rect x="620" y="190" width="120" height="56" fill="none" stroke="var(--brass)" stroke-width="2"/><text x="680" y="223" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700">Militar</text></g>
<text class="pop" style="transition-delay:1.4s" x="380" y="300" text-anchor="middle" fill="var(--muted)" font-size="13">Órgão singular: um juiz decide · Órgão colegiado: turma ou câmara decide em conjunto</text></svg>`},
{t:`sorter`,h:`Qual justiça julga?`,bins:[`Estadual`,`Federal`,`Trabalho`,`Eleitoral`],cards:[
[`Ação de cobrança entre dois vizinhos.`,0,`Competência residual: tudo o que não é das justiças especiais nem da Federal fica na Estadual.`],
[`Ação em que a União é ré.`,1,`${a(`CF, art. 109, I`)}: causas de interesse da União, autarquias e empresas públicas federais.`],
[`Empregado cobra horas extras do empregador.`,2,`Relação de trabalho: ${a(`CF, art. 114`)}.`],
[`Impugnação ao registro de candidatura.`,3,`Matéria eleitoral, organizada pela Justiça Eleitoral.`]]}],
quiz:[
[`A ação é considerada abstrata porque:`,[`só existe se o autor tiver razão`,`existe independentemente do resultado do processo`,`depende de autorização do juiz`],1,`O direito de ação não se confunde com o direito material discutido: quem perde a causa também exerceu ação.`],
[`Qual é a justiça de competência residual?`,[`Federal`,`Estadual`,`do Trabalho`],1,`A Justiça Estadual julga tudo o que não estiver atribuído às demais.`],
[`Na execução, o réu é chamado de:`,[`requerido`,`executado`,`denunciado`],1,`Na execução, autor é exequente e réu é executado.`]]},

/* ================= II ================= */
{id:`jurisdicao`,group:`Fundamentos`,title:`Características e princípios da jurisdição`,
intro:`A jurisdição tem traços que a distinguem de qualquer outra atividade do Estado, e princípios que limitam quem pode exercê-la e como.`,
blocks:[
{t:`flips`,h:`As três características`,items:[
[`Inércia`,`O Judiciário não age por conta própria: <em>depende de provocação</em> (${a(`CPC, art. 2º`)}). Iniciado, o processo anda por impulso oficial.`],
[`Substitutividade`,`O Estado proíbe a justiça pelas próprias mãos e <em>substitui a vontade das partes</em> pela sua, aplicando a lei ao caso.`],
[`Definitividade`,`Só a decisão judicial pode se tornar <em>imutável pela coisa julgada</em> (${a(`CPC, art. 502`)}), dando segurança jurídica.`]]},
{t:`table`,h:`Os princípios inerentes à jurisdição`,head:[`Princípio`,`O que garante`,`Fonte`],rows:[
[`Investidura`,`Só exerce jurisdição quem foi regularmente investido no cargo, por concurso de provas e títulos`,`${a(`CF, art. 37, II`)} e 93, I`],
[`Territorialidade`,`O juiz atua nos limites territoriais fixados em lei (aderência ao território)`,`Leis de organização judiciária`],
[`Indeclinabilidade`,`O juiz não pode se recusar a julgar, nem alegando lacuna da lei`,`${a(`CPC, art. 140`)}`],
[`Indelegabilidade`,`O poder de decidir não pode ser transferido a particulares ou a outro órgão`,`Decorre do juiz natural`],
[`Inafastabilidade`,`Nenhuma lesão ou ameaça a direito fica fora do Judiciário`,`${a(`CF, art. 5º, XXXV`)}; ${a(`CPC, art. 3º`)}`],
[`Juiz natural`,`Ninguém escolhe o juiz nem é julgado por tribunal de exceção`,`${a(`CF, art. 5º, XXXVII e LIII`)}`]]},
{t:`vs`,h:`Voluntária × contenciosa`,l:{t:`Jurisdição voluntária`,i:[`Sem lide: não há conflito entre as partes`,`Caráter administrativo: o juiz fiscaliza e homologa (corrente clássica; parte da doutrina vê natureza jurisdicional)`,`Fala-se em interessados, não em partes`,`Exemplos: alvará, autorização de viagem de menor, divórcio consensual judicial`,`${a(`CPC, arts. 719 a 770`)}`]},r:{t:`Jurisdição contenciosa`,i:[`Há lide, com interesses opostos`,`O juiz decide o conflito com sentença de mérito`,`Forma coisa julgada material`,`Exemplos: cobrança, despejo, divórcio litigioso`,`Regra geral do CPC`]}},
{t:`chooser`,h:`Quem resolve o conflito?`,hint:`Do mais primitivo ao mais institucional.`,items:[
[`Autotutela`,`As próprias partes, pela força`,`<p>Em regra proibida; pode ser crime de exercício arbitrário das próprias razões (${a(`CP, art. 345`)}). Exceções: legítima defesa e desforço imediato da posse (${a(`CC, art. 1.210, §1º`)}).</p>`],
[`Autocomposição`,`As próprias partes, por acordo`,`<p>Transação, renúncia ou submissão. O Estado deve promovê-la sempre que possível (${a(`CPC, art. 3º, §§2º e 3º`)}).</p>`],
[`Conciliação`,`Terceiro que sugere soluções`,`<p>Indicada quando as partes não tinham vínculo anterior, como numa batida de carro entre desconhecidos (${a(`CPC, art. 165, §2º`)}).</p>`],
[`Mediação`,`Terceiro que reaproxima as partes`,`<p>O mediador ajuda a restabelecer o diálogo; as partes constroem a solução. Indicada quando há vínculo anterior, como entre sócios ou familiares (${a(`CPC, art. 165, §3º`)}; Lei 13.140/2015).</p>`],
[`Arbitragem`,`Árbitro escolhido pelas partes`,`<p>Só para direitos patrimoniais disponíveis. A sentença arbitral tem os mesmos efeitos da judicial e, se condenatória, é título executivo (${a(`Lei 9.307/96, arts. 1º e 31`)}).</p>`],
[`Jurisdição`,`Estado-juiz`,`<p>Decide de forma imperativa e definitiva, com aptidão para a coisa julgada.</p>`]]},
{t:`callout`,title:`Fungibilidade recursal`,html:`<p>Um recurso errado pode ser aproveitado como o correto se houver <b>dúvida objetiva</b> sobre qual cabia, <b>ausência de erro grosseiro</b> e interposição <b>no prazo do recurso correto</b>. O CPC prevê casos expressos: embargos de declaração recebidos como agravo interno, depois de intimado o recorrente para complementar as razões em 5 dias (${a(`art. 1.024, §3º`)}), recurso especial remetido ao STF (${a(`art. 1.032`)}) e extraordinário remetido ao STJ (${a(`art. 1.033`)}).</p>`}],
quiz:[
[`Um juiz se recusa a julgar dizendo que não há lei sobre o tema. Que princípio ele viola?`,[`Indelegabilidade`,`Indeclinabilidade`,`Territorialidade`],1,`${a(`CPC, art. 140`)}: o juiz não se exime de decidir alegando lacuna.`],
[`Qual característica explica que o processo só começa com a petição inicial?`,[`Inércia`,`Definitividade`,`Substitutividade`],0,`Sem provocação, não há jurisdição (${a(`CPC, art. 2º`)}).`],
[`Sócios em conflito querem um terceiro que os ajude a retomar o diálogo. Qual método?`,[`Conciliação`,`Mediação`,`Arbitragem`],1,`Havendo vínculo anterior, mediação (${a(`CPC, art. 165, §3º`)}).`],
[`A sentença arbitral condenatória é:`,[`título executivo extrajudicial`,`título executivo judicial`,`mero parecer`],1,`${a(`CPC, art. 515, VII`)} e ${a(`Lei 9.307/96, art. 31`)}.`]]},

/* ================= III ================= */
{id:`principios`,group:`Princípios`,title:`Princípios do processo`,
intro:`Os princípios dão forma a todo o resto. Muitos estão na Constituição e foram repetidos nas normas fundamentais do CPC (arts. 1º a 12).`,
blocks:[
{t:`flips`,h:`Garantias constitucionais`,items:[
[`Devido processo legal`,`Ninguém é privado da liberdade ou dos bens sem processo justo (${a(`CF, art. 5º, LIV`)}). É a cláusula-mãe de onde derivam os demais.`],
[`Contraditório`,`Não se decide contra a parte sem ouvi-la antes (${a(`CPC, art. 9º`)}). Basta a <em>oportunidade</em> de falar. Vedada a decisão surpresa (${a(`art. 10`)}).`],
[`Ampla defesa`,`Defesa com todos os meios e recursos lícitos (${a(`CF, art. 5º, LV`)}). Não há contraditório sem defesa, nem defesa sem contraditório.`],
[`Isonomia`,`Paridade de armas (${a(`CPC, art. 7º`)}). Igualdade material: tratar desigualmente os desiguais, na medida da desigualdade.`],
[`Duração razoável`,`Solução integral do mérito em prazo razoável (${a(`CF, art. 5º, LXXVIII`)}, EC 45/2004; ${a(`CPC, art. 4º`)}).`],
[`Juiz natural e imparcial`,`Juiz previamente competente e sem interesse na causa (${a(`CF, art. 5º, XXXVII e LIII`)}; impedimento e suspeição, ${a(`CPC, arts. 144 e 145`)}).`],
[`Publicidade`,`Atos públicos, salvo segredo de justiça (${a(`CF, arts. 5º, LX, e 93, IX`)}; ${a(`CPC, art. 189`)}).`],
[`Motivação`,`Toda decisão fundamentada, sob pena de nulidade (${a(`CF, art. 93, IX`)}; ${a(`CPC, arts. 11 e 489, §1º`)}).`]]},
{t:`flips`,h:`Princípios do próprio processo`,items:[
[`Inércia e demanda`,`A parte provoca; o juiz fica adstrito ao pedido (${a(`CPC, arts. 2º, 141 e 492`)}). "O direito não socorre aos que dormem."`],
[`Instrumentalidade das formas`,`Ato feito de outro modo é válido se atingiu a finalidade (${a(`CPC, arts. 188 e 277`)}).`],
[`Economia processual`,`Máximo resultado com mínimo de atos: aproveitar atos (${a(`art. 283`)}), reunir ações conexas, admitir reconvenção.`],
[`Eficiência`,`Dever do juiz ao aplicar o ordenamento (${a(`CPC, art. 8º`)}). Corolário do devido processo legal.`],
[`Boa-fé e cooperação`,`Todos agem com lealdade e cooperam para a decisão justa (${a(`CPC, arts. 5º e 6º`)}). Má-fé gera multa (${a(`arts. 80 e 81`)}).`],
[`Duplo grau`,`Revisão por órgão superior. Implícito na CF; expresso na Convenção Americana (art. 8.2.h). Não é absoluto.`]]},
{t:`sorter`,h:`Qual princípio está em jogo?`,bins:[`Contraditório`,`Juiz natural`,`Motivação`,`Instrumentalidade`,`Duração razoável`],cards:[
[`O juiz quer reconhecer prescrição que nenhuma parte alegou, sem ouvi-las antes.`,0,`Vedada a decisão surpresa, mesmo em matéria de ofício (${a(`CPC, art. 10`)}).`],
[`Cria-se um tribunal especial, depois do fato, só para julgar aquele caso.`,1,`Proibido tribunal de exceção (${a(`CF, art. 5º, XXXVII`)}).`],
[`A liminar diz apenas: "presentes os pressupostos legais, defiro".`,2,`Fórmula genérica não é fundamentação (${a(`CPC, art. 489, §1º, III`)}).`],
[`A citação teve vício de forma, mas o réu compareceu e contestou tudo.`,3,`Atingida a finalidade, não se anula (${a(`CPC, art. 239, §1º e 277`)}).`],
[`Processo parado há anos aguardando um despacho de mero expediente.`,4,`${a(`CF, art. 5º, LXXVIII`)}.`]]},
{t:`table`,h:`O que não é fundamentação`,hint:`${a(`CPC, art. 489, §1º`)}. Decisão assim é omissa e desafia embargos de declaração.`,head:[`Inciso`,`Vício`],rows:[
[`I`,`Só reproduzir, indicar ou parafrasear a lei, sem ligar ao caso`],
[`II`,`Usar conceito jurídico indeterminado sem explicar por que incide`],
[`III`,`Invocar motivos que serviriam para qualquer decisão`],
[`IV`,`Não enfrentar argumentos capazes de mudar a conclusão`],
[`V`,`Citar precedente ou súmula sem identificar seus fundamentos determinantes`],
[`VI`,`Deixar de seguir precedente invocado sem demonstrar distinção ou superação`]]},
{t:`vs`,h:`Duplo grau não é o mesmo que recorribilidade`,l:{t:`Recurso sem duplo grau pleno`,i:[`Recurso especial e extraordinário: só discutem direito, não reexaminam provas`,`Embargos de declaração: julgados pelo mesmo órgão`,`Competência originária do STF: cabem só recursos internos (embargos de declaração, agravo interno); não há instância acima para reexaminar`]},r:{t:`Duplo grau sem recurso`,i:[`Remessa necessária: sentença contra a Fazenda sobe ao tribunal mesmo sem apelação (${a(`CPC, art. 496`)})`]}},
{t:`juris`,h:`Na jurisprudência`,items:[
{court:`Corte IDH`,year:`2012`,id:`Caso Mohamed vs. Argentina`,tese:`O condenado tem direito de recorrer da primeira condenação, mesmo quando ela reforma uma absolvição.`,html:`Fundamento: art. 8.2.h da Convenção Americana. O recurso deve permitir revisão ampla, de fato e de direito.`}]},
{t:`callout`,kind:`sage`,title:`Publicidade e segredo de justiça`,html:`<p>Tramitam em segredo (${a(`CPC, art. 189`)}): interesse público ou social; casamento, divórcio, união estável, filiação, alimentos e guarda; dados protegidos pela intimidade; arbitragem com confidencialidade comprovada. Terceiro com interesse jurídico pode pedir certidão do dispositivo da sentença.</p>`}],
quiz:[
[`O contraditório exige que a parte efetivamente se manifeste?`,[`Sim, sempre`,`Não, basta ter tido a oportunidade`,`Só no processo penal`],1,`O que se garante é a oportunidade de participar e influir.`],
[`Pode o juiz decidir com base em fundamento sobre o qual as partes não falaram, se for matéria de ordem pública?`,[`Sim, livremente`,`Não, deve ouvi-las antes`,`Só em segundo grau`],1,`${a(`CPC, art. 10`)}.`],
[`A remessa necessária é exemplo de:`,[`recurso sem duplo grau`,`duplo grau sem recurso`,`fungibilidade`],1,`A sentença sobe ao tribunal por força de lei, sem recurso.`],
[`Prazo em dobro para a Defensoria concretiza qual princípio?`,[`Isonomia material`,`Publicidade`,`Inércia`],0,`Tratar desigualmente os desiguais para equilibrar a disputa.`]]},

/* ================= IV ================= */
{id:`internacional`,group:`Competência`,title:`Limites da jurisdição e cooperação`,
intro:`Antes de saber qual juiz brasileiro julga, é preciso saber se a causa pode ser julgada no Brasil. E, quando um ato precisa ser praticado em outro lugar, entram as cartas.`,
blocks:[
{t:`vs`,h:`Concorrente × exclusiva`,l:{t:`Concorrente (arts. 21 e 22)`,i:[`Réu domiciliado no Brasil`,`Obrigação a ser cumprida aqui`,`Fato ou ato praticado aqui`,`Alimentos com credor domiciliado aqui; relações de consumo com consumidor aqui`,`Ação no estrangeiro não induz litispendência (${a(`art. 24`)})`]},r:{t:`Exclusiva (art. 23)`,i:[`Ações sobre imóveis situados no Brasil`,`Sucessão: confirmar testamento particular, inventário e partilha de bens situados no Brasil`,`Divórcio, separação ou fim da união estável: partilha de bens situados no Brasil`,`Sentença estrangeira sobre isso não é homologada`]}},
{t:`callout`,title:`Atenção a um erro comum`,html:`<p>A competência exclusiva no divórcio não abrange o divórcio em si, apenas a <b>partilha dos bens situados no Brasil</b>. Um casal pode se divorciar no exterior; o que não pode é partilhar lá o apartamento que tem em Florianópolis.</p>`},
{t:`callout`,kind:`brass`,title:`Eleição de foro estrangeiro`,html:`<p>Em contrato internacional, a cláusula de foro exclusivo estrangeiro afasta a jurisdição brasileira se o réu a alegar na contestação (${a(`CPC, art. 25`)}), salvo nos casos de competência exclusiva.</p>`},
{t:`table`,h:`As cartas`,head:[`Carta`,`De quem para quem`,`Exemplo`],rows:[
[`Precatória`,`Entre juízos nacionais de comarcas diferentes`,`Ouvir testemunha que mora em outra cidade`],
[`Rogatória`,`De juízo brasileiro para autoridade estrangeira, ou o inverso`,`Citar réu que mora em Portugal; depende de exequatur do STJ quando vem de fora (${a(`CF, art. 105, I, i`)})`],
[`De ordem`,`De tribunal para juízo a ele vinculado`,`TJ manda o juiz colher prova`],
[`Arbitral`,`Do árbitro para o Judiciário`,`Cumprir medida decretada na arbitragem (${a(`CPC, art. 237, IV`)})`]]},
{t:`steps`,h:`Homologação de decisão estrangeira`,items:[
[`Decisão proferida no exterior`,`Sentença ou sentença arbitral estrangeira depende de homologação pelo STJ; decisão interlocutória estrangeira cumpre-se por carta rogatória, com exequatur (art. 960, §1º).`,`CPC, art. 960`],
[`Pedido ao STJ`,`A competência é do Superior Tribunal de Justiça.`,`CF, art. 105, I, i`],
[`Requisitos`,`Autoridade competente, citação regular, eficácia no país de origem, não ofender coisa julgada brasileira nem a ordem pública, tradução oficial.`,`CPC, art. 963`],
[`Exceção`,`Sentença estrangeira de divórcio consensual produz efeitos no Brasil sem homologação.`,`CPC, art. 961, §5º`]]}],
quiz:[
[`Inventário de bens situados no Brasil de quem morreu na Itália:`,[`pode ser feito na Itália e homologado`,`é de competência exclusiva brasileira`,`depende de tratado`],1,`${a(`CPC, art. 23, II`)}.`],
[`Para ouvir testemunha em outra comarca, expede-se carta:`,[`rogatória`,`precatória`,`de ordem`],1,`Comunicação entre juízos nacionais.`],
[`Quem homologa sentença estrangeira?`,[`STF`,`STJ`,`TJ do Estado`],1,`${a(`CF, art. 105, I, i`)}.`]]},

/* ================= V ================= */
{id:`competencia`,group:`Competência`,title:`Competência absoluta e relativa`,
intro:`Competência é a medida da jurisdição: diz qual órgão, entre todos os que têm jurisdição, deve julgar aquela causa. A diferença entre absoluta e relativa decide quem pode alegar, quando e o que acontece se ninguém alegar.`,
blocks:[
{t:`vs`,h:`Os critérios`,l:{t:`Absoluta`,i:[`Matéria (família, falência, trabalho)`,`Pessoa (União na Justiça Federal)`,`Função ou hierarquia (recursos, competência originária)`,`Interesse público: não se altera`]},r:{t:`Relativa`,i:[`Território (domicílio do réu, ${a(`art. 46`)})`,`Valor da causa`,`Interesse das partes: pode ser alterada`,`Exceção: território absoluto em imóveis e possessórias (${a(`art. 47`)})`]}},
{t:`chooser`,h:`O regime na prática`,items:[
[`Quem alega?`,`Absoluta: qualquer um, o juiz de ofício. Relativa: só o réu.`,`<p><b>Absoluta</b>: em qualquer tempo e grau, e o juiz declara de ofício (${a(`CPC, art. 64, §1º`)}). <b>Relativa</b>: o réu, em preliminar de contestação; o MP pode alegar nas causas em que atua (${a(`art. 65, parágrafo único`)}). O juiz não a reconhece de ofício (${a(`Súmula 33 do STJ`)}), salvo a cláusula de eleição abusiva antes da citação (${a(`art. 63, §3º`)}) e a ação proposta em juízo aleatório (${a(`art. 63, §5º`)}).</p>`],
[`E se ninguém alegar?`,`Absoluta: o vício permanece. Relativa: prorroga.`,`<p>A incompetência absoluta pode fundamentar ação rescisória (${a(`art. 966, II`)}). A relativa se prorroga e o juízo passa a ser competente (${a(`art. 65`)}).</p>`],
[`As partes podem mudar?`,`Só a relativa.`,`<p>A absoluta é inderrogável por convenção (${a(`art. 62`)}). A relativa pode ser modificada por eleição de foro, em instrumento escrito, ligada a um negócio determinado e com pertinência com o domicílio ou a residência de uma das partes ou com o local da obrigação; em contrato de consumo, vale a cláusula favorável ao consumidor (${a(`art. 63, §1º`)}, redação da Lei 14.879/2024).</p>`],
[`Efeito da declaração`,`Remessa ao juízo competente.`,`<p>Declarada a incompetência, os autos vão ao juízo competente, e as decisões do incompetente conservam efeitos até outra decisão (${a(`art. 64, §§3º e 4º`)}).</p>`]]},
{t:`sorter`,h:`Absoluta ou relativa?`,bins:[`Absoluta`,`Relativa`],cards:[
[`Ação de família proposta na vara cível, existindo vara de família na comarca.`,0,`Critério de matéria.`],
[`Cobrança proposta fora do domicílio do réu.`,1,`Critério territorial (${a(`art. 46`)}).`],
[`União é ré, e a ação corre na Justiça Estadual.`,0,`Critério de pessoa (${a(`CF, art. 109, I`)}).`],
[`Ação possessória sobre imóvel proposta fora do foro do imóvel.`,0,`Exceção territorial absoluta (${a(`CPC, art. 47, §2º`)}).`],
[`Contrato com foro de eleição em Joaçaba; ação proposta em Chapecó.`,1,`Eleição de foro é critério territorial.`]]},
{t:`callout`,kind:`brass`,title:`Cláusula de eleição abusiva`,html:`<p>Antes da citação, o juiz pode reputar ineficaz, de ofício, a cláusula de foro abusiva e remeter os autos ao foro do domicílio do réu (${a(`art. 63, §3º`)}). Citado, cabe ao réu alegar na contestação, sob pena de preclusão (§4º). E se a ação for proposta em juízo aleatório, sem vínculo com o domicílio ou a residência das partes nem com o negócio, o juiz pode declinar de ofício (§5º, incluído pela Lei 14.879/2024).</p>`},
{t:`keys`,h:`Números que caem em prova`,items:[[`40`,`salários mínimos`,`teto do Juizado Especial Cível estadual (Lei 9.099/95, art. 3º)`],[`60`,`salários mínimos`,`teto dos Juizados Federais e da Fazenda Pública`],[`33`,`Súmula do STJ`,`incompetência relativa não se declara de ofício (exceções: art. 63, §§3º e 5º)`]]}],
quiz:[
[`O juiz pode declarar de ofício a incompetência territorial?`,[`Sim`,`Não, salvo cláusula abusiva antes da citação ou ação em juízo aleatório`,`Só em segundo grau`],1,`${a(`Súmula 33 do STJ`)}; exceções no ${a(`CPC, art. 63, §§3º e 5º`)} (Lei 14.879/2024).`],
[`O réu não alegou incompetência relativa. Consequência?`,[`Nulidade`,`Prorrogação`,`Extinção`],1,`${a(`CPC, art. 65`)}.`],
[`Competência em razão da matéria é:`,[`relativa`,`absoluta`,`depende do valor`],1,`Critério de interesse público.`]]},

/* ================= VI ================= */
{id:`modificacao`,group:`Competência`,title:`Modificação e conflito de competência`,
intro:`Só a competência relativa se modifica. Os caminhos são a vontade das partes (derrogação), a inércia do réu (prorrogação) e a ligação entre ações (conexão e continência).`,
blocks:[
{t:`tl`,h:`Quatro formas de modificar`,items:[
[`Derrogação`,`Antes do processo: as partes elegem, no contrato, foro ligado ao domicílio de uma delas ou ao local da obrigação (${a(`art. 63, §1º`)}). Vincula herdeiros e sucessores (§2º).`],
[`Prorrogação`,`No processo: o réu não alega a incompetência relativa (${a(`art. 65`)}).`],
[`Conexão`,`Duas ações com o mesmo pedido ou a mesma causa de pedir são reunidas (${a(`art. 55`)}).`],
[`Continência`,`Mesmas partes e causa de pedir, e o pedido de uma abrange o da outra (${a(`art. 56`)}).`]]},
{t:`svg`,h:`Conexão e continência em imagem`,html:`<svg viewBox="0 0 720 260" role="img" aria-label="Conexão: dois círculos que se tocam; continência: um círculo dentro do outro">
<text x="180" y="24" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">Conexão</text>
<circle class="draw" cx="140" cy="135" r="80" fill="none" stroke="var(--seal)" stroke-width="3"/><circle class="draw" cx="230" cy="135" r="80" fill="none" stroke="var(--brass)" stroke-width="3"/>
<text class="pop" x="105" y="140" font-size="13" fill="var(--ink)">Ação A</text><text class="pop" x="245" y="140" font-size="13" fill="var(--ink)">Ação B</text>
<text class="pop" style="transition-delay:.8s" x="185" y="245" text-anchor="middle" font-size="12" fill="var(--muted)">mesmo pedido ou mesma causa de pedir</text>
<text x="530" y="24" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">Continência</text>
<circle class="draw" cx="530" cy="135" r="95" fill="none" stroke="var(--seal)" stroke-width="3"/><circle class="draw" cx="555" cy="150" r="45" fill="none" stroke="var(--sage)" stroke-width="3"/>
<text class="pop" x="460" y="105" font-size="13" fill="var(--ink)">continente</text><text class="pop" x="530" y="155" font-size="12" fill="var(--ink)">contida</text>
<text class="pop" style="transition-delay:.8s" x="530" y="255" text-anchor="middle" font-size="12" fill="var(--muted)">mesmas partes e causa de pedir; um pedido abrange o outro</text></svg>`},
{t:`table`,h:`O que acontece com as ações`,head:[`Situação`,`Consequência`,`Base`],rows:[
[`Conexão`,`Reunião para decisão conjunta no juízo prevento, salvo se uma já foi sentenciada`,`${a(`art. 55, §1º`)}; ${a(`Súmula 235 do STJ`)}`],
[`Execução e ação de conhecimento sobre o mesmo ato`,`São consideradas conexas`,`${a(`art. 55, §2º`)}`],
[`Risco de decisões conflitantes, mesmo sem conexão`,`Reunião`,`${a(`art. 55, §3º`)}`],
[`Continência, com a continente proposta antes`,`A contida é extinta sem mérito`,`${a(`art. 57`)}`],
[`Continência, com a contida proposta antes`,`Reunião das ações`,`${a(`art. 57`)}`],
[`Juízo prevento`,`O do registro ou distribuição da primeira ação`,`${a(`arts. 58 e 59`)}`]]},
{t:`sorter`,h:`Conexão, continência ou nada?`,bins:[`Conexão`,`Continência`,`Nenhuma`],cards:[
[`A: despejo por falta de pagamento. B: consignação dos mesmos aluguéis.`,0,`Causa de pedir comum: o mesmo contrato e o mesmo débito.`],
[`A: anular o contrato inteiro. B: anular só a cláusula 5ª. Mesmas partes e causa de pedir.`,1,`O pedido de A abrange o de B.`],
[`A: cobrança de aluguel entre Maria e João. B: divórcio de Pedro e Ana.`,2,`Nada em comum.`],
[`A: execução de nota promissória. B: ação para anular a mesma nota.`,0,`${a(`art. 55, §2º, I`)}.`]]},
{t:`chooser`,h:`Conflito de competência`,hint:`${a(`CPC, art. 66 e arts. 951 a 959`)}.`,items:[
[`Positivo`,`Dois ou mais juízes se dizem competentes`,`<p>${a(`art. 66, I`)}. O relator pode sobrestar o processo e designar um juiz para medidas urgentes (${a(`art. 955`)}).</p>`],
[`Negativo`,`Dois ou mais juízes se dizem incompetentes`,`<p>${a(`art. 66, II`)}. Quem não acolher a competência declinada deve suscitar o conflito, salvo se atribuí-la a outro juízo (${a(`art. 66, parágrafo único`)}).</p>`],
[`Sobre reunião`,`Divergência sobre reunir ou separar processos`,`<p>${a(`art. 66, III`)}.</p>`],
[`Quem suscita`,`Partes, MP ou juiz`,`<p>O juiz por ofício; partes e MP por petição (${a(`arts. 951 e 953`)}). Não pode suscitar a parte que arguiu incompetência relativa (${a(`art. 952`)}).</p>`],
[`Quem julga`,`O tribunal com ascendência sobre ambos`,`<p>Entre juízes do mesmo TJ, o TJ; entre juízes vinculados a tribunais diversos, o STJ (${a(`CF, art. 105, I, d`)}). O relator julga de plano se houver súmula ou tese repetitiva (${a(`art. 955, parágrafo único`)}).</p>`]]}],
quiz:[
[`Ação continente proposta depois da contida. O que ocorre?`,[`Extinção da contida`,`Reunião`,`Suspensão da continente`],1,`${a(`CPC, art. 57`)}: se a contida veio antes, reúnem-se.`],
[`Um processo já foi sentenciado. Cabe reunião por conexão?`,[`Sim`,`Não`],1,`${a(`art. 55, §1º`)} e ${a(`Súmula 235 do STJ`)}.`],
[`Dois juízes se declaram incompetentes. Que conflito é?`,[`Positivo`,`Negativo`],1,`${a(`art. 66, II`)}.`]]},

/* ================= VII ================= */
{id:`capacidade`,group:`Sujeitos e terceiros`,title:`Capacidade, representação e procuração`,
intro:`Para estar em juízo não basta ser pessoa. São três capacidades diferentes, e cada uma tem seu remédio quando falta.`,
blocks:[
{t:`steps`,h:`As três capacidades`,items:[
[`Capacidade de ser parte`,`Ter personalidade jurídica, ou ser ente despersonalizado a quem a lei dá essa aptidão (espólio, massa falida, condomínio).`,`CPC, art. 75`],
[`Capacidade de estar em juízo`,`Estar no exercício dos próprios direitos (${a(`art. 70`)}). Incapazes são representados ou assistidos.`,`CPC, arts. 70 e 71`],
[`Capacidade postulatória`,`Falar nos autos. Em regra, só o advogado inscrito na OAB (${a(`art. 103`)}). Exceções: Juizado Especial até 20 salários mínimos (${a(`Lei 9.099/95, art. 9º`)}).`,`CPC, art. 103`]]},
{t:`table`,h:`Incapazes no processo`,head:[`Quem`,`Como atua`],rows:[
[`Absolutamente incapaz (menor de 16)`,`Representado pelos pais ou tutor`],
[`Relativamente incapaz (16 a 18, ébrios habituais, pródigos, quem não pode exprimir vontade)`,`Assistido pelos pais, tutor ou curador`],
[`Incapaz sem representante ou com interesses colidentes`,`Curador especial (${a(`art. 72, I`)})`],
[`Réu preso revel, ou citado por edital ou hora certa e revel`,`Curador especial, função da Defensoria (${a(`art. 72, II e parágrafo único`)})`]]},
{t:`flips`,h:`A procuração`,items:[
[`Regra`,`O advogado não postula sem procuração (${a(`art. 104`)}).`],
[`Exceção`,`Para evitar preclusão, decadência ou prescrição, ou praticar ato urgente. Deve exibir a procuração em <em>15 dias, prorrogáveis por mais 15</em>.`],
[`Ato não ratificado`,`É <em>ineficaz</em> em relação à parte, e o advogado responde por despesas e perdas e danos (${a(`art. 104, §2º`)}).`],
[`Poderes especiais`,`Receber citação, confessar, reconhecer a procedência, transigir, desistir, renunciar, dar quitação, firmar compromisso e declarar hipossuficiência exigem cláusula específica (${a(`art. 105`)}).`],
[`Fim do mandato`,`Revogação ou renúncia; morte ou interdição; mudança de estado; fim do prazo ou do negócio (${a(`CC, art. 682`)}).`]]}],
quiz:[
[`Espólio pode ser parte?`,[`Não, não tem personalidade`,`Sim, a lei lhe dá capacidade de ser parte`],1,`${a(`CPC, art. 75, VII`)}.`],
[`Advogado sem procuração pode agir para evitar a prescrição?`,[`Não`,`Sim, apresentando-a em 15 dias prorrogáveis`],1,`${a(`CPC, art. 104, §1º`)}.`],
[`Réu citado por edital e revel recebe:`,[`curador especial`,`nada, segue revel`,`tutor`],0,`${a(`CPC, art. 72, II`)}.`]]},

/* ================= VIII ================= */
{id:`litisconsorcio`,group:`Sujeitos e terceiros`,title:`Litisconsórcio`,
intro:`Litisconsórcio é a pluralidade de partes num mesmo polo. Serve à economia processual e à coerência das decisões.`,
blocks:[
{t:`callout`,kind:`brass`,title:`Quando é possível (art. 113)`,html:`<p>Duas ou mais pessoas litigam juntas quando houver <b>comunhão</b> de direitos ou obrigações; <b>conexão</b> pelo pedido ou causa de pedir; ou <b>afinidade</b> de questões por ponto comum de fato ou de direito.</p>`},
{t:`table`,h:`As classificações`,head:[`Critério`,`Espécies`,`O que define`],rows:[
[`Obrigatoriedade`,`Necessário × facultativo`,`Necessário quando a lei exige ou a relação só pode ser decidida com todos (${a(`art. 114`)})`],
[`Resultado`,`Unitário × simples`,`Unitário quando o mérito tem de ser igual para todos (${a(`art. 116`)})`],
[`Posição`,`Ativo, passivo ou misto`,`Vários autores, vários réus, ou ambos`],
[`Momento`,`Inicial × ulterior`,`Desde a inicial ou formado depois`]]},
{t:`chooser`,h:`Faltou um litisconsorte necessário`,hint:`${a(`CPC, art. 115`)}.`,items:[
[`Unitário`,`Sentença nula`,`<p>Se o litisconsórcio era necessário e unitário, a sentença proferida sem um deles é <b>nula</b> para todos.</p>`],
[`Simples`,`Sentença ineficaz para o ausente`,`<p>Se era necessário mas simples, a sentença é <b>ineficaz</b> apenas para quem não foi citado.</p>`],
[`Remédio`,`Juiz manda citar`,`<p>O juiz determina ao autor que requeira a citação de todos, em prazo que fixar, sob pena de extinção (${a(`art. 115, parágrafo único`)}).</p>`]]},
{t:`flips`,h:`Regras de convivência`,items:[
[`Autonomia`,`Litisconsortes são litigantes distintos: os atos de um não prejudicam nem beneficiam os outros, <em>salvo no unitário</em> (${a(`art. 117`)}).`],
[`Multitudinário`,`O juiz pode limitar o facultativo quando o número de partes atrapalhar a defesa ou a rapidez (${a(`art. 113, §1º`)}). O pedido de limitação interrompe o prazo de resposta (§2º).`],
[`Prazo em dobro`,`Com procuradores diferentes, de escritórios distintos, em <em>autos físicos</em> (${a(`art. 229`)}). Cessa se, de dois réus, só um se defende.`]]},
{t:`sorter`,h:`Classifique`,bins:[`Necessário e unitário`,`Facultativo e simples`,`Facultativo e unitário`],cards:[
[`Ação para anular casamento proposta pelo MP contra os dois cônjuges.`,0,`A relação é incindível e a lei exige os dois.`],
[`Vários passageiros do mesmo voo cancelado pedem indenização juntos.`,1,`Podiam processar separadamente; cada um recebe sua indenização.`],
[`Dois condôminos, em conjunto, reivindicam o imóvel comum.`,2,`Cada um poderia agir sozinho (${a(`CC, art. 1.314`)}), mas a decisão sobre a coisa é uma só.`]]}],
quiz:[
[`Sentença sem litisconsorte necessário unitário é:`,[`válida`,`nula`,`ineficaz só para o ausente`],1,`${a(`CPC, art. 115, I`)}.`],
[`Prazo em dobro do art. 229 vale em autos eletrônicos?`,[`Sim`,`Não`],1,`${a(`art. 229, §2º`)}.`],
[`O juiz pode limitar o litisconsórcio necessário?`,[`Sim`,`Não, só o facultativo`],1,`${a(`art. 113, §1º`)}.`]]}
]};
