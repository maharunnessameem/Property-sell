import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import card from "../../../assets/images/GridCard/gridImage.png";
import profile from "../../../assets/images/PropertyList/profile.png";

import { LuArrowRightLeft } from "react-icons/lu";
import { MdOutlineFavorite } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiImagesSquareThin } from "react-icons/pi";
import { IoBedSharp } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";



const gridData = [
    {
        img: "../../../../public/assets/GridCard/gridImage.png",
        name: "Beautiful Single Home",
        location: "58 Hullbrook Road, Billesley,",
        square: "5740 square ft",
        bed: "4 bed",
        kitchen: "5 Kitchen",
        profile: "../../../../public/assets/PropertyList/profile.png",
        profileName: "Solayman Muhammad",
        title: "Buyer",
        date: "5 Days Ago",
    },
    {
        img: "../../../../public/assets/GridCard/gridImage.png",
        name: "Beautiful Single Home",
        location: "58 Hullbrook Road, Billesley,",
        square: "5740 square ft",
        bed: "4 bed",
        kitchen: "5 Kitchen",
        profile: "../../../../public/assets/PropertyList/profile.png",
        profileName: "Solayman Muhammad",
        title: "Buyer",
        date: "5 Days Ago",
    },
    {
        img: "../../../../public/assets/GridCard/gridImage.png",
        name: "Beautiful Single Home",
        location: "58 Hullbrook Road, Billesley,",
        square: "5740 square ft",
        bed: "4 bed",
        kitchen: "5 Kitchen",
        profile: "../../../../public/assets/PropertyList/profile.png",
        profileName: "Solayman Muhammad",
        title: "Buyer",
        date: "5 Days Ago",
    },
    {
        img: "../../../../public/assets/GridCard/gridImage.png",
        name: "Beautiful Single Home",
        location: "58 Hullbrook Road, Billesley,",
        square: "5740 square ft",
        bed: "4 bed",
        kitchen: "5 Kitchen",
        profile: "../../../../public/assets/PropertyList/profile.png",
        profileName: "Solayman Muhammad",
        title: "Buyer",
        date: "5 Days Ago",
    },
    {
        img: "../../../../public/assets/GridCard/gridImage.png",
        name: "Beautiful Single Home",
        location: "58 Hullbrook Road, Billesley,",
        square: "5740 square ft",
        bed: "4 bed",
        kitchen: "5 Kitchen",
        profile: "../../../../public/assets/PropertyList/profile.png",
        profileName: "Solayman Muhammad",
        title: "Buyer",
        date: "5 Days Ago",
    },
    {
        img: "../../../../public/assets/GridCard/gridImage.png",
        name: "Beautiful Single Home",
        location: "58 Hullbrook Road, Billesley,",
        square: "5740 square ft",
        bed: "4 bed",
        kitchen: "5 Kitchen",
        profile: "../../../../public/assets/PropertyList/profile.png",
        profileName: "Solayman Muhammad",
        title: "Buyer",
        date: "5 Days Ago",
    },
    {
        img: "../../../../public/assets/GridCard/gridImage.png",
        name: "Beautiful Single Home",
        location: "58 Hullbrook Road, Billesley,",
        square: "5740 square ft",
        bed: "4 bed",
        kitchen: "5 Kitchen",
        profile: "../../../../public/assets/PropertyList/profile.png",
        profileName: "Solayman Muhammad",
        title: "Buyer",
        date: "5 Days Ago",
    },
    {
        img: "../../../../public/assets/GridCard/gridImage.png",
        name: "Beautiful Single Home",
        location: "58 Hullbrook Road, Billesley,",
        square: "5740 square ft",
        bed: "4 bed",
        kitchen: "5 Kitchen",
        profile: "../../../../public/assets/PropertyList/profile.png",
        profileName: "Solayman Muhammad",
        title: "Buyer",
        date: "5 Days Ago",
    },
];

const GridCard = () => {
    return (
        <>
            <div className="border-solid  cursor-pointer justify-center items-center grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5  lg:p-0 lg:m-2">
                {gridData.map((item, index) => (
                    <div
                        key={index}
                        className="w-[390px] h-[558px] rounded border bg-white mt-2"
                    >
                        <div className="relative">
                            <div>
                                <img src={card} className="" />
                            </div>
                            <div className="text-white  flex justify-between">
                                <div className=" absolute left-6 top-6 items-center px-5  py-2 gap-1 rounded-lg border bg-[#FB8053]">
                                    <p className="text-sm font-normal">FEATURE</p>
                                </div>
                                <div className=" absolute right-6 top-6 items-center px-5  py-2 gap-1 rounded-lg border bg-[#000000] opacity-60">
                                    <p className="text-sm font-normal text-white">FOR RENT</p>
                                </div>
                                <div className=" absolute left-6 bottom-6 items-center  flex ">
                                    <p className="text-[20px] font-normal text-white">
                                        $8784,004/
                                    </p>
                                    <p className="text-[15px] font-normal text-white">mo</p>
                                </div>
                                <div className="absolute right-6 bottom-6 flex gap-2 ">
                                    <p className="border px-2 py-2 text-white bg-black opacity-50  rounded">
                                        <LuArrowRightLeft className="w-5 h-5" />
                                    </p>
                                    <p className="border px-2 py-2 text-white bg-[#FB8053] rounded">
                                        <MdOutlineFavorite className="w-5 h-5" />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-start mt-3 px-10">
                            <div>
                                <p className="text-[20px] uppercase text-[#FB8053]">
                                    {item.name}
                                </p>
                            </div>
                            <div className="flex  mt-5 ">
                                <div className=" flex justify-center items-center gap-2">
                                    <p>
                                        <IoLocationSharp className="text-[#F53D4D] w-5 h-6" />
                                    </p>
                                    <p className="text-[#777] text-sm">{item.location}</p>
                                </div>
                            </div>
                            <div className=" flex mt-5 justify-between ">
                                <div className="flex  ">
                                    <div className=" flex justify-center items-center gap-2">
                                        <p>
                                            <PiImagesSquareThin className="text-[#F53D4D] w-5 h-5" />
                                        </p>
                                        <p className="text-[#777] text-sm">{item.square}</p>
                                    </div>
                                </div>
                                <div className="flex  ">
                                    <div className=" flex justify-center items-center gap-2">
                                        <p>
                                            <IoBedSharp className="text-[#F53D4D] w-5 h-5" />
                                        </p>
                                        <p className="text-[#777] text-sm">{item.bed}</p>
                                    </div>
                                </div>
                                <div className="flex  ">
                                    <div className=" flex justify-center items-center gap-2">
                                        <p>
                                            <FaKitchenSet className="text-[#F53D4D] w-5 h-5" />
                                        </p>
                                        <p className="text-[#777] text-sm">{item.kitchen}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex mt-5 justify-between ">
                                <div className="flex  ">
                                    <div className=" flex justify-center items-center gap-2">
                                        <p>
                                            <PiImagesSquareThin className="text-[#F53D4D] w-5 h-5" />
                                        </p>
                                        <p className="text-[#777] text-sm">{item.square}</p>
                                    </div>
                                </div>
                                <div className="flex  ">
                                    <div className=" flex justify-center items-center gap-2">
                                        <p>
                                            <IoBedSharp className="text-[#F53D4D] w-5 h-5" />
                                        </p>
                                        <p className="text-[#777] text-sm">{item.bed}</p>
                                    </div>
                                </div>
                                <div className="flex  ">
                                    <div className=" flex justify-center items-center gap-2">
                                        <p>
                                            <FaKitchenSet className="text-[#F53D4D] w-5 h-5" />
                                        </p>
                                        <p className="text-[#777] text-sm">{item.kitchen}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <hr className=" w-[335px] ml-10 h-[0.3px] mt-10" />

                        <div className="flex px-10 mt-5 justify-between  ">
                            <div className="flex gap-2 justify-center items-center">
                                <div>
                                    <img src={profile} className="w-[45px] h-[45px]" />
                                </div>
                                <div>
                                    <p className="text-[12px]">{item.profileName}</p>
                                    <p className="text-[12px]  text-[#FB8053]">{item.title}</p>
                                </div>
                            </div>
                            <div className="flex  justify-center items-center gap-2">
                                <p>
                                    <FaRegCalendarAlt className="w-6 h-6 text-[#777]" />
                                </p>
                                <p className="text-[#777] text-[10px]">{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GridCard;