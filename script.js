// Aguarda o DOM carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão pelo seu ID
    const meuBotao = document.getElementById('meuBotao');

    // Adiciona um "ouvinte de evento" de clique ao botão
    if (meuBotao) {
        meuBotao.addEventListener('click', () => {
            alert('Você clicou no botão! Parabéns!');
        });
    }

    // Você pode adicionar mais interatividade aqui!
    // Por exemplo, uma mensagem no console quando a página carrega
    console.log('O site foi carregado com sucesso!');
});