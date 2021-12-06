import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Atividade6 from './atividade_6/Atividade6';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Atividade6 />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
