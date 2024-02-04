import React from 'react';

const ResponsiveSearch = () => {
    return (
        <div className="max-w-[500px] sm:h-[290px] h-[400px] bg-[#C8BCAF] bg-opacity-80 sm:mr-5 mr-2 sm:px-8 px-6 py-4 lg:hidden block rounded sm:w-[400px]">

            <div className='mb-2'>
                <div className="w-[200px] max-h-[55px]  ">
                    <label className="max-w-[64px] max-h-[21px] font-normal text-sm text-[#001619]">
                        Category
                    </label>
                    <select className="max-h-[30px] border-[#C8BCAF] bg-white bg-opacity-80 sm:w-[285px]  w-[250px] p-1 rounded">
                        <option
                            className="bg-[#C8BCAF] bg-opacity-80"
                            value="apartments"
                        >
                            Apartments
                        </option>
                        <option
                            className="bg-[#C8BCAF] bg-opacity-80"
                            value="houses"
                        >
                            Houses
                        </option>
                        <option
                            className="bg-[#C8BCAF] bg-opacity-80"
                            value="villas"
                        >
                            Villas
                        </option>
                    </select>
                </div>

                <div className="w-[200px] max-h-[55px]">
                    <label className="max-w-[59px] max-h-[21px] font-normal text-sm text-[#001619]">
                        Location
                    </label>
                    <select className="max-h-[30px] border-[#C8BCAF] bg-white bg-opacity-80 sm:w-[285px] w-[250px] p-1 rounded">
                        <option
                            className="bg-[#C8BCAF] bg-opacity-80"
                            value="brooklyn"
                        >
                            Brooklyn
                        </option>
                        <option
                            className="bg-[#C8BCAF] bg-opacity-80"
                            value="manhattan"
                        >
                            Manhattan
                        </option>
                        <option
                            className="bg-[#C8BCAF] bg-opacity-80"
                            value="queens"
                        >
                            Queens
                        </option>
                        <option
                            className="bg-[#C8BCAF] bg-opacity-80"
                            value="staten island"
                        >
                            Staten Island
                        </option>
                        <option
                            className="bg-[#C8BCAF] bg-opacity-80"
                            value="the bronx"
                        >
                            The Bronx
                        </option>
                    </select>
                </div>

                <div className='grid grid-cols-2'>
                    <div className="max-w-[41px] max-h-[55px]">
                        <label className="max-w-[40px] max-h-[21px] font-normal text-sm text-[#001619]">
                            Room
                        </label>
                        <select className="max-h-[30px] border-[#C8BCAF] bg-white bg-opacity-80 w-[118px] p-1 rounded">
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                5
                            </option>
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                4
                            </option>
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                2
                            </option>
                        </select>
                    </div>

                    <div className="max-w-[41px] max-h-[55px]">
                        <label className="max-w-[40px] max-h-[21px] font-normal text-sm text-[#001619]">
                            Bath
                        </label>
                        <select className="max-h-[30px] border-[#C8BCAF] bg-white bg-opacity-80 w-[118px] p-1 rounded">
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                5
                            </option>
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                4
                            </option>
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                2
                            </option>
                        </select>
                    </div>

                    <div className="max-w-[82px] max-h-[55px]">
                        <label className="max-w-[56px] max-h-[21px] font-normal text-sm text-[#001619]">
                            Min Area
                        </label>
                        <select className="max-h-[30px] border-[#C8BCAF] bg-white bg-opacity-80 w-[118px] p-1 rounded">
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                2500
                            </option>
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                2400
                            </option>
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                2300
                            </option>
                        </select>
                    </div>
                    <div className="max-w-[96px] max-h-[55px]">
                        <label className="max-w-[60px] max-h-[21px] font-normal text-sm text-[#001619]">
                            Max Area
                        </label>
                        <select className="max-h-[30px] border-[#C8BCAF] bg-white bg-opacity-80 w-[118px] p-1 rounded">
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                25000
                            </option>
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                24000
                            </option>
                            <option className="bg-[#C8BCAF] bg-opacity-80" value="">
                                23000
                            </option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="max-w-[150px] max-h-[36px] bg-[#FB8053] px-2 rounded justify-center items-center mx-[60px]">
                <button className="text-white lg:max-w-[145px] lg:max-h-[24px] text-sm font-bold text-center py-2">
                    Browse Properties
                </button>
            </div>
        </div>
    );
};

export default ResponsiveSearch;