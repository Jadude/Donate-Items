import React from 'react';
import Header from "../layout/Basic/Header";
import decoration from '../../assets/icons/Decoration.svg';


const Login = () => {
    return (
        <>
            <Header/>
            <div className="login">
                <h2>Zaloguj się</h2>
                <img src={decoration} alt="decoration"/>
                <div className="formlog">
                    email
                    hasło
                </div>
                <button>załóż konto</button>
                <button>zaloguj się</button>
            </div>
        </>
    );
};

export default Login;