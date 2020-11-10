import React from 'react';

const Bar = ({ skill, percent, fillClass, percentClass }) => {
    return (
        <div className={'bar'}>
            <div className={`bar-skill ${fillClass}`}><p>{skill}</p></div>
            <div className={percentClass}>{percent}</div>
        </div>
    )
}

export default Bar
