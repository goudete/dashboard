import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDaos } from "../../services/daos.service";
import { DaoType } from "../../types/types";
import mockDaoImage from '../../assets/dao-mock-logo.png'

import "./daos.scss";

function Daos() {
  const nav = useNavigate();
  const [daoList, setDaoList] = useState([]);
  const [filteredDaos, setFilteredDaos] = useState([]);

  useEffect(() => {
    getAllDaos().then(resp => {
      setDaoList(resp);
      setFilteredDaos(resp)
    })
  }, [])

  const filterDaos = (e: any) => {
    const {value} = e.target;
    
    if (!value) {
      return setFilteredDaos(daoList)  
    }

    const filtered = daoList.filter((el: any) => {
      return el && el.displayName && el.displayName.toUpperCase().includes(value.toUpperCase())
    });
    setFilteredDaos(filtered)
  }

  return (
    <div className="daos-holder">
      <div className="search-holder">
        <div className="search-container">
          <input onChange={filterDaos} type={'text'}/>
        </div>
        <div className={'search-btn'}>Search</div>
      </div>
      <div className={'daos-container'}>
      {daoList && filteredDaos.map((dao: DaoType, i: number) => (
        <div
          key={dao.realmId}
          className={"daos-container__dao animate__animated animate__fadeInUp"}
          style={{animationDelay: .04 * i +'s'}}
          onClick={() => nav(`/dao/${dao.realmId}`)}
        >
          <div className="avatar-holder">
            <img src={dao.ogImage ? dao.ogImage : mockDaoImage} />
          </div>
          <div>
            <p>{dao.displayName}</p>
          </div>
          {/* <MainButton title={'join'} onClick={() => null} small/> */}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Daos;
