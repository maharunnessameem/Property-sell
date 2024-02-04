import React from 'react';
import display from "../../../assets/images/About/display.png";
import UseMaxWidth from '../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import Slider from 'react-slick';
import { Fade } from 'react-swift-reveal';

import img1 from "../../../assets/images/About/img1.png";
import img2 from "../../../assets/images/About/img2.png";
import img3 from "../../../assets/images/About/img3.png";
import AboutMission from './AboutMission';
import AboutCounter from './AboutCounter/AboutCounter';
import AboutVission from './AboutVission';
import ChooseUs from './ChooseUs';
import HomeReview from '../Home/HomeReview/HomeReview';
import HelpCenter from './HelpCenter';
import ImageSection from '../Home/Sections/Section5/ImageSection';


const aboutSlider = [
    {
        img: `/src/assets/images/About/img1.png`
    },
    {
        img: `/src/assets/images/About/img2.png`
    },
    {
        img: `/src/assets/images/About/img3.png`
    },

]

const About = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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
        <>
            <div className='lg:max-w-[1440px] lg:max-h-[234px]'>
                <img className="max-h-[234px]" src={display} alt="" srcset="" />
            </div>
            <div className="absolute lg:top-[145px] top-[90px] lg:left-[620px] sm:left-[340px] left-[130px]">
                <h1 className="lg:text-xl text-sm text-[#FFF] font-semibold text-center lg:my-2" >About Us</h1>
                <p className="text-xs text-[#FFF] font-semibold text-center">Home || About Us</p>
            </div>
            <UseMaxWidth>
                <div className=" lg:my-[62px] mx-[74px] text-center my-10">
                    <h1 className="text-xl font-semibold mb-[22px]">Our Mission Is To Desire Property</h1>

                    <p className=" h-[36px] text-center">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of <br /> classical Latin literature from 45 BC</p>
                </div>

                <Slider className="" {...settings}>
                    {aboutSlider.map((d) => (
                        <div key={aboutSlider.toString()}>

                            <div className="grid sm:grid-cols-3 gap-0 lg:mx-[150px] mx-[80px] mb-[66px] lg:mt-0 sm:mt-10 mt-40">
                                <Fade left>
                                    <img className="py-10 lg:pl-10 border-[#fb8053] w-[354px] h-[201px]" src={img1} alt="" />
                                </Fade>
                                <Fade top>
                                    <img className=" w-[543px] h-[201px]" src={img2} alt="" />
                                </Fade>
                                <Fade right>
                                    <img className="py-10 lg:pr-10 border-[#fb8053] w-[354px] h-[201px]" src={img3} alt="" />
                                </Fade>

                            </div>


                        </div>
                    ))}
                </Slider>

                <AboutMission />
                <AboutCounter />
                <AboutVission />
                <ChooseUs />
                <HomeReview />
                <HelpCenter />
                <ImageSection />

            </UseMaxWidth>
        </>
    );
};

export default About;