import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';
import '../stylesheets/Button.css';

const Header = () => {
    return (
        <div className="navbar navbar-light header" style={{ backgroundImage: "url(/Banner.png"}}>
            <Link to="/" className="container-fluid justify-content-around brandname">IENAberlin</Link>
            <div className="container-fluid justify-content-around">
                <Link to="/art"
                className="button">
                    <div className="button-text">
                    ART
                    </div>
                    <div className="text-center">
                    x
                    </div>
                </Link>
                <Link to="/vintage"
                className="button">
                    <div className="button-text">
                    VINTAGE
                    </div>
                    <div className="text-center">
                    x
                    </div>
                </Link>
                <Link to="/accessories"
                className="button">
                    <div className="button-text">
                    ACCESSORIES
                    </div>
                    <div className="text-center">
                    x
                    </div>
                </Link>
                <Link to="/sessions"
                className="button">
                    <div className="button-text">
                    SESSIONS
                    </div>
                    <div className="text-center">
                    x
                    </div>
                </Link>
                <Link to="/contact"
                className="button">
                    <div className="button-text">
                    CONTACT
                    </div>
                    <div className="text-center">
                    x
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;