import React from 'react';
import { mockTransactions } from '../../mockData';
import { Transaction } from '../../types/types';

import './transactions.scss';


function Transactions() {

    return <div className='transactions-container'>
        {
            mockTransactions.map((transaction: Transaction, i: number) => (
                <div key={i} className='transactions-container__transaction'>
                    <pre>
                        date: {transaction.date} <br />
                        amount: {transaction.amount} <br />
                        name: {transaction.name}
                    </pre>
                </div>
            ))
        }
    </div>;
}

export default Transactions;