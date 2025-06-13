import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const data = {
    profile: {
        image: "https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/hero.jpeghttps://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/experi%C3%AAncias.jpeg",
        name: "Dra. Roberta Gomes Moura",
        title: "Cirurgiã Dentista - CRO-56861",
        subtitle: "Harmonização Facial",
        about: {
            text: [
                "Sou a Dra. Roberta Moura, cirurgiã dentista apaixonada pela harmonização facial. Dedico minha prática profissional a realçar a beleza natural de cada pessoa, sempre respeitando suas características únicas e individualidade.",
                "Com atendimentos em Contagem e Belo Horizonte, meu compromisso é oferecer um cuidado personalizado e humanizado, entendendo que cada paciente tem necessidades e desejos específicos. Acredito que a verdadeira beleza está no equilíbrio e na naturalidade dos resultados.",
                "Minha abordagem é focada em procedimentos sob medida, evitando exageros e sempre priorizando resultados harmônicos que preservam a autenticidade de cada rosto. Trabalho em parceria com meus pacientes, ouvindo atentamente seus objetivos para alcançar resultados que tragam satisfação e autoestima."
            ],
            image: "https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/sobre.jpeg"
        }
    },
    links: [
        {
            title: "WhatsApp",
            url: "https://wa.me/5531975583013?text=Olá%20Dra%2C%20encontrei%20seu%20contato%20no%20site%2C%20gostaria%20de%20agendar%20uma%20consulta.",
            icon: "fab fa-whatsapp"
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/dra.robertagmoura/",
            icon: "fab fa-instagram"
        }
    ]
};

const HomePage = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        // Configurar elementos da seção "Sobre Mim" para começarem invisíveis
        gsap.set('#sobre .about-text p', { opacity: 0, y: 30 });
        gsap.set('#sobre .about-photo', { opacity: 0, x: 50 });

        // Animação para a seção hero
        gsap.from('.hero img', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
        });

        gsap.from('.hero h1, .hero p', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
        });

        gsap.from('.hero .social-links a', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            delay: 1.2, // Garantir que os ícones apareçam após o texto
        });

        // Animação para a seção sobre
        ScrollTrigger.create({
            trigger: '#sobre',
            start: 'top center+=100',
            onEnter: () => {
                gsap.to('#sobre .about-text p', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                });

                gsap.to('#sobre .about-photo', {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                });
            },
            once: true
        });
    }, []);

    return (
        <div>
            <nav style={{ width: '100%' }}>
                <div className="nav-content">
                    <ul>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                    </ul>
                    <div className="header-social" id="header-social">
                        {data.links.map(link => (
                            <a 
                                key={link.title} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title={link.title}
                                style={{ color: 'black' }}
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
            <section id="home">
                <div className="hero">
                    <img id="profile-image" src={data.profile.image} alt={data.profile.name} />
                    <h1 id="profile-name">{data.profile.name}</h1>
                    <p id="profile-title">{data.profile.title}</p>
                    <p id="profile-subtitle">{data.profile.subtitle}</p>
                    <div className="social-links">
                        {data.links.map(link => (
                            <a 
                                key={link.title} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title={link.title}
                                style={{ color: 'black' }}
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <section id="sobre" ref={aboutRef}>
                <h2>Sobre Mim</h2>
                <div className="about-content">
                    <div className="about-text" id="about-text">
                        {data.profile.about.text.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="about-photo">
                        <img 
                            id="about-image" 
                            src={data.profile.about.image} 
                            alt={data.profile.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer-content">
                    <p>© 2025 Dra. Roberta Gomes Moura</p>
                    <div className="footer-social" id="footer-social">
                        {data.links.map(link => (
                            <a 
                                key={link.title} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title={link.title}
                                style={{ color: 'black' }}
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                    <div className="developer-info">
                        <p>Desenvolvido por Yuri Fernandes</p>
                        <a 
                            href="https://wa.me/5531987798823?text=Olá,%20quero%20fazer%20meu%20site" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="WhatsApp do Desenvolvedor"
                            style={{ color: 'black' }}
                        >
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
