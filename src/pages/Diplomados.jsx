import React from 'react';

export default function Diplomados() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Nuestros Diplomados</h1>
        <p className="section-sub">
          Programas de formación avanzada para profesionales comprometidos con 
          su desarrollo académico y profesional.
        </p>

        <div className="card" style={{ textAlign: 'center', maxWidth: '720px', margin: '40px auto 0' }}>
          <p>
            Estamos trabajando para ofrecerte una experiencia formativa de alto 
            nivel. Nuestros diplomados están diseñados para profesionales y 
            estudiantes que buscan profundizar sus conocimientos con programas 
            rigurosos, flexibles y orientados al mundo real.
          </p>
          <h2 className="section-title" style={{ color: 'var(--primary)', marginTop: '2rem', fontSize: '1.5rem' }}>
            🚧 En construcción
          </h2>
          <p style={{ marginTop: '0.5rem' }}>
            Esta sección estará disponible próximamente. Estamos preparando 
            contenido de calidad para presentarte nuestra oferta de diplomados. 
            ¡Vuelve pronto!
          </p>
        </div>

      </div>
    </section>
  );
}