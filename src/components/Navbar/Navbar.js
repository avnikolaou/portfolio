import React, { useState } from 'react';
import { NavLink } from'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import MenuItems from './MenuItems';

const Navbar = () => {
    const [menuClicked, setMenuClicked] = useState(true);

    return (
        <nav className={'NavbarItems'}>
            <h1 className={'navbar-logo'}>Avraam<FontAwesomeIcon icon={faReact}/></h1>
            <div className={'menu-icon'} onClick={() =>setMenuClicked(!menuClicked)}>
                {menuClicked ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </div>

            <ul className={menuClicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink exact className={item.cName} to={item.url} activeClassName={item.activeCName}>{item.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
