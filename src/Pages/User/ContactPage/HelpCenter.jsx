import React from 'react';
import { PiCircleThin } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import banner from "../../../assets/images/DetailsListing/banner.png";

const HelpCenter = () => {
    return (
        <>
            <div className="w-[400px] lg:w-[1400px] h-[200px] lg:h-[249px] mt-16 lg:mt-10 relative bg-[#53389E] opacity-90">
                <div>
                    <img
                        src={banner}
                        className="w-[400px]   lg:w-[1440px] h-[200px]  lg:h-[234px] opacity-10"
                    />
                </div>
                <div className="absolute right-3 lg:right-96 top-4 lg:top-14">
                    <p className="border m-1 px-3 py-1 lg:px-20 lg:py-2  text-[15px] lg:text-[20px] uppercase text-[#53389E] bg-white font-medium rounded-md">
                        Get IN TOUCH
                    </p>
                </div>
                <div className="flex justify-between">
                    <div className="absolute left-4 lg:left-24  top-5 lg:top-10">
                        <p className="text-white  text-lg">Helping Center</p>
                        <div className="relative flex justify-center  items-center ">
                            <p className="mt-5">
                                <PiCircleThin className="w-14 h-14 text-[#FB8053]" />
                                <ImLocation className="absolute top-10 left-5 text-[#FB8053] " />
                            </p>
                            <div className="mt-2">
                                <p className="text-white px-2">Address</p>
                                <p className="text-white px-2 text-sm">
                                    58 Hullbrook Road, Billesley,
                                </p>
                            </div>
                        </div>
                        <div className="relative flex justify-center items-center  ">
                            <p className="mt-5 absolute left-0">
                                <FaPhone className="absolute top-5 left-5 text-[#FB8053] " />
                                <PiCircleThin className="w-14 h-14 text-[#FB8053]" />
                            </p>
                            <div className="mt-10">
                                <p className="text-white absolute left-16 top-3 ">Phone</p>
                                <p className="text-white text-s absolute left-16 top-8">
                                    +109987654
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HelpCenter;