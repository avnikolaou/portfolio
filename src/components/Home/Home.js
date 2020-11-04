import React from 'react';

import IconItems from './IconItems';
import Icon from './Icon';

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
                    {IconItems.map((item) => {
                        return (
                            <Icon icon={item.icon} text={item.text} title={item.title} />
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
                        <div className={'bar'}>
                            <div className={'bar-skill'}>Javascript</div>
                            <div className={'bar-fill w9'}/>
                            <div className={'w1'}>90%</div>
                        </div>

                        <div className={'bar'}>
                            <div className={'bar-skill'}>React</div>
                            <div className={'bar-fill w9'}/>
                            <div className={'w1'}>90%</div>
                        </div>

                        <div className={'bar'}>
                            <div className={'bar-skill'}>HTML</div>
                            <div className={'bar-fill w9'}/>
                            <div className={'w1'}>90%</div>
                        </div>

                        <div className={'bar'}>
                            <div className={'bar-skill'}>CSS/SASS</div>
                            <div className={'bar-fill w9'}/>
                            <div className={'w1'}>90%</div>
                        </div>

                        <div className={'bar'}>
                            <div className={'bar-skill'}>JEST</div>
                            <div className={'bar-fill w8'}/>
                            <div className={'w2'}>80%</div>
                        </div>

                        <div className={'bar'}>
                            <div className={'bar-skill'}>GIT</div>
                            <div className={'bar-fill w9'}/>
                            <div className={'w1'}>90%</div>
                        </div>

                        <div className={'bar'}>
                            <div className={'bar-skill'}>Node</div>
                            <div className={'bar-fill w7'}/>
                            <div className={'w3'}>70%</div>
                        </div>

                        <div className={'bar'}>
                            <div className={'bar-skill'}>Mongo</div>
                            <div className={'bar-fill w7'}/>
                            <div className={'w3'}>70%</div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home;
