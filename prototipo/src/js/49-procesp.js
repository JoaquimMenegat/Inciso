/* ================= Matéria: Procedimentos Especiais e Recursos ================= */
const PE_TOPICS=[
 {id:'pe-cons',nome:'Consignação, contas e monitória',mod:1},
 {id:'pe-pos',nome:'Ações possessórias',mod:2},
 {id:'pe-inv',nome:'Inventário e juizados',mod:3},
 {id:'pe-rec',nome:'Recursos',mod:4}
];
const PE_MODS=[
 {n:1,u:'A',tit:'Consignação, exigir contas e monitória',t:'pe-cons',live:'pe-cons'},
 {n:2,u:'A',tit:'Ações possessórias',t:'pe-pos',live:'pe-pos'},
 {n:3,u:'A',tit:'Inventário judicial e juizados especiais',t:'pe-inv',live:'pe-inv'},
 {n:4,u:'B',tit:'Recursos: cabimento, admissibilidade e efeitos',t:'pe-rec',live:'pe-rec'}
];
const PE_UNITS=[['A','Parte I · Procedimentos especiais'],['B','Parte II · Recursos']];
const PE_BANK=[
 {id:'qc1',t:'pe-cons',q:'Na consignação extrajudicial, o credor é cientificado do depósito e fica em silêncio por 10 dias. O que acontece?',o:['A obrigação persiste','O devedor fica liberado da obrigação','O banco devolve o dinheiro'],a:1,e:'Decorrido o prazo sem recusa manifestada por escrito, o devedor fica liberado, e a quantia fica à disposição do credor.',art:'CPC, art. 539, §2º'},
 {id:'qc2',t:'pe-cons',q:'Qual é o objetivo da ação monitória?',o:['Executar um título executivo','Formar título executivo a partir de prova escrita sem eficácia executiva','Exigir prestação de contas'],a:1,e:'A monitória serve a quem tem prova escrita sem eficácia de título executivo.',art:'CPC, art. 700'},
 {id:'qc3',t:'pe-cons',q:'Na monitória, se o réu não paga nem opõe embargos no prazo:',o:['O processo é extinto','Constitui-se de pleno direito o título executivo judicial','O juiz marca audiência'],a:1,e:'Não realizado o pagamento nem apresentados embargos, constitui-se de pleno direito o título executivo judicial.',art:'CPC, art. 701, §2º'},
 {id:'qc4',t:'pe-cons',q:'Quem pode propor ação de exigir contas?',o:['Só o administrador','Quem afirmar ser titular do direito de exigi-las','Só o Ministério Público'],a:1,e:'A ação de exigir contas cabe àquele que afirmar ser titular do direito de exigi-las.',art:'CPC, art. 550'},
 {id:'qp1',t:'pe-pos',q:'O invasor ocupou o terreno há 8 meses. O dono quer a posse de volta. Qual ação e qual rito?',o:['Reintegração de posse, rito especial (força nova)','Manutenção de posse, rito comum','Interdito proibitório'],a:0,e:'Esbulho dentro de ano e dia: reintegração pelo rito especial, com liminar possessória.',art:'CPC, arts. 558 e 560'},
 {id:'qp2',t:'pe-pos',q:'Passado ano e dia do esbulho, o possuidor:',o:['Perde a ação possessória','Continua com ação possessória, mas pelo procedimento comum','Só pode usar a reivindicatória'],a:1,e:'Passado o prazo, será comum o procedimento, não perdendo, contudo, o caráter possessório.',art:'CPC, art. 558, p.u.'},
 {id:'qp3',t:'pe-pos',q:'O autor pediu manutenção, mas os fatos mostram esbulho. O juiz:',o:['Extingue o processo','Concede a reintegração: as possessórias são fungíveis','Manda emendar obrigatoriamente'],a:1,e:'A propositura de uma ação possessória em vez de outra não obsta a que o juiz conheça do pedido e outorgue a proteção adequada.',art:'CPC, art. 554'},
 {id:'qp4',t:'pe-pos',q:'O vizinho ameaça derrubar a cerca, mas ainda não fez nada. Qual ação?',o:['Reintegração','Manutenção','Interdito proibitório'],a:2,e:'Diante de justo receio de ser molestado, o possuidor pede que o juiz o segure da turbação ou esbulho iminente.',art:'CPC, art. 567'},
 {id:'qi1',t:'pe-inv',q:'Qual o prazo para abrir o inventário?',o:['30 dias','2 meses da abertura da sucessão','1 ano'],a:1,e:'O processo de inventário deve ser instaurado em 2 meses, a contar da abertura da sucessão, e ultimado nos 12 meses seguintes.',art:'CPC, art. 611'},
 {id:'qi2',t:'pe-inv',q:'Herdeiros capazes e de acordo, partilha amigável, em juízo. Qual procedimento simplificado?',o:['Arrolamento sumário','Inventário tradicional obrigatoriamente','Sobrepartilha'],a:0,e:'A partilha amigável entre partes capazes é homologada de plano pelo juiz, no arrolamento sumário.',art:'CPC, art. 659'},
 {id:'qi3',t:'pe-inv',q:'Qual o teto do Juizado Especial Cível estadual?',o:['20 salários mínimos','40 salários mínimos','60 salários mínimos'],a:1,e:'Causas cujo valor não exceda 40 vezes o salário mínimo.',art:'Lei 9.099/95, art. 3º, I'},
 {id:'qi4',t:'pe-inv',q:'No Juizado Especial Cível, a parte precisa de advogado numa causa de 15 salários mínimos?',o:['Sim','Não: até 20 salários mínimos, a assistência é facultativa','Só no recurso'],a:1,e:'Nas causas de até 20 salários mínimos, as partes comparecem pessoalmente, com assistência facultativa de advogado; no recurso, ela é obrigatória.',art:'Lei 9.099/95, art. 9º'},
 {id:'qr1',t:'pe-rec',q:'Qual o recurso contra a sentença?',o:['Agravo de instrumento','Apelação','Embargos de divergência'],a:1,e:'Da sentença cabe apelação.',art:'CPC, art. 1.009'},
 {id:'qr2',t:'pe-rec',q:'Qual o prazo dos embargos de declaração?',o:['5 dias','15 dias','10 dias'],a:0,e:'Os embargos serão opostos em 5 dias. Os demais recursos têm prazo de 15 dias.',art:'CPC, arts. 1.003, §5º e 1.023'},
 {id:'qr3',t:'pe-rec',q:'Os embargos de declaração suspendem ou interrompem o prazo dos outros recursos?',o:['Suspendem','Interrompem','Nem um nem outro'],a:1,e:'Os embargos de declaração interrompem o prazo para a interposição de recurso: ele recomeça do zero.',art:'CPC, art. 1.026'},
 {id:'qr4',t:'pe-rec',q:'O recorrente não comprovou o preparo. O recurso é deserto de imediato?',o:['Sim','Não: é intimado a recolher em dobro','Só se for apelação'],a:1,e:'O recorrente que não comprovar o preparo será intimado para realizar o recolhimento em dobro, sob pena de deserção.',art:'CPC, art. 1.007, §4º'},
 {id:'qr5',t:'pe-rec',q:'Qual efeito todo recurso tem?',o:['Suspensivo','Devolutivo','Translativo'],a:1,e:'Todo recurso devolve ao órgão julgador o conhecimento da matéria impugnada.',art:'CPC, art. 1.013'}
];
const PE_CARDS=[
 {id:'pec1',t:'pe-cons',f:'Consignação extrajudicial',b:'Depósito bancário no lugar do pagamento; o credor tem 10 dias. Aceita ou fica em silêncio: o devedor se libera. Recusa por escrito: cabe a ação consignatória.',art:'CPC, art. 539'},
 {id:'pec2',t:'pe-cons',f:'Monitória',b:'Prova escrita sem eficácia executiva; devedor capaz. Sem pagamento nem embargos, forma-se o título executivo judicial.',art:'CPC, arts. 700 e 701'},
 {id:'pec3',t:'pe-pos',f:'Manutenção, reintegração e interdito',b:'Turbação: manutenção. Esbulho: reintegração. Ameaça: interdito proibitório. As três são fungíveis.',art:'CPC, arts. 554, 560 e 567'},
 {id:'pec4',t:'pe-pos',f:'Força nova × força velha',b:'Até ano e dia da moléstia: rito especial, com liminar possessória. Depois: rito comum, com tutela de urgência, sem perder o caráter possessório.',art:'CPC, art. 558'},
 {id:'pec5',t:'pe-inv',f:'Teto e advogado no JEC',b:'Até 40 salários mínimos. Até 20, advogado facultativo; no recurso, obrigatório.',art:'Lei 9.099/95, arts. 3º e 9º'},
 {id:'pec6',t:'pe-rec',f:'Requisitos de admissibilidade',b:'Intrínsecos: cabimento, legitimidade, interesse e inexistência de fato impeditivo. Extrínsecos: tempestividade, regularidade formal e preparo.',art:'Doutrina'},
 {id:'pec7',t:'pe-rec',f:'Prazos recursais',b:'15 dias úteis para todos os recursos e respostas, salvo embargos de declaração: 5 dias. Os embargos interrompem o prazo dos demais.',art:'CPC, arts. 1.003 e 1.026'}
];
function possessoria(){
  const id=uid('ps2');
  later(()=>{
    const root=$('#'+id),r=$('input',root),s={tipo:'esbulho'};
    function render(){const m=+r.value;$('.psm',root).textContent=m<12?m+(m===1?' mês':' meses'):m===12?'1 ano':Math.floor(m/12)+(m<24?' ano':' anos')+(m%12?' e '+m%12+' meses':'');
      $$('[data-k]',root).forEach(b=>b.setAttribute('aria-pressed',s[b.dataset.k]===b.dataset.v));$('.pimark',root).style.left=Math.min(m,36)/36*100+'%';
      const acao={esbulho:'Reintegração de posse',turbacao:'Manutenção de posse',ameaca:'Interdito proibitório'}[s.tipo];
      const nova=m<=12;const o=$('.wzout',root);o.className='wzout '+(nova?'ok':'warn');
      o.innerHTML=s.tipo==='ameaca'?`<b>${acao}</b><p>Diante de ameaça, o possuidor pede ao juiz que o proteja, com pena pecuniária se a ordem for descumprida (art. 567). Não se conta ano e dia: a moléstia ainda não aconteceu.</p>`:
        nova?`<b>${acao}, força nova</b><p>Dentro de ano e dia: rito especial e liminar possessória, que exige só prova da posse e da moléstia, sem demonstrar perigo de dano (arts. 558 e 562).</p>`:
        `<b>${acao}, força velha</b><p>Passado ano e dia: procedimento comum, sem perder o caráter possessório. Liminar só como tutela de urgência, provando probabilidade do direito e perigo de dano (art. 300).</p>`;swapAnim(o)}
    r.addEventListener('input',render);root.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;s.tipo=b.dataset.v;render()});render();
  });
  return `<div class="card" id="${id}"><div class="wzq"><span>O que aconteceu?</span><div class="seg"><button data-k="tipo" data-v="esbulho">Perdeu a posse</button><button data-k="tipo" data-v="turbacao">Foi perturbado</button><button data-k="tipo" data-v="ameaca">Foi ameaçado</button></div></div>
    <div class="pitrack fntrack"><i class="pi5"><span>ano e dia</span></i><i class="pimark"></i></div>
    <label class="lab" for="${id}-r">Tempo desde a moléstia até a ação: <output class="psm num"></output></label><input id="${id}-r" type="range" min="1" max="36" value="8"><div class="wzout" aria-live="polite"></div></div>`;
}
function juizado(){
  return W.wizard({qs:[['valor','A causa vale até 40 salários mínimos?'],['fazenda','O réu é ente público (União, Estado, Município, autarquia)?'],['estado','É causa de família, falência, de estado ou capacidade das pessoas?'],['complexa','Exige perícia complexa?']],init:{valor:true,fazenda:false,estado:false,complexa:false},
    verdict:a=>a.estado?{tone:'bad',t:'Não cabe no Juizado',d:'Ficam excluídas as causas de natureza alimentar, falimentar, fiscal, de interesse da Fazenda, acidentes de trabalho, resíduos e estado e capacidade das pessoas (Lei 9.099/95, art. 3º, §2º).'}:
      a.fazenda?{tone:'warn',t:'Juizado da Fazenda Pública ou Federal',d:'Contra Estados e Municípios, o Juizado da Fazenda Pública (Lei 12.153/09); contra a União, o Juizado Especial Federal (Lei 10.259/01). Teto de 60 salários mínimos.'}:
      a.complexa?{tone:'bad',t:'Não cabe no Juizado',d:'A necessidade de perícia complexa afasta a menor complexidade exigida (CF, art. 98, I).'}:
      !a.valor?{tone:'warn',t:'Cabe, renunciando ao excedente',d:'A opção pelo Juizado importa renúncia ao crédito que passar de 40 salários mínimos, salvo conciliação (Lei 9.099/95, art. 3º, §3º).'}:
      {tone:'ok',t:'Cabe no Juizado Especial Cível',d:'Até 20 salários mínimos, sem advogado obrigatório; de 20 a 40, com advogado (art. 9º).'}});
}

defCourse('procesp',{nome:'Procedimentos Especiais e Recursos',area:'Direito Processual',desc:'Consignação, monitória, possessórias, inventário, juizados e o sistema recursal, com simuladores de rito e de cabimento.',topics:PE_TOPICS,mods:PE_MODS,units:PE_UNITS,bank:PE_BANK,cards:PE_CARDS});

defLesson('pe-cons',{
  hero:()=>heroSeal('CONSIGNAÇÃO • EXIGIR CONTAS • MONITÓRIA • '),
  title:['Consignação','e monitória'],
  lead:'Três procedimentos para situações específicas: o devedor que quer pagar, quem quer contas e o credor sem título executivo.',
  sections:[
    {id:'qual',nav:'Qual ação?',h:'Que procedimento usar?',lead:'Classifique.',html:()=>W.classify({buckets:['Consignação','Exigir contas','Monitória','Embargos de terceiro'],items:[
      ['O locador se recusa a receber o aluguel para forçar o despejo.',0,'O devedor tem direito de pagar e se liberar (CC, art. 335).'],
      ['O sócio quer que o administrador da sociedade preste contas da gestão.',1,'Quem tem o direito de exigir contas (CPC, art. 550).'],
      ['O credor tem um cheque prescrito e quer cobrar.',2,'Prova escrita sem eficácia executiva (CPC, art. 700; Súmula 299, STJ).'],
      ['O carro de Ana é penhorado numa execução contra outra pessoa.',3,'Terceiro que sofre constrição de bem que é seu (CPC, art. 674).']]})},
    {id:'consignacao',nav:'Consignação',h:'Consignação extrajudicial',lead:'O devedor deposita no banco e o credor é avisado. Responda.',html:()=>W.wizard({qs:[['dinheiro','A obrigação é em dinheiro?'],['recusa','O credor manifestou recusa por escrito ao banco em 10 dias?']],init:{dinheiro:true,recusa:false},
      verdict:a=>!a.dinheiro?{tone:'warn',t:'Só a via judicial',d:'A consignação extrajudicial, por depósito bancário, é só para obrigações em dinheiro (art. 539, §1º).'}:a.recusa?{tone:'warn',t:'Cabe a ação de consignação',d:'Com a recusa, o devedor pode propor a ação em 1 mês, instruída com a prova do depósito e da recusa (art. 539, §3º).'}:{tone:'ok',t:'Devedor liberado',d:'Aceito o depósito ou passado o prazo em silêncio, o devedor fica liberado da obrigação (art. 539, §2º).'}})},
    {id:'monitoria',nav:'Monitória',h:'Como corre a monitória',lead:'Avance pelas etapas.',html:()=>W.timeline({steps:[
      {t:'Petição com prova escrita',s:'art. 700',d:'O autor junta prova escrita sem eficácia de título executivo contra devedor capaz.'},
      {t:'Mandado de pagamento',s:'art. 701',d:'Evidente o direito, o juiz manda pagar ou entregar em 15 dias, com honorários de 5%. Se pagar, fica isento de custas.'},
      {t:'Embargos ou silêncio',s:'art. 702',d:'O réu pode opor embargos monitórios no mesmo prazo, que seguem o procedimento comum.'},
      {t:'Título executivo',s:'art. 701, §2º',d:'Sem pagamento nem embargos, ou rejeitados estes, constitui-se o título executivo judicial.'}]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do CPC.',html:()=>W.arts([
      ['539','Consignação','Nos casos previstos em lei, o devedor ou terceiro pode requerer a consignação da quantia ou da coisa devida.'],
      ['550','Exigir contas','Aquele que afirmar ser titular do direito de exigir contas requererá a citação do réu para que as preste ou ofereça contestação em 15 dias.'],
      ['700','Monitória','Cabe a quem afirmar, com base em prova escrita sem eficácia de título executivo, ter direito de exigir pagamento, coisa ou obrigação de fazer.'],
      ['701, §2º','Título','Não pago nem embargado, constitui-se de pleno direito o título executivo judicial.']])}
  ]
});
defLesson('pe-pos',{
  hero:()=>heroSeal('TURBAÇÃO • ESBULHO • AMEAÇA • ANO E DIA • '),
  title:['Ações','possessórias'],
  lead:'Como proteger a posse contra perturbação, perda ou ameaça, e por que o prazo de ano e dia muda o rito.',
  sections:[
    {id:'simulador',nav:'Simulador',h:'Que ação, e por qual rito?',lead:'Escolha o que aconteceu e mova o tempo até o ajuizamento.',html:possessoria},
    {id:'qual',nav:'Turbação ou esbulho?',h:'Turbação, esbulho ou ameaça?',lead:'Classifique a moléstia à posse.',html:()=>W.classify({buckets:['Turbação','Esbulho','Ameaça'],items:[
      ['O vizinho passa a usar parte do seu quintal como estacionamento, mas você continua lá.',0,'Perturba sem tirar a posse: manutenção.'],
      ['Invasores tomam todo o terreno e trocam o cadeado.',1,'Perda da posse: reintegração.'],
      ['O vizinho avisa que vai derrubar seu muro na semana que vem.',2,'Justo receio de moléstia: interdito proibitório.'],
      ['O inquilino, com o contrato encerrado e notificado, se recusa a sair.',1,'Em locação, a via própria é o despejo (Lei 8.245/91), não a possessória.']]})},
    {id:'regras',nav:'Regras',h:'Regras próprias das possessórias',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Fungibilidade','Pediu uma, era outra? O juiz <em>concede a proteção adequada</em> (art. 554).'],
      ['Caráter dúplice','O réu pode, na contestação, <em>pedir proteção possessória</em> e indenização (art. 556).'],
      ['Exceção de domínio','Na possessória, <em>não se discute propriedade</em>: vence quem prova a melhor posse (art. 557).'],
      ['Litígio coletivo','Ocupação coletiva com mais de ano e dia: o juiz designa <em>audiência de mediação</em> antes da liminar (art. 565).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do CPC.',html:()=>W.arts([
      ['554','Fungibilidade','Propor uma possessória em vez de outra não obsta que o juiz outorgue a proteção cujos requisitos estejam provados.'],
      ['557','Domínio','Na pendência de ação possessória, é vedado propor ação de reconhecimento de domínio.'],
      ['558','Ano e dia','Dentro de ano e dia, rito especial; depois, procedimento comum, sem perder o caráter possessório.'],
      ['560','Ações','O possuidor tem direito a ser mantido em caso de turbação e reintegrado em caso de esbulho.'],
      ['567','Interdito','O possuidor com justo receio de ser molestado pode pedir mandado proibitório, com pena pecuniária.']])}
  ]
});
defLesson('pe-inv',{
  hero:()=>heroSeal('INVENTÁRIO • ARROLAMENTO • JUIZADO ESPECIAL • '),
  title:['Inventário','e juizados'],
  lead:'O inventário judicial e suas versões simplificadas, e os juizados especiais, feitos para causas menores.',
  sections:[
    {id:'inventario',nav:'Inventário',h:'Que procedimento de inventário?',lead:'Classifique.',html:()=>W.classify({buckets:['Inventário tradicional','Arrolamento sumário','Arrolamento comum','Extrajudicial'],items:[
      ['Há um herdeiro menor e muitos bens a avaliar.',0,'Com incapaz, a via é judicial; sem acordo ou com valor alto, o tradicional.'],
      ['Todos capazes e de acordo, apresentando partilha amigável ao juiz.',1,'Homologada de plano (CPC, art. 659).'],
      ['Bens de até 1.000 salários mínimos, ainda que haja incapaz, havendo concordância do MP.',2,'Arrolamento comum (CPC, art. 664).'],
      ['Todos capazes, concordes, sem testamento, com advogado, em cartório.',3,'Escritura pública (CPC, art. 610, §1º).']]})},
    {id:'juizado',nav:'Cabe no juizado?',h:'Cabe no Juizado Especial?',lead:'Responda e veja.',html:juizado},
    {id:'principios',nav:'Princípios do JEC',h:'Princípios dos juizados',lead:'O art. 2º da Lei 9.099/95.',html:()=>W.flips([
      ['Oralidade','Atos <em>falados</em>, reduzidos a termo só no essencial.'],
      ['Simplicidade e informalidade','Valem os atos que <em>atingem a finalidade</em>, sem rigor de forma.'],
      ['Economia e celeridade','Menos atos, <em>menos tempo</em>, menos custo.'],
      ['Conciliação','Busca-se, sempre que possível, o <em>acordo</em>.']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do CPC e da Lei 9.099/95.',html:()=>W.arts([
      ['CPC, 611','Prazos','O inventário deve ser instaurado em 2 meses da abertura da sucessão e ultimado nos 12 meses seguintes.'],
      ['CPC, 659','Arrolamento sumário','A partilha amigável entre partes capazes será homologada de plano pelo juiz.'],
      ['CPC, 664','Arrolamento comum','Quando o valor dos bens for igual ou inferior a 1.000 salários mínimos.'],
      ['Lei 9.099, 3º','Competência','Causas cíveis de menor complexidade, de até 40 salários mínimos, entre outras.'],
      ['Lei 9.099, 9º','Advogado','Até 20 salários mínimos, as partes podem comparecer sem advogado.']])}
  ]
});
defLesson('pe-rec',{
  hero:()=>heroSeal('CABIMENTO • TEMPESTIVIDADE • PREPARO • EFEITOS • '),
  title:['Recursos','cíveis'],
  lead:'Qual recurso usar contra cada decisão, o que ele precisa ter para ser conhecido e o que acontece com a decisão enquanto ele tramita.',
  sections:[
    {id:'qual',nav:'Qual recurso?',h:'Que recurso cabe?',lead:'Classifique pela decisão impugnada.',html:()=>W.classify({buckets:['Apelação','Agravo de instrumento','Embargos de declaração','Recurso especial'],items:[
      ['Sentença que julgou improcedente o pedido.',0,'Da sentença cabe apelação (art. 1.009).'],
      ['Decisão que negou a tutela de urgência no meio do processo.',1,'Decisão interlocutória sobre tutela provisória (art. 1.015, I).'],
      ['A sentença é omissa sobre um dos pedidos.',2,'Omissão, contradição, obscuridade ou erro material (art. 1.022).'],
      ['Acórdão do TJ que contrariou lei federal.',3,'Cabe ao STJ (CF, art. 105, III, a).'],
      ['Decisão que julgou parcialmente o mérito.',1,'Art. 356, §5º e art. 1.015, II.']]})},
    {id:'admissibilidade',nav:'Admissibilidade',h:'O recurso será conhecido?',lead:'Antes de olhar o mérito, o tribunal confere os requisitos. Responda.',html:()=>W.wizard({qs:[['cab','O recurso é o cabível contra essa decisão?'],['interesse','O recorrente perdeu algo com a decisão (interesse)?'],['prazo','Foi interposto no prazo (15 dias; 5 nos embargos de declaração)?'],['preparo','O preparo foi comprovado (ou há isenção)?']],init:{cab:true,interesse:true,prazo:true,preparo:true},
      verdict:a=>!a.cab?{tone:'bad',t:'Não conhecido: cabimento',d:'Recurso errado. A fungibilidade só salva em caso de dúvida objetiva e sem erro grosseiro.'}:!a.interesse?{tone:'bad',t:'Não conhecido: falta interesse',d:'Só recorre quem sucumbiu e pode obter situação melhor.'}:!a.prazo?{tone:'bad',t:'Não conhecido: intempestivo',d:'Preclusão temporal. A intempestividade é vício insanável.'}:!a.preparo?{tone:'warn',t:'Ainda não é deserto',d:'O recorrente é intimado a recolher em dobro, em 5 dias, sob pena de deserção (art. 1.007, §4º).'}:{tone:'ok',t:'Recurso conhecido',d:'Passada a admissibilidade, o tribunal julga o mérito do recurso.'}})},
    {id:'efeitos',nav:'Efeitos',h:'Os efeitos dos recursos',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Devolutivo','Todo recurso <em>devolve a matéria impugnada</em> ao tribunal, nos limites do que se pediu (art. 1.013).'],
      ['Suspensivo','Impede a eficácia da decisão. A apelação tem, <em>em regra</em>; as exceções estão no art. 1.012, §1º.'],
      ['Translativo','O tribunal conhece <em>de ofício</em> matérias de ordem pública, mesmo sem pedido.'],
      ['Expansivo e regressivo','O julgamento pode <em>atingir outros sujeitos</em> ou atos; em alguns recursos, o próprio juiz pode <em>retratar-se</em>.']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do CPC.',html:()=>W.arts([
      ['1.003, §5º','Prazo','Excetuados os embargos de declaração, o prazo para interpor e responder aos recursos é de 15 dias.'],
      ['1.007','Preparo','O recorrente comprova o preparo no ato de interposição; sem ele, é intimado a recolher em dobro.'],
      ['1.009','Apelação','Da sentença cabe apelação.'],
      ['1.015','Agravo de instrumento','Cabe contra interlocutórias sobre tutela provisória, mérito do processo, entre outras do rol.'],
      ['1.022','Embargos de declaração','Contra decisão obscura, contraditória, omissa ou com erro material.'],
      ['1.026','Interrupção','Os embargos de declaração interrompem o prazo para a interposição de recurso.']])}
  ]
});
