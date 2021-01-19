import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';
import '../stylesheets/Button.css';

const Header = () => {
    return (
        <div className="navbar navbar-light header" style={{ backgroundImage: "url(/Banner.png"}}>
            <div className="container-fluid justify-content-around brandname">IENAberlin</div>
            <div class="container-fluid justify-content-around">
                <Link 
                class="button">
                    <div class="button-text">
                    ART
                    </div>
                    <div class="text-center">
                    x
                    </div>
                </Link>
                <Link 
                class="button">
                    <div class="button-text">
                    VINTAGE
                    </div>
                    <div class="text-center">
                    x
                    </div>
                </Link>
                <Link 
                class="button">
                    <div class="button-text">
                    ACCESORIES
                    </div>
                    <div class="text-center">
                    x
                    </div>
                </Link>
                <Link 
                class="button">
                    <div class="button-text">
                    SESSIONS
                    </div>
                    <div class="text-center">
                    x
                    </div>
                </Link>
                <Link 
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