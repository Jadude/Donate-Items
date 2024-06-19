import React from 'react';
import decoration from '../../../assets/icons/Decoration.svg';
import icon1 from '../../../assets/icons/Icon-1.svg';
import icon2 from '../../../assets/icons/Icon-2.svg';
import icon3 from '../../../assets/icons/Icon-3.svg';
import icon4 from '../../../assets/icons/Icon-4.svg';


const HomeFourSteps = () => {
    return (
        <section className="home-four_steps">
            <h2>Wystarczą 4 proste kroki</h2>
            <img src={decoration} alt="decoration"/>
            <div className="four-steps-box">
                <div className="step">
                    <img src={icon1} alt="clothes"/>
                    <p>Wybierz rzeczy</p>
                    <span className="divider"></span>
                    <p className="step-info">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="step">
                    <img src={icon2} alt="bag"/>
                    <p>Spakuj je</p>
                    <span className="divider"></span>
                    <p className="step-info">skorzystaj z worków na śmieci</p>
                </div>
                <div className="step">
                    <img src={icon3} alt="search"/>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <span className="divider"></span>
                    <p className="step-info">wybierz zaufane miejsce</p>
                </div>
                <div className="step">
                    <img src={icon4} alt="circle"/>
                    <p>Zamów kuriera</p>
                    <span className="divider"></span>
                    <p className="step-info">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <a href="/login" className="big-white-button">oddaj rzeczy</a>
        </section>
    );
};

export default HomeFourSteps;