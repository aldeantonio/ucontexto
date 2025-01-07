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
            <div className='feed-card-author'>
                <img src={item.image} alt={item.title} className="feed-card-author-image" />
                <div className='feed-card-author-info'>
                    <span className="feed-card-author-name">{item.author}</span>
                    <span className="feed-card-author-date">{item.date}</span>
                </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
