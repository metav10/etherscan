import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchForm.scss';

const SearchForm = () => {
    const [address, setAddress] = useState<string>('');
    const history = useHistory();

    const findWallet = (e: any) => {
        e.preventDefault();
        history.push('/transactions/' + address)
    }

    return (
        <div className="search">
        <div className="search-content">
            <h2>Find a Wallet</h2>
            <form onSubmit={findWallet}>
                <input type="text" placeholder="Type an address" value={address} onChange={(e) => setAddress(e.target.value)} className="input" autoFocus={true} />
                <input type="submit" value="FIND" className="submit" />
            </form>
        </div>
        </div>
    );
}
export default React.memo(SearchForm);