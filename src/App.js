// App.js
import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Spotlight from './components/Spotlight'; // Renomeado para refletir o componente
import './App.css';

// Importando imagens locais
import noticia1 from './assets/news-images/cover-ia.jpg';
import noticia2 from './assets/news-images/cover-arte.jpg';
import noticia3 from './assets/news-images/cover-negocio.jpg';

const newsData = [
  {
    title: 'O Renascimento Digital: Como a Arte Tradicional está Ganhando Vida no Mundo Virtual',
    description: 'Este renascimento digital não é apenas uma nova forma de expressão; é também uma maneira de conectar culturas, ressignificar o valor da arte tradicional e torná-la mais...',
    image: noticia1,
    author: 'Alde Ivaro',
    date: 'Janeiro 2023',
  },
  {
    title: 'Notícia 2',
    description: 'Descrição breve da notícia 2.',
    image: noticia2,
    author: 'Autor 2',
    date: 'Data 2',
  },
  {
    title: 'Notícia 3',
    description: 'Descrição breve da notícia 3.',
    image: noticia3,
    author: 'Autor 3',
    date: 'Data 3',
  },
];

const spotlightData = {
  image: noticia1, // Substitua pela URL da sua imagem
  title: 'Destaque do Dia',
  summary: 'Esta é uma breve descrição da notícia ou artigo em destaque.',
  author: 'Aldo Silva',
  date: '07 de Janeiro de 2025',
};

function App() {
  return (
    <div>
      {/* Header no topo */}
      <Header />

      {/* Conteúdo principal */}
      <div className="container">
        {/* Destaque do dia */}
        <Spotlight
          image={spotlightData.image}
          title={spotlightData.title}
          summary={spotlightData.summary}
          author={spotlightData.author}
          date={spotlightData.date}
        />

        {/* Últimas notícias */}
        <main>
          <h1>Últimas Notícias</h1>
          <Feed news={newsData} />
        </main>
      </div>
    </div>
  );
}

export default App;
