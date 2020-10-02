import React from 'react';
import { StyledLabel, Span } from './styled';

const Label = ({ spanContent, userActionField }) => (
    <StyledLabel>
        <Span className="form__span">{spanContent}*:</Span>
        {userActionField}
    </StyledLabel>
);

export default Label;