import React from 'react';
import { transactions } from '../../mockData';
import { Transaction } from '../../types/types';

function Transactions() {

    return <div className='transactions-container'>
        {
            transactions.map((transaction: Transaction) => (
                <div className='transactions-container__transaction'>
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