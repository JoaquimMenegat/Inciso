window.COURSE={id:`conhecimento`,title:`Processo de Conhecimento`,kicker:`Matéria II`,h1a:`Processo de`,h1b:`conhecimento`,
intro:`O procedimento comum do início ao fim: petição inicial, audiência, defesa do réu, saneamento, provas, tutelas provisórias, sentença e coisa julgada. Cada etapa com simuladores e teste.`,
seal:{ring:`PETIÇÃO • CITAÇÃO • DEFESA • PROVA • SENTENÇA • `,word:`Rito comum`,sub:`CPC, arts. 318 a 508`},
footer:`Inciso — Processo de Conhecimento. Conteúdo escrito a partir do Código de Processo Civil (Lei 13.105/2015), da Lei 9.307/96 e da legislação citada. Material em revisão jurídica: confira sempre o texto vigente.`,
mods:[
/* I */
{id:`rito`,group:`Fase postulatória`,title:`O mapa do procedimento comum`,
intro:`O CPC tem três caminhos: o procedimento comum, que é a regra; os procedimentos especiais; e a execução. O comum se aplica também, de forma subsidiária, aos demais (art. 318, parágrafo único).`,
blocks:[
{t:`steps`,h:`Da inicial à sentença`,hint:`Avance pelas etapas.`,items:[
[`Petição inicial`,`O autor provoca a jurisdição e delimita a causa.`,`arts. 319 a 321`],
[`Juízo de admissibilidade`,`O juiz manda emendar, indefere a inicial ou julga improcedente de plano.`,`arts. 321, 330 e 332`],
[`Audiência de conciliação ou mediação`,`Tentativa de acordo antes da defesa.`,`art. 334`],
[`Contestação e reconvenção`,`Toda a defesa do réu, numa só peça.`,`arts. 335 a 343`],
[`Providências preliminares`,`Réplica, especificação de provas, correção de vícios.`,`arts. 347 a 353`],
[`Julgamento conforme o estado`,`Extinção, julgamento antecipado ou saneamento.`,`arts. 354 a 357`],
[`Instrução`,`Produção de provas, com audiência se necessário.`,`arts. 358 a 368`],
[`Sentença`,`Resolve o mérito ou extingue sem resolvê-lo.`,`arts. 485 a 495`],
[`Coisa julgada`,`A decisão de mérito se torna imutável.`,`arts. 502 a 508`]]},
{t:`svg`,h:`As fases em uma linha`,html:`<svg viewBox="0 0 760 170" role="img" aria-label="Linha com as fases postulatória, saneadora, instrutória e decisória">
<path class="draw" d="M30,80 H730" stroke="var(--brass)" stroke-width="4" fill="none"/>
<g class="pop" style="transition-delay:.3s"><circle cx="110" cy="80" r="16" fill="var(--seal)"/><text x="110" y="128" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Postulatória</text><text x="110" y="148" text-anchor="middle" font-size="11" fill="var(--muted)">inicial, audiência, defesa</text></g>
<g class="pop" style="transition-delay:.6s"><circle cx="290" cy="80" r="16" fill="var(--brass)"/><text x="290" y="128" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Saneadora</text><text x="290" y="148" text-anchor="middle" font-size="11" fill="var(--muted)">organiza o processo</text></g>
<g class="pop" style="transition-delay:.9s"><circle cx="470" cy="80" r="16" fill="var(--sage)"/><text x="470" y="128" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Instrutória</text><text x="470" y="148" text-anchor="middle" font-size="11" fill="var(--muted)">provas</text></g>
<g class="pop" style="transition-delay:1.2s"><circle cx="650" cy="80" r="16" fill="var(--ink)"/><text x="650" y="128" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Decisória</text><text x="650" y="148" text-anchor="middle" font-size="11" fill="var(--muted)">sentença</text></g>
<text class="pop" style="transition-delay:1.4s" x="380" y="30" text-anchor="middle" font-size="12" fill="var(--muted)">depois: liquidação e cumprimento de sentença</text></svg>`},
{t:`callout`,kind:`brass`,title:`Comum por exclusão`,html:`<p>Não existe lista das ações que seguem o procedimento comum. A lei lista as especiais; tudo o mais é comum.</p>`}],
quiz:[[`O procedimento comum aplica-se aos especiais?`,[`Nunca`,`Subsidiariamente`],1,`${a(`CPC, art. 318, parágrafo único`)}.`],[`Em que fase o juiz organiza as provas?`,[`Postulatória`,`Saneadora`,`Decisória`],1,`Decisão de saneamento (${a(`art. 357`)}).`]]},
/* II */
{id:`inicial`,group:`Fase postulatória`,title:`Petição inicial`,
intro:`A inicial materializa o direito de ação. Ela fixa quem litiga, o que se pede e por quê, e isso define os limites da sentença.`,
blocks:[
{t:`flips`,h:`Os requisitos do art. 319`,items:[
[`I · Juízo`,`A quem a petição é dirigida.`],
[`II · Partes`,`Nome, estado civil ou união estável, profissão, CPF ou CNPJ, e-mail e endereço de autor e réu.`],
[`III · Fato e fundamento`,`A <em>causa de pedir</em>. Não é preciso citar o artigo: o juiz conhece o direito.`],
[`IV · Pedido`,`Com suas especificações. Delimita a sentença.`],
[`V · Valor da causa`,`Sempre, mesmo sem conteúdo econômico imediato.`],
[`VI · Provas`,`Os meios com que o autor pretende demonstrar a verdade dos fatos.`],
[`VII · Audiência`,`A opção pela realização ou não da audiência de conciliação ou mediação.`],
[`Documentos`,`Os indispensáveis à propositura (${a(`art. 320`)}) e a procuração.`]]},
{t:`callout`,kind:`sage`,title:`Mnemônico`,html:`<p><b>Pede</b> (pedido), <b>Pro</b> (provas), <b>Juízo</b>, <b>do</b> (documentos), <b>Fato</b> (causa de pedir), <b>OPAUDI</b> (opção pela audiência), <b>VACA</b> (valor da causa).</p>`},
{t:`chooser`,h:`E se faltar algo?`,items:[
[`Dados do réu`,`Diligências`,`<p>O autor pode pedir ao juiz diligências para obtê-los (${a(`art. 319, §1º`)}). Não se indefere se for possível citar o réu (§2º) ou se a exigência tornar o acesso à justiça impossível ou excessivamente oneroso (§3º).</p>`],
[`Requisito ou documento`,`Emenda em 15 dias`,`<p>O juiz manda emendar ou completar em 15 dias, indicando com precisão o que corrigir (${a(`art. 321`)}). Descumprida, indefere a inicial.</p>`],
[`Advogado em causa própria`,`5 dias`,`<p>Deve declarar endereço, número na OAB e sociedade (${a(`art. 106, I`)}). Faltando, 5 dias para suprir.</p>`]]},
{t:`keys`,h:`Para que serve a inicial`,items:[[`492`,`congruência`,`a sentença fica nos limites do pedido`],[`337`,`identidade`,`permite ver litispendência, coisa julgada e conexão`],[`46`,`competência`,`fornece elementos para fixá-la`]]}],
quiz:[[`A inicial precisa citar o artigo de lei?`,[`Sim`,`Não, basta o fundamento jurídico`],1,`O juiz conhece o direito.`],[`Prazo da emenda à inicial?`,[`5 dias`,`10 dias`,`15 dias`],2,`${a(`art. 321`)}.`],[`Falta o CPF do réu, mas é possível citá-lo. O juiz indefere?`,[`Sim`,`Não`],1,`${a(`art. 319, §2º`)}.`]]},
/* III */
{id:`admissibilidade`,group:`Fase postulatória`,title:`Indeferimento e improcedência liminar`,
intro:`Antes de chamar o réu, o juiz olha a inicial. Pode mandar corrigir, rejeitar a petição por vício (sem julgar o mérito) ou rejeitar o próprio pedido (julgando o mérito).`,
blocks:[
{t:`vs`,h:`Duas coisas diferentes`,l:{t:`Indeferimento (art. 330)`,i:[`Problema de forma ou de condição da ação`,`Sentença terminativa (${a(`art. 485, I`)})`,`Não faz coisa julgada material: dá para repropor corrigindo o vício`]},r:{t:`Improcedência liminar (art. 332)`,i:[`O pedido contraria precedente ou está prescrito`,`Sentença de mérito (${a(`art. 487`)})`,`Faz coisa julgada material`]}},
{t:`table`,h:`Hipóteses de indeferimento`,hint:`Mnemônico: 3 "I" + 2 "não".`,head:[`Hipótese`,`Detalhe`],rows:[
[`Inépcia`,`Falta pedido ou causa de pedir; pedido indeterminado fora dos casos de genérico; conclusão que não decorre dos fatos; pedidos incompatíveis (${a(`§1º`)})`],
[`Ilegitimidade manifesta`,`A parte claramente não é titular da relação discutida`],
[`Interesse processual ausente`,`Não há necessidade ou utilidade da tutela`],
[`Não atendido o art. 106`,`Advogado em causa própria sem os dados`],
[`Não atendido o art. 321`,`Emenda não feita`]]},
{t:`callout`,kind:`brass`,title:`Revisionais de contrato (art. 330, §§2º e 3º)`,html:`<p>Em ações que revisam empréstimo, financiamento ou alienação de bens, o autor deve discriminar na inicial as obrigações que quer controverter e quantificar o valor incontroverso, sob pena de inépcia. O valor incontroverso continua sendo pago no tempo e modo contratados.</p>`},
{t:`table`,h:`Improcedência liminar`,hint:`Só em causas que dispensam instrução, antes da citação.`,head:[`O pedido contraria`,`Inciso`],rows:[[`Súmula do STF ou do STJ`,`I`],[`Acórdão do STF ou STJ em recursos repetitivos`,`II`],[`Entendimento em IRDR ou assunção de competência`,`III`],[`Súmula de TJ sobre direito local`,`IV`],[`Ou há prescrição ou decadência`,`§1º`]]},
{t:`sorter`,h:`O que o juiz faz?`,bins:[`Emenda`,`Indefere`,`Improcedência liminar`,`Manda citar`],cards:[
[`Faltou indicar o valor da causa.`,0,`Vício sanável (${a(`art. 321`)}).`],
[`A emenda foi determinada e o prazo passou em branco.`,1,`${a(`art. 330, IV`)}.`],
[`Os pedidos são incompatíveis entre si e o autor não corrigiu.`,1,`Inépcia (${a(`art. 330, §1º, IV`)}).`],
[`O pedido contraria súmula do STJ e a causa é só de direito.`,2,`${a(`art. 332, I`)}.`],
[`A pretensão está claramente prescrita.`,2,`${a(`art. 332, §1º`)}.`],
[`A inicial está completa e não há precedente contrário.`,3,`Designa audiência e manda citar (${a(`art. 334`)}).`]]},
{t:`steps`,h:`Se o autor apelar`,items:[
[`Apelação`,`Em 15 dias.`,`arts. 331 e 332, §§2º a 4º`],
[`Retratação`,`O juiz pode voltar atrás em 5 dias.`,`efeito regressivo`],
[`Sem retratação`,`O réu é citado para contrarrazões em 15 dias.`,`arts. 331, §1º e 332, §4º`],
[`Se o tribunal reformar`,`O prazo de contestação começa da intimação do retorno dos autos, observado o art. 334.`,`art. 331, §2º`],
[`Sem apelação`,`O réu é intimado do trânsito em julgado. Intimado, não citado.`,`arts. 331, §3º e 332, §2º`]]},
{t:`callout`,title:`Por que não ouvir o réu?`,html:`<p>O contraditório prévio é dispensado porque a decisão o favorece (${a(`art. 9º`)}). Prescrição e decadência são mérito: na prescrição perde-se a pretensão; na decadência, o próprio direito potestativo.</p>`}],
quiz:[[`Indeferimento da inicial faz coisa julgada material?`,[`Sim`,`Não`],1,`É sentença terminativa.`],[`Juiz que julga improcedente liminarmente pode se retratar em:`,[`5 dias`,`15 dias`],0,`${a(`art. 332, §3º`)}.`],[`Na improcedência liminar sem apelação, o réu é:`,[`citado`,`intimado do trânsito`],1,`${a(`art. 332, §2º`)}.`]]},
/* IV */
{id:`pedido`,group:`Fase postulatória`,title:`Pedido`,
intro:`O pedido é o objeto da demanda. Deve ser certo e determinado, porque o juiz não pode dar nem mais nem diferente do que foi pedido.`,
blocks:[
{t:`flips`,h:`O que entra mesmo sem ser pedido`,items:[[`Juros legais`,`Incluídos no principal (${a(`art. 322, §1º`)}).`],[`Correção monetária`,`Idem.`],[`Verbas de sucumbência`,`Custas e honorários.`],[`Prestações sucessivas`,`As que vencerem no curso do processo, enquanto durar a obrigação (${a(`art. 323`)}).`]]},
{t:`callout`,kind:`sage`,title:`Caso: os aluguéis que venceram depois`,html:`<p>João cobra de Pedro os aluguéis de março a maio. Durante o processo, Pedro deixa de pagar junho, julho e agosto. O juiz pode condená-lo a pagar todos, mesmo sem pedido expresso dos últimos três (${a(`art. 323`)}). A interpretação do pedido considera o conjunto da postulação e a boa-fé (${a(`art. 322, §2º`)}).</p>`},
{t:`table`,h:`Pedido genérico é exceção`,hint:`${a(`art. 324, §1º`)}.`,head:[`Hipótese`,`Exemplo`],rows:[[`Ações universais, sem poder individuar os bens`,`Petição de herança`],[`Não é possível determinar desde logo as consequências do fato`,`Lesão cujos efeitos ainda evoluem`],[`O valor depende de ato do réu`,`Exigir contas`]]},
{t:`chooser`,h:`Formas de combinar pedidos`,items:[
[`Cumulação simples`,`Vários pedidos, todos querem ser acolhidos`,`<p>Requisitos: compatíveis entre si, mesmo juízo competente e procedimento adequado, admitindo-se o comum com técnicas especiais (${a(`art. 327`)}). Valor: soma.</p>`],
[`Alternativo`,`Ou um, ou outro`,`<p>Quando a obrigação pode ser cumprida de mais de um modo (${a(`art. 325`)}). Valor: o maior.</p>`],
[`Subsidiário`,`Se não o primeiro, então o segundo`,`<p>${a(`art. 326`)}. Valor: o do principal.</p>`],
[`Sucessivo`,`Se o primeiro, também o segundo`,`<p>O segundo depende do acolhimento do primeiro, como investigação de paternidade e alimentos.</p>`]]},
{t:`svg`,h:`Até quando dá para mudar o pedido`,hint:`${a(`CPC, art. 329`)}.`,html:`<svg viewBox="0 0 760 170" role="img" aria-label="Linha do tempo da alteração do pedido">
<path class="draw" d="M30,70 H260" stroke="var(--sage)" stroke-width="10"/><path class="draw" d="M260,70 H520" stroke="var(--brass)" stroke-width="10"/><path class="draw" d="M520,70 H730" stroke="var(--seal)" stroke-width="10"/>
<g class="pop" style="transition-delay:.5s"><line x1="260" y1="50" x2="260" y2="92" stroke="var(--ink)" stroke-width="2"/><text x="260" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Citação</text></g>
<g class="pop" style="transition-delay:.7s"><line x1="520" y1="50" x2="520" y2="92" stroke="var(--ink)" stroke-width="2"/><text x="520" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Saneamento</text></g>
<text class="pop" style="transition-delay:.9s" x="145" y="120" text-anchor="middle" font-size="13" fill="var(--ink)">livremente</text>
<text class="pop" style="transition-delay:1s" x="390" y="120" text-anchor="middle" font-size="13" fill="var(--ink)">com consentimento do réu</text>
<text class="pop" style="transition-delay:1s" x="390" y="138" text-anchor="middle" font-size="11" fill="var(--muted)">contraditório em 15 dias e prova suplementar</text>
<text class="pop" style="transition-delay:1.1s" x="625" y="120" text-anchor="middle" font-size="13" fill="var(--ink)">vedado</text></svg>`}],
quiz:[[`Prestações vencidas no curso do processo precisam de novo pedido?`,[`Sim`,`Não`],1,`${a(`art. 323`)}.`],[`Depois do saneamento, com acordo do réu, o autor pode mudar o pedido?`,[`Sim`,`Não`],1,`Após o saneamento é vedado (${a(`art. 329`)}).`],[`Investigação de paternidade e alimentos formam pedidos:`,[`alternativos`,`sucessivos`,`subsidiários`],1,`O segundo depende do primeiro.`]]},
/* V */
{id:`audiencia334`,group:`Fase postulatória`,title:`Audiência de conciliação ou mediação`,
intro:`Desde 2015, a regra é tentar o acordo antes da defesa. Se a inicial está em ordem e não é caso de improcedência liminar, o juiz marca a audiência.`,
blocks:[
{t:`keys`,h:`Os números do art. 334`,items:[[`30`,`dias`,`antecedência mínima da audiência`],[`20`,`dias`,`antecedência mínima da citação do réu`],[`10`,`dias`,`antes da audiência, prazo para o réu dizer que não quer`],[`até 2%`,`multa`,`por ausência injustificada`],[`2`,`meses`,`limite para sessões adicionais`],[`20`,`minutos`,`intervalo mínimo entre audiências na pauta`]]},
{t:`gauge`,h:`A audiência vai acontecer?`,hint:`Ligue as manifestações. A audiência só deixa de ocorrer se ambos recusarem, ou se o direito não admitir acordo.`,mode:`all`,items:[[`O autor disse na inicial que não quer`,`${a(`art. 319, VII`)}`],[`O réu peticionou recusando com 10 dias de antecedência`,`${a(`art. 334, §5º`)}; em litisconsórcio, todos (§6º)`]],on:[`Audiência cancelada`,`Dupla negativa (${a(`art. 334, §4º, I`)}). O prazo da contestação corre do protocolo do pedido de cancelamento do réu (${a(`art. 335, II`)}).`],off:[`Audiência mantida`,`Se um quer, tem. Ela só não ocorre também se o direito não admitir autocomposição (${a(`§4º, II`)}).`]},
{t:`flips`,h:`Regras da sessão`,items:[[`Quem conduz`,`Conciliador (sem vínculo anterior entre as partes) ou mediador (com vínculo).`],[`Intimação do autor`,`Na pessoa do advogado (${a(`§3º`)}).`],[`Eletrônica`,`Pode ser por meio eletrônico (${a(`§7º`)}).`],[`Ausência`,`Injustificada é ato atentatório à dignidade da justiça: multa de até 2% da vantagem pretendida ou do valor da causa, para a União ou o Estado (${a(`§8º`)}).`],[`Representante`,`A parte pode mandar representante com procuração específica com poderes para negociar e transigir (${a(`§10`)}), acompanhada de advogado (§9º).`],[`Acordo`,`Reduzido a termo e homologado por sentença de mérito (${a(`§11`)}; ${a(`art. 487, III`)}).`]]}],
quiz:[[`O autor não quer audiência, mas o réu nada disse. Há audiência?`,[`Sim`,`Não`],0,`Só a dupla negativa a afasta.`],[`Multa por faltar sem justificativa:`,[`até 2%`,`até 10%`,`até 20%`],0,`${a(`art. 334, §8º`)}.`],[`Acordo na audiência gera sentença:`,[`terminativa`,`de mérito`],1,`${a(`art. 487, III, b`)}.`]]},
/* VI */
{id:`contestacao`,group:`Resposta do réu`,title:`Contestação`,
intro:`A contestação concentra toda a defesa. O que não for dito ali, em regra, não poderá ser dito depois.`,
blocks:[
{t:`chooser`,h:`Quando começam os 15 dias`,hint:`${a(`art. 335`)}. Dobro para Fazenda, MP e Defensoria.`,items:[
[`Audiência sem acordo`,`Da audiência`,`<p>Da audiência ou da última sessão, inclusive se uma parte faltou (${a(`inciso I`)}).</p>`],
[`Dupla negativa`,`Do pedido de cancelamento do réu`,`<p>Do protocolo do pedido de cancelamento apresentado pelo réu (${a(`inciso II`)}). Em litisconsórcio, de cada réu (§1º).</p>`],
[`Sem audiência`,`Do art. 231`,`<p>Quando o direito não admite autocomposição, conforme a forma de citação (${a(`inciso III`)}). Vários réus: a última das datas (${a(`art. 231, §1º`)}).</p>`],
[`Desistência quanto a um réu`,`Da intimação da homologação`,`<p>Se o autor desiste em relação a réu ainda não citado, os demais contam da intimação da decisão que homologar a desistência (${a(`§2º`)}).</p>`]]},
{t:`table`,h:`Preliminares (art. 337)`,hint:`Vêm antes do mérito. O juiz conhece de ofício todas, exceto convenção de arbitragem e incompetência relativa (§5º).`,head:[`Inciso`,`Preliminar`],rows:[[`I`,`Inexistência ou nulidade da citação`],[`II`,`Incompetência absoluta e relativa`],[`III`,`Incorreção do valor da causa`],[`IV`,`Inépcia da inicial`],[`V`,`Perempção`],[`VI`,`Litispendência`],[`VII`,`Coisa julgada`],[`VIII`,`Conexão`],[`IX`,`Incapacidade, defeito de representação ou falta de autorização`],[`X`,`Convenção de arbitragem`],[`XI`,`Ilegitimidade ou falta de interesse`],[`XII`,`Falta de caução ou prestação exigida como preliminar`],[`XIII`,`Indevida concessão de gratuidade`]]},
{t:`callout`,kind:`sage`,title:`Mnemônico`,html:`<p><b>6 IN</b> (inexistência de citação, incompetência, inépcia, incorreção do valor, incapacidade, indevida gratuidade) · <b>2 CON</b> (conexão, convenção de arbitragem) · <b>PERELICO</b> (perempção, litispendência, coisa julgada) · <b>falta de caução</b> · <b>CONLI</b> (condições: legitimidade e interesse).</p>`},
{t:`sorter`,h:`Litispendência, coisa julgada ou perempção?`,bins:[`Litispendência`,`Coisa julgada`,`Perempção`],cards:[
[`O autor repete ação idêntica que ainda está em curso.`,0,`Mesmas partes, causa de pedir e pedido, com a primeira pendente (${a(`art. 337, §3º`)}).`],
[`O autor repete ação idêntica já decidida com trânsito em julgado.`,1,`${a(`art. 337, §4º`)}.`],
[`O autor abandonou a mesma ação três vezes e propõe a quarta.`,2,`${a(`art. 486, §3º`)}: não pode propor de novo, mas pode alegar o direito em defesa.`]]},
{t:`flips`,h:`Ônus e limites da defesa`,items:[
[`Eventualidade`,`Toda a matéria de defesa, com razões de fato e de direito e provas (${a(`art. 336`)}).`],
[`Impugnação específica`,`Fato não impugnado presume-se verdadeiro, salvo se não admitir confissão, faltar instrumento essencial ou contradizer a defesa como um todo (${a(`art. 341`)}).`],
[`Negativa geral`,`Permitida só a defensor público, advogado dativo e curador especial (${a(`art. 341, parágrafo único`)}).`],
[`Depois da contestação`,`Só fato ou direito superveniente, matéria de ofício ou autorizada por lei a qualquer tempo (${a(`art. 342`)}).`],
[`Arbitragem não alegada`,`Implica aceitar a jurisdição estatal e renunciar ao juízo arbitral (${a(`art. 337, §6º`)}).`]]},
{t:`chooser`,h:`O réu diz que não é o réu`,hint:`${a(`arts. 338 e 339`)}.`,items:[
[`Substituir`,`Troca o réu`,`<p>O autor pode, em 15 dias, alterar a inicial e substituir o réu, reembolsando despesas e pagando honorários de 3% a 5% do valor da causa ao excluído (ou por equidade, se irrisório).</p>`],
[`Incluir`,`Litisconsórcio`,`<p>O autor pode manter o réu e incluir o indicado como litisconsorte passivo (${a(`art. 339, §2º`)}).</p>`],
[`Manter`,`Segue o processo`,`<p>Silenciar mantém o réu original; o risco fica com o autor.</p>`],
[`Dever do réu`,`Indicar o certo`,`<p>Sempre que souber, o réu indica o sujeito passivo correto, sob pena de arcar com despesas e indenizar o autor (${a(`art. 339`)}).</p>`]]},
{t:`callout`,kind:`brass`,title:`Contestação no foro do réu (art. 340)`,html:`<p>Alegando incompetência, o réu pode protocolar a contestação no foro do seu domicílio, que a comunica ao juízo da causa, de preferência por meio eletrônico. Se foi citado por precatória, junta aos autos da carta. Reconhecida a competência do foro do réu, este fica prevento. A audiência do art. 334 fica suspensa até a definição.</p>`}],
quiz:[[`O juiz pode reconhecer de ofício a convenção de arbitragem?`,[`Sim`,`Não`],1,`${a(`art. 337, §5º`)}.`],[`Curador especial pode contestar por negação geral?`,[`Sim`,`Não`],0,`${a(`art. 341, parágrafo único`)}.`],[`Autor troca o réu ilegítimo. Paga ao excluído honorários de:`,[`10% a 20%`,`3% a 5%`],1,`${a(`art. 338, parágrafo único`)}.`]]},
/* VII */
{id:`reconvencao`,group:`Resposta do réu`,title:`Reconvenção`,
intro:`Na reconvenção o réu deixa de só se defender e passa a pedir algo contra o autor, no mesmo processo.`,
blocks:[
{t:`svg`,h:`Os papéis se cruzam`,html:`<svg viewBox="0 0 700 220" role="img" aria-label="Autor e réu com setas cruzadas">
<g class="pop"><rect x="40" y="70" width="180" height="70" fill="var(--seal)"/><text x="130" y="100" text-anchor="middle" fill="#fff" font-size="16" font-weight="700">Autor</text><text x="130" y="122" text-anchor="middle" fill="#fff" font-size="12">na reconvenção: reconvindo</text></g>
<g class="pop" style="transition-delay:.2s"><rect x="480" y="70" width="180" height="70" fill="var(--ink)"/><text x="570" y="100" text-anchor="middle" fill="var(--paper)" font-size="16" font-weight="700">Réu</text><text x="570" y="122" text-anchor="middle" fill="var(--paper)" font-size="12">na reconvenção: reconvinte</text></g>
<path class="draw" d="M225,85 C320,30 380,30 475,85" fill="none" stroke="var(--seal)" stroke-width="3" marker-end="url(#ar)"/>
<path class="draw" d="M475,125 C380,180 320,180 225,125" fill="none" stroke="var(--brass)" stroke-width="3" marker-end="url(#ar2)"/>
<defs><marker id="ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--seal)"/></marker><marker id="ar2" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--brass)"/></marker></defs>
<text class="pop" style="transition-delay:.8s" x="350" y="30" text-anchor="middle" font-size="13" fill="var(--ink)">ação principal</text>
<text class="pop" style="transition-delay:1s" x="350" y="200" text-anchor="middle" font-size="13" fill="var(--ink)">reconvenção, na própria contestação</text></svg>`},
{t:`flips`,h:`As regras do art. 343`,items:[[`Onde`,`Na própria contestação. Pode-se reconvir mesmo sem contestar (§6º).`],[`Conexão`,`Com a ação principal ou com o fundamento da defesa.`],[`Resposta`,`O autor é intimado, na pessoa do advogado, para responder em 15 dias (§1º).`],[`Autonomia`,`A desistência ou extinção da ação principal não impede a reconvenção (§2º).`],[`Terceiros`,`Pode ser proposta contra o autor e terceiro (§3º), ou pelo réu com terceiro (§4º).`],[`Substituto processual`,`Se o autor age como substituto, o reconvinte deve afirmar direito contra o substituído (§5º).`]]},
{t:`callout`,kind:`brass`,title:`Quando não cabe`,html:`<p>Nas ações dúplices, como as possessórias (${a(`art. 556`)}), o réu já pode pedir na contestação; e nos Juizados, a reconvenção é vedada, admitindo-se só o pedido contraposto (${a(`Lei 9.099/95, art. 31`)}). A reconvenção tem valor da causa e custas próprios.</p>`}],
quiz:[[`O autor desistiu da ação. A reconvenção:`,[`é extinta junto`,`prossegue`],1,`${a(`art. 343, §2º`)}.`],[`O réu pode reconvir sem contestar?`,[`Sim`,`Não`],0,`${a(`art. 343, §6º`)}.`]]},
/* VIII */
{id:`revelia`,group:`Resposta do réu`,title:`Revelia`,
intro:`Revelia é a ausência de contestação. Ela pode fazer presumir verdadeiros os fatos do autor, mas não garante que ele vença.`,
blocks:[
{t:`gauge`,h:`Simulador de revelia`,hint:`O réu não contestou. Ligue as circunstâncias e veja se a presunção se aplica.`,mode:`any`,items:[[`Há vários réus e algum contestou`,`${a(`art. 345, I`)}`],[`O litígio é sobre direito indisponível`,`${a(`II`)}`],[`Falta o instrumento que a lei considera indispensável à prova do ato`,`${a(`III`)}; ex.: certidão de casamento no divórcio`],[`As alegações são inverossímeis ou contrariam a prova dos autos`,`${a(`IV`)}`]],on:[`Presunção afastada`,`Uma exceção do art. 345 se aplica. O autor ainda tem de provar o que alegou, e o juiz manda especificar provas (${a(`art. 348`)}).`],off:[`Fatos presumidos verdadeiros`,`Efeito material da revelia (${a(`art. 344`)}). Se ninguém pedir provas, cabe julgamento antecipado (${a(`art. 355, II`)}).`]},
{t:`vs`,h:`Os dois efeitos`,l:{t:`Material`,i:[`Presunção relativa de veracidade dos fatos`,`Não alcança o direito: o juiz ainda pode julgar improcedente`,`Afastado pelas exceções do art. 345`]},r:{t:`Processual`,i:[`Prazos contra o revel sem advogado correm da publicação no órgão oficial (${a(`art. 346`)})`,`O revel pode intervir a qualquer tempo, recebendo o processo no estado em que está`,`Pode produzir provas contrapostas se ingressar a tempo (${a(`art. 349`)})`]}},
{t:`callout`,title:`Revelia própria e imprópria`,html:`<p>A doutrina chama de imprópria a revelia que decorre de vício não sanado depois da contestação, como não regularizar a representação (${a(`art. 76, §1º, II`)}) ou não constituir novo advogado após a morte do anterior (${a(`art. 313, §3º`)}).</p>`}],
quiz:[[`Revelia leva sempre à procedência?`,[`Sim`,`Não`],1,`A presunção é relativa e não alcança o direito.`],[`Dois réus, um contesta fato comum. Para o revel:`,[`o fato se presume verdadeiro`,`não há presunção quanto a ele`],1,`${a(`art. 345, I`)}.`],[`O revel pode entrar no processo depois?`,[`Sim, no estado em que estiver`,`Não`],0,`${a(`art. 346, parágrafo único`)}.`]]}
]};
