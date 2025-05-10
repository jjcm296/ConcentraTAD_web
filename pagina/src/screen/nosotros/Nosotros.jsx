import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
    return (
        <section className="nosotros-section">
            <div className="nosotros-header">
                <h2>Sobre ConcentraTDA</h2>
                <p className="subtitulo">Tecnología educativa para niños con TDAH</p>
            </div>

            <div className="nosotros-contenido">
                <p>
                    <strong>ConcentraTDA</strong> es una aplicación tecnológica creada en 2025 por Alan Hernández Santiago, Jair Cruz Mendoza Jordan,
                    Kevin De la Cruz Morales, Quetzali Salcedo de Jesús, María Fernanda San Román Vargas y Zuzzet Hernández Suárez. Su propósito es gestionar
                    el aprendizaje y las rutinas de estudio de niños con TDAH de forma dinámica, lúdica y personalizada.
                </p>

                <p>
                    Desde Coatzacoalcos, Veracruz, nos enfocamos en brindar una herramienta accesible y amigable que permita a los niños aprender adaptándose
                    a sus necesidades, mientras acompañamos a las familias en este proceso. ConcentraTDA busca transformar el modelo educativo tradicional.
                </p>

                <p>
                    Nuestra visión al 2028 es ser líderes en educación para niños con TDA, promoviendo el protagonismo del niño en su aprendizaje e integrando
                    la tecnología a nivel nacional. Nuestra labor se guía por valores sólidos que nos definen como equipo.
                </p>
            </div>

            <div className="nosotros-bloques">
                <div className="bloque">
                    <h3>Misión</h3>
                    <p>
                        Brindar una experiencia de aprendizaje interactiva y lúdica para niños con TDA mediante una aplicación accesible,
                        personalizada y pensada para apoyar tanto al niño como a su familia.
                    </p>
                </div>

                <div className="bloque">
                    <h3>Visión</h3>
                    <p>
                        Para el 2030, ser la empresa líder en educación para niños con TDA, transformando el modelo educativo a través de
                        la tecnología, con enfoque personalizado e inclusivo a nivel nacional.
                    </p>
                </div>

                <div className="bloque">
                    <h3>Valores</h3>
                    <ul>
                        <li><strong>Inclusión:</strong> Educación accesible y adaptada para todos los niños.</li>
                        <li><strong>Innovación:</strong> Tecnología al servicio del aprendizaje y la concentración.</li>
                        <li><strong>Compromiso:</strong> Soluciones efectivas y de calidad para la educación infantil.</li>
                        <li><strong>Empatía:</strong> Entendemos y apoyamos las necesidades de las familias con TDA.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Nosotros;
