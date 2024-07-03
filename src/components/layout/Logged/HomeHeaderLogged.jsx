import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import { auth } from '../../../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const HomeHeaderLogged = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // State
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Cleaner
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log("User logged out");
                navigate('/logout');
            })
            .catch((error) => {
                console.error("Error logging out: ", error);
            });
    };

    return (
        <header className="App-header">
            <div className="App-header-log">
                <ul>
                    {user ? (
                        <>
                            <li><p>{user.email}</p></li>
                            <li><a href="#">Oddaj rzeczy</a></li>
                            <li><button onClick={handleLogout}>Wyloguj</button></li>
                        </>
                    ) : (
                        <li><p>Ładowanie...</p></li>
                    )}
                </ul>
            </div>
            <nav className="App-header-nav">
                <ul>
                    <li><a href="/public">Start</a></li>
                    <li><Link to="section1" spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
                    <li><Link to="section2" spy={true} smooth={true} duration={500}>O nas</Link></li>
                    <li><Link to="section3" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Link></li>
                    <li><Link to="section4" spy={true} smooth={true} duration={500}>Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default HomeHeaderLogged;