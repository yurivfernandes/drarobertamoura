import React from 'react';

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

const LinksPage = () => (
    <div className="container">
        <div className="profile">
            <img id="profile-img" src={data.profile.image} alt="Foto de Perfil" />
            <h1>{data.profile.name}</h1>
            <h2>{data.profile.title}</h2>
            <p>{data.profile.subtitle}</p>
        </div>
        <div className="links">
            {data.links.map((link, index) => (
                <a key={index} href={link.url} className="link-item" target="_blank" rel="noopener noreferrer">
                    <i className={link.icon}></i>
                    <span>{link.title}</span>
                </a>
            ))}
        </div>
    </div>
);

export default LinksPage;
