import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const data = {
    profile: {
        image: "https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/experi%C3%AAncias.jpeg",
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
    ],
    procedures: {
        fillers: {
            title: "Preenchimento com Ácido Hialurônico",
            icon: "fas fa-droplet", // Ícone mais moderno de gota
            items: [
                "Mandíbula", "Queixo", "Lábios", "Olheiras", "Têmporas",
                "Sulco nasolabial (bigode chinês)", 
                "Sulco labiomentoniano (linhas de marionete)",
                "Nariz (rinomodelação)", "Malar (maçã do rosto)"
            ]
        },
        botox: {
            title: "Toxina Botulínica (Botox)",
            icon: "fas fa-spa", // Ícone que representa bem-estar e rejuvenescimento
            items: [
                "Suavização de linhas de expressão (testa, glabela, pés de galinha)",
                "Elevação da cauda da sobrancelha (lifting de sobrancelha)",
                "Sorriso gengival", "Bruxismo", "Enxaqueca"
            ]
        },
        collagen: {
            title: "Bioestimuladores de Colágeno",
            icon: "fas fa-sync", // Ícone que representa renovação
            items: [
                "Sculptra, Radiesse, Ellansé, Rennova Diamond",
                "Melhora da flacidez",
                "Aumento da firmeza da pele",
                "Estímulo de colágeno natural"
            ]
        }
    },
    testimonials: [
        {
            text: "Estou simplesmente apaixonada pelo resultado! Ficou super natural, exatamente como eu queria. Me sinto muito mais confiante agora.",
            author: "Monica Brito",
            location: "Contagem - MG"
        },
        {
            text: "Tinha medo de ficar artificial, mas me surpreendi. O resultado foi sutil, harmonioso e realçou meus traços sem exageros.",
            author: "Pedro Fialho",
            location: "Belo Horizonte - MG"
        },
        {
            text: "O melhor investimento que fiz em mim mesma! Todo mundo comenta como estou mais bonita, descansada e sem saber exatamente o que mudei.",
            author: "Beatriz Santos",
            location: "Contagem - MG"
        },
        {
            text: "Amei cada detalhe! Meu rosto ficou mais simétrico, mais jovem e ainda assim super natural. Gratidão pela sua mão maravilhosa.",
            author: "Luisa Mariano",
            location: "Nova Lima - MG"
        },
        {
            text: "Minha autoestima foi nas alturas! Sempre me incomodei com meu queixo e agora me olho no espelho e me sinto maravilhosa. Obrigada por tanto cuidado.",
            author: "Carolina Mendes",
            location: "Nova Lima - MG"
        },
        {
            text: "O atendimento, o carinho e principalmente o resultado foram impecáveis. Hoje me sinto muito mais segura e feliz com minha aparência.",
            author: "Marina Costa",
            location: "Belo Horizonte - MG"
        },
        {
            text: "Consegui aquele efeito lifting sem cirurgia que tanto queria. Pele mais firme, rosto mais desenhado… mudou minha vida!",
            author: "Angela Maria",
            location: "Belo Horizonte - MG"
        },
        {
            text: "Melhor decisão que eu poderia ter tomado. Meu rosto ficou mais harmônico, meus traços valorizados e minha autoestima renovada. Recomendo de olhos fechados!",
            author: "Renata Oliveira",
            location: "Contagem - MG"
        },
        {
            text: "Nunca imaginei que pequenas mudanças fariam tanta diferença na minha autoestima. Me sinto muito mais confiante e realizada. Amei cada detalhe!",
            author: "Isabela Coelho",
            location: "Belo Horizonte - MG"
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
                    <a 
                        href="https://wa.me/5531975583013?text=Olá%20Dra%2C%20gostaria%20de%20tirar%20algumas%20dúvidas%20e%20fazer%20um%20agendamento"
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-whatsapp"></i>
                        CLIQUE AQUI PARA DÚVIDAS E AGENDAMENTOS
                    </a>
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
                <a 
                    href="https://wa.me/5531975583013?text=Olá%20Dra%2C%20gostaria%20de%20tirar%20algumas%20dúvidas%20e%20fazer%20um%20agendamento"
                    className="cta-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp"></i>
                    CLIQUE AQUI PARA DÚVIDAS E AGENDAMENTOS
                </a>
            </section>
            <section id="procedimentos">
                <h2>Procedimentos</h2>
                <div className="procedures-grid" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    {Object.values(data.procedures).map((category, index) => (
                        <div key={index} className="procedure-card" style={{ flex: '1', margin: '0 10px' }}>
                            <i className={category.icon}></i>
                            <h3>{category.title}</h3>
                            <ul>
                                {category.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <a 
                    href="https://wa.me/5531975583013?text=Olá%20Dra%2C%20gostaria%20de%20tirar%20algumas%20dúvidas%20e%20fazer%20um%20agendamento"
                    className="cta-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp"></i>
                    CLIQUE AQUI PARA DÚVIDAS E AGENDAMENTOS
                </a>
            </section>
            <section id="resultados">
                <h2>Resultados</h2>
                <div className="resultados-container">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        pagination={{ clickable: true }}
                        navigation={true}
                        slidesPerView={1}
                        className="resultados-slider"
                    >
                        <SwiperSlide>
                            <div className="resultado-slide">
                                <div className="resultado-imagens">
                                    <div className="resultado-antes">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/1_antes.JPG" alt="Antes do procedimento" />
                                        <span>Antes</span>
                                    </div>
                                    <div className="resultado-depois">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/1_depois.JPG" alt="Depois do procedimento" />
                                        <span>Depois</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="resultado-slide">
                                <div className="resultado-imagens">
                                    <div className="resultado-antes">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/2_antes.JPG" alt="Antes do procedimento" />
                                        <span>Antes</span>
                                    </div>
                                    <div className="resultado-depois">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/2_depois.JPG" alt="Depois do procedimento" />
                                        <span>Depois</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="resultado-slide">
                                <div className="resultado-imagens">
                                    <div className="resultado-antes">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/3_antes.JPG" alt="Antes do procedimento" />
                                        <span>Antes</span>
                                    </div>
                                    <div className="resultado-depois">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/3_depois.JPG" alt="Depois do procedimento" />
                                        <span>Depois</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="resultado-slide">
                                <div className="resultado-imagens">
                                    <div className="resultado-antes">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/4_antes.JPG" alt="Antes do procedimento" />
                                        <span>Antes</span>
                                    </div>
                                    <div className="resultado-depois">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/4_depois.JPG" alt="Depois do procedimento" />
                                        <span>Depois</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="resultado-slide">
                                <div className="resultado-imagens">
                                    <div className="resultado-antes">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/5_antes.JPG" alt="Antes do procedimento" />
                                        <span>Antes</span>
                                    </div>
                                    <div className="resultado-depois">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/5_depois.JPG" alt="Depois do procedimento" />
                                        <span>Depois</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="resultado-slide">
                                <div className="resultado-imagens">
                                    <div className="resultado-antes">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/6_antes.JPG" alt="Antes do procedimento" />
                                        <span>Antes</span>
                                    </div>
                                    <div className="resultado-depois">
                                        <img src="https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/antes_depois/6_depois.JPG" alt="Depois do procedimento" />
                                        <span>Depois</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <a 
                    href="https://wa.me/5531975583013?text=Olá%20Dra%2C%20gostaria%20de%20tirar%20algumas%20dúvidas%20e%20fazer%20um%20agendamento"
                    className="cta-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp"></i>
                    CLIQUE AQUI PARA DÚVIDAS E AGENDAMENTOS
                </a>
            </section>
            <section id="depoimentos">
                <h2>Depoimentos</h2>
                <div className="testimonials-container">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                        className="testimonials-slider"
                    >
                        {data.testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-card">
                                    <i className="fas fa-quote-left quote-icon"></i>
                                    <p className="testimonial-text">{testimonial.text}</p>
                                    <div className="testimonial-author">
                                        <strong>{testimonial.author}</strong>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <a 
                    href="https://wa.me/5531975583013?text=Olá%20Dra%2C%20gostaria%20de%20tirar%20algumas%20dúvidas%20e%20fazer%20um%20agendamento"
                    className="cta-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp"></i>
                    CLIQUE AQUI PARA DÚVIDAS E AGENDAMENTOS
                </a>
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
