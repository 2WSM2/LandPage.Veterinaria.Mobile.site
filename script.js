// --- 1. FUNÇÃO DO SLIDESHOW ---
function iniciarSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let index = 0;
    if (slides.length === 0) return;

    setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 3000);
}

// --- 2. SCROLL SUAVE DOS LINKS ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- 3. ENVIO ORGANIZADO PARA O WHATSAPP ---
// Espera a página carregar para ativar o formulário
document.addEventListener('DOMContentLoaded', () => {
    iniciarSlideshow(); // Inicia o slide junto com a página

    const form = document.getElementById('form-whatsapp');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede a página de recarregar

            // Pega os valores dos campos
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const relato = document.getElementById('relato').value;
            
            // SEU NÚMERO (DDD + NÚMERO)
            const telefone = "5581999999999"; 

            // Monta a mensagem profissional com negrito (*) e quebra de linha (%0A)
            const mensagem = 
                "*🏥 OLYMPUS VET - NOVO CONTATO*" + "%0A%0A" +
                "*👤 Nome do Tutor:* " + Nome + "%0A" +
                "*📧 E-mail:* " + Email + "%0A%0A" +
                "*🐾 Relato do Animalzinho:* " + "%0A" + Relato;

            // Cria o link final formatado
            const url = "https://api.whatsapp.com/send?phone=" + telefone + "&text=" + encodeURIComponent(mensagem);

            // Abre o WhatsApp em uma nova aba
            window.open(url, '_blank');
        });
    }
});