import React, { useState } from 'react';
import Flowers from './Flower'; 
import './App.css';

const LiePage = ({ onRetry }) => {
  return (
    <div className="container lie-bg">
      <div className="gif-container">
        {/* GUNAKAN panda.gif SESUAI FOLDER PUBLIC */}
        <img 
          src={process.env.PUBLIC_URL + "/panda.gif"} 
          alt="Panda Peek" 
          className="lie-page-gif" 
        />
      </div>

      <h1 className="question">Kamu boong bocill! 😜</h1>
      <p className="subtitle">Kamu Itu si Bocil imup</p>
      
      <button className="btn retry-btn" onClick={onRetry}>
        Coba klik disini
      </button>
    </div>
  );
};

function App() {
  const [pageState, setPageState] = useState(0); 

  const handleYes = () => setPageState(2);
  const handleNo = () => setPageState(1);
  const handleRetry = () => setPageState(2); 

  return (
    <div className="App">
      {pageState === 0 && (
        <div className="container question-bg">
          <h1 className="question">Apakah kamu Si Bocil imup?</h1>
          <div className="button-group">
            <button className="btn yes-btn" onClick={handleYes}>Iya</button>
            <button className="btn no-btn" onClick={handleNo}>Tidak</button>
          </div>
        </div>
      )}

      {pageState === 1 && (
        <LiePage onRetry={handleRetry} />
      )}

      {pageState === 2 && (
        <div className="final-page">
          <h1 className="final-title">Kesukaan siapa ya ini bungaa?</h1>

          <Flowers />
          
          {/* GUNAKAN bear.gif SESUAI FOLDER PUBLIC */}
          <img 
            src={process.env.PUBLIC_URL + "/bear.gif"} 
            alt="Bear Left" 
            className="final-gif gif-left" 
          />

          <img 
            src={process.env.PUBLIC_URL + "/bear.gif"} 
            alt="Bear Right" 
            className="final-gif gif-right" 
          />
        </div>
      )}
    </div>
  );
}

export default App;