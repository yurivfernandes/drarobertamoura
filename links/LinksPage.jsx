import React, { useEffect } from 'react';
import gsap from 'gsap';
import './style.css';

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
            url: "https://wa.me/‪5531996590174‬?text=Olá%20Dra%2C%20encontrei%20seu%20contato%20no%20site%2C%20gostaria%20de%20agendar%20uma%20consulta.",
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

const LinksPage = () => {
    useEffect(() => {
        // Configurar elementos para começarem invisíveis
        gsap.set('.container', { opacity: 0 });
        gsap.set('.profile img', { opacity: 0, scale: 0.8 });
        gsap.set('.profile h1, .profile h2, .profile p', { opacity: 0, y: 20 });
        gsap.set('.links a', { opacity: 0, y: 20 });

        // Timeline para controlar a sequência de animações
        const tl = gsap.timeline();

        // Animar container primeiro
        tl.to('.container', {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        })
        // Animar foto do perfil
        .to('.profile img', {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out'
        })
        // Animar textos do perfil
        .to('.profile h1, .profile h2, .profile p', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out'
        })
        // Animar links
        .to('.links a', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }, []);

    return (
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
};

export default LinksPage;
