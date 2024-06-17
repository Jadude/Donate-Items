import React from 'react';
import iconFacebook from '../../assets/icons/Facebook.svg';
import iconInstagram from '../../assets/icons/Instagram.svg';


const Footer = () => {
    return (
        <footer className="App-footer">
            <p className="App-footer-text">Copyright by Coders Lab</p>
            <div className="App-footer-icons">
                <a href="https://www.facebook.com/CodersLabSzkolaIT" target="_blank" rel="noopener noreferrer"><img
                    src={iconFacebook} alt="Facebook"/></a>
                <a href="https://www.instagram.com/coders.lab" target="_blank" rel="noopener noreferrer"><img
                    src={iconInstagram} alt="Instagram"/></a>
            </div>
        </footer>
    );
};

export default Footer;