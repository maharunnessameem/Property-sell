import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from "react-icons/io5";
import UseMaxWidth from '../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import display from "../../../assets/images/About/display1.png"

const HelpCenter = () => {
    return (
        <div
            className='lg:w-[1440px] lg:h-[249px] sm:h-[350px] h-[500px]'
        >
            <div>
                <img className='lg:w-[1440px] lg:h-[249px] sm:h-[350px] h-[500px]' src={display} alt="" srcset="" />
            </div>
            <div className='lg:w-[1440px] lg:h-[249px] sm:h-[350px] h-[500px] bg-[#53389EED] relative lg:bottom-[249px] sm:bottom-[350px] bottom-[500px]'>

            </div>
            <UseMaxWidth>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2  relative lg:bottom-[470px] sm:bottom-[670px] bottom-[980px] text-[#FFF] lg:mx-[80px] mx-[38px]'>
                    <div className='lg:mb-0 mb-4'>
                        <h3 className='text-xl font-semibold lg:mt-4'>Helping Center</h3>
                        <div className='flex gap-6 my-4'>
                            <div className='w-[36px] h-[36px] border border-[#fb8053] rounded-full flex justify-center items-center mt-2'>
                                <FaLocationDot className='text-[#fb8053]' />
                            </div>
                            <div>
                                <h4 className='text-sm font-semibold'>Address</h4>
                                <p className='text-sm font-light mt-2'>58 Hullbrook Road, Billesley,</p>
                            </div>
                        </div>
                        <div className='flex gap-6 mt-6'>
                            <div className='w-[36px] h-[36px] border border-[#fb8053] rounded-full flex justify-center items-center mt-2'>
                                <IoCall className='text-[#fb8053]' />
                            </div>
                            <div>
                                <h4 className='text-sm font-semibold'>Phone</h4>
                                <p className='text-sm font-light mt-2'>+9983837930-393</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold my-4'>Sign to Newsletter</h3>
                        <p className='text-sm'>Save your time and easily rent or sell your property <br /> with the lowest commission on the real estate market.</p>
                        <div className="flex mt-[35px]">
                            <input
                                className="lg:w-[266px] w-[150px] lg:max-h-[64px] border-[rgb(202,201,201)] border  text-sm text-[#000] pl-4"
                                type="email"
                                name=""
                                id=""
                                placeholder=" Your Email"
                            />
                            <button className="max-w-[124px] max-h-[76px] bg-[#FB8053] rounded-md text-white text-base font-bold px-4 py-3 cursor-pointer">
                                SEND
                            </button>
                        </div>
                    </div>





                    <div className=' lg:mt-[70px] mt-10 flex justify-end mr-20'>
                        <div className='w-[297px] h-[66px] bg-white flex justify-center items-center rounded'>
                            <button className='text-xl font-semibold text-[#53389E]'>GET IN TOUCH</button>
                        </div>
                    </div>
                </div>

            </UseMaxWidth>
        </div>
    );
};

export default HelpCenter;