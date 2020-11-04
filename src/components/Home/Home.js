import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faLaptopCode, faTabletAlt, faCogs } from '@fortawesome/free-solid-svg-icons'
import IconItems from './IconItems';
import Icon from './Icon';

const Home = () => {
    return (
        <div className={'home-container'}>
            <div className={'home-container__inner'}>
                <div className={'title'}>
                   <h1>
                       Hi, I'm <span>Avraam Nikolaou</span>
                       <br/>
                       and I'm a Front-End Developer.
                   </h1>
                </div>

                <div className={'icons'}>
                    {IconItems.map((item) => {
                        return (
                            <Icon icon={item.icon} text={item.text} title={item.title} />
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default Home;
