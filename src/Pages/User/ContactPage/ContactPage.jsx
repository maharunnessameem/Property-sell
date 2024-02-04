import React from 'react';
import { ImLocation } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiCircleThin } from "react-icons/pi";
import UseMaxWidth from '../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import banner from "../../../assets/images/DetailsListing/banner.png";
import contact from "../../../assets/images/contact/home.png"

import { RiHomeSmile2Fill } from "react-icons/ri";
import { Input, Textarea } from '@material-tailwind/react';
import NewsLetter from './NewsLetter';
import ImageSection from '../Home/Sections/Section5/ImageSection';
import ContactMap from './ContactMap';
import HelpCenter from './HelpCenter';


const ContactPage = () => {
    return (
        <>
            <UseMaxWidth>
                <div className="bg-[#D9D9D9] w-[400px] lg:w-[1440px]  sm:mt-2">
                    <div className="lg:mt-10">
                        <div className="relative  lg:w-[1440px] lg:h-[199px]">
                            <img
                                src={banner}
                                className="w-[400px] h-[100px] lg:w-[14440px] lg:h-[199px]"
                            />
                            <div className="absolute lg:inset-x-96  left-28 top-5  lg:top-20  ">
                                <p className="text-white  text-center  text-[20px] ">
                                    Contact Us
                                </p>
                                <p className="text-white text-center text-sm">
                                    Home || Contact Us
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="w-[1220px] h-full  lg:h-[909px] bg-white lg:mt-12 border mt-10 lg:ml-16 grid lg:grid-cols-2 sm:grid-cols-1  lg:mr-14 gap-5 ">
                        <div className="mt-10 px-10 w-[370px] lg:w-[610px] h-full lg:h-[904px]">
                            <div className="text-start">
                                <p className="lg:text-2xl capitalize font-bold">contact us</p>
                                <p className="mt-8 lg:text-[14px] text-[#777] ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                    gravida quis libero eleifend ornare. Maecenas mattis enim .
                                </p>
                            </div>
                            <div className="text-start">
                                <div className="w-full  mt-10">
                                    <Input label="Enter your Name" className="" />
                                </div>
                                <div className="w-full mt-10">
                                    <Input label="Enter your Email" />
                                </div>
                                <div className="w-full mt-10">
                                    <Input label="Subject" />
                                </div>
                                <div className="w-full mt-10  h-[260px] relative">
                                    <Textarea label="Message" rows={12} placeholder="Message" />
                                    <div className="absolute bottom-4  right-4">
                                        <p className="capitalize text-[#777] opacity-70  text-xs">
                                            Max Character 800 words
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button className="px-4 py-3 border  text-white bg-[#FB8053] mt-5  rounded-md">
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Contact Information */}
                        <div className="w-[400px] lg:w-[610px] h-[700px]  lg:h-[904px] bg-[#53389E] relative">
                            <div>
                                <img
                                    src={contact}
                                    className="h-[700px] lg:h-[904px]  w-[400px] lg:w-[619px] opacity-10"
                                />
                            </div>
                            <div className="absolute top-0 lg:top-0 left-0 lg:left-0">
                                <p className="text-center text-white ml-40 lg:ml-72">
                                    <RiHomeSmile2Fill className="w-14 h-14 mt-20" />
                                </p>
                                <p className="text-white text-4xl text-center  ml-24 lg:ml-52 lg:mt-10">
                                    Estatery
                                </p>
                                <div className="grid grid-cols-2 lg:gap-10 gap-3">
                                    <div className="flex">
                                        <p className="px-5 lg:px-20 mt-10 lg:mt-24 flex  justify-center items-center">
                                            <PiCircleThin className="w-14 h-14 text-[#FB8053]" />
                                            <ImLocation className="text-[#FB8053] absolute top-50 left-30 hover:text-white" />
                                        </p>
                                        <div className="absolute top-56 lg:top-80 left-20 lg:left-36">
                                            <p className=" text-white text-sm">Address</p>
                                            <p className="text-white text-sm">58 Hullbrook Road,</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <p className="px-11 lg:px-20 mt-9 lg:mt-24 flex  justify-center items-center ">
                                            <PiCircleThin className="w-14 h-14 text-[#FB8053]" />
                                            <FaPhone className="text-[#FB8053] absolute top-50 left-30" />
                                        </p>
                                        <div className="absolute top-56 lg:top-80 left-56 lg:left-96 ">
                                            <p className=" text-white text-sm ml-7">Phone</p>
                                            <p className="text-white text-sm ml-7 ">+9983837930</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <p className="px-5 lg:px-20 flex  justify-center items-center">
                                            <PiCircleThin className="w-14 h-14 text-[#FB8053]" />
                                            <IoIosMail className="text-[#FB8053] absolute top-50 left-30" />
                                        </p>
                                        <div className="absolute top-30 lg:top-50 left-20 lg:left-36">
                                            <p className=" text-white text-sm mt-1">Address</p>
                                            <p className="text-white text-sm">58 Hullbrook Road,</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <p className="px-11 lg:px-20  flex  justify-center items-center">
                                            <PiCircleThin className="w-14 h-14 text-[#FB8053]" />
                                            <FaPhone className="text-[#FB8053] absolute top-50 left-30" />
                                        </p>
                                        <div className="absolute top-30  lg:top-50 left-56 lg:left-96">
                                            <p className=" text-white text-sm ml-7 mt-1">Phone</p>
                                            <p className="text-white text-sm ml-7 ">+9983837930</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-center ml-28 mr-20 lg:ml-28  mt-3 lg:mt-20  text-white text-lg">
                                        Follow Us On
                                    </p>
                                    <div className="grid grid-cols-4 pl-16 lg:pl-36 lg:mt-10  m-3.5 lg:m-2 cursor-pointer relative">
                                        <div className="border border-[#FB8053] rounded-full  flex justify-center items-center w-[30px] h-[30px] mt-2">
                                            <ImFacebook size={16} color="#FB8053" />
                                        </div>
                                        <div className="border border-[#FB8053] rounded-full  flex justify-center items-center w-[30px] h-[30px] mt-2">
                                            <FaTwitter size={16} color="#FB8053" />
                                        </div>
                                        <div className="border border-[#FB8053] rounded-full  flex justify-center items-center w-[30px] h-[30px] mt-2">
                                            <AiFillInstagram size={16} color="#FB8053" />
                                        </div>
                                        <div className="border border-[#FB8053] rounded-full  flex justify-center items-center w-[30px] h-[30px] mt-2">
                                            <IoLogoWhatsapp size={16} color="#FB8053" />
                                        </div>
                                        {/* <p className="mt-3 justify-center items-center">
                        <ImFacebook className="absolute bottom-3  left-20 lg:left-40  text-[#FB8053]" />
                        <PiCircleThin className="w-9 h-10 text-white" />
                      </p> */}
                                        {/* <p className="mt-3 justify-center items-center ">
                        <FaTwitter className="absolute bottom-3 right-32 lg:right-52  text-[#FB8053]" />
                        <PiCircleThin className="w-9 h-10 text-white" />
                      </p>
                      <p className="mt-3 justify-center items-center">
                        <AiFillInstagram className="absolute bottom-3 right-20 lg:right-32 text-[#FB8053]" />
                        <PiCircleThin className="w-9 h-10 text-white" />
                      </p>
                      <p className="mt-3 justify-center items-center">
                        <IoLogoWhatsapp className="absolute bottom-3 right-6 lg:right-12 text-[#FB8053]  hover:text-white " />
                        <PiCircleThin className="w-9 h-10 text-white " />
                      </p> */}
                                    </div>
                                </div>
                                <div>
                                    <p className="lg:mt-10 mt-5 text-center ml-10 lg:ml-20 text-[14px] text-white capitalize font-medium">
                                        for any Query Call for this emergency
                                    </p>
                                    <div className="flex">
                                        <p className="mt-4 lg:mt-5 flex px-20 lg:px-44 justify-center items-center">
                                            <PiCircleThin className="w-14 h-14 text-[#FB8053]" />
                                            <FaPhone className="text-[#FB8053] absolute top-50 left-30" />
                                        </p>
                                        <div className="absolute bottom-3 left-32 lg:left-56 ">
                                            <p className=" text-white text-sm ml-5 lg:ml-7 capitalize">
                                                emergency Phone
                                            </p>
                                            <p className="text-white text-sm ml-7 ">+9983837930</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <NewsLetter />
                        <ContactMap />
                        <HelpCenter />
                        <ImageSection />
                    </div>
                </div>
            </UseMaxWidth>
        </>
    );
};

export default ContactPage;