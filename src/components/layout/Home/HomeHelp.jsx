import React from "react";
import decoration from '../../../assets/icons/Decoration.svg';

const HomeHelp = () => {
    return (
        <section className="home-help">
            <h2>Komu pomagamy?</h2>
            <img src={decoration} alt="decoration"/>
            <section className="home-help-select">
                <a href="">Fundacjom</a>
                <a href="">Organizacjom pozarządowym</a>
                <a href="">Lokalnym zbiórkom</a>
            </section>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <p>elment generowany?</p>
        </section>
    );
};

export default HomeHelp;