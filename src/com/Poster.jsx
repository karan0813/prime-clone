import React from 'react';

const Poster = ({ imgUrl, tittle, subt, btn, dis, order1 }) => {
    return <>
        {order1 ? <div className="  h-fit sm:h-full  md:flex justify-center border-0	 ">
            <div className=" bg-no-repeat bg-cover h-52	 md:h-auto md:w-1/2 w-full border-0	 ">
                <img className='border-0 object-fill h-full w-full' src={imgUrl} alt='..' />

            </div>
            <div className=" bg-[#000000] h-auto md:w-1/2 text-white md:pl-14 md:pt-32 pb-10 space-y-2 p-5 border-0">
                <h1 className="md:text-5xl text-4xl	px-5">{tittle}</h1>
                <h3 className="md:text-2xl text-xl px-5">{subt}</h3>
                <button className="bg-blue-500 mx-5 px-5 py-3 rounded-sm md:ml-4 md:w-64 w-44 ">{btn}</button>
                {dis ? <p className=" md:ml-4 ml-5">With select credit or debit cards</p> : ""}
            </div>

        </div> : <div className="  h-fit sm:h-full  md:flex justify-center border-0	 ">
            <div className=" bg-[#000000] h-auto md:w-1/2 text-white md:pl-14 md:pt-28 pb-10 space-y-2 p-5 border-0">
                <h1 className="md:text-5xl text-4xl	px-5">{tittle}</h1>
                <h3 className="md:text-2xl text-xl px-5">{subt}</h3>
                <button className="bg-blue-500 mx-5 px-5 py-3 rounded-sm md:ml-4 md:w-64 w-44  ">{btn}</button>
                {dis ? <p className=" md:ml-4 ml-5 ">With select credit or debit cards</p> : ""}
            </div>
            <div className=" bg-no-repeat bg-cover h-52	 md:h-auto md:w-1/2 w-full border-0	 ">
                <img className='border-0 object-fill  h-full w-full' src={imgUrl} alt='..' />

            </div>
        </div>}
    </>
};

export default Poster;
