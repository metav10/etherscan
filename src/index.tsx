import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Index from './components/index/Index';
import Transactions from './components/transactions/Transactions';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/transactions">
                    <Transactions />
                </Route>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);