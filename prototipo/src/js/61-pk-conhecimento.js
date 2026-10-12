/* ================= Matéria: conhecimento (gerado por importar_pacote.py — não editar) ================= */
(function(){
const a=s=>`<span class="art-ref">${s}</span>`;const PK={};
PK.c={id:`conhecimento`,title:`Processo de Conhecimento`,kicker:`Matéria II`,h1a:`Processo de`,h1b:`conhecimento`,
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
{t:`keys`,h:`Os números do art. 334`,items:[[`30`,`dias`,`antecedência mínima da audiência`],[`20`,`dias`,`antecedência mínima da citação do réu`],[`10`,`dias`,`antes da audiência, prazo para o réu dizer que não quer`],[`2%`,`multa`,`por ausência injustificada`],[`2`,`meses`,`limite para sessões adicionais`],[`20`,`minutos`,`intervalo mínimo entre audiências na pauta`]]},
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
PK.c.mods.push(
/* IX */
{id:`preliminares`,group:`Organização do processo`,title:`Providências preliminares`,
intro:`Terminada a resposta do réu, o juiz arruma a casa antes de decidir o rumo. Nem sempre há providências; quando há, elas abrem espaço para o autor falar e para corrigir vícios.`,
blocks:[
{t:`chooser`,h:`O que o juiz pode determinar`,items:[
[`Revelia sem efeito`,`Autor especifica provas`,`<p>Se a revelia não produziu o efeito material (${a(`art. 345`)}), o autor é intimado a especificar as provas que pretende produzir (${a(`art. 348`)}).</p>`],
[`Defesa indireta`,`Réplica em 15 dias`,`<p>Se o réu alegou fato impeditivo, modificativo ou extintivo do direito do autor, este responde em 15 dias, podendo produzir prova (${a(`art. 350`)}).</p>`],
[`Preliminares`,`Réplica em 15 dias`,`<p>Se o réu alegou matérias do art. 337, o autor responde em 15 dias, com prova (${a(`art. 351`)}).</p>`],
[`Vício sanável`,`Correção em até 30 dias`,`<p>O juiz manda corrigir em prazo não superior a 30 dias (${a(`art. 352`)}).</p>`]]},
{t:`vs`,h:`Preliminares dilatórias × peremptórias`,l:{t:`Dilatórias`,i:[`Só atrasam o processo`,`Incompetência, nulidade de citação, incorreção do valor, conexão, incapacidade, gratuidade indevida`]},r:{t:`Peremptórias`,i:[`Encerram o processo sem mérito`,`Perempção, litispendência, coisa julgada, convenção de arbitragem, inépcia não sanada, ilegitimidade`]}},
{t:`vs`,h:`Defesa direta × indireta`,l:{t:`Direta`,i:[`Nega o fato ou suas consequências jurídicas`,`"Não houve batida"`,`Não gera réplica obrigatória`]},r:{t:`Indireta`,i:[`Admite o fato, mas opõe outro que impede, modifica ou extingue o direito`,`"Houve a dívida, mas já paguei"`,`Gera réplica (${a(`art. 350`)})`]}}],
quiz:[[`O réu alegou pagamento. O autor:`,[`nada faz`,`é ouvido em 15 dias`],1,`Defesa indireta gera réplica (${a(`art. 350`)}).`],[`Prazo máximo para corrigir vício sanável:`,[`15 dias`,`30 dias`],1,`${a(`art. 352`)}.`]]},
/* X */
{id:`estado`,group:`Organização do processo`,title:`Julgamento conforme o estado do processo`,
intro:`Depois das providências preliminares, o juiz escolhe entre quatro caminhos. Só um deles leva à fase de provas.`,
blocks:[
{t:`wizard`,h:`Que caminho o juiz toma?`,tree:{q:`Há causa de extinção do art. 485, ou prescrição, decadência ou homologação do art. 487?`,a:[[`Sim`,{end:`Extinção do processo`,txt:`${a(`art. 354`)}. Se atingir só parte do processo, é decisão interlocutória, impugnável por agravo de instrumento (parágrafo único).`}],[`Não`,{q:`Ainda é preciso produzir provas sobre todo o objeto?`,a:[[`Não`,{end:`Julgamento antecipado do mérito`,txt:`${a(`art. 355`)}: não há necessidade de outras provas, ou o réu é revel com efeito material e não pediu provas.`}],[`Só sobre parte`,{end:`Julgamento antecipado parcial`,txt:`${a(`art. 356`)}: um pedido ou parcela incontroverso ou pronto para julgamento. Decisão interlocutória de mérito, agravável (${a(`§5º`)}), executável desde logo, sem caução, e que faz coisa julgada.`}],[`Sim`,{end:`Saneamento e organização`,txt:`${a(`art. 357`)}: o juiz organiza a fase de provas.`}]]}]]}},
{t:`sorter`,h:`Classifique`,bins:[`Extinção`,`Antecipado`,`Antecipado parcial`,`Saneamento`],cards:[
[`As partes fizeram acordo e pedem homologação.`,0,`${a(`art. 487, III, b`)} via ${a(`art. 354`)}.`],
[`A causa é só de direito: discute-se a validade de uma cláusula.`,1,`${a(`art. 355, I`)}.`],
[`O réu reconheceu o dano material; o dano moral depende de prova.`,2,`Parcela incontroversa (${a(`art. 356, I`)}).`],
[`Há versões opostas sobre quem avançou o sinal, e testemunhas a ouvir.`,3,`${a(`art. 357`)}.`]]},
{t:`callout`,kind:`brass`,title:`Decisão parcial de mérito`,html:`<p>É interlocutória pela forma, mas sentença pelo conteúdo: resolve definitivamente parte do mérito. Por isso cabe agravo de instrumento (${a(`art. 1.015, II`)}), pode ser liquidada e cumprida desde logo (${a(`art. 356, §§2º a 4º`)}) e transita em julgado.</p>`}],
quiz:[[`Contra a decisão de julgamento antecipado parcial cabe:`,[`apelação`,`agravo de instrumento`],1,`${a(`art. 356, §5º`)}.`],[`Causa só de direito permite:`,[`julgamento antecipado`,`saneamento obrigatório`],0,`${a(`art. 355, I`)}.`]]},
/* XI */
{id:`saneamento`,group:`Organização do processo`,title:`Saneamento e ônus da prova`,
intro:`A decisão de saneamento é o planejamento da instrução. Popularmente chamada de "despacho saneador", é uma decisão: resolve questões e define o rumo.`,
blocks:[
{t:`steps`,h:`O conteúdo do art. 357`,items:[
[`Resolver questões processuais pendentes`,`Depura o processo de vícios ou declara que ele está em ordem.`,`inciso I`],
[`Delimitar as questões de fato`,`Separa o controvertido do incontroverso e define os meios de prova admitidos: os temas da prova.`,`inciso II`],
[`Distribuir o ônus da prova`,`Diz a quem cabe provar o quê, inclusive se houver inversão.`,`inciso III`],
[`Delimitar as questões de direito`,`As teses jurídicas relevantes para a decisão de mérito.`,`inciso IV`],
[`Designar audiência`,`Se houver prova oral.`,`inciso V`]]},
{t:`vs`,h:`Questão de fato × questão de direito`,l:{t:`De fato`,i:[`O que aconteceu?`,`Depende de prova`,`Ex.: quem avançou o sinal; se houve pagamento`,`Não se reexamina em recurso especial (${a(`Súmula 7 do STJ`)})`]},r:{t:`De direito`,i:[`Qual norma se aplica e como?`,`Não depende de prova`,`Ex.: responsabilidade objetiva ou subjetiva; prazo prescricional`,`Pode ser decidida sem instrução`]}},
{t:`flips`,h:`Depois da decisão`,items:[[`Ajustes`,`As partes têm 5 dias para pedir esclarecimentos ou ajustes; depois, a decisão se estabiliza (${a(`§1º`)}).`],[`Saneamento consensual`,`As partes podem apresentar delimitação conjunta, que, homologada, vincula partes e juiz (${a(`§2º`)}).`],[`Saneamento compartilhado`,`Em causa complexa, o juiz designa audiência para sanear em cooperação com as partes (${a(`§3º`)}).`],[`Testemunhas`,`Rol em até 15 dias; no máximo 10, sendo 3 por fato (${a(`§§4º e 6º`)}).`],[`Perícia`,`O juiz nomeia o perito e, se possível, fixa calendário (${a(`§8º`)}).`],[`Efeitos`,`Abre a instrução, estabiliza a demanda e torna preclusas as questões resolvidas.`]]},
{t:`chooser`,h:`Ônus da prova (art. 373)`,items:[
[`Regra estática`,`Cada um prova o que alega`,`<p>Ao autor, o fato constitutivo do seu direito; ao réu, o fato impeditivo, modificativo ou extintivo.</p>`],
[`Distribuição dinâmica`,`O juiz redistribui`,`<p>Diante de impossibilidade ou excessiva dificuldade de uma parte, ou maior facilidade da outra, por decisão fundamentada e dando oportunidade de se desincumbir (${a(`§1º`)}). Não pode gerar prova impossível (§2º). Cabe agravo de instrumento (${a(`art. 1.015, XI`)}).</p>`],
[`Convencional`,`As partes combinam`,`<p>Permitida, salvo direito indisponível ou quando tornar excessivamente difícil o exercício do direito (${a(`§3º`)}).</p>`],
[`Consumidor`,`Inversão do CDC`,`<p>Quando verossímil a alegação ou hipossuficiente o consumidor (${a(`CDC, art. 6º, VIII`)}).</p>`]]}],
quiz:[[`Prazo para pedir ajustes no saneamento:`,[`5 dias`,`15 dias`],0,`${a(`art. 357, §1º`)}.`],[`Máximo de testemunhas por fato:`,[`2`,`3`,`10`],1,`${a(`art. 357, §6º`)}.`],[`Decisão que redistribui o ônus da prova é agravável?`,[`Sim`,`Não`],0,`${a(`art. 1.015, XI`)}.`]]},
/* XII */
{id:`aij`,group:`Organização do processo`,title:`Audiência de instrução e julgamento`,
intro:`Designada no saneamento, a audiência reúne a prova oral, os debates e, se possível, a sentença.`,
blocks:[
{t:`tl`,h:`A sequência da audiência`,items:[
[`Pregão`,`Abertura e chamada das partes e advogados (${a(`art. 358`)}).`],
[`Conciliação`,`O juiz tenta o acordo antes de tudo (${a(`art. 359`)}).`],
[`Perito e assistentes técnicos`,`Respondem aos quesitos de esclarecimento (${a(`art. 361, I`)}).`],
[`Depoimentos pessoais`,`Primeiro o autor, depois o réu (${a(`II`)}).`],
[`Testemunhas`,`Primeiro as do autor, depois as do réu (${a(`III`)}). A ordem é preferencial.`],
[`Debates orais`,`20 minutos para cada parte e para o MP, prorrogáveis por 10 (${a(`art. 364`)}). Causa complexa: memoriais em 15 dias sucessivos.`],
[`Sentença`,`Na audiência ou em 30 dias (${a(`art. 366`)}).`]]},
{t:`flips`,h:`Regras da sala`,items:[[`Poder de polícia`,`O juiz mantém a ordem, retira quem se comportar mal, requisita força policial e trata todos com urbanidade (${a(`art. 360`)}).`],[`Sem apartes`,`Advogados e MP não interrompem depoimentos sem licença (${a(`art. 361, parágrafo único`)}).`],[`Una e contínua`,`Pode ser cindida excepcionalmente (${a(`art. 365`)}).`],[`Gravação`,`Pelo juízo ou pelas partes, sem autorização prévia (${a(`art. 367, §§5º e 6º`)}).`],[`Publicidade`,`É pública, salvo segredo de justiça (${a(`arts. 368 e 189`)}).`]]},
{t:`chooser`,h:`Adiamento (art. 362)`,items:[[`Convenção`,`As partes concordam`,`<p>Inciso I.</p>`],[`Impedimento justificado`,`Quem deve participar não pode vir`,`<p>Inciso II. O impedimento deve ser comprovado até a abertura (§1º).</p>`],[`Atraso do início`,`Mais de 30 minutos`,`<p>Atraso injustificado do início da audiência por mais de 30 minutos do horário marcado (inciso III).</p>`],[`Advogado ausente`,`Provas dispensadas`,`<p>O juiz pode dispensar as provas requeridas pela parte cujo advogado faltou sem justificativa (§2º). Quem der causa ao adiamento paga as despesas (§3º).</p>`]]}],
quiz:[[`Quem depõe primeiro?`,[`O réu`,`O autor`],1,`${a(`art. 361, II`)}.`],[`Tempo de debates de cada parte:`,[`15 minutos`,`20 + 10 minutos`],1,`${a(`art. 364`)}.`],[`A parte pode gravar a audiência sem autorização?`,[`Sim`,`Não`],0,`${a(`art. 367, §6º`)}.`]]},
/* XIII */
{id:`tutelas`,group:`Tutelas e decisão`,title:`Tutelas provisórias`,
intro:`Enquanto o processo caminha, o tempo pode destruir o direito. A tutela provisória antecipa ou protege, com base em cognição sumária e decisão precária.`,
blocks:[
{t:`svg`,h:`O mapa das tutelas`,html:`<svg viewBox="0 0 760 300" role="img" aria-label="Árvore das tutelas provisórias">
<g class="pop"><rect x="290" y="10" width="180" height="42" fill="var(--ink)"/><text x="380" y="37" text-anchor="middle" font-size="15" font-weight="700" fill="var(--paper)">Tutela provisória</text></g>
<path class="draw" d="M380,52 V75 H200 V95 M380,75 H600 V95" fill="none" stroke="var(--line)" stroke-width="2"/>
<g class="pop" style="transition-delay:.3s"><rect x="110" y="95" width="180" height="42" fill="var(--seal)"/><text x="200" y="121" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">Urgência (art. 300)</text></g>
<g class="pop" style="transition-delay:.4s"><rect x="510" y="95" width="180" height="42" fill="var(--sage)"/><text x="600" y="121" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">Evidência (art. 311)</text></g>
<path class="draw" d="M200,137 V160 H110 V180 M200,160 H290 V180 M600,137 V180" fill="none" stroke="var(--line)" stroke-width="2"/>
<g class="pop" style="transition-delay:.7s"><rect x="40" y="180" width="140" height="44" fill="none" stroke="var(--seal)" stroke-width="2"/><text x="110" y="200" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Cautelar</text><text x="110" y="216" text-anchor="middle" font-size="11" fill="var(--muted)">protege o resultado</text></g>
<g class="pop" style="transition-delay:.8s"><rect x="220" y="180" width="140" height="44" fill="none" stroke="var(--seal)" stroke-width="2"/><text x="290" y="200" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Antecipada</text><text x="290" y="216" text-anchor="middle" font-size="11" fill="var(--muted)">satisfaz já</text></g>
<g class="pop" style="transition-delay:.9s"><rect x="520" y="180" width="160" height="44" fill="none" stroke="var(--sage)" stroke-width="2"/><text x="600" y="200" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Só incidental</text><text x="600" y="216" text-anchor="middle" font-size="11" fill="var(--muted)">sem perigo, satisfativa</text></g>
<text class="pop" style="transition-delay:1.1s" x="200" y="262" text-anchor="middle" font-size="12" fill="var(--muted)">antecedente ou incidental</text></svg>`},
{t:`vs`,h:`Os requisitos da urgência`,l:{t:`Fumus boni iuris`,i:[`Probabilidade do direito`,`"Onde há fumaça, há fogo"`]},r:{t:`Periculum in mora`,i:[`Perigo de dano ou risco ao resultado útil do processo`,`Ex.: medicamento urgente pedido ao Estado`]}},
{t:`flips`,h:`Regras gerais (arts. 294 a 302)`,items:[[`Precária`,`Conserva eficácia durante o processo, mas pode ser revogada ou modificada a qualquer tempo (${a(`art. 296`)}).`],[`Caução`,`O juiz pode exigir caução real ou fidejussória, dispensada para quem não pode oferecê-la (${a(`art. 300, §1º`)}).`],[`Liminar ou após justificação`,`Pode ser concedida sem ouvir o réu ou após audiência de justificação (${a(`§2º`)}).`],[`Irreversibilidade`,`A antecipada não se concede se houver perigo de irreversibilidade dos efeitos (${a(`§3º`)}). A jurisprudência relativiza quando o dano de negar também é irreversível.`],[`Responsabilidade`,`O requerente responde objetivamente pelos prejuízos se a sentença lhe for desfavorável ou a medida perder eficácia (${a(`art. 302`)}).`],[`Recurso`,`Decisão sobre tutela: agravo de instrumento (${a(`art. 1.015, I`)}). Na sentença: apelação sem efeito suspensivo nesse capítulo (${a(`art. 1.012, §1º, V`)}).`]]},
{t:`wizard`,h:`Que tutela pedir?`,tree:{q:`Há perigo de dano ou risco ao resultado útil do processo?`,a:[[`Sim`,{q:`Você quer assegurar o direito ou já satisfazê-lo?`,a:[[`Assegurar`,{end:`Cautelar`,txt:`Arresto, sequestro, arrolamento de bens, protesto contra alienação ou outra medida idônea (${a(`art. 301`)}). Ex.: bloquear valores para evitar dilapidação.`}],[`Satisfazer`,{q:`A urgência é contemporânea à propositura, sem tempo para a inicial completa?`,a:[[`Sim`,{end:`Antecipada antecedente`,txt:`A inicial pode se limitar ao pedido de tutela (${a(`art. 303`)}). Pode estabilizar se o réu não recorrer (${a(`art. 304`)}).`}],[`Não`,{end:`Antecipada incidental`,txt:`Pedida na inicial completa ou no curso do processo, sem custas (${a(`arts. 295 e 300`)}).`}]]}]]}],[`Não`,{q:`Alguma hipótese do art. 311 está presente?`,a:[[`Sim`,{end:`Evidência`,txt:`Dispensa perigo de dano. Liminar só nas hipóteses II e III.`}],[`Não`,{end:`Sem tutela provisória`,txt:`O pedido aguarda a sentença.`}]]}]]}},
{t:`steps`,h:`Antecipada antecedente (arts. 303 e 304)`,items:[
[`Petição sumarizada`,`Indica o pedido de tutela e o pedido final, expõe a lide, o direito e o perigo, informa o valor da causa considerando o pedido final e declara que usa o benefício do art. 303.`,`art. 303, caput e §§4º e 5º`],
[`Se concedida`,`O autor adita a inicial em 15 dias (ou mais, se o juiz fixar), nos mesmos autos e sem novas custas. Sem aditamento, extinção sem mérito.`,`art. 303, §§1º a 3º`],
[`Se negada`,`Emenda em até 5 dias, sob pena de extinção.`,`art. 303, §6º`],
[`Estabilização`,`Se o réu não recorrer da decisão concessiva, o processo é extinto e a tutela continua produzindo efeitos.`,`art. 304`],
[`Revisão`,`Qualquer parte pode propor ação para rever, reformar ou invalidar a tutela em 2 anos da ciência da extinção. Não há coisa julgada.`,`art. 304, §§2º, 5º e 6º`]]},
{t:`steps`,h:`Cautelar antecedente (arts. 305 a 310)`,items:[
[`Petição`,`Indica a lide, seu fundamento, o direito e o perigo. Se o juiz achar que é antecipada, segue o art. 303 (fungibilidade).`,`art. 305`],
[`Defesa`,`Réu citado para contestar em 5 dias; sem contestação, presumem-se aceitos os fatos e o juiz decide em 5 dias.`,`arts. 306 e 307`],
[`Efetivação e pedido principal`,`Efetivada a medida, o pedido principal deve ser apresentado em 30 dias, nos mesmos autos, sem novas custas.`,`art. 308`],
[`Cessa a eficácia`,`Se o pedido principal não vier em 30 dias, se a medida não for efetivada em 30 dias ou se o pedido principal for improcedente ou extinto.`,`art. 309`],
[`Indeferida`,`Não impede o pedido principal, salvo se o motivo for prescrição ou decadência.`,`art. 310`]]},
{t:`table`,h:`Evidência (art. 311)`,head:[`Inciso`,`Hipótese`,`Liminar?`],rows:[[`I`,`Abuso do direito de defesa ou propósito protelatório do réu`,`Não`],[`II`,`Fatos provados por documento e tese em repetitivo ou súmula vinculante`,`Sim`],[`III`,`Pedido de devolução fundado em prova documental de contrato de depósito`,`Sim`],[`IV`,`Prova documental suficiente do autor sem contraprova capaz de gerar dúvida razoável`,`Não`]]},
{t:`callout`,kind:`brass`,title:`Por que só II e III admitem liminar`,html:`<p>Em I e IV, a evidência depende do comportamento ou da defesa do réu; sem ouvi-lo, não há como saber se houve abuso ou se a defesa é fraca. Em II e III, o documento e o precedente bastam.</p>`},
{t:`vs`,h:`Emenda × aditamento`,l:{t:`Emenda`,i:[`Quem pede: o juiz`,`Para corrigir vício da inicial`,`${a(`art. 321`)}`]},r:{t:`Aditamento`,i:[`Quem faz: o autor`,`Para complementar ou ampliar`,`${a(`arts. 303, §1º e 329`)}`]}},
{t:`juris`,h:`Estabilização na jurisprudência`,items:[{court:`STJ`,year:`2018`,id:`REsp 1.760.966`,tese:`Não só o recurso evita a estabilização: a contestação ou outra impugnação do réu também pode afastá-la.`,html:`O tema ainda tem divergência entre as turmas do STJ.`}]}],
quiz:[[`Qual tutela dispensa perigo de dano?`,[`Cautelar`,`Antecipada`,`Evidência`],2,`${a(`art. 311`)}.`],[`Tutela antecipada antecedente concedida, réu não recorreu. Efeito?`,[`Coisa julgada`,`Estabilização`],1,`${a(`art. 304`)}.`],[`Prazo para o pedido principal após efetivar a cautelar:`,[`15 dias`,`30 dias`],1,`${a(`art. 308`)}.`],[`Na evidência por abuso do direito de defesa, cabe liminar?`,[`Sim`,`Não`],1,`Só II e III.`]]},
/* XIV */
{id:`sentenca`,group:`Tutelas e decisão`,title:`Sentença`,
intro:`A sentença encerra a fase de conhecimento. Pode resolver o mérito ou apenas reconhecer que não há como resolvê-lo.`,
blocks:[
{t:`vs`,h:`Terminativa × definitiva`,l:{t:`Sem mérito (art. 485)`,i:[`Indeferimento da inicial`,`Paralisação por mais de 1 ano por negligência das partes`,`Abandono pelo autor por mais de 30 dias`,`Falta de pressupostos processuais`,`Perempção, litispendência ou coisa julgada`,`Ilegitimidade ou falta de interesse`,`Convenção de arbitragem`,`Desistência homologada`,`Morte da parte em ação intransmissível`]},r:{t:`Com mérito (art. 487)`,i:[`Acolher ou rejeitar o pedido`,`Prescrição ou decadência`,`Homologar reconhecimento do pedido`,`Homologar transação`,`Homologar renúncia à pretensão`]}},
{t:`flips`,h:`Detalhes das terminativas`,items:[[`Abandono`,`Antes de extinguir, a parte é intimada pessoalmente para suprir em 5 dias (${a(`art. 485, §1º`)}). Após a contestação, depende de requerimento do réu (${a(`§6º`)}; ${a(`Súmula 240 do STJ`)}).`],[`De ofício`,`Pressupostos, perempção, litispendência, coisa julgada, condições da ação e intransmissibilidade (${a(`§3º`)}).`],[`Retratação`,`Na apelação, o juiz pode se retratar em 5 dias (${a(`§7º`)}).`],[`Repropositura`,`Possível, salvo perempção, litispendência e coisa julgada. Nos casos de inépcia, pressupostos, condições e arbitragem, corrigindo o vício e pagando custas e honorários (${a(`art. 486`)}).`],[`Primazia do mérito`,`Se puder decidir o mérito a favor de quem aproveitaria a extinção, o juiz julga o mérito (${a(`art. 488`)}).`]]},
{t:`steps`,h:`Elementos da sentença (art. 489)`,items:[[`Relatório`,`Nomes das partes, resumo do pedido e da contestação, registro das principais ocorrências.`,`inciso I`],[`Fundamentação`,`Análise das questões de fato e de direito, sem as falhas do §1º.`,`inciso II`],[`Dispositivo`,`Resolve as questões principais. É a parte que transita em julgado.`,`inciso III`]]},
{t:`sorter`,h:`Que vício tem a sentença?`,bins:[`Ultra petita`,`Extra petita`,`Citra petita`],cards:[
[`Pediu R$ 10 mil de dano moral; o juiz deu R$ 15 mil.`,0,`Foi além do pedido: reduz-se ao limite.`],
[`Pediu rescisão do contrato; o juiz declarou nulidade de outro contrato.`,1,`Decidiu fora do pedido: nula nessa parte.`],
[`Pediu dano material e moral; a sentença ignorou o moral.`,2,`Omissão: cabem embargos de declaração.`]]},
{t:`chooser`,h:`Outras regras`,items:[[`Congruência`,`Limite do pedido`,`<p>É vedado decidir de natureza diversa, condenar em quantidade superior ou objeto diverso (${a(`arts. 141 e 492`)}). A decisão deve ser certa, ainda que a relação seja condicional.</p>`],[`Quantia certa`,`Tudo explicitado`,`<p>Fixa a extensão da obrigação, o índice de correção, a taxa e o termo inicial dos juros e a capitalização (${a(`art. 491`)}).</p>`],[`Fato novo`,`Considerado`,`<p>Fato constitutivo, modificativo ou extintivo superveniente é considerado de ofício ou a pedido, ouvidas as partes (${a(`art. 493`)}).</p>`],[`Depois de publicada`,`Só erro material ou embargos`,`<p>${a(`art. 494`)}.</p>`],[`Hipoteca judiciária`,`Garantia imediata`,`<p>A sentença condenatória vale como título para hipoteca, mesmo sem trânsito e sem urgência. O credor informa o registro ao juízo em 15 dias e responde objetivamente se a sentença cair (${a(`art. 495`)}).</p>`],[`Remessa necessária`,`Sentença contra a Fazenda`,`<p>Sobe ao tribunal sem recurso, salvo abaixo de 1.000 salários mínimos (União), 500 (Estados e capitais) ou 100 (demais municípios), ou se fundada em precedente vinculante (${a(`art. 496`)}).</p>`]]}],
quiz:[[`Abandono pelo autor após a contestação. O juiz extingue de ofício?`,[`Sim`,`Não, depende de requerimento do réu`],1,`${a(`Súmula 240 do STJ`)}.`],[`Prescrição gera sentença:`,[`terminativa`,`de mérito`],1,`${a(`art. 487, II`)}.`],[`Sentença que dá mais do que o pedido é:`,[`extra petita`,`ultra petita`],1,`Excede a quantidade.`]]},
/* XV */
{id:`coisajulgada`,group:`Tutelas e decisão`,title:`Coisa julgada`,
intro:`Coisa julgada é a autoridade que torna a decisão de mérito imutável e indiscutível quando não cabe mais recurso (art. 502). É a lei entre as partes.`,
blocks:[
{t:`vs`,h:`Formal × material`,l:{t:`Formal`,i:[`Imutabilidade dentro do processo`,`Atinge também sentenças terminativas`,`Permite repropor a ação`]},r:{t:`Material`,i:[`Imutabilidade fora do processo`,`Só decisões de mérito`,`Impede nova ação idêntica`]}},
{t:`flips`,h:`Limites`,items:[[`Objetivos`,`Faz coisa julgada o dispositivo, nos limites da questão principal (${a(`art. 503`)}).`],[`Prejudicial`,`A questão prejudicial decidida expressa e incidentemente também transita se dela depender o mérito, houver contraditório efetivo (não vale na revelia) e o juízo for competente para ela como questão principal (${a(`art. 503, §1º`)}).`],[`O que não transita`,`Os motivos, ainda que importantes, e a verdade dos fatos (${a(`art. 504`)}).`],[`Subjetivos`,`Vale para as partes e não prejudica terceiros (${a(`art. 506`)}).`],[`Trato continuado`,`Alterado o estado de fato ou de direito, pode-se rever, como na revisão de alimentos (${a(`art. 505, I`)}).`],[`Eficácia preclusiva`,`Consideram-se deduzidas e repelidas todas as alegações que a parte poderia ter feito (${a(`art. 508`)}).`]]},
{t:`keys`,h:`Para desfazer a coisa julgada`,items:[[`2`,`anos`,`prazo da ação rescisória, do trânsito da última decisão (${a(`art. 975`)})`],[`966`,`artigo`,`hipóteses taxativas da rescisória`]]}],
quiz:[[`Os fundamentos da sentença transitam em julgado?`,[`Sim`,`Não`],1,`${a(`art. 504`)}.`],[`A sentença pode prejudicar terceiro que não participou?`,[`Sim`,`Não`],1,`${a(`art. 506`)}.`],[`Prazo da rescisória:`,[`1 ano`,`2 anos`,`5 anos`],1,`${a(`art. 975`)}.`]]},
/* XVI */
{id:`arbitragem`,group:`Tutelas e decisão`,title:`Arbitragem`,
intro:`A arbitragem é uma jurisdição privada: as partes escolhem quem vai julgar, e a decisão vale como sentença.`,
blocks:[
{t:`flips`,h:`O essencial da Lei 9.307/96`,items:[[`Objeto`,`Só direitos patrimoniais disponíveis (${a(`art. 1º`)}). A Administração Pública também pode usar (§1º).`],[`Convenção`,`Cláusula compromissória (antes do conflito, no contrato) ou compromisso arbitral (depois do conflito) (${a(`art. 3º`)}).`],[`Árbitro`,`Pessoa capaz da confiança das partes, não precisa ser jurista. É juiz de fato e de direito (${a(`art. 18`)}).`],[`Sentença`,`Não se sujeita a recurso nem homologação, e tem os mesmos efeitos da judicial; se condenatória, é título executivo judicial (${a(`art. 31`)}; ${a(`CPC, art. 515, VII`)}).`],[`Urgência`,`Antes de instituída a arbitragem, a parte pede tutela ao Judiciário; depois, os árbitros mantêm ou revogam (${a(`arts. 22-A e 22-B`)}).`],[`Anulação`,`Ação em 90 dias (${a(`art. 33`)}).`]]},
{t:`callout`,kind:`sage`,title:`No processo civil`,html:`<p>A convenção de arbitragem é preliminar da contestação que o juiz não conhece de ofício (${a(`art. 337, X e §5º`)}). Se o réu não alegar, entende-se que renunciou ao juízo arbitral (§6º). Acolhida, o processo é extinto sem mérito (${a(`art. 485, VII`)}). A cooperação entre árbitro e juiz se faz por carta arbitral (${a(`art. 237, IV`)}). O STF reconheceu a constitucionalidade da lei (SE 5.206, 2001).</p>`},
{t:`arts`,h:`Os artigos-chave da matéria`,items:[[`Art. 319`,`Inicial`,`Requisitos da petição inicial.`],[`Art. 332`,`Improcedência liminar`,`Julgamento do pedido antes da citação.`],[`Art. 334`,`Audiência`,`Conciliação ou mediação inicial.`],[`Art. 335`,`Contestação`,`Termo inicial do prazo de 15 dias.`],[`Art. 337`,`Preliminares`,`Matérias processuais da defesa.`],[`Art. 344`,`Revelia`,`Presunção de veracidade dos fatos.`],[`Art. 357`,`Saneamento`,`Organização da fase de provas.`],[`Art. 300`,`Urgência`,`Probabilidade do direito e perigo de dano.`],[`Art. 311`,`Evidência`,`Tutela sem perigo de dano.`],[`Art. 502`,`Coisa julgada`,`Imutabilidade da decisão de mérito.`]]}],
quiz:[[`Cabe arbitragem sobre guarda de filhos?`,[`Sim`,`Não, é direito indisponível`],1,`${a(`Lei 9.307/96, art. 1º`)}.`],[`Sentença arbitral precisa ser homologada pelo juiz?`,[`Sim`,`Não`],1,`${a(`art. 18`)}.`],[`O réu não alegou a cláusula arbitral. Efeito?`,[`Extinção de ofício`,`Renúncia ao juízo arbitral`],1,`${a(`CPC, art. 337, §6º`)}.`]]}
);

defPackCourse(PK.c,{"area": "Direito Processual", "seed": false});
})();
