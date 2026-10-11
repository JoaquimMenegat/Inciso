/* ================= Matéria: Crimes em Espécie ================= */
const CR_TOPICS=[
 {id:'cr-vida',nome:'Vida e integridade',mod:1},
 {id:'cr-pat',nome:'Patrimônio',mod:2},
 {id:'cr-fam',nome:'Família e incolumidade pública',mod:3},
 {id:'cr-fe',nome:'Fé pública e paz pública',mod:4}
];
const CR_MODS=[
 {n:1,u:'A',tit:'Homicídio e lesão corporal',t:'cr-vida',live:'cr-vida'},
 {n:2,u:'A',tit:'Furto, roubo e insignificância',t:'cr-pat',live:'cr-pat'},
 {n:3,u:'B',tit:'Crimes contra a família e a incolumidade pública',t:'cr-fam',live:'cr-fam'},
 {n:4,u:'B',tit:'Crimes contra a fé pública e a paz pública',t:'cr-fe',live:'cr-fe'}
];
const CR_UNITS=[['A','Parte I · Pessoa e patrimônio'],['B','Parte II · Coletividade']];
const CR_BANK=[
 {id:'cv1',t:'cr-vida',q:'Quem julga o homicídio doloso?',o:['O juiz singular','O Tribunal do Júri','O juizado especial'],a:1,e:'O júri é competente para os crimes dolosos contra a vida.',art:'CF, art. 5º, XXXVIII, d'},
 {id:'cv2',t:'cr-vida',q:'Matar por motivo fútil é:',o:['Homicídio privilegiado','Homicídio qualificado','Agravante genérica'],a:1,e:'O motivo fútil qualifica o homicídio (pena de 12 a 30 anos).',art:'Art. 121, §2º, II, CP'},
 {id:'cv3',t:'cr-vida',q:'Matar sob domínio de violenta emoção, logo após injusta provocação da vítima, é:',o:['Qualificado','Privilegiado, com redução de 1/6 a 1/3','Culposo'],a:1,e:'É causa de diminuição de pena, chamada de homicídio privilegiado.',art:'Art. 121, §1º, CP'},
 {id:'cv4',t:'cr-vida',q:'A vítima ficou 40 dias sem conseguir trabalhar. A lesão é:',o:['Leve','Grave','Gravíssima'],a:1,e:'Incapacidade para as ocupações habituais por mais de 30 dias torna a lesão grave.',art:'Art. 129, §1º, I, CP'},
 {id:'cv5',t:'cr-vida',q:'A lesão deixou deformidade permanente no rosto da vítima. Ela é:',o:['Grave','Gravíssima','Leve'],a:1,e:'A deformidade permanente é hipótese de lesão gravíssima.',art:'Art. 129, §2º, IV, CP'},
 {id:'cp1x',t:'cr-pat',q:'O que diferencia o roubo do furto?',o:['O valor da coisa','A violência ou grave ameaça à pessoa','O local do crime'],a:1,e:'O roubo é a subtração mediante grave ameaça ou violência à pessoa.',art:'Art. 157, CP'},
 {id:'cp2x',t:'cr-pat',q:'O agente furta a carteira e, ao ser perseguido, agride a vítima para garantir a fuga com o dinheiro. Ele comete:',o:['Furto e lesão corporal','Roubo impróprio','Roubo próprio'],a:1,e:'Violência empregada logo depois de subtraída a coisa, para assegurar a impunidade ou a detenção da coisa.',art:'Art. 157, §1º, CP'},
 {id:'cp3x',t:'cr-pat',q:'O furto praticado durante o repouso noturno:',o:['É qualificado','Tem a pena aumentada de 1/3','Não muda nada'],a:1,e:'É causa de aumento de pena de um terço.',art:'Art. 155, §1º, CP'},
 {id:'cp4x',t:'cr-pat',q:'Para o STF, a insignificância exige, entre outros vetores:',o:['Que o réu seja primário','Mínima ofensividade da conduta e inexpressividade da lesão','Que a vítima perdoe'],a:1,e:'Os vetores são mínima ofensividade, nenhuma periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão.',art:'STF, HC 84.412'},
 {id:'cp5x',t:'cr-pat',q:'Roubo seguido de morte (latrocínio) é julgado por quem?',o:['Tribunal do Júri','Juiz singular','Juizado especial'],a:1,e:'Latrocínio é crime contra o patrimônio; a competência é do juiz singular, não do júri.',art:'Súmula 603, STF'},
 {id:'cf1',t:'cr-fam',q:'Quem mantém duas famílias, mas só é casado com uma pessoa, comete bigamia?',o:['Sim','Não: bigamia exige contrair novo casamento sendo casado','Só se houver filhos'],a:1,e:'Bigamia é contrair, sendo casado, novo casamento.',art:'Art. 235, CP'},
 {id:'cf2',t:'cr-fam',q:'Deixar, sem justa causa, de prover a subsistência do filho menor de 18 anos é:',o:['Abandono material','Abandono intelectual','Apenas ilícito civil'],a:0,e:'É crime de abandono material.',art:'Art. 244, CP'},
 {id:'cf3',t:'cr-fam',q:'Provocar incêndio expondo a perigo a vida ou o patrimônio de outrem é crime contra:',o:['O patrimônio','A incolumidade pública','A administração pública'],a:1,e:'É crime de perigo comum contra a incolumidade pública.',art:'Art. 250, CP'},
 {id:'ce1x',t:'cr-fe',q:'Usar nota grosseiramente falsificada, que só engana alguém desatento, configura:',o:['Moeda falsa, na Justiça Federal','Estelionato, na Justiça Estadual','Fato atípico'],a:1,e:'A utilização de papel-moeda grosseiramente falsificado configura, em tese, estelionato, da competência da Justiça Estadual.',art:'Súmula 73, STJ'},
 {id:'ce2x',t:'cr-fe',q:'O documento é verdadeiro na forma, mas traz uma informação falsa inserida por quem o emitiu. Isso é:',o:['Falsidade material','Falsidade ideológica','Uso de documento falso'],a:1,e:'Na falsidade ideológica, o documento é formalmente verdadeiro, mas seu conteúdo é falso.',art:'Art. 299, CP'},
 {id:'ce3x',t:'cr-fe',q:'Quantas pessoas são necessárias para a associação criminosa?',o:['2','3 ou mais','4 ou mais'],a:1,e:'Associarem-se 3 ou mais pessoas, para o fim específico de cometer crimes.',art:'Art. 288, CP'},
 {id:'ce4x',t:'cr-fe',q:'Organização criminosa, pela Lei 12.850/13, exige:',o:['3 pessoas','4 ou mais pessoas, estrutura ordenada e divisão de tarefas','Só armas'],a:1,e:'Associação de 4 ou mais pessoas, estruturalmente ordenada, com divisão de tarefas, para crimes com pena máxima superior a 4 anos ou de caráter transnacional.',art:'Lei 12.850/13, art. 1º, §1º'}
];
const CR_CARDS=[
 {id:'crc1',t:'cr-vida',f:'Homicídio: simples, privilegiado, qualificado',b:'Simples: 6 a 20 anos. Privilegiado: redução de 1/6 a 1/3. Qualificado: 12 a 30 anos.',art:'Art. 121, CP'},
 {id:'crc2',t:'cr-vida',f:'Lesão grave × gravíssima',b:'Grave: incapacidade por mais de 30 dias, perigo de vida, debilidade permanente, aceleração de parto. Gravíssima: incapacidade permanente, enfermidade incurável, perda de membro ou função, deformidade permanente, aborto.',art:'Art. 129, §§1º e 2º, CP'},
 {id:'crc3',t:'cr-pat',f:'Roubo próprio × impróprio',b:'Próprio: violência antes ou durante a subtração. Impróprio: violência logo depois, para garantir a coisa ou a fuga.',art:'Art. 157, caput e §1º, CP'},
 {id:'crc4',t:'cr-pat',f:'Vetores da insignificância',b:'Mínima ofensividade, nenhuma periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão jurídica.',art:'STF, HC 84.412'},
 {id:'crc5',t:'cr-fe',f:'Falsidade material × ideológica',b:'Material: a forma do documento é falsa (cria ou altera). Ideológica: a forma é verdadeira, mas a informação é falsa.',art:'Arts. 297 a 299, CP'},
 {id:'crc6',t:'cr-fe',f:'Associação × organização criminosa',b:'Associação: 3 ou mais pessoas para cometer crimes (CP, art. 288). Organização: 4 ou mais, estrutura e divisão de tarefas, crimes com pena máxima acima de 4 anos (Lei 12.850/13).',art:'CP, art. 288; Lei 12.850/13'}
];
function orgCrim(){
  const id=uid('oc');
  later(()=>{
    const root=$('#'+id),s={n:3,estrutura:false,pena:false,crimes:true};
    function render(){$$('[data-k]',root).forEach(b=>b.setAttribute('aria-pressed',String(s[b.dataset.k])===b.dataset.v));$('.ocn',root).textContent=s.n;
      const o=$('.wzout',root);let v;
      if(!s.crimes)v={tone:'ok',t:'Não há crime associativo',d:'A reunião para contravenções, ou sem finalidade de cometer crimes, não configura associação criminosa.'};
      else if(s.n<3)v={tone:'ok',t:'Não há crime associativo',d:'Com duas pessoas pode haver concurso de agentes no crime cometido, mas não associação criminosa.'};
      else if(s.n>=4&&s.estrutura&&s.pena)v={tone:'bad',t:'Organização criminosa',d:'4 ou mais pessoas, estrutura ordenada com divisão de tarefas, visando crimes com pena máxima superior a 4 anos (Lei 12.850/13, art. 1º, §1º). Pena de 3 a 8 anos.'};
      else v={tone:'warn',t:'Associação criminosa',d:`${s.n} pessoas associadas para cometer crimes (CP, art. 288). Pena de 1 a 3 anos.${s.n>=4?' Para ser organização faltam a estrutura com divisão de tarefas ou o tipo de crime visado.':''}`};
      o.className='wzout '+v.tone;o.innerHTML=`<b>${v.t}</b><p>${v.d}</p>`;swapAnim(o)}
    root.addEventListener('click',e=>{const b=e.target.closest('[data-k],[data-n]');if(!b)return;if(b.dataset.n){s.n=Math.max(2,Math.min(8,s.n+(+b.dataset.n)))}else s[b.dataset.k]=b.dataset.v==='true';render()});render();
  });
  const q=(k,l)=>`<div class="wzq"><span>${l}</span><div class="seg"><button data-k="${k}" data-v="true">Sim</button><button data-k="${k}" data-v="false">Não</button></div></div>`;
  return `<div class="wz" id="${id}"><div class="wzqs"><div class="wzq"><span>Quantas pessoas?</span><div class="stp"><button data-n="-1" aria-label="Menos uma pessoa">−</button><output class="ocn num">3</output><button data-n="1" aria-label="Mais uma pessoa">+</button></div></div>
    ${q('crimes','Reuniram-se para cometer crimes (não só contravenções)?')}${q('estrutura','Há estrutura ordenada, com divisão de tarefas?')}${q('pena','Os crimes visados têm pena máxima acima de 4 anos?')}</div><div class="wzout" aria-live="polite"></div></div>`;
}

defCourse('crimes',{nome:'Crimes em Espécie',area:'Direito Penal',desc:'Os tipos penais mais cobrados: vida, patrimônio, família, incolumidade, fé e paz públicas.',topics:CR_TOPICS,mods:CR_MODS,units:CR_UNITS,bank:CR_BANK,cards:CR_CARDS});

defLesson('cr-vida',{
  hero:()=>heroSeal('MATAR ALGUÉM • ART. 121 • OFENDER A INTEGRIDADE • ART. 129 • '),
  title:['Vida e','integridade física'],
  lead:'Homicídio e lesão corporal: o que muda a pena e quem julga cada caso.',
  sections:[
    {id:'homicidio',nav:'Homicídio',h:'As formas do homicídio',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Simples','"Matar alguém": reclusão de <em>6 a 20 anos</em> (art. 121, caput).'],
      ['Privilegiado','Relevante valor social ou moral, ou violenta emoção logo após injusta provocação: <em>reduz de 1/6 a 1/3</em>.'],
      ['Qualificado','Motivo torpe ou fútil, meio cruel, recurso que dificulta a defesa, entre outros: <em>12 a 30 anos</em>.'],
      ['Culposo','Sem intenção, por imprudência, negligência ou imperícia: <em>1 a 3 anos</em>, julgado pelo juiz singular.']])},
    {id:'qual',nav:'Qualifica ou privilegia?',h:'Qualifica, privilegia ou nada?',lead:'Classifique a circunstância no homicídio.',html:()=>W.classify({buckets:['Qualifica','Privilegia','Não altera o tipo'],items:[
      ['Matar por uma discussão boba de trânsito.',0,'Motivo fútil (art. 121, §2º, II).'],
      ['Matar o estuprador da filha, sob violenta emoção, logo após descobrir.',1,'Violenta emoção após injusta provocação (art. 121, §1º).'],
      ['Matar com veneno.',0,'Emprego de veneno (art. 121, §2º, III).'],
      ['Matar por promessa de pagamento.',0,'Motivo torpe, mediante paga ou promessa (art. 121, §2º, I).'],
      ['A vítima era um desconhecido.',2,'Não interfere na tipificação.']]})},
    {id:'lesao',nav:'Lesão corporal',h:'Grave ou gravíssima?',lead:'A consequência da lesão define a pena. Classifique.',html:()=>W.classify({buckets:['Leve','Grave','Gravíssima'],items:[
      ['Um hematoma que some em uma semana.',0,'Não se enquadra em nenhum parágrafo (art. 129, caput).'],
      ['Incapacidade para as ocupações habituais por 45 dias.',1,'Mais de 30 dias (art. 129, §1º, I).'],
      ['Perda da visão de um olho.',1,'Debilidade permanente de sentido; a perda dos dois olhos seria perda da função, gravíssima.'],
      ['Cicatriz permanente e visível no rosto.',2,'Deformidade permanente (art. 129, §2º, IV).'],
      ['Perigo concreto de vida durante a internação.',1,'Perigo de vida (art. 129, §1º, II).'],
      ['A gestante agredida perde o bebê.',2,'Aborto (art. 129, §2º, V).']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Penal e da Constituição.',html:()=>W.arts([
      ['121','Homicídio','Matar alguém: reclusão de 6 a 20 anos; qualificado, de 12 a 30.'],
      ['121, §1º','Privilégio','Relevante valor social ou moral, ou domínio de violenta emoção logo após injusta provocação: redução de 1/6 a 1/3.'],
      ['129','Lesão corporal','Ofender a integridade corporal ou a saúde de outrem: detenção de 3 meses a 1 ano.'],
      ['CF, 5º, XXXVIII','Júri','Reconhecida a instituição do júri, com competência para os crimes dolosos contra a vida.']])}
  ]
});
defLesson('cr-pat',{
  hero:()=>heroSeal('SUBTRAIR COISA ALHEIA MÓVEL • ARTS. 155 E 157 • '),
  title:['Crimes contra','o patrimônio'],
  lead:'Furto, roubo e os crimes vizinhos, e quando a lesão é tão pequena que não chega a ser crime.',
  sections:[
    {id:'qual',nav:'Que crime é?',h:'Furto, roubo, estelionato ou apropriação?',lead:'O que define o crime é como o agente chega à coisa. Classifique.',html:()=>W.classify({buckets:['Furto','Roubo','Estelionato','Apropriação indébita'],items:[
      ['Leva o celular da mesa do bar sem ninguém ver.',0,'Subtração sem violência (art. 155).'],
      ['Aponta uma faca e exige o celular.',1,'Grave ameaça (art. 157).'],
      ['Vende um carro que não existe e recebe o dinheiro por PIX.',2,'Engano para obter vantagem (art. 171).'],
      ['Recebe o notebook emprestado e decide não devolver.',3,'Já tinha a posse lícita e inverte o título (art. 168).'],
      ['Arranca a corrente do pescoço da vítima com um puxão violento.',1,'Violência contra a pessoa.']]})},
    {id:'insignificancia',nav:'Insignificância',h:'É insignificante?',lead:'Responda aos vetores do STF.',html:()=>W.wizard({qs:[['ofens','A conduta foi minimamente ofensiva?'],['perig','Não houve periculosidade social na ação?'],['reprov','O grau de reprovabilidade é reduzido?'],['lesao','A lesão ao patrimônio foi inexpressiva?']],init:{ofens:true,perig:true,reprov:true,lesao:true},
      verdict:a=>a.ofens&&a.perig&&a.reprov&&a.lesao?{tone:'ok',t:'Fato atípico',d:'Presentes os quatro vetores, falta tipicidade material: não há crime (STF, HC 84.412).'}:{tone:'bad',t:'Há crime',d:'Faltando qualquer vetor, a insignificância não se aplica. O STF costuma afastá-la, por exemplo, quando há violência ou grave ameaça e na reiteração criminosa.'}})},
    {id:'roubo',nav:'Roubo',h:'O roubo em camadas',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Próprio','Violência ou grave ameaça <em>antes ou durante</em> a subtração (caput).'],
      ['Impróprio','Violência <em>logo depois</em>, para garantir a coisa ou a fuga (§1º).'],
      ['Majorado','Concurso de pessoas, restrição da liberdade da vítima, <em>arma de fogo (+2/3)</em>, entre outros (§§2º e 2º-A).'],
      ['Latrocínio','Roubo com resultado <em>morte</em>: 20 a 30 anos, crime hediondo, julgado pelo juiz singular (Súmula 603, STF).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Penal.',html:()=>W.arts([
      ['155','Furto','Subtrair, para si ou para outrem, coisa alheia móvel: reclusão de 1 a 4 anos e multa.'],
      ['155, §1º','Repouso noturno','A pena aumenta de 1/3 se o crime é praticado durante o repouso noturno.'],
      ['157','Roubo','Subtrair coisa alheia móvel mediante grave ameaça ou violência a pessoa: reclusão de 4 a 10 anos.'],
      ['168','Apropriação indébita','Apropriar-se de coisa alheia móvel de que tem a posse ou a detenção.'],
      ['171','Estelionato','Obter vantagem ilícita, induzindo ou mantendo alguém em erro, mediante artifício ou fraude.']])}
  ]
});
defLesson('cr-fam',{
  hero:()=>heroSeal('CASAMENTO • FILIAÇÃO • ASSISTÊNCIA FAMILIAR • PERIGO COMUM • '),
  title:['Família e','incolumidade pública'],
  lead:'Os crimes que protegem a família e os que protegem a coletividade de perigos comuns.',
  sections:[
    {id:'familia',nav:'Contra a família',h:'Crimes contra a família',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Bigamia','Contrair <em>novo casamento</em> sendo casado. Ter duas famílias, sem dois casamentos, não é bigamia (art. 235).'],
      ['Induzimento a erro','Casar ocultando <em>impedimento</em> ou induzindo o outro a erro essencial; ação privada personalíssima (art. 236).'],
      ['Abandono material','Deixar de prover, sem justa causa, a <em>subsistência</em> do filho, cônjuge ou ascendente (art. 244).'],
      ['Abandono intelectual','Deixar de prover a <em>instrução primária</em> do filho em idade escolar (art. 246).']])},
    {id:'incolumidade',nav:'Incolumidade pública',h:'Perigo para todos',lead:'Classifique o bem jurídico atingido.',html:()=>W.classify({buckets:['Incolumidade pública','Família','Patrimônio'],items:[
      ['Provocar incêndio num prédio residencial.',0,'Perigo comum (art. 250).'],
      ['Casar novamente sem se divorciar.',1,'Bigamia (art. 235).'],
      ['Envenenar a água de um reservatório da cidade.',0,'Crime contra a saúde pública (art. 270).'],
      ['Quebrar de propósito a vitrine de uma loja.',2,'Dano (art. 163).'],
      ['Expor a perigo a segurança de um meio de transporte público.',0,'Crime contra a segurança dos meios de transporte (art. 262).']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Penal.',html:()=>W.arts([
      ['235','Bigamia','Contrair alguém, sendo casado, novo casamento: reclusão de 2 a 6 anos.'],
      ['244','Abandono material','Deixar, sem justa causa, de prover a subsistência do cônjuge, de filho menor de 18 anos ou de ascendente inválido ou maior de 60.'],
      ['250','Incêndio','Causar incêndio, expondo a perigo a vida, a integridade física ou o patrimônio de outrem.'],
      ['270','Envenenamento de água','Envenenar água potável, de uso comum ou particular, ou substância alimentícia destinada a consumo.']])}
  ]
});
defLesson('cr-fe',{
  hero:()=>heroSeal('MOEDA FALSA • FALSIDADE • ASSOCIAÇÃO CRIMINOSA • '),
  title:['Fé pública','e paz pública'],
  lead:'A confiança que a sociedade deposita em moedas e documentos, e a reunião de pessoas para cometer crimes.',
  sections:[
    {id:'falsidade',nav:'Falsidades',h:'Que falsidade é essa?',lead:'Classifique.',html:()=>W.classify({buckets:['Moeda falsa','Estelionato','Falsidade material','Falsidade ideológica'],items:[
      ['Fabricar notas de R$ 100 quase perfeitas.',0,'Imitação apta a enganar (art. 289), na Justiça Federal.'],
      ['Usar uma nota impressa em papel comum, que só engana um idoso desatento.',1,'Falsificação grosseira (Súmula 73, STJ).'],
      ['Montar uma carteira de identidade falsa do zero.',2,'A própria forma do documento é falsa (art. 297).'],
      ['O médico emite atestado verdadeiro na forma, mas declara uma doença que o paciente não tem.',3,'Conteúdo falso em documento formalmente verdadeiro (art. 302, ou art. 299 em geral).']]})},
    {id:'associacao',nav:'Associação ou organização',h:'Associação ou organização criminosa?',lead:'Ajuste o número de pessoas e as condições.',html:orgCrim},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do Código Penal, da lei especial e do STJ.',html:()=>W.arts([
      ['289','Moeda falsa','Falsificar moeda metálica ou papel-moeda de curso legal: reclusão de 3 a 12 anos.'],
      ['297','Documento público','Falsificar, no todo ou em parte, documento público, ou alterar documento público verdadeiro.'],
      ['299','Falsidade ideológica','Omitir declaração que devia constar, ou inserir declaração falsa, em documento público ou particular.'],
      ['288','Associação criminosa','Associarem-se 3 ou mais pessoas para o fim específico de cometer crimes.'],
      ['Súmula 73','STJ','Papel-moeda grosseiramente falsificado configura, em tese, estelionato, da competência da Justiça Estadual.']])}
  ]
});
