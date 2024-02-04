import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { MdDining } from "react-icons/md";
import { LuArrowRightLeft } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import { PiImagesSquareThin } from "react-icons/pi";
import { IoBedSharp } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";
import card from "../../../assets/images/GridCard/gridImage.png";
import profile from "../../../assets/images/PropertyList/profile.png";


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

const GridProfile = () => {
    return (
        <>
            <div className="border-solid  cursor-pointer justify-center items-center grid sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-5 lg:p-3 lg:m-2 m-5">
                {gridData.map((item, index) => (
                    <div className="w-[385px] lg:w-[820px] h-[200px] lg:h-[265px] rounded border bg-white lg:mt-2  ">
                        <div className="sm:flex flex ">
                            <div className="relative  ">
                                <img
                                    src={card}
                                    className="w-[150px] lg:w-[399px] h-[200px] lg:h-full"
                                />

                            </div>
                            <div className="px-4 mt-5">
                                <p className="text-[11px] lg:text-[20px] uppercase text-[#FB8053]">
                                    Beautful Single Home
                                </p>
                                <div className="flex lg:mt-5 mt-2 ">
                                    <div className="flex justify-center items-center lg:gap-2 gap-1">
                                        <p>
                                            <IoLocationSharp className="text-[#F53D4D] w-4 h-4 lg:w-5 g:h-6" />
                                        </p>
                                        <p className="text-[#777] lg:text-sm text-[9px]">
                                            {item.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex lg:mt-5 mt-2 lg:justify-between  lg:gap-4 gap-1">
                                    <div className="flex justify-center items-center">
                                        <div className="flex justify-center items-center gap-2">
                                            <p>
                                                <PiImagesSquareThin className="text-[#F53D4D] w-4 h-4 lg:w-5 g:h-6" />
                                            </p>
                                            <p className="text-[#777] lg:text-sm text-[7px]">
                                                {item.square}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center  ">
                                        <div className=" flex justify-center items-center gap-3">
                                            <p>
                                                <IoBedSharp className="text-[#F53D4D] w-4 h-4 lg:w-5 g:h-6" />
                                            </p>
                                            <p className="text-[#777] lg:text-sm text-[7px]">
                                                {item.bed}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center  ">
                                        <div className=" flex justify-center items-center gap-2">
                                            <p>
                                                <FaKitchenSet className="text-[#F53D4D] w-4 h-4 lg:w-5 g:h-6" />
                                            </p>
                                            <p className="text-[#777] lg:text-sm text-[7px]">
                                                {item.kitchen}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex lg:mt-5 mt-2  lg:justify-between  lg:gap-4 gap-1">
                                    <div className="flex justify-center items-center">
                                        <div className="flex justify-center items-center gap-2">
                                            <p>
                                                <PiImagesSquareThin className="text-[#F53D4D] w-4 h-4 lg:w-5 g:h-6" />
                                            </p>
                                            <p className="text-[#777] lg:text-sm text-[7px]">
                                                {item.square}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center  ">
                                        <div className=" flex justify-center items-center gap-3">
                                            <p>
                                                <IoBedSharp className="text-[#F53D4D] w-4 h-4 lg:w-5 g:h-6" />
                                            </p>
                                            <p className="text-[#777] lg:text-sm text-[7px]">
                                                {item.bed}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center  ">
                                        <div className=" flex justify-center items-center gap-2">
                                            <p>
                                                <FaKitchenSet className="text-[#F53D4D] w-4 h-4 lg:w-5 g:h-6" />
                                            </p>
                                            <p className="text-[#777] lg:text-sm text-[7px]">
                                                {item.kitchen}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="w-[180px] lg:w-[335px] h-[0.3px] mt-5 " />

                                <div className="flex lg:mt-3 mt-2  justify-between text-star  ">
                                    <div className="flex gap-2  justify-center items-center">
                                        <div>
                                            <img
                                                src={profile}
                                                className=" w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
                                            />
                                        </div>
                                        <div>
                                            <p className="lg:text-[12px] text-[7px]">
                                                {item.profileName}
                                            </p>
                                            <p className="lg:text-[12px] text-[10px]  text-[#FB8053]">
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex  justify-center items-center gap-2">
                                        <p>
                                            <FaRegCalendarAlt className="w-4 h-4 lg:w-6 lg:h-6 text-[#777]" />
                                        </p>
                                        <p className="text-[#777] lg:text-[10px] text-[7px]">
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GridProfile;