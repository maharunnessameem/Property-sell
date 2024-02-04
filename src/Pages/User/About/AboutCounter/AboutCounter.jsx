import React from 'react';
import Counter from './Counter';
import UseMaxWidth from '../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import display from "../../../../assets/images/About/display.png"

const AboutCounter = () => {
    return (
        <div
            className='lg:w-[1440px] sm:h-[234px] h-[500px] mb-20'
        >
            <div>
                <img className='sm:h-[200px] h-[500px] ' src={display} alt="" srcset="" />
            </div>
            <div className='lg:w-[1440px] sm:h-[200px] h-[500px] bg-[#53389EED] opacity-[3.5] relative sm:bottom-[200px] bottom-[500px]'>

            </div>
            <UseMaxWidth>


                <div className='grid sm:grid-cols-4 lg:gap-0 sm:gap-5 gap-10 relative sm:bottom-[320px] bottom-[920px] text-[#FFF] mx-[100px] sm:h-[200px] h-[400px]'>

                    <Counter number={67690} title="Median sold price" />

                    <Counter number={57690} title="Median sold price" />

                    <Counter number={47690} title="Median sold price" />

                    <Counter number={37690} title="Median sold price" />


                </div>
            </UseMaxWidth>
        </div>
    );
};

export default AboutCounter;