import React from "react";
import SideNav from "../../components/sideNav/sideNav";
import { Outlet } from "react-router-dom";

import './dao.scss';

function Dao() {
    return <div className="dao-container">
        <SideNav />
        <Outlet />
    </div>;
}

export default Dao;