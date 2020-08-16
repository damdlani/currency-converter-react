import React from 'react';
import './style.css';

const Label = ({spanContent, userActionField}) => (
    <label className="form__label">
        <span className="form__span">{spanContent}*:</span>
        {userActionField}
    </label>
);

export default Label;