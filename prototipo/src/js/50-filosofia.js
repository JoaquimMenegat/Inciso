/* ================= Matéria: Filosofia e Argumentação Jurídica ================= */
const FI_TOPICS=[
 {id:'fi-nat',nome:'Jusnaturalismo',mod:1},
 {id:'fi-con',nome:'Contratualistas',mod:2},
 {id:'fi-pos',nome:'Positivismo e pós-positivismo',mod:3},
 {id:'fi-raw',nome:'Rawls e seus críticos',mod:4}
];
const FI_MODS=[
 {n:1,u:'A',tit:'Jusnaturalismo antigo e clássico',t:'fi-nat',live:'fi-nat'},
 {n:2,u:'A',tit:'Hobbes, Locke e Rousseau',t:'fi-con',live:'fi-con'},
 {n:3,u:'B',tit:'Positivismo jurídico e sua crise',t:'fi-pos',live:'fi-pos'},
 {n:4,u:'B',tit:'Rawls, Nozick e Sandel',t:'fi-raw',live:'fi-raw'}
];
const FI_UNITS=[['A','Parte I · Direito natural e contrato social'],['B','Parte II · Direito positivo e justiça']];
const FI_BANK=[
 {id:'fn1',t:'fi-nat',q:'Para os gregos, o fundamento do direito natural estava:',o:['Na vontade de Deus','Na natureza ordenada, o cosmos','Na razão humana'],a:1,e:'É a concepção cosmológica. A teológica é medieval; a antropológica, moderna.',art:'Jusnaturalismo'},
 {id:'fn2',t:'fi-nat',q:'Na tragédia Antígona, a protagonista desobedece à ordem de Creonte em nome de:',o:['Uma lei escrita mais nova','Leis não escritas e eternas, superiores à ordem do rei','A vontade do povo'],a:1,e:'É a imagem clássica do conflito entre direito natural e direito positivo.',art:'Sófocles'},
 {id:'fn3',t:'fi-nat',q:'Quem distingue direito e justiça, com base na experiência concreta?',o:['Platão','Aristóteles','Hobbes'],a:1,e:'Platão tem visão idealista que confunde direito e moral; Aristóteles é mais realista.',art:'Platão × Aristóteles'},
 {id:'fc1',t:'fi-con',q:'Para Hobbes, o estado de natureza é:',o:['Pacífico e harmonioso','Estado de guerra de todos contra todos','O bom selvagem'],a:1,e:'Sem leis e com todos livres, o homem é o lobo do homem; a saída é o Leviatã.',art:'Hobbes, Leviatã'},
 {id:'fc2',t:'fi-con',q:'Qual contratualista põe a propriedade, adquirida pelo trabalho, antes do Estado?',o:['Hobbes','Locke','Rousseau'],a:1,e:'Para Locke, o Estado existe para proteger direitos naturais anteriores, como a propriedade.',art:'Locke, Segundo Tratado'},
 {id:'fc3',t:'fi-con',q:'"O homem nasce bom; a sociedade o corrompe." De quem é a ideia?',o:['Hobbes','Locke','Rousseau'],a:2,e:'O bom selvagem de Rousseau era livre e igual; a propriedade inaugura a desigualdade.',art:'Rousseau'},
 {id:'fc4',t:'fi-con',q:'A "vontade geral" é conceito de:',o:['Rousseau','Hobbes','Kelsen'],a:0,e:'O contrato social de Rousseau funda a soberania na vontade geral do povo.',art:'Rousseau, Do Contrato Social'},
 {id:'fp1',t:'fi-pos',q:'Para Kelsen, o que dá validade a uma norma?',o:['Seu conteúdo justo','Outra norma superior, até a norma fundamental','O costume'],a:1,e:'Na Teoria Pura, a validade vem do escalonamento normativo, não do conteúdo moral.',art:'Kelsen, Teoria Pura do Direito'},
 {id:'fp2',t:'fi-pos',q:'Que acontecimento pôs o positivismo em crise?',o:['A Revolução Francesa','Os totalitarismos e a barbárie "legal" da 2ª Guerra','A Constituição americana'],a:1,e:'Atrocidades praticadas sob a forma da lei levaram a reaproximar direito e moral.',art:'Barroso'},
 {id:'fp3',t:'fi-pos',q:'Uma marca do pós-positivismo é:',o:['Negar força normativa aos princípios','Reconhecer a normatividade dos princípios','Voltar ao direito natural teológico'],a:1,e:'Princípios passam a ser normas, ao lado das regras, com centralidade dos direitos fundamentais.',art:'Pós-positivismo'},
 {id:'fp4',t:'fi-pos',q:'Para Hart, o sistema jurídico une regras primárias a regras secundárias. A principal secundária é:',o:['A regra de reconhecimento','A norma hipotética fundamental','A vontade geral'],a:0,e:'A regra de reconhecimento identifica o que conta como direito válido.',art:'Hart, O Conceito de Direito'},
 {id:'fr1',t:'fi-raw',q:'Na posição original de Rawls, as partes decidem sob:',o:['Pleno conhecimento de sua posição social','O véu da ignorância','A vontade do soberano'],a:1,e:'Sem saber seu lugar na sociedade, as partes escolhem princípios imparciais.',art:'Rawls, Uma Teoria da Justiça'},
 {id:'fr2',t:'fi-raw',q:'O princípio da diferença admite desigualdades quando:',o:['Beneficiam os mais talentosos','Beneficiam os menos favorecidos','O mercado decide'],a:1,e:'Desigualdades econômicas só se justificam se melhorarem a situação dos menos favorecidos.',art:'Rawls'},
 {id:'fr3',t:'fi-raw',q:'"Tributar renda para redistribuir é como impor trabalho forçado." A crítica é de:',o:['Sandel','Nozick','Rawls'],a:1,e:'Nozick, libertário, defende a autopropriedade e o Estado mínimo.',art:'Nozick, Anarquia, Estado e Utopia'},
 {id:'fr4',t:'fi-raw',q:'A crítica do "eu desvinculado" ao sujeito rawlsiano é de:',o:['Sandel, comunitarista','Nozick, libertário','Hobbes'],a:0,e:'Para Sandel, não escolhemos princípios despidos de vínculos, comunidade e concepções de bem.',art:'Sandel'}
];
const FI_CARDS=[
 {id:'fic1',t:'fi-nat',f:'Três fundamentos do direito natural',b:'Cosmológico (gregos: a natureza), teológico (medievais: a razão divina) e antropológico (modernos: a razão humana).',art:'Jusnaturalismo'},
 {id:'fic2',t:'fi-con',f:'Hobbes × Locke × Rousseau',b:'Hobbes: estado de guerra, Estado máximo. Locke: direitos naturais e propriedade, Estado liberal. Rousseau: bom selvagem, vontade geral, Estado democrático.',art:'Contratualismo'},
 {id:'fic3',t:'fi-pos',f:'Três positivismos',b:'Kelsen: validade pela norma superior (Teoria Pura). Hart: regras primárias e secundárias, regra de reconhecimento. Bobbio: positivismo como método, teoria e ideologia.',art:'Positivismo jurídico'},
 {id:'fic4',t:'fi-pos',f:'Pós-positivismo',b:'Reaproxima direito e moral, dá força normativa aos princípios e põe os direitos fundamentais no centro.',art:'Pós-positivismo'},
 {id:'fic5',t:'fi-raw',f:'Os dois princípios de Rawls',b:'1º: liberdades básicas iguais para todos. 2º: igualdade equitativa de oportunidades e princípio da diferença, a favor dos menos favorecidos.',art:'Rawls'},
 {id:'fic6',t:'fi-raw',f:'Críticos de Rawls',b:'Nozick (libertário): processos justos importam, não padrões; tributar é trabalho forçado. Sandel (comunitarista): não existe "eu desvinculado"; o bem vem antes do justo.',art:'Nozick e Sandel'}
];
function veu(){
  const id=uid('veu');
  const SOC=[['A',[10,40,90,160],'Muito desigual e muito rica no topo'],['B',[25,35,45,55],'Mais igual, com piso mais alto'],['C',[5,60,70,80],'Média alta, mas um grupo abandonado']];
  later(()=>{
    const root=$('#'+id);let pick=null,pos=null;
    function render(){
      $$('.soc',root).forEach((el,i)=>{el.classList.toggle('sel',pick===i);$$('.socb i',el).forEach((b,k)=>{b.classList.toggle('me',pick===i&&pos===k)})});
      const o=$('.wzout',root);
      if(pick==null){o.className='wzout';o.innerHTML='<b>Escolha uma sociedade</b><p>Você não sabe em qual dos quatro grupos vai nascer. Cada barra é a renda de um grupo.</p>';return}
      const s=SOC[pick],v=s[1][pos],best=SOC.reduce((b,x,i)=>Math.min(...x[1])>Math.min(...SOC[b][1])?i:b,0);
      o.className='wzout '+(pick===best?'ok':'warn');
      o.innerHTML=`<b>Você nasceu no grupo ${pos+1}: renda ${v}</b><p>${pick===best?'Você escolheu como Rawls: a sociedade em que o pior lugar é o melhor possível (critério maximin). Sem saber quem você será, garantir o piso é a escolha racional.':`Rawls escolheria a sociedade ${SOC[best][0]}, cujo pior grupo recebe ${Math.min(...SOC[best][1])}. Na ${s[0]}, o pior grupo recebe ${Math.min(...s[1])}: sob o véu da ignorância, você arriscou nascer ali.`}</p>`;swapAnim(o)}
    root.addEventListener('click',e=>{const s=e.target.closest('.soc');if(s){pick=+s.dataset.i;pos=Math.floor(Math.random()*4);render()}});render();
  });
  return `<div id="${id}"><div class="socs">${SOC.map((s,i)=>`<button class="soc" data-i="${i}"><b>Sociedade ${s[0]}</b><div class="socb">${s[1].map(v=>`<i style="height:${v/160*100}%"><span>${v}</span></i>`).join('')}</div><small>${s[2]}</small></button>`).join('')}</div><div class="wzout" aria-live="polite"></div></div>`;
}

defCourse('filosofia',{nome:'Filosofia e Argumentação Jurídica',area:'Formação geral',desc:'Do direito natural grego a Rawls: as grandes respostas sobre o que é o direito e o que é justo.',topics:FI_TOPICS,mods:FI_MODS,units:FI_UNITS,bank:FI_BANK,cards:FI_CARDS});

defLesson('fi-nat',{
  hero:()=>heroSeal('COSMOS • DEUS • RAZÃO • A LEI NÃO ESCRITA • '),
  title:['Direito','natural'],
  lead:'A ideia de que existe um direito anterior e superior às leis escritas, e as três fontes que já lhe deram.',
  sections:[
    {id:'triade',nav:'Três fundamentos',h:'De onde vem o direito natural?',lead:'Classifique a concepção pela época.',html:()=>W.classify({buckets:['Cosmológica','Teológica','Antropológica'],items:[
      ['A justiça é a ordem do próprio universo, que a lei humana deve imitar.',0,'Os gregos: a natureza ordenada.'],
      ['A lei natural é a participação da razão humana na lei eterna de Deus.',1,'Os medievais, como Tomás de Aquino.'],
      ['Todo homem, pela própria razão, conhece direitos que nenhum governo pode tirar.',2,'O jusnaturalismo moderno, iluminista.']]})},
    {id:'antigona',nav:'Antígona',h:'A lei do rei e a lei não escrita',lead:'O primeiro grande conflito entre direito positivo e direito natural.',html:()=>W.flips([
      ['O decreto','Creonte proíbe que <em>Polinices</em>, considerado traidor, seja sepultado.'],
      ['A desobediência','Antígona enterra o irmão, invocando <em>leis não escritas e eternas</em> dos deuses.'],
      ['O ponto','Há algo <em>acima da vontade do governante</em> que a lei não pode violar.'],
      ['Hoje','A ideia ressurge nos <em>direitos humanos</em> e na resistência à lei injusta.']])},
    {id:'platao',nav:'Platão e Aristóteles',h:'Platão ou Aristóteles?',lead:'Classifique a ideia pelo autor.',html:()=>W.classify({buckets:['Platão','Aristóteles'],items:[
      ['Direito e moral se confundem; o justo é uma Ideia perfeita.',0,'Visão idealista e abstrata.'],
      ['Existe o justo por natureza e o justo por convenção.',1,'Distinção que parte da experiência concreta.'],
      ['A equidade corrige a lei quando sua generalidade a torna injusta no caso concreto.',1,'A epieikeia da Ética a Nicômaco.'],
      ['O governo ideal cabe aos filósofos, que contemplam o Bem.',0,'A República.']]})},
    {id:'arts',nav:'Fontes',h:'Obras e autores',lead:'Para citar com segurança.',html:()=>W.arts([
      ['Sófocles','Antígona','A tragédia que opõe o decreto de Creonte às leis não escritas.'],
      ['Platão','A República','O justo como Ideia; o governo dos filósofos.'],
      ['Aristóteles','Ética a Nicômaco','Justiça distributiva e corretiva; equidade como correção da lei.'],
      ['Tomás de Aquino','Suma Teológica','Lei eterna, lei natural e lei humana.']])}
  ]
});
defLesson('fi-con',{
  hero:()=>heroSeal('LEVIATÃ • PROPRIEDADE • VONTADE GERAL • '),
  title:['O contrato','social'],
  lead:'Três respostas para por que obedecemos ao Estado: medo, proteção de direitos ou vontade de todos.',
  sections:[
    {id:'quem',nav:'Quem disse?',h:'Hobbes, Locke ou Rousseau?',lead:'Classifique cada ideia pelo autor.',html:()=>W.classify({buckets:['Hobbes','Locke','Rousseau'],items:[
      ['O homem é o lobo do homem.',0,'Estado de natureza como guerra de todos contra todos.'],
      ['A propriedade nasce do trabalho e é anterior ao Estado.',1,'Direito natural que o Estado deve proteger.'],
      ['O homem nasce livre, e por toda parte está acorrentado.',2,'Abertura do Contrato Social.'],
      ['Só um soberano absoluto garante a paz.',0,'O Leviatã: Estado máximo.'],
      ['O governo que viola os direitos naturais pode ser derrubado.',1,'Direito de resistência.'],
      ['A soberania é a vontade geral, inalienável e indivisível.',2,'Fundamento do Estado democrático.']]})},
    {id:'compara',nav:'Comparação',h:'Lado a lado',lead:'Escolha o autor.',html:()=>W.tabs([
      {l:'Hobbes',html:`<div class="card">${propsTable([['Estado de natureza','Guerra de todos contra todos','bad'],['Natureza humana','Egoísta, movida pelo medo'],['Direitos antes do Estado','Só a autopreservação'],['Estado resultante','Absoluto: o Leviatã'],['Obra','Leviatã (1651)']])}</div>`},
      {l:'Locke',html:`<div class="card">${propsTable([['Estado de natureza','Pacífico, mas inseguro: cada um é juiz','warn'],['Natureza humana','Racional'],['Direitos antes do Estado','Vida, liberdade e propriedade','ok'],['Estado resultante','Liberal, limitado'],['Obra','Segundo Tratado sobre o Governo (1689)']])}</div>`},
      {l:'Rousseau',html:`<div class="card">${propsTable([['Estado de natureza','O bom selvagem, livre e igual','ok'],['Natureza humana','Boa, corrompida pela sociedade'],['Origem da desigualdade','A propriedade privada','bad'],['Estado resultante','Democrático: vontade geral'],['Obra','Do Contrato Social (1762)']])}</div>`}])},
    {id:'arts',nav:'Fontes',h:'Obras e autores',lead:'Para citar com segurança.',html:()=>W.arts([
      ['Hobbes','Leviatã','O pacto transfere ao soberano o poder de garantir a paz; fora dele, a vida é solitária, pobre, sórdida, brutal e curta.'],
      ['Locke','Segundo Tratado','O Estado existe para proteger vida, liberdade e propriedade, e perde legitimidade quando as viola.'],
      ['Rousseau','Do Contrato Social','Cada um se dá a todos e não se dá a ninguém; a soberania é a vontade geral.']])}
  ]
});
defLesson('fi-pos',{
  hero:()=>heroSeal('NORMA FUNDAMENTAL • REGRA DE RECONHECIMENTO • PRINCÍPIOS • '),
  title:['Positivismo','e sua crise'],
  lead:'O direito como norma posta pelo Estado, separado da moral, e por que a segunda metade do século XX reabriu essa porta.',
  sections:[
    {id:'autores',nav:'Os autores',h:'Três positivistas',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Kelsen','A <em>Teoria Pura</em>: o direito é um escalonamento de normas, cuja validade vem da norma superior, até a norma fundamental.'],
      ['Hart','Regras <em>primárias</em> (de conduta) e <em>secundárias</em> (reconhecimento, alteração, julgamento).'],
      ['Bobbio','O positivismo como <em>método</em> (descrever o direito), <em>teoria</em> e <em>ideologia</em> (obedecer à lei).'],
      ['Hobbes','Para alguns, o <em>primeiro positivista</em>: o direito é o que o soberano manda.']])},
    {id:'qual',nav:'Positivista ou pós?',h:'Positivista ou pós-positivista?',lead:'Classifique a tese.',html:()=>W.classify({buckets:['Positivismo','Pós-positivismo'],items:[
      ['Uma norma vale porque foi produzida pela autoridade competente, qualquer que seja seu conteúdo.',0,'Validade formal, separada da moral.'],
      ['Princípios como a dignidade humana são normas e podem afastar uma regra no caso concreto.',1,'Normatividade dos princípios.'],
      ['Ao juiz cabe aplicar a lei; onde ela silencia, há discricionariedade.',0,'Hart admite discricionariedade nos casos difíceis.'],
      ['Direito e moral se reaproximam, com os direitos fundamentais no centro.',1,'A virada do pós-guerra.']]})},
    {id:'crise',nav:'A crise',h:'Por que o positivismo entrou em crise',lead:'Avance pela linha do tempo.',html:()=>W.timeline({steps:[
      {t:'Revoluções burguesas',s:'séc. XVIII',d:'A lei escrita e geral vira garantia contra o arbítrio do rei. O positivismo nasce como conquista de segurança.'},
      {t:'Codificação',s:'séc. XIX',d:'Os códigos prometem completude: o juiz é a "boca da lei".'},
      {t:'Totalitarismos',s:'1933 a 1945',d:'Atrocidades cometidas sob a forma da lei mostram que legalidade não garante justiça.'},
      {t:'Pós-positivismo',s:'pós-guerra',d:'Constituições com força normativa, princípios e direitos fundamentais no centro do sistema.'}]})},
    {id:'arts',nav:'Fontes',h:'Obras e autores',lead:'Para citar com segurança.',html:()=>W.arts([
      ['Kelsen','Teoria Pura do Direito','O direito como ordem normativa escalonada, purificada de elementos morais e sociológicos.'],
      ['Hart','O Conceito de Direito','A união de regras primárias e secundárias; a regra de reconhecimento.'],
      ['Bobbio','O Positivismo Jurídico','Distingue o positivismo como modo de abordar, teoria e ideologia.'],
      ['Barroso','Neoconstitucionalismo','Descreve a virada pós-positivista e a força normativa da Constituição.']])}
  ]
});
defLesson('fi-raw',{
  hero:()=>heroSeal('POSIÇÃO ORIGINAL • VÉU DA IGNORÂNCIA • EQUIDADE • '),
  title:['Justiça','como equidade'],
  lead:'A teoria de Rawls para escolher princípios justos sem saber quem seremos, e as duas críticas mais fortes a ela.',
  sections:[
    {id:'veu',nav:'Véu da ignorância',h:'Escolha sem saber quem você será',lead:'Toque numa sociedade. Depois você descobre em qual grupo nasceu.',html:veu},
    {id:'principios',nav:'Os princípios',h:'Os dois princípios de justiça',lead:'Toque nos cartões.',html:()=>W.flips([
      ['1º · Liberdades iguais','Cada pessoa tem direito ao mais amplo sistema de <em>liberdades básicas iguais</em> compatível com o dos outros.'],
      ['2º · Oportunidades','Cargos e posições abertos a todos, em <em>igualdade equitativa</em> de oportunidades.'],
      ['2º · Diferença','Desigualdades só se justificam se <em>beneficiarem os menos favorecidos</em>.'],
      ['Prioridade','A liberdade vem <em>antes</em>: não se troca liberdade básica por ganho econômico.']])},
    {id:'criticos',nav:'Os críticos',h:'Rawls, Nozick ou Sandel?',lead:'Classifique a tese.',html:()=>W.classify({buckets:['Rawls','Nozick','Sandel'],items:[
      ['Desigualdades só são justas se melhorarem a vida dos que estão pior.',0,'Princípio da diferença.'],
      ['O que importa é se as transferências foram justas, não o desenho final da distribuição.',1,'Teoria da titularidade, histórica.'],
      ['Ninguém escolhe princípios despido de sua comunidade e de suas convicções.',2,'Crítica ao "eu desvinculado".'],
      ['Tributar renda para redistribuir equivale a trabalho forçado.',1,'Autopropriedade e Estado mínimo.'],
      ['Numa sociedade plural, cidadãos de doutrinas diferentes podem apoiar as mesmas instituições.',0,'O consenso sobreposto do Liberalismo Político.'],
      ['O bem comum vem antes do justo.',2,'Comunitarismo, com ecos de Aristóteles.']]})},
    {id:'arts',nav:'Fontes',h:'Obras e autores',lead:'Para citar com segurança.',html:()=>W.arts([
      ['Rawls','Uma Teoria da Justiça (1971)','Posição original, véu da ignorância e os dois princípios.'],
      ['Rawls','O Liberalismo Político (1993)','Pluralismo razoável, consenso sobreposto e razão pública.'],
      ['Nozick','Anarquia, Estado e Utopia (1974)','Libertarismo e Estado mínimo.'],
      ['Sandel','O Liberalismo e os Limites da Justiça (1982)','A crítica comunitarista ao sujeito rawlsiano.']])}
  ]
});
