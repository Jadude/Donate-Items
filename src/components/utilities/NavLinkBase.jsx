import React from 'react';
import {NavLink} from 'react-router-dom';

const NavLinkBase = (to, title) => {
    return (
        <NavLink className="nav-link"
                 to={to}
                 style={({isActive}) =>
                     isActive
                         ? {textDecoration: "underline", fontWeight: "bold"}
                         : {textDecoration: "none"}
                     // style in scss activeClassName=
                 }
                 end
        >
            {title}
        </NavLink>
    )
}

export default NavLinkBase;