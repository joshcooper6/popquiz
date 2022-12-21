import React, { useState, useEffect } from 'react';
import { Header } from './comps';
import QuizApp from './comps/Quiz/Quiz';
import { ArtistContext } from './context/ArtistContext';
import axios from 'axios';

const App = () => {
  const [artist, setArtist] = useState('Lady Gaga');

  useEffect(() => {
    axios.get('/').then((res) => {
      
    });
  }, []);

  return (
    <div>
      <ArtistContext.Provider value={{artist, setArtist}}>
        <Header />
        <QuizApp artist={artist} />
      </ArtistContext.Provider>
    </div>
  );
};

export default App;