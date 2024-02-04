import React, { useState } from 'react';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Input } from '@material-tailwind/react';
import Slider from 'react-slick';

const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    return (
        <>
            <div className="w-[350px] lg:w-[405px] h-[600px] lg:h-[699px] border bg-white lg:m-10 m-4 cursor-pointer">
                <div className="mt-10 px-10">
                    <div className="w-full">
                        <Input label="Search Property" />
                    </div>
                    <div className="text-start mt-8">
                        <div className="flex gap-5 text-start lg:pr-10 cursor-pointer mb-5  ">
                            <div>
                                <select className="bg-white cursor-pointer border border-gray-600 text-gray-900 text-md rounded focus:ring-gray-100 focus:border-gray-200    lg:px-4 px-1 lg:py-3 py-1 ">
                                    <option selected>Bedroom</option>
                                    <option>Double Room</option>
                                    <option>Single Room</option>
                                    <option>Living Room</option>
                                    <option>Rest Room</option>
                                </select>
                            </div>
                            <div>
                                <select className="bg-white cursor-pointer border border-gray-600 text-gray-900 text-md rounded focus:ring-gray-100 focus:outline-none focus:border-gray-200   lg:px-4 px-1 lg:py-3 py-1">
                                    <option selected>Bedroom</option>
                                    <option>Double Room</option>
                                    <option>Single Room</option>
                                    <option>Living Room</option>
                                    <option>Rest Room</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex  gap-4 text-start  cursor-pointer mb-5 ">
                            <div>
                                <select className="bg-white cursor-pointer border border-gray-600 text-gray-900 text-md rounded focus:ring-gray-100 focus:border-gray-200  lg:px-4 px-1  lg:py-3 py-1 ">
                                    <option selected>Living Room</option>
                                    <option>Double Room</option>
                                    <option>Single Room</option>
                                    <option>Living Room</option>
                                    <option>Rest Room</option>
                                </select>
                            </div>
                            <div>
                                <select className="bg-white cursor-pointer border border-gray-600 text-gray-900 text-md rounded focus:ring-gray-100 focus:border-gray-200   lg:px-4 px-1 lg:py-3 py-1 ">
                                    <option selected>Living Room</option>
                                    <option>Double Room</option>
                                    <option>Single Room</option>
                                    <option>Living Room</option>
                                    <option>Rest Room</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex  gap-5 text-start lg:pr-10 cursor-pointer mb-5 ">
                            <div>
                                <select className="bg-white cursor-pointer border border-gray-600 text-gray-900 text-md rounded focus:ring-gray-100 focus:border-gray-200   lg:px-4 px-1 lg:py-3 py-1 ">
                                    <option selected>Bedroom</option>
                                    <option>Double Room</option>
                                    <option>Single Room</option>
                                    <option>Living Room</option>
                                    <option>Rest Room</option>
                                </select>
                            </div>
                            <div>
                                <select className="bg-white cursor-pointer border border-gray-600 text-gray-900 text-md rounded focus:ring-gray-100 focus:border-gray-200   lg:px-4 px-1 lg:py-3 py-1 ">
                                    <option selected>Living Room</option>
                                    <option>Double Room</option>
                                    <option>Single Room</option>
                                    <option>Living Room</option>
                                    <option>Rest Room</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* price range */}
                    <div>
                        <p className="mt-8">Area Range</p>
                        <div className="w-full mt-5  ">
                            <Slider defaultValue={50} className="text-[#FB8053]" />
                            <div className="flex justify-between mt-3">
                                <div className="border w-[63px] h-[20px]  bg-red-100 rounded   ">
                                    <p className="text-[#FB8053] text-[15px] text-center   ">
                                        $6780
                                    </p>
                                </div>

                                <div className="border w-[63px] h-[20px]  bg-red-100 rounded   ">
                                    <p className="text-[#FB8053] text-[15px]  text-center   ">
                                        $6780
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mt-3">Price Range</p>
                        <div className="w-full mt-2  ">
                            <Slider defaultValue={50} className="text-[#FB8053]" />
                            <div className="flex justify-between mt-3">
                                <div className="border w-[63px] h-[20px]  bg-red-100 rounded   ">
                                    <p className="text-[#FB8053] text-[15px] text-center   ">
                                        $6780
                                    </p>
                                </div>

                                <div className="border w-[63px] h-[20px]  bg-red-100 rounded   ">
                                    <p className="text-[#FB8053] text-[15px]  text-center   ">
                                        $6780
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-4 ">
                        <button
                            type="text"
                            className="text-sm border justify-center text-[#777] items-center  flex gap-8 rounded lg:px-2 lg:py-3  border-gray-400 hover:border-gray-500 text-start"
                        >
                            Min Price <IoIosArrowDown className="w-4 h-4" />
                        </button>
                        <p className="lg:mt-4 mt-2 text-[#777]">
                            <FaArrowRightArrowLeft />
                        </p>
                        <button
                            type="text"
                            className="border text-sm text-[#777]  justify-center items-center flex gap-8 rounded  lg:py-2 lg:px-2  border-gray-400 hover:border-gray-500"
                            placeholder="Bedroom"
                        >
                            Max price <IoIosArrowDown className="w-4 h-4  text-[#777]" />
                        </button>
                    </div>
                    <button className="border w-full py-2 mt-5 bg-[#FB8053] rounded-md text-white">
                        Search Property
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;