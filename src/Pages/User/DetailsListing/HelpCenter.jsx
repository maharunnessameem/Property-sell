import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const HelpCenter = () => {
    return (
        <div className="w-[350px] lg:w-[404px] h-[199px] lg:h-[201px] lg:mt-5  mt-4 lg:m-10 m-5 bg-[#FB8053] border">
            <div className="text-start mt-5 px-10">
                <div className="px-10 mt-5 flex justify-between ">
                    <p className=" text-white text-[16px]">Helping Center</p>
                    <p className="text-white text-[8px]">24/ 7</p>
                </div>
                <div className="mt-3 px-10">
                    <div className="relative">
                        <div className="flex gap-2">
                            <p>
                                <IoLocationSharp className="text-[#F53D4D] w-10 h-16" />
                            </p>
                            <p className="text-white mt-3 text-[14px] ">Address</p>
                        </div>
                        <div className="absolute top-8 left-12">
                            <p className="text-[10px] text-white">
                                58 Hullbrook Road, Billesley,
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" px-12">
                    <div className="relative">
                        <div className="flex gap-3">
                            <p>
                                <FaPhoneAlt className="text-[#F53D4D] w-8 h-14" />
                            </p>
                            <p className="text-white mt-3 text-[14px] ">Phone</p>
                        </div>
                        <div className="absolute top-8 left-11">
                            <p className="text-[10px] text-white">+9983837930-393</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;