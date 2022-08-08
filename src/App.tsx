import React from 'react';
import Daos from './pages/daos/daos';

import './App.scss';


function App() {
  return (
    <div className="container">
      <div className="container__header">
        <p>header</p>
      </div>
      <div className="container__body">
        <Daos />
      </div>
      <div className="container__footer">
        <p>footer</p>
      </div>
    </div>
  );
}

export default App;
