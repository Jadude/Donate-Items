import React from "react";
import decoration from '../../../assets/icons/Decoration.svg';


const HomeForm = () => {
    return (
        <div className="home-form">
            <section className="home-form-right">
            <h2>Skontaktuj się z nami</h2>
            <img src={decoration} alt="decoration"/>
            <form className="contact-form">
                <label>Wpisz swoje imię</label>
                <input type="text" id="name" name="name" placeholder="Jakub" required/>
                <label>Wpisz swój email</label>
                <input type="email" id="email" placeholder="abc@xyz.pl" required/>
                <label>Wpisz swoją wiadomość</label>
                <textarea id="message" name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." rows="5" required></textarea>
                <button type="submit">Wyślij</button>
            </form>
            </section>
        </div>
    );
};

export default HomeForm;