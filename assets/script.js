// ============================
//  ESTRUTURA DO SISTEMA (completa)
// ============================
const estruturaSistema = {
    'Vendas': {
        'CADASTRO': [
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
        'RELATÓRIO': [
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
        'ATUALIZAÇÃO': [
            'Alterar produto da venda',
            'Cancelamento de Vendas',
            'Pedido de venda - Alterar/Cancelar produto',
            'Solicitação para troca e devolução',
            'Troca de Mercadoria'
        ]
    },
    'Estoque': {
        'CADASTRO': [
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
        'RELATÓRIO': [
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
        'ATUALIZAÇÃO': [
            'Balanço de Estoque',
            'Devolução NFe Romaneio CNC',
            'Verificador de Estoque'
        ]
    },
    'Receber': {
        'CADASTRO': [
            'Anexar comprovante de cartão',
            'Cadastro Administradora de Cartões',
            'Cadastro de Bancos e Agências',
            'Cadastro de terminal',
            'Liberação de comprovante anexado',
            'Liberação Terminal',
            'Vendas Online'
        ],
        'RELATÓRIO': [
            'Demonstrativo de Fundos Período',
            'Demonstrativo Operacional',
            'Protocolo de Cartões',
            'Relação de Cartões',
            'Relação de cartões BLU',
            'Relação de Terminal',
            'Relatório de Franquias'
        ],
        'ATUALIZAÇÃO': [
            'Correção de cartões',
            'Correção e Alteração de Cheques'
        ]
    },
    'Pagar': {
        'CADASTRO': [
            'Auditoria de agenda de títulos a pagar',
            'Cadastro de Devedores',
            'Conta Orçamentária',
            'Solicitação de Pagamento',
            'Títulos à Pagar',
            'Títulos Recusados'
        ],
        'RELATÓRIO': [
            'Análise Pagamento Fornecedor',
            'Baixa de Pagto de NFE Devolução',
            'Controle de Pagamento de Contratos',
            'Relatório de Títulos Pagos'
        ]
    },
    'Compras': {
        'OUTROS': [
            'Devolução para distribuidora',
            'Processar Notas Pendentes de Entrada',
            'Produtos Sob Encomenda',
            'Relatório de notas compras e devoluções',
            'Sugestão de Compras'
        ]
    },
    'Caixa': {
        'OUTROS': [
            'Abertura de Movimentação Operacional',
            'Anexar Imagem de Depósito',
            'Início de Operação Diária',
            'Movimento de Caixa',
            'Relatório de Cartões não Conciliados'
        ]
    },
    'Bancário': {
        'CADASTRO': [
            'Baixa de Cartões',
            'Cadastro de Contas Bancárias',
            'Conciliação BLUE',
            'Conciliação de Pagamento de Cartões'
        ],
        'RELATÓRIO': [
            'Extratos de Gestão de Contas do Arranjo',
            'Informe mensal de cartões'
        ]
    },
    'Configurações': {
        'GESTÃO COMERCIAL': [
            'Cadastros'
        ],
        'OUTROS': [
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
    'NFe': {
        'OUTROS': [
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
    'Folha': {
        'CADASTRO': [
            'Cadastro de Departamento',
            'Histórico de Pagamento',
            'Vendedores',
            'Vendedores II'
        ],
        'OUTROS': [
            'Cadastro Funcionários'
        ]
    },
    'Suporte': {
        'TUTORIAIS': [
            'Imagens',
            'Tutorial'
        ],
        'USUÁRIOS': [
            'Confirmar/Validar dados',
            'Informações'
        ],
        'OUTROS': [
            'Correção Nota Dv Duplicada',
            'Histórico de login',
            'Pacotes Disponíveis',
            'Pesquisa de Programa',
            'Programa sem manual',
            'SAF'
        ]
    },
    'Desenvolvimento': {
        'PROGRAMA': [
            'Cadastro de Programas'
        ],
        'FRAMEWORK': [
            'Cadastro manual técnico TI',
            'Gerador de DAO e VO'
        ],
        'OUTROS': [
            'Bug Report',
            'Exemplos Úteis',
            'FTP',
            'Gerador de atualização',
            'Relatório do Sistema'
        ]
    },
    'Marketplace': {
        'OUTROS': [
            'Produto Marketplace',
            'Ofertas de Vendas'
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

    // Limpa os selects
    categoriaSelect.innerHTML = '';
    submenuSelect.innerHTML = '<option value="">Selecione uma categoria primeiro</option>';

    if (modulo && estruturaSistema[modulo]) {
        // Adiciona opção padrão
        const defaultOptionCat = document.createElement('option');
        defaultOptionCat.value = '';
        defaultOptionCat.text = 'Selecione uma categoria';
        categoriaSelect.add(defaultOptionCat);

        // Preenche categorias
        for (const categoria in estruturaSistema[modulo]) {
            const option = document.createElement('option');
            option.value = categoria;
            option.text = categoria;
            categoriaSelect.add(option);
        }

        // Configura o evento para quando a categoria mudar
        categoriaSelect.onchange = function() {
            const categoriaSelecionada = this.value;
            submenuSelect.innerHTML = '';

            if (categoriaSelecionada && estruturaSistema[modulo][categoriaSelecionada]) {
                const defaultOptionSub = document.createElement('option');
                defaultOptionSub.value = '';
                defaultOptionSub.text = 'Selecione um submenu';
                submenuSelect.add(defaultOptionSub);

                estruturaSistema[modulo][categoriaSelecionada].forEach(item => {
                    const option = document.createElement('option');
                    option.value = item;
                    option.text = item;
                    submenuSelect.add(option);
                });
            } else {
                const optionSub = document.createElement('option');
                optionSub.value = '';
                optionSub.text = 'Selecione uma categoria válida';
                submenuSelect.add(optionSub);
            }
        };
    } else {
        const optionCat = document.createElement('option');
        optionCat.value = '';
        optionCat.text = 'Selecione um módulo primeiro';
        categoriaSelect.add(optionCat);
    }
}

// ============================
//  ENVIO PARA A PLANILHA GOOGLE
// ============================
function enviarParaPlanilha(dados) {
    const url = 'https://script.google.com/macros/s/AKfycbzgGwbS3VGd1EV5KK0-mdIpf0oosvekiwX4K15owcinGPrNoD42alAqS0dsmbcBKOtQ/exec';

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    .then(response => response.text())
    .then(data => {
        console.log('Enviado à planilha:', data);
        alert('Feedback enviado com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar para a planilha:', error);
        alert('Erro ao enviar feedback. Tente novamente.');
    });
}

// ============================
//  CONFIGURAÇÃO DO MODAL E PDF
// ============================
function configurarModal() {
    const form = document.getElementById('feedback-form');
    const modal = document.getElementById('modal-resumo');
    const resumoDados = document.getElementById('resumo-dados');
    const fecharModal = document.getElementById('fechar-modal');
    const gerarPDFBtn = document.getElementById('gerar-pdf');

    // Garante que o modal comece oculto
    modal.classList.add('hidden');

    // Configura evento para fechar modal
    fecharModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        form.reset();
    });

    // Configura evento para gerar PDF
    gerarPDFBtn.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const texto = resumoDados.innerText;
        const agora = new Date();
        const dataHora = agora.toLocaleDateString('pt-BR') + ' ' + agora.toLocaleTimeString('pt-BR');
        const titulo = `Resumo do Feedback\nGerado em: ${dataHora}\n\n`;
        const linhas = doc.splitTextToSize(titulo + texto, 180);
        doc.text(linhas, 10, 20);
        doc.save(`resumo_feedback_${agora.getTime()}.pdf`);
    });

    // Configura envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!validarFormulario()) return;

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

        // Envia para a planilha Google
        enviarParaPlanilha(dados);

        // Prepara o resumo para o modal
        let htmlResumo = `
            <h2 style="color: var(--primary); margin-bottom: 10px;">Resumo do Feedback Enviado</h2>
            
            <div style="margin-bottom: 20px;">
                <p><strong>Nome do Operador:</strong> ${dados.nome}</p>
                <p style="margin-left: 20px;"><strong>Loja:</strong> ${dados.loja}</p>
                
                <p><strong>E-mail:</strong> ${dados.email}</p>
                <p style="margin-left: 20px;"><strong>Código:</strong> ${dados.codigo}</p>
                
                <p><strong>Módulo:</strong> ${dados.modulo}</p>
                <p style="margin-left: 20px;"><strong>Categoria:</strong> ${dados.categoria}</p>
                
                <p><strong>Submenu:</strong> ${dados.submenu}</p>
                
                <p><strong>Feedback:</strong></p>
                <div style="margin-left: 20px; padding: 10px; background: #f5f5f5; border-radius: 5px;">
                    ${dados.feedback || 'Nenhum feedback fornecido.'}
                </div>
            </div>
        `;

        resumoDados.innerHTML = htmlResumo;
        modal.classList.remove('hidden');
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

async function enviarParaPlanilha(dados) {
    try {
        // URL do seu Google Apps Script (substitua pela sua URL real)
        const url = 'https://script.google.com/macros/s/AKfycbxPypv6Ld2Jqz-c3iu8JP2KIITKCJDQnNInQ72t35vPIsFH0ObbP6tS4ZNinHnapQvE/exec';
        
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors', // Modo no-cors para evitar problemas
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        });
        
        if (!response.ok) {
            throw new Error('Erro na resposta do servidor');
        }
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Erro ao enviar para planilha:', error);
        throw error;
    }
}

// Modifique o event listener do formulário
form.addEventListener('submit', async function(event) {
    event.preventDefault();

    if (!validarFormulario()) return;

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
        const resultado = await enviarParaPlanilha(dados);
        if (resultado.status === "success") {
            // Mostra o modal de sucesso
            let htmlResumo = `
                <h2 style="color: var(--primary); margin-bottom: 10px;">Feedback Enviado com Sucesso!</h2>
                <p>Obrigado pelo seu feedback.</p>
            `;
            resumoDados.innerHTML = htmlResumo;
            modal.classList.remove('hidden');
        } else {
            throw new Error(resultado.message || 'Erro desconhecido');
        }
    } catch (error) {
        alert('Erro ao enviar feedback: ' + error.message);
    }
});