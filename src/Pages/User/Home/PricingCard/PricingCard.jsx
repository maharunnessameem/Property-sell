import React from 'react';
import UseMaxWidth from '../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import { AiOutlineCheck } from "react-icons/ai";
const priceData = [
    {
        title: " Weekly",
        price: "500",
        discountPrice: "490",
        description: "Weekly subscription plan",
    },
    {
        title: "Monthly",
        price: "500",
        discountPrice: "490",
        description: "Weekly subscription plan",
    },
    {
        title: "yearly",
        price: "500",
        discountPrice: "490",
        description: "Weekly subscription plan",
    },
];

const PricingCard = () => {
    return (
        <UseMaxWidth>
            <div className="mx-auto max-w-[1440px] p-2.5 lg:px-20 lg:py-20  flex-cols items-center  gap-20 cursor-pointer">
                <h1 className="text-3xl lg:text-5xl text-center py-14 font-normal gap-20">
                    Pricing <span className="text-[#FB8053]">Plans </span>
                </h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 shadow-sm p-2.5">
                    {priceData.map((item, index) => (
                        <div
                            key={index}
                            className="group rounded p-10 hover:bg-[#FB8053] group-hover:text-white flex-cols  items-start border transform transition duration-500 hover:scale-110 "
                        >
                            <h1 className="text-3xl font-normal gap-2 items-start flex-cols leading-8">
                                {item.title}
                            </h1>
                            <div className="px-10 py-8 items-start">
                                <p className="text-7xl font-semibold leading-10  items-start flex-cols ">
                                    ${item.discountPrice}
                                </p>
                                <p className="pt-2 pl-36 text-2xl text-gray-600 line-through">
                                    ${item.price}
                                </p>
                            </div>
                            <div className="px-20 py-2 bg-[#FB8053] justify-center items-center gap-2 border rounded-md group-hover:bg-white">
                                <button className="group-hover:text-[#FB8053] text-white ">
                                    Get Started
                                </button>
                            </div>

                            <hr className="w-[300px] h-[1px] mt-4"></hr>
                            <div className="py-8">
                                <div className="flex">
                                    <AiOutlineCheck className="m-1 p-1  w-5 h-5" />
                                    <p>{item.description}</p>
                                </div>
                                <div className="flex">
                                    <AiOutlineCheck className="m-1 p-1  w-5 h-5" />
                                    <p>{item.description}</p>
                                </div>
                                <div className="flex">
                                    <AiOutlineCheck className="m-1 p-1  w-5 h-5" />
                                    <p>{item.description}</p>
                                </div>
                                {/* <div className="flex">
                  <AiOutlineCheck className="m-1 p-1  w-5 h-5" />
                  <p>Property Allowed</p>
                </div>
                <div className="flex">
                  <AiOutlineCheck className="m-1 p-1  w-5 h-5" />
                  <p>Property Allowed</p>
                </div>
                <div className="flex">
                  <AiOutlineCheck className="m-1 p-1  w-5 h-5" />
                  <p>Property Allowed</p>
                </div> */}
                            </div>
                        </div>
                    ))}
                    {/*  */}
                </div>
                <div className="text-center">
                    <button className=" capitalize border justify-center items-center  rounded-md bg-[#FB8053] text-white font-semibold mt-5 w-[260px] h-[50px] hover:bg-white hover:text-[#FB8053] ring-1 ring-[#FB8053] ring-inset ">
                        View More
                    </button>
                </div>
            </div>
        </UseMaxWidth>
    );
};

export default PricingCard;