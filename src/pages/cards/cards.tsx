import React from 'react';
import { cards } from '../../mockData';
import { Card } from '../../types/types';

import './cards.scss';

function Cards() {

    return <div className='cards-container'>
        {
            cards.map((card: Card, i: number) => (
                <div key={i} className='cards-container__card'>
                    <pre>
                        card id: {card.DaoId} <br />
                        bank account id: {card.bankAccountId}
                    </pre>
                </div>
            ))
        }
    </div>;
}

export default Cards;