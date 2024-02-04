import React from 'react';
import UseMaxWidth from '../../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../../../assets/images/ImageSection/image1.png";
import img2 from "../../../../../assets/images/ImageSection/image2.png";
import img3 from "../../../../../assets/images/ImageSection/image3.png";
import img4 from "../../../../../assets/images/ImageSection/image4.png";

const ImageSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 10000,
        autoplay: true,
        arrows: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <UseMaxWidth>
            <div className="lg:max-w-[1440px] lg:h-[190px] bg-[#FFCC41] my-2 cursor-pointer h-[120px]">

                <Slider {...settings}>
                    <div className="w-[168px] lg:h-[112px] lg:my-[30px] sm:pt-4 flex justify-center">
                        <img src={img1} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] my-[30px] sm:pt-4 pt- flex justify-center">
                        <img src={img2} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] my-[30px] sm:pt-4 lg:pb-0  flex justify-center">
                        <img src={img3} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] mb-[30px] sm:pt-8 pt- flex justify-center">
                        <img src={img4} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] my-[30px] sm:pt-4  flex justify-center">
                        <img src={img1} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] my-[30px] sm:pt-4 pt- flex justify-center">
                        <img src={img2} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] my-[30px] sm:pt-4 lg:pb-0 pb-4 flex justify-center">
                        <img src={img3} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] my-[30px] sm:pt-4 flex justify-center">
                        <img src={img1} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] my-[30px] sm:pt-4 pt- flex justify-center">
                        <img src={img2} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] my-[30px] sm:pt-4 lg:pb-0 pb-4 flex justify-center">
                        <img src={img3} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] mb-[30px] sm:pt-8 pt- flex justify-center">
                        <img src={img4} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] my-[30px] sm:pt-4 flex justify-center">
                        <img src={img1} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] my-[30px] sm:pt-4 pt- flex justify-center">
                        <img src={img2} alt="" />
                    </div>
                    <div className="w-[168px] h-[112px] my-[30px] sm:pt-4 flex justify-center pb-2">
                        <img src={img3} alt="" />
                    </div>
                </Slider>
            </div>
        </UseMaxWidth>
    );
};

export default ImageSection;