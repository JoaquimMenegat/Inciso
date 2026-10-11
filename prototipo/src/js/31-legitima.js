/* ================= Sucessão legítima ================= */

/* ---------- Aula 7 · Sucessão legítima e ordem de vocação ---------- */
function monteWaterfall(){
  const id=uid('mw');
  later(()=>{
    const root=$('#'+id),ins=$$('input',root);
    function render(){
      const M=+ins[0].value;let rem=M;const ded=[];
      [['Meação do cônjuge','brass'],['Dívidas e despesas','seal'],['Legados','muted']].forEach(([l,c],k)=>{const v=Math.min(+ins[k+1].value,rem);ded.push({l,c,v,left:(rem-v)/M});rem-=v});
      $$('output',root).forEach((o,k)=>o.textContent=money(+ins[k].value));
      $('.mwrows',root).innerHTML=`<div class="mwr"><span>Monte-mor</span><div class="track"><i style="left:0;width:100%;background:var(--ink)"></i></div><b class="num">${money(M)}</b></div>`+
        ded.map(d=>`<div class="mwr"><span>− ${d.l}</span><div class="track"><i style="left:${d.left*100}%;width:${d.v/M*100}%;background:var(--${d.c})"></i></div><b class="num">${money(d.v)}</b></div>`).join('')+
        `<div class="mwr total"><span>= Monte-partível</span><div class="track"><i style="left:0;width:${rem/M*100}%;background:var(--sage)"></i></div><b class="num">${money(rem)}</b></div>`;
      $('.mwmsg',root).innerHTML=`Os herdeiros dividem <b>${money(rem)}</b>, não ${money(M)}. ${ded[0].v?'A meação sai primeiro porque nunca foi herança: já era do cônjuge.':''}`;
    }
    ins.forEach(i=>i.addEventListener('input',render));render();
  });
  const rg=(l,v,max)=>`<div><label class="lab">${l}: <output class="num"></output></label><input type="range" min="0" max="${max}" step="25000" value="${v}"></div>`;
  return `<div class="card mw" id="${id}"><div class="mwin">${rg('Monte-mor',1000000,2000000)}${rg('Meação',300000,1000000)}${rg('Dívidas e despesas',100000,1000000)}${rg('Legados',50000,1000000)}</div><div class="mwrows"></div><p class="mwmsg"></p></div>`;
}
function ladder(){
  const id=uid('ld');
  const C=[['desc','Descendentes','I','filhos, netos, bisnetos'],['asc','Ascendentes','II','pais, avós, bisavós'],['conj','Cônjuge','III','ou companheiro'],['col','Colaterais','IV','irmãos, sobrinhos, tios, primos']];
  later(()=>{
    const root=$('#'+id),s={desc:true,asc:true,conj:true,col:true};
    function render(){
      $$('.ldt button',root).forEach(b=>b.setAttribute('aria-pressed',s[b.dataset.k]));
      const called=C.find(c=>s[c[0]]);
      $$('.rung',root).forEach(r=>{const k=r.dataset.k;const isC=called&&called[0]===k;r.className='rung'+(isC?' called':'')+(!s[k]?' absent':called&&!isC&&C.findIndex(c=>c[0]===k)>C.findIndex(c=>c[0]===called[0])?' below':'');
        const tag=$('.rtag',r);tag.textContent=isC?'Chamados':!s[k]?'Não há':called&&C.findIndex(c=>c[0]===k)>C.findIndex(c=>c[0]===called[0])?'Excluídos':'';
        const cj=$('.rconj',r);cj.hidden=!(isC&&s.conj&&(k==='desc'||k==='asc'));cj.textContent=k==='desc'?'+ cônjuge, conforme o regime (aula 9)':'+ cônjuge, em qualquer regime (aula 10)'});
      const m=$('.ldmsg',root);m.innerHTML=!called?'<b>Ninguém foi chamado.</b> A herança fica jacente e, depois, vacante, indo ao Município (aula 13).':called[0]==='desc'?'<b>Descendentes primeiro.</b> Os de grau mais próximo excluem os mais remotos (art. 1.833).':called[0]==='asc'?'<b>Sem descendentes, sobem os ascendentes.</b> Não há representação na linha ascendente (art. 1.852).':called[0]==='conj'?'<b>O cônjuge herda tudo</b>, qualquer que seja o regime (art. 1.838).':'<b>Colaterais até o 4º grau</b>, os mais próximos excluindo os mais remotos (arts. 1.839 e 1.840).';swapAnim(m)}
    $('.ldt',root).addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;s[b.dataset.k]=!s[b.dataset.k];render()});render();
  });
  return `<div class="card ld" id="${id}"><span class="lab">Quem sobreviveu ao falecido? Toque para ligar ou desligar.</span><div class="ldt">${C.map(c=>`<button data-k="${c[0]}" aria-pressed="true">${c[1]}</button>`).join('')}</div>
    <ol class="ladder">${C.map(c=>`<li class="rung" data-k="${c[0]}"><span class="rn">${c[2]}</span><div><b>${c[1]}</b><small>${c[3]}</small><em class="rconj" hidden></em></div><span class="rtag"></span></li>`).join('')}</ol><p class="ldmsg" aria-live="polite"></p></div>`;
}
defLesson('vocacao',{
  hero:()=>heroSeal('DESCENDENTES • ASCENDENTES • CÔNJUGE • COLATERAIS • ','1.829','ordem de vocação'),
  title:['Sucessão','legítima'],
  lead:'Quando a lei decide quem herda, em que ordem chama cada classe e sobre qual valor se calcula o quinhão.',
  sections:[
    {id:'residual',nav:'Quando a lei decide',h:'A lei como rede de segurança',lead:'A sucessão legítima não serve só para quem morre sem testamento. Ela preenche todo vazio deixado pela vontade do testador.',html:()=>W.flips([
      ['Sem testamento','Morrendo alguém <em>ab intestato</em>, a herança vai aos herdeiros legítimos (art. 1.788).'],
      ['Testamento parcial','Deixou só um terreno à igreja? <em>O resto</em> segue a ordem legal.'],
      ['Disposição caduca','O beneficiário <em>morreu antes</em> e não havia substituto: o bem volta à sucessão legítima.'],
      ['Testamento nulo','Vício de forma ou <em>beneficiário indeterminável</em> (art. 1.900, II): aplica-se a lei.']])},
    {id:'monte',nav:'Monte-mor',h:'Do monte-mor ao monte-partível',lead:'Dividir o valor bruto pelo número de herdeiros é o erro de cálculo mais comum. Ajuste os valores.',html:monteWaterfall},
    {id:'escada',nav:'Ordem de vocação',h:'A escada do art. 1.829',lead:'Cada classe só é chamada na falta da anterior. Desligue quem não sobreviveu.',html:ladder},
    {id:'criterios',nav:'Critérios',h:'Os critérios de convocação',lead:'Para Francisco Cahali, a sucessão legítima responde a duas perguntas: quem é chamado e quanto cabe a cada um.',html:()=>W.flips([
      ['Convocação','<em>Quem</em> é chamado, conforme o vínculo com o falecido.'],
      ['Divisão','<em>Quanto</em> cabe a cada convocado sobre o monte-partível.'],
      ['Proximidade','Na mesma classe, o grau <em>mais próximo</em> exclui o mais remoto (art. 1.833).'],
      ['Legitimação','Só herda quem estava <em>nascido ou concebido</em> na abertura (art. 1.798).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['1.788','Sem testamento','Morrendo sem testamento, a herança vai aos herdeiros legítimos; o mesmo quanto aos bens não compreendidos no testamento, ou se ele caducar ou for nulo.'],
      ['1.829','Ordem','Descendentes (com o cônjuge, salvo os regimes excetuados), ascendentes (com o cônjuge), cônjuge sobrevivente e colaterais.'],
      ['1.833','Grau','Entre os descendentes, os mais próximos excluem os mais remotos, salvo o direito de representação.'],
      ['1.839','Colaterais','Na falta de cônjuge, são chamados os colaterais até o quarto grau.'],
      ['1.844','Poder público','Sem cônjuge, companheiro ou parente sucessível, a herança vai ao Município, ao DF ou à União.']])}
  ]
});

/* ---------- Aula 8 · Modos de suceder e de partilhar ---------- */
function reprTempo(){
  const id=uid('rt');
  later(()=>{
    const root=$('#'+id),r=$('input',root);
    function render(){const v=+r.value;$('.rtmark',root).style.left=(v+12)/24*100+'%';$('.rtmark span',root).textContent=v===0?'mesmo acidente':v<0?`${-v} ${v===-1?'mês':'meses'} antes`:`${v} ${v===1?'mês':'meses'} depois`;
      const o=$('.wzout',root);
      const x=v<0?{tone:'warn',t:'Representação',d:'Carlos morreu antes do pai e nunca chegou a herdar. Lia, filha dele, entra no lugar do pai e recebe exatamente o que ele receberia (arts. 1.851 e 1.854).'}:
        v===0?{tone:'warn',t:'Comoriência, e então representação',d:'Não se sabe quem morreu antes: presume-se morte simultânea (art. 8º). Carlos não herda do pai, e Lia entra por representação.'}:
        {tone:'ok',t:'Transmissão',d:'Carlos sobreviveu ao pai e herdou pela saisine. O direito dele, inclusive o de aceitar, passa aos herdeiros de Carlos: Lia e também a viúva dele, conforme o regime (art. 1.809).'};
      o.className='wzout '+x.tone;o.innerHTML=`<b>${x.t}</b><p>${x.d}</p>`}
    r.addEventListener('input',render);render();
  });
  return `<div class="card rt" id="${id}"><div class="rttrack"><i class="rtpai"><span>Morte do avô<br>(abertura)</span></i><i class="rtmark"><span></span></i></div>
    <label class="lab" for="${id}-r">Quando Carlos, o filho, morreu?</label><input id="${id}-r" type="range" min="-12" max="12" value="-6">
    <div class="rtlegend"><span>antes do avô</span><span>depois do avô</span></div><div class="wzout" aria-live="polite"></div></div>`;
}
defLesson('modos',{
  hero:()=>heroSeal('POR CABEÇA • POR ESTIRPE • POR LINHA • ','Estirpe','arts. 1.835 e 1.855'),
  title:['Modos de suceder','e de partilhar'],
  lead:'Como cada herdeiro entra na herança (direito próprio, representação ou transmissão) e como ela se divide entre eles.',
  sections:[
    {id:'tempo',nav:'Representação ou transmissão',h:'Antes ou depois?',lead:'O que separa representação de transmissão é o momento em que o herdeiro morreu. Mova a data da morte de Carlos.',html:reprTempo},
    {id:'estirpe',nav:'Cabeça e estirpe',h:'Conte ramos, não pessoas',lead:'Bruno morreu antes do pai e deixou Pedro e Paula. Mude a situação de cada filho e veja a divisão por estirpe.',html:()=>W.tree({filhos:[{n:'Ana',st:'vivo',comum:true,netos:[]},{n:'Bruno',st:'premorto',comum:true,netos:['Pedro','Paula']},{n:'Carla',st:'vivo',comum:true,netos:['Lia']}],total:120000,statuses:['vivo','premorto','renunciou']})},
    {id:'tres',nav:'Três modos',h:'Os três modos de partilhar',lead:'Cada modo protege uma igualdade diferente.',html:()=>W.flips([
      ['Por cabeça','Cada <em>pessoa</em> recebe uma parte igual. Herdeiros do mesmo grau, sem representação (art. 1.835).'],
      ['Por estirpe','Cada <em>ramo</em> recebe a parte do herdeiro que falta, dividida dentro do ramo (art. 1.855).'],
      ['Por linha','Primeiro <em>metade paterna, metade materna</em>; depois por cabeça (art. 1.836, §2º).'],
      ['O cônjuge','Quando concorre com estirpes, conta como <em>uma cabeça própria</em>: não representa ninguém.']])},
    {id:'limites',nav:'Limites',h:'Onde há representação',lead:'A representação tem limites estreitos. Classifique.',html:()=>W.classify({buckets:['Há representação','Não há'],items:[
      ['Neto cujo pai morreu antes do avô.',0,'Linha reta descendente (art. 1.852).'],
      ['Avô cujo filho (pai do falecido) já morreu.',1,'Nunca na linha ascendente (art. 1.852).'],
      ['Sobrinho cujo pai, irmão do falecido, morreu antes.',0,'A única hipótese colateral: filhos de irmãos (art. 1.853).'],
      ['Sobrinho-neto cujo pai, sobrinho do falecido, morreu antes.',1,'A representação colateral não passa dos filhos de irmãos.'],
      ['Filho do herdeiro que renunciou.',1,'Ninguém sucede representando renunciante (art. 1.811).'],
      ['Filho do herdeiro declarado indigno.',0,'Sucede como se o indigno fosse morto (art. 1.816).'],
      ['Filho de um herdeiro testamentário que morreu antes do testador.',1,'Na sucessão testamentária, a disposição caduca, salvo substituição prevista no testamento.']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['1.809','Transmissão','Morrendo o herdeiro antes de declarar se aceita, o poder de aceitar passa aos seus herdeiros.'],
      ['1.835','Cabeça ou estirpe','Os filhos sucedem por cabeça; os outros descendentes, por cabeça ou por estirpe, conforme estejam ou não no mesmo grau.'],
      ['1.851','Representação','A lei chama certos parentes do falecido a suceder em todos os direitos em que ele sucederia, se vivo fosse.'],
      ['1.852','Só descendente','A representação dá-se na linha reta descendente, mas nunca na ascendente.'],
      ['1.853','Colateral','Na linha transversal, só em favor dos filhos de irmãos do falecido, quando com irmãos deste concorrerem.'],
      ['1.854','Limite','Os representantes só podem herdar o que herdaria o representado, se vivo fosse.'],
      ['1.855','Divisão interna','O quinhão do representado partir-se-á por igual entre os representantes.'],
      ['1.856','Renunciante','O renunciante à herança de uma pessoa pode representá-la na sucessão de outra.']])}
  ]
});

/* ---------- Aula 9 · Cônjuge e descendentes ---------- */
function conjugeCalc(){
  const id=uid('cj');
  later(()=>{
    const root=$('#'+id),st={r:'cp',aq:800000,pt:300000,fc:2,fo:0};
    const P=[{r:'cp',aq:800000,pt:300000,fc:2,fo:0},{r:'cp',aq:600000,pt:0,fc:2,fo:0},{r:'sc',aq:0,pt:1000000,fc:4,fo:0},{r:'sc',aq:0,pt:1000000,fc:3,fo:1},{r:'cu',aq:600000,pt:0,fc:2,fo:0}];
    const aqI=$('.cj-aq',root),ptI=$('.cj-pt',root);
    function sync(){aqI.value=st.aq;ptI.value=st.pt;$('.cj-fc',root).textContent=st.fc;$('.cj-fo',root).textContent=st.fo;$$('.cj-reg button',root).forEach(b=>b.setAttribute('aria-pressed',b.dataset.r===st.r))}
    function calc(){
      const o=$('.cout',root),n=st.fc+st.fo;
      if(n===0){o.innerHTML='<p class="eyebrow">Sem descendentes</p><p>Sem filhos, o cônjuge concorre com os ascendentes (art. 1.837, aula 10) ou herda tudo (art. 1.838, aula 11).</p>';return}
      const total=st.aq+st.pt;if(total<=0){o.innerHTML='<p class="eyebrow">Monte-mor vazio</p><p>Informe ao menos um valor de bens.</p>';return}
      const F=[];for(let i=0;i<st.fc;i++)F.push({n:'c'+i,st:'vivo',comum:true,netos:[]});for(let i=0;i<st.fo;i++)F.push({n:'o'+i,st:'vivo',comum:false,netos:[]});
      const x=partilhaDesc(F,{regime:st.r,aq:st.aq,pt:st.pt},0),per=x.rows[0].v;
      const W_=v=>(v/total*100)+'%';
      let segs=`<i class="seg-meacao" style="width:${W_(x.meacao)}" title="Meação"></i><i class="seg-conj" style="width:${W_(x.conj)}" title="Herança do cônjuge"></i>`;
      for(let i=0;i<st.fc;i++)segs+=`<i class="seg-fc" style="width:${W_(per)};opacity:${1-i%2*.18}" title="Filho do casal"></i>`;
      for(let i=0;i<st.fo;i++)segs+=`<i class="seg-fo" style="width:${W_(per)}" title="Filho só do falecido"></i>`;
      o.innerHTML=`<div><p class="eyebrow">Monte-mor</p><p style="font-family:var(--serif);font-size:1.8rem" class="num">${money(total)}</p></div>
        <div class="stack" role="img" aria-label="Divisão do patrimônio">${segs}</div>
        <ul class="who"><li><i class="seg-meacao"></i><span>Meação do cônjuge <small>(não é herança)</small></span><b>${money(x.meacao)}</b></li>
          <li><i class="seg-conj"></i><span>Herança do cônjuge</span><b>${money(x.conj)}</b></li>
          ${st.fc?`<li><i class="seg-fc"></i><span>Cada filho do casal <small>× ${st.fc}</small></span><b>${money(per)}</b></li>`:''}
          ${st.fo?`<li><i class="seg-fo"></i><span>Cada filho só do falecido <small>× ${st.fo}</small></span><b>${money(per)}</b></li>`:''}
          <li class="tot"><i></i><span><b>Total do cônjuge</b></span><b>${money(x.meacao+x.conj)}</b></li></ul>
        <ol class="rule">${x.why.map(w=>`<li>${w}</li>`).join('')}</ol><p style="font-size:.8rem;color:var(--muted)">Simplificação didática: sem dívidas, despesas, legados ou testamento.</p>`;
    }
    sync();calc();
    root.addEventListener('click',e=>{const b=e.target.closest('.cj-reg button');if(b){st.r=b.dataset.r;sync();calc()}
      const p=e.target.closest('[data-p]');if(p){Object.assign(st,P[+p.dataset.p]);sync();calc()}
      const s=e.target.closest('[data-s]');if(s){const k=s.dataset.s;st[k]=Math.max(0,Math.min(8,st[k]+(+s.dataset.d)));sync();calc()}});
    aqI.addEventListener('input',()=>{st.aq=Math.max(0,+aqI.value||0);calc()});ptI.addEventListener('input',()=>{st.pt=Math.max(0,+ptI.value||0);calc()});
  });
  return `<div id="${id}"><div class="presets"><button class="btn small" data-p="0">Caso da aula: comunhão parcial</button><button class="btn small" data-p="1">Sem bens particulares</button><button class="btn small" data-p="2">Quatro filhos em comum</button><button class="btn small" data-p="3">Filiação híbrida</button><button class="btn small" data-p="4">Comunhão universal</button></div>
    <div class="calc"><div class="card cin">
      <div><span class="lab">Regime de bens</span><div class="seg cj-reg">${REGS.map(r=>`<button data-r="${r[0]}">${r[1]}</button>`).join('')}</div></div>
      <div><label class="lab" for="${id}-aq">Bens adquiridos onerosamente no casamento</label><small>compras feitas durante a união</small><div class="money"><span>R$</span><input id="${id}-aq" class="cj-aq" type="number" min="0" step="50000" inputmode="numeric"></div></div>
      <div><label class="lab" for="${id}-pt">Bens particulares do falecido</label><small>anteriores ao casamento, herdados ou recebidos em doação</small><div class="money"><span>R$</span><input id="${id}-pt" class="cj-pt" type="number" min="0" step="50000" inputmode="numeric"></div></div>
      <div class="steppers"><div><span class="lab">Filhos do casal</span><div class="stp"><button data-s="fc" data-d="-1" aria-label="Menos um filho do casal">−</button><output class="num cj-fc">2</output><button data-s="fc" data-d="1" aria-label="Mais um filho do casal">+</button></div></div>
        <div><span class="lab">Filhos só do falecido</span><div class="stp"><button data-s="fo" data-d="-1" aria-label="Menos um filho só do falecido">−</button><output class="num cj-fo">0</output><button data-s="fo" data-d="1" aria-label="Mais um filho só do falecido">+</button></div></div></div>
    </div><div class="card cout" aria-live="polite"></div></div></div>`;
}
function reservaQuarto(){
  const id=uid('rq');
  later(()=>{
    const root=$('#'+id),nI=$('input[type=range]',root),hI=$('input[type=checkbox]',root);
    function res(){const n=+nI.value,h=hI.checked;$('.rqn',root).textContent=n;
      const reserva=!h&&n>=4,c=reserva?.25:1/(n+1),f=reserva?.75/n:1/(n+1);
      $('.rq-c',root).style.width=c*100+'%';$('.rq-f',root).style.width=f*100+'%';$('.rq-cv',root).textContent=fmtP(c);$('.rq-fv',root).textContent=fmtP(f);
      $('.rmsg',root).textContent=h?(n>=4?`Filiação híbrida: com um filho que não é do cônjuge, a reserva cai. Todos recebem ${fmtP(1/(n+1))}.`:`Divisão por cabeça. Com ${n} ${n===1?'filho':'filhos'}, a reserva nem entraria em jogo.`):n<=2?`Com ${n} ${n===1?'filho':'filhos'}, a divisão por cabeça já dá ao cônjuge mais de 1/4.`:n===3?'Com 3 filhos, a divisão por cabeça dá exatamente 1/4. A reserva não muda nada.':`Com ${n} filhos comuns, a divisão por cabeça daria ${fmtP(1/(n+1))}. A reserva eleva o cônjuge a 25%, e cada filho cai para ${fmtP(.75/n)}.`}
    nI.addEventListener('input',res);hI.addEventListener('change',res);res();
  });
  return `<div class="card reserva" id="${id}"><div><label for="${id}-n" class="lab">Número de filhos: <output class="rqn num">4</output></label><input type="range" id="${id}-n" min="1" max="8" value="4">
    <label class="chk"><input type="checkbox"> Um dos filhos é de outro relacionamento</label></div>
    <div><div class="rbars"><div class="rb"><span>Cônjuge</span><div class="track"><i class="rq-c" style="background:var(--brass)"></i><span class="quarter" title="1/4"></span></div><b class="rq-cv"></b></div>
      <div class="rb"><span>Cada filho</span><div class="track"><i class="rq-f" style="background:var(--sage)"></i><span class="quarter"></span></div><b class="rq-fv"></b></div></div><p class="rmsg" aria-live="polite"></p></div></div>`;
}
defLesson('conjuge',{
  hero:()=>heroSeal('ART. 1.832 • RESERVA DE UM QUARTO • '),
  title:['Cônjuge e','descendentes'],
  lead:'Quando o cônjuge herda junto com os filhos, quando fica só com a meação e quanto cabe a cada um. Monte casos e veja a partilha se refazer.',
  sections:[
    {id:'triagem',nav:'Por onde começar',h:'As quatro perguntas, nesta ordem',lead:'Quando um inventário chega, estas perguntas resolvem a convocação em quase todo caso da disciplina. Toque em cada uma.',html:()=>`<ol class="steps">
      <li><button aria-expanded="false"><strong>Era casado ou vivia em união estável?</strong><span>O companheiro tem os mesmos direitos sucessórios do cônjuge: o STF declarou inconstitucional o art. 1.790 (RE 878.694, Tema 809).</span></button></li>
      <li><button aria-expanded="false"><strong>Qual o regime de bens?</strong><span>Primeiro separa-se a meação, que não é herança. Com descendentes, o regime decide também se o cônjuge herda.</span></button></li>
      <li><button aria-expanded="false"><strong>Deixou descendentes? Se não, ascendentes?</strong><span>Descendentes: art. 1.829, I, desta aula. Só ascendentes: inciso II, art. 1.837, em que o cônjuge herda em qualquer regime.</span></button></li>
      <li><button aria-expanded="false"><strong>Deixou testamento?</strong><span>Com herdeiros necessários, o testamento só alcança a metade disponível (art. 1.789). A legítima segue as regras desta aula.</span></button></li></ol>`},
    {id:'regimes',nav:'Concorre ou não',h:'Concorre ou não concorre',lead:'O art. 1.829, I manda o cônjuge herdar com os descendentes, "salvo se". Escolha o regime.',html:()=>W.picker({opts:[
      {l:'Comunhão universal',v:0,c:'seal',t:'Não concorre',d:'Já tem meação de todo o patrimônio. "Quem meia não herda."',art:'Art. 1.829, I'},
      {l:'Separação obrigatória',v:0,c:'seal',t:'Não concorre',d:'Regime imposto pela lei: maior de 70 anos, causa suspensiva ou suprimento judicial.',art:'Arts. 1.641 e 1.829, I'},
      {l:'Comunhão parcial sem bens particulares',v:0,c:'seal',t:'Não concorre',d:'Fica só com a meação dos bens comuns. A herança é toda dos filhos.',art:'Art. 1.829, I'},
      {l:'Comunhão parcial com bens particulares',v:.5,c:'brass',t:'Concorre em parte',d:'Tem meação dos bens comuns e herda com os filhos apenas sobre os bens particulares.',art:'Art. 1.829, I'},
      {l:'Separação convencional',v:1,c:'sage',t:'Concorre',d:'Regime escolhido no pacto. Não há meação; o cônjuge herda sobre toda a herança.',art:'Arts. 1.687 e 1.829, I'},
      {l:'Participação final nos aquestos',v:1,c:'sage',t:'Concorre',d:'Tem direito à metade dos aquestos e concorre como herdeiro na herança.',art:'Arts. 1.672 e 1.829, I'}]})+
      `<div class="callout"><b>A pergunta que decide a separação:</b> o regime foi escolhido pelo casal ou imposto pela lei? Convencional, o cônjuge herda. Obrigatória (art. 1.641), não.</div>`},
    {id:'calc',nav:'Calculadora',h:'Calculadora de partilha',lead:'Monte o caso e veja quanto cabe a cada um. Comece por um caso pronto.',html:conjugeCalc},
    {id:'reserva',nav:'Reserva de 1/4',h:'Quando a reserva de 1/4 muda a conta',lead:'O cônjuge recebe o mesmo que cada filho, mas nunca menos de 1/4 se for pai ou mãe de todos (art. 1.832). Mova o controle.',html:reservaQuarto},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['1.829, I','Concorrência','Descendentes em concorrência com o cônjuge, salvo comunhão universal, separação obrigatória ou comunhão parcial sem bens particulares.'],
      ['1.832','Reserva de 1/4','O cônjuge recebe quinhão igual ao dos que sucedem por cabeça, nunca inferior a 1/4 se for ascendente dos herdeiros com que concorrer.'],
      ['1.641','Separação obrigatória','É obrigatória para quem casa com causa suspensiva, para o maior de 70 anos e para quem depende de suprimento judicial.'],
      ['1.659','Fora da comunhão','Na comunhão parcial, não se comunicam os bens anteriores ao casamento e os recebidos por doação ou herança. Mas entram na herança.'],
      ['1.660','Na comunhão','Entram na comunhão os bens adquiridos onerosamente durante o casamento, ainda que em nome de um só.'],
      ['1.672','Aquestos','Cada cônjuge tem patrimônio próprio e, na dissolução, direito à metade dos bens adquiridos onerosamente pelo casal.']])}
  ]
});

/* ---------- Aula 10 · Ascendentes ---------- */
function ascTree(){
  const id=uid('at');
  const N={avoP:'Avô paterno',avaP:'Avó paterna',avoM:'Avô materno',avaM:'Avó materna',pai:'Pai',mae:'Mãe',conj:'Cônjuge'};
  later(()=>{
    const root=$('#'+id),s={avoP:true,avaP:true,avoM:true,avaM:true,pai:false,mae:true,conj:true};
    function calc(){const r={};let msg;const g1=['pai','mae'].filter(k=>s[k]);
      if(g1.length){
        if(s.conj){if(g1.length===2){r.conj=r.pai=r.mae=1/3;msg='Pai e mãe vivos, com cônjuge: 1/3 para cada um (art. 1.837).'}else{r.conj=.5;r[g1[0]]=.5;msg='Um só ascendente de 1º grau com o cônjuge: metade para cada (art. 1.837).'}}
        else{g1.forEach(k=>r[k]=1/g1.length);msg=g1.length===2?'Pai e mãe herdam por direito próprio, metade cada.':'O único ascendente de 1º grau herda tudo.'}
        if(g1.length===1&&['avoP','avaP','avoM','avaM'].some(k=>s[k]))msg+=' Os avós ficam de fora, mesmo os do outro lado: o grau mais próximo exclui o mais remoto, sem distinção de linhas, e não há representação (arts. 1.836, §1º e 1.852).';
      }else{const P=['avoP','avaP'].filter(k=>s[k]),M=['avoM','avaM'].filter(k=>s[k]);
        if(!P.length&&!M.length){if(s.conj){r.conj=1;msg='Sem descendentes nem ascendentes, o cônjuge herda tudo (art. 1.838).'}else msg='Sem ascendentes nem cônjuge: chamam-se os colaterais (aula 12).'}
        else{const pool=s.conj?.5:1;if(s.conj)r.conj=.5;const lines=[P,M].filter(l=>l.length);lines.forEach(l=>l.forEach(k=>r[k]=pool/lines.length/l.length));
          msg=(s.conj?'Com ascendentes de grau maior, o cônjuge fica com metade (art. 1.837). ':'')+(lines.length===2?'O que cabe aos avós se divide por linha: metade paterna, metade materna, e por cabeça dentro de cada linha (art. 1.836, §2º).':'Só uma linha tem avós vivos, e ela leva tudo o que cabe aos ascendentes.')}}
      return {r,msg}}
    function render(){const x=calc();
      $$('.an',root).forEach(b=>{const k=b.dataset.k,v=x.r[k];b.classList.toggle('dead',!s[k]);b.classList.toggle('heir',!!v);$('.av',b).textContent=!s[k]?(k==='conj'?'não há':'falecido'):v?fmtP(v):'não herda';$('.ab i',b).style.width=(v||0)*100+'%'});
      const m=$('.atmsg',root);m.textContent=x.msg;swapAnim(m)}
    root.addEventListener('click',e=>{const b=e.target.closest('.an');if(b){s[b.dataset.k]=!s[b.dataset.k];render()}
      const p=e.target.closest('[data-p]');if(p){const P={a:{avoP:1,avaP:1,avoM:1,avaM:1,pai:1,mae:1,conj:1},b:{avoP:1,avaP:1,avoM:1,avaM:1,pai:0,mae:1,conj:0},c:{avoP:1,avaP:1,avoM:0,avaM:1,pai:0,mae:0,conj:0},d:{avoP:1,avaP:1,avoM:1,avaM:1,pai:0,mae:0,conj:1}}[p.dataset.p];Object.keys(P).forEach(k=>s[k]=!!P[k]);render()}});
    render();
  });
  const node=k=>`<button class="an" data-k="${k}"><b>${N[k]}</b><span class="av"></span><span class="ab"><i></i></span></button>`;
  return `<div class="card at" id="${id}"><div class="presets"><button class="btn small" data-p="a">Pais vivos e cônjuge</button><button class="btn small" data-p="b">Só a mãe e os avós</button><button class="btn small" data-p="c">Três avós</button><button class="btn small" data-p="d">Avós e cônjuge</button></div>
    <p class="hint">Toque em uma pessoa para marcá-la como viva ou falecida. O falecido não deixou descendentes.</p>
    <div class="atgrid"><div class="atline p"><small>Linha paterna</small>${node('avoP')}${node('avaP')}</div><div class="atline m"><small>Linha materna</small>${node('avoM')}${node('avaM')}</div>
      <div class="atpar">${node('pai')}</div><div class="atpar">${node('mae')}</div>
      <div class="atego"><div class="ego">Falecido</div>${node('conj')}</div></div>
    <p class="atmsg verdict" aria-live="polite"></p></div>`;
}
function multiParent(){
  const id=uid('mp');
  later(()=>{
    const root=$('#'+id);let conj=false;
    function render(){const n=+$('#'+id+'-n').textContent;$$('.seg button',root).forEach(b=>b.setAttribute('aria-pressed',String(conj)===b.dataset.v));
      const rows=[];if(conj)rows.push(['Cônjuge',1/3,'brass']);const each=(conj?2/3:1)/n;for(let i=0;i<n;i++)rows.push([['Mãe biológica','Pai biológico','Mãe socioafetiva','Pai socioafetivo'][i],each,'sage']);
      $('.mprows',root).innerHTML=rows.map(r=>`<div class="rb"><span>${r[0]}</span><div class="track"><i style="width:${r[1]*100}%;background:var(--${r[2]})"></i></div><b class="num">${fmtP(r[1])}</b></div>`).join('');
      $('.rmsg',root).innerHTML=!conj?`<b>${n} genitores, ${n} linhas.</b> Pelo Enunciado 642, a herança se divide em tantas linhas quantos sejam os genitores: ${fmtP(1/n)} para cada.`:
        n===2?'<b>Dois genitores com o cônjuge:</b> é a conta clássica do art. 1.837, 1/3 para cada.':`<b>Questão em aberto.</b> Pela letra do art. 1.837, o cônjuge fica com 1/3 e os ${n} genitores dividem 2/3 (${fmtP(each)} cada). Parte da doutrina critica essa conta, e a solução tem ficado com o juiz, caso a caso.`}
    onStep(root,render);$('.seg',root).addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;conj=b.dataset.v==='true';render()});render();
  });
  return `<div class="card" id="${id}"><div class="steppers">${stepper(id+'-n','Genitores registrados',3,2,4)}<div><span class="lab">Deixou cônjuge?</span><div class="seg" style="margin-top:6px"><button data-v="true">Sim</button><button data-v="false">Não</button></div></div></div>
    <div class="rbars mprows" style="margin-top:18px"></div><p class="rmsg" aria-live="polite"></p></div>`;
}
defLesson('ascendentes',{
  hero:()=>heroSeal('GRAU MAIS PRÓXIMO • SEM DISTINÇÃO DE LINHAS • SEM REPRESENTAÇÃO • ','Linhas','art. 1.836'),
  title:['Ascendentes','e cônjuge'],
  lead:'Sem descendentes, sobem os pais e, na falta deles, os avós. Aqui o cônjuge herda em qualquer regime de bens.',
  sections:[
    {id:'arvore',nav:'Quem herda',h:'A árvore dos ascendentes',lead:'Ligue e desligue pais, avós e cônjuge. A partilha se refaz a cada toque.',html:ascTree},
    {id:'conjuge',nav:'Com o cônjuge',h:'O cônjuge com os ascendentes',lead:'Diferente do que ocorre com os descendentes, aqui não há "salvo se": o regime de bens só define a meação.',html:()=>W.flips([
      ['Pai e mãe','O cônjuge fica com <em>1/3</em>; pai e mãe, 1/3 cada (art. 1.837).'],
      ['Só um deles','O cônjuge fica com <em>metade</em>; o ascendente, a outra metade.'],
      ['Só avós','O cônjuge fica com <em>metade</em>; a outra se divide por linha.'],
      ['Ordem de cálculo','Monte-mor, <em>menos a meação</em>, menos dívidas e legados. O art. 1.837 se aplica ao que sobra.']])},
    {id:'multi',nav:'Multiparentalidade',h:'Mais de dois pais',lead:'Desde o RE 898.060 (STF, 2016), uma pessoa pode ter pai ou mãe biológico e socioafetivo ao mesmo tempo. A lei de 2002 não previu isso.',html:multiParent},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil e das Jornadas de Direito Civil.',html:()=>W.arts([
      ['1.836','Ascendentes','Na falta de descendentes, são chamados os ascendentes, em concorrência com o cônjuge.'],
      ['1.836, §1º','Grau','Na classe dos ascendentes, o grau mais próximo exclui o mais remoto, sem distinção de linhas.'],
      ['1.836, §2º','Linhas','Havendo igualdade em grau e diversidade em linha, metade cabe à linha paterna e metade à materna.'],
      ['1.837','Cônjuge','Com ascendentes em 1º grau, o cônjuge recebe 1/3; recebe metade se houver um só ascendente, ou se maior o grau.'],
      ['1.852','Sem representação','Não há direito de representação na linha ascendente.'],
      ['Enunciado 642','Multiparentalidade','Havendo igualdade em grau e diversidade em linha, a herança se divide em tantas linhas quantos sejam os genitores.']])}
  ]
});

/* ---------- Aula 11 · Cônjuge sozinho e direito real de habitação ---------- */
defLesson('habitacao',{
  hero:()=>heroSeal('QUALQUER QUE SEJA O REGIME • ÚNICO IMÓVEL RESIDENCIAL • ','Morar','art. 1.831'),
  title:['Cônjuge sozinho','e habitação'],
  lead:'Na terceira classe, o cônjuge recebe tudo. E, em qualquer classe, pode ter o direito de continuar morando na casa da família.',
  sections:[
    {id:'sozinho',nav:'Herda tudo, se...',h:'Herda tudo, se...',lead:'O art. 1.830 condiciona o direito sucessório do cônjuge. Responda e veja.',html:()=>W.wizard({qs:[['desc','O falecido deixou descendentes?'],['asc','Deixou ascendentes?'],['sepj','Estavam separados judicialmente ou divorciados?'],['sepf','Estavam separados de fato havia mais de 2 anos?'],['culpa','O sobrevivente provou que a convivência acabou sem culpa sua?']],init:{desc:false,asc:false,sepj:false,sepf:false,culpa:false},
      verdict:a=>a.sepj?{tone:'bad',t:'Não herda',d:'Separação judicial ou divórcio rompem o vínculo sucessório (art. 1.830).'}:
        a.sepf&&!a.culpa?{tone:'bad',t:'Não herda',d:'Separado de fato há mais de 2 anos, só herdaria provando que a convivência se tornou impossível sem culpa sua (art. 1.830).'}:
        a.desc?{tone:'warn',t:'Concorre com os descendentes',d:'Depende do regime de bens (aula 9).'}:
        a.asc?{tone:'warn',t:'Concorre com os ascendentes',d:'Recebe 1/3 ou 1/2, em qualquer regime (aula 10).'}:
        {tone:'ok',t:'Herda tudo',d:'Na 3ª classe, o cônjuge recebe a herança por inteiro, qualquer que seja o regime (art. 1.838). Os colaterais ficam de fora.'}})+
      `<div class="callout"><b>Crítica da doutrina:</b> o prazo de 2 anos vem da antiga exigência para o divórcio, abolida pela EC 66/2010. Hoje o divórcio não discute culpa nem prazo, mas o art. 1.830 ainda discute os dois.</div>`},
    {id:'habitacao',nav:'Habitação',h:'O direito real de habitação',lead:'O sobrevivente pode morar na casa da família pelo resto da vida, mesmo que não seja dono de nenhuma parte dela. Veja se o caso se encaixa.',html:()=>W.wizard({qs:[['morte','A relação terminou pela morte, e não por divórcio?'],['resid','O imóvel era a residência da família?'],['unico','É o único imóvel residencial a inventariar?'],['todo','O imóvel era todo do falecido, sem condomínio com terceiros?']],init:{morte:true,resid:true,unico:true,todo:true},
      verdict:a=>!a.morte?{tone:'bad',t:'Não se aplica',d:'O instituto é só sucessório. Não se estende, por analogia, à separação ou ao divórcio.'}:
        !a.resid?{tone:'bad',t:'Não se aplica',d:'O direito recai sobre o imóvel destinado à residência da família (art. 1.831).'}:
        !a.unico?{tone:'bad',t:'Não se aplica, pela letra da lei',d:'O art. 1.831 exige que seja o único imóvel dessa natureza a inventariar.'}:
        !a.todo?{tone:'bad',t:'Não se aplica, para o STJ',d:'Se o imóvel já estava em copropriedade com terceiros antes da morte, o STJ afasta o direito.'}:
        {tone:'ok',t:'Pode morar ali pelo resto da vida',d:'Qualquer que seja o regime de bens, sem pagar aluguel aos herdeiros. O direito é vitalício e personalíssimo.'}})},
    {id:'limites',nav:'Pode ou não pode',h:'O que o titular pode fazer',lead:'Habitação é só morar. Classifique.',html:()=>W.classify({buckets:['Pode','Não pode'],items:[
      ['Morar no imóvel com a família.',0,'É o conteúdo do direito.'],
      ['Alugar o imóvel para terceiros.',1,'Habitação não inclui fruir (art. 1.414).'],
      ['Vender o imóvel.',1,'Não há poder de dispor.'],
      ['Deixar o IPTU e o condomínio para os herdeiros pagarem.',1,'As despesas do imóvel são de quem mora.'],
      ['Renunciar à habitação e continuar herdeiro.',0,'São direitos independentes (Enunciado 271).'],
      ['Transmitir o direito aos próprios herdeiros.',1,'É personalíssimo: acaba com a morte do titular.']]})+
      `<div class="callout"><b>Enunciado 56 do IBDFAM:</b> havendo filhos incapazes só do falecido, o juiz deve ponderar o direito do cônjuge com o melhor interesse dessas crianças. O direito real de habitação não é absoluto.</div>`},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil e das Jornadas de Direito Civil.',html:()=>W.arts([
      ['1.830','Separação','Só há direito sucessório do cônjuge se, ao tempo da morte, não estavam separados judicialmente, nem de fato há mais de 2 anos, salvo prova de que a convivência se tornou impossível sem culpa do sobrevivente.'],
      ['1.831','Habitação','Ao cônjuge, qualquer que seja o regime, é assegurado o direito real de habitação sobre o imóvel residencial da família, se for o único dessa natureza a inventariar.'],
      ['1.838','Sozinho','Na falta de descendentes e ascendentes, a sucessão é deferida por inteiro ao cônjuge.'],
      ['1.414','Conteúdo','Quem tem o direito real de habitação não pode alugar nem emprestar o imóvel; só ocupá-lo com sua família.'],
      ['Enunciado 271','Renúncia','O cônjuge pode renunciar ao direito real de habitação, sem prejuízo da sua participação na herança.']])}
  ]
});

/* ---------- Aula 12 · Colaterais ---------- */
function kinship(){
  const id=uid('kn');
  const NO={bis:[300,40,'Bisavô'],avo:[220,110,'Avô'],tioavo:[380,110,'Tio-avô'],pai:[140,180,'Pai'],tio:[300,180,'Tio'],irmao:[80,250,'Irmão'],ego:[200,250,'Falecido'],primo:[320,250,'Primo'],sob:[80,320,'Sobrinho'],fprimo:[320,320,'Filho do primo'],sobneto:[80,390,'Sobrinho-neto']};
  const E=[['bis','avo'],['bis','tioavo'],['avo','pai'],['avo','tio'],['pai','ego'],['pai','irmao'],['tio','primo'],['irmao','sob'],['sob','sobneto'],['primo','fprimo']];
  const RETA={pai:1,avo:2,bis:3};
  later(()=>{
    const root=$('#'+id);let ts=[];
    function path(to){const adj={};E.forEach(([a,b])=>{(adj[a]=adj[a]||[]).push(b);(adj[b]=adj[b]||[]).push(a)});const prev={ego:null},q=['ego'];while(q.length){const c=q.shift();(adj[c]||[]).forEach(n=>{if(!(n in prev)){prev[n]=c;q.push(n)}})}const p=[];let c=to;while(c){p.unshift(c);c=prev[c]}return p}
    function pick(k){ts.forEach(clearTimeout);ts=[];$$('.ke',root).forEach(e=>e.classList.remove('on'));$$('.kn',root).forEach(n=>n.classList.toggle('sel',n.dataset.k===k));
      const p=path(k),g=p.length-1;const cnt=$('.kcount',root);cnt.textContent='0';
      for(let i=1;i<p.length;i++)ts.push(setTimeout(()=>{const a=p[i-1],b=p[i];const e=$(`.ke[data-e="${a}-${b}"]`,root)||$(`.ke[data-e="${b}-${a}"]`,root);e&&e.classList.add('on');cnt.textContent=i},i*420));
      const reta=RETA[k];const m=$('.kmsg',root);
      ts.push(setTimeout(()=>{m.innerHTML=reta?`<b>${NO[k][2]}: linha reta, ${g}º grau.</b> Ascendente, não colateral: herda na 2ª classe (aula 10).`:g<=4?`<b>${NO[k][2]}: colateral de ${g}º grau.</b> Sobe-se até o ancestral comum e desce-se até o parente, contando uma geração por traço. Pode herdar (art. 1.839).`:`<b>${NO[k][2]}: colateral de ${g}º grau.</b> Passa do 4º grau: não herda.`;swapAnim(m)},p.length*420));}
    root.addEventListener('click',e=>{const n=e.target.closest('.kn');if(n&&n.dataset.k!=='ego')pick(n.dataset.k)});
    cleanups.push(()=>ts.forEach(clearTimeout));setTimeout(()=>pick('primo'),300);
  });
  return `<div class="card kin" id="${id}"><div class="kintop"><p class="hint" style="margin:0">Toque em um parente para contar o grau.</p><div class="kc"><b class="kcount num">0</b><small>graus</small></div></div>
    <div class="kinsvg"><svg viewBox="0 0 460 420" role="img" aria-label="Árvore de parentesco para contar graus">
      ${E.map(([a,b])=>`<line class="ke" data-e="${a}-${b}" x1="${NO[a][0]}" y1="${NO[a][1]}" x2="${NO[b][0]}" y2="${NO[b][1]}"/>`).join('')}
      ${Object.entries(NO).map(([k,[x,y,l]])=>`<g class="kn${k==='ego'?' ego':''}" data-k="${k}" tabindex="${k==='ego'?-1:0}" role="button" aria-label="${l}"><rect x="${x-54}" y="${y-17}" width="108" height="34" rx="6"/><text x="${x}" y="${y+5}" text-anchor="middle">${l}</text></g>`).join('')}
    </svg></div><p class="kmsg" aria-live="polite"></p></div>`;
}
function pesos(){
  const id=uid('ps');
  later(()=>{
    const root=$('#'+id),r=$('input',root);
    function render(){const b=+$('#'+id+'-b').textContent,u=+$('#'+id+'-u').textContent,H=+r.value;$('.psh',root).textContent=money(H);
      const P=2*b+u;if(!P){$('.psrows',root).innerHTML='';$('.rmsg',root).textContent='Sem irmãos, chamam-se os sobrinhos; depois os tios; depois o 4º grau.';return}
      const cota=H/P,mixed=b&&u;
      const rows=[];for(let i=0;i<b;i++)rows.push(['Bilateral '+(i+1),mixed?2*cota:H/(b+u),'sage']);for(let i=0;i<u;i++)rows.push(['Unilateral '+(i+1),mixed?cota:H/(b+u),'brass']);
      $('.psrows',root).innerHTML=rows.map(x=>`<div class="rb"><span>${x[0]}</span><div class="track"><i style="width:${x[1]/H*100}%;background:var(--${x[2]})"></i></div><b class="num">${money(x[1])}</b></div>`).join('');
      $('.rmsg',root).innerHTML=mixed?`<b>Peso 2 para bilaterais, peso 1 para unilaterais.</b> ${money(H)} ÷ (2×${b} + ${u}) = ${money(cota)} por peso (art. 1.841).`:'<b>Todos do mesmo tipo:</b> dividem por igual. A regra do dobro só vale quando bilaterais e unilaterais concorrem (art. 1.842).'}
    onStep(root,render);r.addEventListener('input',render);render();
  });
  return `<div class="card" id="${id}"><div class="steppers">${stepper(id+'-b','Irmãos bilaterais',2,0,5)}${stepper(id+'-u','Irmãos unilaterais',3,0,5)}</div>
    <label class="lab" style="display:block;margin-top:14px" for="${id}-r">Herança: <output class="psh num"></output></label><input id="${id}-r" type="range" min="70000" max="700000" step="7000" value="140000">
    <div class="rbars psrows" style="margin-top:16px"></div><p class="rmsg" aria-live="polite"></p></div>`;
}
defLesson('colaterais',{
  hero:()=>heroSeal('IRMÃOS • SOBRINHOS • TIOS • ATÉ O QUARTO GRAU • ','4º grau','art. 1.839'),
  title:['Colaterais','até o 4º grau'],
  lead:'A última classe da ordem de vocação: irmãos, sobrinhos, tios e primos. Não são herdeiros necessários, e um testamento pode afastá-los por inteiro.',
  sections:[
    {id:'graus',nav:'Contar graus',h:'Como contar o grau',lead:'Na linha colateral, sobe-se até o ancestral comum e desce-se até o parente. Cada geração é um grau.',html:kinship},
    {id:'quem',nav:'Quem leva',h:'Quem leva a herança',lead:'Sem descendentes, ascendentes nem cônjuge. Diga quem sobreviveu.',html:()=>W.wizard({qs:[['irm','Há irmãos vivos?'],['sob','Há sobrinhos?'],['tio','Há tios?'],['q4','Há parentes de 4º grau (primos, tios-avós, sobrinhos-netos)?']],init:{irm:true,sob:true,tio:true,q4:true},
      verdict:a=>a.irm?{tone:'ok',t:'Herdam os irmãos',d:'São de 2º grau e excluem os demais (art. 1.840).'+(a.sob?' Sobrinhos filhos de irmão pré-morto entram por representação (art. 1.853).':'')}:
        a.sob?{tone:'ok',t:'Herdam os sobrinhos',d:'Na falta de irmãos, os filhos destes vêm antes dos tios, embora todos sejam de 3º grau. Herdam por cabeça (art. 1.843).'}:
        a.tio?{tone:'ok',t:'Herdam os tios',d:'Por cabeça e em nome próprio. Os primos, de 4º grau, ficam de fora.'}:
        a.q4?{tone:'warn',t:'Herda todo o 4º grau, por igual',d:'Primos, tios-avós e sobrinhos-netos dividem igualmente, sem distinção nem representação.'}:
        {tone:'bad',t:'Não há herdeiro',d:'A herança fica jacente e, depois, vacante, indo ao Município (aula 13).'}})},
    {id:'pesos',nav:'Bilaterais e unilaterais',h:'O irmão bilateral recebe o dobro',lead:'Irmãos de pai e mãe (bilaterais) e de um só deles (unilaterais) são todos de 2º grau. O que muda é a conta.',html:pesos},
    {id:'facultativos',nav:'Facultativos',h:'Herdeiros que um testamento afasta',lead:'Colaterais não são herdeiros necessários.',html:()=>W.flips([
      ['Sem legítima','Os colaterais <em>não têm legítima</em>: o testador pode dispor de 100% (art. 1.845).'],
      ['Como afastar','Basta testar <em>sem contemplá-los</em>. Não precisa justificar (art. 1.850).'],
      ['Sobrinho antes do tio','Os dois são de 3º grau, mas a lei prefere <em>quem está no começo da vida</em> (art. 1.843).'],
      ['A "rapa do tacho"','No 4º grau, <em>todos iguais</em>: primo, tio-avô e sobrinho-neto dividem por cabeça.']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['1.592','Colaterais','São parentes colaterais, até o 4º grau, as pessoas de um só tronco que não descendem umas das outras.'],
      ['1.839','4º grau','Na falta de cônjuge, são chamados os colaterais até o quarto grau.'],
      ['1.840','Grau','Os mais próximos excluem os mais remotos, salvo a representação dos filhos de irmãos.'],
      ['1.841','Bilaterais','Concorrendo bilaterais com unilaterais, cada unilateral herda metade do que herdar cada bilateral.'],
      ['1.842','Só unilaterais','Não concorrendo bilaterais, os unilaterais herdam em partes iguais.'],
      ['1.843','Sobrinhos e tios','Na falta de irmãos, herdam os filhos destes; não os havendo, os tios.'],
      ['1.850','Afastar por testamento','Para excluir os colaterais, basta que o testador disponha do patrimônio sem os contemplar.']])}
  ]
});

/* ---------- Aula 13 · Herança jacente e vacante ---------- */
function jacenteSlider(){
  const id=uid('jc');
  const ST=[[0,1,'Arrecadação','O juiz da comarca do falecido arrecada os bens e nomeia curador, que os guarda e administra com intervenção do MP (CPC, arts. 738 e 739).','Habilita-se no processo.'],
    [1,7,'Editais','Publicado o edital, os sucessores têm 6 meses, contados da primeira publicação, para se habilitar (CPC, art. 741).','Habilita-se no processo; a arrecadação vira inventário.'],
    [7,13,'Aguardando','Sem habilitação, a herança segue jacente sob o curador. Credores podem cobrar seus créditos.','Ainda pode se habilitar no processo.'],
    [13,60,'Vacante','Um ano depois da primeira publicação, sem herdeiro habilitado, a herança é declarada vacante (CPC, art. 743). O Município recebe os bens com propriedade resolúvel.','Só por ação direta. Os colaterais que não se habilitaram até a vacância ficam excluídos (art. 1.822, p.u.).'],
    [60,73,'Definitiva','Cinco anos depois da abertura da sucessão, os bens passam definitivamente ao Município ou ao DF (art. 1.822).','Nada mais a fazer.']];
  later(()=>{
    const root=$('#'+id),r=$('input',root);
    function render(){const m=+r.value,s=ST.find(x=>m>=x[0]&&m<x[1])||ST[4];$('.jcm',root).textContent=m===0?'dia da morte':m<12?`${m} ${m===1?'mês':'meses'}`:`${Math.floor(m/12)} ${m<24?'ano':'anos'}${m%12?' e '+m%12+' '+(m%12===1?'mês':'meses'):''}`;
      $('.jcmark',root).style.left=m/72*100+'%';$$('.jcseg',root).forEach((x,k)=>x.classList.toggle('on',ST[k]===s));
      const o=$('.jcout',root);o.innerHTML=`<p class="eyebrow">${s[2]}</p><p>${s[3]}</p><p class="jcwho"><b>Se um herdeiro aparecer agora:</b> ${s[4]}</p>`;}
    r.addEventListener('input',render);render();
  });
  return `<div class="card jc" id="${id}"><div class="jctrack">${ST.map(s=>`<i class="jcseg" style="left:${s[0]/72*100}%;width:${(Math.min(s[1],72)-s[0])/72*100}%"><span>${s[2]}</span></i>`).join('')}<i class="jcmark"></i></div>
    <label class="lab" for="${id}-r">Tempo desde a morte: <output class="jcm num"></output></label><input id="${id}-r" type="range" min="0" max="72" value="3">
    <div class="jcout" aria-live="polite"></div><p class="hint" style="margin:0">Linha do tempo considerando o primeiro edital publicado um mês após a morte.</p></div>`;
}
defLesson('jacente',{
  hero:()=>heroSeal('CURADOR • EDITAIS • UM ANO • CINCO ANOS • ','Jacente','art. 1.819'),
  title:['Herança jacente','e vacante'],
  lead:'O que acontece com os bens de quem morre sem herdeiro conhecido: duas fases, dois prazos e dois marcos iniciais diferentes.',
  sections:[
    {id:'linha',nav:'Do óbito ao Município',h:'Do óbito ao Município',lead:'Arraste o tempo e acompanhe a herança passar de jacente a vacante e, por fim, ao poder público.',html:jacenteSlider},
    {id:'curador',nav:'O curador',h:'O que faz o curador',lead:'Enquanto jacente, a herança fica sob guarda de um curador nomeado pelo juiz (CPC, art. 739).',html:()=>W.flips([
      ['Representar','A herança em juízo ou fora dele, <em>com intervenção do MP</em>.'],
      ['Conservar','Guardar os bens arrecadados e <em>arrecadar outros</em> que apareçam.'],
      ['Balancete','Apresentar ao juiz, <em>todo mês</em>, as receitas e despesas.'],
      ['Prestar contas','Ao fim da gestão, <em>prestar contas</em> de tudo.']])+`<div class="callout"><b>Atalho para a vacância:</b> quando todos os chamados a suceder renunciam, a herança é declarada vacante desde logo (art. 1.823).</div>`},
    {id:'vender',nav:'O que pode ser vendido',h:'O que o curador pode vender',lead:'O juiz pode autorizar a venda de alguns bens antes da vacância. Classifique.',html:()=>W.classify({buckets:['Pode vender','Ainda não'],items:[
      ['Bens móveis de conservação difícil ou cara.',0,'CPC, art. 742, I.'],
      ['Os retratos de família e os livros do falecido.',1,'Bens de valor de afeição só depois da vacância (art. 742, §2º).'],
      ['Um imóvel que ameaça ruir e não compensa reformar.',0,'Art. 742, V, a.'],
      ['Ações de empresa, quando falta dinheiro para integralizá-las.',0,'Art. 742, IV.'],
      ['Um imóvel em bom estado, só para ter dinheiro em caixa.',1,'Imóvel só nas hipóteses do inciso V.'],
      ['Títulos de crédito com risco de desvalorização.',0,'Art. 742, III.']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil e do CPC.',html:()=>W.arts([
      ['1.819','Jacente','Falecendo alguém sem testamento nem herdeiro notoriamente conhecido, os bens ficam sob a guarda de um curador até a entrega ao sucessor ou a declaração de vacância.'],
      ['1.820','Vacância','Praticadas as diligências e passado um ano da primeira publicação do edital, sem herdeiro habilitado, a herança é declarada vacante.'],
      ['1.822','Cinco anos','A declaração de vacância não prejudica os herdeiros que se habilitarem; passados 5 anos da abertura, os bens passam ao Município ou ao DF.'],
      ['1.823','Todos renunciam','Quando todos os chamados renunciam, a herança é desde logo declarada vacante.'],
      ['CPC, 741','Edital','Os sucessores são chamados a se habilitar no prazo de 6 meses da primeira publicação.'],
      ['CPC, 743','Ação direta','Transitada a sentença de vacância, cônjuge, herdeiros e credores só reclamam por ação direta.']])}
  ]
});
