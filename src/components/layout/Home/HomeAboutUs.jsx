import React from "react";
import decoration from '../../../assets/icons/Decoration.svg';
import signature from '../../../assets/icons/Signature.svg';
import peopleImage from '../../../assets/images/People.jpg';

const HomeAboutUs = () => {
    return (
        <div className="home-about_us">
            <section className="home-about_us_left">
                <h2>O nas</h2>
                <img src={decoration} alt="decoration"/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed
                    pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} alt="signature"/>
            </section>
            <section className="home-about_us_right">
                <img src={peopleImage} alt="people"/>
            </section>
        </div>
    );
};

export default HomeAboutUs;