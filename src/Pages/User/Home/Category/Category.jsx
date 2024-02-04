import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import UseMaxWidth from '../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import { Fade } from 'react-swift-reveal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../../assets/images/Category/category1.png"


const categoryCard = [
    {
        name: `Category Name`,
        img: `/src/assets/images/Category/category1.png`,
        type: `To Rent`,
    },
    {
        name: `Category Name`,
        img: `/src/assets/images/Category/category1.png`,
        type: `To Rent`,
    },
    {
        name: `Category Name`,
        img: `/src/assets/images/Category/category1.png`,
        type: `To Rent`,
    },
    {
        name: `Category Name`,
        img: `/src/assets/images/Category/category1.png`,
        type: `To Rent`,
    },
    {
        name: `Category Name`,
        img: `/src/assets/images/Category/category1.png`,
        type: `To Rent`,
    },
    {
        name: `Category Name`,
        img: `/src/assets/images/Category/category1.png`,
        type: `To Rent`,
    },
    {
        name: `Category Name`,
        img: `/src/assets/images/Category/category1.png`,
        type: `To Rent`,
    },
    {
        name: `Category Name`,
        img: `/src/assets/images/Category/category1.png`,
        type: `To Rent`,
    },
];

const Category = () => {
    const [sliderRef, setSliderRef] = useState(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: false,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: false,
        cssEase: "linear",
        arrow: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="mx-10 md:mx-14 lg:mx-0 lg:px-20 lg:mb-0 lg:mt-0 ">
            <UseMaxWidth>
                <div className="lg:w-max-[342px] lg:max-h-[37px] leading-9 cursor-pointer">
                    <Fade left>
                        <h2 className="text-3xl ">
                            Our Popular <span className="text-[#FB8053]"> Category</span>
                        </h2>
                    </Fade>
                </div>
                <div className="lg:w-max-[605px] lg:max-h-[37px] leading-9 my-4">
                    <p className="text-[#373636] font-medium text-base">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia.
                    </p>
                </div>


                <div className="mt-8 h-[350px]">
                    <Slider ref={setSliderRef} className="" {...settings}>
                        {categoryCard.map((item) => (
                            <div key={categoryCard.toString()}>
                                <div className="mr-6 cursor-pointer">
                                    <div>
                                        <img
                                            className="lg:w-[283px]  "
                                            src={img}
                                            alt=""
                                        />

                                    </div>
                                    <div className="relative xl:left-16 left-6 bottom-[110px]">
                                        <div className="lg:w-[224px] lg:h-[97px] bg-[#FFDFDF] rounded py-8 px-4 shadow-xl border-4 border-white">
                                            <h4 className="text-[#FB8053] font-bold text-sm">
                                                {item.type}
                                            </h4>
                                            <div className="flex md:gap-2">
                                                <p className="font-extrabold text-sm">{item.name}</p>
                                                <FaArrowRightLong className="text-[#777]  md:ml-10 ml-6 cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className="flex justify-end items-center space-x-3 relative bottom-[400px] right-3">
                        <div>
                            <button
                                className="w-[48px] h-[48px] bg-[#FFDFDF]   py-2 px-4 rounded-sm capitalize hover:bg-white hover:text-black hover:border-[#777] hover:ring-1 hover:ring-[#777] hover:duration-500 mb-2 text-[#777]"
                                onClick={sliderRef?.slickNext}
                            >
                                <IoIosArrowForward />

                            </button>
                            <br />
                            <button
                                className="w-[48px] h-[48px] bg-[#FFDFDF]   py-2 px-4 rounded-sm capitalize hover:bg-white hover:text-black hover:border-[#777] hover:ring-1 hover:ring-[#777] hover:duration-500 mb-2 text-[#777]"
                                onClick={sliderRef?.slickPrev}
                            >
                                <IoIosArrowBack />

                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="mt-8 h-[350px]">
                    <Slider ref={setSliderRef} className="" {...settings}>
                        {categoryCard.map((item) => (
                            <div key={categoryCard.toString()}>
                                <div className="mr-6 cursor-pointer">
                                    <div>
                                        <img
                                            className="lg:w-[283px]  "
                                            src={item.img}
                                            alt=""
                                        />

                                    </div>
                                    <div className="relative xl:left-16 left-6 bottom-[110px]">
                                        <div className="lg:w-[224px] lg:h-[97px] bg-[#FFDFDF] rounded py-8 px-4 shadow-xl border-4 border-white">
                                            <h4 className="text-[#FB8053] font-bold text-sm">
                                                {item.type}
                                            </h4>
                                            <div className="flex md:gap-2">
                                                <p className="font-extrabold text-sm">{item.name}</p>
                                                <FaArrowRightLong className="text-[#777]  md:ml-10 ml-6 cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className="flex justify-end items-center space-x-3 relative bottom-[400px] right-3">
                        <div>
                            <button
                                className="w-[48px] h-[48px] bg-[#FFDFDF]   py-2 px-4 rounded-sm capitalize hover:bg-white hover:text-black hover:border-[#777] hover:ring-1 hover:ring-[#777] hover:duration-500 mb-2 text-[#777]"
                                onClick={sliderRef?.slickNext}
                            >
                                <IoIosArrowForward />

                            </button>
                            <br />
                            <button
                                className="w-[48px] h-[48px] bg-[#FFDFDF]   py-2 px-4 rounded-sm capitalize hover:bg-white hover:text-black hover:border-[#777] hover:ring-1 hover:ring-[#777] hover:duration-500 mb-2 text-[#777]"
                                onClick={sliderRef?.slickPrev}
                            >
                                <IoIosArrowBack />

                            </button>
                        </div>
                    </div>
                </div> */}
            </UseMaxWidth>
        </div>
    );
};

export default Category;