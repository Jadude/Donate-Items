import React, {useState} from "react";
import decoration from '../../../assets/icons/Decoration.svg';

const HomeForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        // Validate name
        if (!name.trim()) {
            errors.name = "Pole Imię jest wymagane.";
            isValid = false;
        } else if (!/^\S+$/.test(name.trim())) {
            errors.name = "Imię powinno być jednym wyrazem.";
            isValid = false;
        }

        // Validate email
        if (!email.trim()) {
            errors.email = "Pole Email jest wymagane.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.trim())) {
            errors.email = "Podany email jest nieprawidłowy.";
            isValid = false;
        }

        // Validate message
        if (message.length < 120) {
            errors.message = "Wiadomość musi mieć conajmniej 120 znaków.";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const formData = {
                name: name.trim(),
                email: email.trim(),
                message: message.trim()
            };

            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Wystąpił problem z wysłaniem formularza.');
                    }
                })
                .then(data => {
                    console.log('Odpowiedź z serwera:', data);
                    if (data.status === 'success') {
                        setSuccessMessage('Wiadomość została wysłana.');
                        setName('');
                        setEmail('');
                        setMessage('');
                        setErrors({});
                    } else {
                        throw new Error('Wystąpił problem z wysłaniem formularza.');
                    }
                })
                .catch(error => {
                    console.error('Błąd:', error);
                    setSuccessMessage('');
                    setErrors({general: 'Wystąpił problem z wysłaniem formularza.'});
                });
        }
    };

    return (
        <div className="home-form">
            <section className="home-form-right">
                <h2>Skontaktuj się z nami</h2>
                <img src={decoration} alt="decoration"/>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-wrapper">
                            <label>Wpisz swoje imię</label>
                            <input type="text" id="name" name="name-contact" placeholder="Jakub" value={name}
                                   onChange={(e) => setName(e.target.value)} required/>
                            {errors.name && <p className="error-message">{errors.name}</p>}
                        </div>
                        <div className="input-wrapper">
                            <label>Wpisz swój email</label>
                            <input type="email" id="email-contact" placeholder="abc@xyz.pl" value={email}
                                   onChange={(e) => setEmail(e.target.value)} required/>
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <label>Wpisz swoją wiadomość</label>
                        <textarea id="message" name="message-contact"
                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)} rows="5" required></textarea>
                        {errors.message && <p className="error-message">{errors.message}</p>}
                    </div>
                    <button type="submit">Wyślij</button>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {errors.general && <p className="error-message">{errors.general}</p>}
                </form>
            </section>
        </div>
    )
        ;
};

export default HomeForm;

