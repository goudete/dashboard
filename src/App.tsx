import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './App.scss';


function App() {
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header-title">
          <Link to="/daos" className='link'>
            <h1>new-brex</h1>
          </Link>
        </div>
      </div>
      <div className="container__body">
        <Outlet />
      </div>
      <div className="container__footer">
        <p>footer</p>
      </div>
    </div>
  );
}

export default App;
