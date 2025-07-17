// ============================
//  ESTRUTURA DO SISTEMA
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
    }
    // Adicione outros módulos conforme necessário
};

// ============================
//  ATUALIZAÇÃO DE CATEGORIAS E SUBMENUS
// ============================
function atualizaSubmenus() {
    const modulo = document.getElementById('modulo').value;
    const categoriaSelect = document.getElementById('categoria');
    const submenuSelect = document.getElementById('submenu');

    categoriaSelect.innerHTML = '';
    submenuSelect.innerHTML = '';

    if (modulo && estruturaSistema[modulo]) {
        const defaultOptionCat = document.createElement('option');
        defaultOptionCat.value = '';
        defaultOptionCat.text = 'Selecione uma categoria';
        categoriaSelect.add(defaultOptionCat);

        for (const categoria in estruturaSistema[modulo]) {
            const option = document.createElement('option');
            option.value = categoria;
            option.text = categoria;
            categoriaSelect.add(option);
        }

        categoriaSelect.onchange = function () {
            const categoria = this.value;
            submenuSelect.innerHTML = '';

            if (categoria && estruturaSistema[modulo][categoria]) {
                const defaultOptionSub = document.createElement('option');
                defaultOptionSub.value = '';
                defaultOptionSub.text = 'Selecione um submenu';
                submenuSelect.add(defaultOptionSub);

                estruturaSistema[modulo][categoria].forEach(item => {
                    const option = document.createElement('option');
                    option.value = item;
                    option.text = item;
                    submenuSelect.add(option);
                });
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

// ============================
//  VALIDAÇÃO DO FORMULÁRIO
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

document.getElementById('codigo').addEventListener('keypress', validarNumeros);

// ============================
//  MODAL E GERAÇÃO DE PDF
// ============================
const form = document.getElementById('feedback-form');
const modal = document.getElementById('modal-resumo');
const resumoDados = document.getElementById('resumo-dados');
const fecharModal = document.getElementById('fechar-modal');
const gerarPDFBtn = document.getElementById('gerar-pdf');

fecharModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    form.reset();
});

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

// ============================
//  ENVIO PARA A PLANILHA GOOGLE
// ============================
function enviarParaPlanilha(dados) {
    const url = 'https://script.google.com/macros/s/AKfycbwHggPwjKO3DPrJqKSmFGbg6P3nkpwcFYoX_e88t7-cvnj3rSAZykz0dEbtorTh2jWX/exec';

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
//  ENVIO DO FORMULÁRIO (principal)
// ============================
form.addEventListener('submit', function (event) {
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

    // Envia para a planilha
    enviarParaPlanilha(dados);

    // Prepara o modal com os dados
    let htmlResumo = '';
    for (let campo in dados) {
        htmlResumo += `<p><strong>${campo}:</strong> ${dados[campo]}</p>`;
    }
    resumoDados.innerHTML = htmlResumo;
    modal.classList.remove('hidden');
});
