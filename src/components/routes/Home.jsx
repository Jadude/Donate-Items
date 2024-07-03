import React, { useState, useEffect } from "react";
import {Element} from 'react-scroll';
import { auth } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";

import Footer from "../layout/Basic/Footer";
import HomeStart from "../layout/Home/HomeStart";
import HomeThreeColumns from "../layout/Home/HomeThreeColumns";
import HomeFourSteps from "../layout/Home/HomeFourSteps";
import HomeAboutUs from "../layout/Home/HomeAboutUs";
import HomeHelp from "../layout/Home/HomeHelp";
import HomeForm from "../layout/Home/HomeForm";
import HomeHeader from "../layout/NotLogged/HomeHeader";
import HomeHeaderLogged from "../layout/Logged/HomeHeaderLogged";



const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // State
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Clean state
        return () => unsubscribe();
    }, []);


    return (
        <>
            {user ? <HomeHeaderLogged /> : <HomeHeader />}
            <main>
                <HomeStart/>
                <HomeThreeColumns/>
                <Element name="section1" id="section1">
                    <HomeFourSteps/>
                </Element>
                <Element name="section2" id="section2">
                    <HomeAboutUs/>
                </Element>
                <Element name="section3" id="section3">
                    <HomeHelp/>
                </Element>
                <Element name="section4" id="section4">
                    <HomeForm/>
                </Element>
            </main>
            <Footer/>
        </>
    )
        ;
};

export default Home;