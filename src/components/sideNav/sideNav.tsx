import React, { useContext } from "react";
import { useParams, Link, NavLink, useNavigate } from "react-router-dom";
import { DaoContext, DaoCtx } from "../../contexts/DaoContext";
import mockDaoImage from '../../assets/dao-mock-logo.png'
import ds from '../../assets/ds.svg';
import tw from '../../assets/tw.svg';
import ws from '../../assets/ws.svg';
import { DaoType } from "../../types/types";

import './sideNav.scss'


function SideNav() {
    const { currentDao } = useContext(DaoContext) as DaoCtx;
    const nav = useNavigate();

    return <div className="sideNav-container animate__animated animate__fadeInLeft">
        <div className="sideNav-container__daoInfo" onClick={() => nav(`/dao/${currentDao?.realmId}`)}>
            <div className="avatar">
                <img src={currentDao?.ogImage ? currentDao?.ogImage : mockDaoImage} />
            </div>
            {currentDao?.displayName}
            <div className="rid">{currentDao?.realmId?.substring(0, 4) + '...' + currentDao?.realmId?.substring(40)}</div>
            <div className="dao-meta">
                <div className="link ds">
                    <img src={ds} /> Discord
                </div>
                <div className="link tw">
                    <img src={tw} /> Twitter
                </div>
                <div className="link ws">
                    <img src={ws} />
                    www
                </div>
            </div>
            <div className="dao-meta text">
                <p>
                    {
                        currentDao?.description
                            ? currentDao?.description
                            : 'DAO information is here about DAO Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    }
                </p>
            </div>
        </div>
        <div className="sideNav-container__nav">
            <nav>
                <NavLink to={`/dao/${currentDao?.realmId}/#1`} className={'link'}>
                    Bank Accounts
                </NavLink>
                <NavLink to={`/dao/${currentDao?.realmId}/#2`} className={'link'}>
                    Cards
                </NavLink>
                <NavLink to={`/dao/${currentDao?.realmId}/#3`} className={'link'}>
                    Transactions
                </NavLink>
            </nav>
        </div>
    </div>
}

export default SideNav;