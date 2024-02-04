import React from 'react';
import { FaHome, FaUser, FaUsers } from 'react-icons/fa';
import { FaHandHoldingUsd } from "react-icons/fa";
import UseMaxWidth from '../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import mission from "../../../assets/images/About/aboutMission.png";

const AboutMission = () => {
    return (
        <UseMaxWidth>
            <div className='grid sm:grid-cols-2 lg:gap-0 lg:mx-[100px] mx-8 lg:h-[500px] lg:mb-0 mb-8'>
                <div className='h-[300px] lg:mt-0 sm:mt-40'>
                    <div className='w-[129px] h-[61px] bg-[#FB8053] lg:ml-[376.5px] ml-[178px]'></div>
                    <div className='w-[162px] h-[174px] bg-[#FB8053] lg:mt-[175px] mt-[30px]'></div>
                    <img className='lg:w-[500px] w-[300px] lg:h-[403px] relative lg:bottom-[404px] bottom-[259px] left-[3.5px]' src={mission} />

                </div>
                <div>
                    <h2 className='text-3xl font-semibold mb-8'>
                        Mission
                    </h2>
                    <p className='text-sm font-normal  mb-8'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-10'>
                        <div className='flex gap-2'>
                            <div className="border border-[#FB8053] rounded-full  flex justify-center items-center w-[36px] h-[36px] mt-2">
                                <FaHome size={16} color="#FB8053" />

                            </div>
                            <div>
                                <p className='text-sm text-[#777]'>Customer to Date</p>
                                <p className='text-lg font-semibold'>879,90</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className="border border-[#FB8053] rounded-full  flex justify-center items-center w-[36px] h-[36px] mt-2">
                                <FaUser size={16} color="#FB8053" />

                            </div>
                            <div>
                                <p className='text-sm text-[#777]'>Customer to Date</p>
                                <p className='text-lg font-semibold'>879,90</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className="border border-[#FB8053] rounded-full  flex justify-center items-center w-[36px] h-[36px] mt-2">
                                <FaHandHoldingUsd size={16} color="#FB8053" />

                            </div>
                            <div>
                                <p className='text-sm text-[#777]'>Customer to Date</p>
                                <p className='text-lg font-semibold'>879,90</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-[165px] h-[48px] bg-[#FB8053] mt-10 rounded flex justify-center'>
                            <button className='text-[#FFF] text-xl font-normal'>
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </UseMaxWidth>
    );
};

export default AboutMission;