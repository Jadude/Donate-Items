import React, {useState} from 'react';

// Logging logic
import {auth} from '../../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// Components
import HomeHeaderLogIn from "../layout/NotLogged/HomeHeaderLogIn";
// Assets
import decoration from '../../assets/icons/Decoration.svg';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Logged:', user);
                // to home page
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Login error:', errorCode, errorMessage);
                setError(errorMessage);
            });
    };

    return (
        <>
            <HomeHeaderLogIn/>
            <div className="login">
                <h2>Zaloguj się</h2>
                <img src={decoration} alt="decoration"/>

                <form className="login-form" onSubmit={handleLogin}>
                    <section className="register-inputs">
                        <label>Email</label>
                        <input type="email" id="email" value={email}
                               onChange={(e) => setEmail(e.target.value)} required/>
                        <label>Hasło</label>
                        <input type="password" id="password" value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               required/>
                    </section>
                    <section className="register-buttons">
                        <button type="button" onClick={() => window.location.href = '/register'}>Załóż konto</button>
                        <button type="submit">Zaloguj się</button>
                    </section>
                </form>


                {error && <p className="error-message">{error}</p>}

            </div>
        </>
    );
};

export default Login;

