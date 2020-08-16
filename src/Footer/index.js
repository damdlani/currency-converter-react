import React from 'react';
import "./style.css";

const Footer = ({name}) => (
    <footer className="footer">
        &copy;{name}
    </footer>
);
export default Footer;