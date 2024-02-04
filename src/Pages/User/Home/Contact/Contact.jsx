import React, { useState } from 'react';
import UseMaxWidth from '../../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import PhoneInput from 'react-phone-input-2';
import image from "../../../../assets/images/contact/home.png"

const Contact = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [valid, setValid] = useState("true");
    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };
    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    };
    return (
        <div className="lg:px-20">
            <UseMaxWidth>
                <div className="mt-10  md:mt-5">
                    <h1 className="text-3xl not-italic capitalize leading-9 ml-3">
                        Make an <span className="text-[#FB8053]"> enquiry</span>
                    </h1>
                    <p className="text-sm leading-5 w-[340px] lg:w-[402px] h-[42px] text-[#777777] mt-8 break-words ml-2">
                        Save your time and easily rent or sell your property with the lowest
                        commission on the real estate market.
                    </p>
                </div>
                <div>
                    <div className="mt-5 grid lg:grid-cols-2 gap-5 lg:gap-5">
                        <div className="relative">
                            <img src={image} className="w-full h-full" />
                            <div className="absolute lg:left-[80px] lg:top-[40%] left-[20px] top-[20%]">
                                <h1 className="text-white font-bold text-6xl lg:leading-[80px] leading-[50px] shadow-md">
                                    Discover a new way of living
                                </h1>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div>
                                <div>
                                    <h1 className="lg:text-4xl text-xl  leading-4  font-normal lg:leading-10 ml-3  ">
                                        Let’s level up
                                        <span className="text-[#FB8053]"> your brand</span> ,
                                        together
                                    </h1>
                                </div>
                                <div className="mt-4 gap-6 lg:ml-2 ml-3 lg:p-2.5">
                                    <p className=" lg:text-xl font-normal text-[#475467]">
                                        You can reach us anytime via
                                        <span className="lg:text-xl font-normal text-[#FB8053]">
                                            hi@untitledui.com
                                        </span>
                                    </p>
                                </div>
                                <div className="mt-3 flex flex-col items-start gap-8 ">
                                    <form className="gap-8 lg:ml-2">
                                        <div>
                                            <div className="flex gap-3">
                                                <div className="gap-2">
                                                    <label
                                                        htmlFor="First-name"
                                                        className="text-sm font-semibold block leading-6 text-[#344054] ml-2"
                                                    >
                                                        First name
                                                    </label>
                                                    <div className="mt-2.5  px-1">
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autocomplete="given-name"
                                                            placeholder="First Name "
                                                            className="bg-[#FFFFFF]  block w-full gap-2 rounded-md border-0  px-1 py-2  lg:px-3 lg:py-2 text-[#667085]  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#667085] sm:text-sm sm:leading-2 "
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="last-name"
                                                        className="block  text-sm font-semibold leading-6 text-[#344054]"
                                                    >
                                                        Last name
                                                    </label>
                                                    <div class="mt-2.5 px-1">
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autocomplete="given-name"
                                                            placeholder="Last Name"
                                                            className="block w-full bg-[#FFFFFF] gap-2 rounded-md border-0  px-1 py-2 lg:px-3.5 lg:py-1.5 text-[#667085] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#667085]   sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="gap-2 mt-2">
                                                <label
                                                    htmlFor="Email"
                                                    className="block text-sm font-semibold leading-6 text-[#344054] ml-2"
                                                >
                                                    Email
                                                </label>
                                                <div className="mt-2.5 px-1">
                                                    <input
                                                        type="text"
                                                        name="Email"
                                                        id="Email"
                                                        autocomplete="given-email"
                                                        placeholder="you@company.com"
                                                        className="bg-[#FFFFFF] w-full block gap-2  rounded-md border-0 px-1 py-2 lg:px-2 lg:py-2.5 text-[#667085]  shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-[#667085]  sm:text-sm sm:leading-4"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2 gap-2  mt-2 rounded ">
                                                <label
                                                    htmlFor="phone-number"
                                                    className="block text-sm font-semibold leading-6 text-[#344054] ml-2"
                                                >
                                                    Phone number
                                                </label>
                                                <div className="ml-2">
                                                    <PhoneInput
                                                        country={"in"}
                                                        value={phoneNumber}
                                                        onChange={handleChange}
                                                        inputProps={{
                                                            required: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2 gap-2 mt-2 ">
                                                <label
                                                    htmlFor="message"
                                                    class="block text-sm font-semibold leading-6 text-[#344054] ml-2"
                                                >
                                                    Message
                                                </label>
                                                <div className="mt-2.5 ml-2">
                                                    <textarea
                                                        name="message"
                                                        id="message"
                                                        rows="4"
                                                        cols="40"
                                                        placeholder="Leave us a message"
                                                        class="block max-h-[120px] text-sm w-full rounded-md border-0 px-2 py-2 text-[#667085] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="mt-4 gap-6">
                                                <button className="mt-5 font-semibold font text-base  justify-center items-center  px-4.5 py-3 gap-8 w-full block border-0 rounded-lg text-white bg-[#FB8053] hover:bg-white hover:text-[#FB8053]  ring-2 ring-[#FB8053] ring-inset">
                                                    Get Started
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UseMaxWidth>
        </div>
    );
};

export default Contact;