import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Icon = ({ icon, title, text}) => {
    return (
        <div className={'icon-container'}>
            <FontAwesomeIcon icon={icon} />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Icon;
