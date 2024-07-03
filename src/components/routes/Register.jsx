import React, { useState } from 'react';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';


import LoginHeader from "../layout/NotLogged/HomeHeader";
import decoration from '../../assets/icons/Decoration.svg';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Hasła nie są identyczne');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Zarejestrowano:', user);
                setSuccess('Rejestracja zakończona sukcesem. Możesz się teraz zalogować.');
                setError('');
                // Resetowanie formularza
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Błąd rejestracji:', errorCode, errorMessage);
                setError(errorMessage);
                setSuccess('');
            });
    };

    return (
        <>
            <LoginHeader />
            <div className="login">
                <h2>Zarejestruj się</h2>
                <img src={decoration} alt="decoration"/>
                <form className="login-form" onSubmit={handleRegister}>
                    <section className="register-inputs">
                        <label>Email</label>
                        <input
                            type="email"
                            id="email-reg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>Hasło</label>
                        <input
                            type="password"
                            id="password-reg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label>Potwierdź hasło</label>
                        <input
                            type="password"
                            id="confirm-password-reg"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </section>
                    <section className="register-buttons">
                        <button type="button" onClick={() => window.location.href = '/login'}>Zaloguj się</button>
                        <button type="submit">Zarejestruj się</button>
                    </section>
                </form>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
            </div>
        </>
    );
};

export default Register;

