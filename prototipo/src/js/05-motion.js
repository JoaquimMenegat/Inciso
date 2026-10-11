/* ================= movimento da marca (adaptado de inciso-motion.js do manual) =================
   Elementos com data-a="draw|grow|rise|up|fade|stamp|letters|ring|count" + data-d (atraso em ms).
   O HTML sempre descreve o estado final; com movimento reduzido nada se move. */
const Motion=(function(){
  const E='cubic-bezier(.2,.8,.2,1)';
  const reduce=()=>{try{return matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){return false}};
  const K={
    draw:[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],
    grow:[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],
    rise:[{transform:'translateY(100%)',clipPath:'inset(0 0 100% 0)'},{transform:'translateY(0)',clipPath:'inset(0 0 0% 0)'}],
    up:[{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],
    fade:[{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}]
  };
  const DUR={draw:600,grow:900,rise:640,up:480,fade:600};
  function stampK(r){const R='rotate('+r+'deg)';return[
    {opacity:0,transform:'scale(1.9) '+R,easing:'cubic-bezier(.55,0,.9,.45)'},
    {opacity:1,transform:'scale(.92) '+R,offset:.5,easing:E},
    {transform:'scale(1.05) '+R+' translate(1.5px,-1px)',offset:.64},
    {transform:'scale(.98) '+R+' translate(-1.5px,1px)',offset:.76},
    {transform:'scale(1.01) '+R+' translate(.5px,0)',offset:.88},
    {opacity:1,transform:'scale(1) '+R}]}
  function anim(el,t,d,dur){
    if(!el||reduce()||!el.animate)return;
    if(t==='stamp')return el.animate(stampK(el.dataset.r?+el.dataset.r:-8),{duration:dur||620,delay:d||0,fill:'backwards'});
    if(K[t])return el.animate(K[t],{duration:dur||DUR[t],delay:d||0,easing:E,fill:'backwards'});
  }
  function play(root){
    if(!root||reduce())return;
    root.querySelectorAll('[data-a]').forEach(el=>{
      el.getAnimations&&el.getAnimations().forEach(a=>a.cancel());
      const t=el.dataset.a,d=+el.dataset.d||0,dur=+el.dataset.dur||0;
      if(t==='letters'){el.querySelectorAll('[data-l]').forEach((c,i)=>c.animate([{opacity:0,transform:'translateY(.2em)'},{opacity:1,transform:'translateY(0)'}],{duration:dur||360,delay:d+i*(+el.dataset.st||55),easing:E,fill:'backwards'}));return}
      if(t==='ring'){el.animate([{strokeDashoffset:el.dataset.from+'px'},{strokeDashoffset:el.dataset.to+'px'}],{duration:dur||1400,delay:d,easing:E,fill:'backwards'});return}
      if(t==='count'){const to=+el.dataset.to,suf=el.dataset.suf||'',D=dur||1400,t0=performance.now()+d,tok=(el._tok=(el._tok||0)+1);
        el.textContent='0'+suf;const f=now=>{if(tok!==el._tok)return;const p=Math.min(1,Math.max(0,(now-t0)/D));el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(f);else el.textContent=to+suf};
        requestAnimationFrame(f);setTimeout(()=>{if(tok===el._tok)el.textContent=to+suf},d+D+200);return}
      anim(el,t,d,dur);
    });
  }
  /* entrada discreta dos blocos de uma tela: no máximo 6 escalonados, o resto junto */
  function enter(els){if(reduce())return;[...els].forEach((el,i)=>anim(el,'up',Math.min(i,6)*70))}
  return {play,anim,enter,reduce};
})();

/* algarismos romanos */
function rom(n){let s='';for(const [v,r] of [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']])while(n>=v){s+=r;n-=v}return s}
const inc=n=>`<span class="inc">${rom(n)} <i>–</i></span>`;
/* padrão de incisões: traços no vermelho-selo, como cortes de texto, que se adensam à direita */
const patHTML=(n)=>`<div class="pat" aria-hidden="true">${Array.from({length:(n||72)*2},(_,i)=>{const w=[14,26,40,58,22,34][(i*7+(i>>3))%6],o=(i*5)%9===0;return `<span${o?' class="o"':''} style="width:${w}px"></span>`}).join('')}</div>`;
const WORDMARK='<span class="wm" aria-label="Inciso"><span class="wm-i">ı<span class="wm-dot"></span></span>nciso</span>';
