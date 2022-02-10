import React from 'react';

const Navbar = () => {
    return <>
        <nav className="bg-[#19232D] w-full h-18">
            <div className="flex justify-between w-full items-center px-8">
                <img className="object-contain w-40 h-15" src="https://logos-world.net/wp-content/uploads/2020/11/Google-Play-Logo-2015-2016.png" alt="..." />
                <div className=" md:flex  items-center space-x-1 hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <h1 className=" text-gray-400 cursor-pointer">EN</h1>
                    <h1 className='px-4 text-gray-400   font-bold text-lg cursor-pointer'>Sign-In</h1>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400  md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
            </div>
        </nav>

    </>;
};

export default Navbar;
