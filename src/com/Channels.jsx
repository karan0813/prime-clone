import React from 'react';

const Channels = () => {
    return <div className="lg:flex md:flex  h-fit px-12 md: my-20">
        <div className=" md:w-1/2  w-full ">
            <h1 className="md:text-5xl text-3xl">Your favorite channels all in one place</h1>
            <h3 className="pt-6 md:text-2xl text-xl  font-sans">With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</h3>
        </div>
        {/* grid */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4	lg:ml-10">
            <div className="mr-2    "><img className="object-contain pb-2  lg:hover:h-36 ease-in duration-300	  w-full md:h-32" src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg' alt='...' /></div>
            <div className='mr-2'><img className="object-contain w- pb-2 lg:hover:h-36 ease-in duration-300  w-full md:h-32" src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg' alt='...' /></div>
            <div className='mr-2'><img className="object-contain w- pb-2 lg:hover:h-36 ease-in duration-300  w-full md:h-32" src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg' alt='...' /></div>
            <div className='mr-2'><img className="object-contain w- pb-2  lg:hover:h-36 ease-in duration-300 w-full md:h-32" src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg' alt='...' /></div>
            <div className='mr-2'><img className="object-contain w- pb-2 lg:hover:h-36 ease-in duration-300 w-full md:h-32" src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg' alt='...' /></div>
            <div className='mr-2'><img className="object-contain w- pb-2  lg:hover:h-36 ease-in duration-300 w-full md:h-32" src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg' alt='...' /></div>
            <div className='mr-2'><img className="object-contain w- pb-2 lg:hover:h-36 ease-in duration-300 w-full md:h-32" src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/ShortsTV-426X2944_V1.jpg' alt='...' /></div>
            <div className='mr-2'><img className="object-contain w- pb-2  lg:hover:h-36 ease-in duration-300 w-full md:h-32" src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg' alt='...' /></div>
        </div>

    </div>;
};

export default Channels;
