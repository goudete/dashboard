import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainButton } from "../../components";
import { mockDaos } from "../../mockData";
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
      setDaoList(resp.realms);
      setFilteredDaos(resp.realms)
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
      {daoList && filteredDaos.map((dao: DaoType) => (
        <div
          key={dao.realmId}
          className={"daos-container__dao"}
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
