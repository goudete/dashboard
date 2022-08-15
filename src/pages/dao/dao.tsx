import React, { useContext, useEffect, useState } from "react";
import SideNav from "../../components/sideNav/sideNav";
import { Outlet, useParams } from "react-router-dom";

import daoPageStyles from './dao.module.scss';
import { DaoContext, DaoCtx, DaoProvider } from "../../contexts/DaoContext";
import { getDao } from "../../services/daos.service";

function Dao() {

    const {setCurrentDao} = useContext(DaoContext) as DaoCtx;

    const params = useParams();

    useEffect(() => {
        getDao(params.daoId as string)
            .then((resp: any) => {
                setCurrentDao(resp.realms[0]);
            });
    }, [])

    return <div className={daoPageStyles.container}>
        <SideNav />
        <Outlet />
    </div>;
}

export default Dao;