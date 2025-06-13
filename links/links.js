document.addEventListener('DOMContentLoaded', () => {
    const data = {
        profile: {
            image: "https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/experi%C3%AAncias.jpeg",
            name: "Dra. Roberta Gomes Moura",
            title: "Cirurgiã Dentista - CRO-56861",
            subtitle: "Harmonização Facial"
        },
        links: [
            {
                title: "Agendar Consulta",
                url: "https://wa.me/5531975583013?text=Olá%20Dra%2C%20encontrei%20seu%20contato%20no%20site%2C%20gostaria%20de%20agendar%20uma%20consulta.",
                icon: "fab fa-whatsapp"
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/dra.robertagmoura/",
                icon: "fab fa-instagram"
            },
            {
                title: "Meu Site",
                url: "https://drarobertamoura.com.br",
                icon: "fas fa-globe"
            }
        ]
    };

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
});
