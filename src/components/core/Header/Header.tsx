import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../images/logo.svg';
import './Header.scss';

const Header = () => {

    return (
        <div className="header">
            <Link to="/">
                <img src={Logo} alt="logo" className="header-logo" />
            </Link>
        </div>
    );
}
export default React.memo(Header);