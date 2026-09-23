
// ========================================
// IMPORTAÇÕES DOS MÓDULOS
// ========================================

import { criarProjetos } from "./js/projetos.js";
import { configurarFormulario } from "./js/validacao.js";


// ========================================
// ELEMENTO PRINCIPAL
// ========================================

const app =
    document.querySelector("#app");


// ========================================
// ROTAS
// ========================================

const rotas = {

    inicio: `
        <section data-aos="fade-up">

            <h2>
                Bem-vindo à ONG de Inclusão Social
            </h2>

            <p>
                Nossa organização trabalha para promover
                inclusão, educação e apoio social.
            </p>

        </section>
    `,


    sobre: `
        <section data-aos="fade-up">

            <h2>
                Sobre Nós
            </h2>

            <p>
                Somos uma organização dedicada à inclusão social
                e ao apoio de pessoas em situação de vulnerabilidade.
            </p>

        </section>
    `,


    projetos: `
        <section data-aos="fade-up">

            <h2>
                Nossos Projetos
            </h2>

            <div class="projetos-container">

                ${criarProjetos()}

            </div>

        </section>
    `,


    contato: `
        <section data-aos="fade-up">

            <h2>
                Contato
            </h2>

            <p>
                Email: contato@ongsolidaria.org
            </p>

            <p>
                Telefone: (11) 99999-9999
            </p>

            <p>
                Atendimento: segunda a sexta-feira.
            </p>

        </section>
    `
};


// ========================================
// RENDERIZAÇÃO
// ========================================

function renderizar(rota) {

    // Verifica se a rota existe.
    if (rotas[rota]) {

        // Insere o conteúdo da rota dentro
        // do elemento principal.
        app.innerHTML =
            rotas[rota];


        // Atualiza as animações do AOS
        // depois que o conteúdo foi inserido.
        AOS.refresh();

    } else {

        // Exibe mensagem caso a rota não exista.
        app.innerHTML = `
            <section>

                <h2>
                    Página não encontrada
                </h2>

                <p>
                    O conteúdo solicitado
                    não foi encontrado.
                </p>

            </section>
        `;
    }
}


// ========================================
// NAVEGAÇÃO
// ========================================

function configurarNavegacao() {

    const links =
        document.querySelectorAll("nav a");


    links.forEach(function(link) {

        link.addEventListener(
            "click",
            function(event) {

                // Impede o comportamento padrão
                // do link.
                event.preventDefault();


                // Pega a rota definida no HTML
                // através do atributo data-rota.
                const rota =
                    link.dataset.rota;


                // Renderiza a página escolhida.
                renderizar(rota);
            }
        );
    });
}


// ========================================
// INICIALIZAÇÃO
// ========================================

// Inicializa as animações AOS.
AOS.init();


// Configura os links de navegação
// do site.
configurarNavegacao();


// Configura o formulário da página ajuda.html.
// Se o formulário não existir na página,
// a função simplesmente será encerrada.
configurarFormulario();
