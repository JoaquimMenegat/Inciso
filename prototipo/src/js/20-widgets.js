/* ================= widgets reutilizáveis das aulas ================= */
const W={};

/* Cartões que viram: [[frente, verso], ...] */
W.flips=cards=>`<div class="flips">${cards.map(([f,b])=>`<button class="flip" aria-pressed="false"><div class="in"><div class="f"><strong>${f}</strong><small>Toque para virar</small></div><div class="b">${b}</div></div></button>`).join('')}</div>`;

/* Artigos em acordeão: [[número, título, texto], ...] */
W.arts=list=>{
  const id=uid('arts');
  later(()=>{
    const aw=$('#'+id),ad=$('#'+id+'-d');
    aw.addEventListener('click',e=>{const b=e.target.closest('.art');if(!b)return;const was=b.getAttribute('aria-expanded')==='true';$$('.art',aw).forEach(x=>x.setAttribute('aria-expanded','false'));if(was){ad.classList.remove('open');return}b.setAttribute('aria-expanded','true');const a=list[+b.dataset.i];ad.innerHTML=`<strong>${/^\d/.test(a[0])?'Art. '+a[0]+', CC.':a[0]+'.'}</strong> ${a[2]}`;ad.classList.add('open')});
  });
  return `<div class="arts" id="${id}">${list.map((a,i)=>`<button class="art" aria-expanded="false" data-i="${i}"><b>${/^\d/.test(a[0])?'Art. '+a[0]:a[0]}</b><span>${a[1]}</span></button>`).join('')}</div><div class="artdetail" id="${id}-d" aria-live="polite"></div>`;
};

/* Jogo de classificar: {buckets:[...], items:[[texto, índiceCerto, porquê], ...]} */
W.classify=({buckets,items,prompt})=>{
  const id=uid('cls');
  later(()=>{
    const root=$('#'+id);let done=0,ok=0;
    function score(){$('.clsscore',root).textContent=`${ok} de ${items.length} certas`;if(done===items.length){const m=$('.clsend',root);m.hidden=false;m.querySelector('p').textContent=ok===items.length?'Todas certas. Esse tema você já domina.':`Você acertou ${ok} de ${items.length}. Releia as explicações em vermelho.`}}
    root.addEventListener('click',e=>{
      const b=e.target.closest('.clsb button');
      if(b){const li=b.closest('li');if(li.dataset.done)return;li.dataset.done=1;const it=items[+li.dataset.i],right=+b.dataset.b===it[1];
        done++;if(right)ok++;bump(1);
        $$('.clsb button',li).forEach((x,k)=>{x.disabled=true;if(k===it[1])x.classList.add('ok')});if(!right)b.classList.add('no');
        li.classList.add(right?'right':'wrong');const w=$('.clswhy',li);w.innerHTML=`<b>${right?'Isso.':'Não.'}</b> ${it[2]}`;w.hidden=false;score();return}
      if(e.target.closest('.clsagain')){done=0;ok=0;$$('li',root).forEach(li=>{delete li.dataset.done;li.classList.remove('right','wrong');$('.clswhy',li).hidden=true;$$('.clsb button',li).forEach(x=>{x.disabled=false;x.classList.remove('ok','no')})});$('.clsend',root).hidden=true;score()}
    });
  });
  return `<div class="cls" id="${id}"><div class="clshead"><span>${prompt||'Classifique cada caso'}</span><b class="clsscore num">0 de ${items.length} certas</b></div>
    <ol class="clsitems">${items.map((it,i)=>`<li data-i="${i}"><p>${it[0]}</p><div class="clsb">${buckets.map((b,k)=>`<button data-b="${k}">${b}</button>`).join('')}</div><p class="clswhy" hidden></p></li>`).join('')}</ol>
    <div class="clsend" hidden><p></p><button class="btn small clsagain">Refazer</button></div></div>`;
};

/* Linha do tempo em etapas: {steps:[{t, s, d}]} */
W.timeline=({steps})=>{
  const id=uid('tl');
  later(()=>{
    const root=$('#'+id);let cur=0;
    function go(i){cur=Math.max(0,Math.min(steps.length-1,i));
      $$('.tlstep',root).forEach((b,k)=>{b.classList.toggle('on',k<=cur);b.setAttribute('aria-current',k===cur?'step':'false')});
      $('.tlfill',root).style.width=(steps.length>1?cur/(steps.length-1)*100:100)+'%';
      const d=$('.tld',root);d.innerHTML=`<p class="eyebrow">${cur+1} de ${steps.length}${steps[cur].s?' · '+steps[cur].s:''}</p><h3>${steps[cur].t}</h3><p>${steps[cur].d}</p>`;swapAnim(d);
      $('.tlprev',root).disabled=cur===0;$('.tlnext',root).disabled=cur===steps.length-1;}
    root.addEventListener('click',e=>{const s=e.target.closest('.tlstep');if(s)go(+s.dataset.i);if(e.target.closest('.tlprev'))go(cur-1);if(e.target.closest('.tlnext'))go(cur+1)});
    go(0);
  });
  return `<div class="tl" id="${id}"><div class="tltrack"><div class="tlline"><i class="tlfill"></i></div>${steps.map((s,i)=>`<button class="tlstep" data-i="${i}"><span class="dot"></span><span class="lab">${s.t}</span></button>`).join('')}</div>
    <div class="tld card" aria-live="polite"></div><div class="tlnav"><button class="btn small tlprev">← Anterior</button><button class="btn small primary tlnext">Próxima etapa →</button></div></div>`;
};

/* Seletor com mostrador: {opts:[{l, v(0..1), c:'sage'|'brass'|'seal', t, d, art}]} */
W.picker=({opts})=>{
  const id=uid('pk');
  later(()=>{
    const root=$('#'+id),dv=$('.pkv',root),at=$('.pkans',root);
    function pick(i){const o=opts[i];$$('.regimes button',root).forEach(b=>b.setAttribute('aria-pressed',b.dataset.i==i));dv.style.strokeDashoffset=251.3*(1-Math.max(o.v,.06));dv.style.stroke=`var(--${o.c})`;at.innerHTML=`<div class="t">${o.t}</div><p>${o.d}</p>${o.art?`<span class="art">${o.art}</span>`:''}`;swapAnim(at)}
    $('.regimes',root).addEventListener('click',e=>{const b=e.target.closest('button');if(b)pick(+b.dataset.i)});
    setTimeout(()=>pick(0),150);
  });
  return `<div id="${id}"><div class="regimes">${opts.map((o,i)=>`<button aria-pressed="${i===0}" data-i="${i}">${o.l}</button>`).join('')}</div>
    <div class="answer"><svg class="dial" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="40" fill="none" stroke="var(--soft)" stroke-width="10"/><circle class="pkv" cx="50" cy="50" r="40" fill="none" stroke="var(--sage)" stroke-width="10" stroke-linecap="round" stroke-dasharray="251.3" stroke-dashoffset="251.3" transform="rotate(-90 50 50)" style="transition:stroke-dashoffset .7s cubic-bezier(.2,.8,.2,1),stroke .4s"/></svg><div class="pkans" aria-live="polite"></div></div></div>`;
};

/* Perguntas de sim/não com veredito ao vivo: {qs:[[chave, pergunta]], init:{chave:bool}, verdict:a=>({tone:'ok'|'warn'|'bad', t, d})} */
W.wizard=({qs,init,verdict,labels})=>{
  const id=uid('wz');
  later(()=>{
    const root=$('#'+id),a=Object.assign({},init);
    function render(){$$('.wzq',root).forEach(r=>{const k=r.dataset.k;$$('button',r).forEach(b=>b.setAttribute('aria-pressed',String(a[k])===b.dataset.v))});
      const v=verdict(a),out=$('.wzout',root);out.className='wzout '+v.tone;out.innerHTML=`<b>${v.t}</b><p>${v.d}</p>`;swapAnim(out)}
    root.addEventListener('click',e=>{const b=e.target.closest('.wzq button');if(!b)return;a[b.closest('.wzq').dataset.k]=b.dataset.v==='true';render()});
    render();
  });
  const L=labels||['Sim','Não'];
  return `<div class="wz" id="${id}"><div class="wzqs">${qs.map(([k,q])=>`<div class="wzq" data-k="${k}"><span>${q}</span><div class="seg"><button data-v="true">${L[0]}</button><button data-v="false">${L[1]}</button></div></div>`).join('')}</div><div class="wzout" aria-live="polite"></div></div>`;
};

/* Abas com troca animada: [{l, html}] */
W.tabs=(tabs,onPick)=>{
  const id=uid('tb');
  later(()=>{const root=$('#'+id);root.addEventListener('click',e=>{const b=e.target.closest('.tabh button');if(!b)return;const i=+b.dataset.i;$$('.tabh button',root).forEach(x=>x.setAttribute('aria-selected',x===b));$$('.tabp',root).forEach((p,k)=>p.hidden=k!==i);swapAnim($$('.tabp',root)[i]);onPick&&onPick(i,root)});onPick&&onPick(0,root)});
  return `<div class="tabs" id="${id}"><div class="tabh" role="tablist">${tabs.map((t,i)=>`<button role="tab" aria-selected="${i===0}" data-i="${i}">${t.l}</button>`).join('')}</div>${tabs.map((t,i)=>`<div class="tabp" ${i?'hidden':''}>${t.html}</div>`).join('')}</div>`;
};

/* Contador com botões − / + */
const stepper=(id,label,v,min,max)=>`<div><span class="lab">${label}</span><div class="stp"><button data-stp="${id}" data-d="-1" data-min="${min}" aria-label="Menos">−</button><output id="${id}" class="num">${v}</output><button data-stp="${id}" data-d="1" data-max="${max}" aria-label="Mais">+</button></div></div>`;
function onStep(root,cb){root.addEventListener('click',e=>{const b=e.target.closest('[data-stp]');if(!b)return;const o=$('#'+b.dataset.stp);const min=+($(`[data-stp="${b.dataset.stp}"][data-min]`).dataset.min),max=+($(`[data-stp="${b.dataset.stp}"][data-max]`).dataset.max);o.textContent=Math.max(min,Math.min(max,+o.textContent+(+b.dataset.d)));cb()})}

/* ---------- motor de partilha entre descendentes ---------- */
/* filhos: [{n:nome, st:'vivo'|'premorto'|'renunciou'|'indigno', comum:bool, netos:[nomes]}]
   conj: null | {regime, aq, pt}; total: patrimônio (sem cônjuge) */
function partilhaDesc(filhos,conj,total){
  const why=[];let meacao=0,heranca=total,base=0,conc=false;
  if(conj){const x=conjRegime(conj.regime,conj.aq,conj.pt);meacao=x.meacao;heranca=x.heranca;base=x.base;conc=x.conc;why.push(...x.why)}
  const units=[];
  filhos.forEach(f=>{
    if(f.st==='vivo')units.push({tipo:'cabeça',pessoas:[{n:f.n,how:'por direito próprio'}],comum:f.comum});
    else if((f.st==='premorto'||f.st==='indigno')&&f.netos.length)units.push({tipo:'estirpe',de:f.n,pessoas:f.netos.map(n=>({n,how:`representa ${f.n}`+(f.st==='indigno'?' (art. 1.816)':' (art. 1.851)')})),comum:f.comum});
  });
  const rows=[];let todosRen=false;
  if(!units.length){
    const netos=filhos.filter(f=>f.st==='renunciou').flatMap(f=>f.netos.map(n=>({n,comum:f.comum})));
    if(filhos.length&&filhos.every(f=>f.st==='renunciou')&&netos.length){
      todosRen=true;netos.forEach(x=>units.push({tipo:'cabeça',pessoas:[{n:x.n,how:'por direito próprio e por cabeça (art. 1.811)'}],comum:x.comum}));
      why.push('Todos os filhos renunciaram: os netos vêm à sucessão por direito próprio, dividindo por cabeça (art. 1.811).');
    } else return {vazio:true,meacao,heranca,why:why.concat(['Nenhum descendente vai herdar. A herança passa à classe seguinte: ascendentes (com o cônjuge), depois o cônjuge sozinho, depois os colaterais.'])};
  } else {
    const ren=filhos.filter(f=>f.st==='renunciou'),semRamo=filhos.filter(f=>(f.st==='premorto'||f.st==='indigno')&&!f.netos.length);
    if(units.some(u=>u.tipo==='estirpe'))why.push('Há filho pré-morto ou indigno com descendentes: conta-se uma estirpe para ele, e os netos dividem a parte dela (arts. 1.835 e 1.855).');
    if(ren.length)why.push(`${ren.map(f=>f.n).join(' e ')} renunci${ren.length>1?'aram':'ou'}: não há representação, a parte acresce aos demais (arts. 1.810 e 1.811).`);
    if(semRamo.length)why.push(`${semRamo.map(f=>f.n).join(' e ')} não deix${semRamo.length>1?'aram':'ou'} descendentes: não forma estirpe.`);
  }
  const k=units.length;let conjHer=0,fromBase=0,reserva=false;
  if(conc){reserva=units.every(u=>u.comum)&&k>=4;
    if(reserva){conjHer=base/4;fromBase=base*3/4/k;why.push(`O cônjuge é ascendente de todos os herdeiros e há ${k} ${todosRen?'netos':'estirpes'}: reserva de 1/4 sobre a base de concorrência (art. 1.832).`)}
    else{conjHer=base/(k+1);fromBase=base/(k+1);why.push(units.some(u=>!u.comum)&&k>=4?'Filiação híbrida: há herdeiro que não descende do cônjuge, então não há reserva de 1/4.':`O cônjuge conta como mais uma cabeça: a base de concorrência se divide em ${k+1}.`)}}
  const rest=heranca-(conc?base:0),perUnit=rest/k+fromBase;
  units.forEach(u=>u.pessoas.forEach(p=>rows.push({n:p.n,how:p.how,v:perUnit/u.pessoas.length})));
  if(!conc&&!conj)why.unshift(`${k} ${k===1?'parte':'partes'} iguais: ${units.filter(u=>u.tipo==='cabeça').length} por cabeça${units.some(u=>u.tipo==='estirpe')?' e '+units.filter(u=>u.tipo==='estirpe').length+' por estirpe':''}.`);
  return {meacao,heranca,conj:conjHer,rows,why,k};
}
function conjRegime(r,aq,pt){
  const total=aq+pt,why=[];let meacao=0,heranca=total,base=0,conc=false;
  if(r==='cu'){meacao=total/2;heranca=total/2;why.push('Comunhão universal: o cônjuge retira a meação de tudo e não concorre com os descendentes (art. 1.829, I).')}
  else if(r==='cp'){meacao=aq/2;heranca=aq/2+pt;if(pt>0){conc=true;base=pt;why.push('Comunhão parcial com bens particulares: meação dos bens comuns e concorrência só sobre os particulares.')}else why.push('Comunhão parcial sem bens particulares: o cônjuge fica só com a meação (art. 1.829, I).')}
  else if(r==='sc'){conc=true;base=total;why.push('Separação convencional: não há meação, e o cônjuge concorre sobre toda a herança.')}
  else if(r==='so'){why.push('Separação obrigatória: sem meação (sem prova de esforço comum) e sem concorrência (art. 1.829, I).')}
  else if(r==='pf'){meacao=aq/2;heranca=aq/2+pt;conc=true;base=heranca;why.push('Participação final nos aquestos: metade dos aquestos e concorrência sobre a herança.')}
  return {meacao,heranca,base,conc,why};
}
const REGS=[['cp','Comunhão parcial'],['cu','Comunhão universal'],['sc','Separação convencional'],['so','Separação obrigatória'],['pf','Participação final']];
const ST=[['vivo','Vivo'],['premorto','Morreu antes'],['renunciou','Renunciou'],['indigno','Indigno']];

/* Árvore interativa de descendentes: {filhos, total, statuses, verdictTitle} */
W.tree=({filhos,total,statuses})=>{
  const id=uid('tree'),F=filhos.map(f=>Object.assign({},f,{netos:f.netos.slice()}));
  const sts=ST.filter(s=>!statuses||statuses.includes(s[0]));
  later(()=>{
    const root=$('#'+id);
    function render(){
      const x=partilhaDesc(F,null,total),val={};(x.rows||[]).forEach(r=>val[r.n]=r);
      $('.tree',root).innerHTML=F.map((f,i)=>{const v=val[f.n];return `<div class="branch"><div class="heir ${f.st!=='vivo'?'out':''}" data-st="${f.st}"><h4>${f.n}</h4>
        <div class="seg mini" data-i="${i}">${sts.map(([k,l])=>`<button data-st="${k}" aria-pressed="${f.st===k}">${l}</button>`).join('')}</div>
        <div class="bar"><i style="width:${v?v.v/total*100:0}%"></i></div><span class="pct">${v?money(v.v)+' · '+fmtP(v.v/total):'nada'}</span></div>
        <div class="netos">${f.netos.map(n=>{const w=val[n];return `<div class="neto ${w?'on':''}"><div>${n}</div><div class="bar"><i style="width:${w?w.v/total*100:0}%"></i></div><span class="pct">${w?money(w.v):'—'}</span></div>`}).join('')}</div></div>`}).join('');
      const v=$('.verdict',root);v.innerHTML=x.vazio?x.why.join(' '):x.why.join(' ');v.classList.remove('flash');void v.offsetWidth;v.classList.add('flash');
    }
    root.addEventListener('click',e=>{const b=e.target.closest('.seg.mini button');if(b){F[+b.parentNode.dataset.i].st=b.dataset.st;render()}
      if(e.target.closest('.treereset')){F.forEach((f,i)=>f.st=filhos[i].st);render()}});
    render();
  });
  return `<div class="sim" id="${id}"><div class="root">Herança de ${money(total)}<small>mude a situação de cada filho e veja a partilha se refazer</small></div><div class="tree"></div><div class="verdict" aria-live="polite"></div><div class="simctl"><button class="btn small treereset">Recomeçar</button></div></div>`;
};

/* ---------- questões com alternativas embaralhadas ---------- */
function shuffle(a){const r=a.slice();for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]]}return r}
function mountQuiz(root,qs,opt){
  opt=opt||{};let i=0,score=0;const res=[];
  function show(){
    if(i>=qs.length){opt.onDone&&opt.onDone(score,qs.length,res,root);return}
    const q=qs[i],order=shuffle(q.o.map((_,k)=>k));
    root.innerHTML=`<div class="swap"><div class="qhead"><span>Questão ${i+1} de ${qs.length}</span><span>${TN[q.t]}</span></div><div class="qbar"><i style="width:${i/qs.length*100}%"></i></div>
      <p class="qtext">${q.q}</p><div class="opts">${order.map((k,pos)=>`<button class="opt" data-k="${k}"><span class="key">${'ABCD'[pos]}</span><span>${q.o[k]}</span></button>`).join('')}</div><div class="qfoot" aria-live="polite"></div></div>`;
    $('.opts',root).addEventListener('click',e=>{
      const b=e.target.closest('.opt');if(!b||b.disabled)return;
      const k=+b.dataset.k,ok=k===q.a;if(ok)score++;res.push({q:q,ok:ok});
      const bs=$$('.opt',root);bs.forEach(x=>{x.disabled=true;if(+x.dataset.k===q.a)x.classList.add('ok')});if(!ok)b.classList.add('no');
      opt.onAnswer&&opt.onAnswer(q,ok,k);
      $('.qfoot',root).innerHTML=`<p class="why"><b>${ok?'Correto.':'Não é essa.'}</b> ${q.e}<span class="art">${q.art}</span></p><button class="btn primary nx">${i+1<qs.length?'Próxima questão':'Ver resultado'}</button>`;
      const nx=$('.nx',root);nx.onclick=()=>{i++;show()};nx.focus({preventScroll:true});
    });
  }
  show();
}
