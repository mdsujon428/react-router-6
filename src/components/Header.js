import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li> <Link to ="/home"> Home </Link> </li>
                <li> <Link to ="/dashboard"> Dashboard </Link> </li>
                <li> <Link to ="/services"> Services </Link> </li>
            </ul>
        </div>
    );
};

export default Header;