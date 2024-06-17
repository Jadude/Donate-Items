import React from 'react';
import Header from "../layout/Basic/Header";
import Footer from "../layout/Basic/Footer";
import HomeStart from "../layout/Home/HomeStart";
import HomeThreeColumns from "../layout/Home/HomeThreeColumns";
import HomeFourSteps from "../layout/Home/HomeFourSteps";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <HomeStart/>
                <HomeThreeColumns/>
                <HomeFourSteps/>
                <section className="aboutUs">
                    <p>O nas</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ex!</span>
                </section>
                <section className="help">
                    <h3>Komu pomagamy?</h3>
                </section>
                <section className="form">
                    <h3>Skontaktuj się z nami</h3>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Home;