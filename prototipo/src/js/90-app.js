/* ================= estado ================= */
/* G: estado do aluno (matéria atual e atividade diária); S: estado da matéria aberta */
/* identidade v2: cor por matéria (tom claro, para o modo escuro). Seis tons do manual "Inciso Sistema";
   só para faixa da capa, etiqueta e numerais da trilha (progresso é sempre Sálvia, alerta sempre Selo) */
const MATTONE={SUC:['#3E6B78','#7FB0BD'],FAM:['#8C4A6E','#D08FB2'],CON:['#2F5D8A','#8DB4DE'],REA:['#6B7A2E','#B4C46E'],PEN:['#A0582A','#E39A69'],CST:['#5B4E8C','#A99DE0']};
const MATOF={tgp:'REA',conhecimento:'FAM',procesp:'CST',sucessoes:'SUC',respciv:'CON',obrigacoes:'CON',contratos:'CON',pena:'PEN',crimes:'PEN',constituicao:'CST',estado:'CST',administrativo:'REA',filosofia:'FAM'};
const matCor=id=>(MATTONE[MATOF[id]]||MATTONE.REA)[1];
function paintCourse(){const r=document.documentElement.style,t=MATTONE[MATOF[COURSE.id]]||MATTONE.REA;r.setProperty('--mat',t[1]);r.setProperty('--mat-base',t[0])}
const GKEY='inciso-global-v3',CKEY=id=>'inciso-'+id+'-v3'+((COURSES[id]&&COURSES[id].ver)||'');
/* matérias liberadas no lançamento; as demais aparecem como "em breve" */
const LIVE=['tgp','conhecimento','procesp'],isLive=id=>LIVE.includes(id);
/* "Encontrou algum erro?": para onde vai o aviso do aluno. form = link de um formulário (ex.: Tally) que
   recebe materia, aula, parte e texto pelo endereço; sem form, usa o e-mail; sem nenhum dos dois, copia o aviso */
const REPORTE={form:'',email:''};
let G,S;
function blankLessons(){return Object.fromEntries(MODS.map(m=>[m.live,{seen:{},quiz:null}]))}
function seedCourse(){
  const T=today(),r=rng(20261010),c=COURSE.seed;
  const s={v:3,attempts:[],cards:{},newIntro:{},lessons:blankLessons(),lab:{solved:{}},lastLesson:MODS[0].live,filter:'all'};
  if(!c)return s;
  c.full.forEach(id=>{LESSONS[id].sections.forEach(x=>s.lessons[id].seen[x.id]=1);s.lessons[id].quiz=5});
  Object.entries(c.partial).forEach(([id,secs])=>secs.forEach(k=>s.lessons[id].seen[k]=1));
  s.lastLesson=c.last;
  const order=c.order,p=c.p;
  for(let back=30;back>=1;back--){
    const d=T-back;
    if(back>4&&r()<.35)continue;
    const reach=Math.min(order.length,1+Math.floor((30-back)/3.8));
    const n=3+Math.floor(r()*6);
    for(let i=0;i<n;i++){
      const t=order[Math.min(reach-1,Math.floor(Math.pow(r(),.6)*reach))];
      const pool=BANK.filter(q=>q.t===t),q=pool[Math.floor(r()*pool.length)];
      const prob=Math.min(.97,p[t]-.12+.24*(1-back/30));
      s.attempts.push({q:q.id,t:t,ok:r()<prob,d:d});
    }
    G.activity[d]=(G.activity[d]||0)+n+2+Math.floor(r()*6);
  }
  CARDS.forEach(cd=>{
    const idx=order.indexOf(cd.t);if(idx<0||idx>3)return;
    const ivl=1+Math.floor(r()*8),due=r()<.45?T-Math.floor(r()*3):T+1+Math.floor(r()*8);
    s.cards[cd.id]={ivl:ivl,ease:2.3+r()*.4,due:due,n:2+Math.floor(r()*4)};
  });
  return s;
}
function readJSON(k){try{const raw=localStorage.getItem(k);return raw?JSON.parse(raw):null}catch(e){return null}}
function writeJSON(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
let MEM={};
function loadCourse(id){
  useCourse(id);
  const o=MEM[id]||readJSON(CKEY(id));
  if(o&&o.v===3){S=o;MODS.forEach(m=>{if(!S.lessons[m.live])S.lessons[m.live]={seen:{},quiz:null}});S.lab=S.lab||{solved:{}}}
  else S=seedCourse();
  MEM[id]=S;save();
}
function load(){
  const g=readJSON(GKEY);G=g&&g.v===3?g:{v:3,course:LIVE[0],activity:{}};
  if(!isLive(G.course))G.course=LIVE[0];
  /* garante que toda matéria tenha estado; a de exemplo já vem com histórico */
  LIVE.forEach(id=>{if(!readJSON(CKEY(id))&&!MEM[id])loadCourse(id)});
  loadCourse(G.course);
}
function save(){if(S&&COURSE){MEM[COURSE.id]=S;writeJSON(CKEY(COURSE.id),S)}if(G)writeJSON(GKEY,G)}
function switchCourse(id){if(!COURSES[id]||!isLive(id))return;G.course=id;LAB=null;loadCourse(id);save();if(location.hash==='#painel')route();else location.hash='painel'}
function bump(n){if(!G)return;const T=today();G.activity[T]=(G.activity[T]||0)+(n||1)}

/* ================= métricas ================= */
function attemptsOf(t){return S.attempts.filter(a=>a.t===t)}
function mastery(t){
  const at=attemptsOf(t);if(!at.length)return null;
  const last=at.slice(-10),acc=last.filter(a=>a.ok).length/last.length;
  const cover=Math.min(1,new Set(at.map(a=>a.q)).size/Math.max(1,BANK.filter(q=>q.t===t).length));
  return acc*(.6+.4*cover);
}
function status(m){if(m==null)return['none','Não iniciado'];if(m<.5)return['bad','Atenção'];if(m<.8)return['warn','Em progresso'];return['ok','Dominado']}
function preparo(){return TOPICS.reduce((s,t)=>s+(mastery(t.id)||0),0)/TOPICS.length}
function streak(){const T=today();let d=G.activity[T]?T:T-1,n=0;while(G.activity[d]){n++;d--}return n}
function weakest(){let best=null;TOPICS.forEach(t=>{const m=mastery(t.id);if(m!=null&&(!best||m<best.m))best={id:t.id,m:m}});return best}
function weakSet(){
  const arr=TOPICS.map(t=>({id:t.id,m:mastery(t.id)})).filter(x=>x.m!=null).sort((a,b)=>a.m-b.m);
  const w=arr.filter(x=>x.m<.6).map(x=>x.id);
  return new Set(w.length?w:arr.slice(0,2).map(x=>x.id));
}
function lessonProgress(id){
  const def=LESSONS[id];if(def.progress)return Math.min(1,def.progress());
  const L=S.lessons[id],secs=def.sections.map(s=>s.id),seen=secs.filter(k=>L.seen[k]).length/secs.length;
  return def.noQuiz?seen:seen*.7+(L.quiz!=null?.3:0);
}
function modProg(m){return lessonProgress(m.live)}
function dueQueue(){
  const T=today(),studied=new Set(S.attempts.map(a=>a.t));
  const due=CARDS.filter(c=>S.cards[c.id]&&S.cards[c.id].due<=T).sort((a,b)=>S.cards[a.id].due-S.cards[b.id].due);
  const left=Math.max(0,5-(S.newIntro[T]||0));
  const fresh=CARDS.filter(c=>!S.cards[c.id]&&studied.has(c.t)).slice(0,left);
  return due.concat(fresh);
}
function record(q,ok,k){S.attempts.push({q:q.id,t:q.t,ok:ok,d:today(),c:k});bump(1);save();refreshNav()}

/* ================= UI util ================= */
let toastT;
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2600)}
function chip(m){const s=status(m);return `<span class="chip ${s[0]}">${s[1]}</span>`}
function dial(v,size,label){
  const C=326.73,off=(C*(1-v)).toFixed(2),n=Math.round(v*100);
  return `<div class="ring" style="width:${size}px;height:${size}px" role="img" aria-label="${label}: ${n}%"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="none" stroke="var(--track)" stroke-width="8"/><circle data-a="ring" data-from="${C}" data-to="${off}" data-d="200" cx="60" cy="60" r="52" fill="none" stroke="var(--sage)" stroke-width="8" stroke-dasharray="${C}" stroke-dashoffset="${off}"/></svg><b data-a="count" data-to="${n}" data-suf="%" data-d="200">${n}%</b></div>`;
}
function animateDials(){}

const ICON={
 materias:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="5"/><rect x="3" y="11" width="18" height="5"/><path d="M3 20h18"/></svg>',
 painel:'<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18"/><path d="M7.5 8h1.5M11.5 8h5M7.5 12h1.5M11.5 12h5M7.5 16h1.5M11.5 16h3"/></svg>',
 trilha:'<svg viewBox="0 0 24 24"><path d="M3 12h18"/><rect x="4.5" y="10.5" width="3" height="3"/><rect x="16.5" y="10.5" width="3" height="3"/><path d="M12 8v8"/></svg>',
 revisao:'<svg viewBox="0 0 24 24"><rect x="3" y="8" width="14" height="12"/><path d="M7 8V4h14v12h-4"/><path d="M6.5 14h7"/></svg>',
 questoes:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.24c-.66.33-1.1.98-1.1 1.71v1.05"/><path d="M12 17.4v.2"/></svg>',
 desempenho:'<svg viewBox="0 0 24 24"><path d="M12 4a8 8 0 1 1-8 8"/><path d="M9 12h6"/></svg>',
 turma:'<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="4"/><path d="M12 7v4M6 11h12M6 11v3M18 11v3"/><rect x="3" y="14" width="6" height="4"/><rect x="15" y="14" width="6" height="4"/></svg>'
};
Object.keys(ICON).forEach(k=>ICON[k]=ICON[k].replace(/<(path|rect)/g,'<$1 pathLength="1"'));
const NAV=[['materias','Matérias'],['painel','Painel'],['trilha','Trilha'],['revisao','Revisão'],['questoes','Questões'],['desempenho','Desempenho']];
let currentNav='painel';
function refreshNav(){
  const due=dueQueue().length,cur=currentNav;
  $('#nav').innerHTML=NAV.map(([k,l])=>(k==='turma'?'<div class="sep"></div>':'')+`<a href="#${k}" data-nav="${k}" title="${l}" aria-label="${l}" ${k===cur?'aria-current="page"':''}>${k===cur?ICON[k].replace('<svg','<svg class="icd"'):ICON[k]}<span>${l}</span>${k==='revisao'&&due?`<span class="badge">${due}</span>`:''}${k==='turma'?'<span class="tag">professor</span>':''}</a>`).join('');
  $('#course').innerHTML=`<small>${COURSE.area} · trocar</small><strong>${COURSE.nome}</strong>`;$('#mtopc').textContent=COURSE.nome;
  $('#tabbar').innerHTML=NAV.filter(([k])=>k!=='turma').map(([k,l])=>`<a href="#${k}" ${k===cur?'aria-current="page"':''}>${ICON[k]}<span>${l}</span>${k==='revisao'&&due?'<i class="dot"></i>':''}</a>`).join('');
}

/* ================= views ================= */
function viewPainel(){
  const T=today(),due=dueQueue().length,st=streak();
  const wk=S.attempts.filter(a=>a.d>T-7),wkAcc=wk.length?wk.filter(a=>a.ok).length/wk.length:null;
  const prep=preparo(),weak=weakest();
  const LM=MODS.find(m=>m.live===S.lastLesson)||MODS[3],lp=lessonProgress(LM.live);
  const next=MODS.find(m=>lessonProgress(m.live)<1)||LM;
  const doneQ=weak?S.attempts.filter(a=>a.d===T&&a.t===weak.id).length:0;
  const mon=(new Date().getDay()+6)%7,start=T-mon-28;
  let cells='<span></span>'+['S','T','Q','Q','S','S','D'].map(d=>`<span class="wd">${d}</span>`).join('');
  for(let w=0;w<5;w++){
    cells+=`<span class="wl">${fmtDay(start+w*7)}</span>`;
    for(let k=0;k<7;k++){const d=start+w*7+k,v=G.activity[d]||0;const l=d>T?'fut':v===0?'':v<5?'l1':v<10?'l2':v<15?'l3':'l4';cells+=`<i class="${l}${d===T?' today':''}" title="${fmtDay(d)}: ${v} atividades"></i>`}
  }
  const days30=Object.keys(G.activity).filter(d=>+d>T-30&&G.activity[d]>0).length,tot30=S.attempts.filter(a=>a.d>T-30).length;
  const doneMods=MODS.filter(m=>lessonProgress(m.live)>=.999).length;
  return `
  <header class="vh banner">${patHTML(48)}<div><p class="eyebrow">${COURSE.nome}</p><h1>Seu painel</h1></div>
    </header>
  <div class="top">
    <article class="card prep">${dial(prep,132,'Domínio do conteúdo')}
      <div><h2>Domínio do conteúdo</h2>
      <p style="margin-top:12px"><a class="btn small" href="#desempenho">Ver desempenho</a></p></div></article>
    <div class="kpis">
      <div class="kpi">${ic('sequencia','icd')}<small>Sequência</small><b class="num">${st} ${st===1?'dia':'dias'}</b><span>estudando sem falhar</span></div>
      <div class="kpi ${due?'alert':''}">${ic('flash','icd')}<small>Revisões para hoje</small><b class="num">${due}</b><span>${due?'flashcards vencidos ou novos':'tudo em dia'}</span></div>
      <div class="kpi">${ic('concluida','icd')}<small>Aulas concluídas</small><b class="num">${doneMods} de ${NMODS}</b><span>na trilha</span></div>
      <div class="kpi">${ic('alvo','icd')}<small>Acerto em 7 dias</small><b class="num">${wkAcc==null?'—':pct(wkAcc)}</b><span>${wk.length} questões na semana</span></div>
    </div>
  </div>
  <div class="cols">
    <section class="card"><h2>Plano de hoje</h2><p class="hint">Montado a partir das suas revisões vencidas, do seu tema mais fraco e da próxima aula.</p>
      <ul class="plan">
        <li class="${due===0?'done':''}"><span class="ck"></span><div><strong>Revisar ${due||'os'} flashcards</strong><small>${due?'Leva cerca de '+Math.max(2,Math.round(due*.6))+' minutos':'Feito por hoje'}</small></div><a class="btn small" href="#revisao">Revisar</a></li>
        ${weak?`<li class="${doneQ>=5?'done':''}"><span class="ck"></span><div><strong>5 questões de ${TN[weak.id]}</strong><small>Seu tema mais fraco: ${pct(weak.m)} de domínio · ${Math.min(doneQ,5)}/5 hoje</small></div><button class="btn small" data-practice="${weak.id}">Praticar</button></li>`:''}
        <li class="${lessonProgress(next.live)>=1?'done':''}"><span class="ck"></span><div><strong>Aula ${rom(next.n)}: ${next.tit}</strong><small>${pct(lessonProgress(next.live))} concluída · próxima da trilha</small></div><a class="btn small" href="#modulo-${next.n}">Abrir</a></li>
      </ul>
      <div class="cont"><small>Continue de onde parou</small><strong>Aula ${rom(LM.n)} · ${LM.tit}</strong><div class="bar"><i style="width:${lp*100}%"></i></div>
        <div class="row"><span class="num">${pct(lp)} da aula</span><a class="btn small" href="#modulo-${LM.n}">Continuar aula</a></div></div>
    </section>
    <section class="card"><h2>Domínio por tema</h2><p class="hint">Toque em um tema para praticar.</p>
      <div class="mastery">${TOPICS.map(t=>{const m=mastery(t.id),s=status(m);return `<button class="mrow" data-practice="${t.id}"><span>${rom(t.mod)} – ${t.nome}</span><div class="bar ${s[0]}"><i style="width:${(m||0)*100}%"></i></div><em class="num">${m==null?'—':pct(m)}</em>${chip(m)}</button>`}).join('')}</div>
    </section>
  </div>
  <section class="card"><h2>Atividade</h2><p class="hint">Questões, revisões, exercícios e seções de aula por dia, nas últimas 5 semanas.</p>
    <div class="heatwrap"><div style="flex:1;min-width:240px;max-width:520px"><div class="heat">${cells}</div>
      <div class="legend">menos<i style="background:var(--soft)"></i><i style="background:color-mix(in srgb,var(--sage) 30%,var(--soft))"></i><i style="background:color-mix(in srgb,var(--sage) 55%,var(--soft))"></i><i style="background:color-mix(in srgb,var(--sage) 80%,var(--soft))"></i><i style="background:var(--sage)"></i>mais</div></div>
      <div class="heatstats"><div><b class="num">${days30}</b><small>dias de estudo nos últimos 30</small></div><div><b class="num">${tot30}</b><small>questões nos últimos 30 dias</small></div></div></div>
  </section>`;
}

function viewTrilha(){
  const lastN=(MODS.find(m=>m.live===S.lastLesson)||{}).n;
  return `<header class="vh banner">${patHTML(48)}<div><p class="eyebrow">${COURSE.nome}</p><h1>Trilha da matéria</h1><p class="sub">${NMODS} aulas interativas, em ordem lógica. Cada uma termina com um teste que alimenta o seu painel.</p></div></header>
  ${UNITS.map(([u,lab])=>`<section class="unit"><h2>${lab}</h2>${MODS.filter(m=>m.u===u).map(m=>{
    const p=modProg(m),done=p>=.999;
    const st=done?'<span class="chip ok">Concluída</span>':p>0?'<span class="chip warn">Em andamento</span>':'<span class="chip none">Não iniciada</span>';
    const nsec=LESSONS[m.live].sections.length;
    return `<a class="mod ${done?'done':''} ${m.n===lastN?'cur':''}" href="#modulo-${m.n}"><span class="n">${rom(m.n)} <i>–</i></span>
      <div><strong>${m.tit}</strong><small><span>${nsec} seções</span>${m.t?`<span>${BANK.filter(q=>q.t===m.t).length} questões · ${CARDS.filter(c=>c.t===m.t).length} flashcards</span>`:`<span>${CASES.length} casos</span>`}</small></div>
      <div class="pg"><div class="bar ${done?'':'warn'}"><i style="width:${p*100}%"></i></div><span class="num">${pct(p)}</span></div><div class="st">${st}</div></a>`}).join('')}</section>`).join('')}`;
}

function lessonView(m){
  const def=LESSONS[m.live],id=m.live,p=lessonProgress(id);CUR_N=m.n;
  const secs=def.sections.map((s,k)=>`<section class="lsec" id="${id}-${s.id}" data-sec="${s.id}"><h2>${inc(k+1)}<span>${s.h}</span></h2>${s.lead?`<p class="lead">${s.lead}</p>`:''}${typeof s.html==='function'?s.html():s.html}</section>`).join('');
  const out=def.sections.map(s=>[`${id}-${s.id}`,s.nav,def.sections.indexOf(s)+1]).concat(def.noQuiz?[]:[[`${id}-quiz`,'Teste rápido',def.sections.length+1]]);
  const nq=BANK.filter(q=>q.t===m.t).length;
  const prev=MODS.find(x=>x.n===m.n-1),nxt=MODS.find(x=>x.n===m.n+1);
  return `<div class="lbar"><a href="#trilha">← Trilha</a><span class="t">Aula ${rom(m.n)} de ${rom(NMODS)} · ${m.tit}</span><div class="bar"><i id="lprog" style="width:${p*100}%"></i></div><b class="num" id="lpct">${pct(p)}</b></div>
  <article class="ls">
    <header class="lhead">${patHTML(64)}
      <div class="ctop" data-a="fade"><span>${COURSE.nome}</span><span>Aula ${rom(m.n)} de ${rom(NMODS)}</span></div>
      ${def.hero?def.hero():''}
      <h1 class="ltitle"><span><i data-a="rise" data-d="150">${def.title[0]}</i></span><span><i data-a="rise" data-d="280">${def.title[1]}</i></span></h1>
      <p class="lead" data-a="fade" data-d="700">${def.lead}</p>
      <nav class="lincs" aria-label="Seções da aula">${out.map((o,i)=>`<button data-to="${o[0]}" data-a="up" data-d="${900+Math.min(i,5)*80}"><b>${rom(o[2])} –</b>${o[1]}</button>`).join('')}</nav></header>
    ${secs}
    ${def.noQuiz?'':`<section class="lsec" id="${id}-quiz"><h2>${inc(def.sections.length+1)}<span>Teste rápido</span></h2><p class="lead">${nq} questões. Suas respostas entram no seu domínio do tema e no painel.</p><div class="qz dark" id="${id}-qz"></div></section>`}
    <section class="lerro" id="${id}-erro"><h3>Encontrou algum erro?</h3><p>Artigo errado, gabarito trocado, texto confuso: avise, e a gente corrige para todos.</p>
      <button class="btn small lerro-abrir">Avisar sobre um erro</button>
      <form class="lerro-form" hidden><label>Em que parte?<select name="parte">${def.sections.map(s=>`<option>${s.nav}</option>`).join('')}${def.noQuiz?'':'<option>Teste rápido</option>'}<option>Outra parte</option></select></label>
        <label>O que está errado?<textarea name="texto" rows="4" required placeholder="Ex.: o prazo da seção III é de 15 dias, não 10 (art. 335)."></textarea></label>
        <div class="lerro-acoes"><button class="btn primary small" type="submit">Enviar aviso</button><button class="btn small lerro-fechar" type="button">Cancelar</button></div></form></section>
    <nav class="lnext">${prev?`<a class="btn" href="#modulo-${prev.n}">← ${rom(prev.n)} – ${prev.tit}</a>`:'<span></span>'}${nxt?`<a class="btn primary" href="#modulo-${nxt.n}">${rom(nxt.n)} – ${nxt.tit} →</a>`:`<a class="btn primary" href="#painel">Voltar ao painel</a>`}</nav>
  </article>`;
}
function mountLesson(m){
  const id=m.live,def=LESSONS[id];
  S.lastLesson=id;save();
  if(!def.noQuiz)lessonQuiz(id,m.t);
  trackSections(id);
  mountErro(m);
}
function mountErro(m){
  const box=$('#'+m.live+'-erro');if(!box)return;
  const form=$('.lerro-form',box),abrir=$('.lerro-abrir',box);
  const mostra=v=>{form.hidden=!v;abrir.hidden=v;if(v)form.texto.focus()};
  abrir.onclick=()=>mostra(true);$('.lerro-fechar',box).onclick=()=>mostra(false);
  form.onsubmit=e=>{
    e.preventDefault();
    const d={materia:COURSE.nome,aula:`Aula ${rom(m.n)} – ${m.tit}`,parte:form.parte.value,texto:form.texto.value.trim()};
    if(!d.texto)return;
    if(REPORTE.form)window.open(REPORTE.form+(REPORTE.form.includes('?')?'&':'?')+new URLSearchParams(d),'_blank','noopener');
    else if(REPORTE.email)location.href=`mailto:${REPORTE.email}?subject=${encodeURIComponent('Erro: '+d.materia+' · '+d.aula)}&body=${encodeURIComponent(`Parte: ${d.parte}

${d.texto}`)}`;
    else{const t=`${d.materia} · ${d.aula} · ${d.parte}
${d.texto}`;navigator.clipboard&&navigator.clipboard.writeText(t).catch(()=>{});toast('Aviso copiado. O envio ainda não foi configurado.');return}
    form.reset();mostra(false);toast('Obrigado! Seu aviso foi enviado.');
  };
}
function updateLessonBar(id){const p=lessonProgress(id),b=$('#lprog'),t=$('#lpct');if(b)b.style.width=p*100+'%';if(t)t.textContent=pct(p)}
function lessonQuiz(id,topic){
  const root=$('#'+id+'-qz');if(!root)return;
  const qs=BANK.filter(q=>q.t===topic);
  function start(){mountQuiz(root,shuffle(qs),{onAnswer:record,onDone:(sc,n)=>{
    const L=S.lessons[id];L.quiz=Math.max(L.quiz||0,sc);bump(2);save();updateLessonBar(id);
    const ok=sc>=Math.ceil(n*.6),st=streak();
    if(ok){root.innerHTML=`<div class="qres conq"><svg class="cseal" data-a="stamp" data-d="200" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="96" fill="var(--sage)"/><circle cx="100" cy="100" r="70" fill="none" stroke="var(--night)" stroke-width="2"/><path d="M70 102l20 20 42-46" fill="none" stroke="var(--night)" stroke-width="10" stroke-linecap="square"/></svg>
      <div><p class="eyebrow">Aula concluída</p><h2>${sc===n?'Gabaritou.':'Módulo concluído.'}</h2><div class="cstats"><div><b class="num" data-a="count" data-to="${Math.round(sc/n*100)}" data-suf="%" data-d="300">${Math.round(sc/n*100)}%</b><span>de acerto</span></div><div><b class="num">${sc} de ${n}</b><span>questões</span></div><div><b class="num">${st}</b><span>${st===1?'dia seguido':'dias seguidos'}</span></div></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn primary qagain">Refazer o teste</button><a class="btn" href="#painel">Ver no painel</a></div></div></div>`;
      Motion.play(root);$('.qagain',root).onclick=start;toast('Resultado salvo no seu progresso');return}
    root.innerHTML=`<div class="qres swap"><p class="eyebrow">Resultado</p><p class="score num">${sc} de ${n}</p><p>${sc===n?'Gabaritou. O tema já conta como revisado no seu painel.':'Releia as seções em que errou e tente de novo. As questões erradas voltam primeiro nas suas sessões de prática.'}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn primary qagain">Refazer o teste</button><a class="btn" href="#painel" style="background:none;color:inherit;border-color:currentColor">Ver no painel</a></div></div>`;
    $('.qagain',root).onclick=start;toast('Resultado salvo no seu progresso');
  }})}
  start();
}
let cleanups=[];
function trackSections(id){
  if(!('IntersectionObserver' in window))return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const k=e.target.dataset.sec,L=S.lessons[id];if(!L.seen[k]){L.seen[k]=1;bump(1);save();updateLessonBar(id)}io.unobserve(e.target)}),{threshold:.2});
  $$('[data-sec]').forEach(s=>io.observe(s));cleanups.push(()=>io.disconnect());
}

function viewQuestoes(){
  const f=S.filter||'all';
  const opts=[['all','Todos os temas',BANK.length],['weak','Pontos fracos',null]].concat(TOPICS.map(t=>[t.id,t.nome,BANK.filter(q=>q.t===t.id).length]));
  const label=f==='all'?'Todos os temas':f==='weak'?'Pontos fracos: '+[...weakSet()].map(t=>TN[t]).join(', '):TN[f];
  return `<header class="vh"><div><p class="eyebrow">Banco de questões</p><h1>Questões</h1><p class="sub">${BANK.length} questões com correção comentada. Sessões de 5; cada resposta atualiza o seu domínio do tema.</p></div></header>
  <div class="filters" id="filters">${opts.map(([k,l,c])=>`<button data-f="${k}" aria-pressed="${k===f}">${l}${c!=null?`<small class="num">${c}</small>`:''}</button>`).join('')}</div>
  <div class="qz" id="qarea"><div class="qstart"><p class="eyebrow">Próxima sessão</p><h2>${label}</h2><p>Primeiro vêm as questões que você ainda não fez e as que errou da última vez.</p><button class="btn primary" id="qgo">Começar 5 questões</button></div></div>`;
}
function pickQs(f){
  let pool=f==='all'?BANK:f==='weak'?BANK.filter(q=>weakSet().has(q.t)):BANK.filter(q=>q.t===f);
  if(!pool.length)pool=BANK;
  const last={};S.attempts.forEach(a=>last[a.q]=a);const T=today();
  const sc=q=>{const l=last[q.id];if(!l)return Math.random();if(!l.ok)return 1+Math.random();return 2+(T-l.d>7?0:.5)+Math.random()*.5};
  return pool.map(q=>[sc(q),q]).sort((a,b)=>a[0]-b[0]).slice(0,5).map(x=>x[1]);
}
function startPractice(){
  const area=$('#qarea');if(!area)return;
  const qs=pickQs(S.filter||'all'),before={};qs.forEach(q=>before[q.t]=mastery(q.t));
  mountQuiz(area,qs,{onAnswer:record,onDone:(sc,n,res,root)=>{
    const ts=[...new Set(qs.map(q=>q.t))];
    root.innerHTML=`<div class="qres swap"><p class="eyebrow">Sessão concluída</p><p class="score num">${sc} de ${n}</p><p>${sc===n?'Gabaritou. ':''}Seu domínio foi atualizado:</p>
      <ul>${ts.map(t=>{const b=before[t],a=mastery(t),d=b==null?null:a-b;return `<li><span>${TN[t]}</span><span class="num">${b==null?'novo':pct(b)} → <b>${pct(a)}</b>${d!=null&&Math.abs(d)>=.005?` <span class="delta ${d>0?'up':'down'}">${d>0?'▲':'▼'}</span>`:''}</span></li>`}).join('')}</ul>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn primary" id="qagain">Nova sessão</button><a class="btn" href="#desempenho">Ver desempenho</a></div></div>`;
    $('#qagain').onclick=startPractice;
  }});
}
function mountQuestoes(){
  $('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(!b)return;S.filter=b.dataset.f;save();route()});
  $('#qgo').onclick=startPractice;
  if(S.autoStart){S.autoStart=false;startPractice()}
}

function previewIvl(id,g){const c=S.cards[id]||{ivl:0,ease:2.5};if(g===0)return 0;if(g===1)return c.ivl<1?1:Math.round(c.ivl*c.ease);return c.ivl<1?3:Math.round(c.ivl*c.ease*1.3)}
const ivlTxt=d=>d===0?'agora':d===1?'amanhã':`em ${d} dias`;
function rate(id,g){
  const T=today();if(!S.cards[id])S.newIntro={[T]:(S.newIntro[T]||0)+1};
  const c=S.cards[id]||{ivl:0,ease:2.5,due:T,n:0},nv=previewIvl(id,g);
  if(g===0){c.ivl=0;c.ease=Math.max(1.3,c.ease-.2);c.due=T}else{c.ivl=nv;c.due=T+nv;if(g===2)c.ease+=.15}
  c.n=(c.n||0)+1;S.cards[id]=c;bump(1);save();refreshNav();
}
let rv={queue:[],i:0,done:0};
function viewRevisao(){
  rv={queue:dueQueue().map(c=>c.id),i:0,done:0};
  return `<header class="vh"><div><p class="eyebrow">Repetição espaçada</p><h1>Revisão</h1></div></header><div id="rvarea"></div>`;
}
function renderCard(){
  const area=$('#rvarea');if(!area)return;
  if(rv.i>=rv.queue.length){
    const T=today(),next=Object.values(S.cards).filter(c=>c.due>T).map(c=>c.due).sort((a,b)=>a-b)[0];
    area.innerHTML=`<div class="card empty swap"><p class="eyebrow">Revisão em dia</p><h2>${rv.done?`${rv.done} cartões revisados`:'Nada para revisar agora'}</h2><p>${next?`A próxima revisão vence ${ivlTxt(next-T)}. `:''}Enquanto isso, resolver questões é o que mais aumenta o seu domínio do conteúdo.</p><div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><button class="btn primary" data-practice="weak">Praticar pontos fracos</button><a class="btn" href="#painel">Voltar ao painel</a></div></div>`;
    return;
  }
  const id=rv.queue[rv.i],c=CB[id],isNew=!S.cards[id];
  area.innerHTML=`<div class="fcwrap swap"><div class="fcmeta"><span class="num">Cartão ${rv.i+1} de ${rv.queue.length}</span><span style="display:flex;gap:6px">${isNew?'<span class="chip warn">Novo</span>':''}<span class="chip none">${TN[c.t]}</span></span></div>
    <button class="fc" id="fc" aria-pressed="false"><div class="in"><div class="f"><p>${c.f}</p><small>Tente lembrar e toque para ver a resposta</small></div><div class="b"><p>${c.b}</p><small>${c.art}</small></div></div></button>
    <div class="rate" id="rate" hidden><button data-g="0">Não lembrei<small>volta ${ivlTxt(0)}</small></button><button data-g="1">Lembrei<small>volta ${ivlTxt(previewIvl(id,1))}</small></button><button data-g="2">Fácil<small>volta ${ivlTxt(previewIvl(id,2))}</small></button></div>
    <p class="keys">Teclado: <kbd>espaço</kbd> vira o cartão · <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> avaliam</p></div>`;
  const fc=$('#fc'),rt=$('#rate');
  fc.onclick=()=>{fc.setAttribute('aria-pressed','true');rt.hidden=false};
  rt.onclick=e=>{const b=e.target.closest('button');if(!b)return;doRate(+b.dataset.g)};
}
function doRate(g){const id=rv.queue[rv.i];rate(id,g);if(g===0)rv.queue.push(id);else rv.done++;rv.i++;renderCard()}

function viewDesempenho(){
  const T=today(),A=S.attempts,acc=A.length?A.filter(a=>a.ok).length/A.length:0;
  const w1=A.filter(a=>a.d>T-7),w0=A.filter(a=>a.d<=T-7&&a.d>T-14);
  const a1=w1.length?w1.filter(a=>a.ok).length/w1.length:null,a0=w0.length?w0.filter(a=>a.ok).length/w0.length:null;
  const delta=a1!=null&&a0!=null?a1-a0:null,tracked=Object.keys(S.cards).length;
  const weeks=[];for(let w=4;w>=0;w--){const hi=T-w*7,lo=hi-6,x=A.filter(a=>a.d>=lo&&a.d<=hi);weeks.push({lo,hi,n:x.length,acc:x.length?x.filter(a=>a.ok).length/x.length:null})}
  const errs=[],seen=new Set();for(let i=A.length-1;i>=0&&errs.length<5;i--){const a=A[i];if(!a.ok&&!seen.has(a.q)){seen.add(a.q);errs.push(a)}}
  return `<header class="vh"><div><p class="eyebrow">Seu histórico</p><h1>Desempenho</h1><p class="sub">Como o seu acerto evolui e onde estão os erros que se repetem.</p></div></header>
  <div class="kpis4">
    <div class="kpi">${ic('questao','icd')}<small>Questões resolvidas</small><b class="num">${A.length}</b><span>desde o início</span></div>
    <div class="kpi">${ic('alvo','icd')}<small>Acerto geral</small><b class="num">${pct(acc)}</b><span>todas as questões</span></div>
    <div class="kpi">${ic('grafico','icd')}<small>Acerto em 7 dias</small><b class="num">${a1==null?'—':pct(a1)}</b>${delta!=null?`<span class="delta ${delta>=0?'up':'down'}">${delta>=0?'▲':'▼'} ${Math.abs(Math.round(delta*100))} pontos sobre a semana anterior</span>`:'<span>sem comparação</span>'}</div>
    <div class="kpi">${ic('flash','icd')}<small>Flashcards em uso</small><b class="num">${tracked}</b><span>de ${CARDS.length} disponíveis</span></div>
  </div>
  <div class="two">
    <section class="card"><h2>Acerto por semana</h2><p class="hint">Percentual de questões certas em cada semana. A barra dourada é a semana atual.</p>
      <div class="vbars">${[25,50,75,100].map(v=>`<div class="gl" style="bottom:${v/100*196}px"><span>${v}%</span></div>`).join('')}
        ${weeks.map((w,i)=>`<div class="vb">${w.acc!=null?`<b class="num" style="bottom:calc(${w.acc*196}px + 4px)">${pct(w.acc)}</b>`:''}<i class="${i===4?'last':w.acc!=null?'has':''}" style="height:${(w.acc||0)*196}px"></i></div>`).join('')}</div>
      <div class="vlab">${weeks.map((w,i)=>`<span>${i===4?'Esta semana':fmtDay(w.lo)}<small class="num">${w.n} questões</small></span>`).join('')}</div>
    </section>
    <section class="card"><h2>Erros recentes</h2><p class="hint">Questões que você errou na última tentativa.</p>
      ${errs.length?`<ul class="errs">${errs.map(a=>{const q=QB[a.q];return `<li><div><p>${q.q.length>110?q.q.slice(0,108)+'…':q.q}</p><small>${TN[q.t]} · ${q.art} · ${fmtDay(a.d)}</small></div><button class="btn small" data-practice="${q.t}">Refazer</button></li>`}).join('')}</ul>`:'<p class="hint">Nenhum erro registrado.</p>'}
    </section>
  </div>
  <section class="card"><h2>Por tema</h2><p class="hint">Domínio considera o acerto nas últimas 10 tentativas e quantas questões diferentes do tema você já fez.</p>
    <div class="tablewrap"><table><thead><tr><th>Tema</th><th class="r">Tentativas</th><th class="r">Acerto</th><th>Domínio</th><th>Situação</th><th></th></tr></thead><tbody>
    ${TOPICS.map(t=>{const at=attemptsOf(t.id),m=mastery(t.id),s=status(m),ac=at.length?at.filter(a=>a.ok).length/at.length:null;
      return `<tr><td>${rom(t.mod)} – ${t.nome}</td><td class="r num">${at.length}</td><td class="r num">${ac==null?'—':pct(ac)}</td><td><div class="bar ${s[0]}"><i style="width:${(m||0)*100}%"></i></div></td><td>${chip(m)}</td><td class="r"><button class="btn small" data-practice="${t.id}">Praticar</button></td></tr>`}).join('')}
    </tbody></table></div>
  </section>`;
}

function turmaData(){
  const r=rng([...COURSE.id].reduce((h,c)=>h*31+c.charCodeAt(0)|0,7)),n=TOPICS.length,dado=Math.max(2,Math.ceil(n*.75));
  const temas={};TOPICS.forEach((t,i)=>temas[t.id]=i<dado?Math.round((.38+r()*.5)*100)/100:null);
  const fracos=TOPICS.filter(t=>temas[t.id]!=null).sort((a,b)=>temas[a.id]-temas[b.id]);
  const erradas=fracos.slice(0,4).map(t=>{const q=BANK.find(x=>x.t===t.id);const wrong=q.o.find((_,k)=>k!==q.a);return[q.id,Math.round((1-temas[t.id]+r()*.1)*100)/100,wrong]});
  return{alunos:42,ativos:28+Math.floor(r()*8),acerto:Math.round((.58+r()*.12)*100)/100,temas,erradas,dias:Array.from({length:14},()=>8+Math.floor(r()*26)),risco:5+Math.floor(r()*6),pior:fracos[0]};
}
function viewTurma(){
  const T=today(),TURMA=turmaData();
  return `<header class="vh"><div><p class="eyebrow">Visão do professor · turma de exemplo</p><h1>Turma</h1><p class="sub">O que quem ensina vê: onde a turma erra, quem está parado e o que retomar em sala. Dados agregados, sem expor a nota individual de ninguém.</p></div></header>
  <div class="kpis4">
    <div class="kpi"><small>Alunos</small><b class="num">${TURMA.alunos}</b><span>matriculados na plataforma</span></div>
    <div class="kpi"><small>Ativos em 7 dias</small><b class="num">${TURMA.ativos}</b><span>${pct(TURMA.ativos/TURMA.alunos)} da turma</span></div>
    <div class="kpi"><small>Acerto médio</small><b class="num">${pct(TURMA.acerto)}</b><span>nas questões da semana</span></div>
    <div class="kpi alert"><small>Sem estudar há 7+ dias</small><b class="num">${TURMA.risco}</b><span>alunos</span></div>
  </div>
  <div class="insight"><small>Sugestão para a próxima aula</small><p>Retomar "${TURMA.pior.nome}" em sala: é o tema em que a turma mais erra, com ${pct(TURMA.temas[TURMA.pior.id])} de acerto.</p><button class="btn" id="tsend">Enviar revisão do tema à turma</button></div>
  <div class="two">
    <section class="card"><h2>Acerto da turma por tema</h2><p class="hint">A linha tracejada marca 60%, abaixo do qual o tema pede revisão em sala. Temas sem barra ainda não foram dados.</p>
      <div class="hbars">${TOPICS.map(t=>{const v=TURMA.temas[t.id],c=v==null?'':v<.5?'bad':v<.6?'warn':'';return `<div class="hb"><span>${rom(t.mod)} – ${t.nome}</span><div class="track">${v!=null?`<i class="${c}" style="width:${v*100}%"></i>`:''}</div><em class="num">${v==null?'—':pct(v)}</em></div>`}).join('')}</div>
    </section>
    <section class="card"><h2>Questões que a turma mais erra</h2><p class="hint">Com a alternativa errada mais marcada, para saber qual confusão atacar.</p>
      <ul class="wrong">${TURMA.erradas.map(([id,p,alt])=>`<li><b class="num">${pct(p)}</b><div><p>${QB[id].q}</p><small>Mais marcada: "${alt}" · ${QB[id].art}</small></div></li>`).join('')}</ul>
    </section>
  </div>
  <section class="card"><h2>Alunos ativos por dia</h2><p class="hint">Últimos 14 dias.</p>
    <div class="days">${TURMA.dias.map((v,i)=>`<div title="${v} alunos"><i style="height:${v/42*100}%"></i><span class="num">${fmtDay(T-13+i,{day:'2-digit',month:undefined}).slice(0,2)}</span></div>`).join('')}</div>
    <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:18px"><p class="hint" style="margin:0">${TURMA.risco} alunos não estudam há mais de uma semana.</p><button class="btn small" id="tnudge">Enviar lembrete a eles</button></div>
  </section>`;
}
function courseProgress(id){
  const c=COURSES[id],st=MEM[id]||readJSON(CKEY(id));if(!st)return 0;
  return c.mods.reduce((sum,m)=>{const def=LESSONS[m.live],L=st.lessons[m.live]||{seen:{}};if(def.progress&&id===COURSE.id)return sum+Math.min(1,def.progress());
    const secs=def.sections.map(x=>x.id),seen=secs.filter(k=>L.seen&&L.seen[k]).length/secs.length;return sum+(def.noQuiz?seen:seen*.7+(L.quiz!=null?.3:0))},0)/c.mods.length;
}
function viewMaterias(){
  const live=LIVE.map(id=>COURSES[id]),order=['Direito Civil','Direito Penal','Direito Processual','Direito Constitucional','Direito Público','Formação geral'];
  const areas=[];live.forEach(c=>{if(!areas.includes(c.area))areas.push(c.area)});
  const soon=Object.values(COURSES).filter(c=>!isLive(c.id)).sort((x,y)=>order.indexOf(x.area)-order.indexOf(y.area));
  return `<header class="vh banner">${patHTML(48)}<div><p class="eyebrow">JurInterativo</p><h1>Suas matérias</h1></div></header>
  ${areas.map(area=>`<section class="unit"><h2>${area}</h2><div class="courses">${live.filter(c=>c.area===area).map(c=>{const p=courseProgress(c.id),cur=c.id===COURSE.id;
    return `<article class="course-card${cur?' cur':''}" style="--mat:${matCor(c.id)}"><div class="cc-top"><small>${c.area}</small>${cur?'<span class="chip ok">Estudando agora</span>':''}</div>
      <h2>${c.nome}</h2><p>${c.desc}</p>
      <dl class="cc-stats"><div><dt>${ic('aula','icd')}Aulas</dt><dd class="num">${c.mods.length}</dd></div><div><dt>${ic('questao','icd')}Questões</dt><dd class="num">${c.bank.length}</dd></div><div><dt>${ic('flash','icd')}Flashcards</dt><dd class="num">${c.cards.length}</dd></div></dl>
      <div class="bar"><i style="width:${p*100}%"></i></div><small class="num">${pct(p)} da trilha</small>
      <button class="btn ${cur?'':'primary'}" data-course="${c.id}">${cur?'Continuar':'Estudar esta matéria'}</button></article>`}).join('')}</div></section>`).join('')}
  <section class="unit soonu"><h2>${spinSeal()}Em breve</h2><p class="hint">Novas matérias em produção. Elas chegam à plataforma ao longo do semestre.</p><ul class="soonlist">${soon.map((c,i)=>`<li style="--i:${i}">${loader(i*230)}<span>${c.nome}</span><small>${c.area}</small></li>`).join('')}</ul></section>`;
}
function mountMaterias(){const v=$('#view'),h=e=>{const b=e.target.closest('[data-course]');if(!b)return;const id=b.dataset.course;if(id===COURSE.id)location.hash='painel';else{switchCourse(id);toast('Agora estudando '+COURSES[id].nome)}};v.addEventListener('click',h);cleanups.push(()=>v.removeEventListener('click',h))}
function mountTurma(){
  $('#tsend').onclick=()=>toast('No produto, a turma recebe a revisão do tema no painel de cada aluno');
  $('#tnudge').onclick=()=>toast('No produto, esses alunos recebem um lembrete');
}

/* ================= roteamento ================= */
let prevNav='painel',prevL=false;
function route(){
  cleanups.forEach(f=>f());cleanups=[];PEND=[];
  const h=(location.hash||'#painel').slice(1),mm=h.match(/^modulo-(\d+)$/),v=$('#view');
  let html,after=null;
  if(mm){currentNav='trilha';const m=MODS.find(x=>x.n===+mm[1]);if(m){html=lessonView(m);after=()=>mountLesson(m)}else html=viewTrilha()}
  else{
    currentNav=['materias','painel','trilha','revisao','questoes','desempenho'].includes(h)?h:'painel';
    html={materias:viewMaterias,painel:viewPainel,trilha:viewTrilha,revisao:viewRevisao,questoes:viewQuestoes,desempenho:viewDesempenho,turma:viewTurma}[currentNav]();
    after={materias:mountMaterias,painel:()=>animateDials(v),revisao:renderCard,questoes:mountQuestoes,turma:mountTurma}[currentNav]||null;
  }
  v.innerHTML=html;refreshNav();runPending();if(after)after();Motion.play(v);
  /* v2: abas deslizam na ordem da barra; entrar numa aula empurra pela direita; voltar devolve */
  const order=['materias','painel','trilha','revisao','questoes','desempenho'],isL=!!mm;
  let tr=isL?'v2-push':prevL?'v2-back':order.indexOf(currentNav)>=order.indexOf(prevNav)?'v2-r':'v2-l';
  if(isL===prevL&&isL)tr='v2-r';
  v.classList.remove('v2-r','v2-l','v2-push','v2-back');void v.offsetWidth;v.classList.add(tr);
  prevNav=currentNav;prevL=isL;paintCourse();
  window.scrollTo(0,0);
}
document.addEventListener('click',e=>{
  const p=e.target.closest('[data-practice]');
  if(p){S.filter=p.dataset.practice;S.autoStart=true;save();if(location.hash==='#questoes')route();else location.hash='questoes';return}
  const j=e.target.closest('[data-to]');
  if(j){const el=document.getElementById(j.dataset.to);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});return}
  const f=e.target.closest('.flip');
  if(f){f.setAttribute('aria-pressed',f.getAttribute('aria-pressed')==='true'?'false':'true');return}
  const st=e.target.closest('.steps button');
  if(st){st.setAttribute('aria-expanded',st.getAttribute('aria-expanded')==='true'?'false':'true')}
});
document.addEventListener('keydown',e=>{
  if(currentNav!=='revisao'||!$('#fc')||e.target.closest('input,textarea'))return;
  if(e.key===' '){e.preventDefault();$('#fc').click()}
  else if(['1','2','3'].includes(e.key)&&!$('#rate').hidden)doRate(+e.key-1);
});
let armed;
$('#reset')&&$('#reset').addEventListener('click',function(){
  if(!this.classList.contains('armed')){this.classList.add('armed');this.textContent='Confirmar: apagar meu progresso';clearTimeout(armed);armed=setTimeout(()=>{this.classList.remove('armed');this.textContent='Recomeçar demonstração'},4000);return}
  clearTimeout(armed);this.classList.remove('armed');this.textContent='Recomeçar demonstração';
  Object.keys(COURSES).forEach(id=>{try{localStorage.removeItem(CKEY(id))}catch(e){}});try{localStorage.removeItem(GKEY)}catch(e){};MEM={};LAB=null;load();if(location.hash==='#painel'||!location.hash)route();else location.hash='painel';toast('Demonstração recomeçada');
});
function splash(){
  let seen=false;try{seen=!!sessionStorage.getItem('inciso-splash');sessionStorage.setItem('inciso-splash','1')}catch(e){}
  if(seen||Motion.reduce())return;
  const el=document.createElement('div');el.className='splash';
  el.innerHTML=`<div class="row"><span class="mono"><span class="I" data-a="rise" data-d="250">I</span><span class="dash" data-a="draw" style="transform-origin:left center"></span></span><span class="sep" data-a="fade" data-d="300"></span><span class="word" data-a="letters" data-d="1350" data-st="60" aria-label="JurInterativo">${[...'JurInterat'].map(c=>`<span data-l="1">${c}</span>`).join('')}<span class="wm-i"><span data-l="1">ı</span><span class="wm-dot" data-a="stamp" data-d="800"></span></span><span data-l="1">v</span><span data-l="1">o</span></span></div><div class="tag" data-a="fade" data-d="2500" data-dur="700">Direto, incisivo.</div><button type="button">Pular abertura</button>`;
  document.body.appendChild(el);Motion.play(el);
  let done=false;const close=()=>{if(done)return;done=true;el.classList.add('out');setTimeout(()=>el.remove(),520)};
  el.addEventListener('click',close);setTimeout(close,3800);
}
/* altura da barra do topo, para a barra da aula grudar logo abaixo dela */
function topH(){const sd=$('.side');if(sd)document.documentElement.style.setProperty('--toph',(getComputedStyle(sd).position==='sticky'?sd.offsetHeight:0)+'px')}
window.addEventListener('resize',topH);setTimeout(topH,0);
window.addEventListener('hashchange',route);
load();route();splash();
