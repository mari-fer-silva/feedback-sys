// ============================
//  CONSTANTES DE PLATAFORMA
// ============================
const APP_MODULOS = ['Cadastro de Promoções', 'Liberação de Pedido Adicional'];
// ============================
//  ESTRUTURA DO SISTEMA (Sistema Web)
// ============================
const estruturaSistema = {
  'Vendas': {
    'Cadastro': [
      'Cliente',
      'Gestão Comercial',
      'Ordens de Entrega',
      'Pedido de venda II',
      'Pessoas',
      'Romaneios de Entrega',
      'Romaneios de Entrega II',
      'Solicitar Encomenda',
      'Vendas para nota fiscal'
    ],
    'Relatório': [
      'Agenda de Entregas',
      'Analise de Canal Vendas',
      'Análise Operacional de Vendas',
      'Contatos E-commerce',
      'Detalhamento de Romaneio',
      'Estatística Gestão Comercial',
      'Indústrias Coligadas',
      'Mapeamento de Vendas',
      'Pesquisa de Vendas',
      'Relatório de Analise de Vendas',
      'Relatórios da Distribuidora'
    ],
    'Atualização': [
      'Alterar produto da venda',
      'Cancelamento de Vendas',
      'Pedido de venda - Alterar/Cancelar produto',
      'Solicitação para troca e devolução',
      'Troca de Mercadoria'
    ]
  },
  'Estoque': {
    'Cadastro': [
      'Analise Cadastro de Produto',
      'Cadastro de Detalhe',
      'Cadastro de Medidas de Produtos',
      'Cadastro de Promoção Líquida TIPO 1',
      'Cadastro de Promoções',
      'Cadastro de Show Room',
      'Fornecedores',
      'Guia de Atendimento',
      'Marca por Loja',
      'Produto',
      'Produtos com Defeito',
      'Reserva para transferências de produtos',
      'Solicitação de Produtos',
      'Solicitar Reserva Produto',
      'Transportadora'
    ],
    'Relatório': [
      'Analise de Movimento de Notas',
      'Impressão de Romaneio',
      'Lista de Preço Nova',
      'Mapa de Estoque',
      'Movimento de Estoque',
      'Produtos com Defeito',
      'ProduTos não movimentados',
      'Produtos Pendentes de Devoluções',
      'Produtos Pendentes de Retirada',
      'Rel. Promoções Ativas'
    ],
    'Atualização': [
      'Balanço de Estoque',
      'Devolução NFe Romaneio CNC',
      'Verificador de Estoque'
    ]
  },
  'Receber': {
    'Cadastro': [
      'Anexar comprovante de cartão',
      'Cadastro Administradora de Cartões',
      'Cadastro de Bancos e Agências',
      'Cadastro de terminal',
      'Liberação de comprovante anexado',
      'Liberação Terminal',
      'Vendas Online'
    ],
    'Relatório': [
      'Demonstrativo de Fundos Período',
      'Demonstrativo Operacional',
      'Protocolo de Cartões',
      'Relação de Cartões',
      'Relação de cartões BLU',
      'Relação de Terminal',
      'Relatório de Franquias'
    ],
    'Atualização': [
      'Correção de cartões',
      'Correção e Alteração de Cheques'
    ]
  },
  'Pagar': {
    'Cadastro': [
      'Auditoria de agenda de títulos a pagar',
      'Cadastro de Devedores',
      'Conta Orçamentária',
      'Solicitação de Pagamento',
      'Títulos à Pagar',
      'Títulos Recusados'
    ],
    'Relatório': [
      'Análise Pagamento Fornecedor',
      'Baixa de Pagto de NFE Devolução',
      'Controle de Pagamento de Contratos',
      'Relatório de Títulos Pagos'
    ]
  },
  'Compras': [
    'Devolução para distribuidora',
    'Processar Notas Pendentes de Entrada',
    'Produtos Sob Encomenda',
    'Relatório de notas compras e devoluções',
    'Sugestão de Compras'
  ],
  'Caixa': [
    'Abertura de Movimentação Operacional',
    'Anexar Imagem de Depósito',
    'Início de Operação Diária',
    'Movimento de Caixa',
    'Relatório de Cartões não Conciliados'
  ],
  'Bancário': {
    'Cadastro': [
      'Baixa de Cartões',
      'Cadastro de Contas Bancárias',
      'Conciliação BLUE',
      'Conciliação de Pagamento de Cartões'
    ],
    'Relatório': [
      'Extratos de Gestão de Contas do Arranjo',
      'Informe mensal de cartões'
    ]
  },
  'Configurações': {
    'Gestão Comercial': [ 'Cadastros' ],
    '': [
      'Cadastro de Email',
      'Cadastro de Nível de Acesso',
      'Cadastro de Usuários',
      'Cadastro Operacional CNPJ',
      'Central de mensagens',
      'Configuração Ponto de Venda',
      'Desativação de Loja',
      'Nota de atualizações',
      'Ponto de Venda',
      'Requisitos para Implantação Sysadm Ponto de Venda'
    ]
  },
  'NFe': [
    'Atendimento NFe',
    'Cadastro Certificado',
    'Cadastro CFOP',
    'CFOP do Operador',
    'Compras com aumento de preços',
    'Configuração ICMS',
    'Configuração PIS / COFINS',
    'Confirmação de recebimento de notas',
    'Contratar Serviços de parceiros',
    'Devolução de Nota',
    'Devolução de Produto de Compra',
    'Download manual NFe',
    'Email envio NFe',
    'Estorno de Emissão de Notas',
    'Inventário Fiscal - Sped Grupo H',
    'Leitura de NFe',
    'Notas de Atendimento Recusadas',
    'Pedido de Produtos',
    'Pendências de NFe de Entrada',
    'Pesquisa de notas fiscais',
    'Processar Notas de Compra',
    'Produto da NFE Sem Cadastro',
    'Serviços Contratados de Parceiros',
    'Transferência da distribuidora'
  ],
  'Folha': {
    'Cadastro': [
      'Cadastro de Departamento',
      'Histórico de Pagamento',
      'Vendedores',
      'Vendedores II'
    ],
    '': [ 'Cadastro Funcionários' ]
  },
  'Suporte': {
    'Tutoriais': [ 'Imagens', 'Tutorial' ],
    'Usuários': [ 'Confirmar/Validar dados', 'Informações' ],
    '': [
      'Correção Nota Dv Duplicada',
      'Histórico de login',
      'Pacotes Disponíveis',
      'Pesquisa de Programa',
      'Programa sem manual',
      'SAF'
    ]
  },
  'Desenvolvimento': {
    'Programa': [ 'Cadastro de Programas' ],
    'Framework': [ 'Cadastro manual técnico TI', 'Gerador de DAO e VO' ],
    '': [ 'Bug Report', 'Exemplos Úteis', 'FTP', 'Gerador de atualização', 'Relatório do Sistema' ]
  },
  'Marketplace': {
    'Home&Home': [ 'Produto Marketplace' ],
    'Mercosul': [ 'Ofertas de Vendas', 'Gerador de DAO e VO' ]
  }
};

// ============================
//  VALIDAÇÃO
// ============================
function validarEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

function validarNumeros(event) {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode < 48 || charCode > 57) event.preventDefault();
}

function validarFormulario() {
  const emailInput = document.getElementById('email');
  const codigoInput = document.getElementById('codigo');
  const plataformaSelect = document.getElementById('plataforma');
  const moduloSelect = document.getElementById('modulo');

  if (!validarEmail(emailInput.value)) {
    alert('Por favor, insira um e-mail válido!');
    emailInput.focus(); return false;
  }

  if (!/^\d+$/.test(codigoInput.value)) {
    alert('O código do operador deve conter apenas números!');
    codigoInput.focus(); return false;
  }

  if (!plataformaSelect.value) {
    alert('Selecione a Plataforma (Aplicativo ou Sistema Web).');
    plataformaSelect.focus(); return false;
  }

  if (!moduloSelect.value) {
    alert('Selecione o Módulo.');
    moduloSelect.focus(); return false;
  }

  return true;
}

// ============================
//  UI: PLATAFORMA/MÓDULOS/SUBMENUS
// ============================
function popularModulos(plataforma) {
  const moduloSelect = document.getElementById('modulo');
  moduloSelect.innerHTML = '<option value="">Selecione o módulo</option>';

  const categoriaGroup = document.getElementById('categoria-group');
  const submenuGroup = document.getElementById('submenu-group');

  if (plataforma === 'Aplicativo') {
   
    APP_MODULOS.forEach(m => {
      const op = document.createElement('option');
      op.value = m; op.text = m;
      moduloSelect.add(op);
    });
    // Oculta categoria/submenu para App
    categoriaGroup.classList.add('hidden');
    submenuGroup.classList.add('hidden');
  } else if (plataforma === 'Sistema Web') {
    // Todos os módulos da estrutura
    Object.keys(estruturaSistema).forEach(m => {
      const op = document.createElement('option');
      op.value = m; op.text = m;
      moduloSelect.add(op);
    });
  } else {
    categoriaGroup.classList.add('hidden');
    submenuGroup.classList.add('hidden');
  }
}

function atualizaSubmenus() {
  const plataforma = document.getElementById('plataforma').value;
  const modulo = document.getElementById('modulo').value;

  const categoriaGroup = document.getElementById('categoria-group');
  const submenuGroup = document.getElementById('submenu-group');
  const categoriaSelect = document.getElementById('categoria');
  const submenuSelect = document.getElementById('submenu');

  // Reseta selects
  categoriaSelect.innerHTML = '<option value="N/A">N/A</option>';
  submenuSelect.innerHTML = '<option value="">-- Selecione --</option>';

  // Para Aplicativo, não há categorias/submenus
  if (plataforma === 'Aplicativo') {
    categoriaGroup.classList.add('hidden');
    submenuGroup.classList.add('hidden');
    return;
  }

  // Para Sistema Web, segue lógica dinâmica
  if (!modulo || !estruturaSistema[modulo]) {
    categoriaGroup.classList.add('hidden');
    submenuGroup.classList.add('hidden');
    return;
  }

  const moduloData = estruturaSistema[modulo];

  // Módulo direto (array) -> sem categoria, só submenu
  if (Array.isArray(moduloData)) {
    categoriaGroup.classList.add('hidden');
    submenuGroup.classList.remove('hidden');

    submenuSelect.innerHTML = '<option value="">-- Selecione --</option>';
    moduloData.forEach(item => {
      const option = document.createElement('option');
      option.value = item;
      option.text = item;
      submenuSelect.add(option);
    });
    return;
  }

  // Módulo com categorias (objeto)
  categoriaGroup.classList.remove('hidden');
  submenuGroup.classList.add('hidden');

  categoriaSelect.innerHTML = '<option value="">-- Selecione --</option>';
  for (const categoria in moduloData) {
    const option = document.createElement('option');
    option.value = categoria;
    option.text = categoria === '' ? 'Geral' : categoria;
    categoriaSelect.add(option);
  }

  categoriaSelect.onchange = function () {
    const categoria = this.value;
    submenuSelect.innerHTML = '<option value="">-- Selecione --</option>';

    const dadosCategoria = moduloData[categoria];
    if (Array.isArray(dadosCategoria) && dadosCategoria.length > 0) {
      submenuGroup.classList.remove('hidden');
      dadosCategoria.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.text = item;
        submenuSelect.add(option);
      });
    } else {
      submenuGroup.classList.add('hidden');
    }
  };

  // Alinha estado inicial quando troca o módulo
  categoriaSelect.dispatchEvent(new Event('change'));
}

// ============================
//  PDF
// ============================
function gerarPDFPersonalizado(dados) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert('Biblioteca jsPDF não carregada.');
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Layout
  const margin = 15;
  const pageWidth  = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const contentWidth = pageWidth - margin * 2;
  const lineH = 7;
  const footerY = pageHeight - 15;

  // Colunas: rótulo e valor (fixo pra não grudar)
  const labelX = margin;
  const valueX = margin + 35; // <- coluna de valores
  const valueXDetails = margin + 35;

  // Cores
  const primary = [39,119,194];
  const accent  = [2,78,150];
  const light   = [245,245,245];

  const val = (v, fb='—') => (v && String(v).trim() ? String(v) : fb);
  const valNA = (v) => (v && String(v).trim() ? String(v) : 'N/A');

  function header() {
    doc.setFillColor(...primary);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(255,255,255);
    doc.text('FEEDBACK DO SISTEMA', pageWidth/2, 25, {align:'center'});

    const dh = new Date().toLocaleDateString('pt-BR') + ' às ' + new Date().toLocaleTimeString('pt-BR');
    doc.setFontSize(10);
    doc.text(`Gerado em: ${dh}`, pageWidth - margin - 5, 35, {align:'right'});
  }
  function footer() {
    const pageCount = doc.internal.getNumberOfPages();
    const pageNum   = doc.internal.getCurrentPageInfo().pageNumber;
    doc.setFontSize(10);
    doc.setTextColor(100,100,100);
    doc.text('© ' + new Date().getFullYear() + ' - SYSADMCOM', pageWidth/2, footerY, {align:'center'});
    doc.setTextColor(150,150,150);
    doc.text(`Página ${pageNum} de ${pageCount}`, pageWidth - 25, pageHeight - 10);
  }
  function needPage(nextY) {
    if (nextY > footerY - 20) {
      footer();
      doc.addPage();
      header();
      return 55;
    }
    return nextY;
  }

  header();

  // ---- DADOS DO OPERADOR ----
  let y = 55;
  doc.setTextColor(...primary);
  doc.setFont('helvetica','bold');
  doc.setFontSize(14);
  doc.text('DADOS DO OPERADOR', margin, y);
  doc.setDrawColor(...accent);
  doc.setLineWidth(0.5);
  doc.line(margin, y+3, margin+60, y+3);
  y += 10;

  doc.setFontSize(11);
  doc.setTextColor(0,0,0);

  function linhaRotuloValor(rotulo, valor, colValueX) {
    y = needPage(y + lineH);
    doc.setFont('helvetica','bold');  doc.text(rotulo, labelX, y);
    doc.setFont('helvetica','normal');doc.text(valor,   colValueX, y);
  }

  linhaRotuloValor('Nome:',   val(dados.nome), valueX);
  linhaRotuloValor('Loja:',   val(dados.loja), valueX);
  linhaRotuloValor('E-mail:', val(dados.email), valueX);
  linhaRotuloValor('Código:', val(dados.codigo), valueX);
  y += 5;

  // ---- DETALHES DO FEEDBACK ----
  y = needPage(y + lineH);
  doc.setTextColor(...primary);
  doc.setFont('helvetica','bold');
  doc.setFontSize(14);
  doc.text('DETALHES DO FEEDBACK', margin, y);
  doc.setDrawColor(...accent);
  doc.line(margin, y+3, margin+70, y+3);
  y += 10;

  doc.setFontSize(11);
  doc.setTextColor(0,0,0);
  linhaRotuloValor('Plataforma:', val(dados.plataforma,'N/A'), valueXDetails);
  linhaRotuloValor('Módulo:',     val(dados.modulo,'N/A'),     valueXDetails);
  linhaRotuloValor('Categoria:',  valNA(dados.categoria),      valueXDetails);
  linhaRotuloValor('Submenu:',    valNA(dados.submenu),        valueXDetails);
  y += 5;

  // ---- FEEDBACK (caixa com wrap e quebra) ----
  y = needPage(y + lineH);
  doc.setTextColor(...primary);
  doc.setFont('helvetica','bold');
  doc.setFontSize(14);
  doc.text('FEEDBACK', margin, y);
  doc.setDrawColor(...accent);
  doc.line(margin, y+3, margin+40, y+3);
  y += 10;

  const text = val(dados.feedback, '');
  const lines = doc.splitTextToSize(text, contentWidth - 10);
  let idx = 0;
  while (idx < lines.length) {
    // calcula quantas linhas cabem nesta página
    const maxLines = Math.floor((footerY - 30 - y) / 6); // 6 ~ altura real de linha 11pt
    if (maxLines <= 0) {
      footer();
      doc.addPage();
      header();
      y = 55;
    }
    const take = Math.max(1, Math.min(maxLines, lines.length - idx));
    const chunk = lines.slice(idx, idx + take);
    const boxHeight = chunk.length * 6 + 10;

    // caixa
    doc.setFillColor(...light);
    doc.rect(margin, y - 3, contentWidth, boxHeight, 'F');

    // texto
    doc.setFont('helvetica','normal');
    doc.setFontSize(11);
    let ty = y;
    for (const ln of chunk) {
      doc.text(ln, margin + 5, ty);
      ty += 6;
    }
    y = ty + 7; // espaço após a caixa
    idx += take;
  }

  footer();

  const now = new Date().getTime();
  const file = `Feedback_${val(dados.nome,'Operador').replace(/\s+/g,'_')}_${now}.pdf`;
  doc.save(file);
}

// ============================
//  ENVIO PARA A PLANILHA GOOGLE
// ============================
async function enviarParaPlanilha(dados) {
  const url = 'https://script.google.com/macros/s/AKfycbyYGnKiTJN2OPFPzbfvyWqs8xqqvr7DOZ-e4wI23gkueKq4I_AgRn4MfPNIEpiGIkW8/exec';

  // IMPORTANTE: use 'text/plain' para ser "simple request" e evitar preflight.
  // Mantém no-cors para não bloquear no browser (resposta ficará 'opaque', mas envia certinho).
  const resp = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(dados)
  });

  // Como 'no-cors' não permite ler a resposta, apenas retornamos sucesso local.
  return { status: "success" };
}


// ============================
//  MODAL + FORM
// ============================
const PLATAFORMAS = ['Aplicativo', 'Sistema Web'];
const MODULOS_WEB  = ['Vendas','Estoque','Receber','Pagar','Compras','Caixa','Bancário','Configurações','NFe','Folha','Suporte','Desenvolvimento','Marketplace'];
const MODULOS_APP  = ['Cadastro de Promoções', 'Liberação de Pedido Adicional'];
const TODOS_MODULOS = MODULOS_WEB.concat(MODULOS_APP);

function coletarDadosFormulario() {
  const plataformaEl = document.getElementById('plataforma');
  const moduloEl = document.getElementById('modulo');

  let plataforma = (plataformaEl?.value || '').trim();
  let modulo = (moduloEl?.value || '').trim();

  // Auto-correção caso venham trocados
  const PLATAFORMAS = ['Aplicativo','Sistema Web'];
  const MODULOS_WEB  = ['Vendas','Estoque','Receber','Pagar','Compras','Caixa','Bancário','Configurações','NFe','Folha','Suporte','Desenvolvimento','Marketplace'];
  const MODULOS_APP  = ['Cadastro de Promoções', 'Liberação de Pedido Adicional'];
  const TODOS_MODULOS = MODULOS_WEB.concat(MODULOS_APP);

  if (TODOS_MODULOS.includes(plataforma) && PLATAFORMAS.includes(modulo)) {
    const tmp = plataforma; plataforma = modulo; modulo = tmp;
  }

  if (!PLATAFORMAS.includes(plataforma)) {
    // fallback defensivo (evita mandar string vazia)
    plataforma = '';
  }

  // ... resto igual
  const categoriaGroup = document.getElementById('categoria-group');
  const submenuGroup   = document.getElementById('submenu-group');

  const categoriaVal = (plataforma === 'Aplicativo' || categoriaGroup.classList.contains('hidden'))
    ? 'N/A' : (document.getElementById('categoria').value || 'N/A');

  const submenuVal = (plataforma === 'Aplicativo' || submenuGroup.classList.contains('hidden'))
    ? 'N/A' : (document.getElementById('submenu').value || 'N/A');

  const dados = {
    nome: document.getElementById('operador').value,
    loja: document.getElementById('loja').value,
    email: document.getElementById('email').value,
    codigo: document.getElementById('codigo').value,
    plataforma, // <- agora garantido
    modulo,
    categoria: categoriaVal,
    submenu: submenuVal,
    feedback: document.getElementById('feedback').value
  };

  console.table(dados);
  return dados;
}



function configurarModal() {
  const form = document.getElementById('feedback-form');
  const modal = document.getElementById('modal-resumo');
  const resumoDados = document.getElementById('resumo-dados');
  const fecharModal = document.getElementById('fechar-modal');
  const gerarPDFBtn = document.getElementById('gerar-pdf');

  fecharModal.addEventListener('click', () => modal.classList.add('hidden'));
  gerarPDFBtn.addEventListener('click', () => gerarPDFPersonalizado(coletarDadosFormulario()));

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (!validarFormulario()) return;

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    const dados = coletarDadosFormulario();

    try {
      await enviarParaPlanilha(dados);

      const htmlResumo = `
        <h2 style="color: var(--primary); margin-bottom: 15px;">Feedback Enviado com Sucesso!</h2>
        <p>Seu feedback foi registrado com sucesso. Agradecemos pela contribuição!</p>
        <div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid var(--primary);">
          <p><strong>Nome do Operador:</strong> ${dados.nome}</p>
          <p><strong>E-mail:</strong> ${dados.email}</p>
          <p><strong>Nome da Loja:</strong> ${dados.loja}</p>
          <p><strong>Código do Operador:</strong> ${dados.codigo}</p>
          <p><strong>Plataforma:</strong> ${dados.plataforma}</p>
          <p><strong>Módulo:</strong> ${dados.modulo}</p>
          <p><strong>Categoria:</strong> ${dados.categoria}</p>
          <p><strong>Submenu:</strong> ${dados.submenu}</p>
          <p><strong>Feedback sobre a tela:</strong> ${dados.feedback}</p>
        </div>
        <p style="font-size: 0.9rem; color: #666;">Você pode baixar um comprovante em PDF usando o botão abaixo.</p>
      `;
      resumoDados.innerHTML = htmlResumo;
      modal.classList.remove('hidden');
    } catch (error) {
      alert('Erro ao enviar feedback. Por favor, tente novamente mais tarde.');
      console.error('Erro no envio:', error);
    } finally {
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    }
  });
}

// Eventos de UI
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('codigo').addEventListener('keypress', validarNumeros);

  // Reage à plataforma para popular módulos
  const plataformaSelect = document.getElementById('plataforma');
  const moduloSelect = document.getElementById('modulo');

  plataformaSelect.addEventListener('change', () => {
    popularModulos(plataformaSelect.value);
    // Limpa seleção de módulo e submenus sempre que mudar plataforma
    moduloSelect.value = '';
    atualizaSubmenus();
  });

  // Reage à troca de módulo (só afeta Sistema Web)
  moduloSelect.addEventListener('change', atualizaSubmenus);

  // Estado inicial
  popularModulos(plataformaSelect.value); // vazio
  atualizaSubmenus();
  configurarModal();
});
