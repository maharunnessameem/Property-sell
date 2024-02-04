import React from 'react';
import UseMaxWidth from '../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import Slider from 'react-slick';
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";


const agentsCard = [
    {
        name: `Hanif Samsuzzaman`,
        img: `/src/public/assets/Agents/profile.png`,
        companyLogo: `/src/public/assets/Agents/companylogo.png`,
        email: `info@agent.com`,
        phone: `+019854 12095`,
        CompanyName: `Real Estate`,
    },
    {
        name: `Hanif Samsuzzaman`,
        img: `/src/public/assets/Agents/profile.png`,
        companyLogo: `/src/public/assets/Agents/companylogo.png`,
        email: `info@agent.com`,
        phone: `+019854 12095`,
        CompanyName: `Real Estate`,
    },
    {
        name: `Hanif Samsuzzaman`,
        img: `/src/public/assets/Agents/profile.png`,
        companyLogo: `/src/public/assets/Agents/companylogo.png`,
        email: `info@agent.com`,
        phone: `+019854 12095`,
        CompanyName: `Real Estate`,
    },
    {
        name: `Hanif Samsuzzaman`,
        img: `/src/public/assets/Agents/profile.png`,
        companyLogo: `/src/public/assets/Agents/companylogo.png`,
        email: `info@agent.com`,
        phone: `+019854 12095`,
        CompanyName: `Real Estate`,
    },
];

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "gray",
                borderRadius: "12px",

                border: "none",
            }}
            onClick={onClick}
        />
    );
}

const Agents = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrow: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "60px",
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        marginRight: "70px",
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        <UseMaxWidth>
            <div className="max-w-[1440px] px-20 bg-white items-center gap-20">
                <h1 className="text-2xl lg:text-5xl text-center py-5 lg:py-14 lg:px-20 font-normal lg:leading-9">
                    Meet Our <span className="text-[#FB8053]">Agents</span>
                </h1>
                <Slider {...settings}>
                    {agentsCard.map((d) => (
                        <div
                            key={agentsCard.toString()}
                            className="h-[370px] lg:h-[500px] text-black mb-3"
                        >
                            <div className="mr-6 rounded-xl shadow-md  ">
                                <div>
                                    <img
                                        src={d.img}
                                        alt=" "
                                        className="w-full h-[200px] lg:h-[300px] rounded-md shadow object-cover"
                                    />
                                </div>
                                <div className="items-start flex flex-col gap-4 p-4">
                                    <div>
                                        <p className="text-[13px] lg:text-2xl font-semibold text-start">
                                            {d.name}
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <FiPhoneCall className="text-[#FB8053] w-5 h-5" />
                                        <p className="text-sm  text-[#10182] font-normal opacity-70">
                                            {d.phone}
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <CiMail className="text-[#FB8053] w-5 h-5" />
                                        <p className="text-sm  text-[#10182] font-normal opacity-70">
                                            {d.email}
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <img
                                            src={d.companyLogo}
                                            alt=""
                                            className="h-10 w-10 items-start  "
                                        />

                                        <p className="text-sm font-semibold ">{d.CompanyName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </UseMaxWidth>
    );
};

export default Agents;