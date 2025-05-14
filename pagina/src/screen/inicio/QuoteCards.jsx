import React, { useState } from 'react';

const QuoteCards = () => {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleFlip = (index) => {
        setFlippedIndex(flippedIndex === index ? null : index);
    };

    const cards = [
        {
            front: "“Mi hijo se distrae todo el tiempo en clase”\n“No logra concentrarse ni cinco minutos”",
            back: "¡No hay problema! ConcentraTDA ofrece sesiones breves, adaptadas al ritmo real de tu hijo. Puede estudiar sin presión, en casa, cuando mejor le funcione."
        },
        {
            front: "“Mi hijo ya no quiere estudiar”\n“Nada lo motiva a aprender”",
            back: "Transformamos el estudio en un reto emocionante. Cada logro se celebra, cada avance se premia. Aprender ya no es aburrido."
        }
    ];

    return (
        <section className="quote-section">
            <h2 className="quote-title">¿Te suenan estas frases?</h2>
            <p className="quote-subtitle">Sabemos lo frustrante que puede ser querer ayudar a tu hijo… y no saber por dónde empezar.</p>

            <div className="quote-grid">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`quote-card ${flippedIndex === index ? 'flipped' : ''}`}
                        onClick={() => handleFlip(index)}
                    >
                        <div className="card-inner">
                            <div className="card-front">
                                <p>{card.front}</p>
                                <span className="hint">Toca para ver solución</span>
                            </div>
                            <div className="card-back">
                                <p>{card.back}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default QuoteCards;
