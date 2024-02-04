import React, { useState } from 'react';
import UseMaxWidth from '../Reuseable/UseMaxWidth/UseMaxWidth';



import { IoNotifications } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import UseModal from '../Reuseable/UseModal/UseModal';



const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    const [openModal, setOpenModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const isLogged = false;
    const [selectAria, setSelectAria] = useState("false");
    return (
        <div className="sticky top-0 z-50 bg-white">

            <UseMaxWidth>
                <div className="mx-auto h-[80px] flex justify-between items-center px-10 lg:px-20">
                    <div className="flex gap-1">
                        <div className="flex shrink-0 gap-1">
                            <RiHomeLine className="w-8 h-8 text-[#FB8053]" />
                            <h1 className="text-[#FB8053] text-xl font-bold not-italic m-1 gap-4">
                                Estatery
                            </h1>
                        </div>
                        <div className="hidden md:flex px-6 space-x-2 gap-12 justify-between items-center">
                            <ul className="flex items-center gap-12 text-base font-medium text-black ">
                                <li className="space-x-2 hover:underline hover:duration-300">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="space-x-2 hover:underline hover:duration-300">
                                    <Link to="detailsListing">Listing</Link>
                                </li>
                                <li className="space-x-2 hover:underline hover:duration-300">
                                    <Link to="agents">Agents</Link>
                                </li>
                                <li className="space-x-2 hover:underline hover:duration-300">
                                    <Link to="about">About Us</Link>
                                </li>

                                <li className="space-x-2 hover:underline hover:duration-300 active:text-indigo-600">
                                    <Link to="contactDetails">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {isLogged == false ? (
                        <div className="hidden md:flex">
                            <button
                                onClick={() => {
                                    setOpenModal(true);
                                    setIsLogin(true);
                                }}
                                className="border text-center gap-2.5   font-semibold px-11 rounded-lg  p-2 m-2 hover:bg-[#FB8053] hover:text-white ring-1 ring-[#FB8053] ring-inset  "
                            >
                                <span>Login</span>
                            </button>

                            <button
                                onClick={() => {
                                    setOpenModal(true);
                                    setIsLogin(false);
                                }}
                                className="border text-white gap-2.5 bg-[#FB8053] hover:bg-white hover:text-black text-center font-semibold p-2 m-2 px-11 rounded-lg ring-1 ring-[#FB8053] ring-inset"
                            >
                                <span>Sign Up</span>
                            </button>
                        </div>
                    ) : (
                        <div className="flex relative ml-3">
                            <div className="py-2 px-5 cursor-pointer">
                                <IoNotifications className="w-[23px] h-[23px] text-[#777777]" />
                            </div>

                            <div className="relative cursor-pointer rounded-full justify-center items-center">
                                <button
                                    type="button"
                                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                >
                                    {/* <img
                      src={profile}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full"
                    /> */}
                                </button>
                            </div>
                            {/* <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div> */}
                        </div>
                    )}

                    <div className="md:hidden cursor-pointer" onClick={handleClick}>
                        {toggle ? (
                            <p>
                                <IoClose />
                            </p>
                        ) : (
                            <p>
                                <IoMenu />
                            </p>
                        )}

                        <div
                            className={
                                toggle
                                    ? "absolute z-10 right-0 mt-3  p-10  px-10 w-full  bg-white  md:hidden"
                                    : "hidden"
                            }
                        >
                            <ul className="cursor-pointer">
                                <li className="p-4 space-y-4 hover:text-[#FB8053] text-xl not-italic  active:text-[#FB8053]">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="p-4  space-y-4 hover:text-[#FB8053] text-xl not-italic">
                                    <Link to="detailsListing">Listing</Link>
                                </li>
                                <li className="p-4 space-y-4  hover:text-[#FB8053] text-xl not-italic">
                                    <Link to="agents">Agents</Link>
                                </li>
                                <li className="p-4 space-y-4 hover:text-[#FB8053] text-xl not-italic">
                                    <Link to="about">About Us</Link>
                                </li>
                                <li className="p-4 space-y-4 hover:text-[#FB8053] text-xl not-italic">
                                    <Link to="contactDetails">Contact</Link>
                                </li>
                            </ul>

                            <div className="flex flex-col my-4 gap-4">
                                <button
                                    onClick={() => {
                                        setOpenModal(true);
                                        setIsLogin(true);
                                    }}
                                    className=" border text-center gap-2.5   font-semibold px-11 rounded-lg  p-2 m-2 hover:bg-[#FB8053] hover:text-white "
                                >
                                    <span>Login</span>
                                </button>

                                <button
                                    onClick={() => {
                                        setOpenModal(true);
                                        setIsLogin(false);
                                    }}
                                    className="border text-white gap-2.5 bg-[#FB8053] hover:bg-white hover:text-black text-center font-semibold p-2 m-2 px-11 rounded-lg"
                                >
                                    <span>Sign Up</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </UseMaxWidth>
            <UseModal isModalOpen={openModal} setIsModalOpen={setOpenModal}>
                {/* <LoginSignModal isLogin={isLogin} setIsLogin={setIsLogin} /> */}
            </UseModal>
        </div>
    );
};

export default Header;