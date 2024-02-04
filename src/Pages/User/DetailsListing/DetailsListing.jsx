import React from 'react';
import banner from "../../../assets/images/DetailsListing/banner.png";
import UseMaxWidth from '../../../Component/Reuseable/UseMaxWidth/UseMaxWidth';
import FindHome from '../Home/Sections/Section4/FindHome';
import { ListItem } from '@material-tailwind/react';
import Sidebar from './Sidebar';
import PopularCategory from './PopularCategory';
import RecentProperties from './RecentProperties';
import HelpCenter from './HelpCenter';
import LatestReview from './LatestReview';
import CardList from './CardList';

const DetailsListing = () => {
    return (
        <>

            <UseMaxWidth>
                <div className="bg-[#D9D9D9] lg:w-[1440px] ">
                    <div className="mt-5">
                        <div className="relative">
                            <img
                                src={banner}
                                className="w-[400px] h-[199px] lg:w-[14440px] lg:h-[199px]"
                            />
                            <div className="absolute lg:inset-x-96  left-16 top-20  lg:top-20">
                                <p className="text-white text-center text-[20px]">
                                    PROPERTIES LISTING
                                </p>
                                <p className="text-white text-center text-sm">
                                    Home || Properties Listing
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ListItem />
                    </div>
                    <div>
                        <div className="grid lg:grid-cols-3 sm:grid-cols-1">
                            <div>
                                <Sidebar />
                                <PopularCategory />
                                <RecentProperties />
                                <HelpCenter />
                                <LatestReview />
                            </div>
                            <div className="gap-x-20">
                                <CardList />
                            </div>
                        </div>
                        <div className="mt-5 mb-5">
                            {/* <Pagination /> */}
                        </div>
                    </div>

                    <FindHome />
                </div>
            </UseMaxWidth>
        </>
    );
};

export default DetailsListing;