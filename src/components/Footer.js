import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className={'footer-icons'}>
                <a href={'https://www.linkedin.com/in/avraam-nikolaou/'} target={'_blank'}><FontAwesomeIcon icon={faLinkedinIn}/></a>

                <a href={'https://github.com/avnikolaou'} target={'_blank'}><FontAwesomeIcon icon={faGithub}/></a>
            </div>

            <div className={'footer-copyright'}>
                <span>Designed and developed with love | {(new Date().getFullYear())}</span>
            </div>
        </footer>
    )
}

export default Footer;
