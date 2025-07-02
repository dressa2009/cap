document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para os links da navegação
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Ação do botão CTA (Call to Action) na seção Hero
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Explore nossas deliciosas receitas de cupcakes de chocolate!');
            // Você pode redirecionar para a seção de receitas ou outra página
            document.querySelector('#receitas').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Validação básica do formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Aqui você enviaria os dados para um servidor (por exemplo, via Fetch API ou XMLHttpRequest)
                // Por enquanto, vamos simular o envio com um alerta.
                alert(`Mensagem enviada com sucesso!\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
                
                // Limpa o formulário
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos do formulário.');
            }
        });
    }
});