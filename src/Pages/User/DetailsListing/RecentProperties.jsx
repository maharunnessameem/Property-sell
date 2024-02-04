import React from 'react';
import { FaCalendarDays } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import img from "../../../assets/images/AddProperty/singleCard.png";

const RecentProperties = () => {
    return (
        <div className="w-[350px] h-[450px] lg:w-[404px] lg:h-[551px] border bg-white lg:mt-5 mt-4 lg:m-10 m-5">
            <div className="text-start px-10 mt-10">
                <p>Recent Properties</p>
                <div className="lg:mt-8 mt-6 flex">
                    <img
                        src={img}
                        className="w-[110px] h-[70px] lg:w-[120px] lg:h-[93px]"
                    />
                    <div className="px-5 text-start">
                        <p className="lg:text-[16px] text-[10px]">Modern Family Home</p>
                        <div className="text-start">
                            <div className="flex lg:mt-2 mt-1">
                                <div className="flex justify-center items-center gap-2">
                                    <p>
                                        <IoLocationSharp className="text-[#F53D4D] w-2 h-3   " />
                                    </p>
                                    <p className="text-[10px] text-[#777] ">58 Hullbrook Road,</p>
                                </div>
                            </div>
                            <div className="flex lg:mt-2 mt-1">
                                <div className="flex justify-center items-center gap-2">
                                    <p>
                                        <FaCalendarDays className="text-[#F53D4D] w-2 h-3   " />
                                    </p>
                                    <p className="text-[10px] text-[#777] ">Sep 18, 2023</p>
                                </div>
                            </div>
                            <div className="flex lg:mt-2 mt-1">
                                <div className="flex justify-center items-center gap-2">
                                    <p>
                                        <AiFillDollarCircle className="text-[#F53D4D] w-2 h-3   " />
                                    </p>
                                    <p className="text-[10px] text-[#F53D4D] ">$38399.08</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-10  mt-8 flex">
                    <img src={img} className="w-[120px] h-[93px]" />
                    <div className="px-5 text-start">
                        <p className="lg:text-[16px] text-[10px]">Modern Family Home</p>
                        <div className="text-start">
                            <div className="flex lg:mt-2 mt-1">
                                <div className="flex justify-center items-center gap-2">
                                    <p>
                                        <IoLocationSharp className="text-[#F53D4D] w-2 h-3   " />
                                    </p>
                                    <p className="text-[8px] text-[#777] ">58 Hullbrook Road,</p>
                                </div>
                            </div>
                            <div className="flex lg:mt-2 mt-1">
                                <div className="flex justify-center items-center gap-2">
                                    <p>
                                        <FaCalendarDays className="text-[#F53D4D] w-2 h-3" />
                                    </p>
                                    <p className="text-[8px] text-[#777] ">Sep 18, 2023</p>
                                </div>
                            </div>
                            <div className="flex lg:mt-2 mt-1">
                                <div className="flex justify-center items-center gap-2">
                                    <p>
                                        <AiFillDollarCircle className="text-[#F53D4D] w-2 h-3   " />
                                    </p>
                                    <p className="text-[8px] text-[#F53D4D] ">$38399.08</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex">
                    <img src={img} className="w-[120px] h-[93px]" />
                    <div className="px-5 text-start">
                        <p className="lg:text-[14px] text-[10px]">Modern Family Home</p>
                        <div className="text-start">
                            <div className="flex lg:mt-2 mt-1">
                                <div className="flex justify-center items-center gap-2">
                                    <p>
                                        <IoLocationSharp className="text-[#F53D4D] w-2 h-3" />
                                    </p>
                                    <p className="text-[8px] text-[#777] ">58 Hullbrook Road,</p>
                                </div>
                            </div>
                            <div className="flex lg:mt-2 mt-1">
                                <div className="flex justify-center items-center gap-2">
                                    <p>
                                        <FaCalendarDays className="text-[#F53D4D] w-2 h-3   " />
                                    </p>
                                    <p className="text-[8px] text-[#777]">Sep 18, 2023</p>
                                </div>
                            </div>
                            <div className="flex lg:mt-2 mt-1">
                                <div className="flex justify-center items-center gap-2">
                                    <p>
                                        <AiFillDollarCircle className="text-[#F53D4D] w-2 h-3   " />
                                    </p>
                                    <p className="text-[8px] text-[#F53D4D] ">$38399.08</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentProperties;