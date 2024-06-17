import React from 'react';
import Header from "../layout/Basic/Header";
import Footer from "../layout/Basic/Footer";
import HomeStart from "../layout/Home/HomeStart";
import HomeThreeColumns from "../layout/Home/HomeThreeColumns";
import HomeFourSteps from "../layout/Home/HomeFourSteps";
import HomeAboutUs from "../layout/Home/HomeAboutUs";
import HomeHelp from "../layout/Home/HomeHelp";
import HomeForm from "../layout/Home/HomeForm";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <HomeStart/>
                <HomeThreeColumns/>
                <HomeFourSteps/>
                <HomeAboutUs/>
                <HomeHelp/>
                <HomeForm/>
            </main>
            <Footer/>
        </>
    );
};

export default Home;