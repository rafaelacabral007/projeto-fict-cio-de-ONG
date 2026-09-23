import { salvarCadastro } from "./storage.js";
// ========================================
// PROJETOS DA ONG
// ========================================

const projetos = [
    {
        titulo: "Ação de Alimentos",
        descricao:
            "Distribuição de alimentos para famílias em situação de vulnerabilidade.",
        imagem: "img/acao_alimentos.jpg"
    },

    {
        titulo: "Educação",
        descricao:
            "Projetos voltados para educação e inclusão social.",
        imagem: "img/educacao.jpg"
    },

    {
        titulo: "Ação de Saúde",
        descricao:
            "Ações de orientação e atendimento à comunidade.",
        imagem: "img/acao_saude.jpg"
    }
];


// ========================================
// CRIAÇÃO DOS PROJETOS
// ========================================

function criarProjetos() {

    return projetos.map(function(projeto) {

        return `
            <article data-aos="fade-up">

                <img
                    src="${projeto.imagem}"
                    alt="${projeto.titulo}"
                >

                <h3>${projeto.titulo}</h3>

                <p>${projeto.descricao}</p>

            </article>
        `;

    }).join("");
}


// ========================================
// EXPORTA A FUNÇÃO
// ========================================

// Exporta a função para ser utilizada
// pelo arquivo principal.
export { criarProjetos };
