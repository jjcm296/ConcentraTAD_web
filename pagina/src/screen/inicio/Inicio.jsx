import React, { useEffect, useState } from 'react';
import QuoteCards from './QuoteCards';
import './Inicio.css';

const Inicio = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Esto se asegura de que se actualice si redimensionas la ventana
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const bgImage = isMobile ? '/bg_ph.png' : '/bg_pc2.png';

    return (
        <>
            <section className="hero-section" style={{backgroundImage: `url(${bgImage})`}}>
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>Concentra tu mente, expande tu mundo</h1>
                        <p>
                            Una herramienta accesible y divertida que transforma la forma en que los niños con TDA
                            aprenden.
                        </p>
                        <button className="hero-button">Descargar la app</button>
                    </div>

                </div>
            </section>

            <section className="info-section">
                <div className="info-container">
                    <div className="info-image">
                        <img src="" alt="Ilustración de la app"/>
                    </div>
                    <div className="info-text">
                        <h2>¿Qué es Concentra TDA?</h2>
                        <p>
                            Concentra TDA es una aplicación de estudio para niños de entre 6 y 12 años con Trastorno por
                            Déficit de Atención (TDA). Fue hecha pensando en los tutores preocupados por la educación de
                            su hijo con TDA.
                        </p>
                    </div>
                </div>
            </section>

            <QuoteCards/>

            <section className="features-section" style={{backgroundImage: "url('/bg_benefits.png')"}}>
                <h2 className="features-title">Cómo ayudamos a niños con TDA</h2>
                <p className="features-subtitle">
                    Concentra TDA combina educación y diversión con estas funciones:
                </p>
                <div className="features-grid">

                    <div className="feature-card">
                        <img src="/flashcard_icon.png" alt="Flashcard" className="feature-icon"/>
                        <div className="feature-content">
                            <h3>Flashcards con repetición espaciada</h3>
                            <p>Las tarjetas se adaptan al ritmo del niño: si una se le dificulta, volverá a aparecer
                                hasta
                                dominarla.</p>
                        </div>

                    </div>

                    <div className="feature-card">
                        <img src="/minigame_icon.png" alt="Minijuego" className="feature-icon"/>
                        <div className="feature-content">
                            <h3>Minijuego</h3>
                            <p>Después de cada sesión de estudio, el niño desbloquea un minijuego para reforzar lo
                                aprendido
                                de forma divertida.</p>
                        </div>

                    </div>

                    <div className="feature-card">
                        <img src="/reward_icon.png" alt="Recompensas" className="feature-icon"/>
                        <div className="feature-content">
                            <h3>Sistema de recompensas</h3>
                            <p>Los niños ganan monedas que pueden canjear por recompensas definidas por el tutor, como
                                premios o descansos.</p>
                        </div>

                    </div>

                    <div className="feature-card">
                        <img src="/profile_icon.png" alt="Perfiles" className="feature-icon"/>
                        <div className="feature-content">
                            <h3>Perfiles separados</h3>
                            <p>El tutor configura y controla; el niño aprende y juega. El cambio entre perfiles es
                                sencillo
                                pero seguro.</p>
                        </div>

                    </div>


                </div>
            </section>




        </>


    );
};

export default Inicio;
