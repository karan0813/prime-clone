import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Categories from './Categories'
import { auth } from "../firebase"
import { useDispatch } from 'react-redux';
import { deletuser, selectuser } from "../features/user/userSlice"
import { useSelector } from 'react-redux';

const Navbar = () => {
    const history = useHistory()
    const dispetch = useDispatch()
    const [enter, setenter] = useState(false)
    const [profile, setprofile] = useState(false)
    const [Catag, setCatag] = useState(false)

    const signOut = () => {
        //logout
        auth.signOut().then(function () {

            dispetch(deletuser({

                username: null
            }))



            history.push("/")
        }).catch(function (error) {
            console.log("no");
        });

    }


    return (
        <>
            <div className="w-full h-20 bg-[#19232D] flex items-center justify-between">
                <div className="flex items-center ">

                    <img className='object-contain w-32 h-15' src="https://logos-world.net/wp-content/uploads/2020/11/Google-Play-Logo-2015-2016.png" alt=".." />
                    <ul className="md:flex items-center text-white ml-6 mt-2 space-x-3 hidden">
                        <li className='text-gray-400 font-bold cursor-pointer'>Home</li>
                        <li className='text-gray-400 font-bold cursor-pointer'>TV Shows</li>
                        <li className='text-gray-400 font-bold cursor-pointer'>Movies</li>
                        <li className='text-gray-400 font-bold cursor-pointer' onMouseEnter={() => { setenter(false) }}>Channels</li>
                        <li className='text-gray-400 font-bold cursor-pointer' onMouseEnter={() => { setenter(true) }}>Categories</li>
                        <svg xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => { setenter(true) }} onClick={() => { setenter(false) }} className=" h-24  w-5 mr-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </ul>
                    <div className=" lg:w-72  bg-[#19232D] h-20 lg:flex-1 hidden lg:block md:block" onMouseEnter={() => { setenter(false) }} ></div>

                    <h1 className="text-gray-300 ml-2 md:hidden">Browse</h1>
                    {!Catag ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { setCatag(true) }} className="h-5 w-5 text-white md:hidden" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { setCatag(false) }} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>}

                </div>

                <div className=" ">
                    <div className="flex items-center space-x-3 pr-6 ">
                        <div className="lg:border lg:border-gray-400 flex p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input className=" lg:inline-block hidden outline-none pl-2 text-white w-60 bg-[#19232D]" type="text" placeholder='Search..' />
                        </div>
                        <img alt='...' onClick={() => { setprofile(true) }} className=" w-8 h-9 rounded-full object-cover" src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" />
                        <h1 className="text-gray-300 font-mono hidden md:block">Karan...</h1>
                        {!profile ? <button  ><svg onClick={() => { setprofile(true) }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white  md:block" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg> </button> : <button ><svg onClick={() => { setprofile(false) }} xmlns="http://www.w3.org/2000/svg" className="text-white  h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg> </button>}


                    </div>

                </div>

            </div>
            {/* catg */}
            {Catag ? <ul className="  text-white    ">
                <li className='text-gray-400 font-bold cursor-pointer bg-[#252E39] pl-3 py-4 hover:border'>Home</li>
                <li className='text-gray-400 font-bold cursor-pointer bg-[#252E39] pl-3 py-4 hover:border'>TV Shows</li>
                <li className='text-gray-400 font-bold cursor-pointer bg-[#252E39] pl-3 py-4 hover:border'>Movies</li>
                <li className='text-gray-400 font-bold cursor-pointer bg-[#252E39] pl-3 py-4 hover:border' onMouseEnter={() => { setenter(false) }}>Channels</li>
                <li className='text-gray-400 font-bold cursor-pointer bg-[#252E39] pl-3 py-4 hover:border' onMouseEnter={() => { setenter(true) }}>Categories</li>

            </ul> : ""}
            {enter ? <Categories /> : ""}

            {/* profile */}
            {profile ? <div className=" z-50 lg:w-1/3 md:w-full md:relative md:top-0 md:right-0 md:rounded-none h-60 bg-slate-800 lg:absolute lg:right-5 lg:rounded-md shadow-lg lg:top-16 flex ">
                <div className="w-1/2 m-5 space-y-3">
                    <p className="text-gray-400 font-bold">Your Watchlist</p>
                    <p className="text-gray-400 font-bold">Account & Settings</p>
                    <p className="text-gray-400 font-bold"> Watch Anywhere</p>
                    <p className="text-gray-400 font-bold">Help</p>
                    <p className="text-gray-400 font-bold cursor-pointer" onClick={() => { signOut() }}>Sign Out</p>

                </div>
                <div className="border bg-slate-400 h-52 mt-5  z-50"></div>
                <div className="w-1/2 z-50">
                    <div className="m-5 space-x-3 z-50">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src='https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-2.png' />
                        <span className="text-white font-medium">Test</span>
                    </div>
                    <div className="m-5 space-x-3">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src='https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-3.png' />
                        <span className="text-white font-medium">MI Tv</span>
                    </div>
                    <div className="m-5 space-x-3">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src='https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png' />
                        <span className="text-white font-medium">Kids</span>
                    </div>
                    <div className="ml-5">
                        <h1 className="text-white font-medium">Manage Profile</h1>
                        <h1 className="text-white font-medium">Lern More</h1>

                    </div>


                </div>
            </div> : ""}
            {/* Hover */}
            {/* {enter ? <Categories /> : ""} */}


        </>
    )
}

export default Navbar