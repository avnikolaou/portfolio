import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faLaptopCode, faTabletAlt, faCogs } from '@fortawesome/free-solid-svg-icons'

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
                    <div className={'icon-container'}>
                        <FontAwesomeIcon icon={faBook} />
                        <h3>Lifelong learner</h3>
                        <p>Learning is a never ending process!</p>
                    </div>

                    <div className={'icon-container'}>
                        <FontAwesomeIcon icon={faLaptopCode} />
                        <h3>Clean</h3>
                        <p>On a mission to wright clean code!</p>
                    </div>

                    <div className={'icon-container'}>
                        <FontAwesomeIcon icon={faTabletAlt} />
                        <h3>Responsive</h3>
                        <p>Optimized for all devices, big or small!</p>
                    </div>

                    <div className={'icon-container'}>
                        <FontAwesomeIcon icon={faCogs} />
                        <h3>Effective</h3>
                        <p>Reusable, self explanatory, and efficient for others!</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home;
