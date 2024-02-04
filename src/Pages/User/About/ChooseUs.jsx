import React from 'react';
import { FaRunning } from 'react-icons/fa';

import { FaHandsHoldingCircle, FaSackDollar } from "react-icons/fa6";

const ChooseUs = () => {
    return (
        <div className='mb-[62px] mx-[74px]'>
            <div className="  text-center">
                <h1 className="text-4xl font-semibold mb-[22px]">Why Choose Us</h1>

                <p className=" lg:h-[36px] text-center">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of <br /> classical Latin literature from 45 BC</p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-0 sm:gap-10 text-center my-10'>
                <div className='flex'>
                    <div className='lg:w-[350px] lg:h-[272px] hover:shadow hover:bg-green-50 rounded pt-2'>
                        <div className='flex justify-center items-center mb-4'>
                            <div className='w-[100px] h-[100px] bg-[#FB805326] rounded-full flex justify-center items-center '>
                                <FaRunning className='text-[#fb8053] w-[40px] h-[40px]' />
                            </div>
                        </div>
                        <h4 className='text-lg font-semibold my-6'>Trusted By Thousands</h4>
                        <p className='text-sm'>Aliquam dictum elit vitae mauris <br /> facilisis at dictum urna dignissim <br /> donec vel lectus vel felis.</p>
                    </div>
                    <div className=' lg:block hidden w-[1px] h-[41px] bg-[#F2994A80] ml-6  mt-[130px]'></div>
                </div>
                <div className='flex'>
                    <div className='lg:w-[350px] lg:h-[272px] hover:shadow hover:bg-green-50 rounded pt-2'>
                        <div className='flex justify-center items-center mb-4'>
                            <div className='w-[100px] h-[100px] bg-[#FB805326] rounded-full flex justify-center items-center '>
                                <FaHandsHoldingCircle className='text-[#fb8053] w-[40px] h-[40px]' />
                            </div>
                        </div>
                        <h4 className='text-lg font-semibold my-6'>Wide Renge Of Properties</h4>
                        <p className='text-sm'>Aliquam dictum elit vitae mauris <br /> facilisis at dictum urna dignissim <br /> donec vel lectus vel felis.</p>
                    </div>
                    <div className='lg:block hidden w-[1px] h-[41px] bg-[#F2994A80] ml-6 mt-[130px]'></div>
                </div>
                <div className='lg:w-[350px] lg:h-[272px] hover:shadow hover:bg-green-50 rounded pt-2'>
                    <div className='flex justify-center items-center mb-4'>
                        <div className='w-[100px] h-[100px] bg-[#FB805326] rounded-full flex justify-center items-center '>
                            <FaSackDollar className='text-[#fb8053] w-[40px] h-[40px]' />
                        </div>
                    </div>
                    <h4 className='text-lg font-semibold my-6'>Trusted By Thousands</h4>
                    <p className='text-sm'>Aliquam dictum elit vitae mauris <br /> facilisis at dictum urna dignissim <br /> donec vel lectus vel felis.</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;