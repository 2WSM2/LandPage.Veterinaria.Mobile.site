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

// --- 2. SCROLL SUAVE ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// --- 3. ENVIO PARA O WHATSAPP (VERSÃO CORRIGIDA) ---
document.addEventListener('DOMContentLoaded', () => {
    iniciarSlideshow();

    const form = document.getElementById('form-whatsapp');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // IMPORTANTE: Impede o recarregamento da página

            // Captura os valores (Tudo em minúsculo para evitar erro de Case Sensitive)
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const relato = document.getElementById('relato').value;
            
            // Número da Dra. Thayssa (Extraído do seu HTML)
            const telefone = "5581999999760"; 

            // Monta a mensagem
            const mensagem = 
                "*🏥 DRA. THAYSSA GALVÃO - CONTATO*" + "\n\n" +
                "*👤 Tutor:* " + nome + "\n" +
                "*📧 E-mail:* " + email + "\n\n" +
                "*🐾 Relato:* " + "\n" + relato;

            // Gera a URL do WhatsApp
            const url = "https://api.whatsapp.com/send?phone=" + telefone + "&text=" + encodeURIComponent(mensagem);

            // MUDANÇA PRINCIPAL: Usa o location.href para forçar a saída da página atual
            // Isso evita bloqueios de pop-up do navegador do celular
            window.location.href = url;
        });
    }
});