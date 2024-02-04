import React from 'react';
import banner from "../../../assets/images/DetailsListing/banner.png";

const NewsLetter = () => {
    return (
        <>
            <div className="w-[400px]  lg:w-[1440px] h-[320px] lg:h-[334px] mt-10 relative  ">
                <div className="w-[400px] lg:w-[1440px] h-[320px] lg:h-[334px]  bg-[#53389E] opacity-90">
                    <img src={banner} className="h-[320px] lg:h-[334px] opacity-10" />
                </div>
                <div className=" absolute top-10 left-10 lg:left-16">
                    <p className="text-white  text-4xl font-bold">News Letter</p>
                    <p className=" text-sm lg:text-[16px] text-white opacity-40 mt-5  w-[320px] lg:w-[672px]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin
                    </p>
                    <div className="mt-5 flex ">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            autocomplete="email"
                            placeholder="Enter Your Email"
                            className="bg-[#FFFFFF]  text-[14px] capitalize   block gap-2  rounded-md border-0 px-5  lg:px-10 w-[200px] h-[40px]  lg:w-[814px] lg:h-[84px]  text-[#667085]  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#667085] sm:text-sm sm:leading-6 "
                        />
                        <button className="text-white border w-[80px] lg:w-[184px] h-[40px] lg:h-[84px] bg-[#FB8053] border-none rounded-md">
                            SEND
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;