import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';
import '../stylesheets/Button.css';

const Header = () => {
    return (
        <div className="navbar navbar-light header" style={{ backgroundImage: "url(/Banner.png"}}>
            <Link to="/" className="container-fluid justify-content-around brandname">IENAberlin</Link>
            <div class="container-fluid justify-content-around">
                <Link to="/art"
                class="button">
                    <div class="button-text">
                    ART
                    </div>
                    <div class="text-center">
                    x
                    </div>
                </Link>
                <Link to="/vintage"
                class="button">
                    <div class="button-text">
                    VINTAGE
                    </div>
                    <div class="text-center">
                    x
                    </div>
                </Link>
                <Link to="/accessories"
                class="button">
                    <div class="button-text">
                    ACCESSORIES
                    </div>
                    <div class="text-center">
                    x
                    </div>
                </Link>
                <Link to="/sessions"
                class="button">
                    <div class="button-text">
                    SESSIONS
                    </div>
                    <div class="text-center">
                    x
                    </div>
                </Link>
                <Link to="/contact"
                class="button">
                    <div class="button-text">
                    CONTACT
                    </div>
                    <div class="text-center">
                    x
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;