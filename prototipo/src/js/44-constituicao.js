/* ================= Matéria: Teoria da Constituição e Direitos Fundamentais ================= */
const CO_TOPICS=[
 {id:'co-est',nome:'Constituição e estrutura',mod:1},
 {id:'co-pri',nome:'Princípios fundamentais',mod:2},
 {id:'co-df',nome:'Direitos fundamentais',mod:3}
];
const CO_MODS=[
 {n:1,u:'A',tit:'Constituição, estrutura e fontes',t:'co-est',live:'co-est'},
 {n:2,u:'A',tit:'Princípios fundamentais e cláusulas pétreas',t:'co-pri',live:'co-pri'},
 {n:3,u:'B',tit:'Direitos fundamentais e remédios constitucionais',t:'co-df',live:'co-df'}
];
const CO_UNITS=[['A','Parte I · A Constituição'],['B','Parte II · Direitos fundamentais']];
const CO_BANK=[
 {id:'ce1',t:'co-est',q:'O preâmbulo da Constituição tem força normativa?',o:['Sim, como qualquer artigo','Não: serve como diretriz de interpretação','Só para o STF'],a:1,e:'O STF entende que o preâmbulo não tem força normativa nem serve de parâmetro para controle de constitucionalidade.',art:'STF, ADI 2.076'},
 {id:'ce2',t:'co-est',q:'O Ato das Disposições Constitucionais Transitórias (ADCT) serve para:',o:['Criar direitos permanentes','Fazer a transição entre a ordem antiga e a nova','Listar as cláusulas pétreas'],a:1,e:'O ADCT regula a passagem para a nova ordem constitucional; suas normas tendem a esgotar seus efeitos.',art:'ADCT'},
 {id:'ce3',t:'co-est',q:'Uma súmula vinculante do STF obriga:',o:['Só o próprio STF','Os demais órgãos do Judiciário e a administração pública','Só os juízes de primeiro grau'],a:1,e:'A súmula vinculante tem efeito vinculante em relação aos demais órgãos do Poder Judiciário e à administração pública direta e indireta.',art:'CF, art. 103-A'},
 {id:'ce4',t:'co-est',q:'Em que título da Constituição estão os direitos e garantias fundamentais?',o:['Título I','Título II','Título IV'],a:1,e:'Título II, arts. 5º a 17.',art:'CF, arts. 5º a 17'},
 {id:'cp1',t:'co-pri',q:'A forma de Estado adotada pelo Brasil é:',o:['Unitária','Federativa','Confederativa'],a:1,e:'A República Federativa do Brasil é formada pela união indissolúvel dos Estados, Municípios e do DF.',art:'CF, art. 1º'},
 {id:'cp2',t:'co-pri',q:'Uma emenda constitucional pode abolir o voto secreto?',o:['Sim, com 3/5 dos votos','Não: é cláusula pétrea','Só com plebiscito'],a:1,e:'Não será objeto de deliberação a proposta de emenda tendente a abolir o voto direto, secreto, universal e periódico.',art:'CF, art. 60, §4º, II'},
 {id:'cp3',t:'co-pri',q:'A dignidade da pessoa humana, na Constituição, é:',o:['Um objetivo fundamental','Um fundamento da República','Um princípio das relações internacionais'],a:1,e:'Está entre os fundamentos do art. 1º, ao lado da soberania, cidadania, valores sociais do trabalho e da livre iniciativa e pluralismo político.',art:'CF, art. 1º, III'},
 {id:'cp4',t:'co-pri',q:'"Erradicar a pobreza e a marginalização" está no art. 3º como:',o:['Fundamento','Objetivo fundamental','Cláusula pétrea'],a:1,e:'O art. 3º lista os objetivos fundamentais da República.',art:'CF, art. 3º, III'},
 {id:'cp5',t:'co-pri',q:'Existe hierarquia entre União, Estados e Municípios?',o:['Sim: União acima de todos','Não: todos têm autonomia, com competências diferentes','Só em matéria tributária'],a:1,e:'Os entes federativos são autônomos; a soberania é da República Federativa como um todo.',art:'CF, art. 18'},
 {id:'cd1',t:'co-df',q:'Uma pessoa está presa ilegalmente. Qual o remédio?',o:['Mandado de segurança','Habeas corpus','Habeas data'],a:1,e:'Concede-se habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção.',art:'CF, art. 5º, LXVIII'},
 {id:'cd2',t:'co-df',q:'O órgão público se recusa a mostrar os dados que guarda sobre você. Qual o remédio?',o:['Habeas data','Mandado de injunção','Ação popular'],a:0,e:'Habeas data assegura o conhecimento e a retificação de informações relativas à pessoa do impetrante.',art:'CF, art. 5º, LXXII'},
 {id:'cd3',t:'co-df',q:'Os direitos sociais (saúde, educação, trabalho) são de que dimensão?',o:['Primeira','Segunda','Terceira'],a:1,e:'A segunda dimensão traz os direitos de igualdade, que exigem prestações do Estado.',art:'Doutrina'},
 {id:'cd4',t:'co-df',q:'Direitos fundamentais valem também nas relações entre particulares?',o:['Não, só contra o Estado','Sim: é a eficácia horizontal','Só no direito do trabalho'],a:1,e:'O STF reconhece a eficácia dos direitos fundamentais nas relações privadas.',art:'STF, RE 201.819'},
 {id:'cd5',t:'co-df',q:'Os direitos fundamentais são absolutos?',o:['Sim','Não: podem ser limitados quando colidem com outros','Só os da primeira dimensão'],a:1,e:'Pela relatividade, um direito fundamental pode ceder diante de outro, conforme a ponderação no caso.',art:'Doutrina'}
];
const CO_CARDS=[
 {id:'coc1',t:'co-est',f:'Partes da Constituição',b:'Preâmbulo (sem força normativa), parte dogmática (arts. 1º a 250) e ADCT (transição).',art:'CF/88'},
 {id:'coc2',t:'co-est',f:'Súmula vinculante',b:'Editada pelo STF, vincula o Judiciário e a administração pública. Descumprida, cabe reclamação.',art:'CF, art. 103-A'},
 {id:'coc3',t:'co-pri',f:'Fundamentos da República (art. 1º)',b:'Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa e pluralismo político.',art:'CF, art. 1º'},
 {id:'coc4',t:'co-pri',f:'Cláusulas pétreas',b:'Forma federativa, voto direto, secreto, universal e periódico, separação dos Poderes e direitos e garantias individuais.',art:'CF, art. 60, §4º'},
 {id:'coc5',t:'co-pri',f:'Forma, sistema e regime',b:'Forma de Estado: federação. Forma de governo: república. Sistema: presidencialismo. Regime: democrático.',art:'CF, arts. 1º e 2º'},
 {id:'coc6',t:'co-df',f:'Dimensões dos direitos',b:'1ª: liberdades (abstenção do Estado). 2ª: igualdade, direitos sociais (prestação). 3ª: fraternidade, direitos difusos (meio ambiente).',art:'Doutrina'},
 {id:'coc7',t:'co-df',f:'Remédios constitucionais',b:'Habeas corpus (locomoção), mandado de segurança (direito líquido e certo), habeas data (informações pessoais), mandado de injunção (falta de norma) e ação popular (patrimônio público).',art:'CF, art. 5º, LXVIII a LXXIII'}
];

defCourse('constituicao',{nome:'Teoria da Constituição',area:'Direito Constitucional',desc:'O que é a Constituição, como ela se organiza, os princípios que estruturam o Estado e os direitos fundamentais.',topics:CO_TOPICS,mods:CO_MODS,units:CO_UNITS,bank:CO_BANK,cards:CO_CARDS});

defLesson('co-est',{
  hero:()=>heroSeal('PREÂMBULO • PARTE DOGMÁTICA • ADCT • '),
  title:['A Constituição','e sua estrutura'],
  lead:'A norma que funda o Estado: como ela se organiza por dentro e de onde vêm as interpretações que valem.',
  sections:[
    {id:'partes',nav:'Partes',h:'Três partes, pesos diferentes',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Preâmbulo','Carta de intenções. <em>Não tem força normativa</em>: orienta a interpretação.'],
      ['Parte dogmática','Arts. 1º a 250: <em>a Constituição propriamente dita</em>, com força obrigatória.'],
      ['ADCT','Regras de <em>transição</em> entre a ordem antiga e a nova; tendem a esgotar seus efeitos.'],
      ['Divisões','Artigos, parágrafos, <em>incisos</em> e alíneas, a mesma lógica do "I –" da nossa marca.']])},
    {id:'titulos',nav:'Os títulos',h:'Onde está cada assunto?',lead:'Classifique pelo título da Constituição.',html:()=>W.classify({buckets:['Tít. I · Princípios','Tít. II · Direitos','Tít. III · Estado','Tít. IV · Poderes'],items:[
      ['Os fundamentos da República, como a dignidade da pessoa humana.',0,'Art. 1º.'],
      ['O direito de herança e a inviolabilidade do domicílio.',1,'Art. 5º.'],
      ['As competências da União, dos Estados e dos Municípios.',2,'Arts. 18 a 43.'],
      ['As atribuições do Presidente da República.',3,'Art. 84.'],
      ['Os direitos políticos e os partidos.',1,'Arts. 14 a 17.']]})},
    {id:'fontes',nav:'Fontes',h:'De onde vem o Direito Constitucional',lead:'A Constituição é a fonte principal, mas não a única leitura que importa.',html:()=>W.flips([
      ['Constituição','O texto e seus <em>princípios implícitos</em>.'],
      ['Jurisprudência','Decisões reiteradas dos tribunais, sobretudo do <em>STF</em>, guardião da Constituição.'],
      ['Súmula vinculante','Só o STF edita; <em>obriga</em> o Judiciário e a administração (art. 103-A).'],
      ['Doutrina','A leitura dos estudiosos, que <em>orienta</em> a interpretação.']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição.',html:()=>W.arts([
      ['1º','República Federativa','Formada pela união indissolúvel dos Estados, Municípios e DF, constitui-se em Estado Democrático de Direito.'],
      ['102','Guarda da Constituição','Compete ao STF, precipuamente, a guarda da Constituição.'],
      ['103-A','Súmula vinculante','O STF pode aprovar súmula com efeito vinculante para o Judiciário e a administração pública.']])}
  ]
});
defLesson('co-pri',{
  hero:()=>heroSeal('SOBERANIA • CIDADANIA • DIGNIDADE • TRABALHO • PLURALISMO • '),
  title:['Princípios','fundamentais'],
  lead:'Os arts. 1º a 4º: a forma do Estado, o que funda a República, aonde ela quer chegar e o que nem emenda pode mudar.',
  sections:[
    {id:'estado',nav:'Forma e regime',h:'Como o Estado brasileiro é organizado',lead:'Quatro escolhas diferentes, que muita gente confunde.',html:()=>W.flips([
      ['Forma de Estado','<em>Federação</em>: vários centros de poder político autônomos no mesmo território.'],
      ['Forma de governo','<em>República</em>: eletividade, temporariedade e responsabilidade do governante.'],
      ['Sistema de governo','<em>Presidencialismo</em>: o Presidente é chefe de Estado e de governo.'],
      ['Regime político','<em>Democrático</em>: todo o poder emana do povo (art. 1º, p.u.).']])},
    {id:'arts1a4',nav:'Fundamentos e objetivos',h:'Fundamento, objetivo ou relação internacional?',lead:'Os arts. 1º, 3º e 4º são cobrados juntos. Classifique.',html:()=>W.classify({buckets:['Fundamento (1º)','Objetivo (3º)','Rel. internacionais (4º)'],items:[
      ['Dignidade da pessoa humana.',0,'Art. 1º, III.'],
      ['Garantir o desenvolvimento nacional.',1,'Art. 3º, II.'],
      ['Prevalência dos direitos humanos.',2,'Art. 4º, II.'],
      ['Pluralismo político.',0,'Art. 1º, V.'],
      ['Erradicar a pobreza e a marginalização.',1,'Art. 3º, III.'],
      ['Repúdio ao terrorismo e ao racismo.',2,'Art. 4º, VIII.']]})},
    {id:'petreas',nav:'Cláusulas pétreas',h:'Essa emenda passa?',lead:'Uma emenda não pode tender a abolir as cláusulas pétreas. Classifique cada proposta.',html:()=>W.classify({buckets:['Pode ser aprovada','Inconstitucional'],items:[
      ['Emenda que permite a um Estado se separar do Brasil.',1,'Forma federativa é cláusula pétrea (art. 60, §4º, I).'],
      ['Emenda que muda o sistema de governo para parlamentarismo.',0,'O sistema de governo não está no art. 60, §4º (embora a doutrina discuta a necessidade de consulta popular).'],
      ['Emenda que torna o voto aberto.',1,'Voto secreto é cláusula pétrea (art. 60, §4º, II).'],
      ['Emenda que extingue o habeas corpus.',1,'Garantia individual (art. 60, §4º, IV).'],
      ['Emenda que cria um novo direito social, como o direito à alimentação.',0,'Ampliar direitos não abole nada.']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição.',html:()=>W.arts([
      ['1º','Fundamentos','Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa e pluralismo político.'],
      ['2º','Poderes','São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário.'],
      ['3º','Objetivos','Sociedade livre, justa e solidária; desenvolvimento; erradicar a pobreza; promover o bem de todos.'],
      ['4º','Relações internacionais','Independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, entre outros.'],
      ['60, §4º','Cláusulas pétreas','Forma federativa; voto direto, secreto, universal e periódico; separação dos Poderes; direitos e garantias individuais.']])}
  ]
});
defLesson('co-df',{
  hero:()=>heroSeal('LIBERDADE • IGUALDADE • FRATERNIDADE • ART. 5º • '),
  title:['Direitos','fundamentais'],
  lead:'O que são, como surgiram em camadas ao longo da história e quais ações protegem cada um.',
  sections:[
    {id:'dimensoes',nav:'Dimensões',h:'De que dimensão é este direito?',lead:'Os direitos surgiram em camadas. Classifique.',html:()=>W.classify({buckets:['1ª · liberdade','2ª · igualdade','3ª · fraternidade'],items:[
      ['Liberdade de expressão.',0,'Exige que o Estado se abstenha.'],
      ['Direito à saúde pública.',1,'Exige prestação do Estado.'],
      ['Direito ao meio ambiente equilibrado.',2,'Direito difuso, de titularidade coletiva.'],
      ['Direito de propriedade.',0,'Liberdade individual clássica.'],
      ['Direito à educação.',1,'Direito social (art. 6º).'],
      ['Direitos do consumidor como coletividade.',2,'Interesse difuso ou coletivo.']]})},
    {id:'caracteristicas',nav:'Características',h:'Como os direitos fundamentais funcionam',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Universalidade','Valem para <em>todos</em>, sem distinção.'],
      ['Inalienabilidade','<em>Não se vendem</em> nem se transferem.'],
      ['Imprescritibilidade','Não se perdem <em>pelo tempo</em> sem uso.'],
      ['Relatividade','<em>Não são absolutos</em>: cedem uns aos outros pela ponderação.'],
      ['Eficácia horizontal','Valem também <em>entre particulares</em>, não só contra o Estado.'],
      ['Aplicação imediata','As normas que os definem têm <em>aplicação imediata</em> (art. 5º, §1º).']])},
    {id:'remedios',nav:'Remédios',h:'Qual remédio constitucional?',lead:'Cada violação tem a sua ação. Classifique.',html:()=>W.classify({buckets:['Habeas corpus','Mandado de segurança','Habeas data','Mandado de injunção','Ação popular'],items:[
      ['Prisão sem ordem judicial nem flagrante.',0,'Liberdade de locomoção (art. 5º, LXVIII).'],
      ['A universidade nega a matrícula de quem tem todos os documentos exigidos.',1,'Direito líquido e certo, não amparado por HC ou HD (art. 5º, LXIX).'],
      ['O órgão se recusa a corrigir dados errados sobre você em seu cadastro.',2,'Conhecimento e retificação de informações pessoais (art. 5º, LXXII).'],
      ['Um direito previsto na Constituição não pode ser exercido porque falta a lei que o regulamente.',3,'Falta de norma regulamentadora (art. 5º, LXXI).'],
      ['O prefeito vende um imóvel público por preço vil, e um cidadão quer anular o ato.',4,'Proteção do patrimônio público (art. 5º, LXXIII).']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição.',html:()=>W.arts([
      ['5º, caput','Igualdade','Todos são iguais perante a lei, garantindo-se a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade.'],
      ['5º, §1º','Aplicação imediata','As normas definidoras dos direitos e garantias fundamentais têm aplicação imediata.'],
      ['5º, LXIX','Mandado de segurança','Protege direito líquido e certo não amparado por habeas corpus ou habeas data.'],
      ['5º, LXXIII','Ação popular','Qualquer cidadão pode anular ato lesivo ao patrimônio público, à moralidade, ao meio ambiente e ao patrimônio histórico.'],
      ['6º','Direitos sociais','Educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência, proteção à maternidade e à infância e assistência aos desamparados.']])}
  ]
});
