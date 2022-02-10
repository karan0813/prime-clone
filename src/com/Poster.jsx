import React from 'react';

const Poster = () => {
    return <div className="  h-fit  md:flex justify-center ">
        <div className=" bg-[#000000] h-auto md:w-1/2 text-white md:pl-14 md:pt-20 pb-10 space-y-2 p-5">
            <h1 className="md:text-5xl text-4xl	px-5">Welcome to Prime Video</h1>
            <h3 className="md:text-2xl text-xl px-5">Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</h3>
            <button className="bg-blue-500 mx-5 px-5 py-3 rounded-sm md:ml-4 ">Start your 30-Day free trail</button>
            <p className=" md:ml-4 ml-5">With select credit or debit cards</p>
        </div>
        <div className=" bg-no-repeat bg-cover h-52	 md:h-auto md:w-1/2 w-full bg-[url('https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg')]">

        </div>
    </div>;
};

export default Poster;
