import React from 'react';
import './Feed.css'; // Estilos separados

const Feed = ({ news }) => {
  return (
    <div className="feed-container">
      {news.map((item, index) => (
        <div className="feed-card" key={index}>
          <img src={item.image} alt={item.title} className="feed-card-image" />
          <div className="feed-card-content">
            <h3 className="feed-card-title">{item.title}</h3>
            <p className="feed-card-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
