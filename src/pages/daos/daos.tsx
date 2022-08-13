import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Dao } from '../../types/types';

import './daos.scss';

const API_URL = 'https://new-brex-core.herokuapp.com'


function Daos() {
  const [daos, setDaos] = useState([]);

  const getDaos = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/daos`);
      setDaos(data.realms.filter((dao: Dao)=> dao.displayName));
    } catch (err) {
      console.log('ERROR:', err)
    }
  }

  useEffect(() => {
    getDaos();
  }, []);

  return <div className="daos-container">
    {daos.map((dao: Dao) => (<Link key={`${dao.realmId}-${dao.displayName}`} to={`/dao/${dao.displayName}`} className='daos-container__dao'>
        <div>
          <img src={dao.ogImage} style={{ maxWidth: '40px' }} />
          <p>{dao.displayName}</p> <br />
        </div>
      </Link>
    ))}
  </div>;
}

export default Daos;