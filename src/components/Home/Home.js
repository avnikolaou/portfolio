import React from 'react';

import Icon from './Icon';
import Bar from './Bar';

import IconItems from './IconItems';
import BarItems from './BarItems';

import profile from '../../assets/profile.jpg'

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
                    {IconItems.map((item, index) => {
                        return (
                            <Icon key={'icon' + index} icon={item.icon} text={item.text} title={item.title} />
                        )
                    })}
                </div>

                <div className={'info'}>
                    <div className={'general-info'}>
                        <img src={profile} alt=""/>
                        <div className={'info-title'}>
                            That's me!
                        </div>

                        <div className={'info-text'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley of type and scrambled it to make a type specimen book.
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
