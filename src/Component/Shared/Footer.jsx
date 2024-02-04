import React from 'react';
import UseMaxWidth from '../Reuseable/UseMaxWidth/UseMaxWidth';
import { Link } from 'react-router-dom';
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { IoLogoTwitter, IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <div className="">
            <UseMaxWidth>
                <div
                    className="w-full lg:max-h-[472px] h-auto  mt-2 lg:mx-0 bg-[#53389E] px-5 lg:px-20 pb-8"
                // className='lg:max-w-[1440px] lg:h-[472px] sm:h-full  mt-20'
                >
                    <div className="lg:w-max-[1280px]  lg:h-[240px] text-white grid  sm:grid-cols-1 lg:grid-cols-3 gap-6 py-8   ">
                        <div className="lg:w-[320px] lg:h-[112px] items-start">
                            <div className="w-[142px] h-[32px] flex gap-2 cursor-pointer">
                                <div className="w-[32px] h-[32px]">
                                    {/* <img
                      className="bg-gradient-to-r from-[#FFF] to-[#D0D5DD] border-[0.2px] rounded-lg"
                      src={logobg}
                      alt=""
                    />
                    <img
                      className="w-[16px] h-[16px] relative bottom-[22px] left-[8px] drop-shadow blur-[2.5px] "
                      src={logo}
                      alt=""
                    /> */}
                                </div>
                                <div className="w-[100px] h-[32px] cursor-pointer">
                                    {/* <img src={name} alt="" /> */}
                                    <h3 className="text-2xl font-bold">Estatery</h3>
                                </div>
                            </div>
                            <div className="h-[48px] mt-[50px]">
                                <p className="text-base font-normal text-[#a99abb]">
                                    Design amazing digital experiences that create more happy in
                                    the world.
                                </p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-2 grid-cols-2">
                            <div>
                                <h3 className="font-semibold text-">Category</h3>
                                <ul className="text-base  text-[#a99abb] cursor-pointer">
                                    <li className="pt-6">
                                        {" "}
                                        <Link to="/">Recent Property</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">To Sell</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">To Buy</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">To Rent</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">About Us</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">FAQ Page</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-base">Product</h3>
                                <ul className="text-base text-[#a99abb] cursor-pointer">
                                    <li className="pt-6">
                                        {" "}
                                        <Link to="/">Overview</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">Features</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">Solution</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">Tutorials</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">Pricing</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">Releases</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-base">Resources</h3>
                                <ul className="text-base text-[#a99abb] cursor-pointer">
                                    <li className="pt-6">
                                        {" "}
                                        <Link to="/">Blog</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">Newsletter</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">Events</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">Help Centre</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">Tutorials</Link>
                                    </li>
                                    <li className="pt-2">
                                        {" "}
                                        <Link to="/">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:ml-20">
                            <div className="lg:w-[360px] lg:h-[80px]">
                                <h3 className="text-[#FFFFFF] text-base ">Stay up to date</h3>
                                <div className="md:flex md:gap-3 gap-1 mt-2">
                                    <div>
                                        <input
                                            className="rounded-md lg:mb-0 py-2 mb-2"
                                            type="email"
                                            name="email"
                                            placeholder=" Enter your email"
                                            id=""
                                        />
                                    </div>

                                    <div>
                                        <button className="bg-[#FB8053] rounded-md py-2 px-3 text-semibold">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20">
                                <p>Follow Us on</p>
                                <div className="flex gap-4 py-2">
                                    <Link to="/">
                                        {/* <img className="hover:bg-[#FB8053]" src={facebook} alt="" /> */}
                                        <FaFacebookF className="hover:bg-[#FB8053] w-[28px] h-[28px] p-1 bg-white text-[#53389E] rounded" />
                                    </Link>
                                    <IoLogoTwitter className="hover:bg-[#FB8053] w-[28px] h-[28px] p-1 bg-white text-[#53389E] rounded" />
                                    <IoLogoYoutube className="hover:bg-[#FB8053] w-[28px] h-[28px] p-1 bg-white text-[#53389E] rounded" />
                                    <FaInstagram className="hover:bg-[#FB8053] w-[28px] h-[28px] p-1 bg-white text-[#53389E] rounded" />
                                    <FaLinkedinIn className="hover:bg-[#FB8053] w-[28px] h-[28px] p-1 bg-white text-[#53389E] rounded" />
                                    <FaPinterestP className="hover:bg-[#FB8053] w-[28px] h-[28px] p-1 bg-white text-[#53389E] rounded" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="lg:max-w-[1280px] lg:h-[56px] border-t-[0.5px] border-t-[#9284a5] lg:mt-[40px]  pt-4  text-[#D6BBFB] pb-10"> */}

                    {/* <div className="lg:max-w-[1280px] lg:h-[56px] bg-[#3c227d] border-t-[#9284a5] lg:mt-[40px]  pt-4  text-[#D6BBFB] pb-10">
              <div className="grid md:grid-cols-2 grid-cols-1">
                <p className="md:text-start text-center">
                  © 2007 Estatery. All rights reserved.
                </p>
                <p className="flex md:justify-end md:items-end justify-center  items-center gap-2 ">
                  <Link to="/">Terms</Link>
                  <Link to="/">Privacy</Link>
                  <Link to="/">Cookies</Link>
                </p>
              </div>
            </div> */}

                    {/* <p className='text-white bg-black py-4'>
    &#169; {new Date().getFullYear()} Copyright - All
    rights reserved
  // </p> */}

                </div>
                <div className="lg:w-full lg:h-[56px] bg-[#3c227d] border-t-[#9284a5]    text-[#D6BBFB] pb-10 pt-4 px-6">
                    <UseMaxWidth>
                        <div className="grid md:grid-cols-2 grid-cols-1 lg:mx-[60px]">
                            <p className="md:text-start text-center">
                                © 2007 Estatery. All rights reserved.
                            </p>
                            <p className="flex md:justify-end md:items-end justify-center  items-center gap-2 ">
                                <Link to="/">Terms</Link>
                                <Link to="/">Privacy</Link>
                                <Link to="/">Cookies</Link>
                            </p>
                        </div>
                    </UseMaxWidth>
                </div>

            </UseMaxWidth>

        </div>
    );
};

export default Footer;