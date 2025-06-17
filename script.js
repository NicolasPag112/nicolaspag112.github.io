// 1. Inicializa o AOS (Animate On Scroll)
AOS.init({
    // Opções globais:
    disable: 'mobile', // Desabilita as animações em dispositivos móveis (opcional, pode remover se quiser animações em mobile)
    once: true, // Se a animação deve acontecer apenas uma vez (true) ou toda vez que o elemento entra na tela (false)
    mirror: false, // Se os elementos devem animar de volta ao rolar para cima
});

// 2. Navegação Suave (Smooth Scrolling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link (pular bruscamente)

        const targetId = this.getAttribute('href'); // Pega o ID do destino (ex: #about)
        const targetElement = document.querySelector(targetId); // Encontra o elemento no DOM

        if (targetElement) {
            // Rola suavemente até o elemento
            window.scrollTo({
                top: targetElement.offsetTop - (document.getElementById('navbar') ? document.getElementById('navbar').offsetHeight : 0), // Ajusta para a altura da navbar fixa
                behavior: 'smooth'
            });

            // Se for um menu mobile, fecha ele após clicar no link
            const navbarMenu = document.querySelector('#navbar ul');
            if (navbarMenu && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                // Se você tiver um ícone de hambúrguer que muda, adicione a lógica aqui para reverter
                const menuToggle = document.querySelector('.menu-toggle');
                if (menuToggle) {
                    menuToggle.classList.remove('open');
                }
            }
        }
    });
});

// 3. Script para o ano atual no rodapé
document.getElementById('current-year').textContent = new Date().getFullYear();

// 4. Funcionalidade para o menu responsivo (hambúrguer)
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = `
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
`;
document.querySelector('#navbar .container').prepend(menuToggle); // Adiciona o botão ao container da navbar

const navbarMenu = document.querySelector('#navbar ul');

menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    menuToggle.classList.toggle('open'); // Adiciona classe para animar o hambúrguer
});

// Fecha o menu ao clicar fora dele (opcional)
document.addEventListener('click', (event) => {
    if (!navbarMenu.contains(event.target) && !menuToggle.contains(event.target) && navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
        menuToggle.classList.remove('open');
    }
});


// 5. Sticky Header - Ajuste para o cabeçalho fixo (já feito com position: sticky no CSS, mas pode complementar com JS se precisar de mais controle)
// Se você notar que o "sticky" do CSS não está 100% como quer, ou se quiser mudar a cor/estilo da navbar ao rolar,
// pode usar este JS (remova o position: sticky e z-index do CSS da navbar se usar este JS completo):

/*
const navbar = document.getElementById('navbar');
const heroSection = document.querySelector('.hero-section'); // Ou a altura que você quer que o sticky comece

window.addEventListener('scroll', () => {
    if (window.scrollY > heroSection.offsetHeight - navbar.offsetHeight) { // Quando rola além da seção hero
        navbar.classList.add('navbar-scrolled'); // Adiciona uma classe para mudar o estilo (ex: background-color)
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
*/

// Adicione no style.css se for usar a classe navbar-scrolled:
/*
.navbar-scrolled {
    background-color: rgba(44, 62, 80, 0.95); // Um pouco transparente
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
*/