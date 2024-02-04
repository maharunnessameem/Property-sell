import React, { useState } from 'react';
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdWindow } from "react-icons/md";
import GridCard from './GridCard';
import GridProfile from './GridProfile';

const CardList = () => {
    const [toggle, setToggle] = useState(1);
    const handleClick = (id) => {
        setToggle(id);
    };
    return (
        <>
            <div className="mt-5">
                <div className="w-[365px] lg:w-[820px] h-[60px] lg:h-[74px] bg-white border lg:mt-10 mt-4 m-2">
                    <div className="flex text-center justify-between">
                        <div className="flex">
                            <p className="w-[50px] lg:w-[80px] h-[55px] lg:h-[72px] border bg-[#FB8053] text-white">
                                <IoGrid className="lg:m-6 m-3  w-6 h-6" />
                            </p>
                            <p className="text-[#FB8053] lg:m-6 m-4 lg:text-[16px] text-[10px]">
                                Properties Grid
                            </p>
                        </div>
                        <div className="flex gap-2  justify-center items-center cursor-pointer">
                            <select className="focus:ring-red-300 focus:outline-none    focus:border-red-200  px-2 lg:px-3 justify-center items-center gap-2 w-[120px] h-[40px] lg:w-[150px] lg:h-[50px] flex  bg-[#FB8053] text-white">
                                <option selected className="bg-[#FB8053]">
                                    New to old
                                </option>
                                <option>Old to New</option>
                            </select>
                            {/* <button className="border justify-center items-center gap-2 w-[150px] h-[50px]  flex  bg-[#FB8053] text-white">
                  New to old <IoIosArrowDown className="w-4 h-4" />
                </button> */}

                            <div
                                onClick={() => handleClick(1)}
                                className="w-[42px] h-[42px] border border-[#FB8053]  bg-[#FB8053] relative z-10 left-0 top-0 right-0   hover:bg-white hover:text-[#FB8053] text-white"
                            >
                                <MdWindow className="items-center justify-center mt-3 ml-2 w-5 h-5" />
                            </div>
                            <div
                                onClick={() => handleClick(2)}
                                className="w-[42px] h-[42px]  border border-[#FB8053] relative z-10 left-0 top-0 right-0 hover:text-white hover:bg-[#FB8053] text-[#FB8053] m-2"
                            >
                                <FaListUl className="items-center justify-center mt-3 ml-2 w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[840px] w-[350px]">
                    <div className={toggle === 1 ? "block" : "hidden"}>
                        <GridCard />
                    </div>
                    <div className={toggle === 2 ? "block" : "hidden"}>
                        <GridProfile />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardList;