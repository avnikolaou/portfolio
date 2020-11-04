import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLaptopCode, faTabletAlt, faCogs } from '@fortawesome/free-solid-svg-icons'


const Icon = ({ icon, title, text}) => {
    return (
        <div className={'icon-container'}>
            <FontAwesomeIcon icon={icon} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Icon;
