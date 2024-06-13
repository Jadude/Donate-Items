import React from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <section className="start">
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <button>oddaj rzeczy</button>
                    <button>zorgaizuj zbiórkę</button>
                </section>
                <section className="yellowBar">
                    <p>10</p>
                    <p>5</p>
                    <p>7</p>
                </section>
                <section className="foursteps">
                    <h3>Wystarczą 4 proste kroki</h3>
                    <button>oddaj rzeczy</button>
                </section>
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