/* ================= Matéria: Processo de Conhecimento ================= */
const PK_TOPICS=[
 {id:'pk-ini',nome:'Petição inicial',mod:1},
 {id:'pk-reu',nome:'Resposta do réu e revelia',mod:2},
 {id:'pk-san',nome:'Saneamento e julgamento',mod:3},
 {id:'pk-tut',nome:'Tutelas provisórias e coisa julgada',mod:4}
];
const PK_MODS=[
 {n:1,u:'A',tit:'Procedimento comum e petição inicial',t:'pk-ini',live:'pk-ini'},
 {n:2,u:'A',tit:'Contestação, reconvenção e revelia',t:'pk-reu',live:'pk-reu'},
 {n:3,u:'B',tit:'Julgamento conforme o estado do processo',t:'pk-san',live:'pk-san'},
 {n:4,u:'B',tit:'Tutelas provisórias e coisa julgada',t:'pk-tut',live:'pk-tut'}
];
const PK_UNITS=[['A','Parte I · Fase postulatória'],['B','Parte II · Decisão']];
const PK_BANK=[
 {id:'ki1',t:'pk-ini',q:'A petição inicial tem um defeito sanável. O que o juiz deve fazer antes de indeferi-la?',o:['Indeferir de imediato','Mandar emendar em 15 dias, indicando o que corrigir','Julgar improcedente'],a:1,e:'O juiz determina a emenda ou complementação em 15 dias, indicando com precisão o que deve ser corrigido.',art:'CPC, art. 321'},
 {id:'ki2',t:'pk-ini',q:'A petição tem pedidos incompatíveis entre si. Ela é:',o:['Inepta','Válida','Improcedente'],a:0,e:'Considera-se inepta a petição que contiver pedidos incompatíveis entre si.',art:'CPC, art. 330, §1º, IV'},
 {id:'ki3',t:'pk-ini',q:'O pedido contraria súmula do STJ e a causa dispensa provas. O juiz pode:',o:['Julgar liminarmente improcedente, sem citar o réu','Indeferir a inicial por inépcia','Só julgar após a contestação'],a:0,e:'Nas causas que dispensem instrução, o juiz julga liminarmente improcedente o pedido que contrariar súmula do STF ou do STJ, entre outras hipóteses.',art:'CPC, art. 332'},
 {id:'ki4',t:'pk-ini',q:'A improcedência liminar resolve o mérito?',o:['Não','Sim, e pode fazer coisa julgada material','Só se o réu concordar'],a:1,e:'Diferentemente do indeferimento da inicial, a improcedência liminar é decisão de mérito.',art:'CPC, arts. 332 e 487, I'},
 {id:'kr1',t:'pk-reu',q:'Qual o prazo, em regra, para contestar no procedimento comum?',o:['10 dias','15 dias','30 dias'],a:1,e:'O réu poderá oferecer contestação no prazo de 15 dias.',art:'CPC, art. 335'},
 {id:'kr2',t:'pk-reu',q:'A incompetência relativa deve ser alegada:',o:['Em petição separada, a qualquer tempo','Como preliminar da contestação','Só em recurso'],a:1,e:'Incompetência absoluta e relativa estão entre as preliminares do art. 337.',art:'CPC, art. 337, II'},
 {id:'kr3',t:'pk-reu',q:'O réu é revel, mas a causa versa sobre direitos indisponíveis. Os fatos do autor presumem-se verdadeiros?',o:['Sim','Não: a revelia não produz esse efeito','Só se o juiz quiser'],a:1,e:'A presunção de veracidade não ocorre se o litígio versar sobre direitos indisponíveis.',art:'CPC, art. 345, II'},
 {id:'kr4',t:'pk-reu',q:'O autor desiste da ação principal. A reconvenção:',o:['É extinta junto','Prossegue normalmente','Vira contestação'],a:1,e:'A desistência da ação ou a extinção sem mérito não obsta ao prosseguimento da reconvenção.',art:'CPC, art. 343, §2º'},
 {id:'ks1x',t:'pk-san',q:'Quando o juiz pode julgar antecipadamente o mérito?',o:['Sempre que quiser','Quando não houver necessidade de outras provas, ou o réu for revel com efeitos da revelia e sem requerimento de prova','Só após a audiência de instrução'],a:1,e:'É o julgamento antecipado do mérito.',art:'CPC, art. 355'},
 {id:'ks2x',t:'pk-san',q:'Um dos pedidos já está pronto para julgamento e o outro precisa de prova. O juiz pode:',o:['Esperar e julgar tudo junto, obrigatoriamente','Julgar antecipadamente parte do mérito','Extinguir o processo'],a:1,e:'O juiz decide parcialmente o mérito quando um ou mais pedidos se mostrarem incontroversos ou em condições de imediato julgamento.',art:'CPC, art. 356'},
 {id:'ks3x',t:'pk-san',q:'Qual o recurso contra a decisão que julga parcialmente o mérito?',o:['Apelação','Agravo de instrumento','Embargos de declaração'],a:1,e:'A decisão proferida com base no art. 356 é impugnável por agravo de instrumento.',art:'CPC, art. 356, §5º'},
 {id:'kt1',t:'pk-tut',q:'Quais os requisitos da tutela de urgência?',o:['Só a probabilidade do direito','Probabilidade do direito e perigo de dano ou risco ao resultado útil do processo','Só o perigo da demora'],a:1,e:'A tutela de urgência será concedida quando houver elementos que evidenciem a probabilidade do direito e o perigo de dano.',art:'CPC, art. 300'},
 {id:'kt2',t:'pk-tut',q:'A tutela da evidência exige urgência?',o:['Sim','Não: dispensa a demonstração de perigo de dano','Só a liminar'],a:1,e:'A tutela da evidência será concedida independentemente da demonstração de perigo de dano.',art:'CPC, art. 311'},
 {id:'kt3',t:'pk-tut',q:'O bloqueio de bens para garantir que o réu não esvazie o patrimônio é tutela:',o:['Antecipada (satisfativa)','Cautelar (assecuratória)','Da evidência'],a:1,e:'A cautelar protege o resultado útil do processo, sem entregar desde logo o bem da vida pedido.',art:'CPC, art. 301'},
 {id:'kt4',t:'pk-tut',q:'O que faz coisa julgada material na sentença?',o:['O relatório','A fundamentação','O dispositivo, a parte que decide'],a:2,e:'Não fazem coisa julgada os motivos nem a verdade dos fatos; a autoridade recai sobre o que foi decidido.',art:'CPC, arts. 503 e 504'}
];
const PK_CARDS=[
 {id:'pkc1',t:'pk-ini',f:'Indeferimento da inicial (art. 330)',b:'Inépcia, ilegitimidade manifesta, falta de interesse processual e falta de emenda após intimação. Extingue sem resolver o mérito.',art:'CPC, art. 330'},
 {id:'pkc2',t:'pk-ini',f:'Improcedência liminar (art. 332)',b:'Causa sem necessidade de provas e pedido contrário a súmula do STF/STJ, repetitivo, IRDR ou assunção de competência, ou prescrição e decadência. Resolve o mérito sem citar o réu.',art:'CPC, art. 332'},
 {id:'pkc3',t:'pk-reu',f:'Efeitos da revelia',b:'Presumem-se verdadeiros os fatos do autor, salvo litisconsorte que contestou, direitos indisponíveis, falta de documento indispensável ou alegações inverossímeis.',art:'CPC, arts. 344 e 345'},
 {id:'pkc4',t:'pk-reu',f:'Reconvenção',b:'Ação do réu contra o autor no mesmo processo, conexa com a principal ou com o fundamento da defesa. Sobrevive à desistência da ação.',art:'CPC, art. 343'},
 {id:'pkc5',t:'pk-san',f:'Julgamento conforme o estado do processo',b:'Extinção (art. 354), julgamento antecipado total (art. 355) ou parcial (art. 356), ou saneamento e organização do processo (art. 357).',art:'CPC, arts. 354 a 357'},
 {id:'pkc6',t:'pk-tut',f:'Urgência × evidência',b:'Urgência: probabilidade do direito + perigo de dano; pode ser antecedente. Evidência: dispensa o perigo; hipóteses do art. 311; sempre incidental.',art:'CPC, arts. 300 e 311'}
];
function revelia(){
  return W.wizard({qs:[['contestou','O réu apresentou contestação no prazo?'],['litis','Algum litisconsorte contestou os mesmos fatos?'],['indisp','O litígio é sobre direitos indisponíveis?'],['doc','Falta à inicial documento indispensável à prova do ato?'],['inveros','As alegações do autor são inverossímeis ou contrariadas pela prova?']],init:{contestou:false,litis:false,indisp:false,doc:false,inveros:false},
    verdict:a=>a.contestou?{tone:'ok',t:'Não há revelia',d:'O réu contestou: os fatos controvertidos dependem de prova.'}:
      a.litis?{tone:'warn',t:'Revel, mas sem presunção de veracidade',d:'A contestação de um litisconsorte aproveita ao revel quanto aos fatos comuns (art. 345, I).'}:
      a.indisp?{tone:'warn',t:'Revel, mas sem presunção de veracidade',d:'Direitos indisponíveis não admitem a presunção (art. 345, II).'}:
      a.doc?{tone:'warn',t:'Revel, mas sem presunção de veracidade',d:'Sem o instrumento que a lei considera indispensável, os fatos não se presumem provados (art. 345, III).'}:
      a.inveros?{tone:'warn',t:'Revel, mas sem presunção de veracidade',d:'Alegações inverossímeis ou em contradição com a prova não se presumem verdadeiras (art. 345, IV).'}:
      {tone:'bad',t:'Revelia com efeito material',d:'Presumem-se verdadeiras as alegações de fato do autor (art. 344). Os prazos correm da publicação no diário oficial para o revel sem advogado (art. 346), e o juiz pode julgar antecipadamente (art. 355, II).'}});
}
function tutelaWiz(){
  return W.wizard({qs:[['urg','Há perigo de dano ou risco ao resultado útil do processo?'],['prob','O direito é provável?'],['satisf','O autor quer já receber o próprio bem pedido (e não só garanti-lo)?'],['evid','O caso está numa hipótese do art. 311 (abuso de defesa, tese repetitiva com prova documental, depósito, prova documental sem contraprova)?']],init:{urg:true,prob:true,satisf:true,evid:false},
    verdict:a=>a.urg&&a.prob?(a.satisf?{tone:'ok',t:'Tutela de urgência antecipada',d:'Satisfativa: entrega desde já, provisoriamente, o que se pede ao final. Não cabe se houver perigo de irreversibilidade (art. 300, §3º).'}:{tone:'ok',t:'Tutela de urgência cautelar',d:'Assecuratória: arresto, sequestro, arrolamento de bens, registro de protesto, para proteger o resultado útil do processo (art. 301).'}):
      a.evid?{tone:'ok',t:'Tutela da evidência',d:'Dispensa a urgência: o direito é tão evidente que esperar não se justifica (art. 311). Sempre incidental.'}:
      !a.prob?{tone:'bad',t:'Nenhuma tutela provisória',d:'Sem probabilidade do direito, não há tutela provisória possível.'}:
      {tone:'bad',t:'Nenhuma tutela provisória',d:'Sem urgência e fora das hipóteses do art. 311, o autor espera a sentença.'}});
}

defCourse('conhecimento',{nome:'Processo de Conhecimento',area:'Direito Processual',desc:'O procedimento comum da petição inicial à coisa julgada, com simuladores de revelia e de tutela provisória.',topics:PK_TOPICS,mods:PK_MODS,units:PK_UNITS,bank:PK_BANK,cards:PK_CARDS});

defLesson('pk-ini',{
  hero:()=>heroSeal('PROCEDIMENTO COMUM • PETIÇÃO INICIAL • ART. 319 • '),
  title:['Petição','inicial'],
  lead:'O caminho do procedimento comum e o que o juiz pode fazer quando recebe a inicial.',
  sections:[
    {id:'fases',nav:'Fases',h:'O caminho do procedimento comum',lead:'Avance pelas fases.',html:()=>W.timeline({steps:[
      {t:'Postulatória',s:'arts. 319 a 346',d:'Petição inicial, audiência de conciliação ou mediação e resposta do réu.'},
      {t:'Saneadora',s:'arts. 347 a 357',d:'Providências preliminares e julgamento conforme o estado do processo: extinção, julgamento antecipado ou saneamento.'},
      {t:'Instrutória',s:'arts. 358 a 484',d:'Produção de provas: perícia, depoimentos e audiência de instrução e julgamento.'},
      {t:'Decisória',s:'arts. 485 a 508',d:'Sentença, com ou sem resolução do mérito, e formação da coisa julgada.'}]})},
    {id:'requisitos',nav:'Requisitos',h:'O que a inicial precisa ter',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Juízo e partes','O <em>juízo</em> a que é dirigida e a <em>qualificação</em> das partes (art. 319, I e II).'],
      ['Causa de pedir','Os <em>fatos e os fundamentos jurídicos</em> do pedido (art. 319, III).'],
      ['Pedido','O <em>pedido com suas especificações</em>, certo e determinado, salvo exceções (arts. 319, IV e 322).'],
      ['Valor e provas','O <em>valor da causa</em>, as provas e a opção pela audiência de conciliação (art. 319, V a VII).']])},
    {id:'juiz',nav:'O que o juiz faz',h:'Emenda, indeferimento ou improcedência liminar?',lead:'Classifique a reação do juiz à inicial.',html:()=>W.classify({buckets:['Emenda','Indeferimento','Improcedência liminar','Cita o réu'],items:[
      ['A inicial não indica o valor da causa.',0,'Defeito sanável: emenda em 15 dias (art. 321).'],
      ['O autor pede a cobrança de dívida de outra pessoa, em nome próprio, sem autorização legal.',1,'Ilegitimidade manifesta (art. 330, II).'],
      ['O pedido contraria súmula do STJ e não há fatos a provar.',2,'Art. 332, I.'],
      ['A inicial está completa e o pedido é plausível.',3,'O juiz designa a audiência e cita o réu (art. 334).'],
      ['A inicial não tem pedido.',1,'Inépcia (art. 330, §1º, I), se não corrigida.']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do CPC.',html:()=>W.arts([
      ['319','Requisitos','Juízo, partes, fatos e fundamentos, pedido, valor da causa, provas e opção pela audiência.'],
      ['321','Emenda','Em 15 dias, indicando com precisão o que deve ser corrigido ou completado.'],
      ['330','Indeferimento','Inépcia, ilegitimidade manifesta, falta de interesse processual e não atendimento da emenda.'],
      ['332','Improcedência liminar','Nas causas sem instrução, contra súmula, repetitivos, IRDR, assunção de competência, ou com prescrição e decadência.']])}
  ]
});
defLesson('pk-reu',{
  hero:()=>heroSeal('CONTESTAÇÃO • PRELIMINARES • RECONVENÇÃO • REVELIA • '),
  title:['A resposta','do réu'],
  lead:'Como o réu se defende, quando pode contra-atacar e o que acontece se ficar calado.',
  sections:[
    {id:'preliminares',nav:'Preliminares',h:'Preliminar ou mérito?',lead:'Antes do mérito, o réu alega as preliminares do art. 337. Classifique.',html:()=>W.classify({buckets:['Preliminar','Mérito'],items:[
      ['A citação foi entregue a um vizinho, sem poderes.',0,'Inexistência ou nulidade da citação (art. 337, I).'],
      ['A mesma ação já tramita em outra vara.',0,'Litispendência (art. 337, VI).'],
      ['A dívida já foi paga, como prova o recibo.',1,'É o próprio direito discutido.'],
      ['O valor atribuído à causa está errado.',0,'Incorreção do valor da causa (art. 337, III).'],
      ['O contrato foi assinado sob coação.',1,'Ataca a relação de direito material.']]})},
    {id:'revelia',nav:'Revelia',h:'O réu não contestou. E agora?',lead:'Responda e veja se a revelia produz o efeito de presumir verdadeiros os fatos.',html:revelia},
    {id:'reconvencao',nav:'Reconvenção',h:'Reconvenção',lead:'O réu também pede algo contra o autor, no mesmo processo.',html:()=>W.flips([
      ['O que é','Uma <em>ação do réu</em> (reconvinte) contra o autor (reconvindo), na própria contestação.'],
      ['Requisito','<em>Conexão</em> com a ação principal ou com o fundamento da defesa (art. 343).'],
      ['Autonomia','Se o autor desiste da ação, a <em>reconvenção continua</em> (art. 343, §2º).'],
      ['Terceiros','Pode ser proposta <em>contra o autor e um terceiro</em>, ou pelo réu com um terceiro (art. 343, §§3º e 4º).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do CPC.',html:()=>W.arts([
      ['335','Prazo','O réu pode oferecer contestação em 15 dias.'],
      ['336','Concentração','Incumbe ao réu alegar, na contestação, toda a matéria de defesa.'],
      ['337','Preliminares','Citação, incompetência, valor da causa, inépcia, perempção, litispendência, coisa julgada, conexão, entre outras.'],
      ['341','Impugnação específica','Presumem-se verdadeiras as alegações de fato não impugnadas, salvo exceções.'],
      ['344','Revelia','Se o réu não contestar, será considerado revel e presumir-se-ão verdadeiras as alegações de fato do autor.']])}
  ]
});
defLesson('pk-san',{
  hero:()=>heroSeal('EXTINÇÃO • JULGAMENTO ANTECIPADO • SANEAMENTO • '),
  title:['Saneamento','e julgamento'],
  lead:'Depois da resposta do réu, o juiz decide o rumo do processo: encerrar, julgar desde logo ou organizar a produção de provas.',
  sections:[
    {id:'rumo',nav:'Qual caminho?',h:'Qual caminho o juiz toma?',lead:'Classifique pelo artigo do CPC.',html:()=>W.classify({buckets:['Extinção (354)','Julgamento antecipado (355)','Parcial (356)','Saneamento (357)'],items:[
      ['As partes fizeram acordo.',0,'Homologação da transação, com base no art. 487, III.'],
      ['A questão é só de direito e não há prova a produzir.',1,'Art. 355, I.'],
      ['O réu reconheceu um dos pedidos; o outro precisa de perícia.',2,'Decisão parcial de mérito, recorrível por agravo de instrumento.'],
      ['Há fatos controvertidos que exigem testemunhas.',3,'O juiz fixa os pontos controvertidos e as provas (art. 357).'],
      ['O autor abandonou a causa por mais de 30 dias.',0,'Extinção sem mérito (art. 485, III).']]})},
    {id:'saneamento',nav:'Saneamento',h:'O que a decisão de saneamento resolve',lead:'Avance pelos itens do art. 357.',html:()=>W.timeline({steps:[
      {t:'Questões pendentes',s:'art. 357, I',d:'O juiz resolve as questões processuais que ainda estiverem pendentes.'},
      {t:'Fatos e provas',s:'art. 357, II',d:'Delimita os fatos controvertidos e especifica os meios de prova admitidos.'},
      {t:'Ônus da prova',s:'art. 357, III',d:'Define a distribuição do ônus da prova, inclusive a dinâmica (art. 373, §1º).'},
      {t:'Questões de direito',s:'art. 357, IV',d:'Delimita as questões de direito relevantes para a decisão.'},
      {t:'Audiência',s:'art. 357, V',d:'Designa, se necessário, a audiência de instrução e julgamento.'}]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do CPC.',html:()=>W.arts([
      ['354','Extinção','Ocorrendo hipóteses dos arts. 485 e 487, II e III, o juiz profere sentença.'],
      ['355','Julgamento antecipado','Quando não houver necessidade de outras provas, ou o réu for revel com os efeitos da revelia.'],
      ['356','Parcial','O juiz decide parcialmente o mérito quando um ou mais pedidos forem incontroversos ou estiverem prontos.'],
      ['357','Saneamento','Resolve questões pendentes, delimita fatos e provas, distribui o ônus e designa audiência.']])}
  ]
});
defLesson('pk-tut',{
  hero:()=>heroSeal('URGÊNCIA • EVIDÊNCIA • COISA JULGADA • ART. 300 • '),
  title:['Tutelas','e coisa julgada'],
  lead:'O que o juiz pode dar antes do fim do processo e o que se torna imutável quando ele termina.',
  sections:[
    {id:'qual',nav:'Qual tutela?',h:'Que tutela provisória cabe?',lead:'Responda e veja a tutela adequada.',html:tutelaWiz},
    {id:'exemplos',nav:'Exemplos',h:'Antecipada, cautelar ou da evidência?',lead:'Classifique.',html:()=>W.classify({buckets:['Antecipada','Cautelar','Evidência'],items:[
      ['O plano de saúde é obrigado, liminarmente, a autorizar a cirurgia urgente.',0,'Entrega desde já o próprio bem pedido.'],
      ['Arresto de bens do devedor que está transferindo tudo para parentes.',1,'Garante o resultado útil, sem entregar o crédito.'],
      ['O réu só apresenta defesas protelatórias, contra prova documental robusta.',2,'Abuso do direito de defesa (art. 311, I).'],
      ['Pedido de devolução de bem depositado, com o contrato de depósito juntado.',2,'Pedido reipersecutório com prova documental do depósito (art. 311, III).']]})},
    {id:'coisajulgada',nav:'Coisa julgada',h:'A coisa julgada',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Conceito','A autoridade que torna <em>imutável e indiscutível</em> a decisão de mérito não mais sujeita a recurso (art. 502).'],
      ['Formal × material','Formal: só impede rediscutir <em>naquele processo</em>. Material: impede em <em>qualquer processo</em>.'],
      ['O que não faz','Os <em>motivos</em> e a verdade dos fatos não fazem coisa julgada (art. 504).'],
      ['Limite subjetivo','A sentença faz coisa julgada <em>às partes</em>, não prejudicando terceiros (art. 506).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Do CPC.',html:()=>W.arts([
      ['300','Urgência','Concedida quando houver probabilidade do direito e perigo de dano ou risco ao resultado útil do processo.'],
      ['301','Cautelar','Pode ser efetivada mediante arresto, sequestro, arrolamento de bens, registro de protesto contra alienação.'],
      ['311','Evidência','Independe de perigo de dano, nas hipóteses de abuso de defesa, tese repetitiva, depósito e prova documental.'],
      ['502','Coisa julgada','Autoridade que torna imutável e indiscutível a decisão de mérito não mais sujeita a recurso.'],
      ['504','Limites','Não fazem coisa julgada os motivos nem a verdade dos fatos.']])}
  ]
});
