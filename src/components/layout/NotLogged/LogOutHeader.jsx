import React from 'react';

const LogOutHeader = () => {
    return (
        <header className="App-header">
            <div className="App-header-log App-header-log-login">
                <ul>
                    <li><a href="/login">Zaloguj</a></li>
                    <li><a href="/register">Załóż konto</a></li>
                </ul>
            </div>
            <nav className="App-header-nav">
                <ul>
                    <li><a href="/">Start</a></li>
                    <li><a href="/#section1">O co chodzi?</a></li>
                    <li><a href="/#section2">O nas</a></li>
                    <li><a href="/#section3">Funacja i organizacje</a></li>
                    <li><a href="/#section4">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default LogOutHeader;