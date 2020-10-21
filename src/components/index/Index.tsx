import React from 'react';

import Header from '../core/Header/Header';
import SearchForm from './SearchForm/SearchForm';

const Index = () => {

    return (
        <>
            <Header />
            <SearchForm/>
        </>
    );
}
export default React.memo(Index);