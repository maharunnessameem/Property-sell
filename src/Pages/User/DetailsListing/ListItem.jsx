import { Option, Select } from '@material-tailwind/react';
import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const ListItem = () => {
    return (
        <>
            <div className="mt-5">
                <div className="flex w-[350px] lg:w-[1267px] lg:h-[122px] border bg-white  lg:m-10  m-3">
                    <div className="relative grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 lg:p-10 p-7 ">
                        <div className="w-72">
                            <Select label="Category">
                                <Option>Apartments</Option>
                                <Option>House</Option>
                                <Option>Vills</Option>
                            </Select>
                        </div>
                        <div className="w-72">
                            <Select label="Location">
                                <Option>Buenos Aires,Arg</Option>
                                <Option>Brooklyn</Option>
                                <Option>Manhattan</Option>
                                <Option>Queens</Option>
                            </Select>
                        </div>
                        <div className="w-72">
                            <Select label="Property type">
                                <Option>Single-family home</Option>
                                <Option>Multifamily</Option>
                                <Option>Detached house</Option>
                                <Option>Townhome</Option>
                            </Select>
                        </div>
                        <div className="w-72">
                            <Select label="Area Form">
                                <Option>ABC</Option>
                                <Option>DEF</Option>
                                <Option>Detached house</Option>
                                <Option>Townhome</Option>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListItem;