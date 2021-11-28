import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Atividade4 from './atividade_4/Atividade4';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Atividade4 />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
