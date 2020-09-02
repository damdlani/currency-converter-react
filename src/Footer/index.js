import React from 'react';
import {StyledFooter} from './styled';

const Footer = ({name}) => (
    <StyledFooter>
        &copy;{name}
    </StyledFooter>
);
export default Footer;