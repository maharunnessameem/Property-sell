import React from 'react';
import UseMaxWidth from '../../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import { Fade } from 'react-swift-reveal';
import image from "../../../../../assets/images/Section Image/HomeLoan.png";

const HomeLoan = () => {
    return (
        <UseMaxWidth>
            <div className="shrink-0 bg-[#F2F4F7] mt-5 mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <Fade left duration={4000} delay={0} count={1}>
                        <div className=" pt-24 lg:pt-16 lg:pl-44 lg:pb-24 pb-10">
                            <div className="relative">
                                <div className="border w-[350px] lg:w-[450px] h-[310px] bg-[#FB8053]"></div>
                                <img
                                    src={image}
                                    alt=""
                                    className="pt-0 absolute bottom-2 left-4 lg:w-[540px] w-[450px] h-[323px] p-3"
                                />
                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={4000} delay={0} count={1}>
                        <div className="pt-1 lg:pt-16  lg:pl-20 pl-12 flex flex-col">
                            <h1 className="text-black text-3xl not-italic capitalize">
                                Explore your
                            </h1>
                            <p className="text-3xl text-orange not-italic capitalize">
                                homeLoan <span className="text-black">options</span>
                            </p>
                            <p className="pl-25 pt-10 lg:pt-16 leading-4 text-[14px] lg:w-[393px] w-[300px] h-[34px]">
                                Lorem ipsum dolor sit amet, minimum inimicus quo no, at vix
                                primis viderere vituperatoribus. In corpora argumentum.
                            </p>

                            <div className="pt-20">
                                <button className="border text-sm px-4 lg:px-8 py-2 lg:py-3 text-white bg-[#FB8053] hover:bg-white hover:text-[#FB8053] mt-8 mb-5 ring-2 ring-[#FB8053] ring-inset rounded-md">
                                    Browse Property
                                </button>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </UseMaxWidth>
    );
};

export default HomeLoan;