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
          <h2 className="section-title" style={{ marginTop: 0 }}>Diplomado en Tecnología Educativa</h2>
          <p style={{ marginTop: '1rem' , textAlign: 'justify' }}>
            Este diplomado está diseñado para docentes y profesionales de la 
            educación que buscan integrar herramientas tecnológicas innovadoras 
            en sus prácticas pedagógicas. A través de un enfoque práctico y 
            contextualizado, los participantes desarrollarán competencias digitales 
            para transformar sus entornos de aprendizaje.
          </p>
          <a
            href="https://fcen.unal.edu.co/menu/educacion-continua/diplomado-tecnologias-educativa/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: '1.5rem' }}
          >
            Ver más información
          </a>
        </div>

        <hr style={{ margin: '40px auto', maxWidth: '720px', border: 'none', borderTop: '1px solid var(--border)' }} />

      </div>
    </section>
  );
}