import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import './App.css';

// Importando imagens locais
import noticia1 from './assets/news-images/cover-ia.jpg';
import noticia2 from './assets/news-images/cover-arte.jpg';
import noticia3 from './assets/news-images/cover-negocio.jpg';


const newsData = [
  {
    title: 'Notícia 1',
    description: 'Descrição breve da notícia 1.',
    image: noticia1,
  },
  {
    title: 'Notícia 2',
    description: 'Descrição breve da notícia 2.',
    image: noticia2,
  },
  {
    title: 'Notícia 3',
    description: 'Descrição breve da notícia 3.',
    image: noticia3,
  },
  {
    title: 'Notícia 4',
    description: 'Descrição breve da notícia 4.',
    image: noticia1,
  },
  {
    title: 'Notícia 5',
    description: 'Descrição breve da notícia 5.',
    image: noticia2,
  },
  {
    title: 'Notícia 6',
    description: 'Descrição breve da notícia 6.',
    image: noticia3,
  },
];

function App() {
  return (
    <div>
      
      {/* Header no topo */}
      <Header />

      {/* Conteúdo principal */}
      <div className="container">
      <main>
        <h1>Ultimas Notícias</h1>
        <Feed news={newsData} />
      </main>

      </div>
    </div>
  );
}

export default App;
