import React from 'react';
import { mockBankAccounts } from '../../mockData';
import { BankAccount } from '../../types/types';

import './bankAccounts.scss';


function BankAccounts() {

    return <div className='bankAccounts-container'>
        {
            mockBankAccounts.map((account: BankAccount, i: number) => (
                <div key={i} className='bankAccounts-container__bankAccount'>
                    bank account: {account.DaoId}
                </div>
            ))
        }
    </div>;
}

export default BankAccounts;