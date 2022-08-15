import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, Outlet } from "react-router-dom";
import { DaoContext, DaoCtx } from '../../contexts/DaoContext';
import { mockBankAccounts, mockCards, mockTransactions } from '../../mockData';
import { BankAccount, Card, Transaction } from '../../types/types';
import dayjs from 'dayjs';

import './daoHome.scss'
import { MainButton } from '../../components';


function DaoHome() {
    const {currentDao} = useContext(DaoContext) as DaoCtx;
    const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
    const [cards, setCards] = useState<Card[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        setBankAccounts(mockBankAccounts);
        setCards(mockCards);
        setTransactions(mockTransactions);
    }, [])

    return <div className='daoHome-container'>
        <div className='daoHome-container__top'>
        
            <div className='daoHome-container__top-bankAccounts animate__animated animate__fadeInDown'>
                <div className="list-holder">
                {
                    bankAccounts.map((el, i) => (
                        <div className="list" key={el.accountNumber}>
                            <div className={'part'}>
                                {i === 0 && <div className="list-label">Account number</div>}
                                <div className="list-value">{el.accountNumber}</div>
                            </div>
                            <div className={'part'}>
                                {i === 0 && <div className="list-label">Amount</div>}
                                <div className="list-value">{el.amount?.toFixed(2)} <span>{el.currency}</span></div>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div className="actions">
                    <MainButton title={'New account'} onClick={() => null} small/>
                </div>
            </div>
        
            <div className='daoHome-container__top-cards animate__animated animate__fadeInDown'>
                <div className="list-holder">
                {
                    cards.map((el, i) => (
                        <div className="list" key={el.cardNumber}>
                            <div className={'part'}>
                                {i === 0 && <div className="list-label">&nbsp;</div>}
                                <div className="list-value">{el.cardNumber}</div>
                            </div>
                        </div>
                    ))
                }
                </div>

                <div className="actions">
                    <MainButton title={'Issue card'} onClick={() => null} small/>
                </div>
            </div>
            
        </div>
        <div className='daoHome-container__bottom animate__animated animate__fadeInUp'>
            
            <div className='daoHome-container__bottom-transactions'>
                {
                    transactions.map((el, i) => (
                        <div className="list" key={i}>
                            <div className="list-label">Transaction</div>
                            <div className="list-value">{el.name} <span>{dayjs(el.date).format('MMM DD')}</span></div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    </div>;
}

export default DaoHome;