import React from "react";
import { useParams, Link } from "react-router-dom";

import './sideNav.scss'


function SideNav() {
    const { daoId } = useParams();

    return <div className="sideNav-container">
        <div className="sideNav-container__daoInfo">
            {daoId}
        </div>
        <div className="sideNav-container__nav">
            <Link to={`/dao/bankAccounts`} className='link'>
                <div className="sideNav-container__nav-navItem">
                    Bank Accounts
                </div>
            </Link>
            <Link to={`/dao/cards`} className='link'>
                <div className="sideNav-container__nav-navItem">
                    Cards
                </div>
            </Link>
            <Link to={`/dao/transactions`} className='link'>
                <div className="sideNav-container__nav-navItem">
                    Transactions
                </div>
            </Link>
        </div>
    </div>
}

export default SideNav;