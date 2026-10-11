/* ================= Matéria: Responsabilidade Civil ================= */
const RC_TOPICS=[
 {id:'r-pres',nome:'Pressupostos e ato ilícito',mod:1},
 {id:'r-reg',nome:'Subjetiva e objetiva',mod:2},
 {id:'r-exc',nome:'Excludentes',mod:3},
 {id:'r-ind',nome:'Indenização',mod:4}
];
const RC_MODS=[
 {n:1,u:'A',tit:'Pressupostos, ato ilícito e abuso de direito',t:'r-pres',live:'rc-pres'},
 {n:2,u:'A',tit:'Responsabilidade subjetiva e objetiva',t:'r-reg',live:'rc-reg'},
 {n:3,u:'B',tit:'Excludentes de responsabilidade',t:'r-exc',live:'rc-exc'},
 {n:4,u:'B',tit:'Extensão da indenização e danos',t:'r-ind',live:'rc-ind'}
];
const RC_UNITS=[['A','Parte I · O dever de indenizar'],['B','Parte II · Limites e medida']];
const RC_BANK=[
 {id:'rp1',t:'r-pres',q:'Quais são os pressupostos da responsabilidade civil subjetiva?',o:['Conduta, dano e nexo causal','Conduta, culpa, nexo causal e dano','Dolo, dano e contrato'],a:1,e:'Na responsabilidade subjetiva, a culpa (em sentido amplo) se soma à conduta, ao nexo e ao dano.',art:'Arts. 186 e 927, CC'},
 {id:'rp2',t:'r-pres',q:'Para haver ato ilícito civil, é preciso dolo?',o:['Sim, sempre','Não: negligência ou imprudência bastam','Só para dano moral'],a:1,e:'O art. 186 equipara a ação ou omissão voluntária à negligência e à imprudência.',art:'Art. 186, CC'},
 {id:'rp3',t:'r-pres',q:'O credor cobra a dívida expondo o devedor nas redes sociais. Isso é:',o:['Exercício regular de direito','Abuso de direito, que também é ato ilícito','Lícito, porque a dívida existe'],a:1,e:'Quem exerce um direito excedendo manifestamente os limites do seu fim econômico ou social, da boa-fé ou dos bons costumes comete ato ilícito.',art:'Art. 187, CC'},
 {id:'rp4',t:'r-pres',q:'O ilícito civil exige dano patrimonial?',o:['Sim','Não: o dano pode ser exclusivamente moral','Só se houver contrato'],a:1,e:'O art. 186 fala em causar dano a outrem, "ainda que exclusivamente moral".',art:'Art. 186, CC'},
 {id:'rp5',t:'r-pres',q:'A responsabilidade por abuso de direito depende de culpa?',o:['Sim, sempre','Não: o critério é objetivo-finalístico','Só se houver dolo'],a:1,e:'O abuso de direito se verifica pelo excesso manifesto, independentemente de culpa.',art:'Enunciado 37, CJF'},
 {id:'rr1',t:'r-reg',q:'Um banco responde por fraude de terceiros em conta corrente do cliente?',o:['Só se provada a culpa do banco','Sim, objetivamente: é fortuito interno','Não, a culpa é do fraudador'],a:1,e:'As instituições financeiras respondem objetivamente por fraudes praticadas por terceiros no âmbito de operações bancárias.',art:'Súmula 479, STJ'},
 {id:'rr2',t:'r-reg',q:'Os pais respondem pelo dano causado pelo filho menor sob sua autoridade e companhia mesmo sem culpa deles?',o:['Sim, a responsabilidade é objetiva','Não, a vítima precisa provar a culpa dos pais','Só se o filho tiver mais de 16 anos'],a:0,e:'As pessoas do art. 932 respondem ainda que não haja culpa de sua parte.',art:'Arts. 932, I e 933, CC'},
 {id:'rr3',t:'r-reg',q:'O médico, profissional liberal, responde como?',o:['Objetivamente, pelo CDC','Mediante verificação de culpa','Nunca responde'],a:1,e:'A responsabilidade pessoal dos profissionais liberais é apurada mediante verificação de culpa.',art:'CDC, art. 14, §4º'},
 {id:'rr4',t:'r-reg',q:'Dano ambiental: o poluidor pode alegar caso fortuito para se livrar?',o:['Sim, como em qualquer responsabilidade objetiva','Não: aplica-se o risco integral','Só se provar ausência de culpa'],a:1,e:'No dano ambiental, a jurisprudência aplica a teoria do risco integral, que não admite excludentes.',art:'Lei 6.938/81, art. 14, §1º'},
 {id:'rr5',t:'r-reg',q:'Qual a base legal da responsabilidade objetiva pelo risco da atividade?',o:['Art. 186','Art. 927, parágrafo único','Art. 945'],a:1,e:'Haverá obrigação de reparar, independentemente de culpa, quando a atividade normalmente desenvolvida implicar risco.',art:'Art. 927, p.u., CC'},
 {id:'re1',t:'r-exc',q:'Para salvar uma criança, o motorista desvia e bate no carro estacionado de Ana. Ana, que não criou o perigo, tem direito à indenização?',o:['Não, o ato foi lícito','Sim; o motorista indeniza e depois cobra de quem causou o perigo','Só se o motorista agiu com culpa'],a:1,e:'O estado de necessidade torna o ato lícito, mas o terceiro inocente deve ser indenizado; cabe regresso contra o culpado pelo perigo.',art:'Arts. 188, II, 929 e 930, CC'},
 {id:'re2',t:'r-exc',q:'Vítima e agente concorreram para o dano. O que acontece com a indenização?',o:['É afastada','É fixada considerando a gravidade da culpa de cada um','Dobra'],a:1,e:'Se a vítima concorreu culposamente, a indenização é fixada tendo em conta a gravidade da sua culpa em confronto com a do autor.',art:'Art. 945, CC'},
 {id:'re3',t:'r-exc',q:'A culpa exclusiva da vítima afasta a responsabilidade porque:',o:['Elimina o dano','Rompe o nexo causal','Torna o ato doloso'],a:1,e:'Se o dano decorre só da conduta da vítima, a conduta do agente não foi sua causa.',art:'Nexo de causalidade'},
 {id:'re4',t:'r-exc',q:'Quem age em legítima defesa e atinge o próprio agressor:',o:['Responde pelo dano','Não responde, salvo excesso','Responde pela metade'],a:1,e:'Não constituem atos ilícitos os praticados em legítima defesa; o excesso, porém, gera responsabilidade.',art:'Art. 188, I, CC'},
 {id:'re5',t:'r-exc',q:'Caso fortuito ou força maior se caracterizam por ser:',o:['Previsíveis e evitáveis','Fatos necessários, cujos efeitos não era possível evitar ou impedir','Sempre causados por terceiros'],a:1,e:'O caso fortuito ou de força maior verifica-se no fato necessário, cujos efeitos não era possível evitar ou impedir.',art:'Art. 393, p.u., CC'},
 {id:'ri1',t:'r-ind',q:'"A indenização mede-se pela extensão do dano." Esse é o princípio da:',o:['Reparação integral','Culpa presumida','Equidade'],a:0,e:'O art. 944 consagra a reparação integral do dano.',art:'Art. 944, CC'},
 {id:'ri2',t:'r-ind',q:'O taxista fica 3 meses sem trabalhar após o acidente. A renda que deixou de ganhar é:',o:['Dano emergente','Lucro cessante','Dano moral'],a:1,e:'Lucro cessante é o que a vítima razoavelmente deixou de lucrar.',art:'Art. 402, CC'},
 {id:'ri3',t:'r-ind',q:'É possível cumular dano estético e dano moral pelo mesmo fato?',o:['Não, é bis in idem','Sim','Só se houver dano material'],a:1,e:'É lícita a cumulação das indenizações de dano estético e dano moral.',art:'Súmula 387, STJ'},
 {id:'ri4',t:'r-ind',q:'Culpa levíssima do agente e dano enorme. O juiz pode reduzir a indenização?',o:['Não, a reparação é sempre integral','Sim, equitativamente, se houver excessiva desproporção','Só com acordo da vítima'],a:1,e:'Havendo excessiva desproporção entre a gravidade da culpa e o dano, o juiz pode reduzir equitativamente a indenização.',art:'Art. 944, p.u., CC'},
 {id:'ri5',t:'r-ind',q:'Qual o prazo prescricional da pretensão de reparação civil extracontratual?',o:['1 ano','3 anos','10 anos'],a:1,e:'Prescreve em três anos a pretensão de reparação civil.',art:'Art. 206, §3º, V, CC'}
];
const RC_CARDS=[
 {id:'rc1',t:'r-pres',f:'Pressupostos da responsabilidade subjetiva',b:'Conduta, culpa (dolo ou culpa em sentido estrito), nexo causal e dano.',art:'Arts. 186 e 927, CC'},
 {id:'rc2',t:'r-pres',f:'Abuso de direito',b:'Exercer um direito excedendo manifestamente os limites do seu fim econômico ou social, da boa-fé ou dos bons costumes. Independe de culpa.',art:'Art. 187, CC'},
 {id:'rc3',t:'r-pres',f:'Negligência × imprudência × imperícia',b:'Negligência: omissão de cuidado. Imprudência: ação sem cuidado. Imperícia: falta de aptidão técnica.',art:'Art. 186, CC'},
 {id:'rc4',t:'r-reg',f:'Responsabilidade objetiva',b:'Dispensa a culpa: basta conduta, nexo e dano. Por lei ou pelo risco da atividade.',art:'Art. 927, p.u., CC'},
 {id:'rc5',t:'r-reg',f:'Fato de outrem',b:'Pais, tutores, empregadores, hotéis e escolas respondem objetivamente pelos atos de quem está sob sua responsabilidade.',art:'Arts. 932 e 933, CC'},
 {id:'rc6',t:'r-reg',f:'Risco integral',b:'Não admite excludentes. Aplica-se ao dano ambiental e ao nuclear.',art:'Lei 6.938/81'},
 {id:'rc7',t:'r-exc',f:'Estado de necessidade',b:'O ato é lícito, mas o terceiro inocente deve ser indenizado, com regresso contra quem criou o perigo.',art:'Arts. 188, II, 929 e 930, CC'},
 {id:'rc8',t:'r-exc',f:'Culpa concorrente',b:'Não exclui: reduz a indenização conforme a gravidade da culpa da vítima em confronto com a do autor.',art:'Art. 945, CC'},
 {id:'rc9',t:'r-ind',f:'Dano emergente × lucro cessante',b:'Emergente: o que se perdeu. Lucro cessante: o que razoavelmente se deixou de ganhar.',art:'Art. 402, CC'},
 {id:'rc10',t:'r-ind',f:'Prazo para pedir indenização',b:'3 anos para a reparação civil extracontratual.',art:'Art. 206, §3º, V, CC'}
];

function pressupostos(){
  const id=uid('ps');
  const P=[['conduta','Conduta','ação ou omissão voluntária'],['culpa','Culpa','dolo, negligência, imprudência ou imperícia'],['nexo','Nexo causal','a conduta causou o dano'],['dano','Dano','prejuízo material ou moral']];
  later(()=>{
    const root=$('#'+id),s={regime:'subj',conduta:true,culpa:true,nexo:true,dano:true};
    function render(){$$('[data-reg]',root).forEach(b=>b.setAttribute('aria-pressed',b.dataset.reg===s.regime));
      $$('.pp',root).forEach(el=>{const k=el.dataset.k,need=!(k==='culpa'&&s.regime==='obj');el.classList.toggle('on',s[k]);el.classList.toggle('skip',!need);$('.ppst',el).textContent=!need?'dispensada':s[k]?'presente':'ausente'});
      const miss=P.filter(([k])=>!(k==='culpa'&&s.regime==='obj')&&!s[k]).map(p=>p[1].toLowerCase());
      const o=$('.wzout',root);
      if(miss.length){o.className='wzout bad';o.innerHTML=`<b>Não há dever de indenizar</b><p>Falta ${miss.join(' e ')}. ${miss.includes('nexo causal')?'Sem nexo, a conduta não é causa do dano: é o que fazem as excludentes.':miss.includes('dano')?'Sem dano não há o que reparar, por mais grave que seja a conduta.':miss.includes('culpa')?'Na subjetiva, quem alega precisa provar a culpa.':''}</p>`}
      else{o.className='wzout ok';o.innerHTML=`<b>Deve indenizar</b><p>${s.regime==='obj'?'Na responsabilidade objetiva bastam conduta, nexo e dano; a culpa nem é discutida (art. 927, p.u.).':'Presentes os quatro pressupostos da responsabilidade subjetiva (arts. 186 e 927).'}</p>`}
      swapAnim(o)}
    root.addEventListener('click',e=>{const b=e.target.closest('[data-reg]');if(b){s.regime=b.dataset.reg;render();return}const p=e.target.closest('.pp');if(p&&!p.classList.contains('skip')){s[p.dataset.k]=!s[p.dataset.k];render()}});render();
  });
  return `<div class="card" id="${id}"><span class="lab">Regime</span><div class="seg"><button data-reg="subj">Subjetiva</button><button data-reg="obj">Objetiva</button></div>
    <p class="hint" style="margin:12px 0 8px">Toque em um pressuposto para retirá-lo do caso.</p>
    <div class="pps">${P.map(([k,l,d],i)=>`<button class="pp on" data-k="${k}"><b>${rom(i+1)} –</b><strong>${l}</strong><small>${d}</small><span class="ppst"></span></button>`).join('')}</div><div class="wzout" aria-live="polite"></div></div>`;
}
function concorrente(){
  const id=uid('cc');
  later(()=>{
    const root=$('#'+id),ins=$$('input',root);
    function render(){const D=+ins[0].value,c=+ins[1].value/100;$('.ccd',root).textContent=money(D);$('.ccp',root).textContent=Math.round(c*100)+'%';
      $('.cc-a',root).style.width=(1-c)*100+'%';$('.cc-v',root).style.width=c*100+'%';
      $('.wzout',root).className='wzout '+(c>=1?'bad':c>0?'warn':'ok');
      $('.wzout',root).innerHTML=c>=1?`<b>Nada a indenizar</b><p>Culpa exclusiva da vítima rompe o nexo causal: o dano não decorre da conduta do agente.</p>`:`<b>${money(D*(1-c))}</b><p>${c?`A vítima arca com ${Math.round(c*100)}% do próprio prejuízo (${money(D*c)}), na proporção da gravidade da sua culpa (art. 945).`:'Sem culpa da vítima, a reparação é integral (art. 944).'}</p>`}
    ins.forEach(i=>i.addEventListener('input',render));render();
  });
  return `<div class="card" id="${id}"><div class="dvin"><div><label class="lab" for="${id}-d">Dano total: <output class="ccd num"></output></label><input id="${id}-d" type="range" min="10000" max="300000" step="10000" value="100000"></div>
    <div><label class="lab" for="${id}-c">Peso da culpa da vítima: <output class="ccp num"></output></label><input id="${id}-c" type="range" min="0" max="100" step="5" value="30"></div></div>
    <div class="ccbar"><i class="cc-a"><span>agente paga</span></i><i class="cc-v"><span>vítima arca</span></i></div><div class="wzout" aria-live="polite"></div></div>`;
}
function indenizacao(){
  const id=uid('in');
  later(()=>{
    const root=$('#'+id),ins=$$('input[type=range]',root);let red=false;
    function render(){const [em,renda,meses,mor,est,rp]=ins.map(i=>+i.value);
      const lc=renda*meses,parts=[['Dano emergente',em,'ink'],['Lucro cessante',lc,'brass'],['Dano moral',mor,'sage'],['Dano estético',est,'seal']];
      const tot=parts.reduce((s,p)=>s+p[1],0),fin=red?tot*(1-rp/100):tot;
      $$('output',root).forEach((o,k)=>o.textContent=k===2?meses+(meses===1?' mês':' meses'):k===5?rp+'%':money(+ins[k].value));
      $('.inbar',root).innerHTML=parts.map(p=>`<i style="width:${tot?p[1]/tot*100:0}%;background:var(--${p[2]})" title="${p[0]}"></i>`).join('');
      $('.inleg',root).innerHTML=parts.map(p=>`<li><i style="background:var(--${p[2]})"></i><span>${p[0]}</span><b class="num">${money(p[1])}</b></li>`).join('')+`<li class="tot"><i></i><span><b>${red?'Total após redução equitativa':'Total'}</b></span><b class="num">${money(fin)}</b></li>`;
      $$('[data-red]',root).forEach(b=>b.setAttribute('aria-pressed',String(red)===b.dataset.red));$('.inred',root).hidden=!red}
    ins.forEach(i=>i.addEventListener('input',render));root.addEventListener('click',e=>{const b=e.target.closest('[data-red]');if(!b)return;red=b.dataset.red==='true';render()});render();
  });
  const rg=(l,min,max,step,v)=>`<div><label class="lab">${l}: <output class="num"></output></label><input type="range" min="${min}" max="${max}" step="${step}" value="${v}"></div>`;
  return `<div class="calc" id="${id}"><div class="card cin">${rg('Despesas médicas e conserto',0,100000,1000,18000)}${rg('Renda mensal perdida',0,15000,500,4000)}${rg('Meses sem trabalhar',0,24,1,3)}${rg('Dano moral',0,100000,1000,20000)}${rg('Dano estético',0,100000,1000,15000)}
    <div class="wzq"><span>Culpa levíssima e dano desproporcional?</span><div class="seg"><button data-red="true">Sim</button><button data-red="false">Não</button></div></div>
    <div class="inred" hidden>${rg('Redução equitativa',0,50,5,20)}</div></div>
    <div class="card cout"><p class="eyebrow">Composição da indenização</p><div class="stack inbar"></div><ul class="who inleg"></ul><p class="hint" style="margin:0">Lucro cessante = renda mensal × meses parados (art. 402). Dano moral e estético se cumulam (Súmula 387, STJ). A redução por equidade é exceção (art. 944, p.u.).</p></div></div>`;
}

defCourse('respciv',{nome:'Responsabilidade Civil',area:'Direito Civil',desc:'Quando nasce o dever de indenizar, quem responde sem culpa, o que afasta a responsabilidade e quanto se paga.',topics:RC_TOPICS,mods:RC_MODS,units:RC_UNITS,bank:RC_BANK,cards:RC_CARDS});

defLesson('rc-pres',{
  hero:()=>heroSeal('CONDUTA • CULPA • NEXO CAUSAL • DANO • ART. 186 • '),
  title:['Pressupostos','do dever de indenizar'],
  lead:'O que precisa existir para alguém ser obrigado a reparar um dano, e por que exercer um direito também pode ser ilícito.',
  sections:[
    {id:'pressupostos',nav:'Pressupostos',h:'Os quatro pressupostos',lead:'Retire um pressuposto do caso e veja se o dever de indenizar sobrevive. Depois troque para a responsabilidade objetiva.',html:pressupostos},
    {id:'culpa',nav:'Modalidades de culpa',h:'Que tipo de culpa?',lead:'A culpa em sentido amplo abrange o dolo e a culpa em sentido estrito. Classifique.',html:()=>W.classify({buckets:['Dolo','Negligência','Imprudência','Imperícia'],items:[
      ['O motorista dirige a 140 km/h numa via de 60.',2,'Ação sem o cuidado devido.'],
      ['A loja não sinaliza o piso molhado e um cliente cai.',1,'Omissão de cuidado.'],
      ['Um médico sem formação em cirurgia plástica opera e deixa sequelas.',3,'Falta de aptidão técnica para o ato.'],
      ['O vizinho fura de propósito os pneus do carro ao lado.',0,'Vontade dirigida ao resultado.'],
      ['O síndico deixa de consertar o portão da garagem que está caindo.',1,'Omissão diante de um dever de agir.']]})},
    {id:'abuso',nav:'Abuso de direito',h:'Ilícito comum ou abuso de direito?',lead:'No abuso de direito, o agente tem o direito, mas o exerce para além do seu fim. Classifique.',html:()=>W.classify({buckets:['Ilícito comum','Abuso de direito','Ato lícito'],items:[
      ['Agredir alguém numa discussão de trânsito.',0,'Viola diretamente o direito alheio (art. 186).'],
      ['Cobrar a dívida expondo o devedor nas redes sociais.',1,'O direito de cobrar existe, mas o modo excede a boa-fé (art. 187).'],
      ['Cobrar a dívida por carta, no prazo, com juros contratados.',2,'Exercício regular de direito (art. 188, I).'],
      ['Fazer barulho de propósito para incomodar o vizinho, dentro da própria casa.',1,'O uso da propriedade desviado do seu fim social.'],
      ['Demitir um empregado por justa causa comprovada.',2,'Exercício regular do poder diretivo.']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['186','Ato ilícito','Aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem, ainda que exclusivamente moral, comete ato ilícito.'],
      ['187','Abuso de direito','Também comete ato ilícito o titular de um direito que, ao exercê-lo, excede manifestamente os limites impostos pelo seu fim econômico ou social, pela boa-fé ou pelos bons costumes.'],
      ['188','Atos lícitos','Não são ilícitos os atos praticados em legítima defesa ou no exercício regular de um direito, nem a lesão para remover perigo iminente.'],
      ['927','Dever de reparar','Aquele que, por ato ilícito, causar dano a outrem, fica obrigado a repará-lo.'],
      ['Enunciado 37','CJF','A responsabilidade civil decorrente do abuso do direito independe de culpa.']])}
  ]
});
defLesson('rc-reg',{
  hero:()=>heroSeal('COM CULPA • SEM CULPA • RISCO DA ATIVIDADE • ART. 927 • '),
  title:['Subjetiva','e objetiva'],
  lead:'Quando a vítima precisa provar a culpa e quando a lei dispensa essa prova, inclusive por atos de outras pessoas, animais e coisas.',
  sections:[
    {id:'qual',nav:'Qual regime?',h:'Com culpa ou sem culpa?',lead:'Classifique cada caso pelo regime de responsabilidade.',html:()=>W.classify({buckets:['Subjetiva','Objetiva'],items:[
      ['Um pedestre é atropelado por um motorista particular.',0,'Regra geral: a vítima prova a culpa do motorista (art. 186).'],
      ['O banco libera um empréstimo fraudulento em nome do cliente.',1,'Fortuito interno (Súmula 479, STJ).'],
      ['O filho de 12 anos quebra a vitrine de uma loja.',1,'Os pais respondem sem culpa própria (arts. 932, I e 933).'],
      ['O cachorro escapa e morde um carteiro.',1,'O dono responde, salvo culpa da vítima ou força maior (art. 936).'],
      ['Um dentista, profissional liberal, causa lesão no paciente.',0,'Profissional liberal: verificação de culpa (CDC, art. 14, §4º).'],
      ['Um vaso cai da janela de um apartamento e fere quem passa.',1,'Quem habita responde pelas coisas que caem do prédio (art. 938).']]})},
    {id:'risco',nav:'Risco',h:'Risco administrativo ou integral',lead:'Na responsabilidade objetiva, a pergunta seguinte é: o agente pode alegar excludentes?',html:()=>W.picker({opts:[
      {l:'Atividade de risco comum',v:.5,c:'brass',t:'Admite excludentes',d:'Culpa exclusiva da vítima, fato de terceiro, caso fortuito e força maior rompem o nexo (art. 927, p.u.).',art:'Teoria do risco'},
      {l:'Estado (art. 37, §6º)',v:.5,c:'brass',t:'Risco administrativo',d:'O Estado responde sem culpa, mas pode provar culpa exclusiva da vítima ou força maior. Contra o servidor, cabe regresso se ele agiu com dolo ou culpa.',art:'CF, art. 37, §6º'},
      {l:'Dano ambiental',v:1,c:'seal',t:'Risco integral',d:'Nenhuma excludente afasta o dever de reparar. Basta a atividade e o dano.',art:'Lei 6.938/81, art. 14, §1º'},
      {l:'Dano nuclear',v:1,c:'seal',t:'Risco integral',d:'A Constituição impõe responsabilidade independente de culpa pelos danos nucleares.',art:'CF, art. 21, XXIII, d'}]})},
    {id:'outrem',nav:'Fato de outrem',h:'Quem responde por quem',lead:'O responsável responde sem culpa; mas o causador direto precisa ter agido com culpa.',html:()=>W.flips([
      ['Pais','Pelos <em>filhos menores</em> sob sua autoridade e companhia (art. 932, I).'],
      ['Tutor e curador','Pelos <em>pupilos e curatelados</em> nas mesmas condições (art. 932, II).'],
      ['Empregador','Pelos <em>empregados</em>, no exercício do trabalho (art. 932, III).'],
      ['Hotéis e escolas','Pelos <em>hóspedes e educandos</em> (art. 932, IV). Todos com direito de regresso, salvo contra descendente incapaz (art. 934).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil e da Constituição.',html:()=>W.arts([
      ['927, p.u.','Risco','Há obrigação de reparar, independentemente de culpa, nos casos especificados em lei ou quando a atividade normalmente desenvolvida implicar risco.'],
      ['932','Fato de outrem','Pais, tutores, curadores, empregadores, donos de hotéis e escolas respondem pelos atos das pessoas sob sua responsabilidade.'],
      ['933','Sem culpa','As pessoas do art. 932 respondem ainda que não haja culpa de sua parte.'],
      ['936','Animal','O dono ou detentor do animal ressarcirá o dano, salvo se provar culpa da vítima ou força maior.'],
      ['938','Coisas caídas','Quem habitar o prédio responde pelo dano das coisas que dele caírem ou forem lançadas em lugar indevido.'],
      ['CF, 37, §6º','Estado','As pessoas jurídicas de direito público e as prestadoras de serviço público respondem pelos danos de seus agentes, com regresso no caso de dolo ou culpa.']])}
  ]
});
defLesson('rc-exc',{
  hero:()=>heroSeal('LEGÍTIMA DEFESA • NECESSIDADE • FORTUITO • CULPA DA VÍTIMA • '),
  title:['Excludentes','de responsabilidade'],
  lead:'O que afasta, ou reduz, o dever de indenizar: atos que a lei considera lícitos e fatos que rompem o nexo causal.',
  sections:[
    {id:'efeito',nav:'Efeito de cada uma',h:'Afasta, reduz ou obriga mesmo assim?',lead:'Nem toda excludente livra o agente por completo. Classifique pelo efeito.',html:()=>W.classify({buckets:['Afasta','Reduz','Indeniza mesmo assim'],items:[
      ['O agente reage na medida certa a um assalto e fere o assaltante.',0,'Legítima defesa: ato lícito (art. 188, I).'],
      ['O motorista desvia de uma criança e danifica o carro de um terceiro inocente.',2,'Estado de necessidade: lícito, mas o terceiro é indenizado, com regresso (arts. 929 e 930).'],
      ['O pedestre atravessa fora da faixa e o motorista estava acima da velocidade.',1,'Culpa concorrente: a indenização é proporcional (art. 945).'],
      ['Um raio derruba a árvore do vizinho sobre o carro estacionado.',0,'Força maior: fato necessário e inevitável (art. 393).'],
      ['A vítima se joga na frente do carro, que estava parado no sinal.',0,'Culpa exclusiva da vítima: rompe o nexo causal.']]})},
    {id:'concorrente',nav:'Culpa concorrente',h:'Quando a vítima também tem culpa',lead:'Mova o peso da culpa da vítima. Em 100%, a culpa é só dela.',html:concorrente},
    {id:'nexo',nav:'Nexo e fortuito',h:'Fortuito interno e externo',lead:'Nem todo imprevisto livra quem exerce a atividade.',html:()=>W.flips([
      ['Fortuito interno','Ligado ao <em>risco da própria atividade</em>: não exclui. Ex.: fraude bancária, estouro de pneu do ônibus.'],
      ['Fortuito externo','Estranho à atividade e inevitável: <em>exclui</em>. Ex.: assalto à mão armada dentro do ônibus.'],
      ['Fato de terceiro','Rompe o nexo se for a <em>causa exclusiva</em> do dano e estranho ao agente.'],
      ['Ônus da prova','Quem <em>alega a excludente</em> deve prová-la.']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['188','Atos lícitos','Legítima defesa, exercício regular de direito e deterioração ou lesão para remover perigo iminente.'],
      ['929','Terceiro inocente','Se a pessoa lesada não for culpada do perigo, tem direito à indenização do prejuízo.'],
      ['930','Regresso','Se o perigo ocorrer por culpa de terceiro, contra ele terá o autor do dano ação regressiva.'],
      ['393','Fortuito','O caso fortuito ou de força maior verifica-se no fato necessário, cujos efeitos não era possível evitar ou impedir.'],
      ['945','Culpa concorrente','Se a vítima tiver concorrido culposamente, a indenização será fixada considerando a gravidade da sua culpa em confronto com a do autor.']])}
  ]
});
defLesson('rc-ind',{
  hero:()=>heroSeal('A INDENIZAÇÃO MEDE-SE PELA EXTENSÃO DO DANO • ART. 944 • '),
  title:['Quanto','se indeniza'],
  lead:'Os tipos de dano, como somá-los e quando o juiz pode reduzir a conta.',
  sections:[
    {id:'tipos',nav:'Tipos de dano',h:'Que dano é esse?',lead:'Cada prejuízo entra numa rubrica diferente da indenização. Classifique.',html:()=>W.classify({buckets:['Emergente','Lucro cessante','Moral','Estético','Perda de uma chance'],items:[
      ['O conserto do carro batido.',0,'O que efetivamente se perdeu (art. 402).'],
      ['Os três meses de corridas que o taxista não fez.',1,'O que razoavelmente se deixou de ganhar (art. 402).'],
      ['A humilhação de ser revistado em público sem motivo.',2,'Lesão a direito da personalidade.'],
      ['A cicatriz permanente no rosto.',3,'Alteração duradoura da aparência; cumula com o moral (Súmula 387, STJ).'],
      ['O advogado perde o prazo e o cliente não pode mais recorrer de uma decisão reformável.',4,'Indeniza-se a chance séria e real perdida, não o resultado final.']]})},
    {id:'calculadora',nav:'Calculadora',h:'Monte a indenização',lead:'Some as rubricas. Depois veja a exceção do art. 944, parágrafo único.',html:indenizacao},
    {id:'regras',nav:'Regras',h:'Regras da quantificação',lead:'Como o juiz chega ao valor.',html:()=>W.flips([
      ['Reparação integral','A indenização <em>mede-se pela extensão do dano</em> (art. 944).'],
      ['Método bifásico','Para o dano moral: parte-se da <em>média de casos parecidos</em> e ajusta-se às circunstâncias do caso.'],
      ['Solidariedade','Havendo mais de um autor, <em>todos respondem solidariamente</em> pela reparação (art. 942).'],
      ['Prazo','A pretensão de reparação civil <em>prescreve em 3 anos</em> (art. 206, §3º, V).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil e do STJ.',html:()=>W.arts([
      ['402','Perdas e danos','Abrangem o que o credor efetivamente perdeu e o que razoavelmente deixou de lucrar.'],
      ['942','Solidariedade','Se a ofensa tiver mais de um autor, todos respondem solidariamente pela reparação.'],
      ['944','Extensão','A indenização mede-se pela extensão do dano; havendo excessiva desproporção entre a culpa e o dano, o juiz pode reduzi-la equitativamente.'],
      ['949','Lesão','Na lesão à saúde, indenizam-se as despesas do tratamento e os lucros cessantes até o fim da convalescença, além de outro prejuízo provado.'],
      ['Súmula 387','STJ','É lícita a cumulação das indenizações de dano estético e dano moral.']])}
  ]
});
