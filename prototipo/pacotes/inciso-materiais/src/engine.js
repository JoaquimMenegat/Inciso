(function(){
const C=window.COURSE;
const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s);
const RN=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV'];
const replay=(el,c)=>{if(!el)return;el.classList.remove(c);void el.offsetWidth;el.classList.add(c)};
const KEY='inciso:'+C.id;
let st={done:{},quiz:{}};
try{const r=localStorage.getItem(KEY);if(r)st=Object.assign(st,JSON.parse(r))}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}};
let uid=0;const nid=()=>'b'+(++uid);

/* ---------- blocos ---------- */
const R={};
R.p=b=>`<div class="txt">${b.html}</div>`;
R.callout=b=>`<div class="callout ${b.kind||''}">${b.title?`<span class="ct">${b.title}</span>`:''}${b.html}</div>`;
R.flips=b=>`<div class="flips">${b.items.map(([f,bk])=>`<button class="flip" aria-pressed="false"><div class="in"><div class="f"><strong>${f}</strong><small>Toque para virar</small></div><div class="b">${bk}</div></div></button>`).join('')}</div>`;
R.table=b=>`<div class="tbl"><table><thead><tr>${b.head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r,i)=>`<tr style="animation-delay:${i*70}ms">${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
R.keys=b=>`<div class="keys">${b.items.map(([n,l,s])=>`<div class="key"><b data-count="${n}">${n}</b><span>${l}</span>${s?`<small>${s}</small>`:''}</div>`).join('')}</div>`;
R.vs=b=>`<div class="vs"><div class="col l"><h4>${b.l.t}</h4><ul>${b.l.i.map((x,j)=>`<li style="transition-delay:${j*90}ms">${x}</li>`).join('')}</ul></div><div class="x">×</div><div class="col r"><h4>${b.r.t}</h4><ul>${b.r.i.map((x,j)=>`<li style="transition-delay:${j*90+60}ms">${x}</li>`).join('')}</ul></div></div>`;
R.tl=b=>`<div class="tl"><span class="bar"></span>${b.items.map(([t,d],i)=>`<div class="it" style="transition-delay:${i*160}ms"><b>${t}</b><span>${d}</span></div>`).join('')}</div>`;
R.svg=b=>`<div class="diag">${b.html}</div>`;
R.juris=b=>`<div class="juris">${b.items.map(j=>`<div class="jc"><div class="stamp">${j.court}<small>${j.year||''}</small></div><div><h4>${j.id}</h4><div class="tese">${j.tese}</div>${j.html?`<p>${j.html}</p>`:''}</div></div>`).join('')}</div>`;
R.arts=b=>{const id=nid();return `<div class="arts" id="${id}">${b.items.map((a,i)=>`<button class="artb" aria-expanded="false" data-i="${i}"><b>${a[0]}</b><span>${a[1]}</span></button>`).join('')}</div><div class="artd" id="${id}d" aria-live="polite"></div>`};
R.chooser=b=>{const id=nid();return `<div class="chips" id="${id}">${b.items.map((it,i)=>`<button aria-pressed="false" data-i="${i}">${it[0]}</button>`).join('')}</div><div class="out" id="${id}o" aria-live="polite"></div>`};
R.sorter=b=>`<div class="sorter" id="${nid()}"></div>`;
R.steps=b=>`<div class="steps" id="${nid()}"></div>`;
R.wizard=b=>`<div class="wiz" id="${nid()}"></div>`;
R.gauge=b=>{const id=nid();return `<div class="gwrap" id="${id}"><div>${b.items.map((t,i)=>`<label class="tog"><input type="checkbox" data-i="${i}"><span>${t[0]}${t[1]?`<small>${t[1]}</small>`:''}</span></label>`).join('')}</div><div class="gauge"><svg viewBox="0 0 220 130" aria-hidden="true"><path d="M20,110 A90,90 0 0,1 200,110" fill="none" stroke="var(--soft)" stroke-width="16"/><path d="M20,110 A90,90 0 0,1 110,20" fill="none" stroke="var(--seal)" stroke-width="16" opacity=".85"/><path d="M110,20 A90,90 0 0,1 200,110" fill="none" stroke="var(--sage)" stroke-width="16" opacity=".85"/><g class="needle"><line x1="110" y1="110" x2="110" y2="34" stroke="var(--ink)" stroke-width="4"/><circle cx="110" cy="110" r="8" fill="var(--ink)"/></g></svg><div class="t"></div><p></p></div></div>`};
R.calc=b=>`<div class="calcbox" data-kind="${b.kind}" id="${nid()}"></div>`;

/* ---------- comportamentos ---------- */
const B={};
B.flips=(el)=>el.addEventListener('click',e=>{const f=e.target.closest('.flip');if(f)f.setAttribute('aria-pressed',f.getAttribute('aria-pressed')==='true'?'false':'true')});
B.arts=(el,b)=>{const W=el.querySelector('.arts'),D=el.querySelector('.artd');W.addEventListener('click',e=>{const x=e.target.closest('.artb');if(!x)return;const was=x.getAttribute('aria-expanded')==='true';W.querySelectorAll('.artb').forEach(y=>y.setAttribute('aria-expanded','false'));if(was){D.classList.remove('open');return}x.setAttribute('aria-expanded','true');const a=b.items[+x.dataset.i];D.innerHTML=`<strong>${a[0]}.</strong> ${a[2]}`;D.classList.add('open')})};
B.chooser=(el,b)=>{const c=el.querySelector('.chips'),o=el.querySelector('.out');const pick=i=>{c.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x.dataset.i==i));const it=b.items[i];o.innerHTML=`<div class="t">${it[1]}</div>${it[2]}`;replay(o,'swap')};c.addEventListener('click',e=>{const x=e.target.closest('button');if(x)pick(+x.dataset.i)});pick(0)};
B.sorter=(el,b)=>{const R0=el.querySelector('.sorter');let i=0,sc=0,miss=false;const cards=b.cards;
  R0.innerHTML=`<div class="deck"></div><div class="bins">${b.bins.map((x,j)=>`<button data-j="${j}">${x}</button>`).join('')}</div><div class="sortfb" aria-live="polite"></div>`;
  const deck=R0.querySelector('.deck'),fb=R0.querySelector('.sortfb'),bins=R0.querySelectorAll('.bins button');
  const show=()=>{if(i>=cards.length){deck.innerHTML=`<div class="card">Fim da rodada: <span class="score">${sc} de ${cards.length}</span> de primeira. <button class="btn pri" style="margin-left:8px">Recomeçar</button></div>`;bins.forEach(x=>x.disabled=true);deck.querySelector('button').onclick=()=>{i=0;sc=0;bins.forEach(x=>x.disabled=false);fb.textContent='';show()};return}
    deck.innerHTML=`<div class="card"><span class="cnt">CASO ${i+1} DE ${cards.length}</span>${cards[i][0]}</div>`;miss=false};
  R0.querySelector('.bins').addEventListener('click',e=>{const x=e.target.closest('button');if(!x||i>=cards.length)return;const card=deck.querySelector('.card');
    if(+x.dataset.j===cards[i][1]){if(!miss)sc++;fb.innerHTML=`<span class="score">Certo.</span> ${cards[i][2]}`;card.classList.add('ok');i++;setTimeout(show,470)}
    else{miss=true;fb.textContent='Não é essa. Tente outra.';card.classList.remove('no');void card.offsetWidth;card.classList.add('no')}});show()};
B.steps=(el,b)=>{const R0=el.querySelector('.steps');let k=0;const S=b.items;
  R0.innerHTML=`<div class="track">${S.map(()=>'<i></i>').join('')}</div><div class="stage" aria-live="polite"></div><div class="stepnav"><button class="pv">Voltar</button><button class="pri nx">Avançar</button><span></span></div>`;
  const stg=R0.querySelector('.stage'),tr=R0.querySelectorAll('.track i'),nx=R0.querySelector('.nx'),pv=R0.querySelector('.pv'),cn=R0.querySelector('.stepnav span');
  const draw=()=>{const s=S[k];stg.innerHTML=`<div class="rn">${RN[k]}</div><div><h4>${s[0]}</h4><div>${s[1]}</div>${s[2]?`<span class="tag">${s[2]}</span>`:''}</div>`;replay(stg,'swap');tr.forEach((t,j)=>t.className=j<k?'on':j===k?'cur':'');pv.disabled=k===0;nx.textContent=k===S.length-1?'Recomeçar':'Avançar';cn.textContent=`${k+1} de ${S.length}`};
  nx.onclick=()=>{k=k===S.length-1?0:k+1;draw()};pv.onclick=()=>{if(k>0){k--;draw()}};draw()};
B.wizard=(el,b)=>{const W=el.querySelector('.wiz');let path=[];
  const draw=n=>{const p=`<div class="path">${path.map(x=>`<span>${x}</span>`).join('')}</div>`;
    if(n.end){W.innerHTML=p+`<div class="end swap"><div class="t">${n.end}</div><div>${n.txt}</div></div><div class="stepnav"><button class="pri">Recomeçar</button></div>`;W.querySelector('.stepnav button').onclick=()=>{path=[];draw(b.tree)}}
    else{W.innerHTML=p+`<div class="swap"><div class="q">${n.q}</div><div class="ans">${n.a.map((a,i)=>`<button data-i="${i}">${a[0]}</button>`).join('')}</div></div>`;W.querySelector('.ans').onclick=e=>{const x=e.target.closest('button');if(!x)return;const a=n.a[+x.dataset.i];path.push(a[0]);draw(a[1])}}};
  draw(b.tree)};
B.gauge=(el,b)=>{const G=el.querySelector('.gwrap'),nd=G.querySelector('.needle'),t=G.querySelector('.gauge .t'),p=G.querySelector('.gauge p');
  const up=()=>{const on=[...G.querySelectorAll('input')].filter(x=>x.checked).length;const hit=b.mode==='all'?on===b.items.length:on>0;
    nd.style.transform=`rotate(${hit?62:-62}deg)`;const s=hit?b.on:b.off;t.textContent=s[0];t.style.color=hit?'var(--sage)':'var(--seal)';p.innerHTML=s[1];replay(t,'swap')};
  G.addEventListener('change',up);up()};
B.keys=(el)=>{el.querySelectorAll('[data-count]').forEach(k=>{const raw=k.dataset.count;const n=parseFloat(raw.replace(/\./g,'').replace(',','.'));if(isNaN(n)||!/^[\d.,]+$/.test(raw))return;let s=null;const dur=900;const step=ts=>{if(!s)s=ts;const f=Math.min(1,(ts-s)/dur);const v=Math.round(n*f);k.textContent=v.toLocaleString('pt-BR');if(f<1)requestAnimationFrame(step);else k.textContent=raw};requestAnimationFrame(step)})};

/* calculadoras */
const pad=n=>String(n).padStart(2,'0'),dkey=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const brl=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
function easter(y){const a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),mo=Math.floor((h+l-7*m+114)/31),da=((h+l-7*m+114)%31)+1;return new Date(y,mo-1,da)}
const ferCache={};function fer(y){if(ferCache[y])return ferCache[y];const f=['01-01','04-21','05-01','09-07','10-12','11-02','11-15','11-20','12-25'].map(s=>`${y}-${s}`);const p=easter(y);p.setDate(p.getDate()-2);f.push(dkey(p));return ferCache[y]=new Set(f)}
function util(d){const w=d.getDay();if(w===0||w===6)return false;const m=d.getMonth()+1,x=d.getDate();if((m===12&&x>=20)||(m===1&&x<=20))return false;return !fer(d.getFullYear()).has(dkey(d))}
const CALC={};
CALC.prazo=el=>{el.innerHTML=`<div class="calc"><div><label>Data da intimação ou publicação</label><input type="date" class="d"><label>Prazo</label><select class="p"><option value="15">15 dias (contestação, apelação, agravo)</option><option value="5">5 dias (embargos de declaração, emenda no 303)</option><option value="10">10 dias</option><option value="30">30 dias</option></select><label>Parte</label><select class="q"><option value="1">Particular</option><option value="2">Fazenda Pública (art. 183)</option><option value="2">Ministério Público (art. 180)</option><option value="2">Defensoria Pública (art. 186)</option><option value="2">Litisconsortes com advogados distintos, autos físicos (art. 229)</option></select><div style="margin-top:14px"><button class="btn pri go">Contar o prazo</button></div><div class="res" style="margin-top:14px" aria-live="polite"></div></div><div class="cal"></div></div>`;
  const d=el.querySelector('.d');d.value=dkey(new Date());
  const run=()=>{const [y,m,x]=d.value.split('-').map(Number);if(!y)return;const s=new Date(y,m-1,x),n=+el.querySelector('.p').value*+el.querySelector('.q').value;const cnt=[];const c=new Date(s);let guard=0;while(cnt.length<n&&guard++<800){c.setDate(c.getDate()+1);if(util(c))cnt.push(new Date(c))}
    const end=cnt[cnt.length-1],first=new Date(s.getFullYear(),s.getMonth(),1),last=new Date(end.getFullYear(),end.getMonth()+1,0),map=new Map(cnt.map((v,i)=>[dkey(v),i+1]));const M=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    let h='';const cur=new Date(first);while(cur<=last){if(cur.getDate()===1)h+=`<div class="mh">${M[cur.getMonth()]} de ${cur.getFullYear()}</div>`+['D','S','T','Q','Q','S','S'].map(z=>`<div class="dh">${z}</div>`).join('')+'<div></div>'.repeat(cur.getDay());const k=dkey(cur),q=map.get(k);let cl='d';if(k===dkey(s))cl+=' start';else if(!util(cur))cl+=' off';h+=`<div class="${cl}">${cur.getDate()}${q?`<small>${q}</small>`:''}</div>`;cur.setDate(cur.getDate()+1)}
    const cal=el.querySelector('.cal');cal.innerHTML=h;const els=[...cal.querySelectorAll('.d small')].map(z=>z.parentElement);const stp=Math.min(80,1300/els.length);els.forEach((e,i)=>setTimeout(()=>e.classList.add(i===els.length-1?'end':'cnt'),i*stp));
    setTimeout(()=>{const r=el.querySelector('.res');r.innerHTML=`Último dia: ${end.toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'long',year:'numeric'})}<small>${n} dias úteis, a partir do primeiro dia útil seguinte. Feriados locais e suspensões do tribunal não entram na conta.</small>`;replay(r,'swap')},els.length*stp)};
  el.querySelector('.go').onclick=run;run()};
CALC.valorcausa=el=>{el.innerHTML=`<div class="calc"><div><label>Tipo de ação</label><select class="k"><option value="alim">Alimentos (art. 292, III)</option><option value="venc">Prestações vencidas e vincendas (§§ 1º e 2º)</option><option value="cum">Pedidos cumulados (VI)</option><option value="alt">Pedidos alternativos (VII)</option><option value="sub">Pedido subsidiário (VIII)</option></select><label class="l1">Valor da prestação mensal (R$)</label><input type="number" class="a" value="1000" min="0" step="50"><label class="l2">Meses restantes (0 = prazo indeterminado)</label><input type="number" class="b" value="0" min="0" step="1"><label class="l3">Parcelas vencidas</label><input type="number" class="c" value="3" min="0" step="1"></div><div><div class="big res"></div><div class="exp" style="color:var(--muted);margin-top:8px"></div></div></div>`;
  const k=el.querySelector('.k'),a=el.querySelector('.a'),b=el.querySelector('.b'),c=el.querySelector('.c'),L=[el.querySelector('.l1'),el.querySelector('.l2'),el.querySelector('.l3')];
  const run=()=>{const v=+a.value||0,m=+b.value||0,n=+c.value||0;let tot=0,ex='';const kk=k.value;
    if(kk==='alim'){L[0].textContent='Pensão mensal pedida (R$)';L[1].textContent='—';L[2].textContent='—';b.disabled=c.disabled=true;tot=12*v;ex=`12 × ${brl(v)}. Na ação de alimentos, o valor é a soma de 12 prestações mensais.`}
    else if(kk==='venc'){L[0].textContent='Valor de cada prestação (R$)';L[1].textContent='Meses restantes (0 = indeterminado ou mais de 1 ano)';L[2].textContent='Parcelas já vencidas';b.disabled=c.disabled=false;const vinc=(m===0||m>12)?12:m;tot=(n+vinc)*v;ex=`${n} vencidas + ${vinc} vincendas = ${n+vinc} × ${brl(v)}. Vincendas: uma prestação anual (12) se o prazo for indeterminado ou superior a 1 ano; se inferior, a soma das restantes.`}
    else if(kk==='cum'){L[0].textContent='Pedido 1 (R$)';L[1].textContent='Pedido 2 (R$)';L[2].textContent='Pedido 3 (R$)';b.disabled=c.disabled=false;tot=v+m+n;ex='Na cumulação, somam-se os valores de todos os pedidos.'}
    else if(kk==='alt'){L[0].textContent='Alternativa 1 (R$)';L[1].textContent='Alternativa 2 (R$)';L[2].textContent='Alternativa 3 (R$)';b.disabled=c.disabled=false;tot=Math.max(v,m,n);ex='Nos alternativos, vale o de maior valor.'}
    else{L[0].textContent='Pedido principal (R$)';L[1].textContent='Pedido subsidiário (R$)';L[2].textContent='—';b.disabled=false;c.disabled=true;tot=v;ex='No subsidiário, vale o pedido principal, ainda que o subsidiário seja maior.'}
    const r=el.querySelector('.res');r.textContent=brl(tot);replay(r,'swap');el.querySelector('.exp').innerHTML=ex+` <br><span class="art-ref">Se não passar de 40 salários mínimos, cabe opção pelo Juizado (Lei 9.099/95, art. 3º).</span>`};
  [k,a,b,c].forEach(x=>x.addEventListener('input',run));run()};
CALC.honor=el=>{el.innerHTML=`<div class="calc"><div><label>Valor da condenação ou proveito econômico (em salários mínimos)</label><div class="slider"><input type="range" class="s" min="10" max="150000" step="10" value="3000"></div><div class="big sm"></div><label>Percentual dentro de cada faixa</label><select class="m"><option value="0">Mínimo legal</option><option value="1">Máximo legal</option></select></div><div class="bars"></div></div><div class="hint" style="margin-top:10px">Art. 85, §§ 3º e 5º: o cálculo é escalonado. Cada faixa recebe seu próprio percentual e os resultados se somam.</div>`;
  const F=[[0,200,10,20,'até 200 SM'],[200,2000,8,10,'200 a 2.000'],[2000,20000,5,8,'2.000 a 20.000'],[20000,100000,3,5,'20.000 a 100.000'],[100000,Infinity,1,3,'acima de 100.000']];
  const s=el.querySelector('.s'),m=el.querySelector('.m');
  const run=()=>{const v=+s.value,mx=+m.value;el.querySelector('.sm').textContent=v.toLocaleString('pt-BR')+' SM';let tot=0;const rows=F.map(f=>{const part=Math.max(0,Math.min(v,f[1])-f[0]);const pc=mx?f[3]:f[2];const h=part*pc/100;tot+=h;return [f,part,pc,h]});
    el.querySelector('.bars').innerHTML=rows.map(([f,part,pc,h])=>`<div class="bar-row"><span>${f[4]} <small style="color:var(--muted)">(${f[2]}–${f[3]}%)</small></span><div class="b"><i style="width:0" data-w="${Math.min(100,part/(f[1]===Infinity?Math.max(v-100000,1):f[1]-f[0])*100)}"></i></div><span class="v">${h.toLocaleString('pt-BR',{maximumFractionDigits:1})} SM</span></div>`).join('')+`<div class="bar-row" style="border-top:2px solid var(--ink);padding-top:8px"><b>Total</b><span></span><span class="v" style="color:var(--seal)">${tot.toLocaleString('pt-BR',{maximumFractionDigits:1})} SM</span></div>`;
    requestAnimationFrame(()=>el.querySelectorAll('.bar-row .b i').forEach(i=>i.style.width=i.dataset.w+'%'))};
  s.addEventListener('input',run);m.addEventListener('change',run);run()};
CALC.forca=el=>{el.innerHTML=`<div class="calc"><div><label>Data do esbulho ou da turbação</label><input type="date" class="a"><label>Data do ajuizamento</label><input type="date" class="b"></div><div><div class="big res"></div><div class="exp" style="margin-top:8px"></div></div></div>`;
  const a=el.querySelector('.a'),b=el.querySelector('.b');const t=new Date();const ago=new Date(t);ago.setMonth(t.getMonth()-8);a.value=dkey(ago);b.value=dkey(t);
  const run=()=>{if(!a.value||!b.value)return;const A=new Date(a.value+'T12:00'),Bd=new Date(b.value+'T12:00');const lim=new Date(A);lim.setFullYear(A.getFullYear()+1);lim.setDate(lim.getDate()+1);const nova=Bd<=lim;const days=Math.round((Bd-A)/864e5);
    const r=el.querySelector('.res');r.textContent=nova?'Força nova':'Força velha';r.style.color=nova?'var(--sage)':'var(--brass)';replay(r,'swap');
    el.querySelector('.exp').innerHTML=`${days} dias entre o fato e a ação. Limite de ano e dia: ${lim.toLocaleDateString('pt-BR')}.<br>`+(nova?'Rito especial (arts. 560 a 566). Liminar sem prova de perigo, bastando provar posse, moléstia, data e perda ou continuação da posse (arts. 561 e 562).':'Procedimento comum, sem perder o caráter possessório (art. 558, parágrafo único). Liminar só como tutela de urgência (art. 300). Se o litígio for coletivo, audiência de mediação em até 30 dias antes da liminar (art. 565).')};
  [a,b].forEach(x=>x.addEventListener('input',run));run()};
CALC.resolucao=el=>{el.innerHTML=`<div class="calc"><div><label>Motivo do desligamento</label><select class="k"><option value="0">Falecimento do sócio</option><option value="1">Retirada imotivada</option><option value="2">Recesso</option><option value="3">Exclusão judicial ou retirada por justa causa</option><option value="4">Exclusão extrajudicial</option></select><label class="lb">Data de referência</label><input type="date" class="d"></div><div><div class="big res"></div><div class="exp" style="margin-top:8px"></div></div></div>`;
  const k=el.querySelector('.k'),d=el.querySelector('.d'),lb=el.querySelector('.lb');d.value=dkey(new Date());
  const L=['Data do óbito','Data em que a sociedade recebeu a notificação','Data em que a sociedade recebeu a notificação','Data do trânsito em julgado','Data da assembleia ou reunião'];
  const X=['Art. 605, I: a data do óbito.','Art. 605, II: o sexagésimo dia após a sociedade receber a notificação do sócio retirante.','Art. 605, III: o próprio dia em que a sociedade recebe a notificação do sócio dissidente.','Art. 605, IV: o trânsito em julgado da decisão que dissolver a sociedade.','Art. 605, V: a data da assembleia ou reunião que deliberou a exclusão.'];
  const run=()=>{lb.textContent=L[+k.value];if(!d.value)return;const D=new Date(d.value+'T12:00');if(k.value==='1')D.setDate(D.getDate()+60);const r=el.querySelector('.res');r.textContent=D.toLocaleDateString('pt-BR');replay(r,'swap');el.querySelector('.exp').innerHTML=X[+k.value]+'<br><span style="color:var(--muted)">Até essa data, o ex-sócio recebe lucros, juros sobre capital e pró-labore; depois, só correção monetária e juros (art. 608).</span>'};
  [k,d].forEach(x=>x.addEventListener('input',run));run()};
CALC.inventario=el=>{el.innerHTML=`<div class="calc"><div><label>Data do óbito</label><input type="date" class="d"></div><div class="tl" style="padding-top:4px"></div></div>`;
  const d=el.querySelector('.d');const t=new Date();t.setMonth(t.getMonth()-1);d.value=dkey(t);
  const run=()=>{if(!d.value)return;const O=new Date(d.value+'T12:00');const a=new Date(O);a.setMonth(a.getMonth()+2);const b=new Date(a);b.setMonth(b.getMonth()+12);const c30=new Date(O);c30.setDate(c30.getDate()+30);const f=x=>x.toLocaleDateString('pt-BR');
    const T=el.querySelector('.tl');T.innerHTML=`<span class="bar"></span>`+[['Abertura da sucessão',`${f(O)}. Os bens se transmitem desde logo aos herdeiros (CC, art. 1.784).`],['Prazo do Código Civil',`${f(c30)} — 30 dias (CC, art. 1.796). Superado pelo CPC, lei posterior.`],['Instaurar o inventário',`até ${f(a)} — 2 meses (CPC, art. 611).`],['Concluir o inventário',`até ${f(b)} — 12 meses seguintes, prorrogáveis pelo juiz.`],['Atraso','Multa estadual sobre o ITCMD (em SC, 20%), válida segundo a Súmula 542 do STF.']].map(([x,y],i)=>`<div class="it" style="transition-delay:${i*160}ms"><b>${x}</b><span>${y}</span></div>`).join('');
    T.classList.remove('vis');const host=T.closest('.reveal');if(host){host.classList.remove('vis');void host.offsetWidth;host.classList.add('vis')}};
  d.addEventListener('input',run);run()};
CALC.alvara=el=>{el.innerHTML=`<div class="calc"><div><label>O que se quer levantar?</label><select class="k"><option value="1">FGTS, PIS-PASEP ou verbas trabalhistas</option><option value="2">Saldo bancário, poupança, fundos, restituição de IR</option></select><label class="tog" style="border:0"><input type="checkbox" class="b"><span>Há outros bens a inventariar<small>Imóvel, veículo etc.</small></span></label><label class="tog" style="border:0"><input type="checkbox" class="v"><span>O valor passa de 500 OTN</span></label><label class="tog" style="border:0"><input type="checkbox" class="h" checked><span>Há dependentes habilitados no INSS</span></label></div><div class="out"></div></div>`;
  const q=s=>el.querySelector(s);const run=()=>{const k=q('.k').value,b=q('.b').checked,v=q('.v').checked,h=q('.h').checked;let t,x;
    if(k==='1'){t='Cabe alvará';x=`Lei 6.858/80, art. 1º, e CPC, art. 666: independe de inventário, ainda que existam outros bens, e não tem limite de valor. Recebem ${h?'os dependentes habilitados no INSS, em quotas iguais':'os sucessores da lei civil, porque não há dependentes habilitados'}. Quota de menor fica em poupança até a maioridade.`}
    else if(!b&&!v){t='Cabe alvará';x='Lei 6.858/80, art. 2º: sem outros bens e até 500 OTN, os saldos podem ser levantados por alvará.'}
    else if(b&&!v){t='Em regra, inventário';x='O art. 2º exige ausência de outros bens. Mas, por ser jurisdição voluntária, o juiz pode adotar a solução mais conveniente (CPC, art. 723, parágrafo único) quando o total é pequeno. Depende do entendimento de cada juízo.'}
    else{t='Inventário ou arrolamento';x='Saldos acima de 500 OTN não se levantam por alvará: abra inventário ou arrolamento.'}
    const o=q('.out');o.innerHTML=`<div class="t">${t}</div><p>${x}</p>`;replay(o,'swap')};
  el.querySelectorAll('input,select').forEach(z=>z.addEventListener('input',run));run()};
B.calc=(el,b)=>CALC[b.kind](el.querySelector('.calcbox'));

/* quiz */
function quiz(host,mod){const qs=mod.quiz;let qi=0,score=0;host.innerHTML=`<div class="quiz"><h3>Teste do módulo</h3><div class="qp"><i></i></div><div class="qstage" aria-live="polite"></div></div>`;
  const stg=host.querySelector('.qstage'),pg=host.querySelector('.qp i');
  const show=()=>{pg.style.width=(qi/qs.length*100)+'%';
    if(qi>=qs.length){st.quiz[mod.id]=Math.max(st.quiz[mod.id]||0,score);st.done[mod.id]=1;save();paintNav();
      stg.innerHTML=`<p style="font-family:var(--serif);font-size:1.8rem;margin:0">${score} de ${qs.length}</p><p>${score===qs.length?'Gabaritou. Módulo concluído.':score>=qs.length*.6?'Módulo concluído. Revise o que errou.':'Módulo marcado como visto. Vale reler os blocos e tentar de novo.'}</p><button class="qbtn">Refazer</button>`;stg.querySelector('button').onclick=()=>{qi=0;score=0;show()};replay(stg,'swap');return}
    const q=qs[qi];stg.innerHTML=`<p style="margin:0">${qi+1}. ${q[0]}</p><div class="opts">${q[1].map((o,i)=>`<button data-i="${i}">${o}</button>`).join('')}</div>`;replay(stg,'swap');
    stg.querySelector('.opts').addEventListener('click',e=>{const x=e.target.closest('button');if(!x)return;const i=+x.dataset.i,bs=stg.querySelectorAll('.opts button');bs.forEach(y=>y.disabled=true);bs[q[2]].classList.add('ok');if(i===q[2])score++;else x.classList.add('no');
      stg.insertAdjacentHTML('beforeend',`<p class="why">${q[3]}</p><button class="qbtn">${qi+1<qs.length?'Próxima':'Ver resultado'}</button>`);const nb=stg.querySelector('.qbtn');nb.onclick=()=>{qi++;show()};nb.focus({preventScroll:true})},{once:true})};
  show()}

/* ---------- navegação ---------- */
const M=C.mods;const idx=id=>M.findIndex(m=>m.id===id);
const nav=$('nav.side'),main=$('main'),bd=$('.backdrop');
function paintNav(){let html='',g='';M.forEach((m,i)=>{if(m.group!==g){g=m.group;html+=`<h4>${g}</h4>`}html+=`<button data-id="${m.id}" class="${st.done[m.id]?'done':''}"><span class="n">${RN[i]} –</span><span>${m.title}</span><span class="ck">✓</span></button>`});
  nav.innerHTML=html;const cur=location.hash.slice(1);nav.querySelectorAll('button').forEach(b=>b.setAttribute('aria-current',b.dataset.id===cur));
  const n=Object.keys(st.done).filter(k=>idx(k)>=0).length;$('.prog i').style.width=(n/M.length*100)+'%';$('.pct').textContent=Math.round(n/M.length*100)+'%'}
nav.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;location.hash=b.dataset.id;closeNav()});
const openNav=()=>{nav.classList.add('open');bd.classList.add('open')},closeNav=()=>{nav.classList.remove('open');bd.classList.remove('open')};
$('.top .menu').onclick=()=>nav.classList.contains('open')?closeNav():openNav();bd.onclick=closeNav;

let io;
function observe(){if(io)io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');const k=e.target.querySelector('.keys');if(k&&!k.dataset.done){k.dataset.done=1;B.keys(k)}io.unobserve(e.target)}}),{threshold:.12});main.querySelectorAll('.reveal').forEach(x=>io.observe(x))}

function cover(){const total=M.reduce((s,m)=>s+m.blocks.length,0),qn=M.reduce((s,m)=>s+m.quiz.length,0);
  main.innerHTML=`<section class="cover"><div class="seal" aria-hidden="true"><svg viewBox="0 0 300 300"><defs><path id="cp" d="M150,150 m-112,0 a112,112 0 1,1 224,0 a112,112 0 1,1 -224,0"/></defs><circle cx="150" cy="150" r="140" fill="none" stroke="var(--seal)" stroke-width="4"/><circle cx="150" cy="150" r="92" fill="none" stroke="var(--brass)" stroke-width="2"/><g class="spin"><text font-family="Archivo,sans-serif" font-size="15" letter-spacing="4" fill="var(--seal)"><textPath href="#cp">${C.seal.ring}</textPath></text></g><text x="150" y="146" text-anchor="middle" font-family="Libre Caslon Text,serif" font-size="30" fill="var(--seal)">${C.seal.word}</text><text x="150" y="178" text-anchor="middle" font-family="Archivo,sans-serif" font-size="13" fill="var(--brass)">${C.seal.sub}</text></svg></div>
  <div class="kicker">${C.kicker}</div><h1><span><i>${C.h1a}</i></span><span><i>${C.h1b}</i></span></h1><p>${C.intro}</p>
  <div class="stats"><div><b>${M.length}</b><span>módulos</span></div><div><b>${total}</b><span>blocos interativos e de leitura</span></div><div><b>${qn}</b><span>questões comentadas</span></div></div>
  <button class="go">${Object.keys(st.done).length?'Continuar de onde parei':'Começar pelo módulo I'}</button></section><footer class="fn">${C.footer}</footer>`;
  main.querySelector('.go').onclick=()=>{const nx=M.find(m=>!st.done[m.id])||M[0];location.hash=nx.id}}

function render(id){const i=idx(id);if(i<0){cover();paintNav();window.scrollTo(0,0);return}const m=M[i];
  let h=`<article class="mod"><header class="mod-head"><div class="rn">${RN[i]}</div><div class="sub">${m.group}</div><h2>${m.title}</h2></header>${m.intro?`<p class="intro">${m.intro}</p>`:''}`;
  m.blocks.forEach((b,j)=>{h+=`<section class="blk reveal" data-j="${j}">${b.h?`<h3>${b.h}</h3>`:''}${b.hint?`<p class="hint">${b.hint}</p>`:''}${R[b.t](b)}</section>`});
  if(m.quiz&&m.quiz.length)h+=`<section class="blk reveal qhost"></section>`;
  const pv=M[i-1],nx=M[i+1];
  h+=`<div class="nextmod">${pv?`<button data-go="${pv.id}"><small>Anterior</small>${RN[i-1]} – ${pv.title}</button>`:''}${nx?`<button class="pri" data-go="${nx.id}"><small>Próximo</small>${RN[i+1]} – ${nx.title}</button>`:`<button class="pri" data-go=""><small>Fim</small>Voltar à capa</button>`}</div><footer class="fn">${C.footer}</footer></article>`;
  main.innerHTML=h;
  main.querySelectorAll('.blk[data-j]').forEach(el=>{const b=m.blocks[+el.dataset.j];if(B[b.t])B[b.t](el,b)});
  const qh=main.querySelector('.qhost');if(qh)quiz(qh,m);
  main.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{location.hash=b.dataset.go});
  if(!m.quiz||!m.quiz.length){st.done[m.id]=1;save()}
  paintNav();observe();window.scrollTo(0,0);document.title=`${m.title} | ${C.title} | Inciso`}
window.addEventListener('hashchange',()=>render(location.hash.slice(1)));
$('.top .course').textContent=C.title;
render(location.hash.slice(1));
})();
