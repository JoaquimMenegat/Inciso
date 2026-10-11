/* ================= Matéria: Contratos ================= */
const CT_TOPICS=[
 {id:'ct-geral',nome:'Teoria geral e formação',mod:1},
 {id:'ct-gar',nome:'Vícios, evicção e arras',mod:2},
 {id:'ct-ext',nome:'Extinção dos contratos',mod:3},
 {id:'ct-esp',nome:'Contratos em espécie',mod:4}
];
const CT_MODS=[
 {n:1,u:'A',tit:'Princípios, classificação e formação',t:'ct-geral',live:'ct-geral'},
 {n:2,u:'A',tit:'Vícios redibitórios, evicção e arras',t:'ct-gar',live:'ct-gar'},
 {n:3,u:'A',tit:'Extinção e revisão dos contratos',t:'ct-ext',live:'ct-ext'},
 {n:4,u:'B',tit:'Compra e venda, doação, locação e mandato',t:'ct-esp',live:'ct-esp'}
];
const CT_UNITS=[['A','Parte I · Teoria geral'],['B','Parte II · Contratos em espécie']];
const CT_BANK=[
 {id:'kg1',t:'ct-geral',q:'"Pacta sunt servanda" expressa qual princípio?',o:['Função social','Obrigatoriedade dos contratos','Relatividade'],a:1,e:'O contrato faz lei entre as partes e deve ser cumprido.',art:'Princípio da obrigatoriedade'},
 {id:'kg2',t:'ct-geral',q:'O contrato que gera obrigações para as duas partes é:',o:['Unilateral','Bilateral ou sinalagmático','Gratuito'],a:1,e:'Bilateral é o que cria obrigações recíprocas, como a compra e venda.',art:'Classificação'},
 {id:'kg3',t:'ct-geral',q:'Quem responde a uma proposta mudando o preço:',o:['Aceitou a proposta','Fez nova proposta','Celebrou o contrato'],a:1,e:'A aceitação fora do prazo, com adições, restrições ou modificações, importa nova proposta.',art:'Art. 431, CC'},
 {id:'kg4',t:'ct-geral',q:'Os contratantes devem agir com lealdade na conclusão e na execução do contrato. É o princípio da:',o:['Boa-fé objetiva','Autonomia da vontade','Relatividade'],a:0,e:'Os contratantes são obrigados a guardar, assim na conclusão do contrato como em sua execução, os princípios de probidade e boa-fé.',art:'Art. 422, CC'},
 {id:'kv1',t:'ct-gar',q:'O carro comprado tinha um defeito oculto no motor. O comprador quer ficar com o carro. Qual ação?',o:['Redibitória','Estimatória (quanti minoris), pedindo abatimento do preço','Evicção'],a:1,e:'Em vez de rejeitar a coisa, o adquirente pode reclamar abatimento no preço.',art:'Art. 442, CC'},
 {id:'kv2',t:'ct-gar',q:'Qual o prazo para reclamar de vício redibitório em bem móvel, contado da entrega?',o:['7 dias','30 dias','1 ano'],a:1,e:'30 dias para móveis e 1 ano para imóveis, contados da entrega efetiva.',art:'Art. 445, CC'},
 {id:'kv3',t:'ct-gar',q:'O comprador perde o terreno para um terceiro que provou ser o verdadeiro dono. Isso é:',o:['Vício redibitório','Evicção','Distrato'],a:1,e:'Evicção é a perda da coisa por decisão que reconhece a terceiro direito anterior.',art:'Art. 447, CC'},
 {id:'kv4',t:'ct-gar',q:'Com arras penitenciais, quem recebeu o sinal se arrepende. Deve:',o:['Devolver o sinal','Devolver o sinal mais o equivalente','Devolver o sinal e pagar perdas e danos comprovadas'],a:1,e:'Quem recebeu as arras e se arrepende devolve-as mais o equivalente; não há indenização suplementar.',art:'Art. 420, CC'},
 {id:'kv5',t:'ct-gar',q:'Nas arras confirmatórias, a parte inocente pode pedir mais do que o sinal?',o:['Não, nunca','Sim, se provar maior prejuízo; as arras valem como mínimo','Só se houver cláusula penal'],a:1,e:'A parte inocente pode pedir indenização suplementar, valendo as arras como taxa mínima.',art:'Art. 419, CC'},
 {id:'ke1',t:'ct-ext',q:'As partes, de comum acordo, põem fim ao contrato. Isso é:',o:['Resolução','Distrato (resilição bilateral)','Rescisão por lesão'],a:1,e:'O distrato faz-se pela mesma forma exigida para o contrato.',art:'Art. 472, CC'},
 {id:'ke2',t:'ct-ext',q:'Num contrato bilateral, um contratante pode exigir a prestação do outro sem ter cumprido a sua?',o:['Sim','Não: é a exceção do contrato não cumprido','Só com autorização judicial'],a:1,e:'Nenhum dos contratantes, antes de cumprida a sua obrigação, pode exigir o implemento da do outro.',art:'Art. 476, CC'},
 {id:'ke3',t:'ct-ext',q:'Um fato extraordinário e imprevisível torna a prestação de um contratante excessivamente onerosa, com extrema vantagem ao outro. Ele pode pedir:',o:['Nada: pacta sunt servanda','A resolução do contrato, ou sua revisão','Só perdas e danos'],a:1,e:'Onerosidade excessiva: o devedor pode pedir a resolução, e o réu pode evitá-la oferecendo modificar as condições.',art:'Arts. 478 e 479, CC'},
 {id:'ke4',t:'ct-ext',q:'O contrato foi celebrado sob coação. Ele é:',o:['Nulo','Anulável','Inexistente'],a:1,e:'É anulável o negócio por vício resultante de erro, dolo, coação, estado de perigo, lesão ou fraude contra credores.',art:'Art. 171, II, CC'},
 {id:'ks1',t:'ct-esp',q:'A doação pura pode ser revogada se o donatário:',o:['Deixar de visitar o doador','Ofender fisicamente o doador','Vender o bem doado'],a:1,e:'A ofensa física ao doador é uma das causas de ingratidão.',art:'Art. 557, II, CC'},
 {id:'ks2',t:'ct-esp',q:'Qual o prazo para o doador pedir a revogação por ingratidão?',o:['1 ano, contado de quando soube do fato e de quem foi o autor','5 anos','A qualquer tempo'],a:0,e:'A revogação por ingratidão deve ser pleiteada dentro de um ano, a contar de quando chegue ao conhecimento do doador o fato e o seu autor.',art:'Art. 559, CC'},
 {id:'ks3',t:'ct-esp',q:'Na compra e venda de imóvel, quando o comprador se torna dono?',o:['Na assinatura do contrato','Com o registro da escritura no cartório de imóveis','Com o pagamento do preço'],a:1,e:'Transfere-se entre vivos a propriedade imóvel mediante o registro do título no Registro de Imóveis.',art:'Art. 1.245, CC'},
 {id:'ks4',t:'ct-esp',q:'O instrumento do mandato é:',o:['O contrato social','A procuração','A escritura de compra e venda'],a:1,e:'Opera-se o mandato quando alguém recebe de outrem poderes para praticar atos em seu nome; a procuração é o instrumento.',art:'Art. 653, CC'}
];
const CT_CARDS=[
 {id:'ctc1',t:'ct-geral',f:'Princípios contratuais',b:'Autonomia da vontade, obrigatoriedade, consensualismo, relatividade dos efeitos, boa-fé objetiva e função social.',art:'Arts. 421 e 422, CC'},
 {id:'ctc2',t:'ct-geral',f:'Fases de formação',b:'Negociações preliminares, proposta (policitação) e aceitação. Aceitação com modificações é nova proposta.',art:'Arts. 427 a 435, CC'},
 {id:'ctc3',t:'ct-gar',f:'Vício redibitório × evicção',b:'Vício redibitório: defeito oculto na coisa. Evicção: perda da coisa para terceiro com direito anterior. Ambos só em contratos onerosos.',art:'Arts. 441 e 447, CC'},
 {id:'ctc4',t:'ct-gar',f:'Prazos do vício redibitório',b:'30 dias (móvel) e 1 ano (imóvel) da entrega. Se já estava na posse, metade, da alienação. Vício que só aparece depois: até 180 dias ou 1 ano da ciência.',art:'Art. 445, CC'},
 {id:'ctc5',t:'ct-gar',f:'Arras confirmatórias × penitenciais',b:'Confirmatórias: confirmam o contrato; admite indenização suplementar. Penitenciais: dão direito de arrependimento; sem indenização suplementar.',art:'Arts. 418 a 420, CC'},
 {id:'ctc6',t:'ct-ext',f:'Resolução, resilição e anulação',b:'Resolução: inadimplemento. Resilição: vontade (distrato ou denúncia). Anulação ou nulidade: defeito na formação.',art:'Arts. 472 a 480, CC'},
 {id:'ctc7',t:'ct-esp',f:'Causas de revogação da doação por ingratidão',b:'Atentado contra a vida, ofensa física, injúria grave ou calúnia, e recusa de alimentos que podia prestar.',art:'Art. 557, CC'}
];

function prazoVicio(){
  const id=uid('pv');
  later(()=>{
    const root=$('#'+id),s={bem:'movel',posse:false,oculto:false};
    function render(){$$('[data-k]',root).forEach(b=>b.setAttribute('aria-pressed',String(s[b.dataset.k])===b.dataset.v));
      let p,d;
      if(s.oculto){p=s.bem==='movel'?'até 180 dias':'até 1 ano';d=`O vício só podia ser percebido mais tarde: o prazo corre de quando o adquirente <b>teve ciência</b> do defeito, com o limite de ${s.bem==='movel'?'180 dias':'1 ano'} (art. 445, §1º).`}
      else if(s.posse){p=s.bem==='movel'?'15 dias':'6 meses';d='O comprador já estava na posse da coisa: o prazo conta da alienação e <b>cai pela metade</b> (art. 445, caput).'}
      else{p=s.bem==='movel'?'30 dias':'1 ano';d='Contado da <b>entrega efetiva</b> da coisa (art. 445, caput). Prazo decadencial: não se suspende nem se interrompe.'}
      const o=$('.wzout',root);o.className='wzout warn';o.innerHTML=`<b>${p}</b><p>${d}</p>`;swapAnim(o)}
    root.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;const k=b.dataset.k;s[k]=k==='bem'?b.dataset.v:b.dataset.v==='true';render()});render();
  });
  const q=(k,l,o)=>`<div class="wzq"><span>${l}</span><div class="seg">${o.map(([v,t])=>`<button data-k="${k}" data-v="${v}">${t}</button>`).join('')}</div></div>`;
  return `<div class="wz" id="${id}"><div class="wzqs">${q('bem','Que bem?',[['movel','Móvel'],['imovel','Imóvel']])}${q('posse','O comprador já estava na posse antes da venda?',[['true','Sim'],['false','Não']])}${q('oculto','O defeito, por natureza, só podia aparecer depois?',[['true','Sim'],['false','Não']])}</div><div class="wzout" aria-live="polite"></div></div>`;
}
function arras(){
  const id=uid('ar');
  later(()=>{
    const root=$('#'+id),r=$('input',root),s={tipo:'conf',quem:'deu'};
    function render(){const A=+r.value;$('.arv',root).textContent=money(A);$$('[data-k]',root).forEach(b=>b.setAttribute('aria-pressed',s[b.dataset.k]===b.dataset.v));
      let txt,dar,rec;
      if(s.tipo==='pen'){if(s.quem==='deu'){dar=-A;rec=A;txt=`Quem deu o sinal se arrependeu: <b>perde os ${money(A)}</b> para a outra parte. Sem indenização suplementar (art. 420).`}else{dar=A;rec=-A;txt=`Quem recebeu se arrependeu: <b>devolve os ${money(A)} mais o equivalente</b>, ${money(2*A)} no total. Sem indenização suplementar (art. 420).`}}
      else{if(s.quem==='deu'){dar=-A;rec=A;txt=`Quem deu o sinal não cumpriu: a outra parte pode desfazer o contrato e <b>reter os ${money(A)}</b>. Se provar prejuízo maior, pede a diferença; as arras são o mínimo (arts. 418 e 419).`}else{dar=A;rec=-A;txt=`Quem recebeu não cumpriu: quem deu pode desfazer o contrato e exigir <b>a devolução mais o equivalente</b> (${money(2*A)}), com correção, juros e honorários. Também pode pedir indenização suplementar (arts. 418 e 419).`}}
      $('.ar-d',root).textContent=(dar>0?'+ ':'− ')+money(Math.abs(dar));$('.ar-r',root).textContent=(rec>0?'+ ':'− ')+money(Math.abs(rec));
      $('.ar-d',root).className='ar-d num '+(dar>0?'up':'down');$('.ar-r',root).className='ar-r num '+(rec>0?'up':'down');
      const o=$('.rmsg',root);o.innerHTML=txt;swapAnim(o)}
    r.addEventListener('input',render);root.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;s[b.dataset.k]=b.dataset.v;render()});render();
  });
  return `<div class="card" id="${id}"><div class="wzqs"><div class="wzq"><span>Tipo de arras</span><div class="seg"><button data-k="tipo" data-v="conf">Confirmatórias</button><button data-k="tipo" data-v="pen">Penitenciais</button></div></div>
    <div class="wzq"><span>Quem desistiu ou não cumpriu?</span><div class="seg"><button data-k="quem" data-v="deu">Quem deu o sinal</button><button data-k="quem" data-v="recebeu">Quem recebeu</button></div></div></div>
    <label class="lab" style="margin-top:12px;display:block" for="${id}-r">Valor do sinal: <output class="arv num"></output></label><input id="${id}-r" type="range" min="5000" max="100000" step="5000" value="20000">
    <div class="arbal"><div><small>Quem deu o sinal</small><b class="ar-d num"></b></div><div><small>Quem recebeu</small><b class="ar-r num"></b></div></div><p class="rmsg" aria-live="polite"></p></div>`;
}

defCourse('contratos',{nome:'Contratos',area:'Direito Civil',desc:'Da formação à extinção, com as garantias do comprador e os principais contratos em espécie.',topics:CT_TOPICS,mods:CT_MODS,units:CT_UNITS,bank:CT_BANK,cards:CT_CARDS});

defLesson('ct-geral',{
  hero:()=>heroSeal('PACTA SUNT SERVANDA • BOA-FÉ • FUNÇÃO SOCIAL • '),
  title:['Teoria geral','dos contratos'],
  lead:'Os princípios que regem os contratos, como eles se classificam e o caminho da negociação até o acordo.',
  sections:[
    {id:'principios',nav:'Princípios',h:'Os princípios contratuais',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Autonomia da vontade','As partes <em>escolhem</em> se, com quem e como contratar, dentro da lei.'],
      ['Obrigatoriedade','<em>Pacta sunt servanda</em>: o contrato faz lei entre as partes.'],
      ['Relatividade','O contrato, em regra, só produz efeitos <em>entre as partes</em>.'],
      ['Boa-fé objetiva','<em>Lealdade e probidade</em> antes, durante e depois do contrato (art. 422).'],
      ['Função social','A liberdade contratual é exercida <em>nos limites da função social</em> do contrato (art. 421).'],
      ['Rebus sic stantibus','O contrato pode ser revisto se as <em>circunstâncias mudam</em> de forma extraordinária.']])},
    {id:'classificacao',nav:'Classificação',h:'Como classificar',lead:'Unilateral ou bilateral diz respeito às obrigações; gratuito ou oneroso, à vantagem econômica. Classifique.',html:()=>W.classify({buckets:['Bilateral e oneroso','Unilateral e gratuito','Unilateral e oneroso'],items:[
      ['Compra e venda.',0,'Obrigações recíprocas e vantagens para ambos.'],
      ['Doação pura.',1,'Só o doador se obriga, e só o donatário ganha.'],
      ['Mútuo com juros (empréstimo de dinheiro remunerado).',2,'Só o mutuário tem obrigação depois da entrega, mas ambos têm vantagem.'],
      ['Locação.',0,'Locador cede o uso; locatário paga aluguel.'],
      ['Comodato (empréstimo gratuito de coisa).',1,'Só o comodatário se obriga a devolver, sem contraprestação.']]})},
    {id:'formacao',nav:'Formação',h:'Da conversa ao contrato',lead:'Avance pelas fases de formação.',html:()=>W.timeline({steps:[
      {t:'Negociações preliminares',s:'puntuação',d:'Conversas e sondagens, sem vínculo. Mas quem cria expectativa legítima e rompe de forma desleal pode responder pela quebra da boa-fé.'},
      {t:'Proposta',s:'policitação, art. 427',d:'A oferta obriga o proponente, se o contrário não resultar dos termos dela, da natureza do negócio ou das circunstâncias.'},
      {t:'Aceitação',s:'oblação, art. 431',d:'A concordância pura e simples forma o contrato. Se vier com mudanças ou fora do prazo, é uma nova proposta.'},
      {t:'Contrato formado',s:'art. 434',d:'Entre ausentes, o contrato se torna perfeito, em regra, desde que a aceitação é expedida.'}]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['421','Função social','A liberdade contratual será exercida nos limites da função social do contrato.'],
      ['422','Boa-fé','Os contratantes devem guardar, na conclusão e na execução, os princípios de probidade e boa-fé.'],
      ['427','Proposta','A proposta de contrato obriga o proponente, salvo se o contrário resultar de seus termos ou das circunstâncias.'],
      ['431','Contraproposta','A aceitação fora do prazo, com adições, restrições ou modificações, importará nova proposta.'],
      ['434','Entre ausentes','Os contratos entre ausentes tornam-se perfeitos desde que a aceitação é expedida, salvo exceções.']])}
  ]
});
defLesson('ct-gar',{
  hero:()=>heroSeal('VÍCIO OCULTO • EVICÇÃO • SINAL • ARTS. 417 A 450 • '),
  title:['Garantias','do adquirente'],
  lead:'O que o comprador pode fazer quando a coisa tem defeito ou quando a perde para outra pessoa, e como funciona o sinal.',
  sections:[
    {id:'qual',nav:'Vício ou evicção?',h:'Vício redibitório ou evicção?',lead:'Um é defeito na coisa; o outro, problema no direito sobre ela. Classifique.',html:()=>W.classify({buckets:['Vício redibitório','Evicção','Nenhum'],items:[
      ['O carro usado tem o câmbio quebrado, o que não dava para ver no test drive.',0,'Defeito oculto que diminui o valor (art. 441).'],
      ['O comprador perde a casa em ação movida pelo verdadeiro proprietário.',1,'Perda para terceiro com direito anterior (art. 447).'],
      ['O sofá tinha um rasgo bem visível, que o comprador viu e aceitou.',2,'Defeito aparente e conhecido não é vício redibitório.'],
      ['A geladeira doada sem encargo para de funcionar por defeito oculto.',2,'A garantia é dos contratos onerosos; doação pura não gera responsabilidade.'],
      ['O comprador perde metade do terreno, que pertencia ao vizinho.',1,'Evicção parcial (art. 455).']]})},
    {id:'prazo',nav:'Prazo',h:'Até quando reclamar do defeito',lead:'O prazo depende do bem, da posse e de quando o defeito pôde ser percebido.',html:prazoVicio},
    {id:'arras',nav:'Arras',h:'Quem fica com o sinal',lead:'Escolha o tipo de arras e quem desistiu. Os saldos mostram quem ganha e quem perde.',html:arras},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['418','Arras confirmatórias','Quem deu e não cumpriu perde as arras; quem recebeu e não cumpriu devolve-as mais o equivalente, com correção, juros e honorários.'],
      ['420','Arras penitenciais','Com direito de arrependimento, as arras têm função só indenizatória, sem indenização suplementar.'],
      ['441','Vício redibitório','A coisa recebida em contrato comutativo pode ser enjeitada por vícios ou defeitos ocultos que a tornem imprópria ou lhe diminuam o valor.'],
      ['442','Abatimento','Em vez de rejeitar a coisa, pode o adquirente reclamar abatimento no preço.'],
      ['445','Prazos','30 dias para móvel e 1 ano para imóvel, da entrega efetiva; reduzidos à metade se o adquirente já estava na posse.'],
      ['447','Evicção','Nos contratos onerosos, o alienante responde pela evicção, ainda que a aquisição tenha sido em hasta pública.']])}
  ]
});
defLesson('ct-ext',{
  hero:()=>heroSeal('RESOLUÇÃO • RESILIÇÃO • DISTRATO • ONEROSIDADE EXCESSIVA • '),
  title:['Extinção','dos contratos'],
  lead:'Todas as formas de um contrato acabar: pelo cumprimento, por vontade das partes, por inadimplemento ou por defeito de origem.',
  sections:[
    {id:'formas',nav:'Formas',h:'Como este contrato acabou?',lead:'Classifique a forma de extinção.',html:()=>W.classify({buckets:['Cumprimento','Resilição','Resolução','Invalidade'],items:[
      ['O comprador pagou e recebeu o carro.',0,'Extinção normal, pelo adimplemento.'],
      ['Locador e locatário assinam um distrato.',1,'Resilição bilateral (art. 472).'],
      ['O cliente cancela a academia, como o contrato permite.',1,'Resilição unilateral, por denúncia (art. 473).'],
      ['O locatário deixa de pagar e o locador pede o fim do contrato.',2,'Resolução por inadimplemento (art. 475).'],
      ['O contrato foi assinado por um menor de 14 anos, sem representante.',3,'Nulo: agente absolutamente incapaz (art. 166, I).']]})},
    {id:'excecao',nav:'Exceção e revisão',h:'Defesas no meio do caminho',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Exceção do contrato não cumprido','Quem não cumpriu sua parte <em>não pode exigir</em> a do outro (art. 476).'],
      ['Onerosidade excessiva','Fato extraordinário e imprevisível que torna a prestação <em>excessivamente onerosa</em>: pede-se a resolução (art. 478).'],
      ['Revisão','O réu pode evitar a resolução <em>oferecendo modificar</em> as condições de forma equitativa (art. 479).'],
      ['Cláusula resolutiva','Expressa: opera <em>de pleno direito</em>. Tácita: depende de interpelação judicial (art. 474).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['472','Distrato','O distrato faz-se pela mesma forma exigida para o contrato.'],
      ['473','Denúncia','A resilição unilateral, nos casos em que a lei permite, opera mediante denúncia notificada à outra parte.'],
      ['475','Resolução','A parte lesada pelo inadimplemento pode pedir a resolução do contrato, se não preferir exigir-lhe o cumprimento, com perdas e danos.'],
      ['476','Exceção','Nos contratos bilaterais, nenhum contratante, antes de cumprir sua obrigação, pode exigir a do outro.'],
      ['478','Onerosidade excessiva','Prestação excessivamente onerosa, com extrema vantagem para a outra parte, por fatos extraordinários e imprevisíveis, permite pedir a resolução.']])}
  ]
});
defLesson('ct-esp',{
  hero:()=>heroSeal('COMPRA E VENDA • DOAÇÃO • LOCAÇÃO • MANDATO • '),
  title:['Contratos','em espécie'],
  lead:'Os contratos que mais aparecem na vida e na prova, e as regras que só valem para cada um.',
  sections:[
    {id:'qual',nav:'Qual contrato?',h:'Que contrato é este?',lead:'Classifique pelo tipo de contrato.',html:()=>W.classify({buckets:['Compra e venda','Doação','Locação','Mandato'],items:[
      ['Ana entrega o carro a Bruno, que paga R$ 40 mil.',0,'Coisa por preço em dinheiro (art. 481).'],
      ['O avô transfere um apartamento à neta, sem nada em troca.',1,'Liberalidade (art. 538).'],
      ['Clara cede o uso da sala comercial por R$ 2 mil mensais.',2,'Cessão temporária de uso mediante retribuição (art. 565; Lei 8.245/91).'],
      ['Davi outorga procuração para o irmão vender seu imóvel.',3,'Poderes para agir em seu nome (art. 653).']]})},
    {id:'doacao',nav:'Revogar doação',h:'A doação pode ser revogada?',lead:'A revogação por ingratidão tem rol taxativo. Classifique.',html:()=>W.classify({buckets:['Pode revogar','Não pode'],items:[
      ['O donatário agrediu fisicamente o doador.',0,'Ofensa física (art. 557, II).'],
      ['O donatário deixou de visitar o doador por anos.',1,'Ingratidão moral fora do rol não autoriza revogação.'],
      ['O donatário, podendo, recusou alimentos ao doador necessitado.',0,'Art. 557, IV.'],
      ['O donatário caluniou o pai do doador.',0,'A ofensa ao ascendente do doador também conta (art. 558).'],
      ['A doação era remuneratória, por serviços já prestados.',1,'Doações puramente remuneratórias não se revogam por ingratidão (art. 564, I).']]})},
    {id:'compra',nav:'Compra e venda',h:'Compra e venda em quatro ideias',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Elementos','<em>Coisa, preço e consentimento</em>. O preço deve ser em dinheiro, certo ou determinável.'],
      ['Contrato não transfere','O contrato obriga a transferir; a propriedade passa pela <em>tradição</em> (móvel) ou pelo <em>registro</em> (imóvel).'],
      ['Riscos','Até a tradição, os riscos da coisa são do <em>vendedor</em>, e os do preço, do comprador (art. 492).'],
      ['Venda a descendente','É anulável se os <em>outros descendentes e o cônjuge</em> não consentirem (art. 496).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['481','Compra e venda','Um contratante se obriga a transferir o domínio de certa coisa, e o outro, a pagar-lhe certo preço em dinheiro.'],
      ['496','Venda a descendente','É anulável a venda de ascendente a descendente sem o consentimento dos outros descendentes e do cônjuge.'],
      ['538','Doação','Por liberalidade, uma pessoa transfere do seu patrimônio bens ou vantagens para o de outra.'],
      ['557','Ingratidão','Atentado contra a vida, ofensa física, injúria grave ou calúnia, e recusa de alimentos.'],
      ['653','Mandato','Alguém recebe de outrem poderes para, em seu nome, praticar atos ou administrar interesses.']])}
  ]
});
