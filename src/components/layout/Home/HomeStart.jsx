import React from 'react';
import decoration from '../../../assets/icons/Decoration.svg';
import homeHeroImage from '../../../assets/images/Home-Hero-Image.jpg';

const HomeStart = () => {
    return (
        <section className="home-start">
            <div className="home-start-image">
                {/*<img src={homeHeroImage} alt="things to donate"/>*/}
            </div>
            <div className="home-start-info">
                <h2>Zacznij pomagać!</h2>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decoration} alt="decoration"/>
                <div className="home-start-info-buttons">
                    <button>oddaj rzeczy</button>
                    <button>zorganizuj zbiórkę</button>
                </div>
            </div>
        </section>
    );
};

export default HomeStart;