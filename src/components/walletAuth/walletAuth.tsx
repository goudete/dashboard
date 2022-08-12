import React from "react";
import { useEffect, useState } from "react";
import {
  PublicKey,
  Transaction,
} from "@solana/web3.js";

import './walletAuth.scss';


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

interface WalletKey {
  walletKey: string,
  shortWalletKey: string
}


function WalletAuth() {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(undefined);
  const [walletKey, setWalletKey] = useState<WalletKey | undefined>(undefined);


  const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana as any;
      if (provider.isPhantom) {
        return provider as PhantomProvider;
      }
    }
  };

  const walletClick = async () => {
    // @ts-ignore
    const { solana } = window;

    if (solana) {
      try {
        if (!walletKey) {
          const response = await solana.connect();
          const keys: WalletKey = {
            walletKey: response.publicKey.toString(),
            shortWalletKey: generateShortWalletKey(response.publicKey.toString())
          }

          setWalletKey(keys);
        } else {
          await solana.disconnect();
          setWalletKey(undefined);
        }
      } catch (err) {
        alert(err)
      }
    } else {
      alert('Please download Phantom');
    }
  };

  const generateShortWalletKey = (walletKey: string) => {
    const hexNotation = '0x';
    const beginning = walletKey.slice(0, 4);
    const elipsis = '...';
    const end = walletKey.slice(40);
    const shortWalletKey = hexNotation.concat(beginning).concat(elipsis).concat(end);

    return shortWalletKey;
  };

  useEffect(() => {
    const provider = getProvider();
    if (provider) {
      setProvider(provider);
    } else {
      setProvider(undefined);
    }
  }, []);

  return <div className="connectWallet" onClick={walletClick}>
    {walletKey && <span className="connectWallet-text">{walletKey.shortWalletKey}</span>}
    {!walletKey && <span className="connectWallet-text">connect wallet</span>}
  </div>;
}

export default WalletAuth;