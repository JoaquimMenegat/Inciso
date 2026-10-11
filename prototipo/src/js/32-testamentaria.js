/* ================= Unidade II · Sucessão testamentária ================= */

/* ---------- Aula 14 · Testamento: validade, limites e capacidade ---------- */
function capacidade(){
  const id=uid('cp');
  later(()=>{
    const root=$('#'+id),r=$('input',root),s={luc:true,dep:false};
    function render(){const age=+r.value;$('.cpa',root).textContent=age+' anos';
      $$('[data-k]',root).forEach(b=>b.setAttribute('aria-pressed',String(s[b.dataset.k])===b.dataset.v));
      const v=age<16?{tone:'bad',t:'Não pode testar',d:'Só os maiores de 16 anos podem testar (art. 1.860, p.u.).'}:
        !s.luc?{tone:'bad',t:'Testamento inválido',d:'Sem pleno discernimento no momento do ato, o testamento não vale, nem se valida se a pessoa recuperar a lucidez depois (arts. 1.860 e 1.861).'}:
        s.dep?{tone:'ok',t:'Testamento válido',d:'A capacidade se afere no momento do ato. A incapacidade superveniente não invalida o testamento (art. 1.861).'}:
        {tone:'ok',t:'Pode testar',d:age<18?'Aos '+age+' anos já pode testar, e sem assistência dos pais: o testamento é ato personalíssimo.':'Maior de 16 anos e com discernimento no ato.'};
      const o=$('.wzout',root);o.className='wzout '+v.tone;o.innerHTML=`<b>${v.t}</b><p>${v.d}</p>`}
    r.addEventListener('input',render);root.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;s[b.dataset.k]=b.dataset.v==='true';render()});render();
  });
  return `<div class="card" id="${id}"><label class="lab" for="${id}-r">Idade no dia do testamento: <output class="cpa num"></output></label><input id="${id}-r" type="range" min="12" max="95" value="17">
    <div class="wzqs" style="margin-top:14px"><div class="wzq"><span>Tinha pleno discernimento no momento do ato?</span><div class="seg"><button data-k="luc" data-v="true">Sim</button><button data-k="luc" data-v="false">Não</button></div></div>
    <div class="wzq"><span>Perdeu a lucidez anos depois, por doença?</span><div class="seg"><button data-k="dep" data-v="true">Sim</button><button data-k="dep" data-v="false">Não</button></div></div></div>
    <div class="wzout" aria-live="polite"></div></div>`;
}
defLesson('testamento',{
  hero:()=>heroSeal('UNILATERAL • PERSONALÍSSIMO • REVOGÁVEL • SOLENE • ','Testo','art. 1.857'),
  title:['Testamento','e capacidade'],
  lead:'O maior exercício da autonomia privada depois da morte, e os limites que a lei impõe a ele: quem pode testar, quem pode receber e o que se pode dispor.',
  sections:[
    {id:'natureza',nav:'Natureza',h:'O que é um testamento',lead:'É negócio jurídico, e também um instrumento de afetividade: serve para o testador dizer quem importou.',html:()=>W.flips([
      ['Unilateral','Basta a <em>vontade do testador</em>. Ninguém precisa aceitar para ele existir.'],
      ['Personalíssimo','Não se delega e <em>não se faz a quatro mãos</em> (arts. 1.858 e 1.863).'],
      ['Revogável','Pode ser mudado <em>a qualquer tempo</em> pelo testador.'],
      ['Solene','A forma é da essência: sem ela, <em>nulidade absoluta</em>.']])},
    {id:'capacidade',nav:'Quem pode testar',h:'Quem pode testar',lead:'A capacidade ativa se mede no dia do ato. Mexa na idade e nas condições.',html:capacidade},
    {id:'receber',nav:'Quem pode receber',h:'Quem pode receber',lead:'Capacidade passiva: algumas pessoas não podem ser beneficiadas, para evitar que influenciem a vontade do testador. Classifique.',html:()=>W.classify({buckets:['Pode receber','Não pode'],items:[
      ['Um amigo de infância.',0,'Qualquer pessoa existente ao tempo da morte.'],
      ['Uma das testemunhas do testamento.',1,'Quem atesta o ato não pode lucrar com ele (art. 1.801, II).'],
      ['A pessoa que escreveu o testamento a pedido do testador.',1,'Art. 1.801, I.'],
      ['O irmão de quem escreveu o testamento a rogo.',1,'O art. 1.801, I alcança também cônjuge, ascendentes e irmãos de quem escreveu.'],
      ['Os filhos ainda não concebidos de uma sobrinha indicada.',0,'Prole eventual, se concebida em até 2 anos da abertura (arts. 1.799, I e 1.800, §4º).'],
      ['O concubino do testador casado que vivia com a esposa.',1,'Art. 1.801, III.'],
      ['Uma fundação que o próprio testamento manda criar.',0,'Art. 1.799, III.']]})},
    {id:'limites',nav:'Limites',h:'O que o testamento pode dizer',lead:'A liberdade de testar tem limites materiais. Classifique cada cláusula.',html:()=>W.classify({buckets:['Válida','Reduzida','Inválida'],items:[
      ['"Deixo meu carro ao meu sobrinho Paulo." O testador tem filhos.',0,'Legado dentro da parte disponível.'],
      ['"Deixo 70% do meu patrimônio ao meu amigo." O testador tem filhos.',1,'Excede a metade disponível: reduz-se aos limites dela (art. 1.967).'],
      ['"Deixo minha casa a quem tiver bom coração no bairro."',2,'Pessoa incerta, impossível de identificar: nula (art. 1.900, II).'],
      ['"Excluo meu filho da herança por ele ser homossexual."',2,'Discriminatória e sem causa legal de deserdação: ofende a dignidade humana.'],
      ['"Deixo à Ana o terreno do meu vizinho."',2,'Legado de coisa alheia é ineficaz (art. 1.912).'],
      ['"Deixo 30% a uma ONG." O testador não tem herdeiros necessários.',0,'Sem herdeiros necessários, a liberdade de testar é total.']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['1.857','Testamento','Toda pessoa capaz pode dispor, por testamento, da totalidade dos seus bens, ou de parte deles, para depois de sua morte. A legítima não pode ser incluída.'],
      ['1.858','Personalíssimo','O testamento é ato personalíssimo, podendo ser mudado a qualquer tempo.'],
      ['1.860','Capacidade','Não podem testar os incapazes e os que não tiverem pleno discernimento. Podem testar os maiores de 16 anos.'],
      ['1.861','Momento','A incapacidade superveniente não invalida o testamento, nem o testamento do incapaz se valida com a capacidade posterior.'],
      ['1.799','Quem pode receber','Podem ser chamados os filhos ainda não concebidos de pessoas indicadas, as pessoas jurídicas e as fundações a constituir.'],
      ['1.801','Quem não pode','Quem escreveu a rogo e sua família próxima, as testemunhas, o concubino do testador casado e o tabelião.'],
      ['1.900','Nulidades','É nula a disposição em favor de pessoa incerta, cuja identidade não se possa averiguar.'],
      ['1.967','Redução','As disposições que excederem a parte disponível reduzem-se aos limites dela.']])}
  ]
});

/* ---------- Aula 15 · Formas ordinárias e impugnação ---------- */
const IC={
  person:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/></svg>',
  stamp:'<svg viewBox="0 0 24 24"><path d="M9 3h6l-1 7h-4z"/><path d="M5 14h14v3H5z"/><path d="M7 20h10"/></svg>',
  lock:'<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  arch:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="5" rx="1"/><path d="M5 9v11h14V9M10 13h4"/></svg>',
  gavel:'<svg viewBox="0 0 24 24"><path d="M13 4l7 7M10 7l7 7M12 5l-5 5 4 4 5-5M4 20l6-6"/></svg>',
  pen:'<svg viewBox="0 0 24 24"><path d="M4 20l4-1 11-11-3-3L5 16z"/></svg>'
};
function scene(actors){return `<div class="scene">${actors.map((a,i)=>`<div class="actor${a.off?' off':''}" style="--i:${i}"><div class="ics">${(a.n?Array(a.n).fill(IC[a.ic]):[IC[a.ic]]).join('')}</div><span>${a.l}</span></div>`).join('')}</div>`}
function prazoImp(){
  const id=uid('pi');
  later(()=>{
    const root=$('#'+id),r=$('input',root);
    function render(){const y=+r.value;$('.piy',root).textContent=y===0?'menos de 1 ano':y+(y===1?' ano':' anos');$('.pimark',root).style.left=y/8*100+'%';
      const v=y<=5?{tone:'ok',t:'Ainda pode impugnar',d:`Restam ${5-y===0?'poucos meses':5-y+(5-y===1?' ano':' anos')} do prazo de 5 anos contado do registro do testamento (art. 1.859).`}:{tone:'bad',t:'Prazo extinto',d:'Passados 5 anos do registro, extingue-se o direito de impugnar a validade do testamento. Não importa quando o vício foi descoberto.'};
      const o=$('.wzout',root);o.className='wzout '+v.tone;o.innerHTML=`<b>${v.t}</b><p>${v.d}</p>`}
    r.addEventListener('input',render);render();
  });
  return `<div class="card" id="${id}"><div class="pitrack"><i class="pi5"><span>5 anos</span></i><i class="pimark"></i></div>
    <label class="lab" for="${id}-r">Tempo desde o registro do testamento: <output class="piy num"></output></label><input id="${id}-r" type="range" min="0" max="8" value="3">
    <div class="wzout" aria-live="polite"></div><p class="hint" style="margin:0">Invalidado o testamento, os efeitos retroagem à data da morte e a sucessão legítima toma o lugar dele.</p></div>`;
}
defLesson('formas',{
  hero:()=>heroSeal('PÚBLICO • CERRADO • PARTICULAR • FAVOR TESTAMENTI • ','Formas','art. 1.862'),
  title:['Formas','e impugnação'],
  lead:'As três formas ordinárias de testamento, o que cada uma exige e como o direito tenta salvar a vontade do testador quando há falhas.',
  sections:[
    {id:'tres',nav:'As três formas',h:'Público, cerrado ou particular',lead:'Escolha uma forma e veja quem participa do ato.',html:()=>W.tabs([
      {l:'Público',html:`<div class="card">${scene([{ic:'person',l:'Testador dita'},{ic:'stamp',l:'Tabelião redige'},{ic:'person',n:2,l:'2 testemunhas'},{ic:'arch',l:'Fica no cartório'},{ic:'gavel',l:'Sem confirmação judicial',off:1}])}
        <ol class="rule"><li>O testador dita ou leva minuta ao tabelião.</li><li>O tabelião lavra no livro de notas.</li><li>Leitura em voz alta, a um só tempo, ao testador e a duas testemunhas.</li><li>Assinam testador, testemunhas e tabelião (art. 1.864).</li></ol>
        ${propsTable([['Sigilo','Nenhum','warn'],['Segurança','Alta','ok'],['Custo','Alto','warn'],['Única forma para o cego','Sim (art. 1.867)','ok']])}</div>`},
      {l:'Cerrado',html:`<div class="card">${scene([{ic:'pen',l:'Testador escreve e assina'},{ic:'lock',l:'Costurado e lacrado'},{ic:'stamp',l:'Tabelião aprova'},{ic:'person',n:2,l:'2 testemunhas'},{ic:'gavel',l:'Aberto pelo juiz'}])}
        <ol class="rule"><li>O testador escreve (ou alguém a seu rogo) e assina.</li><li>Entrega ao tabelião diante de duas testemunhas, dizendo que é seu testamento.</li><li>O tabelião lavra o auto de aprovação, sem ler o conteúdo, e lacra.</li><li>Depois da morte, o juiz abre e verifica o lacre (arts. 1.868 a 1.875).</li></ol>
        ${propsTable([['Sigilo','Absoluto','ok'],['Risco','Extravio ou lacre violado','bad'],['Custo','Médio','warn'],['Quem não sabe ler','Não pode usar (art. 1.872)','bad']])}</div>`},
      {l:'Particular',html:`<div class="card">${scene([{ic:'pen',l:'Testador escreve'},{ic:'stamp',l:'Sem tabelião',off:1},{ic:'person',n:3,l:'3 testemunhas'},{ic:'arch',l:'Guarda particular',off:1},{ic:'gavel',l:'Confirmado em juízo'}])}
        <ol class="rule"><li>Escrito de próprio punho ou digitado, sem rasuras nem espaços em branco.</li><li>Lido e assinado diante de três testemunhas, que também assinam (art. 1.876).</li><li>Depois da morte, as testemunhas confirmam em juízo a autenticidade.</li></ol>
        ${propsTable([['Sigilo','Moderado','warn'],['Fragilidade de prova','Alta','bad'],['Custo','Baixo','ok'],['Tabelião','Dispensado','ok']])}</div>`}])},
    {id:'qual',nav:'Qual escolher',h:'Qual forma para quem',lead:'Cada forma resolve um problema e cria outro. Classifique.',html:()=>W.classify({buckets:['Público','Cerrado','Particular'],items:[
      ['Quer que ninguém conheça o conteúdo até a morte.',1,'Só o cerrado garante sigilo do conteúdo.'],
      ['É cego.',0,'Ao cego só se permite o testamento público (art. 1.867).'],
      ['Quer gastar o mínimo e escrever em casa.',2,'Dispensa tabelião, mas exige três testemunhas.'],
      ['Quer segurança máxima, com o original guardado em cartório.',0,'Lavrado e arquivado no livro de notas.'],
      ['Não sabe ler.',0,'Quem não sabe ou não pode ler não faz cerrado (art. 1.872).']]})},
    {id:'favor',nav:'Favor testamenti',h:'Salvar a vontade do testador',lead:'O testador não pode refazer o testamento: está morto. Por isso, na dúvida, preserva-se. Mas há vícios que nada salva.',html:()=>W.classify({buckets:['Preserva','Não preserva'],items:[
      ['O nome do herdeiro foi grafado com erro, mas é fácil identificá-lo.',0,'Erro material que não afeta a vontade (art. 1.899).'],
      ['O próprio testador rompeu o lacre do testamento cerrado.',1,'Considera-se revogado (art. 1.972).'],
      ['Marido e mulher fizeram um testamento só, os dois juntos.',1,'Testamento conjuntivo é proibido (art. 1.863).'],
      ['Uma cláusula é nula, mas as outras dez são válidas.',0,'Nulidade parcial: preservam-se as demais.'],
      ['Testamento particular sem nenhuma testemunha.',1,'Requisito essencial da forma (art. 1.876).'],
      ['Uma testemunha assinou fora da ordem prevista.',0,'Falha que não compromete a autenticidade.']]})},
    {id:'prazo',nav:'Prazo',h:'Até quando se pode impugnar',lead:'O prazo conta do registro do testamento, não da morte nem da descoberta do vício.',html:prazoImp},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Civil.',html:()=>W.arts([
      ['1.859','Prazo','Extingue-se em 5 anos o direito de impugnar a validade do testamento, contado da data do seu registro.'],
      ['1.862','Formas','São testamentos ordinários o público, o cerrado e o particular.'],
      ['1.863','Conjuntivo','É proibido o testamento conjuntivo, seja simultâneo, recíproco ou correspectivo.'],
      ['1.864','Público','Escrito por tabelião, lido em voz alta ao testador e a duas testemunhas a um só tempo, e assinado por todos.'],
      ['1.867','Cego','Ao cego só se permite o testamento público, lido duas vezes em voz alta.'],
      ['1.868','Cerrado','Escrito pelo testador ou a seu rogo, e aprovado pelo tabelião na presença de duas testemunhas.'],
      ['1.876','Particular','Escrito de próprio punho ou mecanicamente, lido e assinado na presença de pelo menos três testemunhas.'],
      ['1.899','Interpretação','Quando a cláusula admitir interpretações diferentes, prevalece a que melhor assegure a vontade do testador.']])}
  ]
});

/* ---------- Aula 16 · Laboratório de partilha ---------- */
const LAB_FILHOS=['Ana','Bruno','Clara','Diego','Elisa','Fábio'];
const LAB_NETOS=[['Bia','Caio','Dora'],['Eva','Gil','Hugo'],['Iara','Joel','Lia'],['Malu','Nina','Otto'],['Pia','Rui','Sara'],['Téo','Ugo','Vera']];
function labCfgToArgs(c){
  const F=c.filhos.map((f,i)=>({n:f.n,st:f.st,comum:c.conj?f.comum:true,netos:LAB_NETOS[i].slice(0,f.netos)}));
  return {F,conj:c.conj?{regime:c.regime,aq:c.aq,pt:c.pt}:null,total:c.conj?0:c.pt};
}
function labRun(c){const a=labCfgToArgs(c);return partilhaDesc(a.F,a.conj,a.total)}
const CASES=[
  {id:'k1',q:'Roberto morreu deixando R$ 600 mil, todos bens particulares. Era casado em comunhão parcial com Sônia, mãe dos três filhos dele. Quanto recebe Sônia?',who:'conj',
   cfg:{conj:true,regime:'cp',aq:0,pt:600000,filhos:[{n:'Ana',st:'vivo',comum:true,netos:0},{n:'Bruno',st:'vivo',comum:true,netos:0},{n:'Clara',st:'vivo',comum:true,netos:0}]},opts:[150000,0,200000,300000]},
  {id:'k2',q:'Helena, viúva, deixou R$ 300 mil e três filhos. Bruno renunciou. Ana morreu antes da mãe, deixando Bia e Caio. Clara está viva. Quanto recebe Bia?',who:'Bia',
   cfg:{conj:false,regime:'cp',aq:0,pt:300000,filhos:[{n:'Ana',st:'premorto',comum:true,netos:2},{n:'Bruno',st:'renunciou',comum:true,netos:1},{n:'Clara',st:'vivo',comum:true,netos:0}]},opts:[75000,50000,100000,0]},
  {id:'k3',q:'Marcos, casado em separação convencional com Lúcia, deixou R$ 1 milhão e quatro filhos, todos também de Lúcia. Quanto recebe cada filho?',who:'Ana',
   cfg:{conj:true,regime:'sc',aq:0,pt:1000000,filhos:[{n:'Ana',st:'vivo',comum:true,netos:0},{n:'Bruno',st:'vivo',comum:true,netos:0},{n:'Clara',st:'vivo',comum:true,netos:0},{n:'Diego',st:'vivo',comum:true,netos:0}]},opts:[187500,200000,250000,166667]},
  {id:'k4',q:'Paulo, casado em comunhão universal com Rita, deixou patrimônio de R$ 800 mil e dois filhos. Bruno foi declarado indigno e tem uma filha, Eva. Quanto recebe Eva?',who:'Eva',
   cfg:{conj:true,regime:'cu',aq:800000,pt:0,filhos:[{n:'Ana',st:'vivo',comum:true,netos:0},{n:'Bruno',st:'indigno',comum:true,netos:1}]},opts:[200000,0,100000,400000]}
];
function caseAnswer(k){const x=labRun(k.cfg);return k.who==='conj'?x.conj:(x.rows.find(r=>r.n===k.who)||{v:0}).v}
let LAB=null;
function labView(){
  const id=uid('lab');
  later(()=>{
    const root=$('#'+id);
    if(!LAB)LAB=JSON.parse(JSON.stringify(CASES[0].cfg));
    function renderIn(){
      $$('.lb-conj button',root).forEach(b=>b.setAttribute('aria-pressed',String(LAB.conj)===b.dataset.v));
      $$('.lb-cj',root).forEach(x=>x.hidden=!LAB.conj);$('.lb-pt-l',root).textContent=LAB.conj?'Bens particulares do falecido':'Patrimônio do falecido';
      $$('.lb-reg button',root).forEach(b=>b.setAttribute('aria-pressed',b.dataset.r===LAB.regime));
      $('.lb-aq',root).value=LAB.aq;$('.lb-pt',root).value=LAB.pt;
      $('.lb-filhos',root).innerHTML=LAB.filhos.map((f,i)=>`<li data-i="${i}"><b>${f.n}</b>
        <div class="seg mini">${ST.map(([k,l])=>`<button data-st="${k}" aria-pressed="${f.st===k}">${l}</button>`).join('')}</div>
        ${LAB.conj?`<button class="chip ${f.comum?'ok':'warn'} lb-comum">${f.comum?'filho do casal':'só do falecido'}</button>`:'<span></span>'}
        <div class="stp mini"><button data-n="-1" aria-label="Menos um neto">−</button><output class="num">${f.netos}</output><button data-n="1" aria-label="Mais um neto">+</button><small>netos</small></div>
        <button class="lb-del" aria-label="Remover ${f.n}">×</button></li>`).join('');
      $('.lb-add',root).disabled=LAB.filhos.length>=6;
      renderOut();
    }
    function renderOut(){
      const x=labRun(LAB),o=$('.lb-out',root),total=LAB.conj?LAB.aq+LAB.pt:LAB.pt;
      if(total<=0){o.innerHTML='<p class="eyebrow">Sem patrimônio</p><p>Informe o valor dos bens.</p>';return}
      if(x.vazio){o.innerHTML=`<p class="eyebrow">Nenhum descendente herda</p>${x.meacao?`<p>Meação do cônjuge: <b>${money(x.meacao)}</b></p>`:''}<ol class="rule">${x.why.map(w=>`<li>${w}</li>`).join('')}</ol>`;return}
      const C=['var(--sage)','color-mix(in srgb,var(--sage) 70%,var(--ink))','color-mix(in srgb,var(--sage) 55%,var(--paper))','var(--muted)','color-mix(in srgb,var(--sage) 40%,var(--brass))','color-mix(in srgb,var(--muted) 60%,var(--sage))'];
      const segs=[];if(x.meacao)segs.push(['Meação do cônjuge',x.meacao,'meacao']);if(x.conj)segs.push(['Herança do cônjuge',x.conj,'conj']);x.rows.forEach((r,i)=>segs.push([r.n,r.v,C[i%C.length],r.how]));
      o.innerHTML=`<div><p class="eyebrow">Monte-mor</p><p class="num" style="font-family:var(--serif);font-size:1.8rem">${money(total)}</p></div>
        <div class="stack">${segs.map(s=>`<i class="${s[2]==='meacao'?'seg-meacao':s[2]==='conj'?'seg-conj':''}" style="width:${s[1]/total*100}%;${s[2].startsWith('var')||s[2].startsWith('color')?'background:'+s[2]:''}" title="${s[0]}"></i>`).join('')}</div>
        <ul class="who">${segs.map(s=>`<li><i class="${s[2]==='meacao'?'seg-meacao':s[2]==='conj'?'seg-conj':''}" style="${s[2].startsWith('var')||s[2].startsWith('color')?'background:'+s[2]:''}"></i><span>${s[0]}${s[3]?` <small>${s[3]}</small>`:''}</span><b>${money(s[1])}</b></li>`).join('')}</ul>
        <ol class="rule">${x.why.map(w=>`<li>${w}</li>`).join('')}</ol>`;
    }
    root.addEventListener('click',e=>{
      const t=e.target;let b;
      if((b=t.closest('.lb-conj button'))){LAB.conj=b.dataset.v==='true';renderIn();return}
      if((b=t.closest('.lb-reg button'))){LAB.regime=b.dataset.r;renderIn();return}
      const li=t.closest('.lb-filhos li');
      if(li){const f=LAB.filhos[+li.dataset.i];
        if((b=t.closest('[data-st]'))){f.st=b.dataset.st;renderIn();return}
        if(t.closest('.lb-comum')){f.comum=!f.comum;renderIn();return}
        if((b=t.closest('[data-n]'))){f.netos=Math.max(0,Math.min(3,f.netos+(+b.dataset.n)));renderIn();return}
        if(t.closest('.lb-del')){LAB.filhos.splice(+li.dataset.i,1);renderIn();return}}
      if(t.closest('.lb-add')){const used=new Set(LAB.filhos.map(f=>f.n));const n=LAB_FILHOS.find(x=>!used.has(x));if(n){LAB.filhos.push({n,st:'vivo',comum:true,netos:0});LAB.filhos.sort((a,b)=>LAB_FILHOS.indexOf(a.n)-LAB_FILHOS.indexOf(b.n));renderIn()}}
    });
    $('.lb-aq',root).addEventListener('input',e=>{LAB.aq=Math.max(0,+e.target.value||0);renderOut()});
    $('.lb-pt',root).addEventListener('input',e=>{LAB.pt=Math.max(0,+e.target.value||0);renderOut()});
    root.addEventListener('lab:load',renderIn);
    renderIn();
  });
  return `<div class="labw" id="${id}"><div class="card lb-in">
      <div class="lbrow"><div><span class="lab">Deixou cônjuge ou companheiro?</span><div class="seg lb-conj"><button data-v="true">Sim</button><button data-v="false">Não</button></div></div>
        <div class="lb-cj"><span class="lab">Regime de bens</span><div class="seg lb-reg">${REGS.map(r=>`<button data-r="${r[0]}">${r[1]}</button>`).join('')}</div></div></div>
      <div class="lbrow"><div class="lb-cj"><label class="lab" for="${id}-aq">Bens adquiridos onerosamente no casamento</label><div class="money"><span>R$</span><input id="${id}-aq" class="lb-aq" type="number" min="0" step="50000" inputmode="numeric"></div></div>
        <div><label class="lab lb-pt-l" for="${id}-pt">Bens particulares do falecido</label><div class="money"><span>R$</span><input id="${id}-pt" class="lb-pt" type="number" min="0" step="50000" inputmode="numeric"></div></div></div>
      <div><span class="lab">Filhos</span><ul class="lb-filhos"></ul><button class="btn small lb-add">+ Adicionar filho</button></div>
    </div><div class="card cout lb-out" aria-live="polite"></div></div>`;
}
function casesView(){
  const id=uid('cs');
  later(()=>{
    const root=$('#'+id);
    root.addEventListener('click',e=>{
      const o=e.target.closest('.csopt');
      if(o){const card=o.closest('.case'),k=CASES[+card.dataset.i];if(card.dataset.done)return;card.dataset.done=1;
        const ans=caseAnswer(k),ok=Math.abs(+o.dataset.v-ans)<1;
        $$('.csopt',card).forEach(x=>{x.disabled=true;if(Math.abs(+x.dataset.v-ans)<1)x.classList.add('ok')});if(!ok)o.classList.add('no');
        const x=labRun(k.cfg);const w=$('.cswhy',card);w.innerHTML=`<b>${ok?'Correto.':'Não é essa.'}</b> A resposta é ${money(ans)}.<ol class="rule">${x.why.map(s=>`<li>${s}</li>`).join('')}</ol><button class="btn small csload">Abrir no laboratório</button>`;w.hidden=false;
        S.lab=S.lab||{solved:{}};S.lab.solved[k.id]=ok?1:0;bump(2);save();updateLessonBar('lab');return}
      const l=e.target.closest('.csload');
      if(l){const k=CASES[+l.closest('.case').dataset.i];LAB=JSON.parse(JSON.stringify(k.cfg));const lab=$('.labw');if(lab){lab.dispatchEvent(new Event('lab:load'));lab.scrollIntoView({behavior:'smooth',block:'start'})}}
    });
  });
  return `<div class="cases" id="${id}">${CASES.map((k,i)=>`<article class="case card" data-i="${i}"><p class="eyebrow">Caso ${i+1}</p><p class="csq">${k.q}</p>
    <div class="csopts">${shuffle(k.opts).map(v=>`<button class="csopt num" data-v="${v}">${money(v)}</button>`).join('')}</div><div class="cswhy" hidden></div></article>`).join('')}</div>`;
}
defLesson('lab',{
  hero:()=>heroSeal('REGIME • CONCORRÊNCIA • CLASSE • ESTIRPES • RESERVA • ','Partilha','seis passos'),
  title:['Laboratório','de partilha'],
  lead:'Monte qualquer família, mude regimes e situações, e veja a partilha passo a passo. Depois, resolva os casos.',
  noQuiz:true,
  progress:()=>{const L=S.lessons.lab,seen=['metodo','lab','casos'].filter(k=>L.seen[k]).length/3,sol=Object.values((S.lab||{}).solved||{}).filter(Boolean).length/CASES.length;return seen*.4+sol*.6},
  sections:[
    {id:'metodo',nav:'O método',h:'Seis passos que resolvem qualquer partilha',lead:'Um roteiro que resolve qualquer exercício de partilha. Avance passo a passo.',html:()=>W.timeline({steps:[
      {t:'Regime e meação',s:'passo 1',d:'Identifique o regime e separe a meação do sobrevivente. Meação não é herança.'},
      {t:'O cônjuge concorre?',s:'passo 2',d:'Aplique os "salvo se" do art. 1.829, I: comunhão universal, separação obrigatória e comunhão parcial sem bens particulares não concorrem.'},
      {t:'Classe convocada',s:'passo 3',d:'Descendentes; se não houver, ascendentes; se não, o cônjuge; se não, colaterais até o 4º grau.'},
      {t:'Conte estirpes',s:'passo 4',d:'Pré-morto ou indigno com filhos forma estirpe. Renunciante não forma: a parte acresce. Se todos renunciam, netos por cabeça.'},
      {t:'Reserva de 1/4',s:'passo 5',d:'Só se o cônjuge for ascendente de todos os herdeiros e houver 4 ou mais. Um filho de outra relação desliga a reserva.'},
      {t:'Divida cada estirpe',s:'passo 6',d:'Reparta internamente a parte de cada estirpe entre os netos, por igual.'}]})},
    {id:'lab',nav:'Laboratório',h:'Monte a família',lead:'Ligue o cônjuge, escolha o regime, ajuste os valores e a situação de cada filho. Cada filho pode ter até três netos.',html:labView},
    {id:'casos',nav:'Casos',h:'Resolva os casos',lead:'Escolha a resposta. Depois abra o caso no laboratório para ver a partilha completa.',html:casesView}
  ]
});
