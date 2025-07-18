// ============================
//  ESTRUTURA DO SISTEMA (completa)
// ============================
const estruturaSistema = {
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
    'Caixa': {
        '': [
            'Abertura de Movimentação Operacional',
            'Anexar Imagem de Depósito',
            'Início de Operação Diária',
            'Movimento de Caixa',
            'Relatório de Cartões não Conciliados'
        ]
    },
    'Compras': {
        '': [
            'Devolução para distribuidora',
            'Processar Notas Pendentes de Entrada',
            'Produtos Sob Encomenda',
            'Relatório de notas compras e devoluções',
            'Sugestão de Compras'
        ]
    },
    'Configurações': {
        'Gestão Comercial': [
            'Cadastros'
        ],
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
    'Desenvolvimento': {
        'Framework': [
            'Cadastro manual técnico TI',
            'Gerador de DAO e VO'
        ],
        'Programa': [
            'Cadastro de Programas'
        ],
        '': [
            'Bug Report',
            'Exemplos Úteis',
            'FTP',
            'Gerador de atualização',
            'Relatório do Sistema'
        ]
    },
    'Estoque': {
        'Atualização': [
            'Balanço de Estoque',
            'Devolução NFe Romaneio CNC',
            'Verificador de Estoque'
        ],
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
        ]
    },
    'Folha': {
        'Cadastro': [
            'Cadastro de Departamento',
            'Histórico de Pagamento',
            'Vendedores',
            'Vendedores II'
        ],
        '': [
            'Cadastro Funcionários'
        ]
    },
    'Marketplace': {
        'Home&Home': [
            'Produto Marketplace'
        ],
        'Mercosul': [
            'Ofertas de Vendas',
            'Gerador de DAO e VO'
        ]
    },
    'NFe': {
        '': [
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
    'Receber': {
        'Atualização': [
            'Correção de cartões',
            'Correção e Alteração de Cheques'
        ],
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
        ]
    },
    'Suporte': {
        'Tutoriais': [
            'Imagens',
            'Tutorial'
        ],
        'Usuários': [
            'Confirmar/Validar dados',
            'Informações'
        ],
        '': [
            'Correção Nota Dv Duplicada',
            'Histórico de login',
            'Pacotes Disponíveis',
            'Pesquisa de Programa',
            'Programa sem manual',
            'SAF'
        ]
    },
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
    }
};


// ============================
//  FUNÇÕES DE VALIDAÇÃO
// ============================
function validarEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function validarNumeros(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
        event.preventDefault();
    }
}

function validarFormulario() {
    const emailInput = document.getElementById('email');
    const codigoInput = document.getElementById('codigo');

    if (!validarEmail(emailInput.value)) {
        alert('Por favor, insira um e-mail válido!');
        emailInput.focus();
        return false;
    }

    if (!/^\d+$/.test(codigoInput.value)) {
        alert('O código do operador deve conter apenas números!');
        codigoInput.focus();
        return false;
    }

    return true;
}

// ============================
//  ATUALIZAÇÃO DE MENUS DINÂMICOS
// ============================
function atualizaSubmenus() {
    const modulo = document.getElementById('modulo').value;
    const categoriaSelect = document.getElementById('categoria');
    const submenuSelect = document.getElementById('submenu');

    categoriaSelect.innerHTML = '';
    submenuSelect.innerHTML = '<option value="">-- Selecione --</option>';

    if (!modulo || !estruturaSistema[modulo]) {
        categoriaSelect.style.display = 'none';
        submenuSelect.style.display = 'none';
        return;
    }

    const isModuloDireto = Array.isArray(estruturaSistema[modulo]);

    if (isModuloDireto) {
        categoriaSelect.style.display = 'none';
        submenuSelect.style.display = 'block';

        submenuSelect.innerHTML = '<option value="">-- Selecione --</option>';
        estruturaSistema[modulo].forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.text = item;
            submenuSelect.add(option);
        });

    } else {
        categoriaSelect.style.display = 'block';
        submenuSelect.style.display = 'none';  // Oculta inicialmente

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = '-- Selecione --';
        categoriaSelect.add(defaultOption);

        for (const categoria in estruturaSistema[modulo]) {
            const option = document.createElement('option');
            option.value = categoria;
            option.text = categoria === '' ? 'Geral' : categoria;
            categoriaSelect.add(option);
        }

        categoriaSelect.onchange = function () {
            const categoria = this.value;
            submenuSelect.innerHTML = '<option value="">-- Selecione --</option>';

            const dadosCategoria = estruturaSistema[modulo][categoria];

            if (Array.isArray(dadosCategoria) && dadosCategoria.length > 0) {
                // Categoria com submenus
                submenuSelect.style.display = 'block';
                dadosCategoria.forEach(item => {
                    const option = document.createElement('option');
                    option.value = item;
                    option.text = item;
                    submenuSelect.add(option);
                });
            } else {
                // Categoria final sem submenu
                submenuSelect.style.display = 'none';
            }
        };
    }
}


// ============================
//  GERADOR DE PDF PERSONALIZADO
// ============================
function gerarPDFPersonalizado(dados) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configurações de layout
    const margin = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const contentWidth = pageWidth - margin * 2;
    
    // Cores do tema
    const primaryColor = [39, 119, 194]; // #2777c2
    const accentColor = [2, 78, 150];    // #024e96
    const lightGray = [245, 245, 245];   // #f5f5f5
    
    // 1. CABEÇALHO
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    // Logo ou título
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('FEEDBACK DO SISTEMA', pageWidth / 2, 25, { align: 'center' });
    
    // Data e hora
    doc.setFontSize(10);
    const agora = new Date();
    const dataHora = agora.toLocaleDateString('pt-BR') + ' às ' + agora.toLocaleTimeString('pt-BR');
    doc.text(`Gerado em: ${dataHora}`, pageWidth - margin - 5, 35, { align: 'right' });
    
    // 2. INFORMAÇÕES DO OPERADOR
    let yPos = 55;
    doc.setFontSize(14);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('DADOS DO OPERADOR', margin, yPos);
    
    // Linha decorativa
    doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.setLineWidth(0.5);
    doc.line(margin, yPos + 3, margin + 60, yPos + 3);
    yPos += 10;
    
    // Dados em formato tabela
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    
    const operadorData = [
        { label: 'Nome:', value: dados.nome },
        { label: 'Loja:', value: dados.loja },
        { label: 'E-mail:', value: dados.email },
        { label: 'Código:', value: dados.codigo }
    ];
    
    operadorData.forEach(item => {
        doc.setFont('helvetica', 'bold');
        doc.text(item.label, margin, yPos);
        doc.setFont('helvetica', 'normal');
        doc.text(item.value, margin + 20, yPos);
        yPos += 7;
    });
    
    yPos += 10;
    
    // 3. DETALHES DO FEEDBACK
    doc.setFontSize(14);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('DETALHES DO FEEDBACK', margin, yPos);
    doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.line(margin, yPos + 3, margin + 70, yPos + 3);
    yPos += 10;
    
    const feedbackData = [
        { label: 'Módulo:', value: dados.modulo },
        { label: 'Categoria:', value: dados.categoria },
        { label: 'Submenu:', value: dados.submenu }
    ];
    
    feedbackData.forEach(item => {
        doc.setFont('helvetica', 'bold');
        doc.text(item.label, margin, yPos);
        doc.setFont('helvetica', 'normal');
        doc.text(item.value, margin + 25, yPos);
        yPos += 7;
    });
    
    yPos += 10;
    
    // 4. TEXTO DO FEEDBACK
    doc.setFontSize(14);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('FEEDBACK', margin, yPos);
    doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.line(margin, yPos + 3, margin + 40, yPos + 3);
    yPos += 10;
    
    // Fundo do texto
    doc.setFillColor(lightGray[0], lightGray[1], lightGray[2]);
    const feedbackHeight = 6 * Math.ceil(dados.feedback.length / 100); // Aproximação
    doc.rect(margin, yPos - 3, contentWidth, feedbackHeight + 10, 'F');
    
    // Texto formatado
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    const splitText = doc.splitTextToSize(dados.feedback, contentWidth - 10);
    doc.text(splitText, margin + 5, yPos);
    yPos += feedbackHeight + 15;
    
    // 5. RODAPÉ
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('© ' + new Date().getFullYear() + ' - SYSADMCOM', 
            pageWidth / 2, pageHeight - 15, { align: 'center' });
    
    // Linha do rodapé
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 20, pageWidth - margin, pageHeight - 20);
    
    // 6. NUMERAÇÃO DE PÁGINAS
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text(`Página ${i} de ${pageCount}`, pageWidth - margin - 20, pageHeight - 10);
    }
    
    // Salvar o PDF
    doc.save(`Feedback_${dados.nome.replace(/ /g, '_')}_${agora.getTime()}.pdf`);
}

// ============================
//  ENVIO PARA A PLANILHA GOOGLE
// ============================
async function enviarParaPlanilha(dados) {
    try {
        // URL do seu Google Apps Script
        const url = 'https://script.google.com/macros/s/AKfycbxPypv6Ld2Jqz-c3iu8JP2KIITKCJDQnNInQ72t35vPIsFH0ObbP6tS4ZNinHnapQvE/exec';
        
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        });
        
        return { status: "success" };
        
    } catch (error) {
        console.error('Erro ao enviar para planilha:', error);
        throw error;
    }
}

// ============================
//  CONFIGURAÇÃO DO MODAL E FORMULÁRIO
// ============================
function configurarModal() {
    const form = document.getElementById('feedback-form');
    const modal = document.getElementById('modal-resumo');
    const resumoDados = document.getElementById('resumo-dados');
    const fecharModal = document.getElementById('fechar-modal');
    const gerarPDFBtn = document.getElementById('gerar-pdf');

    // Configura evento para fechar modal
    fecharModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Configura evento para gerar PDF
    gerarPDFBtn.addEventListener('click', () => {
        const dados = {
            nome: document.getElementById('operador').value,
            loja: document.getElementById('loja').value,
            email: document.getElementById('email').value,
            codigo: document.getElementById('codigo').value,
            modulo: document.getElementById('modulo').value,
            categoria: document.getElementById('categoria').value,
            submenu: document.getElementById('submenu').value,
            feedback: document.getElementById('feedback').value
        };
        gerarPDFPersonalizado(dados);
    });

    // Configura envio do formulário
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        if (!validarFormulario()) return;

        // Mostrar indicador de carregamento
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        const dados = {
            loja: document.getElementById('loja').value,
            codigo: document.getElementById('codigo').value,
            nome: document.getElementById('operador').value,
            email: document.getElementById('email').value,
            modulo: document.getElementById('modulo').value,
            categoria: document.getElementById('categoria').value,
            submenu: document.getElementById('submenu').value,
            feedback: document.getElementById('feedback').value
        };

        try {
            await enviarParaPlanilha(dados);
            
            // Prepara o resumo para o modal
            let htmlResumo = `
                <h2 style="color: var(--primary); margin-bottom: 15px;">Feedback Enviado com Sucesso!</h2>
                <p>Seu feedback foi registrado com sucesso. Agradecemos pela contribuição!</p>
                
                <div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid var(--primary);">
                    <p><strong>Resumo:</strong></p>
                    <p><strong>Nome:</strong> ${dados.nome}</p>
                    <p><strong>Loja:</strong> ${dados.loja}</p>
                    <p><strong>Módulo:</strong> ${dados.modulo}</p>
                    <p><strong>Categoria:</strong> ${dados.categoria}</p>
                </div>
                
                <p style="font-size: 0.9rem; color: #666;">Você pode baixar um comprovante em PDF usando o botão abaixo.</p>
            `;
            
            resumoDados.innerHTML = htmlResumo;
            modal.classList.remove('hidden');
            
        } catch (error) {
            alert('Erro ao enviar feedback. Por favor, tente novamente mais tarde.');
            console.error('Erro no envio:', error);
        } finally {
            // Restaurar o botão
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
}

// ============================
//  INICIALIZAÇÃO DO SISTEMA
// ============================
document.addEventListener('DOMContentLoaded', function() {
    // Configura eventos dos selects
    document.getElementById('modulo').addEventListener('change', atualizaSubmenus);
    
    // Configura validação do campo código
    document.getElementById('codigo').addEventListener('keypress', validarNumeros);
    
    // Inicializa os selects
    atualizaSubmenus();
    
    // Configura modal e formulário
    configurarModal();
});