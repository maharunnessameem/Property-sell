import React from 'react';
import { FaFile, FaHome, FaKey, FaMeetup } from "react-icons/fa";
import UseMaxWidth from '../../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import { Fade } from 'react-swift-reveal';

const FindProperty = () => {
    return (
        <UseMaxWidth>
            <div className="lg:w-max-[1308px]  mt-12 sm:mx-20 mx-10 lg:mx-0  lg:px-20  lg:mb-10 ">
                <Fade left duration={500}>
                    <h2 className="w-[367px] h-[96px] text-[#000] text-3xl cursor-pointer">
                        How It works?
                        <br />
                        Find a perfect <span className="text-[#FB8053]">Property</span>
                    </h2>
                </Fade>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 cursor-pointer">
                    <Fade top duration={1000}>
                        <div className="flex">
                            <div>
                                <div className="lg:my-8">
                                    <FaHome className="text-[#fb7e51] w-[40px] h-[40px]"></FaHome>
                                </div>
                                <div>
                                    <h3 className="w-max-[243px] h-[48px] text-3xl text-[#000] ">
                                        Find Real State
                                    </h3>
                                    <p className="w-max-[273px] h-[72px] text-sm font-light text-[#777777]">
                                        Sumo petentium ut per, at his wisim utinam adipiscing. Est ei
                                        graeco quod suavitate vix.
                                    </p>
                                </div>
                            </div>
                            <div className="border-r-2 border-[#FB8053] w-[1px] h-[50px] mt-16 opacity-50 hidden md:block md:mr-4"></div>
                        </div>
                    </Fade>
                    <Fade top duration={1500}>
                        <div className="flex">
                            <div>
                                <div className="lg:my-8">
                                    <FaMeetup className="text-[#FB8053] w-[40px] h-[40px]"></FaMeetup>
                                </div>
                                <div>
                                    <h3 className="w-max-[243px] h-[48px] text-3xl text-[#000]">
                                        Meet Relator
                                    </h3>
                                    <p className="w-max-[273px] h-[72px] text-sm font-light text-[#777777]">
                                        Sumo petentium ut per, at his wisim utinam adipiscing. Est ei
                                        graeco quod suavitate vix.
                                    </p>
                                </div>
                            </div>
                            <div className="border-r-2 border-[#FB8053] w-[1px] h-[50px] mt-16 opacity-50 hidden lg:block lg:mr-4"></div>
                        </div>
                    </Fade>
                    <Fade top duration={2500}>
                        <div className="flex">
                            <div>
                                <div className="lg:my-8">
                                    <FaFile className="text-[#FB8053] w-[40px] h-[40px]"></FaFile>
                                </div>
                                <div>
                                    <h3 className="w-max-[243px] h-[48px] text-3xl text-[#000] ">
                                        Documents
                                    </h3>
                                    <p className="w-max-[273px] h-[72px] text-sm font-light text-[#777777]">
                                        Sumo petentium ut per, at his wisim utinam adipiscing. Est ei
                                        graeco quod suavitate vix.
                                    </p>
                                </div>
                            </div>
                            <div className="border-r-2 border-[#FB8053] w-[1px] h-[50px] mt-16 opacity-50 hidden md:block md:mr-4"></div>
                        </div>
                    </Fade>
                    <Fade top duration={3500}>
                        <div className="flex">
                            <div>
                                <div className="lg:my-8">
                                    <FaKey className="text-[#FB8053] w-[40px] h-[40px]"></FaKey>
                                </div>
                                <div>
                                    <h3 className="w-max-[243px] h-[48px] text-3xl text-[#000]">
                                        Take the keys
                                    </h3>
                                    <p className="w-max-[273px] h-[72px] text-sm font-light text-[#777777]">
                                        Sumo petentium ut per, at his wisim utinam adipiscing. Est ei
                                        graeco quod suavitate vix.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </UseMaxWidth>
    );
};

export default FindProperty;