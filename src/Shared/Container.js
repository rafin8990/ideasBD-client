import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1500px] mx-auto w-full md:text-left px-10 md:px-20 pt-32 pb-2'>
            {children}
        </div>
    );
};

export default Container;