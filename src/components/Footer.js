import React from 'react';
import {Image} from 'cloudinary-react';
import '../stylesheets/Footer.css';

const Footer = () => {
    return (
        <div>
            <Image className="footer" cloudName="dtz9pdkde" publicId="Banner_voetbalk_exutp0" crop="scale" />
        </div>
    )
}

export default Footer;