import React from 'react';
import { useRecoilState } from 'recoil';
import { transactionsAtom } from '../../../core/atoms';
import { timeConverter } from '../../../core/utils/functions';
import './TransactionsTable.scss';


const TransactionsTable = () => {
    const [transactions, setTransactions] = useRecoilState(transactionsAtom);

    return (
        <div className="transactions-data">
            <ul className="transactions-table">
                {
                    transactions.length > 0 ?
                        transactions.map((transaction, i) => {
                            console.log(transaction);
                            const {
                                hash,
                                timeStamp,
                                from,
                                to,
                                confirmations,
                                value
                            } = transaction;

                            let color: string = 'var(--black)';
                            if (value > 0) {
                                color = 'var(--green)';
                            } else if (value < 0) {
                                color = 'var(--red)';
                            }

                            return <li key={i + hash} className="table">
                                <span className="flex-1">{timeConverter(timeStamp)}</span>
                                <span className="flex-2">{from}</span>
                                <span className="flex-2">{to}</span>
                                <span className="flex-1">{confirmations}</span>
                                <span className="flex-3">{hash}</span>
                                <span className="flex-1-5" style={{ color }}>
                                    {value}
                                </span>
                            </li>;
                        })
                        : <span className="no-data">Loading data...</span>
                }
            </ul>
        </div>
    );
}
export default React.memo(TransactionsTable);