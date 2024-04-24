$(document).ready(function() {
    // Função para atualizar a largura
    function atualizarLargura() {
        let largura = $('#LiveChat-ProjectCard').outerWidth();
        console.log("Largura: " + largura);
        document.documentElement.style.setProperty('--project-cards-carousel-limit-width', largura + 'px');
        let limite = $('#ProjectCard-Limit').outerWidth();
        console.log("Limite: " + limite);
        if (largura > limite) {
            limite += largura - limite;
            document.documentElement.style.setProperty('--project-cards-carousel-limit-width', limite + 'px');
        } else if(largura < limite) {
            limite -= limite - largura;
            document.documentElement.style.setProperty('--project-cards-carousel-limit-width', limite + 'px');
        }
        console.log("Limite2: " + limite);
    }

    // Atualizar a largura quando o documento é carregado
    atualizarLargura();

    // Atualizar a largura quando a janela é redimensionada
    $(window).resize(atualizarLargura);
});