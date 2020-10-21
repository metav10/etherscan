import React from 'react';
import { useRecoilState } from 'recoil';

import { balanceAtom } from '../../../core/atoms';
import Wallet from '../Wallet/Wallet';

import './TransactionsInfo.scss';


interface Props {
    address: string;
}

const TransactionsInfo = (props: Props) => {
    const [balance, setBalance] = useRecoilState(balanceAtom);

    return (
        <div className="transactions-info">
            <Wallet balance={balance} address={props.address} />
            <h4>Recent Transactions</h4>
            <div className="table">
                <span className="flex-1">date</span>
                <span className="flex-2">from address</span>
                <span className="flex-2">to address</span>
                <span className="flex-1">confirmations</span>
                <span className="flex-3">hash</span>
                <span className="flex-1-5">value</span>
            </div>
        </div>
    );
}
export default React.memo(TransactionsInfo);