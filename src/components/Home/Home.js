import React, { useEffect } from 'react';

import Icon from './Icon';
import Bar from './Bar';

import IconItems from './IconItems';
import BarItems from './BarItems';

import profile from '../../assets/profile.jpg'

const Home = () => {

    useEffect(() => {
        document.title = 'Home - Avraam Nikolaou'
    });

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
                    {IconItems.map((item, index) => {
                        return (
                            <Icon key={'icon' + index} icon={item.icon} text={item.text} title={item.title} />
                        )
                    })}
                </div>

                <div className={'info'}>
                    <div className={'general-info'}>
                        <img src={profile} alt=""/>
                        <h2 className={'info-title'}>
                            Hey, that's me!
                        </h2>

                        <div className={'info-text'}>
                            I'm a Front-End Developer from Greece. Javascript is my main focus and
                            coffee is my fuel. Nice to 'e-meet' you!
                        </div>
                    </div>

                    <div className={'bars'}>
                        {BarItems.map((bar, index) => {
                            return (
                                <Bar key={'bar' + index} skill={bar.skill} percent={bar.percent} fillClass={bar.fillClass} percentClass={bar.percentClass} />
                            )
                        })}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home;
