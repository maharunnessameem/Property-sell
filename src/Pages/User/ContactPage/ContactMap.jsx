import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className=" mt-5 lg:mt-16 ">
                <div className="w-[400px] lg:w-[1440px] h-[300px] lg:h-[700px] bg-white">
                    <p className="text-center pt-5 lg:pt-20 text-[20px] lg:text-[36px] font-bold">
                        Find Us On Google Map
                    </p>
                    <div className="w-[330px] lg:w-[606px] h-[14px]  lg:h-[36px] text-center mt-2 lg:mt-5 mx-auto">
                        <p className="text-[#777] text-sm">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC
                        </p>
                    </div>
                    <div className="lg:mt-6 mt-14">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29519.783495761934!2d91.82452905!3d22.354650699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2766a8247ce5%3A0xe89af28ebcae8e8!2sChittagong%20College!5e0!3m2!1sen!2sbd!4v1706502964346!5m2!1sen!2sbd"
                            className="w-full h-[200px] lg:h-[500px]"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMap;