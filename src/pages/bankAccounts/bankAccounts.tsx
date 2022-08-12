import React from 'react';
import { bankAccounts } from '../../mockData';
import { BankAccount } from '../../types/types';

import './bankAccounts.scss';


function BankAccounts() {

    return <div className='bankAccounts-container'>
        {
            bankAccounts.map((account: BankAccount) => (
                <div className='bankAccounts-container__bankAccount'>
                    bank account: {account.DaoId}
                </div>
            ))
        }
    </div>;
}

export default BankAccounts;