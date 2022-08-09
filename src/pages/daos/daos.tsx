import React from 'react';
import { Link } from "react-router-dom";
import { mockDaos } from '../../mockData';
import { Dao } from '../../types/types';

import './daos.scss';


function Daos() {

  return <div className="daos-container">
    {
      mockDaos.map((dao: Dao) => (<Link to={`/dao/${dao.name}`} className='link'>
          <div key={dao.id} className='daos-container__dao'>
            <p>{dao.name}</p>
          </div>
        </Link>
      ))
    }
  </div>;
}

export default Daos;