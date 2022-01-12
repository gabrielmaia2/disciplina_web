import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Atividade7 from './atividade_7/Atividade7';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Atividade7 />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
