import React, { useEffect, useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { LuBedDouble } from "react-icons/lu";
import { BiBath } from "react-icons/bi";
import { TbSquareRotated } from "react-icons/tb";
import { GiCursedStar } from "react-icons/gi";
import UseMaxWidth from '../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import { Fade, Slide } from 'react-swift-reveal';
import img from "../../../../assets/images/PropertiesCard/Card1.jpg";

const Listing = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setData(data.slice(0, 6)));
    }, []);
    return (
        <div className="lg:px-20 ">
            <UseMaxWidth>
                <Fade left>
                    <div>
                        <h1 className="lg:mt-5 text-2xl leading-9 capitalize  px-16 lg:px-3">
                            Our choice of
                        </h1>
                        <p className="text-2xl  lg:px-3 px-10   leading-9 text-[#FB8053] capitalize">
                            popular
                            <span className="text-black capitalize "> Real estate</span>
                        </p>
                    </div>
                </Fade>
            </UseMaxWidth>
            <UseMaxWidth>
                <div className="mt-8 gap-8 p-2.5">
                    <h1 className="text-2xl lg:text-3xl text-center lg:py-2 mb-8">
                        Most Viewed Properties
                    </h1>
                    {/* card show */}
                    <Slide top duration={4000} delay={0} count={1}>
                        <div className="border-solid  cursor-pointer justify-center items-center grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10  p-0">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden gap-10 rounded-md shadow-md justify-center flex-start  content-start self-stretch flex-wrap transform transition duration-500 "
                                >
                                    <div className="relative group">
                                        <div>
                                            <img
                                                src={img}
                                                alt=""
                                                className="max-h-[200px] group-hover:scale-[1.2] transition duration-[.5s] w-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute left-6 top-6 text-white">
                                            <div className="inline-flex items-center px-5  py-2 gap-1 rounded-lg border bg-[#FB8053]">
                                                <GiCursedStar className="w-4 h-4 justify-center items-center" />
                                                <p className="text-sm font-normal">{item.frame}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-8 px-6 flex-col relative">
                                        <h1 className="text-start m-2 font-medium leading-8 text-2xl  not-italic">
                                            {item.name}
                                        </h1>

                                        <div className="flex gap-6 items-start self-stretch text-grey-800 opacity-70 text-sm font-normal leading-6">
                                            <div className="flex flex-start justify-center items-center gap-2">
                                                <LuBedDouble className="text-[#FB8053] w-5 h-5 justify-center items-center" />
                                                <p className="justify-center items-center">
                                                    {item.bed}Beds
                                                </p>
                                            </div>
                                            <div className="flex flex-start justify-center items-center gap-2">
                                                <BiBath className="text-[#FB8053] w-5 h-5 justify-center items-center" />
                                                <p className="justify-center items-center">
                                                    {item.bathroom}Bathroom
                                                </p>
                                            </div>
                                            <div className="flex  flex-start justify-center items-center gap-2">
                                                <TbSquareRotated className="text-[#FB8053] w-5 h-5 justify-center items-center" />
                                                <p className="justify-center items-center">
                                                    {item.area}
                                                </p>
                                            </div>
                                        </div>
                                        <hr className="mt-2" />
                                        <div className="pt-4 pb-8 text-grey-800 opacity-70">
                                            <p className="flex-start flex items-center gap-1 text-sm font-normal leading-6 tracking-wide">
                                                <CiLocationOn className="flex  text-[#FB8053] w-6 h-6" />
                                                {item.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slide>
                </div>
            </UseMaxWidth>

            <div className="text-center">
                <button className="text-center justify-center items-center  border rounded-md bg-[#FB8053] text-white font-semibold mt-5 w-[260px] h-[50px] hover:bg-white hover:text-[#FB8053] ring-2 ring-[#FB8053] ring-inset">
                    Browse More Property
                </button>
            </div>
        </div>
    );
};

export default Listing;