import React from 'react';

import Slider from 'react-slick';
import { Fade } from 'react-swift-reveal';
import img1 from "../../../../assets/images/HomeReview/review1.svg";
import img2 from "../../../../assets/images/HomeReview/review2.svg";
import img3 from "../../../../assets/images/HomeReview/review3.svg";
import img4 from "../../../../assets/images/HomeReview/review4.svg";
import UseMaxWidth from '../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';

const reviewCard = [
    {
        name: `Johanson Patt 1`,
        img: `/src/public/assets/HomeReview/review1.svg`,
        as: `Agent`,
        description: `Lorem Ipsum is simply dummy text of the printing and typ setting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s`,
    },
    {
        name: `Johanson Patt 2`,
        img: `/src/public/assets/HomeReview/review2.svg`,
        as: `Agent`,
        description: `Lorem Ipsum is simply dummy text of the printing and typ setting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s`,
    },
    {
        name: `Johanson Patt 3`,
        img: `/src/public/assets/HomeReview/review3.svg`,
        as: `Agent`,
        description: `Lorem Ipsum is simply dummy text of the printing and typ setting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s`,
    },
    {
        name: `Johanson Patt 4`,
        img: `/src/public/assets/HomeReview/review4.svg`,
        as: `Agent`,
        description: `Lorem Ipsum is simply dummy text of the printing and typ setting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s`,
    },
];

const HomeReview = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="lg:w-max-[1440px] lg:h-[723px]">
            <UseMaxWidth>
                <div className="max-w-[289px] h-[40px] xl:ml-[520px] lg:ml-[350px] md:ml-[230px] mx-[90px] sm:mx-[150px] md:mx-[170px]">
                    <h2 className="text-center lg:text-3xl text-2xl cursor-pointer ">
                        See what others said <span className="text-[#FB8053]">about</span>{" "}
                        us
                    </h2>
                </div>
            </UseMaxWidth>
            <div className="lg:w-full lg:h-[840px] opacity-75 mt-[54px]">
                <UseMaxWidth>
                    <div className="lg:h-[620px]  lg:ml-0 md:ml-0 sm:ml-20 bg-[#EDF9F9] lg:pb-0 pb-10">
                        <Slider className="md:mx-[70px] mx-4 pt-6" {...settings}>
                            {reviewCard.map((d) => (
                                <div key={reviewCard.toString()}>
                                    <div className="grid lg:grid-cols-2 md:grid-cols-2 md:gap-x-8 lg:gap-y-0  md:mr-0 sm:mr-10 cursor-pointer">
                                        <Fade top duration={500}>
                                            <div className="lg:w-max[500px] sm:4/5 lg:h-[230px] text-black  rounded shadow-lg bg-[#FFFFFF] mt-[20px] " data-aos="fade-right">
                                                <div className="flex gap-[18px] ">
                                                    <div className=" rounded-t-xl  ml-[34px] pt-[24px]">
                                                        <img
                                                            src={img1}
                                                            alt=" "
                                                            className="h-[94px] w-[94px]  rounded-full"
                                                        />
                                                    </div>


                                                    <div className="flex flex-col pt-[49px]">
                                                        <p className="w-[150px] h-[24px] text-[#000000]  text-base font-semibold text-start">
                                                            {d.name}
                                                        </p>
                                                        <p className="w-[46px] h-[24px] text-[#FB8053] font-medium text-base text-start">
                                                            {d.as}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lg:w-max-[463px] lg:h-[53px] ml-[34px] flex justify-between mt-30">
                                                    <div className="mt-8">
                                                        <p className="text-base font-light m-1 text-[#000]">
                                                            {d.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                        <Fade top duration={1500}>
                                            <div className="lg:w-max[500px] sm:4/5 lg:h-[230px] text-black  rounded shadow-lg bg-[#FFFFFF] mt-[20px]  " data-aos="fade-left">
                                                <div className="flex gap-[18px] ">
                                                    <div className=" rounded-t-xl  ml-[34px] pt-[24px]">
                                                        <img
                                                            src={img2}
                                                            alt=" "
                                                            className="h-[94px] w-[94px]  rounded-full"
                                                        />
                                                    </div>


                                                    <div className="flex flex-col pt-[49px]">
                                                        <p className="w-[150px] h-[24px] text-[#000000]  text-base font-semibold text-start">
                                                            {d.name}
                                                        </p>
                                                        <p className="w-[46px] h-[24px] text-[#FB8053] font-medium text-base text-start">
                                                            {d.as}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lg:w-max-[463px] lg:h-[53px] ml-[34px] flex justify-between mt-30">
                                                    <div className="mt-8">
                                                        <p className="text-base font-light m-1 text-[#000]">
                                                            {d.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                        <Fade bottom duration={500}>
                                            <div className="lg:w-max[500px] sm:4/5 lg:h-[230px] text-black  rounded shadow-lg bg-[#FFFFFF] mt-[20px] lg:mb-0 sm:mb-6 " data-aos="fade-right">
                                                <div className="flex gap-[18px] ">
                                                    <div className=" rounded-t-xl  ml-[34px] pt-[24px]">
                                                        <img
                                                            src={img3}
                                                            alt=" "
                                                            className="h-[94px] w-[94px]  rounded-full"
                                                        />
                                                    </div>


                                                    <div className="flex flex-col pt-[49px]">
                                                        <p className="w-[150px] h-[24px] text-[#000000]  text-base font-semibold text-start">
                                                            {d.name}
                                                        </p>
                                                        <p className="w-[46px] h-[24px] text-[#FB8053] font-medium text-base text-start">
                                                            {d.as}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lg:w-max-[463px] lg:h-[53px] ml-[34px] flex justify-between mt-30">
                                                    <div className="mt-8">
                                                        <p className="text-base font-light m-1 text-[#000]">
                                                            {d.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                        <Fade bottom duration={1500}>
                                            <div className="lg:w-max[500px] sm:4/5 lg:h-[230px] text-black  rounded shadow-lg bg-[#FFFFFF] mt-[20px] lg:mb-8  mb-6" data-aos="fade-left">
                                                <div className="flex gap-[18px] ">
                                                    <div className=" rounded-t-xl  ml-[34px] pt-[24px]">
                                                        <img
                                                            src={img4}
                                                            alt=" "
                                                            className="h-[94px] w-[94px]  rounded-full"
                                                        />
                                                    </div>


                                                    <div className="flex flex-col pt-[49px]">
                                                        <p className="w-[150px] h-[24px] text-[#000000]  text-base font-semibold text-start">
                                                            {d.name}
                                                        </p>
                                                        <p className="w-[46px] h-[24px] text-[#FB8053] font-medium text-base text-start">
                                                            {d.as}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lg:w-max-[463px] lg:h-[53px] ml-[34px] flex justify-between mt-30">
                                                    <div className="mt-8">
                                                        <p className="text-base font-light m-1 text-[#000]">
                                                            {d.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </UseMaxWidth>
            </div>
        </div>

    );
};

export default HomeReview;