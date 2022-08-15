import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Daos from './pages/daos/daos';
import Dao from './pages/dao/dao';
import DaoHome from './pages/daoHome/daoHome';
import BankAccounts from './pages/bankAccounts/bankAccounts';
import Cards from './pages/cards/cards';
import Transactions from './pages/transactions/transactions';
import StripeTest from './pages/stripe/stripeTest';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { DaoProvider } from './contexts/DaoContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <DaoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="stripeTest" element={<StripeTest />} />
            <Route path="daos" element={<Daos />} />
            <Route path="dao" element={<Dao />}>
              <Route path=":daoId" element={<DaoHome />} />
              <Route path=":daoId/bankAccounts" element={<BankAccounts />} />
              <Route path=":daoId/cards" element={<Cards />} />
              <Route path=":daoId/transactions" element={<Transactions />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </DaoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
