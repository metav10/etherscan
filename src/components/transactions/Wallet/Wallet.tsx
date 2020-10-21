import React from 'react';

import './Wallet.scss';


interface Props {
    balance: number;
    address: string;
}

const Wallet = (props: Props) => {

    return (
        <div className="wallet">
            <div className="wallet-address">
                <span className="wallet-address-title">WALLET ADDRESS</span>
                <span className="wallet-address-address">{props.address}</span>
            </div>
            <span className="wallet-balance">
                {props.balance}
                <span>ETH</span>
            </span>
        </div>
    );
}
export default React.memo(Wallet);