import React, { useState, createContext } from "react";
import { DaoType } from "../types/types";

export interface DaoCtx {
  currentDao: DaoType | null;
  setCurrentDao: (dao: DaoType) => void;
}

export const DaoContext = createContext<DaoCtx | null>(null);

// @ts-ignore
export const DaoProvider = ({children}) => {
  const [dao, setDao] = useState<DaoType | null>(null);

  const setCurrentDao = (dao: DaoType) => {
    setDao(dao);
  }

  return (
    <DaoContext.Provider value={{
      currentDao: dao, setCurrentDao,
    }}>
      {children}
    </DaoContext.Provider>
  )
}