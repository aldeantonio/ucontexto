import React from 'react';
import './Spotlight.css';

const Spotlight = ({ image, title, summary, author, date }) => {
  return (
    <div className="spotlight">
      {/* Imagem à esquerda */}
      <div className="spotlight-image">
        <img src={image} alt={title} />
      </div>

      {/* Texto à direita */}
      <div className="spotlight-content">
        <h2>{title}</h2>
        <p className="spotlight-summary">{summary}</p>
        <div className="spotlight-meta">
          <span className="spotlight-author">Por: {author}</span>
          <span className="spotlight-date">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
