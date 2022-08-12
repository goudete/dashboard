import React, { Suspense } from 'react';
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import mainLogo from './assets/logo.svg';
import { MainScene } from './components';
import WalletAuth from './components/walletAuth/walletAuth';

import './App.scss';


function App() {

  const [mainPage, setMainPage] = useState(true);
  const loc = useLocation();

  useEffect(() => {
    setMainPage(loc.pathname === '/')
  }, [loc])

  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header-title">
          <div className="logo-holder">
            <img src={mainLogo}/>
          </div>

          <nav>
            <Link to={'daos'}>Daos</Link>
            <Link to={'individuals'}>Individuals</Link>
            <Link to={'services'}>Services</Link>
          </nav>
        </div>
      </div>
      <div className="container__body">
        {!mainPage && <Outlet />}
        {mainPage && <MainScene />}
      </div>
    </div>
  );
}

export default App;
