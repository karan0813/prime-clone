import React from 'react'
import Categorie from './Categorie'

const Categories = ({ setenter }) => {
    return (
        <div className="w-full h-96  bg-[#0F171E] flex " >
            <div className="md:flex flex-col justify-center w-1/2 items-center  hidden">
                <h1 className=" my-3 font-bold text-white">Top categories</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-3 gap-x-3">
                    <Categorie />
                    <Categorie />
                    <Categorie />
                    <Categorie />
                    <Categorie />

                </div>
            </div>

            <div className="w-0  h-full border-gray-600 border   " ></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-7 m-3 text-white" onClick={() => { setenter(false) }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>

            <div className='lg:flex justify-center items-center w-1/2'>

                <div className=" lg:mb-12">
                    <h1 className="text-white font-bold md:ml-3 mt-5">Audio languages</h1>
                    <div className="flex space-x-4">
                        <div className="m-3  space-y-2">
                            <p className="text-gray-500 font-semibold">English</p>
                            <p className="text-gray-500 font-semibold">Hindi</p>
                            <p className="text-gray-500 font-semibold">Telugu</p>
                            <p className="text-gray-500 font-semibold">Tamil</p>
                            <p className="text-gray-500 font-semibold">Kannada</p>
                        </div>
                        <div className="m-3  space-y-2">
                            <p className="text-gray-500 font-semibold">Malyalam</p>
                            <p className="text-gray-500 font-semibold">Punjabi</p>
                            <p className="text-gray-500 font-semibold">Marathi</p>
                            <p className="text-gray-500 font-semibold">Bengali</p>
                            <p className="text-gray-500 font-semibold">Gujarati</p>
                        </div>
                    </div>
                </div>
                <div className="lg:m-6">
                    <h1 className="m-3 text-white font-bold ">Other Categories</h1>
                    <div className="m-3 space-y-2 lg:block md:flex  md:space-x-6 lg:space-x-0">
                        <div className="space-y-2">
                            <p className="text-gray-500 font-semibold">Drama</p>
                            <p className="text-gray-500 font-semibold">Action and adventure</p>
                            <p className="text-gray-500 font-semibold">Romance</p>
                            <p className="text-gray-500 font-semibold">Comedy</p>
                        </div>
                        <div className="space-y-2 hidden md:block">
                            <p className="text-gray-500 font-semibold">Suspense</p>
                            <p className="text-gray-500 font-semibold">Horrer</p>
                            <p className="text-gray-500 font-semibold">Award Winning</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Categories