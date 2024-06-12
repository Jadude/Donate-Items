import React from 'react';
import navLinkBase from "../utilities/NavLinkBase";

const Header = () => {
    return (
        <header className="App-header">
        <section>
            <a href="#">Zaloguj</a>
            <a href="#">Załóż konto</a>
        </section>
        <nav>
            <p>Start</p>
            <p>O co chodzi?</p>
            <p>O nas</p>
            <p>Funacja i organizacje</p>
            <p>Kontakt</p>
        </nav>
        </header>
)
    ;
};

export default Header;