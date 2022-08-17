import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import mainLogo from "./assets/logo.svg";
import { MainScene } from "./components";
import WalletAuth from "./components/walletAuth/walletAuth";

import "./App.scss";

function App() {
  const [mainPage, setMainPage] = useState(true);
  const loc = useLocation();

  useEffect(() => {
    setMainPage(loc.pathname === "/");
  }, [loc]);

  const nav = useNavigate();

  return (
    <div className="container">
      <div className="container__header">
        <div className="logo-holder" onClick={() => nav("/")}>
          <img src={mainLogo} />
        </div>
        <div className="header-divider" />
        <nav>
          <Link to={"daos"}>DAOs</Link>
          {/* <Link to={"about"}>About</Link>
          <Link to={"services"}>Services</Link> */}
        </nav>
        <div className="container__header-connectWalletButton">
          <WalletAuth />
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
