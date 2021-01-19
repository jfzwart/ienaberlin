import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';

const Header = () => {
    return (
        <div className="navbar navbar-light header" style={{ backgroundImage: "url(/Banner.png"}}>
            <form class="container-fluid justify-content-start">
                <Link class="btn btn-outline-success me-2" type="button">ART</Link>
                <Link class="btn btn-outline-success me-2" type="button">VINTAGE</Link>
                <Link class="btn btn-outline-success me-2" type="button">ACCESORIES</Link>
                <Link class="btn btn-outline-success me-2" type="button">SESSIONS</Link>
                <Link class="btn btn-outline-success me-2" type="button">CONTACT</Link>
            </form>
        </div>
    );
};

export default Header;