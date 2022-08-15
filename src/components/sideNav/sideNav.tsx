import React, { useContext } from "react";
import { useParams, Link, NavLink, useNavigate } from "react-router-dom";
import { DaoContext, DaoCtx } from "../../contexts/DaoContext";
import mockDaoImage from '../../assets/dao-mock-logo.png'

import './sideNav.scss'


function SideNav() {
    const {currentDao} = useContext(DaoContext) as DaoCtx;
    const nav = useNavigate();

    return <div className="sideNav-container">
        <div className="sideNav-container__daoInfo" onClick={() => nav(`/dao/${currentDao?.realmId}`)}>
            <div className="avatar">
                <img src={currentDao?.ogImage ? currentDao?.ogImage : mockDaoImage} />
            </div>
            {currentDao?.displayName}
            <div className="rid">{currentDao?.realmId}</div>
        </div>
        <div className="sideNav-container__nav">
            <nav>
                <NavLink to={`/dao/${currentDao?.realmId}/bankAccounts`}
                    className={({isActive}: any) => 'link' + (isActive ? ' active' : '')}>
                    Bank Accounts
                </NavLink>
                <NavLink to={`/dao/${currentDao?.realmId}/cards`}
                    className={({isActive}: any) => 'link' + (isActive ? ' active' : '')}>
                    Cards
                </NavLink>
                <NavLink to={`/dao/${currentDao?.realmId}/transactions`}
                    className={({isActive}: any) => 'link' + (isActive ? ' active' : '')}>
                    Transactions 
                </NavLink>
            </nav>
        </div>
    </div>
}

export default SideNav;