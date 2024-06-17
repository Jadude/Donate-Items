import React from 'react';

const Header = () => {
    return (
        <header className="App-header">
        <section className = "App-header-log">
            <ul>
            <li><a href="/login">Zaloguj</a></li>
            <li><a href="/signup">Załóż konto</a></li>
            </ul>
        </section>
        <nav>
            <ul>
            <li><a href="/">Start</a></li>
            <li>O co chodzi?</li>
            <li>O nas</li>
            <li>Funacja i organizacje</li>
            <li>Kontakt</li>
            </ul>
        </nav>
        </header>
)
    ;
};

export default Header;