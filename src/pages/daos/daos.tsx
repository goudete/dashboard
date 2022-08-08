import React from 'react';
import { mockDaos } from '../../mockData';
import { Dao } from '../../types/types';

import './daos.scss';


function Daos() {

  return <div className="dao-container">
    {
      mockDaos.map((dao: Dao) => (<div key={dao.id} className='dao'>
          <p>{dao.name}</p>
        </div>
      ))
    }
  </div>;
}

export default Daos;