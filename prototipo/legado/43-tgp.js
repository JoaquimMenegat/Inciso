/* ================= Matéria: Teoria Geral do Processo ================= */
const TGP_TOPICS=[
 {id:'tg-jur',nome:'Jurisdição e solução de conflitos',mod:1},
 {id:'tg-pri',nome:'Princípios do processo',mod:2},
 {id:'tg-comp',nome:'Competência',mod:3},
 {id:'tg-suj',nome:'Sujeitos, atos e custos',mod:4}
];
const TGP_MODS=[
 {n:1,u:'A',tit:'Jurisdição e meios de solução de conflitos',t:'tg-jur',live:'tg-jur'},
 {n:2,u:'A',tit:'Princípios do processo',t:'tg-pri',live:'tg-pri'},
 {n:3,u:'B',tit:'Competência e sua modificação',t:'tg-comp',live:'tg-comp'},
 {n:4,u:'B',tit:'Sujeitos, prazos e despesas do processo',t:'tg-suj',live:'tg-suj'}
];
const TGP_UNITS=[['A','Parte I · Jurisdição'],['B','Parte II · O processo em movimento']];
const TGP_BANK=[
 {id:'tj1',t:'tg-jur',q:'O juiz pode iniciar um processo civil por conta própria?',o:['Sim, quando souber do conflito','Não: a jurisdição é inerte e depende de provocação','Só nos juizados'],a:1,e:'O processo começa por iniciativa da parte, salvo as exceções previstas em lei.',art:'CPC, art. 2º'},
 {id:'tj2',t:'tg-jur',q:'Na mediação, quem propõe a solução?',o:['O mediador','As próprias partes, com o mediador facilitando o diálogo','O juiz'],a:1,e:'O mediador auxilia as partes a compreender o conflito e a identificar, por si próprias, soluções consensuais.',art:'CPC, art. 165, §3º'},
 {id:'tj3',t:'tg-jur',q:'A sentença arbitral precisa ser homologada pelo Judiciário para valer?',o:['Sim','Não: ela produz os mesmos efeitos da sentença judicial','Só se houver recurso'],a:1,e:'A sentença arbitral produz entre as partes os mesmos efeitos da sentença judicial e, sendo condenatória, é título executivo.',art:'Lei 9.307/96, art. 31'},
 {id:'tj4',t:'tg-jur',q:'O Estado proíbe, em regra, que a vítima "faça justiça com as próprias mãos". Isso decorre da:',o:['Inércia','Substitutividade da jurisdição','Definitividade'],a:1,e:'O Estado substitui a vontade das partes e veda, em regra, a autotutela.',art:'Características da jurisdição'},
 {id:'tp1',t:'tg-pri',q:'O juiz decide com base num fundamento sobre o qual as partes não puderam se manifestar. Que princípio foi violado?',o:['Publicidade','Contraditório (vedação de decisão surpresa)','Duplo grau'],a:1,e:'O juiz não pode decidir com base em fundamento a respeito do qual não se tenha dado às partes oportunidade de se manifestar.',art:'CPC, art. 10'},
 {id:'tp2',t:'tg-pri',q:'O ato foi praticado de forma diferente da prevista, mas atingiu sua finalidade sem prejuízo. Ele é anulado?',o:['Sim, sempre','Não: instrumentalidade das formas','Só se a parte pedir'],a:1,e:'Considera-se válido o ato que, realizado de outro modo, lhe preencha a finalidade essencial.',art:'CPC, art. 277'},
 {id:'tp3',t:'tg-pri',q:'Toda decisão judicial precisa ser fundamentada?',o:['Só as sentenças','Sim, sob pena de nulidade','Não, se for urgente'],a:1,e:'Todos os julgamentos serão públicos e fundamentadas todas as decisões, sob pena de nulidade.',art:'CF, art. 93, IX'},
 {id:'tp4',t:'tg-pri',q:'Ninguém será processado nem sentenciado senão pela autoridade competente. Esse é o princípio do:',o:['Juiz natural','Duplo grau','Impulso oficial'],a:0,e:'Proíbe tribunais de exceção e garante julgamento por juiz previamente competente.',art:'CF, art. 5º, LIII e XXXVII'},
 {id:'tc1',t:'tg-comp',q:'A incompetência absoluta pode ser reconhecida de ofício pelo juiz?',o:['Sim, em qualquer tempo e grau de jurisdição','Não, só se o réu alegar','Só até a contestação'],a:0,e:'A incompetência absoluta deve ser declarada de ofício e pode ser alegada em qualquer tempo e grau.',art:'CPC, art. 64, §1º'},
 {id:'tc2',t:'tg-comp',q:'O réu não alegou a incompetência territorial na contestação. O que acontece?',o:['O juiz declara de ofício','A competência se prorroga','O processo é extinto'],a:1,e:'Prorroga-se a competência relativa se o réu não alegar a incompetência em preliminar de contestação.',art:'CPC, art. 65'},
 {id:'tc3',t:'tg-comp',q:'Duas ações têm o mesmo pedido ou a mesma causa de pedir. Há:',o:['Continência','Conexão','Litispendência'],a:1,e:'Reputam-se conexas duas ou mais ações quando lhes for comum o pedido ou a causa de pedir.',art:'CPC, art. 55'},
 {id:'tc4',t:'tg-comp',q:'Mesmas partes e mesma causa de pedir, mas o pedido de uma ação abrange o da outra. Há:',o:['Conexão','Continência','Coisa julgada'],a:1,e:'Dá-se a continência quando há identidade de partes e causa de pedir, e o pedido de uma, mais amplo, abrange o das demais.',art:'CPC, art. 56'},
 {id:'tc5',t:'tg-comp',q:'Uma cláusula de eleição de foro pode mudar a competência em razão da matéria?',o:['Sim','Não: as partes só podem modificar a competência em razão do valor e do território','Só com homologação'],a:1,e:'A competência em razão da matéria, da pessoa ou da função é inderrogável por convenção.',art:'CPC, arts. 62 e 63'},
 {id:'ts1',t:'tg-suj',q:'Como se contam os prazos processuais em dias no CPC?',o:['Em dias corridos','Somente em dias úteis','Em dias úteis só na segunda instância'],a:1,e:'Na contagem de prazo em dias, computam-se somente os dias úteis.',art:'CPC, art. 219'},
 {id:'ts2',t:'tg-suj',q:'A Fazenda Pública tem prazo diferenciado para se manifestar?',o:['Não','Sim, em dobro','Sim, em triplo'],a:1,e:'A União, os Estados, o DF, os Municípios e suas autarquias e fundações gozam de prazo em dobro para todas as manifestações.',art:'CPC, art. 183'},
 {id:'ts3',t:'tg-suj',q:'Qual a faixa dos honorários de sucumbência, em regra?',o:['De 5% a 10%','Entre 10% e 20% do valor da condenação, do proveito ou da causa','Livre, a critério do juiz'],a:1,e:'Os honorários serão fixados entre o mínimo de dez e o máximo de vinte por cento.',art:'CPC, art. 85, §2º'},
 {id:'ts4',t:'tg-suj',q:'O réu traz ao processo o terceiro que deve indenizá-lo regressivamente se ele perder (ex.: a seguradora). Isso é:',o:['Chamamento ao processo','Denunciação da lide','Assistência'],a:1,e:'A denunciação da lide serve ao exercício do direito de regresso no mesmo processo.',art:'CPC, art. 125'},
 {id:'ts5',t:'tg-suj',q:'Na sucumbência parcial, os honorários de um advogado podem ser compensados com os do outro?',o:['Sim','Não: é vedada a compensação','Só se forem iguais'],a:1,e:'Os honorários são direito do advogado e têm natureza alimentar, sendo vedada a compensação em caso de sucumbência parcial.',art:'CPC, art. 85, §14'}
];
const TGP_CARDS=[
 {id:'tgc1',t:'tg-jur',f:'Características da jurisdição',b:'Inércia (depende de provocação), substitutividade (o Estado decide no lugar das partes) e definitividade (a decisão faz coisa julgada).',art:'Teoria geral'},
 {id:'tgc2',t:'tg-jur',f:'Mediação × conciliação',b:'Mediação: há vínculo anterior; o mediador facilita e as partes criam a solução. Conciliação: sem vínculo anterior; o conciliador pode sugerir soluções.',art:'CPC, art. 165'},
 {id:'tgc3',t:'tg-pri',f:'Vedação da decisão surpresa',b:'O juiz não decide com base em fundamento sobre o qual as partes não puderam se manifestar, mesmo em matéria de ofício.',art:'CPC, art. 10'},
 {id:'tgc4',t:'tg-comp',f:'Competência absoluta × relativa',b:'Absoluta: matéria, pessoa, função; de ofício e a qualquer tempo. Relativa: valor e território; alegada pelo réu na contestação, senão prorroga.',art:'CPC, arts. 62 a 65'},
 {id:'tgc5',t:'tg-comp',f:'Conexão × continência',b:'Conexão: pedido ou causa de pedir comuns. Continência: mesmas partes e causa de pedir, e um pedido abrange o outro.',art:'CPC, arts. 55 e 56'},
 {id:'tgc6',t:'tg-suj',f:'Contagem de prazos',b:'Só dias úteis; exclui-se o dia do começo e inclui-se o do vencimento. Fazenda, MP e Defensoria têm prazo em dobro.',art:'CPC, arts. 219, 224, 180, 183 e 186'},
 {id:'tgc7',t:'tg-suj',f:'Intervenção de terceiros',b:'Assistência (ajuda uma parte), denunciação da lide (regresso), chamamento ao processo (codevedores), desconsideração da personalidade e amicus curiae.',art:'CPC, arts. 119 a 138'}
];

function prazoCalc(){
  const id=uid('pz');
  later(()=>{
    const root=$('#'+id),di=$('input[type=date]',root),s={dias:15,dobro:false};
    const iso=d=>d.toISOString().slice(0,10);
    di.value=iso(new Date(Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())));
    function render(){
      $$('[data-dias]',root).forEach(b=>b.setAttribute('aria-pressed',+b.dataset.dias===s.dias));$$('[data-dobro]',root).forEach(b=>b.setAttribute('aria-pressed',String(s.dobro)===b.dataset.dobro));
      const n=s.dias*(s.dobro?2:1);if(!di.value)return;const start=new Date(di.value+'T12:00:00Z');
      const util=d=>{const w=d.getUTCDay();return w!==0&&w!==6};const cells=[];let d=new Date(start),count=0,end=null;
      cells.push({d:new Date(d),k:'start'});
      while(count<n){d=new Date(d.getTime()+864e5);if(util(d)){count++;cells.push({d:new Date(d),k:'util',n:count});if(count===n)end=new Date(d)}else cells.push({d:new Date(d),k:'off'})}
      const fmt=x=>x.toLocaleDateString('pt-BR',{weekday:'short',day:'2-digit',month:'short',timeZone:'UTC'});
      const show=cells.length>40?cells.slice(0,6).concat([{k:'gap'}],cells.slice(-12)):cells;
      $('.pzcal',root).innerHTML=show.map(c=>c.k==='gap'?'<span class="pzc gap">…</span>':`<span class="pzc ${c.k}${c.n===n?' end':''}" title="${fmt(c.d)}"><small>${c.d.toLocaleDateString('pt-BR',{weekday:'narrow',timeZone:'UTC'})}</small><b>${c.d.getUTCDate()}</b>${c.k==='util'?`<i>${c.n}</i>`:''}</span>`).join('');
      $('.pzres',root).innerHTML=`<p class="eyebrow">Último dia do prazo</p><b>${fmt(end)}</b><p>${n} dias úteis contados a partir do dia seguinte à intimação; sábados e domingos não contam (arts. 219 e 224).${s.dobro?' Prazo em dobro (arts. 180, 183 e 186).':''} Feriados não foram descontados nesta simulação.</p>`;swapAnim($('.pzres',root))}
    di.addEventListener('input',render);root.addEventListener('click',e=>{const b=e.target.closest('[data-dias],[data-dobro]');if(!b)return;if(b.dataset.dias)s.dias=+b.dataset.dias;else s.dobro=b.dataset.dobro==='true';render()});render();
  });
  return `<div class="card pz" id="${id}"><div class="pzin"><div><label class="lab" for="${id}-d">Data da intimação</label><input id="${id}-d" type="date" class="pzdate"></div>
    <div><span class="lab">Prazo</span><div class="seg">${[5,10,15,30].map(n=>`<button data-dias="${n}">${n} dias</button>`).join('')}</div></div>
    <div><span class="lab">Fazenda Pública, MP ou Defensoria?</span><div class="seg"><button data-dobro="true">Sim</button><button data-dobro="false">Não</button></div></div></div>
    <div class="pzcal" aria-hidden="true"></div><div class="pzres" aria-live="polite"></div></div>`;
}
function honorarios(){
  const id=uid('ho');
  later(()=>{
    const root=$('#'+id),ins=$$('input',root);
    function render(){const V=+ins[0].value,p=+ins[1].value/100,g=+ins[2].value/100;$$('output',root).forEach((o,k)=>o.textContent=k===0?money(+ins[0].value):ins[k].value+'%');
      const hAutor=V*g*p,hReu=V*(1-g)*p;
      $('.horows',root).innerHTML=`<div class="rb"><span>Réu paga ao advogado do autor</span><div class="track"><i style="width:${g*100}%;background:var(--sage)"></i></div><b class="num">${money(hAutor)}</b></div>
        <div class="rb"><span>Autor paga ao advogado do réu</span><div class="track"><i style="width:${(1-g)*100}%;background:var(--seal)"></i></div><b class="num">${money(hReu)}</b></div>`;
      $('.rmsg',root).innerHTML=g>=1?`<b>Vitória total do autor:</b> o réu paga ${Math.round(p*100)}% de honorários sobre ${money(V)} (art. 85, §2º).`:g<=0?'<b>Vitória total do réu:</b> o autor paga os honorários do advogado do réu.':`<b>Sucumbência recíproca:</b> cada parte paga os honorários do advogado da outra, na proporção em que perdeu. Os valores não se compensam (art. 85, §14).`}
    ins.forEach(i=>i.addEventListener('input',render));render();
  });
  return `<div class="card" id="${id}"><div class="dvin"><div><label class="lab">Valor em discussão: <output class="num"></output></label><input type="range" min="10000" max="500000" step="10000" value="100000"></div>
    <div><label class="lab">Percentual fixado: <output class="num"></output></label><input type="range" min="10" max="20" value="10"></div></div>
    <div style="margin-top:12px"><label class="lab">Quanto do pedido o autor ganhou: <output class="num"></output></label><input type="range" min="0" max="100" step="10" value="70"></div>
    <div class="rbars horows" style="margin-top:16px"></div><p class="rmsg" aria-live="polite"></p></div>`;
}

defCourse('tgp',{nome:'Teoria Geral do Processo',area:'Direito Processual',desc:'Jurisdição, princípios, competência e os sujeitos e atos do processo, com calculadora de prazos em dias úteis.',topics:TGP_TOPICS,mods:TGP_MODS,units:TGP_UNITS,bank:TGP_BANK,cards:TGP_CARDS,
  seed:{order:['tg-jur','tg-pri','tg-comp','tg-suj'],p:{'tg-jur':.88,'tg-pri':.7,'tg-comp':.52,'tg-suj':.45},full:['tg-jur'],partial:{'tg-pri':['qual','cartoes']},last:'tg-pri'}});

defLesson('tg-jur',{
  hero:()=>heroSeal('INÉRCIA • SUBSTITUTIVIDADE • DEFINITIVIDADE • '),
  title:['Jurisdição','e conflito'],
  lead:'Como o Estado resolve conflitos, o que caracteriza a jurisdição e os caminhos que não passam pelo juiz.',
  sections:[
    {id:'caract',nav:'Características',h:'O que define a jurisdição',lead:'Três características que separam o juiz de qualquer outra autoridade.',html:()=>W.flips([
      ['Inércia','O juiz <em>não age de ofício</em>: o processo começa por iniciativa da parte (CPC, art. 2º).'],
      ['Substitutividade','O Estado decide <em>no lugar das partes</em> e veda a autotutela.'],
      ['Definitividade','A decisão final <em>faz coisa julgada</em> e não pode ser rediscutida.'],
      ['Indeclinabilidade','O juiz <em>não pode deixar de julgar</em> alegando lacuna da lei (CPC, art. 140).']])},
    {id:'meios',nav:'Meios de solução',h:'Quem resolve o conflito?',lead:'Classifique cada situação pelo meio de solução.',html:()=>W.classify({buckets:['Autotutela','Mediação','Conciliação','Arbitragem','Jurisdição'],items:[
      ['O dono expulsa à força, logo após a invasão, quem acabou de ocupar seu terreno.',0,'Desforço imediato: autotutela excepcional permitida (CC, art. 1.210, §1º).'],
      ['Ex-sócios, com uma terceira pessoa facilitando a conversa, constroem juntos um acordo.',1,'Há vínculo anterior; as partes criam a solução.'],
      ['Numa batida de carro, o terceiro sugere um valor e os motoristas aceitam.',2,'Sem vínculo anterior; o terceiro pode sugerir.'],
      ['Duas empresas escolhem um especialista privado para decidir a disputa, conforme o contrato.',3,'Decisão de árbitro escolhido pelas partes (Lei 9.307/96).'],
      ['O juiz julga a ação de cobrança.',4,'O Estado decide com força de coisa julgada.']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do CPC e da Lei de Arbitragem.',html:()=>W.arts([
      ['CPC, 2º','Inércia','O processo começa por iniciativa da parte e se desenvolve por impulso oficial.'],
      ['CPC, 3º','Inafastabilidade','Não se excluirá da apreciação jurisdicional ameaça ou lesão a direito; o Estado promoverá a solução consensual.'],
      ['CPC, 165','Conciliadores e mediadores','O conciliador atua sem vínculo anterior entre as partes; o mediador, onde houver vínculo anterior.'],
      ['Lei 9.307, 31','Sentença arbitral','Produz os mesmos efeitos da sentença judicial e, sendo condenatória, constitui título executivo.']])}
  ]
});
defLesson('tg-pri',{
  hero:()=>heroSeal('DEVIDO PROCESSO • CONTRADITÓRIO • AMPLA DEFESA • '),
  title:['Princípios','do processo'],
  lead:'As regras de fundo que decidem quando um ato é válido, quando uma decisão é nula e o que as partes podem exigir do juiz.',
  sections:[
    {id:'qual',nav:'Qual princípio?',h:'Qual princípio está em jogo?',lead:'Classifique cada situação.',html:()=>W.classify({buckets:['Contraditório','Juiz natural','Motivação','Instrumentalidade','Publicidade'],items:[
      ['O juiz reconhece a prescrição sem ouvir as partes antes.',0,'Mesmo em matéria de ofício, as partes devem poder se manifestar (CPC, arts. 9º e 10).'],
      ['Cria-se um tribunal só para julgar um caso já ocorrido.',1,'Tribunal de exceção é vedado (CF, art. 5º, XXXVII).'],
      ['A sentença diz apenas "indefiro, por falta de amparo legal".',2,'Decisão sem fundamentação é nula (CF, art. 93, IX; CPC, art. 489, §1º).'],
      ['A citação foi feita de forma irregular, mas o réu compareceu e contestou.',3,'O comparecimento espontâneo supre a falta de citação (CPC, art. 239, §1º).'],
      ['O processo de família tramita em segredo de justiça.',4,'Exceção legal à publicidade, para proteger a intimidade (CPC, art. 189).']]})},
    {id:'cartoes',nav:'Os principais',h:'Os principais, em uma linha',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Devido processo legal','Ninguém é privado da liberdade ou de bens <em>sem processo justo</em> (CF, art. 5º, LIV).'],
      ['Contraditório','Informação e <em>reação</em>, com poder de influenciar a decisão (CF, art. 5º, LV).'],
      ['Duração razoável','O processo deve terminar em <em>tempo razoável</em>, incluída a satisfação (CPC, art. 4º).'],
      ['Boa-fé','Quem participa do processo deve <em>comportar-se de boa-fé</em> (CPC, art. 5º).'],
      ['Cooperação','Todos os sujeitos do processo devem <em>cooperar</em> para uma decisão justa e efetiva (CPC, art. 6º).'],
      ['Duplo grau','Em regra, a decisão pode ser <em>revista por outro órgão</em>.']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição e do CPC.',html:()=>W.arts([
      ['CF, 5º, LIV','Devido processo','Ninguém será privado da liberdade ou de seus bens sem o devido processo legal.'],
      ['CF, 5º, LV','Contraditório','Aos litigantes são assegurados o contraditório e a ampla defesa, com os meios e recursos a ela inerentes.'],
      ['CF, 93, IX','Motivação','Todos os julgamentos serão públicos e fundamentadas todas as decisões, sob pena de nulidade.'],
      ['CPC, 10','Decisão surpresa','O juiz não pode decidir com base em fundamento sobre o qual as partes não puderam se manifestar.'],
      ['CPC, 277','Instrumentalidade','Quando a lei prescrever forma, o juiz considerará válido o ato que, realizado de outro modo, alcançar a finalidade.']])}
  ]
});
defLesson('tg-comp',{
  hero:()=>heroSeal('MATÉRIA • PESSOA • FUNÇÃO • VALOR • TERRITÓRIO • '),
  title:['Competência','do juízo'],
  lead:'Qual juiz pode julgar a causa, quando as partes podem escolher e como a competência muda no meio do caminho.',
  sections:[
    {id:'tipo',nav:'Absoluta ou relativa',h:'Absoluta ou relativa?',lead:'Classifique pelo critério que define a competência.',html:()=>W.classify({buckets:['Absoluta','Relativa'],items:[
      ['Uma ação contra a União tramita na Justiça Federal.',0,'Em razão da pessoa (CF, art. 109, I).'],
      ['O contrato elege o foro de São Paulo para eventual cobrança.',1,'Território: as partes podem escolher (CPC, art. 63).'],
      ['Uma ação trabalhista vai para a Justiça do Trabalho.',0,'Em razão da matéria (CF, art. 114).'],
      ['A ação de cobrança é proposta no domicílio do réu.',1,'Regra geral territorial (CPC, art. 46).'],
      ['O recurso de apelação é julgado pelo tribunal.',0,'Competência funcional, hierárquica.']]})},
    {id:'efeitos',nav:'Na prática',h:'O que muda na prática',lead:'A diferença aparece na hora de alegar e corrigir.',html:()=>W.tabs([
      {l:'Absoluta',html:`<div class="card">${propsTable([['Quem alega','Juiz de ofício ou qualquer parte'],['Quando','Qualquer tempo e grau','warn'],['Pode ser modificada?','Não','bad'],['Se ninguém alegar','Pode gerar rescisória','bad']])}</div>`},
      {l:'Relativa',html:`<div class="card">${propsTable([['Quem alega','Só o réu (e o MP, onde atuar)'],['Quando','Preliminar de contestação','warn'],['Pode ser modificada?','Sim: eleição de foro, conexão, continência','ok'],['Se ninguém alegar','Prorroga-se','ok']])}</div>`}])},
    {id:'modificacao',nav:'Conexão e continência',h:'Conexão, continência ou nada?',lead:'Compare as duas ações e classifique.',html:()=>W.classify({buckets:['Conexão','Continência','Nenhuma'],items:[
      ['A cobra de B a parcela de janeiro; em outra ação, B pede contra A a anulação do mesmo contrato.',0,'Causa de pedir comum: o mesmo contrato (CPC, art. 55).'],
      ['A pede contra B a anulação de uma cláusula; depois, entre as mesmas partes e pelo mesmo fundamento, pede a anulação do contrato inteiro.',1,'O pedido mais amplo contém o menor (CPC, art. 56).'],
      ['A cobra B por um empréstimo; C cobra D por outro empréstimo, sem relação.',2,'Nada em comum.'],
      ['Duas ações idênticas: mesmas partes, causa de pedir e pedido.',2,'Não é conexão: é litispendência, e a segunda é extinta (CPC, art. 337, §3º).']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do CPC.',html:()=>W.arts([
      ['54','Modificação','A competência relativa poderá modificar-se pela conexão ou pela continência.'],
      ['55','Conexão','Reputam-se conexas duas ou mais ações quando lhes for comum o pedido ou a causa de pedir.'],
      ['56','Continência','Identidade de partes e causa de pedir, com um pedido mais amplo que abrange o das demais.'],
      ['62','Inderrogável','A competência em razão da matéria, da pessoa ou da função é inderrogável por convenção.'],
      ['64, §1º','De ofício','A incompetência absoluta pode ser alegada em qualquer tempo e grau e deve ser declarada de ofício.'],
      ['65','Prorrogação','Prorroga-se a competência relativa se o réu não alegar a incompetência em preliminar de contestação.']])}
  ]
});
defLesson('tg-suj',{
  hero:()=>heroSeal('PARTES • TERCEIROS • PRAZOS • SUCUMBÊNCIA • '),
  title:['Sujeitos,','prazos e custos'],
  lead:'Quem pode entrar no processo, como se contam os prazos e quem paga a conta no final.',
  sections:[
    {id:'terceiros',nav:'Terceiros',h:'Que intervenção é essa?',lead:'Classifique a forma de intervenção de terceiros.',html:()=>W.classify({buckets:['Assistência','Denunciação da lide','Chamamento ao processo','Litisconsórcio'],items:[
      ['O sublocatário entra no processo para ajudar o locatário a vencer o despejo.',0,'Terceiro com interesse jurídico em que uma das partes vença (CPC, art. 119).'],
      ['O motorista réu traz a seguradora para, se perder, já obter dela o reembolso.',1,'Exercício do direito de regresso (CPC, art. 125, II).'],
      ['O fiador réu traz o devedor principal para o processo.',2,'Chamamento dos codevedores (CPC, art. 130, I).'],
      ['Dois vizinhos prejudicados pela mesma obra propõem juntos a ação.',3,'Pluralidade de partes no mesmo polo (CPC, art. 113).']]})},
    {id:'prazos',nav:'Prazos',h:'Calcule um prazo',lead:'Escolha a data da intimação e o prazo. O calendário mostra só os dias úteis contando.',html:prazoCalc},
    {id:'honorarios',nav:'Honorários',h:'Quem paga os honorários',lead:'Mova o resultado da causa e veja a sucumbência se dividir.',html:honorarios},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do CPC.',html:()=>W.arts([
      ['85','Honorários','A sentença condenará o vencido a pagar honorários ao advogado do vencedor, entre 10% e 20%.'],
      ['119','Assistência','O terceiro juridicamente interessado em que a sentença seja favorável a uma das partes pode intervir para assisti-la.'],
      ['125','Denunciação','É admissível a denunciação da lide a quem estiver obrigado a indenizar, em ação regressiva, o perdedor.'],
      ['130','Chamamento','É admissível o chamamento do afiançado, dos demais fiadores e dos devedores solidários.'],
      ['219','Dias úteis','Na contagem de prazo em dias, computam-se somente os dias úteis.'],
      ['224','Contagem','Exclui-se o dia do começo e inclui-se o dia do vencimento.']])}
  ]
});
