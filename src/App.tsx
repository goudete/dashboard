import React from 'react';
import { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import {
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import WalletAuth from './components/walletAuth/walletAuth';


import './App.scss';


type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}


function App() {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(undefined);
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(undefined);

  const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana as any;
      if (provider.isPhantom) {
        return provider as PhantomProvider;
      }
    }
  };

  const connectWallet = async () => {
    // @ts-ignore
    const { solana } = window;

    if (solana) {
      try {
        const response = await solana.connect();
        console.log('wallet account ', response.publicKey.toString());
        setWalletKey(response.publicKey.toString());
      } catch (err) {
        console.log('ERROR connecting', err)
      }
    }
  };

  useEffect(() => {
    const provider = getProvider();

    if (provider) {
      setProvider(provider);
    } else {
      setProvider(undefined);
    }
  }, []);


  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header-title">
          <Link to="/daos" className='link'>
            <h1>new-brex</h1>
          </Link>
        </div>
        <div className="container__header-connectWalletButton">
          <WalletAuth props={{walletKey, connectWallet}} />
        </div>
      </div>
      <div className="container__body">
        <Outlet />
      </div>
      <div className="container__footer">
        <p>footer</p>
      </div>
    </div>
  );
}

export default App;
