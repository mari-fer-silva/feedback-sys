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

function atualizaSubmenus() {
    const modulo = document.getElementById('modulo').value;
    const categoriaSelect = document.getElementById('categoria');
    const submenuSelect = document.getElementById('submenu');
    
    // Limpa os selects
    categoriaSelect.innerHTML = '';
    submenuSelect.innerHTML = '';
    
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
        
        // Atualiza submenus quando categoria muda
        categoriaSelect.onchange = function() {
            const categoria = this.value;
            submenuSelect.innerHTML = '';
            
            if (categoria && estruturaSistema[modulo][categoria]) {
                // Adiciona opção padrão
                const defaultOptionSub = document.createElement('option');
                defaultOptionSub.value = '';
                defaultOptionSub.text = 'Selecione um submenu';
                submenuSelect.add(defaultOptionSub);
                
                // Preenche submenus
                estruturaSistema[modulo][categoria].forEach(item => {
                    const option = document.createElement('option');
                    option.value = item;
                    option.text = item;
                    submenuSelect.add(option);
                });
            } else {
                const option = document.createElement('option');
                option.value = '';
                option.text = 'Selecione uma categoria primeiro';
                submenuSelect.add(option);
            }
        };
    } else {
        const optionCat = document.createElement('option');
        optionCat.value = '';
        optionCat.text = 'Selecione um módulo primeiro';
        categoriaSelect.add(optionCat);
        
        const optionSub = document.createElement('option');
        optionSub.value = '';
        optionSub.text = 'Selecione uma categoria primeiro';
        submenuSelect.add(optionSub);
    }
}


// Função para validar formulário (atualizada)
function validarFormulario(event) {
    const emailInput = document.getElementById('email');
    const codigoInput = document.getElementById('codigo');
    
    // Valida e-mail
    if (!validarEmail(emailInput.value)) {
        alert('Por favor, insira um e-mail válido!');
        emailInput.focus();
        event.preventDefault();
        return false;
    }
    
    // Valida se o código contém apenas números
    if (!/^\d+$/.test(codigoInput.value)) {
        alert('O código do operador deve conter apenas números!');
        codigoInput.focus();
        event.preventDefault();
        return false;
    }
    
    return true;
}

    
    // Adiciona validação de números ao campo código
    const codigoInput = document.getElementById('codigo');
    codigoInput.addEventListener('keypress', validarNumeros);