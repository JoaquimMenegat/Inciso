/* ================= Matéria: Direito das Obrigações ================= */
const OB_TOPICS=[
 {id:'ob-est',nome:'Estrutura e modalidades',mod:1},
 {id:'ob-risco',nome:'Riscos e inadimplemento',mod:2},
 {id:'ob-plur',nome:'Divisibilidade e solidariedade',mod:3},
 {id:'ob-pag',nome:'Transmissão e pagamento',mod:4}
];
const OB_MODS=[
 {n:1,u:'A',tit:'Estrutura e modalidades das obrigações',t:'ob-est',live:'ob-est'},
 {n:2,u:'A',tit:'Riscos sobre a coisa e inadimplemento',t:'ob-risco',live:'ob-risco'},
 {n:3,u:'B',tit:'Obrigações divisíveis, indivisíveis e solidárias',t:'ob-plur',live:'ob-plur'},
 {n:4,u:'B',tit:'Transmissão, pagamento e pagamento indireto',t:'ob-pag',live:'ob-pag'}
];
const OB_UNITS=[['A','Parte I · A obrigação'],['B','Parte II · Sujeitos e extinção']];
const OB_BANK=[
 {id:'oe1',t:'ob-est',q:'Quais são os elementos da obrigação?',o:['Sujeitos, objeto e vínculo jurídico','Credor, juiz e sentença','Contrato, forma e registro'],a:0,e:'Toda obrigação tem sujeitos (credor e devedor), objeto (a prestação) e o vínculo que permite exigi-la.',art:'Teoria geral'},
 {id:'oe2',t:'ob-est',q:'O advogado se obriga a defender bem o cliente, não a ganhar a causa. Essa obrigação é:',o:['De resultado','De meio','Natural'],a:1,e:'Na obrigação de meio, o devedor promete diligência; o resultado não é garantido.',art:'Doutrina'},
 {id:'oe3',t:'ob-est',q:'Quem compra um apartamento responde pelas taxas de condomínio atrasadas do vendedor?',o:['Não, a dívida é pessoal do vendedor','Sim: é obrigação propter rem, que acompanha a coisa','Só se constar da escritura'],a:1,e:'O adquirente responde pelos débitos do alienante em relação ao condomínio, inclusive multas e juros.',art:'Art. 1.345, CC'},
 {id:'oe4',t:'ob-est',q:'A dívida de jogo paga voluntariamente pode ser cobrada de volta?',o:['Sim, sempre','Não: é obrigação natural, que não se exige mas não se repete','Só se o valor for alto'],a:1,e:'As dívidas de jogo ou aposta não obrigam a pagamento, mas não se pode recobrar a quantia voluntariamente paga.',art:'Art. 814, CC'},
 {id:'or1',t:'ob-risco',q:'Antes da entrega, o cavalo vendido morre atingido por um raio. O que acontece?',o:['O devedor paga o valor do cavalo','A obrigação se resolve para ambas as partes','O comprador perde o preço'],a:1,e:'Perdida a coisa sem culpa do devedor antes da tradição, fica resolvida a obrigação para ambas as partes (res perit domino).',art:'Art. 234, CC'},
 {id:'or2',t:'ob-risco',q:'Mesmo caso, mas o cavalo morreu porque o vendedor o deixou sem água. O comprador pode exigir:',o:['Só a devolução do preço','O equivalente mais perdas e danos','Nada'],a:1,e:'Com culpa do devedor, responde ele pelo equivalente e mais perdas e danos.',art:'Art. 234, CC'},
 {id:'or3',t:'ob-risco',q:'O devedor deve entregar 100 sacas de soja (coisa incerta) e um incêndio destrói seu armazém. Ele se libera?',o:['Sim, por força maior','Não: o gênero não perece','Só se avisar o credor'],a:1,e:'Antes da escolha, o devedor não pode alegar perda ou deterioração da coisa, ainda que por força maior ou caso fortuito.',art:'Art. 246, CC'},
 {id:'or4',t:'ob-risco',q:'Na obrigação de dar coisa incerta, a quem cabe a escolha, se o contrato nada diz?',o:['Ao credor','Ao devedor, que não pode dar a pior nem é obrigado a dar a melhor','Ao juiz'],a:1,e:'A escolha pertence ao devedor, pelo critério do meio-termo.',art:'Art. 244, CC'},
 {id:'or5',t:'ob-risco',q:'O comodatário devolveria o carro emprestado, mas ele é destruído numa enchente sem culpa sua. Quem sofre a perda?',o:['O comodatário','O dono (credor da restituição)','Os dois, meio a meio'],a:1,e:'Na obrigação de restituir, perdida a coisa sem culpa do devedor, sofre o credor a perda.',art:'Art. 238, CC'},
 {id:'op1',t:'ob-plur',q:'Três devedores solidários devem R$ 90 mil. O credor pode cobrar de um só deles:',o:['R$ 30 mil','R$ 90 mil','Nada sem cobrar os outros'],a:1,e:'Na solidariedade passiva, o credor pode exigir de um ou de alguns a dívida toda.',art:'Art. 275, CC'},
 {id:'op2',t:'ob-plur',q:'A solidariedade se presume quando há vários devedores no mesmo contrato?',o:['Sim','Não: resulta da lei ou da vontade das partes','Só entre parentes'],a:1,e:'A solidariedade não se presume; resulta da lei ou da vontade das partes.',art:'Art. 265, CC'},
 {id:'op3',t:'ob-plur',q:'O devedor solidário que pagou tudo pode cobrar dos outros?',o:['Não','Sim, a quota de cada um, repartindo também a do insolvente','Sim, o total de qualquer um'],a:1,e:'Quem satisfaz a dívida por inteiro pode exigir de cada codevedor a sua quota; a do insolvente se divide entre todos.',art:'Art. 283, CC'},
 {id:'op4',t:'ob-plur',q:'A obrigação indivisível de entregar um cavalo se converte em perdas e danos. Ela continua indivisível?',o:['Sim','Não: perde a indivisibilidade','Só se houver solidariedade'],a:1,e:'Perde a qualidade de indivisível a obrigação que se resolver em perdas e danos.',art:'Art. 263, CC'},
 {id:'og1',t:'ob-pag',q:'O credor cede seu crédito a um terceiro. O devedor precisa concordar?',o:['Sim, sempre','Não, mas precisa ser notificado para que a cessão tenha eficácia contra ele','Só se a dívida for alta'],a:1,e:'A cessão não depende do consentimento do devedor, mas só tem eficácia em relação a ele quando notificado.',art:'Arts. 286 e 290, CC'},
 {id:'og2',t:'ob-pag',q:'Um terceiro quer assumir a dívida do devedor. É preciso:',o:['Só a vontade do terceiro','O consentimento expresso do credor','Autorização judicial'],a:1,e:'A assunção de dívida exige consentimento expresso do credor.',art:'Art. 299, CC'},
 {id:'og3',t:'ob-pag',q:'O devedor paga, de boa-fé, a quem tudo indicava ser o credor, mas não era. O pagamento vale?',o:['Não, deve pagar de novo','Sim: pagamento ao credor putativo','Só pela metade'],a:1,e:'O pagamento feito de boa-fé ao credor putativo é válido, ainda que se prove depois que não era credor.',art:'Art. 309, CC'},
 {id:'og4',t:'ob-pag',q:'O terceiro não interessado que paga em seu próprio nome:',o:['Sub-roga-se em todos os direitos do credor','Tem direito a reembolso, mas não se sub-roga','Não tem direito a nada'],a:1,e:'Tem direito a reembolsar-se do que pagou, mas não se sub-roga nos direitos do credor.',art:'Art. 305, CC'},
 {id:'og5',t:'ob-pag',q:'O credor aceita receber um carro no lugar do dinheiro devido. Isso é:',o:['Novação','Dação em pagamento','Compensação'],a:1,e:'O credor pode consentir em receber prestação diversa da que lhe é devida.',art:'Art. 356, CC'}
];
const OB_CARDS=[
 {id:'ob1',t:'ob-est',f:'Elementos da obrigação',b:'Sujeitos (credor e devedor), objeto (prestação de dar, fazer ou não fazer) e vínculo jurídico (débito e responsabilidade).',art:'Teoria geral'},
 {id:'ob2',t:'ob-est',f:'Obrigação propter rem',b:'Acompanha a coisa: quem adquire assume, como as dívidas de condomínio.',art:'Art. 1.345, CC'},
 {id:'ob3',t:'ob-risco',f:'Res perit domino',b:'Até a tradição, a coisa perece para o dono. Sem culpa, resolve-se a obrigação; com culpa, equivalente mais perdas e danos.',art:'Art. 234, CC'},
 {id:'ob4',t:'ob-risco',f:'Genus non perit',b:'Na coisa incerta, antes da escolha, o devedor não pode alegar perda nem por força maior.',art:'Art. 246, CC'},
 {id:'ob5',t:'ob-plur',f:'Solidariedade',b:'Cada credor pode exigir, e cada devedor deve, a dívida toda. Não se presume: vem da lei ou do contrato.',art:'Arts. 264 e 265, CC'},
 {id:'ob6',t:'ob-plur',f:'Divisível com vários sujeitos',b:'Presume-se dividida em tantas obrigações iguais e distintas quantos forem os credores ou devedores.',art:'Art. 257, CC'},
 {id:'ob7',t:'ob-pag',f:'Cessão de crédito × assunção de dívida',b:'Cessão: troca o credor, sem precisar do devedor (basta notificá-lo). Assunção: troca o devedor, com consentimento expresso do credor.',art:'Arts. 286 e 299, CC'},
 {id:'ob8',t:'ob-pag',f:'Formas de pagamento indireto',b:'Consignação, sub-rogação, imputação, dação, novação, compensação, confusão e remissão.',art:'Arts. 334 a 388, CC'}
];

function riscoCoisa(){
  const id=uid('rk');
  const R={
    'dar-perda-0':['Obrigação resolvida','A coisa pereceu para o dono (o devedor). Ninguém deve nada; se o preço foi pago, é devolvido.','Art. 234','ok'],
    'dar-perda-1':['Equivalente + perdas e danos','O devedor responde pelo valor da coisa e pelos prejuízos do credor.','Art. 234','bad'],
    'dar-det-0':['O credor escolhe','Pode resolver a obrigação ou aceitar a coisa no estado em que está, com abatimento do preço.','Art. 235','warn'],
    'dar-det-1':['Equivalente ou coisa no estado, + perdas e danos','O credor escolhe entre o equivalente e a coisa deteriorada; em ambos os casos, com indenização.','Art. 236','bad'],
    'rest-perda-0':['O credor sofre a perda','Na restituição, a coisa já é do credor: a perda é dele, ressalvados os direitos até o dia do fato.','Art. 238','warn'],
    'rest-perda-1':['Equivalente + perdas e danos','O devedor que perdeu por culpa a coisa alheia paga o equivalente e os prejuízos.','Art. 239','bad'],
    'rest-det-0':['O credor recebe como está','Sem culpa do devedor, a coisa é devolvida no estado em que se acha, sem indenização.','Art. 240','warn'],
    'rest-det-1':['Equivalente + perdas e danos','Com culpa, aplica-se a regra da perda culposa.','Art. 240','bad']};
  later(()=>{
    const root=$('#'+id),s={tipo:'dar',ev:'perda',culpa:'0'};
    function render(){$$('[data-k]',root).forEach(b=>b.setAttribute('aria-pressed',s[b.dataset.k]===b.dataset.v));
      const r=R[`${s.tipo}-${s.ev}-${s.culpa}`],o=$('.wzout',root);o.className='wzout '+r[3];o.innerHTML=`<b>${r[0]}</b><p>${r[1]}</p><span class="art">${r[2]}, CC</span>`;swapAnim(o);
      $('.rkdono',root).textContent=s.tipo==='dar'?'devedor (vendedor)':'credor (dono que emprestou)'}
    root.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;s[b.dataset.k]=b.dataset.v;render()});render();
  });
  const q=(k,l,o)=>`<div class="wzq"><span>${l}</span><div class="seg">${o.map(([v,t])=>`<button data-k="${k}" data-v="${v}">${t}</button>`).join('')}</div></div>`;
  return `<div class="wz" id="${id}"><div class="wzqs">${q('tipo','Que obrigação?',[['dar','Dar coisa certa'],['rest','Restituir']])}${q('ev','O que aconteceu antes da entrega?',[['perda','Perda total'],['det','Deterioração']])}${q('culpa','Houve culpa do devedor?',[['1','Sim'],['0','Não']])}
    <p class="hint" style="margin:6px 0 0">Até a entrega, o dono da coisa é o <b class="rkdono"></b>.</p></div><div class="wzout" aria-live="polite"></div></div>`;
}
function solidariedade(){
  const id=uid('sd');
  later(()=>{
    const root=$('#'+id),r=$('input',root),s={modo:'sol',insolv:false};
    function render(){const D=+r.value,n=+$('#'+id+'-n').textContent;$('.sdd',root).textContent=money(D);
      $$('[data-k]',root).forEach(b=>b.setAttribute('aria-pressed',String(s[b.dataset.k])===b.dataset.v));
      const names=['Ana','Bruno','Caio','Davi','Eva'].slice(0,n),solv=s.insolv?n-1:n;
      $('.sdrows',root).innerHTML=names.map((nm,i)=>{const ins=s.insolv&&i===n-1;const cobra=s.modo==='sol'?D:D/n;const arca=ins?0:s.modo==='sol'?D/solv:D/n;
        return `<div class="sdrow ${ins?'ins':''}"><b>${nm}${ins?' <small>insolvente</small>':''}</b><div class="rb"><span>Credor pode cobrar</span><div class="track"><i style="width:${cobra/D*100}%;background:var(--seal)"></i></div><b class="num">${money(cobra)}</b></div><div class="rb"><span>Arca, no final</span><div class="track"><i style="width:${arca/D*100}%;background:var(--sage)"></i></div><b class="num">${money(arca)}</b></div></div>`}).join('');
      $('.rmsg',root).innerHTML=s.modo==='sol'?`<b>Solidária:</b> o credor escolhe de quem cobrar os ${money(D)} (art. 275). Quem pagar cobra a quota de cada um${s.insolv?', e a parte do insolvente se reparte entre os solventes':''} (art. 283).`:`<b>Divisível, sem solidariedade:</b> a dívida se parte em ${n} obrigações iguais e distintas (art. 257). Cada um só deve ${money(D/n)}${s.insolv?'; a parte do insolvente é prejuízo do credor':''}.`}
    onStep(root,render);r.addEventListener('input',render);root.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;s[b.dataset.k]=b.dataset.k==='modo'?b.dataset.v:b.dataset.v==='true';render()});render();
  });
  return `<div class="card" id="${id}"><div class="steppers">${stepper(id+'-n','Devedores',3,2,5)}<div><label class="lab" for="${id}-r">Dívida: <output class="sdd num"></output></label><input id="${id}-r" type="range" min="30000" max="300000" step="15000" value="90000"></div></div>
    <div class="wzqs" style="margin:12px 0"><div class="wzq"><span>Regime da dívida</span><div class="seg"><button data-k="modo" data-v="sol">Solidária</button><button data-k="modo" data-v="div">Divisível</button></div></div>
    <div class="wzq"><span>Um dos devedores ficou insolvente?</span><div class="seg"><button data-k="insolv" data-v="true">Sim</button><button data-k="insolv" data-v="false">Não</button></div></div></div>
    <div class="sdrows"></div><p class="rmsg" aria-live="polite"></p></div>`;
}

defCourse('obrigacoes',{nome:'Direito das Obrigações',area:'Direito Civil',desc:'O vínculo entre credor e devedor: modalidades, riscos, solidariedade, transmissão e as formas de pagar.',topics:OB_TOPICS,mods:OB_MODS,units:OB_UNITS,bank:OB_BANK,cards:OB_CARDS});

defLesson('ob-est',{
  hero:()=>heroSeal('SUJEITOS • OBJETO • VÍNCULO • DAR, FAZER, NÃO FAZER • '),
  title:['Estrutura','da obrigação'],
  lead:'O que é uma obrigação, do que ela é feita e as principais formas que ela assume.',
  sections:[
    {id:'elementos',nav:'Elementos',h:'Do que uma obrigação é feita',lead:'Três elementos, e uma distinção alemã que ajuda a entender o terceiro.',html:()=>W.flips([
      ['Sujeitos','O <em>credor</em> (quem pode exigir) e o <em>devedor</em> (quem deve prestar).'],
      ['Objeto','Uma <em>prestação</em>: dar, fazer ou não fazer.'],
      ['Vínculo','O laço jurídico que torna a prestação <em>exigível</em>.'],
      ['Schuld e Haftung','<em>Débito</em> (o dever de prestar) e <em>responsabilidade</em> (o patrimônio que responde se não prestar).']])},
    {id:'prestacao',nav:'Prestações',h:'Dar, fazer ou não fazer?',lead:'Classifique a prestação de cada obrigação.',html:()=>W.classify({buckets:['Dar','Fazer','Não fazer'],items:[
      ['Entregar o carro vendido.',0,'Transferir uma coisa.'],
      ['Pintar o retrato encomendado.',1,'Executar uma atividade, aqui personalíssima.'],
      ['Não abrir uma loja concorrente na mesma rua por 2 anos.',2,'Abster-se de uma conduta.'],
      ['Devolver o livro emprestado.',0,'Restituir é uma espécie de dar.'],
      ['Não construir acima de dois andares.',2,'Abstenção convencionada.']]})},
    {id:'especies',nav:'Espécies',h:'Classificações que caem em prova',lead:'Cada par muda o que o credor pode exigir.',html:()=>W.classify({buckets:['Meio','Resultado','Propter rem','Natural'],items:[
      ['O médico clínico promete tratar o paciente com diligência.',0,'Promete esforço, não cura.'],
      ['A transportadora promete entregar a carga intacta no destino.',1,'Promete o resultado; não chegando, há inadimplemento.'],
      ['O IPTU atrasado do imóvel vendido.',2,'Acompanha a coisa, não a pessoa.'],
      ['A dívida de jogo paga voluntariamente.',3,'Não se exige, mas o que foi pago não se repete (art. 814).'],
      ['O advogado promete atuar bem na defesa.',0,'Não garante a vitória.']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['233','Acessórios','A obrigação de dar coisa certa abrange os acessórios, salvo se o contrário resultar do título ou das circunstâncias.'],
      ['247','Fazer','Incorre em perdas e danos o devedor que recusar prestação a ele só imposta, ou só por ele exequível.'],
      ['250','Não fazer','Extingue-se a obrigação de não fazer se, sem culpa do devedor, tornar-se impossível abster-se do ato.'],
      ['814','Jogo e aposta','Não obrigam a pagamento; mas não se pode recobrar a quantia voluntariamente paga.'],
      ['1.345','Propter rem','O adquirente de unidade responde pelos débitos do alienante em relação ao condomínio.']])}
  ]
});
defLesson('ob-risco',{
  hero:()=>heroSeal('RES PERIT DOMINO • GENUS NON PERIT • ARTS. 234 A 246 • '),
  title:['Riscos','sobre a coisa'],
  lead:'Quem perde quando a coisa some ou se estraga antes da entrega, e por que o gênero nunca perece.',
  sections:[
    {id:'simulador',nav:'Simulador',h:'A coisa se perdeu. E agora?',lead:'Escolha a obrigação, o que aconteceu e se houve culpa. O resultado mostra a regra e o artigo.',html:riscoCoisa},
    {id:'incerta',nav:'Coisa incerta',h:'Coisa incerta',lead:'Indicada só pelo gênero e pela quantidade, até que alguém escolha.',html:()=>W.flips([
      ['Indicação mínima','<em>Gênero e quantidade</em>: "100 sacas de soja tipo 1" (art. 243).'],
      ['Quem escolhe','O <em>devedor</em>, salvo contrato em contrário. Não dá a pior, nem é obrigado à melhor (art. 244).'],
      ['Depois da escolha','Comunicado o credor, vira <em>coisa certa</em> e seguem-se as regras dos arts. 233 a 242.'],
      ['Genus non perit','Antes da escolha, não se alega perda <em>nem por força maior</em> (art. 246).']])},
    {id:'inadimplemento',nav:'Inadimplemento',h:'Absoluto ou relativo?',lead:'A diferença é se a prestação ainda serve ao credor.',html:()=>W.classify({buckets:['Inadimplemento absoluto','Mora'],items:[
      ['O bufê do casamento chega no dia seguinte à festa.',0,'A prestação ficou inútil para o credor: inadimplemento absoluto.'],
      ['O aluguel é pago com 10 dias de atraso.',1,'Ainda útil: há mora, com juros e multa (art. 394).'],
      ['A gráfica entrega os convites uma semana depois do prazo, ainda antes do evento.',1,'O atraso não tornou a prestação inútil.'],
      ['O vestido de noiva encomendado é destruído pelo ateliê antes da entrega.',0,'Impossibilidade definitiva da prestação.']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['234','Perda na coisa certa','Sem culpa do devedor, resolve-se a obrigação; com culpa, responde pelo equivalente e perdas e danos.'],
      ['235','Deterioração sem culpa','O credor pode resolver a obrigação ou aceitar a coisa, abatido de seu preço o valor que perdeu.'],
      ['238','Restituir','Se a coisa se perder sem culpa do devedor antes da tradição, sofre o credor a perda.'],
      ['243','Coisa incerta','A coisa incerta será indicada, ao menos, pelo gênero e pela quantidade.'],
      ['246','Gênero não perece','Antes da escolha, não pode o devedor alegar perda ou deterioração, ainda que por força maior.'],
      ['394','Mora','Considera-se em mora o devedor que não paga e o credor que não quer receber no tempo, lugar e forma devidos.']])}
  ]
});
defLesson('ob-plur',{
  hero:()=>heroSeal('A SOLIDARIEDADE NÃO SE PRESUME • ART. 265 • '),
  title:['Vários credores,','vários devedores'],
  lead:'Quando há mais de um sujeito, a pergunta é: cada um deve a sua parte ou cada um deve tudo?',
  sections:[
    {id:'simulador',nav:'Simulador',h:'Quem paga quanto',lead:'Compare a dívida divisível com a solidária, e veja o que acontece quando um devedor fica insolvente.',html:solidariedade},
    {id:'indivisivel',nav:'Indivisibilidade',h:'Por que uma obrigação é indivisível',lead:'A indivisibilidade pode vir de vários lugares. Classifique.',html:()=>W.classify({buckets:['Natureza','Lei','Vontade das partes'],items:[
      ['Entregar um cavalo de corrida.',0,'Dividido, o cavalo perde a substância e o valor.'],
      ['Uma cirurgia contratada.',0,'Um fato que não se cumpre pela metade.'],
      ['As servidões prediais.',1,'A lei as declara indivisíveis (art. 1.386).'],
      ['Pagar R$ 20 mil de uma só vez, como combinado no contrato.',2,'Seria divisível, mas as partes quiseram pagamento integral.']]})},
    {id:'regras',nav:'Regras',h:'Regras da solidariedade',lead:'O que vale entre credor e devedores, e entre os devedores.',html:()=>W.flips([
      ['Não se presume','Só existe se vier da <em>lei</em> ou do <em>contrato</em> (art. 265).'],
      ['Escolha do credor','Pode cobrar de <em>um, de alguns ou de todos</em>, parcial ou totalmente (art. 275).'],
      ['Regresso','Quem paga tudo cobra de cada um a sua <em>quota</em>; a do insolvente se divide (art. 283).'],
      ['Perdas e danos','Na indivisível, convertida em perdas e danos, <em>acaba a indivisibilidade</em>; na solidária, a solidariedade continua (arts. 263 e 271).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['257','Divisível','Presume-se dividida em tantas obrigações, iguais e distintas, quantos os credores ou devedores.'],
      ['258','Indivisível','Quando a prestação não é suscetível de divisão, por sua natureza, por motivo econômico ou pela razão do negócio.'],
      ['264','Solidariedade','Há solidariedade quando concorre mais de um credor ou devedor, cada um com direito, ou obrigado, à dívida toda.'],
      ['265','Não se presume','A solidariedade não se presume; resulta da lei ou da vontade das partes.'],
      ['275','Cobrança','O credor tem direito a exigir de um ou de alguns dos devedores, parcial ou totalmente, a dívida comum.'],
      ['283','Regresso','O devedor que satisfez a dívida por inteiro pode exigir de cada codevedor a sua quota.']])}
  ]
});
defLesson('ob-pag',{
  hero:()=>heroSeal('QUEM PAGA MAL PAGA DUAS VEZES • QUITAÇÃO • ART. 320 • '),
  title:['Transmissão','e pagamento'],
  lead:'Como se troca o credor ou o devedor, quem pode pagar, a quem se paga e as formas de extinguir a dívida sem a prestação original.',
  sections:[
    {id:'transmissao',nav:'Cessão e assunção',h:'Trocar o credor ou trocar o devedor',lead:'Cada troca tem um requisito diferente.',html:()=>W.tabs([
      {l:'Cessão de crédito',html:`<div class="card">${propsTable([['Quem muda','O credor'],['Precisa do devedor?','Não, basta notificá-lo','ok'],['Sem notificação','Ineficaz contra o devedor','bad'],['Solvência do devedor','Cedente não garante, salvo acordo']])}<p class="hint" style="margin-top:12px">Arts. 286 a 298. O devedor pode opor ao cessionário as exceções que tinha contra o cedente.</p></div>`},
      {l:'Assunção de dívida',html:`<div class="card">${propsTable([['Quem muda','O devedor'],['Precisa do credor?','Sim, consentimento expresso','bad'],['Silêncio do credor','Interpreta-se como recusa','warn'],['Devedor primitivo','Fica liberado, salvo insolvência ignorada']])}<p class="hint" style="margin-top:12px">Arts. 299 a 303. O credor precisa aceitar quem passa a lhe dever.</p></div>`}])},
    {id:'quem',nav:'Quem paga',h:'Quem pode pagar, e o que ganha com isso',lead:'O efeito do pagamento por terceiro depende de quem ele é e em nome de quem paga.',html:()=>W.classify({buckets:['Sub-roga-se','Só reembolso','Nada a cobrar'],items:[
      ['O fiador paga a dívida do afiançado.',0,'Terceiro interessado: sub-roga-se nos direitos do credor (art. 346, III).'],
      ['O tio paga a dívida do sobrinho em nome próprio, sem ter relação com ela.',1,'Terceiro não interessado em nome próprio: reembolso, sem sub-rogação (art. 305).'],
      ['O amigo paga a dívida em nome e por conta do devedor.',2,'Equivale a uma liberalidade: não há o que cobrar (art. 304, p.u.).'],
      ['O adquirente do imóvel hipotecado paga ao credor hipotecário.',0,'Sub-rogação legal (art. 346, II).']]})},
    {id:'indireto',nav:'Pagamento indireto',h:'Extinguir sem pagar o combinado',lead:'Oito caminhos para extinguir a obrigação. Toque nos cartões.',html:()=>W.flips([
      ['Consignação','Depósito da coisa devida quando o credor <em>recusa ou não pode receber</em> (art. 334).'],
      ['Sub-rogação','Quem paga <em>assume o lugar do credor</em>, com seus direitos e garantias (art. 346).'],
      ['Imputação','Com várias dívidas ao mesmo credor, o devedor <em>indica qual está pagando</em> (art. 352).'],
      ['Dação','O credor aceita <em>outra prestação</em> no lugar da devida (art. 356).'],
      ['Novação','Cria-se uma <em>dívida nova</em> para extinguir a antiga (art. 360).'],
      ['Compensação','Duas pessoas credoras e devedoras uma da outra: <em>as dívidas se abatem</em> (art. 368).'],
      ['Confusão','Credor e devedor viram a <em>mesma pessoa</em> (art. 381).'],
      ['Remissão','O credor <em>perdoa</em> a dívida, e o devedor aceita (art. 385).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['286','Cessão','O credor pode ceder o seu crédito, se a isso não se opuser a natureza da obrigação, a lei ou a convenção com o devedor.'],
      ['290','Notificação','A cessão não tem eficácia em relação ao devedor senão quando a este notificada.'],
      ['299','Assunção','É facultado a terceiro assumir a obrigação do devedor, com o consentimento expresso do credor.'],
      ['305','Terceiro não interessado','Quem paga em nome próprio tem direito a reembolsar-se, mas não se sub-roga nos direitos do credor.'],
      ['309','Credor putativo','O pagamento feito de boa-fé ao credor putativo é válido, ainda provado depois que não era credor.'],
      ['320','Quitação','A quitação designará o valor, a espécie da dívida, o nome do devedor, o tempo e o lugar do pagamento, com a assinatura do credor.']])}
  ]
});
