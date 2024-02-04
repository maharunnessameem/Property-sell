import React from 'react';
import UseMaxWidth from '../../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import { Fade } from 'react-swift-reveal';
import bg from "../../../../../assets/images/FindHome/bg.jpg";

const FindHome = () => {
    return (
        <UseMaxWidth>
            <div className="lg:h-[576px] relative h-[380px]">
                <img className="lg:h-[576px] h-[380px] w-full" src={bg} alt="" />
                <div className="w-full lg:h-[576px] h-[380px]  absolute bg-black opacity-[0.3]  lg:bottom-[2px]  bottom-[0px]"></div>
                <UseMaxWidth>


                    <div className="grid lg:grid-cols-2 grid-cols-1 relative bottom-[370px]  lg:bottom-[400px] px-10 lg:ml-0 md:ml-40 lg:px-20 lg:h-[400px] h-[380px]">
                        <Fade left >
                            <div className="lg:w-[429px] lg:h-[116px]">
                                <h3 className="font-semibold text-[#FFF] shadow-[#C8BCAF] lg:text-5xl text-2xl cursor-pointer">
                                    Find A <span className="text-[#FB8053]">Home</span> That Truly
                                    Suits You
                                </h3>
                                <p className="text-base font-bold text-[#f9f5f1] lg:mt-[60px]">
                                    * Feugait scriptorem qui ea, quo admodum lorem.
                                </p>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="lg:w-[440px] w-[260px]  sm:w-2/3 lg:max-h-[302px] rounded-md bg-[#FFF] lg:px-[58px]  px-4 lg:py-[26px] mb-2 lg:mt-12 lg:ml-10 cursor-pointer py-2 lg:h-[250px] h-[230px]">
                                <h4 className="w-[296px] h-[39px] md:font-bold font-semibold lg:text-2xl text-xl  ">
                                    Sign to <span className="text-[#FB8053]">Newsletter</span>
                                </h4>
                                <p className="max-w-[416px] max-h-[72px] text-[#777] text-sm font-light">
                                    Save your time and easily rent or sell your property with the
                                    lowest commission on the real estate market.
                                </p>
                                <div className="flex mt-[35px]">
                                    <input
                                        className="lg:w-[366px] w-[150px] lg:max-h-[64px] border-[rgb(202,201,201)] border  text-sm text-[#000] pl-4"
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder=" Your Email"
                                    />
                                    <button className="max-w-[124px] max-h-[76px] bg-[#FB8053] rounded-md text-white text-base font-bold px-4 py-3 cursor-pointer">
                                        SEND
                                    </button>
                                </div>
                            </div>
                        </Fade>
                    </div>



                </UseMaxWidth>
            </div>
        </UseMaxWidth>
    );
};

export default FindHome;