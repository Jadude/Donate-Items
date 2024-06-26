import React, { useState }  from 'react';

// Logging logic
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
// Components
import LogOutHeader from "../layout/Basic/LogOutHeader";
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
                console.log('Logged:', user);
                // to home page
                window.location.href = '/';
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
            <LogOutHeader/>
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
                <button onClick={() => window.location.href='/register'}>Załóż konto</button>
            </div>
        </>
    );
};

export default Login;

