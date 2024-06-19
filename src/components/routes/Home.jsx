import React from 'react';
import {Element} from 'react-scroll';
import Footer from "../layout/Basic/Footer";
import HomeStart from "../layout/Home/HomeStart";
import HomeThreeColumns from "../layout/Home/HomeThreeColumns";
import HomeFourSteps from "../layout/Home/HomeFourSteps";
import HomeAboutUs from "../layout/Home/HomeAboutUs";
import HomeHelp from "../layout/Home/HomeHelp";
import HomeForm from "../layout/Home/HomeForm";
import HomeHeader from "../layout/Basic/HomeHeader";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <main>
                <HomeStart/>
                <HomeThreeColumns/>
                <Element name="section1">
                    <HomeFourSteps/>
                </Element>
                <Element name="section2">
                    <HomeAboutUs/>
                </Element>
                <Element name="section3">
                    <HomeHelp/>
                </Element>
                <Element name="section4">
                    <HomeForm/>
                </Element>
            </main>
            <Footer/>
        </>
    )
        ;
};

export default Home;