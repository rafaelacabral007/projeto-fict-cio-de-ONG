// ========================================
// SALVAR CADASTRO
// ========================================

function salvarCadastro(cadastro) {

    localStorage.setItem(
        "cadastro",
        JSON.stringify(cadastro)
    );
}


// ========================================
// RECUPERAR CADASTRO
// ========================================

function obterCadastro() {

    const cadastroSalvo =
        localStorage.getItem("cadastro");

    if (!cadastroSalvo) {
        return null;
    }

    return JSON.parse(cadastroSalvo);
}


// ========================================
// EXPORTA AS FUNÇÕES
// ========================================

export {
    salvarCadastro,
    obterCadastro
};
