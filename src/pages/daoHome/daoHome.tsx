import React from 'react';
import { useParams } from "react-router-dom";

import './daoHome.scss'


function DaoHome() {
    const { daoId } = useParams();

    return <div className='daoHome-container'>
        <div className='daoHome-container__top'>
            <div className='daoHome-container__top-bankAccounts'>
                bank accounts
            </div>
            <div className='daoHome-container__top-cards'>
                cards
            </div>
        </div>
        <div className='daoHome-container__bottom'>
            transactions
        </div>
    </div>;
}

export default DaoHome;