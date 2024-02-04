import React from 'react';
import img from "../../../assets/images/latestReview/review.png";

const LatestReview = () => {
    return (
        <div className="w-[350px] lg:w-[404px] h-[300px] lg:h-[346px] border bg-white lg:mt-5 mt-3 lg:m-10 m-5">
            <div className=" text-start px-10 flex mt-10  justify-between">
                <p className="capitalize  text-[16px]"> latest Review</p>
                <p className="text-black opacity-70  text-[10px]">20 Review Daily</p>
            </div>
            <div className="text-start px-10 mt-10  ">
                <div className="relative">
                    <div className="flex ">
                        <img src={img} className="w-[60px] h-[60px]" />
                        <p className="text-[14px] lg:px-4 px-3">John Antony</p>
                        <p className="text-black opacity-70 text-[10px] lg:ml-20 ml-10">
                            20th Dec,2023
                        </p>
                    </div>
                    <div className="absolute bottom-0 right-0 lg:top-7 top-6 ">
                        <p className="text-[8px] lg:w-[248px] w-[200px] ">
                            Lorem ipsum is a placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without relying on
                            meaningful content.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-start px-10 mt-10  ">
                <div className="relative">
                    <div className="flex ">
                        <img src={img} className="w-[60px] h-[60px]" />
                        <p className="text-[14px] lg:px-4 px-3">John Antony</p>
                        <p className="text-black opacity-70 text-[10px] lg:ml-20 ml-10">
                            20th Dec,2023
                        </p>
                    </div>
                    <div className="absolute bottom-0 right-0 lg:top-7 top-6">
                        <p className="text-[8px] lg:w-[248px] w-[200px] ">
                            Lorem ipsum is a placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without relying on
                            meaningful content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestReview;