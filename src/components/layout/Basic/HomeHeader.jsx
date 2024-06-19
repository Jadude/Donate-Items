import React from 'react';
import {Link} from 'react-scroll';

const HomeHeader = () => {
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
                    <li><Link to="section1" spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
                    <li><Link to="section2" spy={true} smooth={true} duration={500}>O nas</Link></li>
                    <li><Link to="section3" spy={true} smooth={true} duration={500}>Funacja i organizacje</Link></li>
                    <li><Link to="section4" spy={true} smooth={true} duration={500}>Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    )
        ;
};

export default HomeHeader;