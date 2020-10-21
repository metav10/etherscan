import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { RecoilRoot } from 'recoil';

import Index from './components/index/Index';
import Transactions from './components/transactions/Transactions';

import './index.scss';


ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Router>
                <Switch>
                    <Route path="/transactions/:transactionId">
                        <Transactions />
                    </Route>
                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
            </Router>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);