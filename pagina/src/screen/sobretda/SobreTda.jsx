import React, { useRef } from 'react';
import './SobreTda.css';

const criterios = [
    "Fallas frecuentes en prestar atención a detalles o cometer errores por descuido en tareas escolares u otras actividades.",
    "Dificultad constante para mantener la atención en tareas o juegos.",
    "Apariencia de no escuchar cuando se le habla directamente.",
    "Falta de seguimiento de instrucciones y dificultades para terminar trabajos escolares u otras actividades.",
    "Problemas para organizar tareas y actividades.",
    "Evitación de actividades que requieren esfuerzo mental sostenido.",
    "Pérdida frecuente de objetos necesarios para las actividades.",
    "Facilidad para distraerse con estímulos irrelevantes.",
    "Olvidos frecuentes en las actividades diarias."
];

const SobreTda = () => {
    const carouselRef = useRef(null); // ✅ definido correctamente

    const handleScroll = (direction) => {
        const container = carouselRef.current;
        const scrollAmount = 320;
        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="sobre-tda-section">
                <div className="texto-container">
                    <h2>¿Qué es el TDA?</h2>
                    <p>
                        El Trastorno por Déficit de Atención (TDA) es un trastorno del neurodesarrollo que se manifiesta
                        principalmente a través de un patrón persistente de inatención, el cual interfiere de manera
                        significativa con el funcionamiento académico, social y emocional del individuo.
                        <br/><br/>
                        Si bien es comúnmente relacionado con el Trastorno por Déficit de Atención e Hiperactividad
                        (TDAH), el TDA se distingue por la ausencia marcada de hiperactividad e impulsividad,
                        enfocándose exclusivamente en las dificultades atencionales.
                        <br/><br/>
                        <em>(González-Castro, P., Rodríguez, C., & Cueli, M. (2016). Impacto del TDAH inatento en el
                            rendimiento escolar. Revista Iberoamericana de Diagnóstico y Evaluación Psicológica)</em>
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="/tda_info.jpg" alt="Información sobre el TDA"/>
                </div>
            </section>

            <section className="dificultades-section">
                <h2 className="dificultades-title">Dificultades comunes asociadas al TDA</h2>
                <div className="dificultades-grid">
                    {[
                        "Baja capacidad de mantener atención en clase.",
                        "Escasa comprensión y retención de la información.",
                        "Problemas para ejecutar tareas correctamente.",
                        "Bajo rendimiento escolar.",
                        "Retraso de la lectoescritura.",
                        "Errores frecuentes en matemáticas.",
                        "Dificultades en la gestión del tiempo y en la organización.",
                        "Problemas para seguir instrucciones complejas.",
                        "Baja tolerancia a la frustración.",
                        "Problemas emocionales como ansiedad o tristeza.",
                        "Falta de seguimiento en las conversaciones y aislamiento.",
                        "Impacto negativo en vínculos afectivos estables."
                    ].map((item, index) => (
                        <div key={index} className="dificultad-card">
                            <img src={`/icons/icon${(index % 6) + 1}.png`} alt="" className="dificultad-icon"/>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="criterios-section">
                <h2>Criterios Diagnósticos</h2>
                <p className="criterios-descripcion">
                    El diagnóstico del TDA se basa en la identificación de un patrón persistente de inatención que
                    interfiere con el funcionamiento o el desarrollo del niño o adolescente. Para establecer el
                    diagnóstico,
                    deben observarse al menos seis de los siguientes síntomas durante un período mínimo de seis meses:
                </p>

                <div className="carousel-wrapper">
                    <button className="carousel-btn left" onClick={() => handleScroll('left')}>&lt;</button>

                    <div className="carousel-container" ref={carouselRef}>
                        {criterios.map((criterio, index) => (
                            <div key={index} className="criterio-card">
                                <p>{criterio}</p>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-btn right" onClick={() => handleScroll('right')}>&gt;</button>
                </div>
            </section>

        </>
    )
}

export default SobreTda;