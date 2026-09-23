
// ========================================
// IMPORTAÇÃO DO STORAGE
// ========================================

import { salvarCadastro } from "./storage.js";


// ========================================
// CONFIGURAÇÃO DO FORMULÁRIO
// ========================================

function configurarFormulario() {

    // Procura o formulário na página
    const formulario = document.querySelector("#form-ajuda");


    // Se o formulário não existir, encerra a função
    if (!formulario) {
        return;
    }


    // ========================================
    // ELEMENTOS DO FORMULÁRIO
    // ========================================

    const nome = document.querySelector("#nome");
    const cpf = document.querySelector("#cpf");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");

    const mensagemNome = document.querySelector("#mensagem-nome");
    const mensagemCpf = document.querySelector("#mensagem-cpf");
    const mensagemTelefone = document.querySelector("#mensagem-telefone");
    const mensagemCep = document.querySelector("#mensagem-cep");


    // ========================================
    // VALIDAÇÃO DO NOME
    // ========================================

    function validarNome() {

        const valor = nome.value.trim();

        const nomeValido =
            /^[A-Za-zÀ-ÿ\s]{3,}$/.test(valor);


        if (!nomeValido) {

            nome.classList.add("campo-invalido");
            nome.classList.remove("campo-valido");

            mensagemNome.textContent =
                "Digite um nome com pelo menos 3 letras.";

            return false;

        } else {

            nome.classList.add("campo-valido");
            nome.classList.remove("campo-invalido");

            mensagemNome.textContent = "";

            return true;
        }
    }


    // ========================================
    // VALIDAÇÃO DO CPF
    // ========================================

    function validarCpf() {

        // Remove tudo que não for número
        const valor = cpf.value.replace(/\D/g, "");


        if (valor.length !== 11) {

            cpf.classList.add("campo-invalido");
            cpf.classList.remove("campo-valido");

            mensagemCpf.textContent =
                "Digite um CPF com 11 números.";

            return false;

        } else {

            cpf.classList.add("campo-valido");
            cpf.classList.remove("campo-invalido");

            mensagemCpf.textContent = "";

            return true;
        }
    }


    // ========================================
    // VALIDAÇÃO DO TELEFONE
    // ========================================

    function validarTelefone() {

        const valor =
            telefone.value.replace(/\D/g, "");


        if (
            valor.length < 10 ||
            valor.length > 11
        ) {

            telefone.classList.add("campo-invalido");
            telefone.classList.remove("campo-valido");

            mensagemTelefone.textContent =
                "Digite um telefone válido com 10 ou 11 números.";

            return false;

        } else {

            telefone.classList.add("campo-valido");
            telefone.classList.remove("campo-invalido");

            mensagemTelefone.textContent = "";

            return true;
        }
    }


    // ========================================
    // VALIDAÇÃO DO CEP
    // ========================================

    function validarCep() {

        const valor =
            cep.value.replace(/\D/g, "");


        if (valor.length !== 8) {

            cep.classList.add("campo-invalido");
            cep.classList.remove("campo-valido");

            mensagemCep.textContent =
                "Digite um CEP com 8 números.";

            return false;

        } else {

            cep.classList.add("campo-valido");
            cep.classList.remove("campo-invalido");

            mensagemCep.textContent = "";

            return true;
        }
    }


    // ========================================
    // VALIDAÇÃO DURANTE A DIGITAÇÃO
    // ========================================

    nome.addEventListener("input", validarNome);

    cpf.addEventListener("input", validarCpf);

    telefone.addEventListener("input", validarTelefone);

    cep.addEventListener("input", validarCep);


    // ========================================
    // ENVIO DO FORMULÁRIO
    // ========================================

    formulario.addEventListener("submit", function(event) {

        // Impede o navegador de atualizar a página
        event.preventDefault();


        // Executa todas as validações
        const nomeValido = validarNome();

        const cpfValido = validarCpf();

        const telefoneValido = validarTelefone();

        const cepValido = validarCep();


        // ========================================
        // VERIFICAÇÃO FINAL
        // ========================================

        if (
            nomeValido &&
            cpfValido &&
            telefoneValido &&
            cepValido
        ) {

            // Cria o objeto com os dados
            const cadastro = {

                nome: nome.value.trim(),

                cpf: cpf.value,

                telefone: telefone.value,

                cep: cep.value
            };


            // Salva os dados no localStorage
            salvarCadastro(cadastro);


            // Exibe mensagem de sucesso
            alert(
                "Cadastro realizado com sucesso! Entraremos em contato."
            );


            // Limpa o formulário
            formulario.reset();


            // Remove as classes de validação
            nome.classList.remove("campo-valido");
            cpf.classList.remove("campo-valido");
            telefone.classList.remove("campo-valido");
            cep.classList.remove("campo-valido");

        } else {

            // Mostra mensagem quando existe algum campo inválido
            alert(
                "Por favor, corrija os campos destacados em vermelho."
            );
        }
    });
}


// ========================================
// EXECUTA A CONFIGURAÇÃO
// ========================================

configurarFormulario();


// ========================================
// EXPORTAÇÃO
// ========================================

export { configurarFormulario };
