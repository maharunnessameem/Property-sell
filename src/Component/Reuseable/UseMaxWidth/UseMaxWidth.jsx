import React from 'react';

const UseMaxWidth = ({ children }) => {
    return (
        <div className="max-w-[1440px] mx-auto ">{children}</div>
    );
};

export default UseMaxWidth;