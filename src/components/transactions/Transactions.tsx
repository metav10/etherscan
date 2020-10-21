import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { getBalance, getTransactions } from '../../core/utils/fetchs';

import Header from '../core/Header/Header';
import TransactionsInfo from './TransactionsInfo/TransactionsInfo';
import TransactionsTable from './TransactionsTable/TransactionsTable';

import { balanceAtom, transactionsAtom } from '../../core/atoms';


interface Params {
    transactionId: string;
}

const Transactions = () => {
    //! STATE =========
    const [transactions, setTransactions] = useRecoilState(transactionsAtom);
    const [balance, setBalance] = useRecoilState(balanceAtom);
    const [isTransactionsLoaded, setTransactionsLoaded] = useState<boolean>(false);


    //! USES ==========
    const { transactionId } = useParams<Params>();

    useEffect(() => {
        const loadAsyncData = async () => {
            const balance = await getBalance(transactionId);
            if (balance !== undefined) {
                setBalance(balance.result);
            }
            const transactions = await getTransactions(transactionId);
            if (transactions !== undefined) {
                setTransactions(transactions.result);
                setTransactionsLoaded(true);
            }
        }
        loadAsyncData();
    }, [transactionId]);

    //! RENDER ========
    return (
        <>
            <Header />
            <div className="content">
                <TransactionsInfo address={transactionId} />
                <TransactionsTable />
            </div>
        </>
    );
}
export default React.memo(Transactions);