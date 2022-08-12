import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './App.scss';
import { MainScene } from './components';


function App() {
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header-title">
          <Link to="/daos" className='link'>
            <p>new-brex</p>
          </Link>
        </div>
      </div>
      <div className="container__body">
        <Outlet />
        <MainScene/>
      </div>
      <div className="container__footer">
        <p>footer</p>
      </div>
    </div>
  );
}

export default App;
