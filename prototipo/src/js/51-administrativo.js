/* ================= Matéria: Direito Administrativo ================= */
const AD_TOPICS=[
 {id:'ad-reg',nome:'Regime jurídico e princípios',mod:1},
 {id:'ad-serv',nome:'Serviços públicos',mod:2},
 {id:'ad-ag',nome:'Agentes públicos',mod:3},
 {id:'ad-bens',nome:'Bens públicos e intervenção',mod:4}
];
const AD_MODS=[
 {n:1,u:'A',tit:'Regime jurídico-administrativo e princípios',t:'ad-reg',live:'ad-reg'},
 {n:2,u:'A',tit:'Serviços públicos e delegação',t:'ad-serv',live:'ad-serv'},
 {n:3,u:'B',tit:'Agentes públicos e estabilidade',t:'ad-ag',live:'ad-ag'},
 {n:4,u:'B',tit:'Bens públicos e intervenção na propriedade',t:'ad-bens',live:'ad-bens'}
];
const AD_UNITS=[['A','Parte I · Administração e serviço'],['B','Parte II · Pessoas e bens']];
const AD_BANK=[
 {id:'ar1',t:'ad-reg',q:'Quais são os princípios expressos do art. 37, caput, da Constituição?',o:['Legalidade, impessoalidade, moralidade, publicidade e eficiência','Legalidade, razoabilidade e supremacia','Moralidade, motivação e autotutela'],a:0,e:'O famoso LIMPE.',art:'CF, art. 37'},
 {id:'ar2',t:'ad-reg',q:'Para o administrador público, a legalidade significa:',o:['Pode fazer tudo que a lei não proíbe','Só pode fazer o que a lei autoriza','Pode agir livremente pelo interesse público'],a:1,e:'O particular faz o que a lei não proíbe; a Administração, apenas o que a lei permite.',art:'Legalidade administrativa'},
 {id:'ar3',t:'ad-reg',q:'Nomear o próprio irmão para cargo em comissão viola:',o:['Só a eficiência','A moralidade e a impessoalidade (nepotismo)','Nenhum princípio'],a:1,e:'A nomeação de parente até o 3º grau para cargo em comissão viola a Constituição.',art:'Súmula Vinculante 13'},
 {id:'ar4',t:'ad-reg',q:'A Administração pode anular seus próprios atos ilegais?',o:['Não, só o Judiciário','Sim: é a autotutela','Só com autorização do Legislativo'],a:1,e:'A Administração pode anular seus atos ilegais e revogar os inconvenientes, respeitados os direitos adquiridos.',art:'Súmula 473, STF'},
 {id:'as1x',t:'ad-serv',q:'A delegação de serviço público a título precário, a pessoa física ou jurídica, por contrato de adesão, é:',o:['Concessão','Permissão','Autorização'],a:1,e:'Permissão: precária, mediante licitação, a pessoa física ou jurídica, formalizada por contrato de adesão.',art:'Lei 8.987/95, arts. 2º, IV e 40'},
 {id:'as2x',t:'ad-serv',q:'A concessionária pode cortar a luz do usuário inadimplente?',o:['Nunca','Sim, após aviso prévio, mas não na sexta, sábado, domingo, feriado ou véspera','Sim, sem aviso'],a:1,e:'Não é descontinuidade a interrupção por inadimplemento com aviso prévio; a lei veda o início do corte em fins de semana e vésperas de feriado.',art:'Lei 8.987/95, art. 6º, §§3º e 4º'},
 {id:'as3x',t:'ad-serv',q:'O valor pago à concessionária pelo serviço de água é:',o:['Taxa (tributo)','Tarifa (preço público)','Contribuição de melhoria'],a:1,e:'O serviço prestado por concessionária é remunerado por tarifa, não por taxa.',art:'STF; Súmula 545'},
 {id:'as4x',t:'ad-serv',q:'Quantos são os requisitos do serviço adequado na Lei 8.987/95?',o:['Quatro','Oito','Doze'],a:1,e:'Regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e modicidade das tarifas.',art:'Lei 8.987/95, art. 6º, §1º'},
 {id:'aa1',t:'ad-ag',q:'Quanto tempo de efetivo exercício o servidor precisa para adquirir estabilidade?',o:['2 anos','3 anos, com avaliação especial de desempenho','5 anos'],a:1,e:'São estáveis após 3 anos de efetivo exercício os servidores nomeados por concurso, com avaliação especial de desempenho.',art:'CF, art. 41'},
 {id:'aa2',t:'ad-ag',q:'O mesário convocado na eleição é:',o:['Servidor estatutário','Particular em colaboração com o Poder Público','Agente político'],a:1,e:'Exerce função pública transitória sem vínculo profissional.',art:'Classificação doutrinária'},
 {id:'aa3',t:'ad-ag',q:'O servidor estável pode perder o cargo por:',o:['Decisão do chefe imediato','Sentença transitada, processo administrativo com ampla defesa ou avaliação periódica de desempenho','Corte de gastos sem regra'],a:1,e:'São as três hipóteses do art. 41, §1º (além da do art. 169, §4º, por excesso de despesa).',art:'CF, art. 41, §1º'},
 {id:'aa4',t:'ad-ag',q:'Contratar temporários sem concurso para funções permanentes, sem situação excepcional:',o:['É lícito','Viola o art. 37, IX e pode configurar improbidade','É exigido pela lei'],a:1,e:'A contratação temporária exige necessidade temporária de excepcional interesse público.',art:'CF, art. 37, II e IX'},
 {id:'ab1',t:'ad-bens',q:'Uma praça pública é bem de:',o:['Uso especial','Uso comum do povo','Dominical'],a:1,e:'Rios, mares, estradas, ruas e praças são bens de uso comum do povo.',art:'CC, art. 99, I'},
 {id:'ab2',t:'ad-bens',q:'Bens públicos podem ser adquiridos por usucapião?',o:['Sim, após 15 anos','Não: são imprescritíveis','Só os dominicais'],a:1,e:'Os imóveis públicos não serão adquiridos por usucapião.',art:'CF, arts. 183, §3º e 191, p.u.'},
 {id:'ab3',t:'ad-bens',q:'Em perigo público iminente, a autoridade usa um galpão particular para abrigar desabrigados. Isso é:',o:['Desapropriação','Requisição administrativa','Tombamento'],a:1,e:'A autoridade competente pode usar a propriedade particular, assegurada indenização ulterior, se houver dano.',art:'CF, art. 5º, XXV'},
 {id:'ab4',t:'ad-bens',q:'A desapropriação comum por utilidade pública é paga como?',o:['Em títulos da dívida pública','Com indenização prévia, justa e em dinheiro','Sem indenização'],a:1,e:'A regra constitucional é a indenização prévia, justa e em dinheiro.',art:'CF, art. 5º, XXIV'}
];
const AD_CARDS=[
 {id:'adc1',t:'ad-reg',f:'LIMPE',b:'Legalidade, impessoalidade, moralidade, publicidade e eficiência.',art:'CF, art. 37'},
 {id:'adc2',t:'ad-reg',f:'Supremacia e indisponibilidade',b:'Prerrogativas (supremacia do interesse público) e sujeições (indisponibilidade do interesse público): as duas pedras do regime jurídico-administrativo.',art:'Doutrina'},
 {id:'adc3',t:'ad-serv',f:'Concessão × permissão × autorização',b:'Concessão: contrato, licitação, PJ ou consórcio, prazo determinado. Permissão: precária, contrato de adesão, PF ou PJ. Autorização: ato unilateral e discricionário.',art:'Lei 8.987/95'},
 {id:'adc4',t:'ad-serv',f:'Serviço adequado',b:'Regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e modicidade das tarifas.',art:'Lei 8.987/95, art. 6º'},
 {id:'adc5',t:'ad-ag',f:'Estabilidade',b:'Concurso, 3 anos de efetivo exercício e avaliação especial de desempenho por comissão.',art:'CF, art. 41'},
 {id:'adc6',t:'ad-bens',f:'Classes de bens públicos',b:'Uso comum (ruas, praças), uso especial (prédios de repartições) e dominicais (patrimônio disponível, que pode ser alienado na forma da lei).',art:'CC, arts. 99 a 101'},
 {id:'adc7',t:'ad-bens',f:'Formas de intervenção',b:'Restritivas: servidão, requisição, ocupação temporária, limitação e tombamento. Supressiva: desapropriação.',art:'Doutrina'}
];

defCourse('administrativo',{nome:'Direito Administrativo',area:'Direito Público',desc:'Princípios da Administração, serviços públicos, agentes, bens públicos e as formas de o Estado intervir na propriedade.',topics:AD_TOPICS,mods:AD_MODS,units:AD_UNITS,bank:AD_BANK,cards:AD_CARDS});

defLesson('ad-reg',{
  hero:()=>heroSeal('LEGALIDADE • IMPESSOALIDADE • MORALIDADE • PUBLICIDADE • EFICIÊNCIA • '),
  title:['Regime','administrativo'],
  lead:'O que diferencia a Administração de um particular: poderes especiais, limites especiais e os princípios que os equilibram.',
  sections:[
    {id:'pilares',nav:'Pilares',h:'Prerrogativas e sujeições',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Supremacia do interesse público','A Administração tem <em>prerrogativas</em>: desapropriar, impor sanções, alterar contratos.'],
      ['Indisponibilidade','Ela <em>não é dona</em> do interesse público: licita, concursa, presta contas.'],
      ['Autotutela','Anula atos ilegais e revoga os inconvenientes, <em>sem precisar do juiz</em> (Súmula 473, STF).'],
      ['Motivação','Os atos que afetam direitos devem ser <em>fundamentados</em> (Lei 9.784/99, art. 50).']])},
    {id:'limpe',nav:'LIMPE',h:'Qual princípio foi violado?',lead:'Classifique.',html:()=>W.classify({buckets:['Legalidade','Impessoalidade','Moralidade','Publicidade','Eficiência'],items:[
      ['O prefeito cria uma taxa por decreto, sem lei.',0,'A Administração só age conforme a lei.'],
      ['A placa da obra pública traz a foto e o nome do prefeito.',1,'Vedada a promoção pessoal (CF, art. 37, §1º).'],
      ['O secretário nomeia a esposa para cargo em comissão.',2,'Nepotismo (Súmula Vinculante 13).'],
      ['O contrato público é mantido em sigilo, sem justificativa.',3,'A regra é a transparência.'],
      ['O pedido de aposentadoria fica 3 anos sem resposta.',4,'Dever de resultado e de duração razoável.']]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição, da lei e do STF.',html:()=>W.arts([
      ['CF, 37','Princípios','Legalidade, impessoalidade, moralidade, publicidade e eficiência.'],
      ['CF, 37, §1º','Promoção pessoal','A publicidade dos atos não pode conter nomes, símbolos ou imagens que caracterizem promoção pessoal.'],
      ['Lei 9.784, 2º','Processo administrativo','Legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.'],
      ['Súmula 473','STF','A Administração pode anular seus atos ilegais e revogá-los por conveniência, respeitados os direitos adquiridos.'],
      ['Súmula Vinculante 13','STF','A nomeação de parente até o 3º grau para cargo em comissão ou de confiança viola a Constituição.']])}
  ]
});
defLesson('ad-serv',{
  hero:()=>heroSeal('CONCESSÃO • PERMISSÃO • TARIFA • SERVIÇO ADEQUADO • '),
  title:['Serviços','públicos'],
  lead:'Quem presta o serviço, como é delegado, como é pago e quando pode ser interrompido.',
  sections:[
    {id:'delegacao',nav:'Delegação',h:'Concessão, permissão ou autorização?',lead:'Classifique.',html:()=>W.classify({buckets:['Concessão','Permissão','Autorização'],items:[
      ['Contrato de 30 anos com uma empresa, após licitação, para operar uma rodovia.',0,'Prazo determinado, pessoa jurídica, licitação (Lei 8.987/95, art. 2º, II).'],
      ['Contrato de adesão, precário, com um motorista para uma linha de transporte.',1,'Precária, pessoa física ou jurídica (art. 2º, IV e art. 40).'],
      ['Ato unilateral que permite um serviço de táxi, revogável a qualquer tempo.',2,'Ato discricionário e precário.'],
      ['Empresa de energia que distribui eletricidade num Estado inteiro, por contrato de longo prazo.',0,'Concessão de serviço público.']]})},
    {id:'corte',nav:'Pode cortar?',h:'A concessionária pode interromper o serviço?',lead:'Responda e veja.',html:()=>W.wizard({qs:[['emerg','É uma situação de emergência?'],['motivo','Há motivo técnico, de segurança das instalações ou inadimplemento do usuário?'],['aviso','Houve aviso prévio?'],['fds','O corte começaria numa sexta, sábado, domingo, feriado ou véspera?']],init:{emerg:false,motivo:true,aviso:true,fds:false},
      verdict:a=>a.emerg?{tone:'ok',t:'Pode interromper',d:'Em emergência, a interrupção não caracteriza descontinuidade (art. 6º, §3º).'}:!a.motivo?{tone:'bad',t:'Não pode',d:'Sem motivo técnico, de segurança ou inadimplemento, a interrupção viola a continuidade.'}:!a.aviso?{tone:'bad',t:'Não pode, sem aviso',d:'Fora da emergência, a interrupção exige aviso prévio (art. 6º, §3º).'}:a.fds?{tone:'bad',t:'Não neste dia',d:'O corte por inadimplemento não pode começar na sexta, sábado, domingo, feriado ou dia anterior a feriado (art. 6º, §4º).'}:{tone:'ok',t:'Pode interromper',d:'Motivo legal, aviso prévio e dia permitido. Atenção ao interesse da coletividade, como em hospitais.'}})},
    {id:'custeio',nav:'Taxa ou tarifa?',h:'Como o serviço é pago',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Taxa','Tributo, <em>compulsório</em>, por serviço público específico e divisível prestado ou posto à disposição (CTN, art. 77).'],
      ['Tarifa','<em>Preço público</em>, pago à concessionária pelo uso efetivo, como na água e na luz.'],
      ['COSIP','Contribuição para custear a <em>iluminação pública</em>, criada pelos Municípios (CF, art. 149-A).'],
      ['Modicidade','A tarifa deve ser <em>acessível</em>: é um dos requisitos do serviço adequado.']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição e da Lei 8.987/95.',html:()=>W.arts([
      ['CF, 175','Prestação','Incumbe ao Poder Público prestar os serviços públicos, diretamente ou sob concessão ou permissão, sempre por licitação.'],
      ['Lei 8.987, 2º','Conceitos','Concessão: delegação, por licitação, a pessoa jurídica ou consórcio, por prazo determinado. Permissão: a título precário, a pessoa física ou jurídica.'],
      ['Lei 8.987, 6º','Serviço adequado','Regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e modicidade.'],
      ['Lei 8.987, 6º, §3º','Interrupção','Não é descontinuidade a interrupção em emergência ou, com aviso prévio, por razão técnica, de segurança ou inadimplemento.']])}
  ]
});
defLesson('ad-ag',{
  hero:()=>heroSeal('CONCURSO • ESTÁGIO PROBATÓRIO • ESTABILIDADE • ART. 41 • '),
  title:['Agentes','públicos'],
  lead:'Quem age em nome do Estado, como entra e quando adquire estabilidade.',
  sections:[
    {id:'categorias',nav:'Categorias',h:'Que tipo de agente?',lead:'Classifique.',html:()=>W.classify({buckets:['Agente político','Servidor estatutário','Empregado público','Temporário','Particular em colaboração'],items:[
      ['O governador do Estado.',0,'Exerce função política por mandato.'],
      ['O analista aprovado em concurso, regido pelo estatuto.',1,'Cargo efetivo, regime estatutário.'],
      ['O funcionário concursado da Caixa Econômica, regido pela CLT.',2,'Emprego público em empresa estatal.'],
      ['O agente contratado por 1 ano para combater um surto de dengue.',3,'Necessidade temporária de excepcional interesse público (art. 37, IX).'],
      ['O jurado no Tribunal do Júri.',4,'Função pública transitória, sem vínculo profissional.']]})},
    {id:'estabilidade',nav:'Estabilidade',h:'O servidor já é estável?',lead:'Responda.',html:()=>W.wizard({qs:[['concurso','Foi nomeado para cargo efetivo por concurso público?'],['tres','Tem 3 anos de efetivo exercício?'],['avaliacao','Foi aprovado na avaliação especial de desempenho?']],init:{concurso:true,tres:false,avaliacao:false},
      verdict:a=>!a.concurso?{tone:'bad',t:'Não pode ser estável',d:'Estabilidade é só para cargo efetivo provido por concurso (art. 41). Cargo em comissão é de livre nomeação e exoneração.'}:!a.tres?{tone:'warn',t:'Em estágio probatório',d:'Ainda não completou 3 anos de efetivo exercício.'}:!a.avaliacao?{tone:'warn',t:'Ainda não é estável',d:'A avaliação especial de desempenho por comissão é condição para a estabilidade (art. 41, §4º).'}:{tone:'ok',t:'Estável',d:'Só perde o cargo por sentença transitada, processo administrativo com ampla defesa ou avaliação periódica de desempenho (art. 41, §1º).'}})},
    {id:'ingresso',nav:'Ingresso',h:'Regras de ingresso',lead:'Toque nos cartões.',html:()=>W.flips([
      ['Concurso','Cargo ou emprego efetivo exige <em>concurso de provas ou de provas e títulos</em> (art. 37, II).'],
      ['Cargo em comissão','Livre nomeação e exoneração, <em>só para direção, chefia e assessoramento</em> (art. 37, V).'],
      ['Temporários','Por tempo determinado, para <em>necessidade temporária de excepcional interesse público</em> (art. 37, IX).'],
      ['Validade do concurso','Até <em>2 anos</em>, prorrogável uma vez por igual período (art. 37, III).']])},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição.',html:()=>W.arts([
      ['37, II','Concurso','A investidura em cargo ou emprego público depende de aprovação prévia em concurso, ressalvados os cargos em comissão.'],
      ['37, IX','Temporários','A lei estabelece os casos de contratação por tempo determinado para necessidade temporária de excepcional interesse público.'],
      ['41','Estabilidade','São estáveis após 3 anos de efetivo exercício os servidores nomeados para cargo efetivo em virtude de concurso.'],
      ['41, §1º','Perda do cargo','Por sentença transitada, processo administrativo com ampla defesa ou avaliação periódica de desempenho.']])}
  ]
});
defLesson('ad-bens',{
  hero:()=>heroSeal('USO COMUM • USO ESPECIAL • DOMINICAIS • DESAPROPRIAÇÃO • '),
  title:['Bens públicos','e intervenção'],
  lead:'Os bens que pertencem ao Estado e as formas de o Estado restringir, ou tomar, a propriedade particular.',
  sections:[
    {id:'classes',nav:'Classes de bens',h:'Que tipo de bem público?',lead:'Classifique.',html:()=>W.classify({buckets:['Uso comum','Uso especial','Dominical'],items:[
      ['Uma praia.',0,'Rios, mares, estradas, ruas e praças (CC, art. 99, I).'],
      ['O prédio do fórum.',1,'Destinado a serviço ou estabelecimento da Administração (art. 99, II).'],
      ['Um terreno municipal vazio, sem destinação.',2,'Patrimônio disponível, alienável na forma da lei (arts. 99, III e 101).'],
      ['Uma escola pública.',1,'Afetada a um serviço público.'],
      ['Uma estrada federal.',0,'Uso de todos.']]})},
    {id:'intervencao',nav:'Intervenção',h:'Qual forma de intervenção?',lead:'Classifique.',html:()=>W.classify({buckets:['Servidão','Requisição','Ocupação temporária','Limitação','Tombamento','Desapropriação'],items:[
      ['A concessionária passa linhas de transmissão de energia pela fazenda.',0,'Direito real de uso sobre imóvel particular.'],
      ['Numa enchente, a Defesa Civil usa um galpão particular como abrigo.',1,'Perigo público iminente (CF, art. 5º, XXV).'],
      ['A Prefeitura usa o terreno vizinho para guardar máquinas durante uma obra.',2,'Uso transitório ligado a uma obra pública.'],
      ['A lei municipal exige recuo de 5 metros para novas construções.',3,'Restrição geral e gratuita.'],
      ['Um casarão colonial é protegido como patrimônio histórico.',4,'Decreto-Lei 25/37.'],
      ['O Estado toma o imóvel para construir um hospital, pagando indenização.',5,'Perda da propriedade por utilidade pública.']]})},
    {id:'desapropriacao',nav:'Desapropriação',h:'Como se paga a desapropriação',lead:'Depende do fundamento. Escolha.',html:()=>W.picker({opts:[
      {l:'Utilidade ou necessidade pública',v:1,c:'sage',t:'Dinheiro, prévio e justo',d:'A regra geral: hospital, estrada, escola. Indenização prévia, justa e em dinheiro.',art:'CF, art. 5º, XXIV'},
      {l:'Interesse social',v:1,c:'sage',t:'Dinheiro, prévio e justo',d:'Mesma regra de pagamento, mas para fins sociais, como habitação popular.',art:'CF, art. 5º, XXIV'},
      {l:'Urbanística sancionatória',v:.5,c:'brass',t:'Títulos da dívida pública',d:'Imóvel urbano não edificado ou subutilizado, depois de IPTU progressivo: resgatáveis em até 10 anos.',art:'CF, art. 182, §4º, III'},
      {l:'Reforma agrária',v:.5,c:'brass',t:'Títulos da dívida agrária',d:'Imóvel rural que não cumpre a função social; benfeitorias úteis e necessárias em dinheiro.',art:'CF, art. 184'},
      {l:'Confisco (expropriação)',v:0,c:'seal',t:'Sem indenização',d:'Propriedades com culturas ilegais de psicotrópicos ou exploração de trabalho escravo.',art:'CF, art. 243'}]})},
    {id:'arts',nav:'Artigos',h:'Os artigos, em ordem',lead:'Da Constituição e do Código Civil.',html:()=>W.arts([
      ['CC, 99','Classes','Bens de uso comum do povo, de uso especial e dominicais.'],
      ['CC, 100','Inalienabilidade','Os de uso comum e especial são inalienáveis enquanto conservarem essa qualificação.'],
      ['CF, 183, §3º','Imprescritibilidade','Os imóveis públicos não serão adquiridos por usucapião.'],
      ['CF, 5º, XXIV','Desapropriação','Por necessidade ou utilidade pública ou interesse social, com justa e prévia indenização em dinheiro.'],
      ['CF, 5º, XXV','Requisição','Em perigo público iminente, a autoridade pode usar a propriedade particular, com indenização ulterior se houver dano.']])}
  ]
});
