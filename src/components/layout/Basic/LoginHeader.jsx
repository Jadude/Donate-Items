import React from 'react';

const LoginHeader = () => {
    return (
        <header className="App-header">
            <div className="App-header-log">
                <ul>
                    <li><a href="/login">Zaloguj</a></li>
                    <li><a href="/signup">Załóż konto</a></li>
                </ul>
            </div>
            <nav className="App-header-nav">
                <ul>
                    <li><a href="/">Start</a></li>
                    <li><a href="/">O co chodzi?</a></li>
                    <li><a href="/">O nas</a></li>
                    <li><a href="/">Funacja i organizacje</a></li>
                    <li><a href="/">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    )
        ;
};

export default LoginHeader;