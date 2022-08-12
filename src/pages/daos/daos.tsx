import React from 'react';
import { Link } from "react-router-dom";
import { mockDaos } from '../../mockData';
import { Dao } from '../../types/types';

import './daos.scss';


function Daos() {

  return <div className="daos-container">
    {
      mockDaos.map((dao: Dao) => (<Link key={dao.id} to={`/dao/${dao.name}`} className='daos-container__dao'>
          <div>
            <p>{dao.name}</p>
          </div>
        </Link>
      ))
    }
  </div>;
}

export default Daos;