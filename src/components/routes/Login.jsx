import React, { useState }  from 'react';
// Logging logic
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config';
// Components
import LoginHeader from "../layout/Basic/HomeHeader";
// Assets
import decoration from '../../assets/icons/Decoration.svg';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Zalogowano:', user);
                // Przekierowanie lub dalsza logika
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Błąd logowania:', errorCode, errorMessage);
                setError(errorMessage);
            });
    };

    return (
        <>
            <LoginHeader/>
            <div className="login">
                <h2>Zaloguj się</h2>
                <img src={decoration} alt="decoration"/>
                <form className="login-form" onSubmit={handleLogin}>
                    <label>Email</label>
                    <input type="email" id="email" value={email}
                           onChange={(e) => setEmail(e.target.value)} required/>
                    <label>Hasło</label>
                    <input type="password" id="passord" value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required/>
                    <button type="submit">Zaloguj się</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {/*<button onClick={() => window.location.href='/register'}>Załóż konto</button>*/}
            </div>
        </>
    );
};

export default Login;