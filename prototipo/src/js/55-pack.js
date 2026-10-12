/* ================= adaptador dos pacotes do Claude.ai =================
   Converte um COURSE do pacote (mods[] com blocks[] e quiz[]) em matéria do protótipo:
   cada módulo vira uma aula, cada bloco com título vira uma seção, o quiz vai para o banco
   de questões e os cartões que viram geram os flashcards da revisão.
   Os blocos são desenhados pelo motor original (PKE, 54-pk-engine.js) dentro de shadow DOM,
   então mantêm o CSS e as animações do pacote sem colidir com o CSS do protótipo. */
const strip=h=>String(h||'').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
const clip=(s,n)=>{s=strip(s);if(s.length<=n)return s;const c=s.slice(0,n);return c.slice(0,c.lastIndexOf(' '))+'…'};
let PK_SHEET=null;
function pkSheet(){
  if(PK_SHEET===null){try{PK_SHEET=new CSSStyleSheet();PK_SHEET.replaceSync(PK_CSS)}catch(e){PK_SHEET=false}}
  return PK_SHEET;
}
/* um bloco do pacote: host vazio agora, conteúdo montado depois que a seção entra no DOM */
function pkBlock(b){
  const id=uid('pk');
  later(()=>{
    const host=$('#'+id);if(!host||!PKE.R[b.t])return;
    const root=host.attachShadow({mode:'open'}),sh=pkSheet();
    if(sh)root.adoptedStyleSheets=[sh];
    root.innerHTML=(sh?'':`<style>${PK_CSS}</style>`)+`<div class="reveal">${PKE.R[b.t](b)}</div>`;
    const el=root.querySelector('.reveal');
    if(PKE.B[b.t])PKE.B[b.t](el,b);
    /* revela ao rolar: dispara os traços, a linha do tempo, os números que contam e os carimbos */
    const show=()=>{if(el.classList.contains('vis'))return;el.classList.add('vis');const k=el.querySelector('.keys');if(k&&!k.dataset.done){k.dataset.done=1;PKE.B.keys(k)}};
    if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){show();io.disconnect()}}),{threshold:.12});io.observe(host);cleanups.push(()=>io.disconnect())}
    else show();
  });
  return `<div class="pkh" id="${id}"></div>`;
}
/* "Jurisdição, ação e processo" -> ["Jurisdição, ação", "e processo"] */
function pkTitle(t){
  t=strip(t);const w=t.split(' ');if(w.length<2)return[t,''];
  let cut=-1;w.forEach((x,i)=>{if(i>0&&/^(e|da|do|de|na|no|nos|nas|em|ou)$/.test(x)&&Math.abs(i-w.length/2)<Math.abs(cut-w.length/2))cut=i});
  if(cut<1)cut=Math.ceil(w.length/2);
  return[w.slice(0,cut).join(' '),w.slice(cut).join(' ')];
}
function defPackCourse(C,opt){
  opt=opt||{};const cid=C.id,L='ABCDEFGHIJ';
  const groups=[];C.mods.forEach(m=>{if(!groups.includes(m.group))groups.push(m.group)});
  const topics=[],mods=[],bank=[],cards=[];
  C.mods.forEach((m,i)=>{
    const tid=cid+'-'+m.id,lid='pk-'+tid;
    topics.push({id:tid,nome:strip(m.title),mod:i+1});
    mods.push({n:i+1,u:L[groups.indexOf(m.group)],tit:strip(m.title),t:tid,live:lid});
    /* seções: um bloco com título abre seção; blocos sem título entram na seção anterior */
    const secs=[];
    m.blocks.forEach((b,j)=>{
      if(b.h||!secs.length)secs.push({id:'s'+j,nav:clip(b.h||'Para começar',30),h:b.h||'Para começar',lead:b.hint||'',blocks:[]});
      secs[secs.length-1].blocks.push(b);
      if(b.t==='flips')b.items.forEach(([f,bk],k)=>{const art=(String(bk).match(/class="art-ref">([^<]+)</)||[])[1]||'';cards.push({id:`${tid}-c${j}-${k}`,t:tid,f:strip(f),b:strip(bk),art:art})});
    });
    defLesson(lid,{
      hero:()=>heroSeal(C.seal&&C.seal.ring||strip(C.title).toUpperCase()+' • '),
      title:pkTitle(m.title),
      lead:m.intro||'',
      sections:secs.map(s=>({id:s.id,nav:s.nav,h:s.h,lead:s.lead,html:()=>s.blocks.map(pkBlock).join('')}))
    });
    (m.quiz||[]).forEach((q,k)=>bank.push({id:`${tid}-q${k}`,t:tid,q:q[0],o:q[1],a:q[2],e:q[3]||'',art:''}));
  });
  const course={nome:C.title,area:opt.area||'Direito',desc:strip(C.intro),topics,mods,
    units:groups.map((g,k)=>[L[k],`Parte ${rom(k+1)} · ${g}`]),bank,cards,ver:'pk1'};
  if(opt.seed&&mods.length>2){
    const order=topics.slice(0,8).map(t=>t.id),p={};order.forEach((t,k)=>p[t]=[.9,.72,.55,.8,.48,.64,.5,.6][k]);
    const l2=LESSONS[mods[1].live];
    course.seed={order,p,full:[mods[0].live],partial:{[mods[1].live]:l2.sections.slice(0,2).map(s=>s.id)},last:mods[1].live};
  }
  defCourse(cid,course);
}
