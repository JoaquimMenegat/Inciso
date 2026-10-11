/* ================= Matéria: Organização do Estado e Direito Eleitoral ================= */
const OE_TOPICS=[
 {id:'oe-pc',nome:'Poder constituinte',mod:1},
 {id:'oe-el',nome:'Direito eleitoral',mod:2},
 {id:'oe-fed',nome:'Federação e competências',mod:3},
 {id:'oe-pod',nome:'Poderes e estados de crise',mod:4}
];
const OE_MODS=[
 {n:1,u:'A',tit:'Poder constituinte e emendas',t:'oe-pc',live:'oe-pc'},
 {n:2,u:'A',tit:'Direitos políticos e inelegibilidades',t:'oe-el',live:'oe-el'},
 {n:3,u:'B',tit:'Federação, competências e intervenção',t:'oe-fed',live:'oe-fed'},
 {n:4,u:'B',tit:'Processo legislativo e estados de crise',t:'oe-pod',live:'oe-pod'}
];
const OE_UNITS=[['A','Parte I · Constituinte e eleições'],['B','Parte II · Organização do Estado']];
const OE_BANK=[
 {id:'ep1',t:'oe-pc',q:'O poder constituinte originário deve respeitar o direito adquirido da ordem anterior?',o:['Sim','Não: é inicial, ilimitado e incondicionado juridicamente','Só quanto à propriedade'],a:1,e:'O originário rompe com a ordem anterior e não está preso a ela.',art:'Doutrina; STF'},
 {id:'ep2',t:'oe-pc',q:'Quem NÃO pode propor emenda à Constituição Federal?',o:['O Presidente da República','1/3 dos deputados','1% do eleitorado, por iniciativa popular'],a:2,e:'A Constituição não prevê iniciativa popular de PEC no âmbito federal.',art:'CF, art. 60, I a III'},
 {id:'ep3',t:'oe-pc',q:'Qual o quórum para aprovar uma emenda constitucional?',o:['Maioria absoluta, em um turno','3/5, em dois turnos, em cada Casa','2/3 no Senado'],a:1,e:'A proposta é discutida e votada em cada Casa, em dois turnos, considerando-se aprovada se obtiver 3/5 dos votos.',art:'CF, art. 60, §2º'},
 {id:'ep4',t:'oe-pc',q:'A Constituição pode ser emendada durante uma intervenção federal?',o:['Sim','Não: é limite circunstancial','Só com aprovação do STF'],a:1,e:'A Constituição não pode ser emendada na vigência de intervenção federal, estado de defesa ou estado de sítio.',art:'CF, art. 60, §1º'},
 {id:'ee1',t:'oe-el',q:'Uma lei que altera o processo eleitoral é publicada 8 meses antes da eleição. Ela se aplica a essa eleição?',o:['Sim','Não: só às eleições que ocorrerem depois de um ano de sua vigência','Só se o TSE autorizar'],a:1,e:'A lei entra em vigor na publicação, mas não se aplica à eleição que ocorra até um ano da sua vigência.',art:'CF, art. 16'},
 {id:'ee2',t:'oe-el',q:'O analfabeto pode votar e ser votado?',o:['Pode votar, mas é inelegível','Não pode votar nem ser votado','Pode as duas coisas'],a:0,e:'O voto é facultativo para os analfabetos, mas eles são inelegíveis.',art:'CF, art. 14, §1º, II, a e §4º'},
 {id:'ee3',t:'oe-el',q:'O irmão do governador quer se candidatar a deputado estadual no mesmo Estado. Pode?',o:['Sim, livremente','Não, em nenhuma hipótese','Só se o governador renunciar 6 meses antes'],a:2,e:'São inelegíveis, no território de jurisdição do titular, os parentes até o 2º grau, salvo se o titular renunciar 6 meses antes ou se o parente já for titular de mandato e candidato à reeleição.',art:'CF, art. 14, §7º; TSE'},
 {id:'ee4',t:'oe-el',q:'Para concorrer a senador, o governador precisa:',o:['Nada','Renunciar ao mandato até 6 meses antes do pleito','Pedir licença de 3 meses'],a:1,e:'Para concorrer a outros cargos, os chefes do Executivo devem renunciar aos mandatos até seis meses antes do pleito.',art:'CF, art. 14, §6º'},
 {id:'ef1',t:'oe-fed',q:'Legislar sobre direito penal é competência:',o:['Comum','Privativa da União','Concorrente'],a:1,e:'Compete privativamente à União legislar sobre direito civil, penal, processual, eleitoral, do trabalho, entre outros.',art:'CF, art. 22, I'},
 {id:'ef2',t:'oe-fed',q:'Na competência concorrente, se não houver lei federal de normas gerais, o Estado:',o:['Não pode legislar','Exerce a competência legislativa plena','Precisa de autorização da União'],a:1,e:'Inexistindo lei federal sobre normas gerais, os Estados exercem a competência legislativa plena.',art:'CF, art. 24, §3º'},
 {id:'ef3',t:'oe-fed',q:'Sobrevindo lei federal de normas gerais, a lei estadual em contrário:',o:['É revogada','Tem a eficácia suspensa no que for contrária','Continua valendo integralmente'],a:1,e:'A superveniência de lei federal sobre normas gerais suspende a eficácia da lei estadual, no que lhe for contrário.',art:'CF, art. 24, §4º'},
 {id:'ef4',t:'oe-fed',q:'Quem decreta a intervenção federal?',o:['O Congresso Nacional','O Presidente da República','O STF'],a:1,e:'Compete privativamente ao Presidente decretar e executar a intervenção federal.',art:'CF, art. 84, X'},
 {id:'ed1',t:'oe-pod',q:'Que quórum aprova lei complementar?',o:['Maioria simples','Maioria absoluta','3/5'],a:1,e:'As leis complementares serão aprovadas por maioria absoluta.',art:'CF, art. 69'},
 {id:'ed2',t:'oe-pod',q:'O estado de sítio, em caso de comoção grave de repercussão nacional, depende de:',o:['Decreto do Presidente, com controle posterior do Congresso','Autorização prévia do Congresso Nacional, por maioria absoluta','Decisão do STF'],a:1,e:'O Presidente solicita ao Congresso autorização para decretar o estado de sítio.',art:'CF, art. 137'},
 {id:'ed3',t:'oe-pod',q:'O estado de defesa pode durar quanto?',o:['Até 30 dias, prorrogável uma vez por igual período','Até 90 dias','Indefinidamente'],a:0,e:'O tempo de duração não será superior a 30 dias, podendo ser prorrogado uma vez.',art:'CF, art. 136, §2º'},
 {id:'ed4',t:'oe-pod',q:'Tratados internacionais de direitos humanos aprovados sem o rito de emenda têm que posição?',o:['Lei ordinária','Supralegal: acima das leis, abaixo da Constituição','Emenda constitucional'],a:1,e:'O STF fixou o status supralegal desses tratados.',art:'STF, RE 466.343'}
];
const OE_CARDS=[
 {id:'oec1',t:'oe-pc',f:'Originário × derivado',b:'Originário: inicial, ilimitado juridicamente, incondicionado. Derivado: limitado, condicionado e subordinado à Constituição.',art:'Doutrina'},
 {id:'oec2',t:'oe-pc',f:'Limites ao poder de emenda',b:'Formais (iniciativa e 3/5 em dois turnos), circunstanciais (intervenção, defesa, sítio) e materiais (cláusulas pétreas).',art:'CF, art. 60'},
 {id:'oec3',t:'oe-el',f:'Anualidade eleitoral',b:'A lei que altera o processo eleitoral vige desde a publicação, mas não se aplica à eleição que ocorra até um ano depois.',art:'CF, art. 16'},
 {id:'oec4',t:'oe-el',f:'Inelegibilidade reflexa',b:'Cônjuge e parentes até o 2º grau do chefe do Executivo são inelegíveis no território de sua jurisdição, salvo se já titulares de mandato e candidatos à reeleição.',art:'CF, art. 14, §7º'},
 {id:'oec5',t:'oe-fed',f:'Competências legislativas',b:'Privativa da União (art. 22, delegável por lei complementar), concorrente (art. 24: União, Estados e DF) e suplementar dos Municípios (art. 30, II).',art:'CF, arts. 22, 24 e 30'},
 {id:'oec6',t:'oe-pod',f:'Estado de defesa × estado de sítio',b:'Defesa: decretado pelo Presidente, controle posterior do Congresso, locais determinados, até 30 + 30 dias. Sítio: exige autorização prévia do Congresso.',art:'CF, arts. 136 e 137'}
];
function pecWiz(){
  return W.wizard({qs:[['inic','Foi proposta por quem a Constituição admite (Presidente, 1/3 de uma Casa ou mais da metade das Assembleias)?'],['quorum','Teve 3/5 dos votos, em dois turnos, nas duas Casas?'],['crise','Está em vigor intervenção federal, estado de defesa ou de sítio?'],['petrea','Tende a abolir alguma cláusula pétrea?']],init:{inic:true,quorum:true,crise:false,petrea:false},
    verdict:a=>!a.inic?{tone:'bad',t:'Inconstitucional: vício de iniciativa',d:'O rol do art. 60, I a III é taxativo. Não há, por exemplo, PEC de iniciativa popular no plano federal.'}:
      !a.quorum?{tone:'bad',t:'Não aprovada',d:'Sem 3/5 em dois turnos em cada Casa, a proposta é rejeitada e não pode ser reapresentada na mesma sessão legislativa (art. 60, §§2º e 5º).'}:
      a.crise?{tone:'bad',t:'Inconstitucional: limite circunstancial',d:'A Constituição não pode ser emendada na vigência de intervenção federal, estado de defesa ou de sítio (art. 60, §1º).'}:
      a.petrea?{tone:'bad',t:'Inconstitucional: limite material',d:'Não é sequer objeto de deliberação a proposta tendente a abolir cláusula pétrea (art. 60, §4º).'}:
      {tone:'ok',t:'Emenda aprovada',d:'Promulgada pelas Mesas da Câmara e do Senado, sem sanção presidencial (art. 60, §3º).'}});
}
function anualidade(){
  const id=uid('an');
  later(()=>{
    const root=$('#'+id),r=$('input',root);
    function render(){const m=+r.value;$('.anm',root).textContent=m+(m===1?' mês':' meses');$('.pimark',root).style.left=Math.min(m,24)/24*100+'%';
      const o=$('.wzout',root),ok=m>=12;o.className='wzout '+(ok?'ok':'bad');
      o.innerHTML=ok?'<b>Vale para esta eleição</b><p>Passou mais de um ano entre a vigência da lei e o pleito (art. 16).</p>':`<b>Não vale para esta eleição</b><p>A lei já está em vigor, mas só se aplica às eleições seguintes. Nesta, continua valendo a regra antiga (ultratividade). Faltariam ${12-m} ${12-m===1?'mês':'meses'}.</p>`}
    r.addEventListener('input',render);render();
  });
  return `<div class="card" id="${id}"><div class="pitrack antrack"><i class="pi5"><span>1 ano</span></i><i class="pimark"></i></div>
    <label class="lab" for="${id}-r">Tempo entre a publicação da lei e a eleição: <output class="anm num"></output></label><input id="${id}-r" type="range" min="0" max="24" value="8"><div class="wzout" aria-live="polite"></div></div>`;
}

defCourse('estado',{nome:'Organização do Estado e Direito Eleitoral',area:'Direito Constitucional',desc:'Poder constituinte, eleições, federação, Poderes e os estados de crise, com simuladores de emenda e de anualidade eleitoral.',topics:OE_TOPICS,mods:OE_MODS,units:OE_UNITS,bank:OE_BANK,cards:OE_CARDS});

defLesson('oe-pc',{
  hero:()=>heroSeal('ORIGINÁRIO • DERIVADO • REFORMADOR • ART. 60 • '),
  title:['Poder','constituinte'],
  lead:'Quem cria a Constituição, quem pode mudá-la e o que nenhuma emenda pode tocar.',
  sections:[
    {id:'tipos',nav:'Originário ou derivado',h:'Originário ou derivado?',lead:'Classifique a característica.',html:()=>W.classify({buckets:['Originário','Derivado'],items:[
      ['Ilimitado juridicamente.',0,'Não se prende a nenhuma ordem anterior.'],
      ['Sujeito a controle de constitucionalidade.',1,'É um poder jurídico, abaixo da Constituição.'],
      ['Não precisa respeitar o direito adquirido da ordem antiga.',0,'Rompe com a ordem anterior.'],
      ['Precisa de 3/5 dos votos em dois turnos.',1,'O reformador segue o procedimento do art. 60.'],
      ['Cria o Estado e a primeira Constituição.',0,'Originário histórico.']]})},
    {id:'pec',nav:'Essa PEC passa?',h:'Essa PEC passa?',lead:'Responda e veja qual limite do art. 60 entra em jogo.',html:pecWiz},
    {id:'limites',nav:'Limites',h:'Os três tipos de limite',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Formais','<em>Quem propõe</em> (art. 60, I a III) e <em>como se vota</em>: 3/5, dois turnos, nas duas Casas.'],
      ['Circunstanciais','Nada de emenda durante <em>intervenção federal, estado de defesa ou de sítio</em>.'],
      ['Materiais','As <em>cláusulas pétreas</em>: federação, voto, separação dos Poderes, direitos individuais.'],
      ['Temporal','A matéria rejeitada só volta na <em>sessão legislativa seguinte</em> (art. 60, §5º).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição.',html:()=>W.arts([
      ['60, I a III','Iniciativa','1/3 da Câmara ou do Senado, o Presidente, ou mais da metade das Assembleias Legislativas.'],
      ['60, §1º','Circunstâncias','Não se emenda a Constituição na vigência de intervenção federal, estado de defesa ou de sítio.'],
      ['60, §2º','Quórum','Discussão e votação em cada Casa, em dois turnos, com 3/5 dos votos.'],
      ['60, §4º','Cláusulas pétreas','Forma federativa; voto direto, secreto, universal e periódico; separação dos Poderes; direitos e garantias individuais.']])}
  ]
});
defLesson('oe-el',{
  hero:()=>heroSeal('SOBERANIA POPULAR • ANUALIDADE • ART. 14 • ART. 16 • '),
  title:['Direitos políticos','e eleições'],
  lead:'Quem pode votar, quem pode ser votado e por que as regras do jogo não mudam perto da eleição.',
  sections:[
    {id:'principios',nav:'Princípios',h:'Princípios do Direito Eleitoral',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Soberania popular','Todo o poder emana do povo, exercido pelo <em>voto direto e secreto</em>, plebiscito, referendo e iniciativa popular.'],
      ['Anualidade','A regra eleitoral nova só vale para eleição <em>mais de um ano</em> depois (art. 16).'],
      ['Lisura','Proteção da <em>legitimidade</em> das eleições contra abuso de poder e fraude.'],
      ['Majoritário e proporcional','Majoritário para chefes do Executivo e senadores; <em>proporcional</em> para deputados e vereadores.']])},
    {id:'anualidade',nav:'Anualidade',h:'A lei nova vale para esta eleição?',lead:'Mova o tempo entre a publicação da lei e o pleito.',html:anualidade},
    {id:'inelegibilidade',nav:'Inelegibilidades',h:'Pode se candidatar?',lead:'Classifique pelas regras do art. 14.',html:()=>W.classify({buckets:['Elegível','Inelegível'],items:[
      ['Um cidadão analfabeto quer ser vereador.',1,'Os analfabetos são inelegíveis (art. 14, §4º).'],
      ['O prefeito reeleito quer um terceiro mandato seguido no mesmo município.',1,'Só uma reeleição para período subsequente (art. 14, §5º).'],
      ['O cunhado do Presidente da República quer ser vereador.',1,'Afim de 2º grau; a jurisdição do Presidente é todo o país (art. 14, §7º).'],
      ['O primo do prefeito quer ser vereador no mesmo município.',0,'Primo é parente de 4º grau; a restrição vai até o 2º.'],
      ['Uma deputada estadual, filha do governador, disputa a reeleição.',0,'Exceção: já titular de mandato e candidata à reeleição (art. 14, §7º).']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição.',html:()=>W.arts([
      ['14','Soberania popular','Exercida pelo sufrágio universal e pelo voto direto e secreto, com valor igual para todos.'],
      ['14, §4º','Inelegíveis','São inelegíveis os inalistáveis e os analfabetos.'],
      ['14, §5º','Reeleição','Os chefes do Executivo podem ser reeleitos para um único período subsequente.'],
      ['14, §7º','Reflexa','Cônjuge e parentes até o 2º grau são inelegíveis no território de jurisdição do titular.'],
      ['16','Anualidade','A lei que alterar o processo eleitoral não se aplica à eleição que ocorra até um ano da data de sua vigência.']])}
  ]
});
defLesson('oe-fed',{
  hero:()=>heroSeal('UNIÃO • ESTADOS • DISTRITO FEDERAL • MUNICÍPIOS • '),
  title:['Federação','e competências'],
  lead:'Como a Constituição divide o poder entre os entes, e quando a União pode intervir.',
  sections:[
    {id:'competencias',nav:'Competências',h:'Que tipo de competência?',lead:'Classifique pelo artigo da Constituição.',html:()=>W.classify({buckets:['Exclusiva (21)','Privativa (22)','Comum (23)','Concorrente (24)'],items:[
      ['Emitir moeda.',0,'Ato material que só a União pratica (art. 21, VII).'],
      ['Legislar sobre direito penal.',1,'Privativa da União, delegável por lei complementar (art. 22, I).'],
      ['Cuidar da saúde e proteger o meio ambiente.',2,'Tarefa de todos os entes (art. 23, II e VI).'],
      ['Legislar sobre direito tributário e orçamento.',3,'União, Estados e DF (art. 24, I).'],
      ['Declarar guerra e celebrar a paz.',0,'Art. 21, II.'],
      ['Legislar sobre trânsito e transporte.',1,'Art. 22, XI.']]})},
    {id:'concorrente',nav:'Concorrente',h:'Como funciona a competência concorrente',lead:'A divisão entre normas gerais e específicas, passo a passo.',html:()=>W.timeline({steps:[
      {t:'A União edita normas gerais',s:'art. 24, §1º',d:'A competência da União limita-se a estabelecer normas gerais.'},
      {t:'O Estado suplementa',s:'art. 24, §2º',d:'Os Estados detalham, dentro das normas gerais da União.'},
      {t:'Não há lei federal',s:'art. 24, §3º',d:'O Estado exerce a competência legislativa plena, para atender a suas peculiaridades.'},
      {t:'Vem a lei federal',s:'art. 24, §4º',d:'A lei federal superveniente suspende a eficácia da lei estadual no que lhe for contrário. Não revoga.'}]})},
    {id:'intervencao',nav:'Intervenção',h:'Intervenção federal',lead:'A retirada temporária da autonomia de um ente, só nos casos da Constituição.',html:()=>W.flips([
      ['Quem decreta','Sempre o <em>chefe do Executivo</em>: o Presidente na federal, o Governador na estadual.'],
      ['Quem é ouvido','O <em>Conselho da República</em> e o <em>de Defesa Nacional</em>, cuja opinião não vincula.'],
      ['Hipóteses','Integridade nacional, invasão, grave comprometimento da ordem, finanças, princípios sensíveis (art. 34). <em>Rol taxativo</em>.'],
      ['Controle','O decreto vai ao <em>Congresso</em> em 24 horas, salvo nas hipóteses de requisição judicial.']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição.',html:()=>W.arts([
      ['18','Autonomia','A organização político-administrativa compreende a União, os Estados, o DF e os Municípios, todos autônomos.'],
      ['22','Privativa','Compete privativamente à União legislar sobre direito civil, penal, processual, eleitoral, do trabalho, entre outros.'],
      ['24','Concorrente','União, Estados e DF legislam concorrentemente sobre direito tributário, financeiro, econômico, urbanístico, entre outros.'],
      ['30','Municípios','Compete aos Municípios legislar sobre assuntos de interesse local e suplementar a legislação federal e estadual.'],
      ['34','Intervenção','A União não intervirá nos Estados nem no DF, exceto nas hipóteses taxativas do artigo.']])}
  ]
});
defLesson('oe-pod',{
  hero:()=>heroSeal('LEGISLATIVO • EXECUTIVO • JUDICIÁRIO • DEFESA • SÍTIO • '),
  title:['Poderes','e crises'],
  lead:'Como uma lei nasce e quais medidas excepcionais a Constituição permite em tempos de crise.',
  sections:[
    {id:'processo',nav:'Processo legislativo',h:'Como nasce uma lei ordinária',lead:'Avance pelas fases.',html:()=>W.timeline({steps:[
      {t:'Iniciativa',s:'art. 61',d:'Parlamentares, comissões, Presidente, STF, tribunais superiores, PGR e cidadãos (1% do eleitorado em 5 Estados).'},
      {t:'Discussão e votação',s:'arts. 64 e 65',d:'Casa iniciadora e casa revisora. Lei ordinária: maioria simples; complementar: maioria absoluta (art. 69).'},
      {t:'Sanção ou veto',s:'art. 66',d:'O Presidente sanciona ou veta em 15 dias úteis. O silêncio importa sanção. O veto pode ser derrubado pela maioria absoluta do Congresso.'},
      {t:'Promulgação e publicação',s:'art. 66, §7º',d:'Atesta-se a existência da lei e ela é levada ao conhecimento de todos.'}]})},
    {id:'crises',nav:'Defesa e sítio',h:'Estado de defesa ou estado de sítio',lead:'Compare as duas medidas.',html:()=>W.tabs([
      {l:'Estado de defesa',html:`<div class="card">${propsTable([['Motivo','Grave instabilidade institucional ou calamidade'],['Quem decreta','Presidente, ouvidos os Conselhos'],['Congresso','Controle posterior, em 24 horas','warn'],['Abrangência','Locais restritos e determinados'],['Prazo','Até 30 dias, prorrogável uma vez']])}</div>`},
      {l:'Estado de sítio',html:`<div class="card">${propsTable([['Motivo','Comoção grave nacional, defesa ineficaz, guerra ou agressão armada'],['Quem decreta','Presidente, com autorização prévia','bad'],['Congresso','Autoriza antes, por maioria absoluta','bad'],['Abrangência','Pode ser nacional'],['Prazo','30 dias por vez; na guerra, enquanto durar']])}</div>`}])},
    {id:'normas',nav:'Hierarquia',h:'Onde está cada norma',lead:'Classifique na pirâmide.',html:()=>W.classify({buckets:['Constitucional','Supralegal','Legal','Infralegal'],items:[
      ['Uma emenda constitucional.',0,'Integra a própria Constituição.'],
      ['O Pacto de San José da Costa Rica, aprovado antes da EC 45/2004.',1,'Tratado de direitos humanos sem o rito de emenda (STF, RE 466.343).'],
      ['Uma lei complementar.',2,'Ato normativo primário.'],
      ['Uma portaria de um ministério.',3,'Ato secundário, que regulamenta a lei.'],
      ['Um tratado de direitos humanos aprovado com 3/5 em dois turnos.',0,'Equivale a emenda constitucional (art. 5º, §3º).']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição.',html:()=>W.arts([
      ['61','Iniciativa','Cabe a qualquer membro ou comissão, ao Presidente, ao STF, aos tribunais superiores, ao PGR e aos cidadãos.'],
      ['66','Sanção e veto','O Presidente sanciona ou veta em 15 dias úteis; o silêncio importa sanção.'],
      ['69','Lei complementar','As leis complementares serão aprovadas por maioria absoluta.'],
      ['136','Estado de defesa','Para preservar ou restabelecer a ordem pública ou a paz social em locais restritos e determinados.'],
      ['137','Estado de sítio','O Presidente pode, ouvidos os Conselhos, solicitar ao Congresso autorização para decretar o estado de sítio.']])}
  ]
});
