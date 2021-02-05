import React from 'react';
import '../stylesheets/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href="https://www.instagram.com/ienaberlin/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                <a href="https://www.linkedin.com/in/mirjam-douma/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            </div>
            {/* <Image className="footer" cloudName="dtz9pdkde" publicId="Banner_voetbalk_exutp0" crop="scale" /> */}
        </div>
    )
}

export default Footer;
