// Seletores atualizados para o novo HTML
const body = document.body;
const sidebar = document.querySelector('.sidebar');
const toggleSidebar = document.querySelector('.toggle-sidebar');
const searchContainer = document.querySelector('.search-container');
const themeSwitcher = document.querySelector('.theme-switcher');
const toggleSwitch = document.querySelector('.toggle-switch');
const themeText = document.querySelector('.theme-text');
const trailCards = document.querySelectorAll('.trail-card:not(.add-trail)');
const addTrailButton = document.querySelector('.add-button');

// Função para alternar a sidebar
function toggleSidebarFunction() {
    sidebar.classList.toggle('close');
    
    // Armazenar preferência no localStorage
    const isClosed = sidebar.classList.contains('close');
    localStorage.setItem('sidebarClosed', isClosed);
}

// Função para alternar o tema
function toggleTheme() {
    body.classList.toggle('dark');
    
    // Atualizar texto do tema
    const isDarkMode = body.classList.contains('dark');
    themeText.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
    
    // Armazenar preferência no localStorage
    localStorage.setItem('darkMode', isDarkMode);
}

// Função para expandir a sidebar ao pesquisar
function expandSidebarOnSearch() {
    if (sidebar.classList.contains('close')) {
        sidebar.classList.remove('close');
    }
}

// Efeitos hover para os cards de trilha
function setupTrailCardsHover() {
    trailCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            trailCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.opacity = '0.6';
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            trailCards.forEach(otherCard => {
                otherCard.style.opacity = '1';
            });
        });
    });
}

// Função para adicionar nova trilha
function handleAddTrail() {
    // Aqui você pode implementar a lógica para adicionar nova trilha
    console.log('Adicionar nova trilha clicado');
    // Exemplo: abrir um modal ou redirecionar para página de criação
}

// Carregar preferências salvas
function loadPreferences() {
    // Verificar preferência do sidebar
    const sidebarClosed = localStorage.getItem('sidebarClosed') === 'true';
    if (sidebarClosed) {
        sidebar.classList.add('close');
    }

    // Verificar preferência do tema
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        body.classList.add('dark');
        themeText.textContent = 'Modo Claro';
    }
}

// Event Listeners
toggleSidebar.addEventListener('click', toggleSidebarFunction);
searchContainer.addEventListener('click', expandSidebarOnSearch);
themeSwitcher.addEventListener('click', toggleTheme);
addTrailButton.addEventListener('click', handleAddTrail);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    setupTrailCardsHover();
    
    // Verificar se é mobile para comportamento diferente
    if (window.innerWidth <= 768) {
        sidebar.classList.add('close');
    }
});

// Opcional: Fechar sidebar ao clicar fora (para mobile)
document.addEventListener('click', (event) => {
    if (window.innerWidth <= 768 && 
        !sidebar.contains(event.target) && 
        !event.target.classList.contains('toggle-sidebar')) {
        sidebar.classList.add('close');
    }
});

// Resize observer para comportamento responsivo
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        // Restaurar preferência do usuário em desktop
        const sidebarClosed = localStorage.getItem('sidebarClosed') === 'true';
        sidebar.classList.toggle('close', sidebarClosed);
    } else {
        // Fechar automaticamente em mobile
        sidebar.classList.add('close');
    }
});