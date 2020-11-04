import React from 'react';

const Bar = ({ skill, percent, fillClass, percentClass }) => {
    return (
        <div className={'bar'}>
            <div className={'bar-skill'}><p>{skill}</p></div>
            <div className={`bar-fill ${fillClass}`}/>
            <div className={percentClass}>{percent}</div>
        </div>
    )
}

export default Bar
