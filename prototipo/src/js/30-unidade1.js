/* ================= Unidade I · Sucessão em geral ================= */

/* ---------- Aula 1 · Nivelamento e saisine ---------- */
function saisineScrub(){
  const id=uid('sz');
  const bens=[['Casa','R$ 200 mil',1],['Carro','R$ 200 mil',2],['Conta','R$ 200 mil',3]];
  const msgs=[
    ['Em vida','Seu Pedro é dono de tudo. Os filhos têm só uma expectativa: herança de pessoa viva não pode ser objeto de contrato (art. 426).'],
    ['A morte','A sucessão se abre e a herança passa, no mesmo instante, aos três filhos (art. 1.784). Ninguém precisou aceitar, pedir ou registrar nada.'],
    ['Inventário','Enquanto o inventário corre, cada filho é dono de 1/3 de cada bem. A herança é um todo indivisível, e o direito à sucessão aberta é bem imóvel (arts. 1.791 e 80, II).'],
    ['Partilha','Só com a partilha cada filho fica com bens determinados. A partilha apenas declara o que a saisine já tinha transmitido no dia da morte.']];
  later(()=>{
    const root=$('#'+id),r=$('input',root);let timer;
    function set(v){r.value=v;$$('.szlab span',root).forEach((s,k)=>s.classList.toggle('on',k===v));
      $$('.bem',root).forEach(b=>{const own=+b.dataset.o,ws=v===0?[100,0,0,0]:v<3?[0,33.34,33.33,33.33]:[0,own===1?100:0,own===2?100:0,own===3?100:0];$$('.own i',b).forEach((i,k)=>i.style.width=ws[k]+'%');$('.who',b).textContent=v===0?'Seu Pedro':v<3?'Ana, Bruno e Clara (1/3 cada)':['','Ana','Bruno','Clara'][own]});
      const m=$('.szmsg',root);m.innerHTML=`<b>${msgs[v][0]}.</b> ${msgs[v][1]}`;swapAnim(m)}
    r.addEventListener('input',()=>{clearInterval(timer);set(+r.value)});
    $('.szplay',root).onclick=()=>{clearInterval(timer);let v=0;set(0);timer=setInterval(()=>{v++;if(v>3){clearInterval(timer);return}set(v)},1600)};
    cleanups.push(()=>clearInterval(timer));set(0);
  });
  return `<div class="card scrub" id="${id}">
    <div class="szlab">${msgs.map(m=>`<span>${m[0]}</span>`).join('')}</div>
    <input type="range" min="0" max="3" step="1" value="0" aria-label="Momento da sucessão">
    <div class="szbens">${bens.map(b=>`<div class="bem" data-o="${b[2]}"><div class="row"><b>${b[0]}</b><small>${b[1]}</small></div><div class="own"><i class="o0"></i><i class="o1"></i><i class="o2"></i><i class="o3"></i></div><small class="who"></small></div>`).join('')}</div>
    <div class="szleg"><span><i class="o0"></i>Seu Pedro</span><span><i class="o1"></i>Ana</span><span><i class="o2"></i>Bruno</span><span><i class="o3"></i>Clara</span></div>
    <p class="szmsg" aria-live="polite"></p><button class="btn small szplay">Animar do começo</button></div>`;
}
defLesson('nivelamento',{
  hero:()=>heroSeal('ABERTA A SUCESSÃO • A HERANÇA TRANSMITE-SE DESDE LOGO • ','Saisine','art. 1.784'),
  title:['Nivelamento','e saisine'],
  lead:'Os conceitos de base do Direito das Sucessões e o princípio que explica metade da matéria: a herança passa aos herdeiros no instante da morte.',
  sections:[
    {id:'fan',nav:'Fato, ato, negócio',h:'Fato, ato ou negócio?',lead:'A matéria aplica conceitos da Parte Geral. Um atalho para lembrar, F.A.N.: foi algo natural ou voluntário?',html:()=>W.flips([
      ['Fato','Evento <em>natural ou involuntário</em> com efeitos jurídicos. Exemplo: a morte.'],
      ['Ato','Vontade <em>simples</em>, com efeito fixado pela lei. Exemplo: reconhecer um filho.'],
      ['Negócio','Vontade <em>dirigida a produzir efeitos</em>. Exemplo: o testamento.'],
      ['Patrimônio ≠ herança','Todos têm patrimônio. <em>Herança</em> é só o patrimônio transmissível de quem morreu.']])+
      `<div style="margin-top:22px">${W.classify({buckets:['Fato','Ato','Negócio'],items:[
        ['A morte do autor da herança.',0,'Evento natural com efeitos automáticos (arts. 6º e 1.784).'],
        ['O reconhecimento voluntário de um filho.',1,'Manifestação de vontade simples, com efeitos fixados pela lei.'],
        ['Um testamento particular.',2,'Vontade dirigida a produzir efeitos depois da morte (art. 1.857).'],
        ['O nascimento com vida.',0,'Evento natural que dá início à personalidade (art. 2º).'],
        ['A cessão onerosa da quota hereditária.',2,'Acordo de vontades para transferir a quota (art. 1.793).'],
        ['A morte simultânea de pai e filho num acidente.',0,'Fato natural; a lei só presume a simultaneidade (art. 8º).']]})}</div>`},
    {id:'saisine',nav:'Saisine',h:'Quem é dono, e quando',lead:'Arraste a linha do tempo. A herança muda de titular no instante da morte, muito antes da partilha.',html:saisineScrub},
    {id:'ausencia',nav:'Morte presumida',h:'Quando não há corpo',lead:'A morte também pode ser presumida. Avance pelas etapas do procedimento de ausência.',html:()=>W.timeline({steps:[
      {t:'Desaparecimento',s:'art. 22',d:'A pessoa some do domicílio sem dar notícias e sem deixar representante. Qualquer interessado ou o Ministério Público pede a declaração de ausência.'},
      {t:'Curadoria dos bens',s:'arts. 22 a 25',d:'O juiz arrecada os bens e nomeia curador. Ainda não há sucessão: só se conserva o patrimônio.'},
      {t:'Sucessão provisória',s:'arts. 26 a 36',d:'Um ano depois da arrecadação (três, se o ausente deixou procurador), abre-se a sucessão provisória. Os herdeiros recebem a posse dos bens, em regra prestando garantia.'},
      {t:'Sucessão definitiva',s:'arts. 37 e 38',d:'Dez anos depois do trânsito da sentença da provisória. Ou antes, se o ausente tem 80 anos ou mais e as últimas notícias são de cinco anos atrás.'},
      {t:'E se ele voltar?',s:'art. 39',d:'Voltando nos dez anos seguintes à abertura da definitiva, recebe os bens no estado em que estiverem, ou os que os substituíram.'}]})+
      `<div class="callout"><b>Sem ausência (art. 7º):</b> declara-se a morte presumida quando for extremamente provável a morte de quem estava em perigo de vida, ou quando o desaparecido em campanha ou feito prisioneiro não for encontrado até dois anos após o fim da guerra.</div>`},
    {id:'especies',nav:'Espécies',h:'Legítima, testamentária ou mista',lead:'A sucessão se classifica pela origem (lei, testamento ou os dois) e pela forma de transmissão (universal ou singular).',html:()=>W.classify({buckets:['Legítima','Testamentária','Mista'],items:[
      ['João morre sem testamento e deixa três filhos.',0,'Sem testamento, a lei define quem herda (art. 1.788).'],
      ['Ana, sem herdeiros necessários, deixa tudo, por testamento, a uma ONG.',1,'Toda a herança vai por testamento. Sem herdeiros necessários, a liberdade de testar é total.'],
      ['José deixa 30% dos bens a um amigo, por testamento; o resto fica para os filhos.',2,'Parte por testamento, parte pela lei. Resulta da leitura conjunta dos arts. 1.788, 1.846 e 1.857, §1º.'],
      ['O testamento de Maria é declarado nulo por vício de forma.',0,'Caindo o testamento, a sucessão legítima assume o lugar dele.']]})+
      `<div style="margin-top:22px">${W.flips([['A título universal','O herdeiro recebe uma <em>fração ideal</em> do todo e responde pelas dívidas, até as forças da herança.'],['A título singular','O <em>legatário</em> recebe um bem certo ("meu carro ao sobrinho Paulo") e não responde pelas dívidas.']])}</div>`},
    {id:'fundamental',nav:'Direito fundamental',h:'Herança é direito fundamental',lead:'O direito de herança está na Constituição, entre os direitos e garantias fundamentais.',html:()=>`<div class="quote"><p>"É garantido o direito de herança."</p><small>Constituição Federal, art. 5º, XXX</small></div>`+W.flips([
      ['Onde está','No <em>Título II</em> da Constituição: direitos e garantias fundamentais, com eficácia imediata (art. 5º, §1º).'],
      ['O que evita','A <em>estatização</em> dos bens na morte e a insegurança das relações patrimoniais.'],
      ['Onde reaparece','Sustenta a <em>legítima</em>: a metade reservada aos herdeiros necessários (art. 1.846).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil e da Constituição. Abra cada um.',html:()=>W.arts([
      ['2º','Personalidade','A personalidade civil começa do nascimento com vida; a lei põe a salvo, desde a concepção, os direitos do nascituro.'],
      ['6º','Fim da pessoa','A existência da pessoa natural termina com a morte; presume-se esta, quanto aos ausentes, nos casos legais.'],
      ['7º','Morte presumida','Sem decretação de ausência: perigo de vida ou desaparecido em campanha não encontrado em dois anos após a guerra.'],
      ['80, II','Bem imóvel','Considera-se imóvel, para os efeitos legais, o direito à sucessão aberta.'],
      ['426','Pacta corvina','Não pode ser objeto de contrato a herança de pessoa viva.'],
      ['1.784','Saisine','Aberta a sucessão, a herança transmite-se, desde logo, aos herdeiros legítimos e testamentários.'],
      ['1.791','Todo unitário','A herança defere-se como um todo unitário; até a partilha, o direito dos coerdeiros é indivisível e regido pelo condomínio.'],
      ['1.798','Legitimação','Legitimam-se a suceder as pessoas nascidas ou já concebidas no momento da abertura da sucessão.'],
      ['CF, 5º, XXX','Direito de herança','É garantido o direito de herança.']])}
  ]
});

/* ---------- Aula 2 · Abertura, comoriência e legítima ---------- */
function comorienciaAnim(){
  const id=uid('cm');
  later(()=>{
    const root=$('#'+id),stage=$('.cmstage',root),coins=[$('.coin1',root),$('.coin2',root)];let ts=[];
    function center(el){const r=el.getBoundingClientRect(),s=stage.getBoundingClientRect();return [r.left-s.left+r.width/2,r.top-s.top+r.height/2]}
    function place(c,el,dx){const [x,y]=center(el);c.style.transform=`translate(${x-14+(dx||0)}px,${y-14}px)`}
    function tally(a,b){$('.t-ij',root).textContent=money(a);$('.t-im',root).textContent=money(b)}
    function run(sc){ts.forEach(clearTimeout);ts=[];
      $$('.cmbtn',root).forEach(b=>b.setAttribute('aria-pressed',b.dataset.s===sc));
      coins.forEach(c=>c.style.transition='none');place(coins[0],$('.p-j',root));place(coins[1],$('.p-m',root));tally(0,0);
      $('.p-m',root).classList.toggle('dead',sc==='a');$('.p-m small',root).textContent=sc==='a'?'morreu no impacto':'morreu 2 horas depois';
      setTimeout(()=>{coins.forEach(c=>c.style.transition='');
        if(sc==='a'){place(coins[0],$('.p-ij',root));place(coins[1],$('.p-im',root));ts.push(setTimeout(()=>tally(1e6,1e6),1300))}
        else{place(coins[0],$('.p-m',root),18);ts.push(setTimeout(()=>{place(coins[0],$('.p-im',root),-10);place(coins[1],$('.p-im',root),10)},1500));ts.push(setTimeout(()=>tally(0,2e6),2800))}
      },40);
      const m=$('.cmmsg',root);m.innerHTML=sc==='a'?'<b>Comoriência.</b> Não se sabe quem morreu antes: presume-se morte simultânea (art. 8º). Nenhum herda do outro, e cada herança vai ao próprio irmão.':'<b>Sem comoriência.</b> Maria sobreviveu a João e herdou tudo dele, porque o cônjuge afasta os colaterais (arts. 1.829, III e 1.838). Quando ela morre, os R$ 2 milhões vão ao irmão dela.';swapAnim(m);
    }
    root.addEventListener('click',e=>{const b=e.target.closest('.cmbtn');if(b)run(b.dataset.s)});
    cleanups.push(()=>ts.forEach(clearTimeout));
    setTimeout(()=>run('a'),200);
  });
  return `<div class="card cm" id="${id}"><div class="regimes"><button class="cmbtn" data-s="a" aria-pressed="true">Os dois morrem no impacto</button><button class="cmbtn" data-s="b" aria-pressed="false">Maria morre no hospital</button></div>
    <div class="cmstage"><div class="cmrow">
      <div class="p p-ij"><b>Irmão de João</b><small>colateral</small><span class="t-ij num">R$ 0</span></div>
      <div class="p p-j dead"><b>João</b><small>R$ 1 milhão</small></div>
      <div class="p p-m dead"><b>Maria</b><small>morreu no impacto</small></div>
      <div class="p p-im"><b>Irmão de Maria</b><small>colateral</small><span class="t-im num">R$ 0</span></div></div>
      <i class="coin coin1"></i><i class="coin coin2"></i></div>
    <p class="cmmsg" aria-live="polite"></p><p class="hint" style="margin:0">Casados em separação convencional, sem descendentes nem ascendentes. Cada um tinha R$ 1 milhão.</p></div>`;
}
function legitimaSlider(){
  const id=uid('lg');
  later(()=>{
    const root=$('#'+id),r=$('input[type=range]',root);let nec=true;
    function render(){const p=+r.value/100,T=1e6;$('.lgv',root).textContent=Math.round(p*100)+'%';
      $$('.lgnec button',root).forEach(b=>b.setAttribute('aria-pressed',String(nec)===b.dataset.v));
      const disp=nec?.5:1,amigo=Math.min(p,disp),exc=Math.max(0,p-disp);
      const seg=$('.lgbar',root);
      seg.innerHTML=`${nec?`<i class="lg-leg" style="width:50%"><span>Legítima</span></i>`:''}<i class="lg-am" style="width:${amigo*100}%"><span>${amigo>.08?'Amigo':''}</span></i><i class="lg-her" style="width:${(disp-amigo)*100}%"><span>${disp-amigo>.12?'Herdeiros':''}</span></i>`;
      $('.lgexc',root).style.width=exc*100+'%';$('.lgexc',root).style.right=(disp>=1?0:50)+'%';$('.lgexc',root).hidden=!exc;
      const m=$('.lgmsg',root);
      m.innerHTML=!nec?`<b>Sem herdeiros necessários, pode deixar tudo.</b> O amigo recebe ${money(p*T)}. Irmãos e sobrinhos podem ser afastados: basta não contemplá-los (art. 1.850).`:
        exc?`<b>Excede a parte disponível.</b> O testamento pede ${money(p*T)} para o amigo, mas ele recebe ${money(disp*T)}. Os ${money(exc*T)} a mais são reduzidos (art. 1.967). O testamento não é anulado.`:
        `<b>Dentro da parte disponível.</b> O amigo recebe ${money(p*T)}. A legítima de ${money(.5*T)} fica com os herdeiros necessários (art. 1.846).`;}
    r.addEventListener('input',render);$('.lgnec',root).addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;nec=b.dataset.v==='true';render()});render();
  });
  return `<div class="card lg" id="${id}"><div class="lgtop"><div><span class="lab">Tem descendentes, ascendentes ou cônjuge?</span><div class="seg lgnec"><button data-v="true">Sim</button><button data-v="false">Não</button></div></div>
    <div style="flex:1;min-width:200px"><label class="lab" for="${id}-r">Deixar ao amigo: <output class="lgv num">60%</output> de R$ 1 milhão</label><input id="${id}-r" type="range" min="0" max="100" step="5" value="60"></div></div>
    <div class="lgwrap"><div class="lgbar"></div><i class="lgexc" hidden><span>reduzido</span></i></div><p class="lgmsg" aria-live="polite"></p></div>`;
}
defLesson('abertura',{
  hero:()=>heroSeal('ÚLTIMO DOMICÍLIO • MORTE SIMULTÂNEA • METADE INDISPONÍVEL • ','Abertura','arts. 8º e 1.785'),
  title:['Abertura','e legítima'],
  lead:'Quando e onde a sucessão se abre, o que acontece quando duas pessoas morrem juntas e quanto do patrimônio a lei reserva à família.',
  sections:[
    {id:'quando',nav:'Momento e lugar',h:'O momento e o lugar',lead:'A data da morte fixa o patrimônio e quem estava vivo para herdar. O lugar define o foro do inventário.',html:()=>W.flips([
      ['Momento','A <em>data do óbito</em>. É o marco para apurar o patrimônio, quem herda e os direitos de cada um.'],
      ['Lugar','O <em>último domicílio</em> do falecido (art. 1.785), ainda que o óbito ocorra no exterior (CPC, art. 48).'],
      ['Sem domicílio certo','Foro da situação dos imóveis; se em vários lugares, qualquer deles; sem imóveis, onde estiver qualquer bem.'],
      ['Em cartório','No inventário extrajudicial, os herdeiros <em>escolhem livremente</em> o tabelionato.']])},
    {id:'via',nav:'Juiz ou cartório',h:'Inventário em juízo ou em cartório?',lead:'Responda às perguntas e veja o caminho possível.',html:()=>W.wizard({qs:[['cap','Todos os herdeiros são capazes?'],['acordo','Todos concordam com a partilha?'],['test','O falecido deixou testamento?'],['adv','Há advogado assistindo as partes?']],init:{cap:true,acordo:true,test:false,adv:true},
      verdict:a=>!a.adv?{tone:'bad',t:'Falta o advogado',d:'Nos dois caminhos a assistência de advogado é obrigatória, inclusive no cartório.'}:
        !a.cap?{tone:'warn',t:'Inventário judicial',d:'Com herdeiro menor, interditado ou ausente, só o juiz pode conduzir o inventário (CPC, art. 610).'}:
        !a.acordo?{tone:'warn',t:'Inventário judicial',d:'Havendo divergência, o juiz resolve. O cartório exige que todos estejam de acordo.'}:
        a.test?{tone:'warn',t:'Judicial, em regra',d:'Com testamento, o caminho é o juiz. Alguns tribunais admitem o cartório depois que o testamento é registrado em juízo e há autorização.'}:
        {tone:'ok',t:'Pode ser em cartório',d:'Escritura pública, em geral em 30 a 90 dias, no tabelionato que os herdeiros escolherem (CPC, art. 610, §1º).'}})},
    {id:'comoriencia',nav:'Comoriência',h:'Dois minutos que mudam tudo',lead:'João e Maria sofrem um acidente de carro. Compare os dois finais.',html:comorienciaAnim},
    {id:'legitima',nav:'Legítima',h:'Quanto se pode deixar em testamento',lead:'Havendo herdeiros necessários, metade do patrimônio é a legítima. Mova o controle e veja o que acontece com o excesso.',html:legitimaSlider},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil e do CPC.',html:()=>W.arts([
      ['8º','Comoriência','Se dois ou mais morrerem na mesma ocasião, sem que se possa averiguar se algum precedeu aos outros, presumem-se simultaneamente mortos.'],
      ['1.785','Lugar','A sucessão abre-se no lugar do último domicílio do falecido.'],
      ['1.789','Liberdade limitada','Havendo herdeiros necessários, o testador só pode dispor da metade da herança.'],
      ['1.845','Necessários','São herdeiros necessários os descendentes, os ascendentes e o cônjuge.'],
      ['1.846','Legítima','Pertence aos herdeiros necessários, de pleno direito, a metade dos bens da herança.'],
      ['1.967','Redução','As disposições que excederem a parte disponível reduzem-se aos limites dela.'],
      ['CPC, 48','Foro','O foro do domicílio do autor da herança é competente para o inventário, ainda que o óbito tenha ocorrido no estrangeiro.'],
      ['CPC, 610','Extrajudicial','Sendo todos capazes e concordes, o inventário e a partilha podem ser feitos por escritura pública, com advogado.']])}
  ]
});

/* ---------- Aula 3 · Espólio, dívidas e aceitação ---------- */
function dividasCalc(){
  const id=uid('dv');
  later(()=>{
    const root=$('#'+id),h=$('.dv-h',root),d=$('.dv-d',root);
    function render(){const H=+h.value,D=+d.value,mx=Math.max(H,D,1),liq=Math.max(0,H-D),loss=Math.max(0,D-H);
      $('.dv-hv',root).textContent=money(H);$('.dv-dv',root).textContent=money(D);
      $('.dvb-h',root).style.width=H/mx*100+'%';$('.dvb-d',root).style.width=D/mx*100+'%';
      $('.dvheirs',root).innerHTML=['Ana','Bruno','Clara'].map(n=>`<div><b>${n}</b><span class="num">${money(liq/3)}</span><small>${liq?'recebe':'não recebe nada, mas também não paga'}</small></div>`).join('');
      const m=$('.dvmsg',root);m.innerHTML=loss?`<b>As dívidas superam a herança.</b> Os herdeiros não pagam nada do próprio bolso. O credor fica com os ${money(H)} e perde ${money(loss)} (art. 1.792).`:`<b>Paga-se primeiro, divide-se depois.</b> Saem ${money(D)} para os credores, e os ${money(liq)} restantes se dividem entre os três.`}
    h.addEventListener('input',render);d.addEventListener('input',render);render();
  });
  return `<div class="card dv" id="${id}"><div class="dvin">
    <div><label class="lab" for="${id}-h">Bens da herança: <output class="dv-hv num"></output></label><input id="${id}-h" class="dv-h" type="range" min="0" max="600000" step="10000" value="300000"></div>
    <div><label class="lab" for="${id}-d">Dívidas do falecido: <output class="dv-dv num"></output></label><input id="${id}-d" class="dv-d" type="range" min="0" max="600000" step="10000" value="120000"></div></div>
    <div class="dvbars"><div><span>Herança</span><div class="track"><i class="dvb-h"></i></div></div><div><span>Dívidas</span><div class="track"><i class="dvb-d"></i></div></div></div>
    <div class="dvheirs"></div><p class="dvmsg" aria-live="polite"></p></div>`;
}
function inventarianteList(){
  const id=uid('iv');
  const L=[['Cônjuge ou companheiro','que convivia com o falecido ao tempo da morte'],['Herdeiro na posse','e na administração do espólio'],['Qualquer herdeiro','se nenhum estiver na posse'],['Herdeiro menor','por seu representante legal'],['Testamenteiro','se tiver a administração ou se tudo estiver em legados'],['Cessionário','do herdeiro ou do legatário'],['Inventariante judicial','se houver'],['Pessoa estranha idônea','quando não houver inventariante judicial']];
  const P={todos:[1,1,1,1,1,1,1,1],sep:[0,1,1,1,1,1,1,1],ninguem:[0,0,0,0,0,0,0,1]};
  later(()=>{
    const root=$('#'+id),on=P.todos.slice();
    function render(){const first=on.findIndex(x=>x);$$('.ivrow',root).forEach((r,k)=>{r.classList.toggle('off',!on[k]);r.classList.toggle('pick',k===first);$('input',r).checked=!!on[k]});
      const m=$('.ivmsg',root);m.innerHTML=`<b>Nomeado: ${L[first][0].toLowerCase()}</b> (CPC, art. 617, ${['I','II','III','IV','V','VI','VII','VIII'][first]}). Prestará compromisso em 5 dias.`;swapAnim(m)}
    root.addEventListener('change',e=>{const r=e.target.closest('.ivrow');if(!r)return;on[+r.dataset.i]=e.target.checked?1:0;if(!on.some(x=>x))on[7]=1;render()});
    root.addEventListener('click',e=>{const b=e.target.closest('[data-p]');if(!b)return;P[b.dataset.p].forEach((v,k)=>on[k]=v);render()});
    render();
  });
  return `<div class="card iv" id="${id}"><div class="presets"><button class="btn small" data-p="todos">Família comum</button><button class="btn small" data-p="sep">Viúva separada de fato</button><button class="btn small" data-p="ninguem">Ninguém disponível</button></div>
    <ol class="ivlist">${L.map((x,k)=>`<li class="ivrow" data-i="${k}"><span class="ivn">${['I','II','III','IV','V','VI','VII','VIII'][k]}</span><div><b>${x[0]}</b><small>${x[1]}</small></div><label class="sw"><input type="checkbox" checked aria-label="${x[0]} disponível"><span></span></label></li>`).join('')}</ol>
    <p class="ivmsg" aria-live="polite"></p></div>`;
}
defLesson('espolio',{
  hero:()=>heroSeal('TODO UNITÁRIO • ATÉ AS FORÇAS DA HERANÇA • ACEITAÇÃO INTEGRAL • ','Espólio','art. 1.791'),
  title:['Espólio','e aceitação'],
  lead:'Quem administra a herança até a partilha, quem paga as dívidas e como se sabe que um herdeiro aceitou.',
  sections:[
    {id:'dividas',nav:'Dívidas',h:'Até as forças da herança',lead:'Os herdeiros respondem pelas dívidas do falecido, mas só até o valor herdado. Mova os controles.',html:dividasCalc},
    {id:'inventariante',nav:'Inventariante',h:'Quem representa o espólio',lead:'O espólio é representado pelo inventariante. O juiz segue a ordem do CPC: o primeiro disponível é nomeado. Desligue quem não pode assumir.',html:inventarianteList},
    {id:'formas',nav:'Formas de aceitar',h:'Três formas de aceitar',lead:'Aceitar a herança também se diz "adir". Antes, há a delação: a herança é oferecida aos chamados.',html:()=>W.flips([
      ['Expressa','Por <em>qualquer declaração escrita</em>. Não precisa de escritura (art. 1.805).'],
      ['Tácita','Por <em>atos próprios de herdeiro</em>, como cobrar créditos do falecido.'],
      ['Presumida','O herdeiro <em>fica em silêncio</em> depois de interpelado pelo juiz (art. 1.807).'],
      ['Regras rígidas','<em>Integral</em>, sem condição ou termo, e <em>irrevogável</em> (arts. 1.808 e 1.812).']])},
    {id:'aceitou',nav:'Aceitou ou não?',h:'Aceitou ou não aceitou?',lead:'Atos de quem só conserva os bens não significam aceitar. Classifique.',html:()=>W.classify({buckets:['Aceitou','Não aceitou'],items:[
      ['Paga o funeral do pai.',1,'Ato oficioso: não exprime aceitação (art. 1.805, §1º).'],
      ['Cobra de um devedor o dinheiro que ele devia ao pai.',0,'Só um herdeiro agiria assim: aceitação tácita.'],
      ['Troca as telhas quebradas da casa para evitar infiltração.',1,'Ato meramente conservatório.'],
      ['Vende o carro do espólio como se fosse seu.',0,'Dispor do bem é comportamento de dono.'],
      ['Cede gratuitamente sua parte a todos os coerdeiros, sem condição.',1,'Equivale a renunciar, não a aceitar (art. 1.805, §2º).'],
      ['Pede alvará para levantar valores da conta do pai.',0,'O pedido é feito na qualidade de herdeiro.'],
      ['Fica em silêncio depois da interpelação do juiz.',0,'Passado o prazo, a herança se tem por aceita (art. 1.807).']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil e do CPC.',html:()=>W.arts([
      ['1.791','Condomínio','Até a partilha, o direito dos coerdeiros à herança é indivisível e regido pelas normas do condomínio.'],
      ['1.792','Forças da herança','O herdeiro não responde por encargos superiores às forças da herança; cabe-lhe provar o excesso, salvo se houver inventário.'],
      ['1.805','Aceitação','Expressa, por declaração escrita; tácita, por atos próprios de herdeiro. Atos oficiosos e conservatórios não a exprimem.'],
      ['1.807','Interpelação','O interessado pode pedir que o herdeiro declare em até 30 dias se aceita; o silêncio vale aceitação.'],
      ['1.808','Integral','Não se aceita nem se renuncia em parte, sob condição ou a termo.'],
      ['1.812','Irrevogável','São irrevogáveis os atos de aceitação ou de renúncia da herança.'],
      ['1.997','Depois da partilha','Feita a partilha, cada herdeiro responde pelas dívidas na proporção da parte que lhe coube.'],
      ['CPC, 617','Inventariante','A ordem de nomeação: cônjuge que convivia, herdeiro na posse, qualquer herdeiro, até pessoa estranha idônea.']])}
  ]
});

/* ---------- Aula 4 · Renúncia ---------- */
function renunciaSim(){
  const id=uid('rn');
  later(()=>{
    const fam=[{n:'Ana',netos:['Bia','Caio']},{n:'Bruno',netos:['Duda']},{n:'Clara',netos:['Enzo','Fábio','Gabi']}];
    const root=$('#'+id),out=new Set(),tree=$('.tree',root),verdict=$('.verdict',root);
    tree.innerHTML=fam.map((f,i)=>`<div class="branch"><div class="heir" data-i="${i}"><h4>${f.n} (filha/o)</h4><div class="bar"><i></i></div><span class="pct"></span><button>Renunciar</button></div><div class="netos">${f.netos.map(n=>`<div class="neto"><div>${n}</div><div class="bar"><i></i></div><span class="pct"></span></div>`).join('')}</div></div>`).join('');
    function render(){
      const k=fam.length-out.size,totalNetos=fam.reduce((s,f)=>s+f.netos.length,0);
      $$('.heir',tree).forEach((h,i)=>{const v=out.has(i)?0:(k?1/k:0);h.classList.toggle('out',out.has(i));$('.bar i',h).style.width=v*100+'%';$('.pct',h).textContent=fmtP(v);const b=$('button',h);b.textContent=out.has(i)?'Renunciou (irrevogável)':'Renunciar';b.disabled=out.has(i)});
      $$('.neto',tree).forEach(n=>{const v=k?0:1/totalNetos;n.classList.toggle('on',v>0);$('.bar i',n).style.width=v*100+'%';$('.pct',n).textContent=fmtP(v)});
      verdict.textContent=out.size===0?'Ninguém renunciou: cada filho recebe 1/3 por direito próprio.':k>0?`Sem representação: a parte de quem renunciou acresce aos irmãos (art. 1.810). Os netos do renunciante não recebem nada. Cada filho restante fica com ${fmtP(1/k)}.`:`Todos da classe renunciaram (art. 1.811): os netos herdam por direito próprio e por cabeça. São ${totalNetos} netos, ${fmtP(1/totalNetos)} cada, sem importar de qual ramo vêm.`;
      verdict.classList.remove('flash');void verdict.offsetWidth;verdict.classList.add('flash');
    }
    tree.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;out.add(+b.closest('.heir').dataset.i);render()});
    $('.rn-all',root).onclick=()=>{fam.forEach((_,i)=>out.add(i));render()};
    $('.rn-reset',root).onclick=()=>{out.clear();render()};
    render();
  });
  return `<div class="sim" id="${id}"><div class="root">Herança do pai<small>100% do monte a partilhar entre descendentes</small></div><div class="tree"></div><div class="verdict" aria-live="polite"></div>
    <div class="simctl"><button class="btn small rn-all">Todos renunciam</button><button class="btn small rn-reset">Recomeçar</button></div></div>`;
}
function renunciaFlow(){
  const id=uid('rf');
  later(()=>{
    const root=$('#'+id),mv=(el,x,y)=>el.style.transform=`translate(${x}px,${y}px)`;
    root.addEventListener('click',e=>{const b=e.target.closest('[data-run]');if(!b)return;
      if(b.dataset.run==='a'){const a1=$('.a1',root),a2=$('.a2',root),tag=$('.aTag',root);[a1,a2].forEach(c=>{c.style.transition='none';mv(c,0,0)});tag.classList.remove('show');
        setTimeout(()=>{[a1,a2].forEach(c=>{c.style.transition='';mv(c,115,15)});setTimeout(()=>{mv(a1,230,-35);mv(a2,230,65);tag.classList.add('show')},1500)},40)}
      else{const t=$('.t1',root),tag=$('.tTag',root);t.getAnimations&&t.getAnimations().forEach(a=>a.cancel());tag.classList.remove('show');
        t.animate([{transform:'translate(0,0)'},{transform:'translate(115px,-50px)'},{transform:'translate(230px,15px)'}],{duration:1600,easing:'ease-in-out',fill:'forwards'});setTimeout(()=>tag.classList.add('show'),1600)}});
  });
  return `<div class="flow" id="${id}">
    <div class="lane"><h3>Abdicativa</h3><svg viewBox="0 0 320 170" role="img" aria-label="A quota volta ao monte e se divide entre os coerdeiros">
      <rect x="10" y="60" width="70" height="50" rx="6" fill="none" stroke="var(--line)" stroke-width="2"/><text x="45" y="90" text-anchor="middle" font-size="12" fill="var(--muted)">herdeiro</text>
      <rect x="125" y="60" width="70" height="50" rx="6" fill="var(--soft)"/><text x="160" y="90" text-anchor="middle" font-size="12" fill="var(--ink)">monte</text>
      <rect x="240" y="15" width="70" height="40" rx="6" fill="none" stroke="var(--sage)" stroke-width="2"/><text x="275" y="40" text-anchor="middle" font-size="11" fill="var(--ink)">coerdeiro</text>
      <rect x="240" y="115" width="70" height="40" rx="6" fill="none" stroke="var(--sage)" stroke-width="2"/><text x="275" y="140" text-anchor="middle" font-size="11" fill="var(--ink)">coerdeiro</text>
      <circle class="coin a1" cx="45" cy="70" r="9" fill="var(--sage)"/><circle class="coin a2" cx="45" cy="70" r="9" fill="var(--sage)" opacity=".85"/>
      <text class="tax aTag" x="160" y="140" text-anchor="middle" font-size="13" font-weight="700" fill="var(--sage)">sem ITCMD</text></svg>
      <button class="btn primary small" data-run="a" style="align-self:flex-start">Ver o caminho</button><ul><li>Não indica beneficiário</li><li>Não precisa de aceitação de terceiro</li></ul></div>
    <div class="lane"><h3>Translativa</h3><svg viewBox="0 0 320 170" role="img" aria-label="A quota vai direto à pessoa escolhida e incide imposto">
      <rect x="10" y="60" width="70" height="50" rx="6" fill="none" stroke="var(--line)" stroke-width="2"/><text x="45" y="90" text-anchor="middle" font-size="12" fill="var(--muted)">herdeiro</text>
      <rect x="125" y="60" width="70" height="50" rx="6" fill="none" stroke="var(--line)" stroke-dasharray="4 4"/><text x="160" y="90" text-anchor="middle" font-size="12" fill="var(--muted)">monte</text>
      <rect x="240" y="60" width="70" height="50" rx="6" fill="none" stroke="var(--seal)" stroke-width="2"/><text x="275" y="85" text-anchor="middle" font-size="11" fill="var(--ink)">escolhido</text>
      <circle class="coin t1" cx="45" cy="70" r="11" fill="var(--seal)"/>
      <g class="tax tTag"><rect x="222" y="122" width="106" height="30" rx="4" fill="none" stroke="var(--seal)" stroke-width="2" transform="rotate(-6 275 137)"/><text x="275" y="142" text-anchor="middle" font-size="13" font-weight="700" fill="var(--seal)" transform="rotate(-6 275 137)">ITCMD incide</text></g></svg>
      <button class="btn primary small" data-run="t" style="align-self:flex-start">Ver o caminho</button><ul><li>É cessão: escritura pública (art. 1.793)</li><li>Para estranho: coerdeiros têm preferência por 180 dias (arts. 1.794 e 1.795)</li></ul></div></div>`;
}
defLesson('renuncia',{
  hero:()=>heroSeal('INSTRUMENTO PÚBLICO OU TERMO JUDICIAL • ART. 1.806 CC • ','Renuncio','irrevogável'),
  title:['Renúncia','da herança'],
  lead:'Quando o herdeiro abre mão da sua parte, ela não vai para quem ele quiser: volta ao monte. Explore as regras mexendo nelas.',
  sections:[
    {id:'base',nav:'O que é',h:'Pura, simples e solene',lead:'A renúncia abdicativa não escolhe beneficiário. Toque nos cartões para ver cada característica.',html:()=>W.flips([
      ['Natureza','Ato <em>unilateral, gratuito e formal</em>. Não depende de aceitação de ninguém.'],
      ['Forma','Só por <em>escritura pública ou termo nos autos</em> (art. 1.806). Verbal ou particular não existe.'],
      ['Efeito','A quota <em>volta ao monte</em>. A transmissão ao renunciante tem-se por não verificada (art. 1.804, p.u.).'],
      ['Irrevogável','Feita, <em>não se retrata</em> (art. 1.812). Também não pode ser parcial, sob condição ou a termo (art. 1.808).']])+
      `<div class="callout"><b>Cuidado com os números:</b> a forma da renúncia está no art. 1.806 e a irrevogabilidade, no art. 1.812. Muitos resumos citam por engano os arts. 1.804 e 1.805, que tratam da aceitação.</div>`},
    {id:'sim',nav:'Simulador de quotas',h:'Para onde vai a quota',lead:'Na renúncia não há representação. Faça os filhos renunciarem e veja a herança se redistribuir.',html:renunciaSim},
    {id:'trans',nav:'Abdicativa ou translativa',h:'Renunciar ou ceder',lead:'"Renunciar em favor de alguém" é cessão disfarçada. Rode as duas animações e compare o caminho da quota.',html:renunciaFlow},
    {id:'conj',nav:'Cônjuge',h:'Precisa da anuência do cônjuge?',lead:'Depende do regime de bens. Escolha um.',html:()=>W.picker({opts:[
      {l:'Comunhão universal',v:1,c:'seal',t:'Sim',d:'A herança integraria o patrimônio comum do casal.'},
      {l:'Comunhão parcial',v:.5,c:'brass',t:'Depende',d:'Se os bens forem comuns, sim. Se forem particulares do herdeiro, não.'},
      {l:'Separação obrigatória',v:0,c:'sage',t:'Não',d:'Não há comunicação patrimonial (art. 1.641).'},
      {l:'Separação convencional',v:0,c:'sage',t:'Não',d:'Os bens são exclusivos de cada cônjuge (art. 1.687).'},
      {l:'Participação final nos aquestos',v:1,c:'seal',t:'Sim',d:'Há comunicação de aquestos ao final do casamento.'},
      {l:'União estável sem contrato',v:.5,c:'brass',t:'Depende',d:'Em regra, aplica-se a comunhão parcial.'}]})+
      `<p style="color:var(--muted);margin-top:16px">Na dúvida, colher a anuência custa menos do que anular a renúncia depois. Cartórios e juízes costumam exigi-la quando a renúncia parece feita para esvaziar a meação.</p>`},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil. Abra cada um.',html:()=>W.arts([
      ['1.793','Cessão por escritura','O herdeiro pode ceder sua quota, total ou parcialmente, por escritura pública. É a via correta para quem quer beneficiar alguém.'],
      ['1.794','Preferência','Cedida a estranho, os coerdeiros podem adquirir a quota em igualdade de condições.'],
      ['1.804, p.u.','Efeito retroativo','Com a renúncia, a transmissão ao herdeiro tem-se por não verificada.'],
      ['1.806','Forma','A renúncia deve constar expressamente de instrumento público ou termo judicial.'],
      ['1.808','Indivisível','Não se renuncia em parte, sob condição ou a termo. Quem herda por títulos diferentes pode aceitar um e renunciar ao outro.'],
      ['1.810','Acrescer','A parte do renunciante acresce à dos outros herdeiros da mesma classe.'],
      ['1.811','Todos renunciam','Ninguém sucede representando renunciante. Se todos da mesma classe renunciarem, os filhos deles herdam por direito próprio e por cabeça.'],
      ['1.812','Irrevogável','Aceitação e renúncia da herança são irrevogáveis.'],
      ['1.813','Credores','Credores prejudicados podem aceitar em nome do renunciante, com autorização judicial, em 30 dias. O que sobrar vai aos demais herdeiros.']])}
  ]
});

/* ---------- Aula 5 · Cessão de direitos hereditários ---------- */
function propsTable(rows){return `<dl class="props">${rows.map(([k,v,c])=>`<div><dt>${k}</dt><dd><span class="chip ${c||'none'}">${v}</span></dd></div>`).join('')}</dl>`}
function preferencia(){
  const id=uid('pf');
  later(()=>{
    const root=$('#'+id),r=$('input',root);const s={quem:'estranho',ofer:false};
    function render(){const d=+r.value;$('.pfd',root).textContent=d+' dias';
      $$('[data-k]',root).forEach(b=>b.setAttribute('aria-pressed',String(s[b.dataset.k])===b.dataset.v));
      $('.pfmark',root).style.left=Math.min(d,365)/365*100+'%';
      let v;
      if(s.quem==='herdeiro')v={tone:'ok',t:'Cessão livre',d:'Entre coerdeiros não há preferência a respeitar.'};
      else if(s.ofer)v={tone:'ok',t:'Cessão válida',d:'Os coerdeiros foram consultados em igualdade de condições e não quiseram a quota (art. 1.794).'};
      else if(d<=180)v={tone:'warn',t:'Um coerdeiro pode tomar a quota',d:`Faltam ${180-d} dias. Ele deposita o preço e pede a quota para si em juízo (art. 1.795).`};
      else v={tone:'bad',t:'O prazo acabou',d:'Passados 180 dias da transmissão, o coerdeiro preterido decaiu do direito. A cessão ao estranho se consolida.'};
      const o=$('.wzout',root);o.className='wzout '+v.tone;o.innerHTML=`<b>${v.t}</b><p>${v.d}</p>`}
    root.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;s[b.dataset.k]=b.dataset.k==='ofer'?b.dataset.v==='true':b.dataset.v;render()});
    r.addEventListener('input',render);render();
  });
  return `<div class="card" id="${id}"><div class="wzqs">
    <div class="wzq"><span>Para quem a quota foi cedida?</span><div class="seg"><button data-k="quem" data-v="herdeiro">Outro herdeiro</button><button data-k="quem" data-v="estranho">Um estranho</button></div></div>
    <div class="wzq"><span>A quota foi oferecida antes aos coerdeiros?</span><div class="seg"><button data-k="ofer" data-v="true">Sim</button><button data-k="ofer" data-v="false">Não</button></div></div></div>
    <label class="lab" style="margin-top:18px;display:block" for="${id}-r">Dias desde a transmissão: <output class="pfd num"></output></label>
    <div class="pftrack"><i class="pf180"><span>180 dias</span></i><i class="pfmark"></i></div><input id="${id}-r" type="range" min="0" max="365" value="90">
    <div class="wzout" aria-live="polite"></div></div>`;
}
defLesson('cessao',{
  hero:()=>heroSeal('ESCRITURA PÚBLICA • PREFERÊNCIA DOS COERDEIROS • 180 DIAS • ','Cedo','art. 1.793'),
  title:['Cessão','de direitos'],
  lead:'Quem quer beneficiar alguém com a sua quota não renuncia: cede. A diferença muda a forma, o imposto e o direito dos outros herdeiros.',
  sections:[
    {id:'tres',nav:'Três caminhos',h:'Renunciar, "renunciar em favor" ou ceder',lead:'Escolha cada caminho e compare.',html:()=>W.tabs([
      {l:'Renúncia abdicativa',html:`<div class="card">${propsTable([['Beneficiário','Nenhum','ok'],['Forma','Escritura ou termo judicial'],['Destino da quota','Volta ao monte'],['ITCMD da transmissão','Não incide','ok'],['Precisa de aceitação?','Não']])}<p class="hint" style="margin-top:12px">É a renúncia de verdade: o herdeiro sai, e a lei redistribui.</p></div>`},
      {l:'"Renúncia" translativa',html:`<div class="card">${propsTable([['Beneficiário','Escolhido','bad'],['Forma','Vício: não vale como renúncia','bad'],['Destino da quota','Vai ao escolhido'],['ITCMD','Incide','bad'],['Precisa de aceitação?','Sim, do beneficiário']])}<p class="hint" style="margin-top:12px">Parece renúncia, mas é cessão disfarçada. A doutrina e a jurisprudência a tratam como cessão.</p></div>`},
      {l:'Cessão',html:`<div class="card">${propsTable([['Beneficiário','Escolhido','ok'],['Forma','Escritura pública','ok'],['Destino da quota','Vai ao cessionário'],['ITCMD (ou ITBI, se onerosa)','Incide','warn'],['Precisa de aceitação?','Sim, do cessionário']])}<p class="hint" style="margin-top:12px">O caminho correto para beneficiar alguém. Pode ser gratuita ou onerosa, total ou parcial.</p></div>`}])},
    {id:'preferencia',nav:'Preferência',h:'O direito de preferência',lead:'Cedida a quota a um estranho, os coerdeiros têm preferência. Mexa nas condições.',html:preferencia},
    {id:'pode',nav:'Pode ou não pode',h:'Pode ou não pode?',lead:'Os limites da cessão. Classifique.',html:()=>W.classify({buckets:['Pode','Não pode'],items:[
      ['Ceder toda a quota a um amigo, por escritura pública.',0,'É a cessão do art. 1.793.'],
      ['Ceder a quota por contrato particular com firma reconhecida.',1,'A cessão exige escritura pública (art. 1.793).'],
      ['Ceder "o apartamento da praia" antes da partilha.',1,'A cessão de bem singular é ineficaz enquanto a herança for indivisa (art. 1.793, §2º).'],
      ['Ceder só metade da quota.',0,'A cessão pode ser total ou parcial.'],
      ['Desfazer a cessão porque se arrependeu.',1,'Feita, é irrevogável, salvo vício de consentimento ou fraude.'],
      ['Ceder a herança do pai, que ainda está vivo.',1,'Herança de pessoa viva não pode ser objeto de contrato (art. 426).']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['426','Pessoa viva','Não pode ser objeto de contrato a herança de pessoa viva.'],
      ['1.793','Cessão','O direito à sucessão aberta e o quinhão podem ser objeto de cessão por escritura pública.'],
      ['1.793, §2º','Bem singular','É ineficaz a cessão de bem da herança considerado singularmente.'],
      ['1.794','Preferência','O coerdeiro não pode ceder sua quota a estranho se outro coerdeiro a quiser, tanto por tanto.'],
      ['1.795','180 dias','O coerdeiro preterido, depositado o preço, pode haver para si a quota, se o requerer até 180 dias após a transmissão.'],
      ['1.805, §2º','Não é aceitação','A cessão gratuita, pura e simples, aos demais coerdeiros não importa aceitação.']])}
  ]
});

/* ---------- Aula 6 · Indignidade e deserdação ---------- */
defLesson('exclusao',{
  hero:()=>heroSeal('INDIGNIDADE POR LEI • DESERDAÇÃO POR TESTAMENTO • ','Excluído','arts. 1.814 e 1.961'),
  title:['Indignidade','e deserdação'],
  lead:'As duas formas de afastar um herdeiro da sucessão: uma vem da lei, a outra da vontade do testador. Em ambas, os filhos do excluído não pagam pela culpa dele.',
  sections:[
    {id:'comparar',nav:'Uma ou outra',h:'Indignidade, deserdação ou as duas?',lead:'Classifique cada característica.',html:()=>W.classify({buckets:['Indignidade','Deserdação','Ambas'],items:[
      ['Decorre diretamente da lei.',0,'É sanção legal (art. 1.814).'],
      ['Exige testamento com a causa declarada.',1,'Arts. 1.961 e 1.964.'],
      ['Atinge só herdeiros necessários.',1,'A deserdação só alcança descendentes, ascendentes e cônjuge.'],
      ['Pode atingir um legatário.',0,'A indignidade alcança herdeiros e legatários.'],
      ['Tentar matar o autor da herança é causa.',2,'As causas do art. 1.814 servem também para deserdar (arts. 1.962 e 1.963).'],
      ['Ofensa física do filho contra o pai é causa.',1,'Causa própria de deserdação dos descendentes (art. 1.962, I).'],
      ['Os descendentes do excluído herdam no lugar dele.',2,'Os efeitos são pessoais (art. 1.816); a doutrina aplica o mesmo à deserdação.']]})},
    {id:'caminho',nav:'Como se exclui',h:'A exclusão não é automática',lead:'Em regra, é preciso ação. Responda e veja o resultado.',html:()=>W.wizard({qs:[['penal','Há condenação criminal transitada em julgado pelo fato?'],['acao','Alguém propôs a ação de exclusão?'],['prazo','A ação veio em até 4 anos da abertura da sucessão?']],init:{penal:false,acao:true,prazo:true},
      verdict:a=>a.penal?{tone:'bad',t:'Excluído de imediato',d:'Com a condenação penal transitada em julgado, a exclusão independe de ação civil (art. 1.815-A, Lei 14.661/2023).'}:
        !a.acao?{tone:'ok',t:'Continua herdeiro',d:'Sem condenação penal e sem ação, a indignidade não opera sozinha (art. 1.815).'}:
        !a.prazo?{tone:'ok',t:'Continua herdeiro',d:'O direito de pedir a exclusão se extingue em 4 anos, contados da abertura da sucessão (art. 1.815, §1º).'}:
        {tone:'bad',t:'Excluído, se a sentença acolher',d:'A exclusão é declarada por sentença na ação de indignidade (art. 1.815).'}})},
    {id:'filhos',nav:'Os filhos do excluído',h:'E os filhos do excluído?',lead:'Bruno foi declarado indigno. Troque a situação dele para "Renunciou" e compare com o que acontece com Duda e Enzo.',html:()=>W.tree({filhos:[{n:'Ana',st:'vivo',comum:true,netos:['Bia']},{n:'Bruno',st:'indigno',comum:true,netos:['Duda','Enzo']},{n:'Clara',st:'vivo',comum:true,netos:[]}],total:120000,statuses:['vivo','renunciou','indigno']})},
    {id:'causas',nav:'Causas',h:'As causas, uma a uma',lead:'A deserdação soma às causas de indignidade quatro causas próprias, em cada direção.',html:()=>W.flips([
      ['Indignidade','Homicídio doloso ou tentativa; <em>acusação caluniosa</em> ou crime contra a honra; violência ou fraude contra a liberdade de testar (art. 1.814).'],
      ['Pais deserdam filhos','Ofensa física, injúria grave, relações ilícitas com madrasta ou padrasto, <em>desamparo</em> do ascendente doente (art. 1.962).'],
      ['Filhos deserdam pais','Ofensa física, injúria grave, relações ilícitas com o cônjuge do filho ou neto, <em>desamparo</em> do filho com deficiência ou doente (art. 1.963).'],
      ['Perdão','O ofendido pode <em>reabilitar</em> o indigno em testamento ou outro ato autêntico (art. 1.818).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['1.814','Causas','São excluídos os que cometeram homicídio doloso ou tentativa, acusação caluniosa ou crime contra a honra, ou violência e fraude contra a liberdade de testar.'],
      ['1.815','Sentença','A exclusão, nos casos de indignidade, será declarada por sentença. O direito de demandá-la extingue-se em 4 anos da abertura da sucessão.'],
      ['1.815-A','Condenação penal','O trânsito em julgado da sentença penal condenatória acarreta a imediata exclusão do herdeiro ou legatário indigno.'],
      ['1.816','Efeitos pessoais','Os descendentes do excluído sucedem como se ele morto fosse antes da abertura da sucessão.'],
      ['1.818','Reabilitação','Quem incorreu em indignidade é admitido a suceder se o ofendido o reabilitou em testamento ou ato autêntico.'],
      ['1.961','Deserdação','Os herdeiros necessários podem ser deserdados nos casos em que podem ser excluídos da sucessão.'],
      ['1.964','Causa expressa','Só com expressa declaração de causa pode a deserdação ser ordenada em testamento.'],
      ['1.965','Prova','Ao herdeiro instituído, ou a quem aproveite a deserdação, incumbe provar a causa, em 4 anos da abertura do testamento.']])}
  ]
});
