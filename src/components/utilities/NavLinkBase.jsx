import React from 'react';
import {NavLink} from 'react-router-dom';

const NavLinkBase = (to, title) => {
    return (
        <NavLink className="nav-link"
                 to={to}>
            {title}
        </NavLink>
    )
}

export default NavLinkBase;