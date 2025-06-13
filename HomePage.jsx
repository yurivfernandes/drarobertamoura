import React from 'react';

const data = {
    profile: {
        image: "https://raw.githubusercontent.com/yurivfernandes/drarobertamoura/refs/heads/main/public/fotos/hero.jpeg",
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
    }
};

const HomePage = () => (
    <div>
        <nav>
            <div className="nav-content">
                <ul>
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                </ul>
                <div className="header-social" id="header-social">
                    {/* Links sociais serão inseridos via JavaScript */}
                </div>
            </div>
        </nav>
        <section id="home">
            <div className="hero">
                <img id="profile-image" src={data.profile.image} alt={data.profile.name} />
                <h1 id="profile-name">{data.profile.name}</h1>
                <p id="profile-title">{data.profile.title}</p>
                <p id="profile-subtitle">{data.profile.subtitle}</p>
            </div>
        </section>
        <section id="sobre">
            <h2>Sobre Mim</h2>
            <div className="about-content">
                <div className="about-text" id="about-text">
                    {data.profile.about.text.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className="about-photo">
                    <img id="about-image" src={data.profile.about.image} alt={data.profile.name} />
                </div>
            </div>
        </section>
        <footer>
            <div className="footer-content">
                <p>© 2025 Dra. Roberta Gomes Moura</p>
                <div className="footer-social" id="footer-social">
                    {/* Links sociais serão inseridos via JavaScript */}
                </div>
                <a href="#home" className="back-to-top" title="Voltar ao topo"><i className="fas fa-arrow-up"></i></a>
            </div>
        </footer>
    </div>
);

export default HomePage;
