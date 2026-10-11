/* ================= Matéria: Teoria da Pena ================= */
const PENA_TOPICS=[
 {id:'p-fund',nome:'Finalidades e princípios',mod:1},
 {id:'p-esp',nome:'Espécies e regimes',mod:2},
 {id:'p-dos',nome:'Dosimetria',mod:3},
 {id:'p-ben',nome:'Sursis, livramento e reincidência',mod:4},
 {id:'p-presc',nome:'Extinção e prescrição',mod:5}
];
const PENA_MODS=[
 {n:1,u:'A',tit:'Finalidades e princípios da pena',t:'p-fund',live:'pena-fund'},
 {n:2,u:'A',tit:'Espécies de pena e regimes',t:'p-esp',live:'pena-esp'},
 {n:3,u:'B',tit:'Dosimetria: as três fases',t:'p-dos',live:'pena-dos'},
 {n:4,u:'B',tit:'Sursis, livramento e reincidência',t:'p-ben',live:'pena-ben'},
 {n:5,u:'C',tit:'Extinção da punibilidade e prescrição',t:'p-presc',live:'pena-presc'}
];
const PENA_UNITS=[['A','Parte I · A pena'],['B','Parte II · Aplicação'],['C','Parte III · Extinção']];
const PENA_BANK=[
 {id:'pf1',t:'p-fund',q:'Qual teoria vê a pena só como retribuição justa pelo mal do crime, sem fim preventivo?',o:['Relativa','Absoluta','Agnóstica'],a:1,e:'A teoria absoluta (Kant, Hegel) pune porque houve crime, não para evitar crimes futuros.',art:'Teorias da pena'},
 {id:'pf2',t:'p-fund',q:'O art. 59 do Código Penal manda fixar a pena "conforme seja necessário e suficiente para reprovação e prevenção do crime". Isso expressa a teoria:',o:['Absoluta','Mista ou eclética','Agnóstica'],a:1,e:'Reprovação (retribuição) e prevenção juntas: o Código adota a teoria mista.',art:'Art. 59, CP'},
 {id:'pf3',t:'p-fund',q:'O filho do condenado pode ser obrigado a cumprir parte da pena do pai?',o:['Sim, se o pai morrer','Não: a pena não passa da pessoa do condenado','Só a pena de multa'],a:1,e:'Princípio da personalidade: nenhuma pena passará da pessoa do condenado. A reparação do dano pode alcançar herdeiros, até o limite da herança.',art:'CF, art. 5º, XLV'},
 {id:'pf4',t:'p-fund',q:'Em que fase a pena deixa de ser abstrata e passa a valer para um réu concreto?',o:['Legislativa','Judicial','Executória'],a:1,e:'Na fase judicial o juiz individualiza a pena dentro dos limites fixados pelo legislador.',art:'CF, art. 5º, XLVI'},
 {id:'pf5',t:'p-fund',q:'Qual destas penas a Constituição proíbe em tempo de paz?',o:['Multa','Prestação de serviços à comunidade','Pena de caráter perpétuo'],a:2,e:'São vedadas penas de morte (salvo guerra declarada), de caráter perpétuo, de trabalhos forçados, de banimento e cruéis.',art:'CF, art. 5º, XLVII'},
 {id:'pe1',t:'p-esp',q:'Réu não reincidente condenado a 6 anos de reclusão. Regime inicial?',o:['Fechado','Semiaberto','Aberto'],a:1,e:'Pena acima de 4 e até 8 anos, sem reincidência: pode começar no semiaberto.',art:'Art. 33, §2º, b, CP'},
 {id:'pe2',t:'p-esp',q:'Pena de detenção pode começar no regime fechado?',o:['Sim, se superior a 8 anos','Não: começa no semiaberto ou no aberto','Só para reincidentes'],a:1,e:'A detenção se cumpre em regime semiaberto ou aberto, salvo regressão posterior ao fechado.',art:'Art. 33, caput, CP'},
 {id:'pe3',t:'p-esp',q:'Furto simples, réu primário, pena de 2 anos. Cabe substituir por restritiva de direitos?',o:['Sim: até 4 anos, sem violência, réu não reincidente em crime doloso','Não, só para crimes culposos','Só se o réu pagar multa'],a:0,e:'Os requisitos do art. 44 estão presentes: pena até 4 anos, crime sem violência ou grave ameaça, réu não reincidente em crime doloso.',art:'Art. 44, CP'},
 {id:'pe4',t:'p-esp',q:'Homicídio culposo no trânsito, pena de 5 anos. Cabe restritiva de direitos?',o:['Não, a pena passa de 4 anos','Sim: em crime culposo, qualquer que seja a pena','Só com sursis'],a:1,e:'Nos crimes culposos, a substituição cabe qualquer que seja a pena aplicada.',art:'Art. 44, I, CP'},
 {id:'pe5',t:'p-esp',q:'Reincidente condenado a 3 anos de reclusão, com circunstâncias judiciais favoráveis. Regime inicial admitido?',o:['Aberto','Semiaberto','Fechado, obrigatoriamente'],a:1,e:'O STJ admite o semiaberto ao reincidente com pena de até 4 anos se as circunstâncias judiciais forem favoráveis.',art:'Súmula 269, STJ'},
 {id:'pd1',t:'p-dos',q:'Quantas fases tem a dosimetria da pena privativa de liberdade?',o:['Duas','Três','Quatro'],a:1,e:'Pena-base (art. 59), agravantes e atenuantes, e causas de aumento e diminuição.',art:'Art. 68, CP'},
 {id:'pd2',t:'p-dos',q:'Os maus antecedentes entram em qual fase?',o:['Na primeira, como circunstância judicial','Na segunda, como agravante','Na terceira'],a:0,e:'Antecedentes são uma das oito circunstâncias judiciais do art. 59.',art:'Art. 59, CP'},
 {id:'pd3',t:'p-dos',q:'Pena-base no mínimo legal e o réu confessou. A atenuante pode levar a pena abaixo do mínimo?',o:['Sim, sempre','Não: na segunda fase a pena não sai dos limites legais','Só se também for menor de 21'],a:1,e:'A incidência da circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal.',art:'Súmula 231, STJ'},
 {id:'pd4',t:'p-dos',q:'A tentativa reduz a pena em qual fase, e quanto?',o:['Segunda fase, 1/6','Terceira fase, de 1/3 a 2/3','Primeira fase, livremente'],a:1,e:'É causa de diminuição: entra na terceira fase e pode levar a pena abaixo do mínimo.',art:'Art. 14, p.u., CP'},
 {id:'pd5',t:'p-dos',q:'Qual destas é circunstância atenuante?',o:['Ser o agente menor de 21 anos na data do fato','Ter maus antecedentes','Ter usado arma de fogo no roubo'],a:0,e:'A menoridade relativa é atenuante genérica.',art:'Art. 65, I, CP'},
 {id:'pd6',t:'p-dos',q:'Agravantes genéricas se aplicam aos crimes culposos?',o:['Sim, todas','Não, exceto a reincidência','Só as do art. 62'],a:1,e:'As agravantes do art. 61, II, pressupõem dolo. A reincidência, porém, agrava qualquer crime.',art:'Art. 61, CP'},
 {id:'pb1',t:'p-ben',q:'Qual a pena máxima para o sursis comum?',o:['2 anos','4 anos','8 anos'],a:0,e:'A execução da pena não superior a 2 anos pode ser suspensa por 2 a 4 anos.',art:'Art. 77, CP'},
 {id:'pb2',t:'p-ben',q:'Condenado a 9 anos, primário e com bons antecedentes, em crime comum. Quando pode pedir livramento condicional?',o:['Depois de cumprir mais de 1/3: 3 anos','Depois de 1/2: 4 anos e meio','Depois de 2/3: 6 anos'],a:0,e:'Não reincidente em crime doloso e com bons antecedentes: mais de um terço da pena.',art:'Art. 83, I, CP'},
 {id:'pb3',t:'p-ben',q:'Cumpriu a pena em 2018 e cometeu novo crime em 2025. É reincidente?',o:['Sim','Não: passaram mais de 5 anos, sobra só o registro como maus antecedentes','Depende do crime'],a:1,e:'Passados mais de 5 anos entre o cumprimento ou a extinção da pena e o novo crime, não prevalece a condenação para reincidência.',art:'Art. 64, I, CP'},
 {id:'pb4',t:'p-ben',q:'Quem é reincidente em crime doloso pode ter sursis?',o:['Sim','Não','Só se a pena for de multa'],a:1,e:'É requisito do sursis não ser o condenado reincidente em crime doloso.',art:'Art. 77, I, CP'},
 {id:'pb5',t:'p-ben',q:'Para o livramento em crime hediondo (sem resultado morte), quanto da pena deve ser cumprido?',o:['Mais de 1/3','Mais de 1/2','Mais de 2/3, se não for reincidente específico'],a:2,e:'Crimes hediondos, tortura, tráfico e terrorismo: mais de dois terços, desde que o apenado não seja reincidente específico.',art:'Art. 83, V, CP'},
 {id:'pp1',t:'p-presc',q:'O máximo da pena do crime é 4 anos. Em quanto tempo prescreve a pretensão punitiva em abstrato?',o:['4 anos','8 anos','12 anos'],a:1,e:'Máximo superior a 2 e até 4 anos: 8 anos.',art:'Art. 109, IV, CP'},
 {id:'pp2',t:'p-presc',q:'O réu tinha 19 anos na data do crime. O que acontece com o prazo prescricional?',o:['Dobra','Cai pela metade','Não muda'],a:1,e:'Prazos reduzidos de metade para quem era menor de 21 ao tempo do crime ou maior de 70 na data da sentença.',art:'Art. 115, CP'},
 {id:'pp3',t:'p-presc',q:'Qual destes NÃO interrompe a prescrição?',o:['Recebimento da denúncia','Oferecimento da denúncia','Publicação da sentença condenatória recorrível'],a:1,e:'O marco é o recebimento da denúncia pelo juiz, não o seu oferecimento.',art:'Art. 117, I, CP'},
 {id:'pp4',t:'p-presc',q:'Depois do trânsito em julgado, a prescrição da pretensão executória se regula:',o:['Pelo máximo da pena em abstrato','Pela pena aplicada, com o prazo aumentado de 1/3 se o condenado for reincidente','Sempre em 20 anos'],a:1,e:'Após a condenação definitiva, o prazo se regula pela pena aplicada e aumenta de um terço se o condenado é reincidente.',art:'Art. 110, CP'},
 {id:'pp5',t:'p-presc',q:'Uma lei nova deixa de considerar crime o fato pelo qual o réu foi condenado. Isso é:',o:['Anistia','Abolitio criminis, que extingue a punibilidade','Perdão judicial'],a:1,e:'A lei posterior que deixa de considerar o fato como crime extingue a punibilidade e faz cessar a execução e os efeitos penais.',art:'Arts. 2º e 107, III, CP'},
 {id:'pp6',t:'p-presc',q:'Qual crime a Constituição declara imprescritível?',o:['Homicídio qualificado','Racismo','Latrocínio'],a:1,e:'São imprescritíveis o racismo e a ação de grupos armados contra a ordem constitucional e o Estado Democrático.',art:'CF, art. 5º, XLII e XLIV'}
];
const PENA_CARDS=[
 {id:'pc1',t:'p-fund',f:'Teoria da pena adotada pelo Código Penal',b:'Mista ou eclética: a pena deve ser necessária e suficiente para reprovação e prevenção do crime.',art:'Art. 59, CP'},
 {id:'pc2',t:'p-fund',f:'As três fases da individualização',b:'Legislativa (o legislador comina), judicial (o juiz aplica) e executória (a pena é cumprida).',art:'CF, art. 5º, XLVI'},
 {id:'pc3',t:'p-esp',f:'Regime inicial na reclusão',b:'Mais de 8 anos: fechado. Mais de 4 até 8, não reincidente: semiaberto. Até 4, não reincidente: aberto.',art:'Art. 33, §2º, CP'},
 {id:'pc4',t:'p-esp',f:'Requisitos da restritiva de direitos',b:'Pena até 4 anos e crime sem violência ou grave ameaça (ou crime culposo), réu não reincidente em crime doloso e circunstâncias favoráveis.',art:'Art. 44, CP'},
 {id:'pc5',t:'p-dos',f:'As oito circunstâncias judiciais',b:'Culpabilidade, antecedentes, conduta social, personalidade, motivos, circunstâncias, consequências do crime e comportamento da vítima.',art:'Art. 59, CP'},
 {id:'pc6',t:'p-dos',f:'Súmula 231 do STJ',b:'Atenuante não leva a pena abaixo do mínimo legal na segunda fase. Só as causas de diminuição, na terceira fase, fazem isso.',art:'Súmula 231, STJ'},
 {id:'pc7',t:'p-ben',f:'Sursis: requisitos',b:'Pena até 2 anos (até 4 se maior de 70 ou por saúde), réu não reincidente em crime doloso, circunstâncias favoráveis e não cabimento de restritiva de direitos.',art:'Art. 77, CP'},
 {id:'pc8',t:'p-ben',f:'Frações do livramento condicional',b:'Mais de 1/3 (primário, bons antecedentes), mais de 1/2 (reincidente em crime doloso), mais de 2/3 (hediondos, se não reincidente específico). Pena mínima de 2 anos.',art:'Art. 83, CP'},
 {id:'pc9',t:'p-ben',f:'Período depurador',b:'Passados 5 anos do cumprimento ou da extinção da pena, a condenação não gera mais reincidência; sobra como maus antecedentes.',art:'Art. 64, I, CP'},
 {id:'pc10',t:'p-presc',f:'Tabela da prescrição (art. 109)',b:'Mais de 12 anos: 20. Mais de 8 até 12: 16. Mais de 4 até 8: 12. Mais de 2 até 4: 8. De 1 até 2: 4. Menos de 1 ano: 3.',art:'Art. 109, CP'},
 {id:'pc11',t:'p-presc',f:'Marcos que interrompem a prescrição',b:'Recebimento da denúncia, pronúncia, decisão que a confirma, sentença ou acórdão condenatórios recorríveis, início ou continuação do cumprimento e reincidência.',art:'Art. 117, CP'}
];

/* ---------- motores ---------- */
function regimeInicial(anos,reinc,tipo,favor){
  if(tipo==='detencao'){return anos>4||reinc?{r:'Semiaberto',d:'Na detenção não se começa em regime fechado. Acima de 4 anos, ou sendo reincidente, o início é no semiaberto (art. 33, caput).'}:{r:'Aberto',d:'Detenção de até 4 anos, réu não reincidente: regime aberto.'}}
  if(anos>8)return{r:'Fechado',d:'Pena superior a 8 anos começa no regime fechado (art. 33, §2º, a).'};
  if(anos>4)return reinc?{r:'Fechado',d:'Reincidente com pena acima de 4 anos começa no fechado.'}:{r:'Semiaberto',d:'Mais de 4 e até 8 anos, não reincidente: semiaberto (art. 33, §2º, b).'};
  if(reinc)return favor?{r:'Semiaberto',d:'Reincidente com pena de até 4 anos e circunstâncias favoráveis: semiaberto (Súmula 269, STJ).'}:{r:'Fechado',d:'Reincidente com circunstâncias desfavoráveis: o fechado é admitido mesmo com pena de até 4 anos.'};
  return{r:'Aberto',d:'Até 4 anos, não reincidente: regime aberto (art. 33, §2º, c).'};
}
function fmtPena(a){const t=Math.round(a*360);const y=Math.floor(t/360),m=Math.floor(t%360/30),d=t%30;const p=[];if(y)p.push(y+(y===1?' ano':' anos'));if(m)p.push(m+(m===1?' mês':' meses'));if(d)p.push(d+(d===1?' dia':' dias'));return p.join(', ')||'0'}

function execSim(){
  const id=uid('ex');
  later(()=>{
    const root=$('#'+id),r=$('input',root),s={tipo:'reclusao',reinc:false,viol:false,culp:false,favor:true};
    function render(){const a=+r.value/2;$('.exa',root).textContent=fmtPena(a);
      $$('[data-k]',root).forEach(b=>b.setAttribute('aria-pressed',String(s[b.dataset.k])===b.dataset.v));
      const reg=regimeInicial(a,s.reinc,s.tipo,s.favor);
      const subst=(s.culp||(a<=4&&!s.viol))&&!s.reinc&&s.favor;
      const surs=!subst&&a<=2&&!s.reinc&&s.favor;
      const why=!subst?(s.reinc?'reincidente em crime doloso':!s.favor?'circunstâncias judiciais desfavoráveis':s.viol&&!s.culp?'crime com violência ou grave ameaça':'pena acima de 4 anos em crime doloso'):'';
      $('.exout',root).innerHTML=`<div class="exreg"><p class="eyebrow">Regime inicial</p><b>${reg.r}</b><p>${reg.d}</p></div>
        <div class="exrow ${subst?'ok':'no'}"><span>Restritiva de direitos</span><b>${subst?'Cabe':'Não cabe'}</b><small>${subst?'Pena substituída por prestação de serviços, prestação pecuniária e outras (arts. 43 e 44).':'Motivo: '+why+' (art. 44).'}</small></div>
        <div class="exrow ${surs?'ok':'no'}"><span>Sursis</span><b>${surs?'Cabe':'Não cabe'}</b><small>${surs?'Execução suspensa por 2 a 4 anos, sob condições (art. 77).':subst?'Não se aplica: cabe a restritiva de direitos, que tem preferência (art. 77, III).':'Exige pena de até 2 anos, réu não reincidente em crime doloso e circunstâncias favoráveis.'}</small></div>`;}
    r.addEventListener('input',render);root.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;const k=b.dataset.k;s[k]=k==='tipo'?b.dataset.v:b.dataset.v==='true';render()});render();
  });
  const q=(k,l,o)=>`<div class="wzq"><span>${l}</span><div class="seg">${o.map(([v,t])=>`<button data-k="${k}" data-v="${v}">${t}</button>`).join('')}</div></div>`;
  return `<div class="card exsim" id="${id}"><div class="exin"><label class="lab" for="${id}-r">Pena aplicada: <output class="exa num"></output></label><input id="${id}-r" type="range" min="1" max="30" value="6">
    <div class="wzqs">${q('tipo','Espécie de pena',[['reclusao','Reclusão'],['detencao','Detenção']])}${q('reinc','Réu reincidente em crime doloso?',[['true','Sim'],['false','Não']])}${q('viol','Crime com violência ou grave ameaça?',[['true','Sim'],['false','Não']])}${q('culp','Crime culposo?',[['true','Sim'],['false','Não']])}${q('favor','Circunstâncias judiciais favoráveis?',[['true','Sim'],['false','Não']])}</div></div>
    <div class="exout" aria-live="polite"></div></div>`;
}
const CRIMES=[['furto','Furto simples','art. 155',1,4],['estel','Estelionato','art. 171',1,5],['lesao','Lesão corporal grave','art. 129, §1º',1,5],['roubo','Roubo','art. 157',4,10],['homic','Homicídio simples','art. 121',6,20]];
const CIRC=['Culpabilidade','Antecedentes','Conduta social','Personalidade','Motivos','Circunstâncias','Consequências','Comportamento da vítima'];
function dosimetria(){
  const id=uid('ds');
  later(()=>{
    const root=$('#'+id),s={c:'roubo',neg:new Set(),ag:0,at:0,reinc:false,aum:0,dim:0};
    function calc(){const c=CRIMES.find(x=>x[0]===s.c),mn=c[3],mx=c[4],I=mx-mn;
      const base=Math.min(mx,mn+s.neg.size*I/8);
      const net=s.ag+(s.reinc?1:0)-s.at;let p2=base*(1+net/6);const clampLo=p2<mn,clampHi=p2>mx;p2=Math.max(mn,Math.min(mx,p2));
      const p3=p2*(1+s.aum)*(1-s.dim);return{c,mn,mx,base,p2,p3,clampLo,clampHi,net}}
    function render(){const x=calc(),M=Math.max(x.mx,x.p3)*1.08;
      $$('[data-crime]',root).forEach(b=>b.setAttribute('aria-pressed',b.dataset.crime===s.c));
      $$('[data-circ]',root).forEach(b=>b.setAttribute('aria-pressed',s.neg.has(+b.dataset.circ)));
      $('.ds-ag',root).textContent=s.ag;$('.ds-at',root).textContent=s.at;
      $$('[data-reinc]',root).forEach(b=>b.setAttribute('aria-pressed',String(s.reinc)===b.dataset.reinc));
      $$('[data-aum]',root).forEach(b=>b.setAttribute('aria-pressed',String(s.aum)===b.dataset.aum));
      $$('[data-dim]',root).forEach(b=>b.setAttribute('aria-pressed',String(s.dim)===b.dataset.dim));
      const P=v=>Math.min(100,v/M*100)+'%';
      $('.dsrange',root).style.left=P(x.mn);$('.dsrange',root).style.width=(x.mx-x.mn)/M*100+'%';
      $('.dsmin',root).textContent=x.mn+' a';$('.dsmax',root).textContent=x.mx+' a';
      [['.m1',x.base],['.m2',x.p2],['.m3',x.p3]].forEach(([k,v])=>$(k,root).style.left=P(v));
      const reg=regimeInicial(x.p3,s.reinc,'reclusao',s.neg.size<=2);
      $('.dsout',root).innerHTML=`<ol class="dsph">
        <li><span>1ª fase · pena-base</span><b class="num">${fmtPena(x.base)}</b><small>Mínimo de ${x.mn} ${x.mn===1?'ano':'anos'} + ${s.neg.size} de 8 circunstâncias desfavoráveis × 1/8 do intervalo (art. 59)</small></li>
        <li><span>2ª fase · pena provisória</span><b class="num">${fmtPena(x.p2)}</b><small>${x.net===0?'Agravantes e atenuantes se compensam ou não há nenhuma':(x.net>0?'+':'−')+Math.abs(x.net)+' × 1/6 sobre a pena-base'}${x.clampLo?'. Parou no mínimo legal (Súmula 231, STJ)':x.clampHi?'. Parou no máximo legal':''}</small></li>
        <li><span>3ª fase · pena definitiva</span><b class="num">${fmtPena(x.p3)}</b><small>${s.aum||s.dim?`${s.aum?'aumento de '+frac(s.aum):''}${s.aum&&s.dim?' e ':''}${s.dim?'diminuição de '+frac(s.dim):''}. Aqui a pena pode sair dos limites (art. 68)`:'Sem causas de aumento ou diminuição'}</small></li></ol>
        <div class="dsreg"><span>Regime inicial</span><b>${reg.r}</b><small>${reg.d}</small></div>`;}
    root.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
      if(b.dataset.crime){s.c=b.dataset.crime}else if(b.dataset.circ!=null){const i=+b.dataset.circ;s.neg.has(i)?s.neg.delete(i):s.neg.add(i)}
      else if(b.dataset.cnt){const k=b.dataset.cnt;s[k]=Math.max(0,Math.min(4,s[k]+(+b.dataset.d)))}else if(b.dataset.reinc){s.reinc=b.dataset.reinc==='true'}
      else if(b.dataset.aum){s.aum=+b.dataset.aum}else if(b.dataset.dim){s.dim=+b.dataset.dim}else return;render()});
    render();
  });
  const fr=[[0,'nenhum'],[1/3,'1/3'],[1/2,'1/2'],[2/3,'2/3']];
  return `<div class="ds" id="${id}">
    <div class="card"><span class="lab">Crime</span><div class="seg">${CRIMES.map(c=>`<button data-crime="${c[0]}">${c[1]} <small>${c[2]} · ${c[3]} a ${c[4]} anos</small></button>`).join('')}</div></div>
    <div class="dsgrid">
      <div class="card"><p class="eyebrow">1ª fase · circunstâncias judiciais</p><p class="hint">Toque nas que pesam contra o réu.</p><div class="dscirc">${CIRC.map((c,i)=>`<button data-circ="${i}" aria-pressed="false">${c}</button>`).join('')}</div></div>
      <div class="card"><p class="eyebrow">2ª fase · agravantes e atenuantes</p>
        <div class="steppers"><div><span class="lab">Agravantes</span><div class="stp"><button data-cnt="ag" data-d="-1" aria-label="Menos uma agravante">−</button><output class="num ds-ag">0</output><button data-cnt="ag" data-d="1" aria-label="Mais uma agravante">+</button></div></div>
        <div><span class="lab">Atenuantes</span><div class="stp"><button data-cnt="at" data-d="-1" aria-label="Menos uma atenuante">−</button><output class="num ds-at">0</output><button data-cnt="at" data-d="1" aria-label="Mais uma atenuante">+</button></div></div></div>
        <div class="wzq" style="margin-top:12px"><span>Réu reincidente?</span><div class="seg"><button data-reinc="true">Sim</button><button data-reinc="false">Não</button></div></div></div>
      <div class="card"><p class="eyebrow">3ª fase · causas de aumento e diminuição</p>
        <span class="lab">Aumento</span><div class="seg">${fr.map(f=>`<button data-aum="${f[0]}">${f[1]}</button>`).join('')}</div>
        <span class="lab" style="margin-top:12px">Diminuição</span><div class="seg">${fr.map(f=>`<button data-dim="${f[0]}">${f[1]}</button>`).join('')}</div>
        <p class="hint" style="margin:10px 0 0">Ex.: arma de fogo no roubo (+2/3), tentativa (−1/3 a −2/3).</p></div>
    </div>
    <div class="card dsscale"><div class="dstrack"><i class="dsrange"><span class="dsmin"></span><span class="dsmax"></span></i><i class="dsm m1" title="1ª fase">1</i><i class="dsm m2" title="2ª fase">2</i><i class="dsm m3" title="3ª fase">3</i></div><div class="dsout" aria-live="polite"></div></div>
  </div>`;
}
function frac(v){return v===1/3?'1/3':v===1/2?'1/2':v===2/3?'2/3':''}
function livramento(){
  const id=uid('lv');
  later(()=>{
    const root=$('#'+id),r=$('input',root),s={reinc:false,bons:true,hed:false};
    function render(){const a=+r.value;$('.lva',root).textContent=a+(a===1?' ano':' anos');
      $$('[data-k]',root).forEach(b=>b.setAttribute('aria-pressed',String(s[b.dataset.k])===b.dataset.v));
      const f=s.hed?2/3:s.reinc?1/2:s.bons?1/3:1/2;const need=a*f;
      const o=$('.wzout',root);
      if(a<2){o.className='wzout bad';o.innerHTML='<b>Não cabe</b><p>O livramento exige pena privativa de liberdade igual ou superior a 2 anos (art. 83).</p>';$('.lvfill',root).style.width='0%';$('.lvmark',root).style.left='0%';return}
      o.className='wzout ok';o.innerHTML=`<b>Depois de mais de ${fmtPena(need)}</b><p>${s.hed?'Crime hediondo ou equiparado, sem reincidência específica: mais de 2/3 (art. 83, V).':s.reinc?'Reincidente em crime doloso: mais da metade (art. 83, II).':s.bons?'Primário com bons antecedentes: mais de 1/3 (art. 83, I).':'Primário com maus antecedentes: a jurisprudência exige mais da metade.'} Também é preciso bom comportamento, nenhuma falta grave nos últimos 12 meses e reparação do dano, salvo impossibilidade.</p>`;
      $('.lvfill',root).style.width=f*100+'%';$('.lvmark',root).style.left=f*100+'%';$('.lvmark span',root).textContent=f===1/3?'1/3':f===1/2?'1/2':'2/3'}
    r.addEventListener('input',render);root.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;s[b.dataset.k]=b.dataset.v==='true';render()});render();
  });
  const q=(k,l)=>`<div class="wzq"><span>${l}</span><div class="seg"><button data-k="${k}" data-v="true">Sim</button><button data-k="${k}" data-v="false">Não</button></div></div>`;
  return `<div class="card" id="${id}"><label class="lab" for="${id}-r">Pena total: <output class="lva num"></output></label><input id="${id}-r" type="range" min="1" max="30" value="9">
    <div class="wzqs" style="margin-top:12px">${q('reinc','Reincidente em crime doloso?')}${q('bons','Tem bons antecedentes?')}${q('hed','Crime hediondo ou equiparado?')}</div>
    <div class="lvtrack"><i class="lvfill"></i><i class="lvmark"><span></span></i></div><div class="wzout" aria-live="polite"></div></div>`;
}
function depurador(){
  const id=uid('dp');
  later(()=>{
    const root=$('#'+id),r=$('input',root);
    function render(){const y=+r.value;$('.dpy',root).textContent=y+(y===1?' ano':' anos');$('.pimark',root).style.left=y/10*100+'%';
      const o=$('.wzout',root);const v=y<=5?{tone:'bad',t:'Reincidente',d:'O novo crime veio dentro dos 5 anos do período depurador. Agrava a pena na 2ª fase (arts. 61, I e 63).'}:{tone:'warn',t:'Não é reincidente, mas tem maus antecedentes',d:'Passados 5 anos, a condenação deixa de gerar reincidência (art. 64, I). Ainda pesa na 1ª fase, como antecedente (art. 59).'};
      o.className='wzout '+v.tone;o.innerHTML=`<b>${v.t}</b><p>${v.d}</p>`}
    r.addEventListener('input',render);render();
  });
  return `<div class="card" id="${id}"><div class="pitrack dptrack"><i class="pi5"><span>5 anos</span></i><i class="pimark"></i></div>
    <label class="lab" for="${id}-r">Tempo entre a extinção da pena anterior e o novo crime: <output class="dpy num"></output></label><input id="${id}-r" type="range" min="0" max="10" value="3"><div class="wzout" aria-live="polite"></div></div>`;
}
const P109=[[12,Infinity,20,'superior a 12'],[8,12,16,'mais de 8 até 12'],[4,8,12,'mais de 4 até 8'],[2,4,8,'mais de 2 até 4'],[1,2,4,'de 1 até 2'],[0,1,3,'inferior a 1 ano']];
function prescricao(){
  const id=uid('pr');
  later(()=>{
    const root=$('#'+id),r=$('input',root),s={modo:'abs',jovem:false,idoso:false,reinc:false};
    function prazo(p){if(p<1)return P109[5];if(p<=2)return P109[4];return P109.find(x=>p>x[0]&&p<=x[1])}
    function render(){const p=+r.value/2;$('.pra',root).textContent=fmtPena(p);
      $$('[data-k]',root).forEach(b=>b.setAttribute('aria-pressed',String(s[b.dataset.k])===b.dataset.v));
      $('.pr-reinc',root).hidden=s.modo!=='exec';
      const row=prazo(p);
      let anos=row[2]*(s.modo==='exec'&&s.reinc?4/3:1);const metade=s.jovem||s.idoso;if(metade)anos=anos/2;
      $$('.prtab tr[data-i]',root).forEach(tr=>tr.classList.toggle('on',+tr.dataset.i===P109.indexOf(row)));
      $('.prres',root).innerHTML=`<b class="num">${fmtPena(anos)}</b><p>${s.modo==='abs'?'Pretensão punitiva em abstrato: conta-se pelo <b>máximo</b> da pena cominada (art. 109).':'Pretensão executória: conta-se pela <b>pena aplicada</b>'+(s.reinc?', e o prazo aumenta de 1/3 pela reincidência':'')+' (art. 110).'}${metade?' Prazo reduzido de metade (art. 115).':''}</p>`;swapAnim($('.prres',root))}
    r.addEventListener('input',render);root.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;const k=b.dataset.k;s[k]=k==='modo'?b.dataset.v:b.dataset.v==='true';render()});render();
  });
  const q=(k,l,o)=>`<div class="wzq ${k==='reinc'?'pr-reinc':''}"><span>${l}</span><div class="seg">${o.map(([v,t])=>`<button data-k="${k}" data-v="${v}">${t}</button>`).join('')}</div></div>`;
  return `<div class="prw" id="${id}"><div class="card"><div class="wzqs">${q('modo','Antes ou depois da condenação definitiva?',[['abs','Antes (punitiva)'],['exec','Depois (executória)']])}
      <label class="lab" style="margin-top:6px" for="${id}-r">Pena máxima do crime ou pena aplicada: <output class="pra num"></output></label><input id="${id}-r" type="range" min="1" max="40" value="8">
      ${q('jovem','Menor de 21 anos na data do crime?',[['true','Sim'],['false','Não']])}${q('idoso','Maior de 70 anos na data da sentença?',[['true','Sim'],['false','Não']])}${q('reinc','Condenado reincidente?',[['true','Sim'],['false','Não']])}</div>
      <div class="prres" aria-live="polite"></div></div>
    <div class="card"><p class="eyebrow">Tabela do art. 109</p><div class="tablewrap"><table class="prtab" style="min-width:0"><thead><tr><th>Pena</th><th class="r">Prescreve em</th></tr></thead><tbody>${P109.map((x,i)=>`<tr data-i="${i}"><td>${x[3]}</td><td class="r num">${x[2]} anos</td></tr>`).join('')}</tbody></table></div></div></div>`;
}

defCourse('pena',{nome:'Teoria da Pena',area:'Direito Penal',desc:'Da finalidade da pena à prescrição, com simuladores de dosimetria, regime e prazos prescricionais.',topics:PENA_TOPICS,mods:PENA_MODS,units:PENA_UNITS,bank:PENA_BANK,cards:PENA_CARDS});

defLesson('pena-fund',{
  hero:()=>heroSeal('LEGALIDADE • PERSONALIDADE • INDIVIDUALIZAÇÃO • HUMANIDADE • '),
  title:['Finalidades','da pena'],
  lead:'Para que serve punir, quais limites a Constituição impõe e como a pena passa da lei abstrata ao condenado concreto.',
  sections:[
    {id:'teorias',nav:'Teorias',h:'Por que punir',lead:'Quatro respostas para a mesma pergunta. Toque nos cartões.',html:()=>W.flips([
      ['Absoluta','Pune-se <em>porque houve crime</em>. A pena retribui o mal causado (Kant, Hegel).'],
      ['Relativa','Pune-se <em>para que não haja crimes</em>: prevenção geral (a sociedade) e especial (o próprio condenado).'],
      ['Mista','Retribuição <em>e</em> prevenção juntas. É a do Código: "necessário e suficiente para reprovação e prevenção" (art. 59).'],
      ['Agnóstica','Nenhuma finalidade se sustenta; a pena é um <em>fato de poder</em> a ser contido pelo Direito.']])},
    {id:'principios',nav:'Princípios',h:'Os limites da Constituição',lead:'Cada situação viola, ou respeita, um princípio. Classifique pelo princípio em jogo.',html:()=>W.classify({buckets:['Legalidade','Personalidade','Individualização','Humanidade'],items:[
      ['Uma portaria do Executivo cria um crime novo.',0,'Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal (CF, art. 5º, XXXIX).'],
      ['O filho do condenado é preso no lugar do pai, que fugiu.',1,'Nenhuma pena passa da pessoa do condenado (CF, art. 5º, XLV).'],
      ['Dois coautores recebem penas diferentes por terem papéis diferentes no crime.',2,'Cada um responde na medida da sua culpabilidade (CF, art. 5º, XLVI).'],
      ['Uma lei prevê prisão perpétua para tráfico.',3,'São vedadas penas de caráter perpétuo (CF, art. 5º, XLVII, b).'],
      ['O juiz aumenta a pena com base num costume local, sem previsão em lei.',0,'A pena só pode ser agravada por circunstância prevista em lei.']]})},
    {id:'fases',nav:'Três fases',h:'Da lei ao cárcere',lead:'A individualização acontece em três momentos. Avance pelas etapas.',html:()=>W.timeline({steps:[
      {t:'Fase legislativa',s:'Congresso Nacional',d:'O legislador define o crime e comina a pena em abstrato, com mínimo e máximo. Ex.: furto, reclusão de 1 a 4 anos e multa.'},
      {t:'Fase judicial',s:'juiz da causa',d:'O juiz aplica a pena ao caso concreto em três fases (art. 68), fixa o regime inicial e decide sobre substituição e sursis.'},
      {t:'Fase executória',s:'juiz da execução',d:'A pena é cumprida, com progressão de regime, remição e benefícios previstos na Lei de Execução Penal.'}]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição e do Código Penal.',html:()=>W.arts([
      ['CF, 5º, XXXIX','Legalidade','Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal.'],
      ['CF, 5º, XLV','Personalidade','Nenhuma pena passará da pessoa do condenado.'],
      ['CF, 5º, XLVI','Individualização','A lei regulará a individualização da pena.'],
      ['CF, 5º, XLVII','Humanidade','Não haverá penas de morte (salvo guerra declarada), perpétuas, de trabalhos forçados, de banimento ou cruéis.'],
      ['32','Espécies','As penas são privativas de liberdade, restritivas de direitos e de multa.'],
      ['59','Finalidade','A pena é fixada conforme seja necessário e suficiente para reprovação e prevenção do crime.']])}
  ]
});
defLesson('pena-esp',{
  hero:()=>heroSeal('RECLUSÃO • DETENÇÃO • RESTRITIVAS DE DIREITOS • MULTA • '),
  title:['Espécies','e regimes'],
  lead:'Reclusão, detenção, penas alternativas e o regime em que a pena começa a ser cumprida. Monte o caso e veja o resultado.',
  sections:[
    {id:'especies',nav:'Espécies',h:'Três espécies de pena',lead:'O art. 32 do Código Penal conhece três espécies.',html:()=>W.flips([
      ['Privativa de liberdade','<em>Reclusão</em> (crimes mais graves, admite início no fechado) e <em>detenção</em> (começa no semiaberto ou aberto).'],
      ['Restritiva de direitos','Prestação pecuniária, perda de bens, <em>prestação de serviços</em>, interdição temporária de direitos e limitação de fim de semana (art. 43).'],
      ['Multa','Pagamento ao fundo penitenciário, calculado em <em>dias-multa</em> (art. 49).'],
      ['Prisão simples','Pena das <em>contravenções penais</em>, sem rigor penitenciário.']])},
    {id:'simulador',nav:'Simulador',h:'Que regime, e cabe alternativa?',lead:'Ajuste a pena e as condições do réu. O resultado mostra o regime inicial, a substituição e o sursis.',html:execSim},
    {id:'regimes',nav:'Os regimes',h:'Como cada regime funciona',lead:'Onde o condenado fica em cada um.',html:()=>W.flips([
      ['Fechado','Estabelecimento de <em>segurança máxima ou média</em>; trabalho interno.'],
      ['Semiaberto','<em>Colônia agrícola ou industrial</em>; pode haver trabalho externo e saídas.'],
      ['Aberto','<em>Casa de albergado</em> ou prisão domiciliar; trabalha fora durante o dia.'],
      ['Progressão','O regime pode ficar mais brando conforme o tempo cumprido e o <em>comportamento</em> (LEP, art. 112).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Penal.',html:()=>W.arts([
      ['33','Regimes','Reclusão em regime fechado, semiaberto ou aberto; detenção em semiaberto ou aberto, salvo transferência ao fechado.'],
      ['33, §2º','Regime inicial','Mais de 8 anos: fechado. Mais de 4 até 8, não reincidente: semiaberto. Até 4, não reincidente: aberto.'],
      ['43','Restritivas','Prestação pecuniária, perda de bens e valores, limitação de fim de semana, prestação de serviço e interdição temporária de direitos.'],
      ['44','Substituição','Pena até 4 anos sem violência ou grave ameaça, ou crime culposo; réu não reincidente em crime doloso; circunstâncias favoráveis.'],
      ['Súmula 269','STJ','É admissível o semiaberto ao reincidente com pena de até 4 anos, se favoráveis as circunstâncias judiciais.']])}
  ]
});
defLesson('pena-dos',{
  hero:()=>heroSeal('PENA-BASE • AGRAVANTES E ATENUANTES • AUMENTO E DIMINUIÇÃO • '),
  title:['Dosimetria','em três fases'],
  lead:'O cálculo que transforma "de 4 a 10 anos" numa pena exata. Escolha o crime e veja a pena andar fase por fase.',
  sections:[
    {id:'simulador',nav:'Simulador',h:'Calcule uma pena',lead:'Marque as circunstâncias e veja os três marcadores se moverem na régua. A faixa clara é o mínimo e o máximo do crime.',html:dosimetria},
    {id:'fase',nav:'Em que fase?',h:'Em que fase entra?',lead:'Errar a fase é o erro mais comum de dosimetria. Classifique.',html:()=>W.classify({buckets:['1ª fase','2ª fase','3ª fase'],items:[
      ['Maus antecedentes.',0,'Circunstância judicial do art. 59.'],
      ['Reincidência.',1,'Agravante genérica (art. 61, I).'],
      ['Tentativa.',2,'Causa de diminuição de 1/3 a 2/3 (art. 14, p.u.).'],
      ['Confissão espontânea.',1,'Atenuante genérica (art. 65, III, d).'],
      ['Comportamento da vítima.',0,'Última das oito circunstâncias judiciais (art. 59).'],
      ['Emprego de arma de fogo no roubo.',2,'Causa de aumento de 2/3 (art. 157, §2º-A, I).'],
      ['Agente menor de 21 anos na data do fato.',1,'Atenuante genérica (art. 65, I).'],
      ['Arrependimento posterior.',2,'Causa de diminuição de 1/3 a 2/3 (art. 16).']]})},
    {id:'regras',nav:'Regras',h:'Regras que caem em prova',lead:'O que limita cada fase.',html:()=>W.flips([
      ['Limites da 2ª fase','Agravantes e atenuantes não tiram a pena do <em>mínimo ou máximo</em> legal (Súmula 231, STJ).'],
      ['Bis in idem','A circunstância que já <em>qualifica</em> o crime não pode agravar de novo na 2ª fase.'],
      ['Frações usuais','Na prática, cada circunstância desfavorável vale 1/8 do intervalo na 1ª fase e cada agravante ou atenuante, 1/6.'],
      ['Crimes culposos','As agravantes do art. 61, II não se aplicam; <em>a reincidência sim</em>.']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Penal.',html:()=>W.arts([
      ['59','Pena-base','Culpabilidade, antecedentes, conduta social, personalidade, motivos, circunstâncias, consequências e comportamento da vítima.'],
      ['61','Agravantes','Reincidência e as circunstâncias do inciso II, como motivo fútil ou torpe e crime contra ascendente, descendente ou cônjuge.'],
      ['65','Atenuantes','Menor de 21 na data do fato ou maior de 70 na sentença, confissão espontânea, entre outras.'],
      ['68','Critério trifásico','Pena-base pelo art. 59; depois atenuantes e agravantes; por último, causas de diminuição e aumento.'],
      ['Súmula 231','STJ','A atenuante não pode conduzir a pena abaixo do mínimo legal.']])}
  ]
});
defLesson('pena-ben',{
  hero:()=>heroSeal('SURSIS • LIVRAMENTO CONDICIONAL • PERÍODO DEPURADOR • '),
  title:['Sursis','e livramento'],
  lead:'Os benefícios que tiram o condenado da prisão, ou o deixam sair antes, e o prazo em que a condenação ainda pesa como reincidência.',
  sections:[
    {id:'compara',nav:'Sursis × livramento',h:'Dois benefícios, dois momentos',lead:'O sursis evita o começo da prisão; o livramento antecipa o fim.',html:()=>W.flips([
      ['Sursis','A execução da pena <em>nem começa</em>: fica suspensa por 2 a 4 anos, sob condições (art. 77).'],
      ['Livramento','O condenado já cumpriu parte da pena e <em>termina o restante em liberdade</em> (art. 83).'],
      ['Sursis etário ou humanitário','Pena até 4 anos, se o condenado tem <em>mais de 70 anos</em> ou razões de saúde o justificam; prova de 4 a 6 anos.'],
      ['Revogação','Nova condenação por crime doloso <em>revoga obrigatoriamente</em> o sursis (art. 81, I).']])},
    {id:'livramento',nav:'Quando sai',h:'Quando pode pedir o livramento',lead:'Mova a pena e as condições. A régua mostra a fração que precisa ser cumprida.',html:livramento},
    {id:'reincidencia',nav:'Reincidência',h:'Reincidente ou só maus antecedentes?',lead:'A condenação anterior gera reincidência por 5 anos. Depois, vira antecedente.',html:depurador},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Penal.',html:()=>W.arts([
      ['63','Reincidência','Reincide quem comete novo crime depois do trânsito em julgado da sentença que o condenou por crime anterior.'],
      ['64, I','Período depurador','Não prevalece a condenação anterior se, entre o cumprimento ou a extinção da pena e o novo crime, passaram mais de 5 anos.'],
      ['77','Sursis','A execução da pena de até 2 anos pode ser suspensa por 2 a 4 anos, se o réu não for reincidente em crime doloso e não couber restritiva de direitos.'],
      ['81','Revogação','Revoga-se o sursis, entre outros casos, se o beneficiário é condenado por crime doloso em sentença irrecorrível.'],
      ['83','Livramento','Pena igual ou superior a 2 anos; mais de 1/3, 1/2 ou 2/3 cumpridos, conforme o caso; bom comportamento e reparação do dano.']])}
  ]
});
defLesson('pena-presc',{
  hero:()=>heroSeal('ART. 107 • ART. 109 • O TEMPO TAMBÉM EXTINGUE A PENA • '),
  title:['Extinção','e prescrição'],
  lead:'As causas que apagam o direito de punir, com destaque para a prescrição: quanto tempo o Estado tem e o que interrompe a contagem.',
  sections:[
    {id:'causas',nav:'Causas de extinção',h:'O que extingue a punibilidade',lead:'O art. 107 lista as principais. Toque nos cartões.',html:()=>W.flips([
      ['Morte do agente','A pena não passa da pessoa: <em>com a morte, acaba</em> a punibilidade.'],
      ['Anistia, graça, indulto','A anistia apaga <em>fatos</em>; graça e indulto perdoam <em>pessoas</em>, individual ou coletivamente.'],
      ['Abolitio criminis','Lei nova deixa de considerar o fato crime: <em>cessam a execução e os efeitos penais</em>.'],
      ['Prescrição, decadência, perempção','O tempo, ou a inércia do ofendido na ação privada, <em>extingue o direito de punir</em>.'],
      ['Renúncia e perdão','Na ação penal privada, o ofendido <em>abre mão</em> do direito de queixa ou perdoa o querelado.'],
      ['Perdão judicial','Nos casos previstos em lei, o juiz <em>deixa de aplicar a pena</em> (ex.: homicídio culposo que atinge o próprio agente).']])},
    {id:'calculadora',nav:'Calculadora',h:'Quanto tempo o Estado tem',lead:'Antes da condenação definitiva, conta-se pelo máximo da pena; depois, pela pena aplicada.',html:prescricao},
    {id:'marcos',nav:'Marcos interruptivos',h:'O que zera o relógio',lead:'Cada marco do art. 117 interrompe a prescrição, e o prazo recomeça do zero.',html:()=>W.timeline({steps:[
      {t:'Recebimento da denúncia',s:'art. 117, I',d:'O juiz recebe a denúncia ou a queixa. O oferecimento, sozinho, não interrompe.'},
      {t:'Pronúncia',s:'art. 117, II',d:'Nos crimes do júri, a decisão que manda o réu a julgamento pelos jurados.'},
      {t:'Confirmação da pronúncia',s:'art. 117, III',d:'O acórdão que confirma a pronúncia em recurso.'},
      {t:'Sentença condenatória',s:'art. 117, IV',d:'A publicação da sentença ou do acórdão condenatórios recorríveis.'},
      {t:'Início da pena',s:'art. 117, V',d:'O início ou a continuação do cumprimento da pena (já na pretensão executória).'},
      {t:'Reincidência',s:'art. 117, VI',d:'A reincidência interrompe a prescrição da pretensão executória.'}]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Penal e da Constituição.',html:()=>W.arts([
      ['107','Extinção','Morte, anistia, graça ou indulto, abolitio criminis, prescrição, decadência, perempção, renúncia, perdão, retratação e perdão judicial.'],
      ['109','Prazos','A prescrição antes do trânsito em julgado regula-se pelo máximo da pena privativa de liberdade cominada.'],
      ['110','Executória','Depois da condenação definitiva, regula-se pela pena aplicada; o prazo aumenta de 1/3 se o condenado é reincidente.'],
      ['115','Redução','Prazos reduzidos de metade se o agente era menor de 21 na data do crime ou maior de 70 na data da sentença.'],
      ['117','Interrupção','Recebimento da denúncia, pronúncia, sua confirmação, sentença condenatória, início da pena e reincidência.'],
      ['CF, 5º, XLII','Imprescritíveis','Racismo e ação de grupos armados contra a ordem constitucional não prescrevem.']])}
  ]
});
