import React from 'react';
import CountUp from 'react-countup';

const Counter = ({ number, title }) => {
    return (
        <div>
            <h3 className='text-3xl font-semibold'>
                $
                <CountUp duration={10} className="counter" end={number} />
            </h3>
            <p className='text-normal'>{title}</p>
        </div>
    );
};

export default Counter;