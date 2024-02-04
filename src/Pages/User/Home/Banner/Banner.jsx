import React, { useState } from 'react';
import UseMaxWidth from '../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../../../assets/images/Banner/b1.png";
import banner2 from "../../../../assets/images/Banner/b2.jpg";
import banner3 from "../../../../assets/images/Banner/b3.jpg";

import { Fade } from "react-swift-reveal";
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { FaKey, FaUsers } from 'react-icons/fa';
import ResponsiveSearch from './ResponsiveSearch';

const Banner = () => {
    const featuredata = [
        {
            title: `50k Renters`,
            des: `believe in our service`,
        },
        {
            title: `50k Renters`,
            des: `believe in our service`,
        },
        {
            title: `50k Renters`,
            des: `believe in our service`,
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    //   useEffect(() => {
    //     AOS.init({
    //       duration: 700,
    //       easing: "ease-out-cubic",
    //     })

    //   }, [])


    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <UseMaxWidth>
            <div className=" w-full  lg:h-[601px] top-[110px] lg:mb-[180px]  mb-[770px] mx-auto h-[250px]">
                <div className=" w-full lg:h-[601px]  relative">
                    <div>
                        <Slider {...settings} className="w-full">
                            {/* <img src={banner1} alt="" /> */}
                            <img className=" w-full lg:h-[601px]" src={banner1} alt="" />
                            <img className="w-full lg:h-[601px]" src={banner2} alt="" />
                            <img className="w-full lg:h-[601px]" src={banner3} alt="" />
                        </Slider>
                    </div>
                    <div className="w-full h-full absolute bg-black opacity-[0.5] top-0"></div>

                </div>

                <UseMaxWidth>
                    <div className="absolute xl:ml-40 top-[110px] mx-4 lg:px-20">
                        <div className="md:w-[752px] lg:h-[134px] justify-center items-center text-center lg:mr-0  md:mr-20 sm:mr-20">


                            <h1 className="lg:text-5xl md:text-3xl text-xl md:font-extrabold font-bold text-[#FFF] leading-tight lg:ml-6">

                                <Fade left duration={500} cascade><span className="text-[#FB8053]">B</span></Fade>
                                <Fade left duration={1000} cascade><span className="text-[#FB8053]">U</span></Fade>
                                <Fade left duration={1500} cascade><span className="text-[#FB8053]">Y</span></Fade>

                                OR{" "}
                                <Fade left cascade duration={1500}><span className="text-[#F2994A]">RENT</span></Fade>

                                PROPERTIES WITH NO
                                COMMISSION
                            </h1>

                        </div>
                        <div className="lg:w-[762px] lg:h-[30px] top-[334px] lg:ml-20 md:ml-40 sm:mr-10">
                            <p className="text-[rgb(219,210,200)] font-normal text-base">
                                A great platform to buy, sell, or even rent your properties
                                without any commisions.{" "}
                            </p>
                        </div>
                        <div className="lg:w-max-[1089px] lg:h-[146px] h-[340px] lg:mt-10 mt-2  lg:ml-0 md:ml-40  md:mt-4">

                            <Box>
                                <TabContext value={value}>

                                    <Box className="lg:w-[270px] w-[270px] lg:h-[50px] h-[50px] bg-[#DBD2C8] flex gap-1">
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Buy" value="1">

                                            </Tab>
                                            <Tab label="Rent" value="2">

                                            </Tab>
                                            <Tab label="Sell" value="3">

                                            </Tab>
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <div className="lg:w-[890px]  lg:h-[104px]  h-[130px] bg-[#C8BCAF] bg-opacity-80 lg:mr-0  mr-8 lg:p-6 p-1 lg:block hidden" data-aos="fade-up">
                                            <div className="top-[42px] lg:flex lg:gap-2 ">
                                                <div className="lg:w-[113px] lg:h-[55px] ">
                                                    <label className="max-w-[64px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Category
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="apartments"
                                                        >
                                                            Apartments
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="houses"
                                                        >
                                                            Houses
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="villas"
                                                        >
                                                            Villas
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[195px] max-h-[55px]">
                                                    <label className="max-w-[59px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Location
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            Buenos Aires, Arg
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="brooklyn"
                                                        >
                                                            Brooklyn
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="manhattan"
                                                        >
                                                            Manhattan
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="queens"
                                                        >
                                                            Queens
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="staten island"
                                                        >
                                                            Staten Island
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="the bronx"
                                                        >
                                                            The Bronx
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[41px] max-h-[55px]">
                                                    <label className="max-w-[40px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Room
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            5
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            4
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[41px] max-h-[55px]">
                                                    <label className="max-w-[40px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Bath
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            5
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            4
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[82px] max-h-[55px]">
                                                    <label className="max-w-[56px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Min Area
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2500
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2400
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2300
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[96px] max-h-[55px]">
                                                    <label className="max-w-[60px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Max Area
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            25000
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            24000
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            23000
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="max-w-[209px] max-h-[56px] bg-[#FB8053] px-4 rounded  ">
                                                    <button className="text-white lg:max-w-[145px] lg:max-h-[24px] text-sm font-bold text-center py-4">
                                                        Browse Properties
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <div className="lg:w-[890px]  lg:h-[104px]  h-[130px] bg-[#C8BCAF] bg-opacity-80 lg:mr-0  mr-8 lg:p-6 p-1 lg:block hidden" data-aos="fade-up">
                                            <div className="top-[42px] lg:flex lg:gap-2 ">
                                                <div className="lg:w-[113px] lg:h-[55px] ">
                                                    <label className="max-w-[64px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Category
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="apartments"
                                                        >
                                                            Apartments
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="houses"
                                                        >
                                                            Houses
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="villas"
                                                        >
                                                            Villas
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[195px] max-h-[55px]">
                                                    <label className="max-w-[59px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Location
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            Buenos Aires, Arg
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="brooklyn"
                                                        >
                                                            Brooklyn
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="manhattan"
                                                        >
                                                            Manhattan
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="queens"
                                                        >
                                                            Queens
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="staten island"
                                                        >
                                                            Staten Island
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="the bronx"
                                                        >
                                                            The Bronx
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[41px] max-h-[55px]">
                                                    <label className="max-w-[40px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Room
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            5
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            4
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[41px] max-h-[55px]">
                                                    <label className="max-w-[40px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Bath
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            5
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            4
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[82px] max-h-[55px]">
                                                    <label className="max-w-[56px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Min Area
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2500
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2400
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2300
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[96px] max-h-[55px]">
                                                    <label className="max-w-[60px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Max Area
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            25000
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            24000
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            23000
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="max-w-[209px] max-h-[56px] bg-[#FB8053] px-4 rounded  ">
                                                    <button className="text-white lg:max-w-[145px] lg:max-h-[24px] text-sm font-bold text-center py-4">
                                                        Browse Properties
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <div className="lg:w-[890px]  lg:h-[104px]  h-[130px] bg-[#C8BCAF] bg-opacity-80 lg:mr-0  mr-8 lg:p-6 p-1 lg:block hidden" data-aos="fade-up">
                                            <div className="top-[42px] lg:flex lg:gap-2 ">
                                                <div className="lg:w-[113px] lg:h-[55px] ">
                                                    <label className="max-w-[64px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Category
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="apartments"
                                                        >
                                                            Apartments
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="houses"
                                                        >
                                                            Houses
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="villas"
                                                        >
                                                            Villas
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[195px] max-h-[55px]">
                                                    <label className="max-w-[59px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Location
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            Buenos Aires, Arg
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="brooklyn"
                                                        >
                                                            Brooklyn
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="manhattan"
                                                        >
                                                            Manhattan
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="queens"
                                                        >
                                                            Queens
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="staten island"
                                                        >
                                                            Staten Island
                                                        </option>
                                                        <option
                                                            className="bg-[#C8BCAF] bg-opacity-80"
                                                            value="the bronx"
                                                        >
                                                            The Bronx
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[41px] max-h-[55px]">
                                                    <label className="max-w-[40px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Room
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            5
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            4
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[41px] max-h-[55px]">
                                                    <label className="max-w-[40px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Bath
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            5
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            4
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[82px] max-h-[55px]">
                                                    <label className="max-w-[56px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Min Area
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2500
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2400
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            2300
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>

                                                <div className="max-w-[96px] max-h-[55px]">
                                                    <label className="max-w-[60px] max-h-[21px] font-normal text-sm text-[#001619]">
                                                        Max Area
                                                    </label>
                                                    <select className="max-h-[30px] border-[#C8BCAF] bg-transparent bg-opacity-80 cursor-pointer">
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            25000
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            24000
                                                        </option>
                                                        <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                                            23000
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="max-w-[209px] max-h-[56px] bg-[#FB8053] px-4 rounded  ">
                                                    <button className="text-white lg:max-w-[145px] lg:max-h-[24px] text-sm font-bold text-center py-4">
                                                        Browse Properties
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>

                                </TabContext>

                            </Box>


                            <ResponsiveSearch />



                        </div>

                        <Fade top>
                            <div className=" lg:w-[890px]  lg:mt-[100px]  grid lg:grid-cols-3  md:w-2/3 lg:h-[228px] lg:mx-10 lg:ml-0  md:ml-20 bg-[#FFFFFF] shadow justify-center items-center text-center shadow-slate-400 py-4 rounded" data-aos="fade-up">
                                {featuredata.map((item, index) => (
                                    <div className="lg:flex " key={index}>
                                        <div>
                                            <div className="">
                                                <div className="cursor-pointer">
                                                    <div className="border  w-[64px] h-[64px] rounded-full border-[#F2994A] ml-20 mr-20 mb-4 justify-center items-center ">
                                                        <div className="border-4 border-white rounded-full w-full h-full opacity-50  bg-[#F2994A] flex justify-center items-center">
                                                            <FaUsers size={35} color="#fff" />
                                                            {/* {item.img1} */}
                                                        </div>
                                                        <div className="w-[24px] lg:h-[24px] bg-[#F2994A] rounded-lg pt-1 pl-1 relative left-[40px]  bottom-[20px]">
                                                            <FaKey className="text-[rgb(255,255,255)] lg:w-[16px] lg:h-[16px] " />
                                                        </div>
                                                    </div>
                                                    <div className="text-base font-semibold text-center my-3 mt-0 ">
                                                        {item.title}
                                                    </div>
                                                    <p className="text-[#777777] text-center font-medium text-base mb-4">
                                                        {item.des}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Fade>
                    </div>
                </UseMaxWidth>
            </div>
        </UseMaxWidth>
    );
};

export default Banner;