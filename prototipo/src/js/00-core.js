/* ================= utilidades ================= */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const today=()=>{const d=new Date();return Math.floor((d.getTime()-d.getTimezoneOffset()*60000)/86400000)};
const fmtDay=(d,o)=>new Date(d*86400000).toLocaleDateString('pt-BR',Object.assign({day:'2-digit',month:'short'},o||{},{timeZone:'UTC'}));
const pct=x=>Math.round(x*100)+'%';
const BRL=new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});
const money=x=>BRL.format(Math.round(x));
const fmtP=x=>(x*100).toFixed(1).replace('.0','').replace('.',',')+'%';
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function swapAnim(el){if(!el)return;el.classList.remove('swap');void el.offsetWidth;el.classList.add('swap')}

/* Montagem tardia: widgets devolvem HTML e registram aqui o código que roda depois que o HTML entra na página */
let PEND=[],UID=0;
const uid=p=>(p||'w')+(++UID);
function later(f){PEND.push(f)}
function runPending(){const p=PEND;PEND=[];p.forEach(f=>f())}

/* Registro das aulas */
const LESSONS={};
function defLesson(id,def){def.id=id;LESSONS[id]=def}

let CUR_N=1;
/* Selo giratório usado no topo das aulas */
function heroSeal(ring){
  const id=uid('ring'),t=ring.repeat(Math.max(1,Math.round(512/(ring.length*10.5))));
  return `<div class="lseal" data-a="stamp" data-d="650" aria-hidden="true"><svg viewBox="0 0 200 200" style="overflow:visible"><defs><path id="${id}" d="M100,18 a82,82 0 1,1 0,164 a82,82 0 1,1 0,-164"/></defs>
    <circle cx="100" cy="100" r="97" fill="var(--seal)"/><circle cx="100" cy="100" r="66" fill="none" stroke="#EEF1F5" stroke-width="1.5"/>
    <g class="spin"><text font-family="Archivo,sans-serif" font-size="14" font-weight="600" fill="#EEF1F5"><textPath href="#${id}" textLength="${(2*Math.PI*82-3).toFixed(1)}" lengthAdjust="spacing">${t}</textPath></text></g>
    <text x="100" y="104" text-anchor="middle" dominant-baseline="middle" font-family="Libre Caslon Text,serif" font-size="${rom(CUR_N).length<=2?52:rom(CUR_N).length<=3?44:36}" fill="#EEF1F5">${rom(CUR_N)} –</text></svg></div>`;
}
