COURSE.mods.push(
/* ================= IX ================= */
{id:`terceiros`,group:`Sujeitos e terceiros`,title:`Intervenção de terceiros`,
intro:`Terceiro é quem não é parte, mas tem razão jurídica para entrar no processo. O CPC prevê cinco figuras (arts. 119 a 138).`,
blocks:[
{t:`table`,h:`As cinco figuras`,head:[`Figura`,`Quem provoca`,`Para quê`,`Artigos`],rows:[
[`Assistência`,`O próprio terceiro`,`Ajudar uma parte a vencer, por ter interesse jurídico no resultado`,`119 a 124`],
[`Denunciação da lide`,`Autor ou réu`,`Trazer quem deve indenizar em regresso`,`125 a 129`],
[`Chamamento ao processo`,`Só o réu`,`Trazer os coobrigados solidários`,`130 a 132`],
[`Desconsideração da personalidade`,`Parte ou MP`,`Alcançar bens de sócios ou da empresa`,`133 a 137`],
[`Amicus curiae`,`O juiz, de ofício ou a pedido`,`Contribuir tecnicamente em tema relevante`,`138`]]},
{t:`vs`,h:`Assistência simples × litisconsorcial`,l:{t:`Simples (arts. 121 a 123)`,i:[`O assistente tem relação jurídica com o assistido que pode ser afetada pela sentença`,`Atua como auxiliar; não pode contrariar o assistido`,`Se o assistido for revel, o assistente atua como seu substituto processual`,`Não impede desistência ou acordo do assistido`]},r:{t:`Litisconsorcial (art. 124)`,i:[`A sentença influirá na relação entre o assistente e o adversário do assistido`,`É tratado como litisconsorte do assistido`,`Exemplo: condômino que ingressa na ação reivindicatória movida por outro condômino`]}},
{t:`callout`,title:`Efeito da intervenção (art. 123)`,html:`<p>Transitada a sentença, o assistente não pode discutir a justiça da decisão em outro processo, salvo se provar que foi impedido de produzir provas pelo estado em que recebeu o processo, ou que o assistido, por dolo ou culpa, deixou de usar alegações ou provas que ele desconhecia.</p>`},
{t:`sorter`,h:`Que intervenção é essa?`,bins:[`Assistência`,`Denunciação`,`Chamamento`,`Desconsideração`,`Amicus curiae`],cards:[
[`O fiador, réu na cobrança, quer trazer o devedor principal.`,2,`${a(`CPC, art. 130, I`)}.`],
[`O réu de uma ação por acidente quer que sua seguradora o reembolse ali mesmo.`,1,`Regresso por contrato (${a(`art. 125, II`)}).`],
[`O sublocatário quer ajudar o locatário a vencer a ação de despejo.`,0,`Interesse jurídico no resultado (${a(`art. 119`)}).`],
[`O credor quer alcançar os bens dos sócios de empresa esvaziada.`,3,`Incidente dos ${a(`arts. 133 a 137`)}.`],
[`Uma entidade científica quer opinar num processo sobre tema de grande repercussão.`,4,`${a(`art. 138`)}.`],
[`Comprador evicto quer trazer quem lhe vendeu o imóvel.`,1,`${a(`art. 125, I`)}: evicção.`]]},
{t:`flips`,h:`Detalhes que decidem questões`,items:[
[`Denunciação não é obrigatória`,`Se não for feita ou for indeferida, o direito de regresso pode ser exercido em ação autônoma (${a(`art. 125, §1º`)}). Só se admite uma denunciação sucessiva (§2º).`],
[`Seguradora condenada direto`,`Se aceitar a denunciação ou contestar o pedido, pode ser condenada direta e solidariamente com o segurado, nos limites da apólice (${a(`Súmula 537 do STJ`)}).`],
[`Chamamento gera título`,`A sentença vale como título para quem pagar cobrar do devedor principal ou dos demais a quota de cada um (${a(`art. 132`)}).`],
[`Desconsideração`,`Cabe em qualquer fase; suspende o processo, salvo se pedida na inicial; o sócio é citado e tem 15 dias. Pode ser inversa. Decide-se por interlocutória agravável (${a(`art. 1.015, IV`)}).`],
[`Amicus curiae`,`Decisão de admissão é irrecorrível. Não altera a competência. Só recorre por embargos de declaração e no IRDR (${a(`art. 138, §§1º e 3º`)}).`]]},
{t:`juris`,h:`Súmula aplicável`,items:[{court:`STJ`,year:`Súm. 537`,id:`Súmula 537 do STJ`,tese:`Na denunciação da lide, a seguradora pode ser condenada direta e solidariamente com o segurado, nos limites da apólice.`}]}],
quiz:[
[`O chamamento ao processo pode ser feito pelo autor?`,[`Sim`,`Não, só pelo réu`],1,`${a(`CPC, art. 130`)}.`],
[`A denunciação da lide é obrigatória para preservar o direito de regresso?`,[`Sim`,`Não`],1,`${a(`art. 125, §1º`)}.`],
[`Do que o amicus curiae pode recorrer?`,[`De qualquer decisão`,`Só embargos de declaração e decisão do IRDR`,`De nada`],1,`${a(`art. 138, §§1º e 3º`)}.`]]},

/* ================= X ================= */
{id:`sujeitos`,group:`Sujeitos e terceiros`,title:`Juiz, MP, Advocacia Pública e Defensoria`,
intro:`Além das partes, o processo tem sujeitos com funções próprias: quem julga e quem desempenha funções essenciais à justiça.`,
blocks:[
{t:`p`,h:`Poderes e deveres do juiz`,html:`<p>O juiz dirige o processo (${a(`CPC, art. 139`)}) e deve, entre outras coisas: assegurar igualdade; velar pela duração razoável; prevenir atos contrários à dignidade da justiça; determinar medidas indutivas, coercitivas, mandamentais ou sub-rogatórias; promover a autocomposição; <b>dilatar prazos e alterar a ordem das provas</b>; mandar suprir pressupostos processuais; e oficiar o MP e a Defensoria para ações coletivas. Não pode deixar de decidir por lacuna (${a(`art. 140`)}) e responde por perdas e danos se agir com dolo ou fraude (${a(`art. 143`)}).</p>`},
{t:`vs`,h:`Impedimento × suspeição`,l:{t:`Impedimento (art. 144)`,i:[`Critério objetivo: basta o fato`,`Atuou como advogado, perito, MP ou testemunha`,`Já decidiu a causa em outro grau`,`Ele, cônjuge ou parente até o 3º grau é parte ou advogado (se já atuava antes)`,`Sócio ou diretor de pessoa jurídica parte; herdeiro, donatário ou empregador de parte`,`Gera nulidade e permite ação rescisória (${a(`art. 966, II`)})`]},r:{t:`Suspeição (art. 145)`,i:[`Critério subjetivo: risco à imparcialidade`,`Amigo íntimo ou inimigo da parte ou do advogado`,`Recebeu presentes, aconselhou a parte ou custeou o litígio`,`Parte é credora ou devedora dele ou de parentes`,`Interessado no julgamento; foro íntimo, sem declarar razões`,`Não autoriza rescisória`]}},
{t:`callout`,kind:`brass`,title:`Suspeição provocada não vale`,html:`<p>É ilegítima a alegação de suspeição provocada por quem a alega ou feita por quem já praticou ato de aceitação do juiz (${a(`art. 145, §2º`)}). Ofender o juiz para depois chamá-lo de inimigo não funciona. A arguição se faz em 15 dias do conhecimento do fato (${a(`art. 146`)}) e o relator do incidente declara se o processo fica suspenso (${a(`art. 146, §2º`)}; ${a(`art. 313, III`)}).</p>`},
{t:`table`,h:`As funções essenciais à justiça no processo civil`,head:[``,`Ministério Público`,`Advocacia Pública`,`Defensoria Pública`],rows:[
[`Missão`,`Ordem jurídica, regime democrático, interesses sociais e individuais indisponíveis (${a(`CF, art. 127`)})`,`Representar e defender União, Estados, DF, Municípios, autarquias e fundações públicas`,`Orientação jurídica, direitos humanos e defesa dos necessitados`],
[`Como atua`,`Parte ou fiscal da ordem jurídica (${a(`CPC, arts. 177 e 178`)})`,`Representação judicial, consultoria e assessoria`,`Parte ou curadora especial; pode propor ação civil pública`],
[`Prazo`,`Em dobro (${a(`art. 180`)})`,`Em dobro (${a(`art. 183`)})`,`Em dobro, inclusive núcleos de prática jurídica conveniados (${a(`art. 186`)})`],
[`Intimação`,`Pessoal: carga, remessa ou meio eletrônico`,`Pessoal`,`Pessoal; pode pedir intimação pessoal do assistido`],
[`Responsabilidade`,`Regressiva por dolo ou fraude (${a(`art. 181`)})`,`Regressiva por dolo ou fraude (${a(`art. 184`)})`,`Regressiva por dolo ou fraude (${a(`art. 187`)})`]]},
{t:`chooser`,h:`Quando o MP intervém como fiscal`,hint:`${a(`CPC, art. 178`)}. Intimado, tem vista depois das partes e é intimado de todos os atos (art. 179).`,items:[
[`Interesse público ou social`,`Intervém`,`<p>Inciso I.</p>`],[`Interesse de incapaz`,`Intervém`,`<p>Inciso II. Sem a intimação, o processo é nulo a partir de quando deveria intervir (${a(`art. 279`)}).</p>`],[`Litígio coletivo pela posse de terra`,`Intervém`,`<p>Inciso III, rural ou urbana.</p>`],[`Fazenda Pública é parte`,`Por si só, não`,`<p>A participação da Fazenda não configura, sozinha, interesse público (${a(`art. 178, parágrafo único`)}).</p>`]]},
{t:`callout`,kind:`sage`,title:`Prazo próprio afasta o dobro`,html:`<p>O prazo em dobro não se aplica quando a lei fixa prazo específico para o ente público (${a(`arts. 180, §2º, 183, §2º e 186, §4º`)}). Empresas públicas e sociedades de economia mista não têm a prerrogativa: são pessoas de direito privado. Exceção: os Correios (ECT) têm os privilégios processuais da Fazenda por lei especial (DL 509/69, art. 12).</p>`}],
quiz:[
[`Juiz que é amigo íntimo do advogado da parte é:`,[`impedido`,`suspeito`],1,`${a(`CPC, art. 145, I`)}.`],
[`Cabe ação rescisória por suspeição?`,[`Sim`,`Não`],1,`Só o impedimento autoriza (${a(`art. 966, II`)}).`],
[`A presença da Fazenda Pública obriga a intervenção do MP?`,[`Sim`,`Não, por si só`],1,`${a(`art. 178, parágrafo único`)}.`],
[`Empresa pública tem prazo em dobro?`,[`Sim`,`Não`],1,`Só pessoas jurídicas de direito público.`]]},

/* ================= XI ================= */
{id:`atos`,group:`Atos, prazos e nulidades`,title:`Atos processuais e pronunciamentos`,
intro:`O processo é feito de atos: das partes, do juiz e dos auxiliares. Cada um tem forma, tempo e lugar.`,
blocks:[
{t:`flips`,h:`Atos das partes`,items:[
[`Efeito imediato`,`Os atos das partes produzem efeitos desde logo (${a(`CPC, art. 200`)}).`],
[`A exceção da desistência`,`A desistência da ação só produz efeitos depois de <em>homologada</em> (${a(`art. 200, parágrafo único`)}; ${a(`art. 485, VIII`)}). Após a contestação, depende de consentimento do réu (${a(`art. 485, §4º`)}), e só cabe até a sentença (§5º).`],
[`Unilaterais e bilaterais`,`Petição inicial e contestação são unilaterais; transação e negócio processual são bilaterais.`],
[`Sem rabiscos`,`São vedadas cotas marginais ou interlineares nos autos (${a(`art. 202`)}).`]]},
{t:`callout`,kind:`brass`,title:`Negócio jurídico processual (art. 190)`,html:`<p>Em causas que admitem autocomposição, partes plenamente capazes podem ajustar o procedimento e convencionar sobre ônus, poderes, faculdades e deveres, antes ou durante o processo. O juiz controla a validade e recusa a convenção nula, abusiva em contrato de adesão ou que explore vulnerabilidade. Exemplo típico: o <b>calendário processual</b> (${a(`art. 191`)}), fixado pelo juiz e pelas partes, que vincula todos e dispensa intimações.</p>`},
{t:`table`,h:`Pronunciamentos do juiz`,head:[`Pronunciamento`,`Conceito`,`Recurso`],rows:[
[`Sentença`,`Põe fim à fase de conhecimento ou extingue a execução, com fundamento nos arts. 485 ou 487 (${a(`art. 203, §1º`)})`,`Apelação`],
[`Decisão interlocutória`,`Todo pronunciamento decisório que não é sentença (${a(`art. 203, §2º`)})`,`Agravo de instrumento, se no rol do art. 1.015; senão, preliminar de apelação`],
[`Despacho`,`Sem conteúdo decisório, só impulsiona (${a(`art. 203, §3º`)})`,`Irrecorrível (${a(`art. 1.001`)})`],
[`Ato ordinatório`,`Praticado pelo servidor, como juntada e vista obrigatória (${a(`art. 203, §4º`)})`,`Revisável pelo juiz`],
[`Decisão monocrática`,`Do relator, sozinho, no tribunal`,`Agravo interno`],
[`Acórdão`,`Julgamento colegiado do tribunal (${a(`art. 204`)})`,`REsp, RE, recurso ordinário, embargos`]]},
{t:`sorter`,h:`Que pronunciamento é esse?`,bins:[`Despacho`,`Interlocutória`,`Sentença`],cards:[
[`"Intime-se o autor para se manifestar sobre os documentos."`,0,`Só impulsiona o processo.`],
[`"Indefiro o pedido de gratuidade da justiça."`,1,`Decide, sem encerrar a fase.`],
[`"Julgo procedente o pedido e condeno o réu..."`,2,`Encerra a fase de conhecimento com base no art. 487.`],
[`"Defiro a tutela de urgência."`,1,`Decisão no curso do processo.`]]},
{t:`keys`,h:`Tempo e lugar dos atos`,items:[[`6h–20h`,`horário dos atos`,`em dias úteis (${a(`art. 212`)}); ato iniciado pode ser concluído se o adiamento causar dano`],[`24h`,`processo eletrônico`,`até as 24 horas do último dia (${a(`art. 213`)})`],[`20/12–20/1`,`recesso`,`prazos suspensos (${a(`art. 220`)})`]]},
{t:`p`,html:`<p><b>Mesmo nas férias e feriados</b> se praticam citações, intimações e penhoras (${a(`art. 212, §2º`)}), tutelas de urgência (${a(`art. 214`)}), e tramitam jurisdição voluntária, alimentos e nomeação ou remoção de tutor e curador (${a(`art. 215`)}).</p><p><b>Lugar:</b> em regra, na sede do juízo. Exceções: deferência a autoridades (como ouvir o Presidente da República onde ele indicar, ${a(`art. 454`)}), interesse da justiça, natureza do ato ou obstáculo criado por quem quer impedi-lo (${a(`art. 217`)}).</p>`}],
quiz:[
[`Despacho que manda intimar a parte admite recurso?`,[`Agravo`,`Não, é irrecorrível`],1,`${a(`CPC, art. 1.001`)}.`],
[`Depois da contestação, o autor pode desistir sozinho?`,[`Sim`,`Não, depende do consentimento do réu`],1,`${a(`art. 485, §4º`)}.`],
[`Penhora pode ser feita durante as férias forenses?`,[`Não`,`Sim`],1,`${a(`art. 212, §2º`)}.`]]},

/* ================= XII ================= */
{id:`prazos`,group:`Atos, prazos e nulidades`,title:`Prazos processuais`,
intro:`Perder um prazo costuma ser irreversível. Por isso vale dominar de onde ele vem, quando começa e como se conta.`,
blocks:[
{t:`steps`,h:`De onde vem o prazo`,items:[
[`Legal`,`Fixado em lei, como os 15 dias da contestação.`,`CPC, art. 218`],
[`Judicial`,`Fixado pelo juiz quando a lei for omissa, considerando a complexidade do ato.`,`art. 218, §1º`],
[`Subsidiário`,`Sem lei nem decisão: 5 dias para a parte.`,`art. 218, §3º`],
[`Comparecimento`,`Intimação para comparecer: pelo menos 48 horas de antecedência.`,`art. 218, §2º`]]},
{t:`calc`,kind:`prazo`,h:`Calcule um prazo de verdade`,hint:`Dias úteis, exclusão do dia do começo, recesso de fim de ano, feriados nacionais e prazo em dobro.`},
{t:`table`,h:`Quando o prazo começa`,hint:`${a(`CPC, art. 231`)}. Depois desse marco, aplica-se a contagem do art. 224.`,head:[`Forma de comunicação`,`Dia do começo`],rows:[
[`Correio`,`Juntada do aviso de recebimento`],
[`Oficial de justiça (inclusive hora certa)`,`Juntada do mandado cumprido`],
[`Escrivão ou chefe de secretaria`,`Data em que ocorreu`],
[`Edital`,`Dia útil seguinte ao fim da dilação fixada pelo juiz`],
[`Intimação eletrônica`,`Dia útil seguinte à consulta ou ao fim do prazo de 10 dias corridos para consultar (Lei 11.419/06, art. 5º, §3º)`],
[`Carta precatória ou rogatória`,`Juntada da comunicação do cumprimento ou da carta cumprida`],
[`Diário da Justiça eletrônico`,`Publicação: considera-se publicado no primeiro dia útil após a disponibilização, e o prazo começa no dia útil seguinte (${a(`art. 224, §§2º e 3º`)})`],
[`Carga dos autos`,`Dia da carga`],
[`Citação eletrônica`,`Quinto dia útil após a confirmação do recebimento (${a(`art. 231, IX`)}). Sem confirmação em 3 dias úteis, a citação é refeita por correio, oficial, escrivão ou edital, e o réu deve justificar a falta na primeira oportunidade, sob pena de multa de até 5% do valor da causa (${a(`art. 246, §§1º-A a 1º-C`)})`]]},
{t:`flips`,h:`Regras de contagem`,items:[
[`Só dias úteis`,`Para prazos processuais em dias (${a(`art. 219`)}). Prazos de direito material, como a prescrição e a decadência, correm em dias corridos. A dilação do edital (20 a 60 dias, art. 257, III) é fixada pelo juiz, e há divergência sobre contá-la em dias úteis.`],
[`Exclui e inclui`,`Exclui o dia do começo e inclui o do vencimento (${a(`art. 224`)}). Protrai se o expediente começar tarde, acabar cedo ou o sistema cair.`],
[`Antes do prazo vale`,`Ato praticado antes do termo inicial é tempestivo (${a(`art. 218, §4º`)}).`],
[`Renúncia`,`A parte pode renunciar ao prazo estabelecido só em seu favor, de forma expressa (${a(`art. 225`)}).`],
[`Justa causa`,`Evento alheio à vontade que impediu o ato permite praticá-lo em prazo fixado pelo juiz (${a(`art. 223`)}).`],
[`Prorrogação`,`Até 2 meses em comarca de difícil transporte; mais em calamidade pública (${a(`art. 222`)}).`]]},
{t:`keys`,h:`Prazos do juiz e do servidor`,hint:`São prazos impróprios: o descumprimento não gera preclusão.`,items:[[`5`,`dias`,`despachos (${a(`art. 226, I`)})`],[`10`,`dias`,`decisões interlocutórias (II)`],[`30`,`dias`,`sentenças (III)`],[`1`,`dia`,`servidor remeter os autos conclusos (${a(`art. 228`)})`]]},
{t:`chooser`,h:`Prazo em dobro`,items:[
[`Ministério Público`,`Dobro`,`<p>${a(`art. 180`)}, contado da intimação pessoal.</p>`],[`Fazenda Pública`,`Dobro`,`<p>${a(`art. 183`)}.</p>`],[`Defensoria e NPJ`,`Dobro`,`<p>${a(`art. 186`)}, inclusive escritórios de prática jurídica de faculdades e entidades conveniadas (§3º).</p>`],[`Litisconsortes`,`Dobro, com ressalvas`,`<p>Procuradores diferentes, de escritórios distintos, em autos físicos (${a(`art. 229`)}). Cessa se, havendo só dois réus, apenas um contestar (§1º).</p>`],[`Lei com prazo próprio`,`Sem dobro`,`<p>Quando a lei fixa prazo específico para o ente.</p>`]]}],
quiz:[
[`Intimação publicada no DJe que foi disponibilizado na segunda-feira. Quando começa o prazo?`,[`Na segunda`,`Na terça`,`Na quarta`],2,`Publicação na terça (primeiro dia útil seguinte) e início na quarta (${a(`art. 224, §§2º e 3º`)}).`],
[`O prazo para o juiz sentenciar é preclusivo?`,[`Sim`,`Não, é impróprio`],1,`${a(`art. 226`)}.`],
[`Sem prazo na lei ou na decisão, a parte tem:`,[`5 dias`,`15 dias`,`48 horas`],0,`${a(`art. 218, §3º`)}.`]]},

/* ================= XIII ================= */
{id:`nulidades`,group:`Atos, prazos e nulidades`,title:`Nulidades processuais`,
intro:`No processo, nenhuma invalidade age sozinha: ela precisa ser decretada pelo juiz. E o sistema prefere aproveitar o ato a anulá-lo.`,
blocks:[
{t:`svg`,h:`Os três planos do ato`,html:`<svg viewBox="0 0 700 220" role="img" aria-label="Escada de três degraus: existência, validade, eficácia">
<path class="draw" d="M40,190 H240 V130 H440 V70 H640" fill="none" stroke="var(--brass)" stroke-width="4"/>
<g class="pop" style="transition-delay:.4s"><text x="140" y="178" text-anchor="middle" font-size="18" fill="var(--ink)" font-weight="700">Existência</text><text x="140" y="210" text-anchor="middle" font-size="12" fill="var(--muted)">o ato existe?</text></g>
<g class="pop" style="transition-delay:.7s"><text x="340" y="118" text-anchor="middle" font-size="18" fill="var(--seal)" font-weight="700">Validade</text><text x="340" y="150" text-anchor="middle" font-size="12" fill="var(--muted)">é aqui que moram as nulidades</text></g>
<g class="pop" style="transition-delay:1s"><text x="540" y="58" text-anchor="middle" font-size="18" fill="var(--ink)" font-weight="700">Eficácia</text><text x="540" y="90" text-anchor="middle" font-size="12" fill="var(--muted)">produz efeitos?</text></g></svg>`},
{t:`table`,h:`Espécies de vício`,head:[`Espécie`,`O que é`,`Como se trata`],rows:[
[`Inexistência`,`Falta elemento essencial (sentença sem dispositivo, processo sem citação)`,`Pode ser reconhecida a qualquer tempo, até por ação própria (querela nullitatis)`],
[`Nulidade absoluta`,`Viola norma de ordem pública`,`De ofício e a qualquer tempo, ouvidas antes as partes (${a(`art. 10`)})`],
[`Nulidade relativa`,`Viola norma dispositiva, de interesse da parte`,`Depende de alegação, na primeira oportunidade`],
[`Mera irregularidade`,`Defeito sem relevância`,`Não invalida nada`]]},
{t:`flips`,h:`As regras do sistema`,items:[
[`Quem causou não alega`,`A parte que deu causa à nulidade não pode pedir sua decretação (${a(`art. 276`)}).`],
[`Finalidade atingida`,`Ato feito de outro modo é válido se alcançou a finalidade (${a(`art. 277`)}).`],
[`Primeira oportunidade`,`Alega-se na primeira vez em que couber falar nos autos, sob pena de preclusão, salvo nulidade de ofício ou impedimento legítimo (${a(`art. 278`)}).`],
[`Sem prejuízo, sem nulidade`,`O ato não se repete se não houver prejuízo à parte (${a(`art. 282, §1º`)}): <em>pas de nullité sans grief</em>.`],
[`Primazia do mérito`,`Se o juiz puder decidir o mérito a favor de quem aproveitaria a nulidade, não a pronuncia (${a(`art. 282, §2º`)}).`],
[`Contaminação`,`Anulado o ato, caem os subsequentes que dele dependam; partes independentes se salvam (${a(`art. 281`)}).`]]},
{t:`callout`,title:`MP não intimado`,html:`<p>Se o MP deveria intervir e não foi intimado, anulam-se os atos a partir de quando deveria ter sido chamado. Mas o juiz só decreta depois de ouvir o MP sobre a existência de prejuízo (${a(`art. 279, §§1º e 2º`)}).</p>`},
{t:`wizard`,h:`Devo anular este ato?`,tree:{q:`O ato tem um vício de forma?`,a:[[`Sim`,{q:`Mesmo assim, ele atingiu a finalidade?`,a:[[`Sim`,{end:`Ato válido`,txt:`Instrumentalidade das formas (${a(`arts. 188 e 277`)}).`}],[`Não`,{q:`Houve prejuízo para alguma parte?`,a:[[`Não`,{end:`Não se anula`,txt:`Sem prejuízo, não há nulidade (${a(`art. 282, §1º`)}).`}],[`Sim`,{q:`O juiz pode julgar o mérito a favor de quem seria beneficiado pela anulação?`,a:[[`Sim`,{end:`Julga o mérito`,txt:`Primazia do mérito (${a(`art. 282, §2º`)}).`}],[`Não`,{q:`Quem alega foi quem deu causa ao vício?`,a:[[`Sim`,{end:`Não pode alegar`,txt:`${a(`art. 276`)}.`}],[`Não`,{end:`Decreta a nulidade`,txt:`O juiz declara os atos atingidos e manda repeti-los ou retificá-los (${a(`art. 282`)}). Os atos dependentes também caem (${a(`art. 281`)}).`}]]}]]}]]}]]}],[`Não`,{end:`Nada a anular`,txt:`Sem vício, segue o processo.`}]]}}],
quiz:[
[`Advogado que causou o vício pode pedir a nulidade?`,[`Sim`,`Não`],1,`${a(`art. 276`)}.`],
[`Nulidade relativa não alegada na primeira oportunidade:`,[`preclui`,`pode ser alegada na apelação`,`é declarada de ofício`],0,`${a(`art. 278`)}.`],
[`Citação com vício, mas o réu contestou tudo. O que se faz?`,[`Anula-se`,`Considera-se suprida`],1,`Comparecimento supre a falta ou nulidade (${a(`art. 239, §1º`)}).`]]},

/* ================= XIV ================= */
{id:`valor`,group:`Custos e ciclo do processo`,title:`Valor da causa`,
intro:`Toda causa tem valor, mesmo sem conteúdo econômico imediato (art. 291). Ele define custas, honorários, competência dos Juizados e até o cabimento de alguns atos.`,
blocks:[
{t:`calc`,kind:`valorcausa`,h:`Simulador do art. 292`,hint:`Escolha o tipo de ação e mude os números.`},
{t:`table`,h:`O art. 292, inciso por inciso`,head:[`Inciso`,`Ação`,`Valor da causa`],rows:[
[`I`,`Cobrança`,`Principal corrigido + juros de mora vencidos + penalidades até a propositura`],
[`II`,`Existência, validade, cumprimento, modificação, resolução, resilição ou rescisão de ato jurídico`,`Valor do ato ou da parte controvertida`],
[`III`,`Alimentos`,`Soma de 12 prestações mensais`],
[`IV`,`Divisão, demarcação e reivindicação`,`Valor de avaliação da área ou do bem`],
[`V`,`Indenização, inclusive dano moral`,`Valor pretendido`],
[`VI`,`Pedidos cumulados`,`Soma de todos`],
[`VII`,`Pedidos alternativos`,`O de maior valor`],
[`VIII`,`Pedido subsidiário`,`O do pedido principal`]]},
{t:`flips`,h:`Ajustes e controle`,items:[
[`Vencidas e vincendas`,`Somam-se as duas (${a(`§1º`)}). Vincendas: uma prestação anual se a obrigação for por prazo indeterminado ou superior a 1 ano; se inferior, a soma das restantes (§2º).`],
[`Correção de ofício`,`O juiz corrige por arbitramento quando o valor não corresponder ao proveito econômico, e manda complementar custas (${a(`§3º`)}).`],
[`Impugnação do réu`,`Em preliminar de contestação, sob pena de preclusão (${a(`arts. 293 e 337, III`)}).`]]}],
quiz:[
[`Ação de alimentos de R$ 800 por mês. Valor da causa?`,[`R$ 800`,`R$ 9.600`,`R$ 4.800`],1,`12 × 800 (${a(`art. 292, III`)}).`],
[`Pedidos alternativos de R$ 20 mil e R$ 35 mil. Valor da causa?`,[`R$ 55 mil`,`R$ 35 mil`,`R$ 20 mil`],1,`O de maior valor (VII).`],
[`O réu discordou do valor só na apelação. Pode?`,[`Sim`,`Não, precluiu`],1,`Deve impugnar na contestação (${a(`art. 293`)}).`]]},

/* ================= XV ================= */
{id:`despesas`,group:`Custos e ciclo do processo`,title:`Despesas e honorários`,
intro:`Quem paga o processo? Durante o caminho, quem pede o ato adianta. No final, quem perdeu, ou quem deu causa, reembolsa.`,
blocks:[
{t:`tl`,h:`O ciclo do dinheiro no processo`,items:[
[`Adiantamento`,`Cada parte antecipa as despesas dos atos que requer; o autor adianta os determinados de ofício ou a pedido do MP fiscal (${a(`art. 82, §1º`)}). Exceção: gratuidade da justiça (${a(`arts. 98 a 102`)}).`],
[`Despesas`,`Custas (taxa paga ao Judiciário), indenização de viagem, remuneração de assistente técnico e diária de testemunha (${a(`art. 84`)}).`],
[`Sentença`,`Condena o vencido a ressarcir o que o vencedor antecipou (${a(`art. 82, §2º`)}) e a pagar honorários (${a(`art. 85`)}).`],
[`Recurso`,`O tribunal majora os honorários pelo trabalho adicional, até os tetos legais (${a(`art. 85, §11`)}).`]]},
{t:`callout`,kind:`brass`,title:`Caução do autor que mora fora (art. 83)`,html:`<p>Autor, brasileiro ou estrangeiro, que reside fora do país ou deixa de residir durante o processo, sem imóveis no Brasil, presta caução para custas e honorários. Dispensada por tratado (como o Protocolo de Las Leñas, Decreto 2.067/1996, e o acordo do Mercosul com Bolívia e Chile, Decreto 6.891/2009), na execução de título extrajudicial, no cumprimento de sentença e na reconvenção.</p>`},
{t:`keys`,h:`Honorários de sucumbência (art. 85)`,items:[[`10–20%`,`regra geral`,`sobre condenação, proveito econômico ou valor atualizado da causa`],[`5%`,`monitória cumprida`,`honorários reduzidos para quem paga no prazo (art. 701)`],[`alimentar`,`natureza`,`vedada a compensação na sucumbência parcial (§14)`]]},
{t:`p`,html:`<p>Para fixar o percentual, o juiz considera o zelo do profissional, o lugar do serviço, a natureza e importância da causa, o trabalho e o tempo exigidos (${a(`art. 85, §2º`)}).</p>`},
{t:`calc`,kind:`honor`,h:`Honorários contra a Fazenda Pública`,hint:`Arraste o valor e veja as faixas se preencherem.`},
{t:`chooser`,h:`Situações especiais`,items:[
[`Equidade`,`Só para valores baixos ou inestimáveis`,`<p>O juiz arbitra por equidade quando o proveito é inestimável ou irrisório ou o valor da causa é muito baixo (${a(`§8º`)}). Nesses casos, observa a tabela da OAB ou o mínimo de 10%, o que for maior (§8º-A). Fora disso, a equidade é proibida (${a(`§6º-A`)}, Lei 14.365/2022; STJ, Tema 1.076). Nas causas com a Fazenda Pública, a questão aguarda o STF (Tema 1.255).</p>`],
[`Perda do objeto`,`Paga quem deu causa`,`<p>Princípio da causalidade (${a(`§10`)}).</p>`],
[`Sucumbência recíproca`,`Divisão proporcional`,`<p>Cada um vencedor e vencido em parte: despesas proporcionais. Se um perdeu parte mínima, o outro paga tudo (${a(`art. 86`)}). Ex.: pediu R$ 50 mil e ganhou R$ 49 mil.</p>`],
[`Litisconsortes vencidos`,`Proporcional, ou solidária se omissa`,`<p>A sentença deve distribuir expressamente; se não o fizer, respondem solidariamente (${a(`art. 87`)}).</p>`],
[`Jurisdição voluntária`,`Rateio`,`<p>O requerente adianta e as despesas são rateadas entre os interessados (${a(`art. 88`)}). Nos juízos divisórios sem litígio, proporcional aos quinhões (${a(`art. 89`)}).</p>`],
[`Sentença omissa`,`Ação autônoma`,`<p>Se a decisão transitada nada disse sobre honorários, cabe ação própria (${a(`§18`)}).</p>`]]},
{t:`juris`,h:`Na jurisprudência`,items:[
{court:`STJ`,year:`Tema 1.076`,id:`REsp 1.850.512, 1.877.883, 1.906.618 e 1.906.623`,tese:`É vedada a fixação de honorários por equidade quando o valor da condenação, do proveito econômico ou da causa for elevado.`,html:`Nesses casos aplicam-se obrigatoriamente os percentuais dos §§ 2º e 3º do art. 85.`},
{court:`STF`,year:`ADI 6.053`,id:`ADI 6.053`,tese:`Advogados públicos podem receber honorários de sucumbência, respeitado o teto remuneratório.`,html:`O §19 do art. 85 é constitucional, mas a soma com o subsídio não pode ultrapassar o teto do art. 37, XI, da Constituição.`}]}],
quiz:[
[`Ação extinta por perda do objeto. Quem paga honorários?`,[`O autor, sempre`,`Quem deu causa ao processo`,`Ninguém`],1,`${a(`art. 85, §10`)}.`],
[`Causa de R$ 50 milhões. O juiz pode fixar honorários por equidade?`,[`Sim`,`Não`],1,`Art. 85, §6º-A, e STJ, Tema 1.076 (entre particulares; com a Fazenda, aguarda-se o STF, Tema 1.255).`],
[`Honorários podem ser compensados na sucumbência parcial?`,[`Sim`,`Não`],1,`${a(`art. 85, §14`)}.`]]},

/* ================= XVI ================= */
{id:`ciclo`,group:`Custos e ciclo do processo`,title:`Formação, suspensão e extinção`,
intro:`O processo nasce com o protocolo, pode parar em situações previstas em lei e termina por sentença. Entre uma coisa e outra, o juiz deve sempre tentar salvar o julgamento de mérito.`,
blocks:[
{t:`vs`,h:`Quando o processo existe`,l:{t:`Para o autor e o juízo`,i:[`Com o protocolo da petição inicial (${a(`art. 312`)})`,`Registro, ou distribuição se houver mais de uma vara`]},r:{t:`Para o réu`,i:[`Só com a citação válida`,`Induz litispendência, torna a coisa litigiosa e constitui o devedor em mora (${a(`art. 240`)})`,`A interrupção da prescrição retroage à propositura, se o autor promover a citação em 10 dias (§§1º e 2º)`]}},
{t:`table`,h:`Causas de suspensão (art. 313)`,head:[`Inciso`,`Causa`,`Prazo ou consequência`],rows:[
[`I`,`Morte ou perda de capacidade da parte, representante ou procurador`,`Réu: citar espólio em 2 a 6 meses. Autor: habilitação, sob pena de extinção. Advogado: novo em 15 dias, sob pena de extinção ou revelia`],
[`II`,`Convenção das partes`,`Máximo de 6 meses`],
[`III`,`Arguição de impedimento ou suspeição`,`Até o julgamento do incidente`],
[`IV`,`Admissão de IRDR`,`Todos os processos sobre a mesma questão`],
[`V`,`Prejudicialidade externa`,`Máximo de 1 ano`],
[`VI`,`Força maior`,`Enquanto durar`],
[`VII`,`Questão do Tribunal Marítimo`,`—`],
[`IX`,`Parto ou adoção da advogada única patrona`,`30 dias`],
[`X`,`Paternidade do advogado único patrono`,`8 dias`]]},
{t:`callout`,title:`Durante a suspensão`,html:`<p>Nenhum ato pode ser praticado, salvo atos urgentes para evitar dano irreparável. Mas, se a suspensão vem da arguição de impedimento ou suspeição, nem os urgentes podem ser praticados pelo juiz arguido (${a(`art. 314`)}). Questão penal prejudicial: suspende se a ação penal for proposta em 3 meses, por no máximo 1 ano (${a(`art. 315`)}).</p>`},
{t:`callout`,kind:`sage`,title:`Extinção e primazia do mérito`,html:`<p>A extinção se dá por sentença (${a(`art. 316`)}). Antes de extinguir sem resolver o mérito, o juiz deve dar à parte oportunidade de corrigir o vício, se possível (${a(`art. 317`)}).</p>`},
{t:`arts`,h:`Os artigos-chave da matéria`,hint:`Abra cada um.`,items:[
[`Art. 2º`,`Inércia`,`O processo começa por iniciativa da parte e se desenvolve por impulso oficial.`],
[`Art. 10`,`Não surpresa`,`O juiz não decide com base em fundamento sobre o qual as partes não puderam se manifestar, ainda que seja matéria de ofício.`],
[`Art. 64, §1º`,`Incompetência absoluta`,`Pode ser alegada em qualquer tempo e grau e deve ser declarada de ofício.`],
[`Art. 113`,`Litisconsórcio`,`Comunhão, conexão ou afinidade autorizam litigar em conjunto.`],
[`Art. 144`,`Impedimento`,`Hipóteses objetivas que proíbem o juiz de atuar.`],
[`Art. 219`,`Dias úteis`,`Prazos processuais em dias contam só os úteis.`],
[`Art. 277`,`Finalidade`,`Ato feito de outro modo é válido se alcançou a finalidade.`],
[`Art. 292`,`Valor da causa`,`Critérios de fixação do valor.`],
[`Art. 85`,`Honorários`,`Entre 10% e 20%, com faixas para a Fazenda Pública.`],
[`Art. 313`,`Suspensão`,`Causas e prazos de suspensão do processo.`]]}],
quiz:[
[`A citação válida constitui o devedor em mora?`,[`Sim`,`Não`],0,`${a(`art. 240`)}, ressalvados os arts. 397 e 398 do Código Civil.`],
[`Por quanto tempo as partes podem suspender o processo por acordo?`,[`3 meses`,`6 meses`,`1 ano`],1,`${a(`art. 313, §4º`)}.`],
[`Advogada única patrona dá à luz. Suspensão de:`,[`8 dias`,`30 dias`,`15 dias`],1,`${a(`art. 313, IX e §6º`)}.`]]}
);
