import React from 'react';
import { useParams, Link, Outlet } from "react-router-dom";

import './daoHome.scss'


function DaoHome() {
    const { daoId } = useParams();

    return <div className='daoHome-container'>
        <div className='daoHome-container__top'>
            <Link to={`/dao/bankAccounts`} className='link'>
                <div className='daoHome-container__top-bankAccounts'>
                    bank accounts
                </div>
            </Link>
            <Link to={`/dao/cards`} className='link'>
                <div className='daoHome-container__top-cards'>
                    cards
                </div>
            </Link>
        </div>
        <div className='daoHome-container__bottom'>
            <Link to={`/dao/transactions`} className='link'>
                <div className='daoHome-container__bottom-transactions'>
                    transactions
                </div>
            </Link>
        </div>
    </div>;
}

export default DaoHome;