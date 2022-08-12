import React from "react";

interface Props {
    walletKey: string | undefined, 
    connectWallet: () => Promise<{ publicKey: string }>
}

function WalletAuth(props: Props) {
    const { walletKey, connectWallet } = props;

    return (!walletKey ? (
            <button onClick={connectWallet}>
                Connect to Phantom Wallet
            </button>
        ) : (
            <>
                {walletKey}
            </>
        )
    )
}

export default WalletAuth;