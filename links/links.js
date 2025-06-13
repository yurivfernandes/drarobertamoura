document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Alterando para um caminho relativo
        const response = await fetch('../data/links.json');
        const data = await response.json();
        
        // Atualizar informações do perfil
        document.getElementById('profile-img').src = data.profile.image;
        document.getElementById('profile-name').textContent = data.profile.name;
        document.getElementById('profile-title').textContent = data.profile.title;
        document.getElementById('profile-subtitle').textContent = data.profile.subtitle;
        
        // Criar links
        const linksContainer = document.getElementById('links-container');
        data.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'link-item';
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
            
            linkElement.innerHTML = `
                <i class="${link.icon}"></i>
                <span>${link.title}</span>
            `;
            
            linksContainer.appendChild(linkElement);
        });
        
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
});
