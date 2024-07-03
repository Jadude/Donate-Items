import React from 'react';
import HomeHeader from "../layout/NotLogged/HomeHeader";
import decoration from '../../assets/icons/Decoration.svg';

const Logout = () => {
    return (
        <>
        <HomeHeader />
        <div className="Logout-container">
            <div className="Logout-box">
                <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                <img src={decoration} alt="decoration"/>
                <a href="/">Strona główna</a>
            </div>
        </div>
        </>
    );
};

export default Logout;